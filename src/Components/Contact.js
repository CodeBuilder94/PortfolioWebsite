import React, {useState} from "react";
import sendEmail from "../email/sendEmail"

const Contact =()=>
{
    const [messageName, setMessageName] = useState("");
    const [messageEmail, setMessageEmail]=useState("");
    const [messagebody, setMessageBody]= useState("");
    const [sendResult, setSendResult]= useState("");

    const send= async(ev)=>
    {
        ev.preventDefault();
                
        //object with the email params
        const templateParams={
            from_name:messageName,
            from_email:messageEmail,
            message: messagebody,
        };

        await sendEmail(templateParams);
        setMessageBody("");
        setMessageEmail("");
        setMessageName("");
    }

    //set the result of the email
    const emailResult =(result) =>{
        if(result=="success")
        {
            setSendResult(result);
        }
        else{
            setSendResult(result);
        }
    }

    return(
        <>
        <h3>Contact Me</h3>
        <p>Got any questions? Ask away!</p>
        <form id="emailForm" onSubmit={send}>
            <label>Name:</label>
            <input name="name" value={messageName} onChange={ev =>{setMessageName(ev.target.value)}}/>
            <label>Email:</label>
            <input name="email" type="email" value={messageEmail} onChange={ev=>{setMessageEmail(ev.target.value)}}/>
            <label>Message:</label>
            <textarea placeholder="Type your message here." name="message" value={messagebody} onChange={ev=>(setMessageBody(ev.target.value))}/>
            <button type="submit">Send</button>
        </form>
        {sendResult =="success"?<p>Message Sent!</p>:<p>Oops... Something went wrong. I'm sorry but the message didn't go through.</p>}
        </>
    )
}

export default {Contact, emailResult};