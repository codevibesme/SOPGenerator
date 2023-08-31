import nodemailer from "nodemailer";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

const generateSOP = async (prompt) => {
    try{
        const completion = await openai.completions.create({
            model: "text-davinci-003",
            prompt,
            max_tokens: 4096-306,
            temperature: 1,
        });
        const { text } = completion.choices[0];
        return text;
        // return text;
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

            Write the letter in proper format officially, make the letter long with relevant details and atmost 3 paragraphs.
        `;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.email,
                pass: process.env.pass,
            },
        });

        const text = (await generateSOP(prompt)).toString();
        console.log(text);
        if(text!=='null'){
        const mailOptions = {
            from: process.env.email,
            to: email_address,
            subject: "SOP LETTER",
            text,
            }
            transporter.sendMail(mailOptions, (error, info) => {
                if(error) console.log(error);
                else console.log(info);
            });
            return res.status(201).json({message: "Sent"}); 
        } else return res.status(400).json({message: "Couldn't generate SOP"});
        
    } catch(err){
        res.status(400).json({message: err.message});
    }
}
