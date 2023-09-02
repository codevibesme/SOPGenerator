import nodemailer from "nodemailer";
import dotenv from "dotenv";
import OpenAI from "openai";
import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import axios from "axios";

dotenv.config();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function fetchImage(src) {
    const image = await axios
        .get(src, {
            responseType: 'arraybuffer'
        })
        
        return image.data;
    }
    
    const logo = await fetchImage("https://effizient.ca/assets/img/logo.png");
const generateSOP = async (prompt) => {
    const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});
    try{
        const completion = await openai.completions.create({
            model: "text-davinci-003",
            prompt,
            max_tokens: 2048,
            temperature: 0,
        });
        const { text } = completion.choices[0];
        return text;
    }catch(err){
        console.log({message: err.message});
        return 'null';
    }
}
export const sendSop = async (req, res) => {
    try{  
        const {
            full_name,
            age,
            degree,
            email_address,
            Institute_of_higher_level_education,
            previous_study,
            work_experience,
            canada_institute,
            program_of_study_in_Canada,
            user_country,
            future_goals,
            English_Scores_Listening,
            English_Scores_Reading,
            English_Scores_Speaking,
            English_Scores_writing,
            first_tution_fee,
            first_tution_fee_paid,
            gic,
            gic_fee
        }  = await req.body;
        
        const prompt = `
        Write me a  "Statement of Purpose" or a letter of intent for my application to study in Canada, addressing the Visa Officer, High Commission of Canada expressing my enthusiasm for studying in Canada, academic achievements, chosen program of study and future goals.
        Here are my details:
            Name: ${full_name}
            Age: ${age}
            Highest Level of  education: ${degree}
            email address: ${email_address}
            Institute where I completed my higher level of education: ${Institute_of_higher_level_education} 
            What did I study: ${previous_study}
            Do I have any work exprience: ${work_experience}
            What institute did I get admitted to in Canada: ${canada_institute}
            What is my program of study in Canda: ${program_of_study_in_Canada}
            Which country am I applying for: ${user_country}
            What are my future goals: ${future_goals}
            IELTS Scores:
            English Scores - Listening: ${English_Scores_Listening}
            English Scores - Reading: ${English_Scores_Reading}
            English Scores - Speaking: ${English_Scores_Speaking}
            English Scores - writing: ${English_Scores_writing}
            Did I pay my first year tuition fee: ${first_tution_fee}
            How much tuition fee did I pay: ${first_tution_fee_paid}
            Did I do a GIC: ${gic}
            How much did I pay towards GIC:  ${gic_fee}
            
        Generate a response close to this format below, but with the details provided above and alter the content as necessary to match my details.
        From
        Bipasha Roy
        (Address)
        bipasha1413@gmail.com

        To
        Visa Officer
        High Commission of Canada
        Subject: Statement of Purpose for studying Bachelors of Science in Computer Science at ABC University in Canada

        Dear Sir/Madam,

        I am writing this letter to express my genuine enthusiasm and strong desire to pursue higher education in Canada. My name is Bipasha Roy, and at 21 years of age, I am eager to embark on a journey of academic excellence and personal growth in a country known for its world-class education system. I have completed my Grade 12 education with distinction from RKVM, where I focused on Science as my field of study.

        From an early age, I have been captivated by the ever-evolving world of technology and its profound impact on our lives. This fascination has led me to choose a path that aligns perfectly with my passion – a Bachelors of Science in Computer Science. It is with great pride that I share my admission to ABC University, an institution renowned for its exceptional programs and commitment to fostering innovation.

        My journey in the field of Science during my earlier education has equipped me with a strong foundation in critical thinking, problem-solving, and analytical skills. I am eager to build upon this foundation through comprehensive studies in Computer Science. I believe that the program at ABC University will not only provide me with in-depth knowledge but also instill in me the practical skills necessary to excel in this rapidly advancing field.

        With dreams of becoming a skilled and proficient Web Developer, I am enthusiastic about the opportunities that lie ahead. My academic pursuits will be complemented by the invaluable exposure to industry-relevant projects and hands-on experiences that ABC University offers. The dynamic curriculum, coupled with the guidance of experienced faculty, assures me that I will be well-prepared to contribute meaningfully to the world of technology upon completing my studies.

        My dedication to academic excellence is evident in my IELTS scores: Listening (9), Reading (10), Speaking (10), and Writing (9). These scores reflect my proficiency in the English language, essential for success in an international academic environment.

        Financially, I have made substantial investments in my education. I have already paid 10,000 CAD towards the first year's tuition fee, demonstrating my commitment and responsibility. Additionally, I have secured a 5,000 CAD Guaranteed Investment Certificate (GIC) to cover my initial living expenses.

        I would like to assure you of my full compliance with all regulations set forth by the Canadian government, the local authorities, and ABC University. If granted the opportunity to study in Canada, I will dedicate myself to my studies and uphold the reputation of being a responsible and respectful international student.

        My ultimate goal is to evolve into a proficient Web Developer, contributing to technological advancements and innovation globally. I am eager to return to my home country, India, armed with the knowledge and expertise gained in Canada, to make meaningful contributions to the field and society.

        In conclusion, I am sincerely grateful for your time and consideration of my application. Studying in Canada, and particularly at ABC University, is not just an academic pursuit for me; it is a chance to realize my aspirations and carve a path towards a successful and fulfilling career. I kindly request your support and prompt processing of my visa application, as this opportunity means the world to me.

        Thank you for your attention.

        Sincerely,

        Bipasha Roy

        keep all the texts left aligned.
        `;
        // Setting up Nodemailer to send emails from backend
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.email,
                pass: process.env.pass,
            },
        });

        // generating prompt answer
        const text = (await generateSOP(prompt)).toString();
        
        // generating pdf
        const doc = new PDFDocument({size: 'A4'});

        doc.pipe(fs.createWriteStream(path.join(__dirname, `../public/assets/${full_name.split(' ').join('_')}_sop.pdf`)));
        doc
            .image(logo,500, 20, {scale:'0.25', align:'right'})
            .font('Times-Roman')
            .fontSize(12)
            .text(text, {
                align:'left'
            });
            
        doc.save();
        doc.end();

        if(text!=='null'){
            // Creating mail options by setting up reciever details and message
            const mailOptions = {
                from: process.env.email,
                to: email_address,
                subject: "SOP LETTER",
                text: "Please find the attachment of your SOP letter below",
                attachments: [
                    {
                        filename: `${full_name.split(' ').join('_')}_sop.pdf`,
                        path: path.join(__dirname, `../public/assets/${full_name.split(' ').join('_')}_sop.pdf`),
                        contentType: 'application/pdf',
                    },
                ],
            }

            // sending the actual mail
            transporter.sendMail(mailOptions, (error, info) => {
                if(error) console.log(error);
                // deleting the created file
                fs.unlink(path.join(__dirname, `../public/assets/${full_name.split(' ').join('_')}_sop.pdf`), err => {
                    if(err) console.log(err.message);
                });
            });
            return res.status(201).json({message: "Sent"}); 
        } else return res.status(400).json({message: "Couldn't generate SOP"});
        
    } catch(err){
        res.status(400).json({message: err.message});
    }
}
