import emailjs from '@emailjs/browser';

const sendEmail = async(templateParams)=>
{
    emailjs.send("service_fihwfeb","template_j2cwarb",templateParams,"r5zDZhKCjRABfqKS9")
    .then((responce)=>{
        console.log(`Email Sent!: ${responce}`);
    })
    .catch((error)=>
    {
        console.error(`Error: ${error}`);
    })
}

export default sendEmail;