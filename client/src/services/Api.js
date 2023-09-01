import axios from 'axios';

const URL ="http://localhost:8000";

export const addUser = async(data)=>{
    try {
        return await axios.post(`${URL}/sop/generate`,data);
    } catch (error) {
        console.log(" while calling the adduser api",error);
    }
}
