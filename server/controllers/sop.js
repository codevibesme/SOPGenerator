import nodemailer from "nodemailer";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

const generateSOP = async () => {
    try{
        const completion = await openai.completions.create({
            model: "text-davinci-003",
            prompt: "Write an introductory speech for me, I am soham malakar, student of netaji subhash engineering college, pursing btech in cse. my hobbies are coding and learning new technology. add relevant skils to my speech and make it appealing and impactful",
            max_tokens: 2048,
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
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.email,
                pass: process.env.pass,
            },
        });

        const text = (await generateSOP()).toString();

        if(text!=='null'){
        const mailOptions = {
            from: process.env.email,
            to: req.body.to,
            subject: req.body.subject,
            text,
            }
            transporter.sendMail(mailOptions, (error, info) => {
                if(error) console.log(error);
            });
            return res.status(201).json({message: "Sent"}); 
        } else return res.status(400).json({message: "Couldn't generate SOP"});
    } catch(err){
        res.status(400).json({message: err.message});
    }
}
