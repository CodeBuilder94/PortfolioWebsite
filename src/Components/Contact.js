import React, {useState} from "react";

const Contact =()=>
{
    const [messageName, setMessageName] = useState("");
    const [messageEmail, setMessageEmail]=useState("");
    const [messagebody, setMessageBody]= useState("");

    const send=(formData)=>
    {
        /*const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");
        console.log(`${name} using email ${email} sent ${message}`);*/
        formData.preventDefault();
        console.log(messageName);
    }

    return(
        <>
        <h3>Contact Me</h3>
        <p>Got any questions? Ask away!</p>
        <form id="emailForm" onSubmit={send}>
            <label>Name:</label>
            <input name="name" value={()=>{setMessageName()}}/>
            <label>Email:</label>
            <input name="email" type="email" value={()=>{setMessageEmail()}}/>
            <label>Message:</label>
            <textarea placeholder="Type your message here." name="message" value={()=>{setMessageBody()}}/>
            <button type="submit">Send</button>
        </form>
        </>
    )
}

export default Contact;