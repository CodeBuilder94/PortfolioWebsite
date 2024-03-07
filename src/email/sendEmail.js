import emailjs from '@emailjs/browser';
import emailResult from '../Components/Contact';

const sendEmail = async(templateParams)=>
{
    emailjs.send("service_fihwfeb","template_j2cwarb",templateParams,"r5zDZhKCjRABfqKS9")
    .then((responce)=>{
        console.log(`Email Sent!: ${responce}`);
        emailResult("success");
    })
    .catch((error)=>
    {
        console.error(`Error: ${error}`);
        emailResult("fail");
    })
}

export default sendEmail;