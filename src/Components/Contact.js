import React, {useState} from "react";
import sendEmail from "../email/sendEmail"


const Contact =()=>
{
    const [messageName, setMessageName] = useState("");
    const [messageEmail, setMessageEmail]=useState("");
    const [messagebody, setMessageBody]= useState("");
    const [sendResult, setSendResult]= useState("");
    const [Missing, setMissing]=useState(false);
    
    //state to show the user that the email is valid or not
    const [validateEmail, setValidateEmail]= useState("invalid");

    const send= async(ev)=>
    {
        ev.preventDefault();
        if(validateEmail=="valid" && messageName!="" && messagebody!="")
        {
            //object with the email params
            const templateParams={
                from_name:messageName,
                from_email:messageEmail,
                message: messagebody,
            };
            
            await sendEmail(templateParams, setSendResult);
            setMessageBody("");
            setMessageEmail("");
            setMessageName("");

        }
        else{
           setMissing(true);
        }
        
    }

    const checkEmail=(messageEmail)=>
    {
        var check = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if(check.test(messageEmail))
        {
            setValidateEmail("valid");
        }
        else{
            setValidateEmail("invalid");
        }
    }

    return(
        <>
        <div id="contact">
        <h2>Contact Me</h2>
        <p>Got any questions? Ask away!</p>
        <form id="emailForm" onSubmit={send}>
            <label><sup className="flag">*</sup>Name:</label>
            <input name="name" placeholder="Your name" value={messageName} onChange={ev =>{setMessageName(ev.target.value)}}/>
            <label><sup className="flag">*</sup>Email:</label>
            <input name="email" placeholder="@email.com" type="email" value={messageEmail} onChange={ev=>{setMessageEmail(ev.target.value); checkEmail(ev.target.value);}} className={`${validateEmail}`}/>
            <label><sup className="flag">*</sup>Message:</label>
            <textarea placeholder="Type your message here." name="message" value={messagebody} onChange={ev=>(setMessageBody(ev.target.value))}/>
            <button type="submit">Send</button>
        </form>
        </div>
        {sendResult!=""?(sendResult =="success"?<p className="clear">Message Sent!</p>:<p className="flag">Oops... Something went wrong. I'm sorry but the message didn't go through.</p>):null}
        {Missing==true?<p className="flag">Make sure to fill out all fields</p>:null}
        </>
    )
}

export default Contact;