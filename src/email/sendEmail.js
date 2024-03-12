import emailjs from '@emailjs/browser';
import emailResult from '../Components/Contact';

const sendEmail = async(templateParams, setSendResult)=>
{
    emailjs.send("service_fihwfeb","template_j2cwarb",templateParams,"r5zDZhKCjRABfqKS9")
    .then((responce)=>{
        console.log(`Email Sent!: ${responce}`);
        setSendResult("success");
    })
    .catch((error)=>
    {
        console.error(`Error: ${error}`);
        setSendResult("fail");
    })
}

export default sendEmail;