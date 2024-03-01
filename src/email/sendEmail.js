import { Resend } from "resend";

const resend = new Resend("re_5rVKReVv_PHLSN8ZLox8YFMvWcNqzD1cN");//(process.env.RESEND_API_KEY);


const sendEmail = async(name, leadEmail, message)=>
{
    const {data, error} = await resend.emails.send({
        from:'email@tyler.webdev.dev',
        to:[leadEmail],
        subject:'Webdevelopment Lead',
        html:`<h6>Name: ${name}</h6>
        <p><strong>Message</strong>:${message}</p>`

    });
    if(error)
    {
        return console.error({error});
    }
    console.log(data);
}

export default sendEmail;