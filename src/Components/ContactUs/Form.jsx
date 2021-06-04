const Form = () => {
    return (
        <form autoComplete="off">
            <div className="first-name">
                <lable for="first-name">Your Name</lable>
                <input type="text" id="first-name" placeholder="Your First Name" autoComplete='off' required="required"/>
            </div>
            <div className="last-name">
                <lable for="last-name">Your Last Name</lable>
                <input type="text" id="last-name" placeholder="Your Last Name" autoComplete='off' required="required"/>
            </div>
            <div className="email">
                <lable for="email">Your E-mail</lable>
                <input type="email" id="email" placeholder="Your Email" autoComplete='off' required="required"/>
            </div>
            <div className="message">
                <lable for="message">Your Message</lable>
                <textarea id='message' rows='10' colums="5" placeholder="Your Message" autoComplete='off' required="required"></textarea>
            </div>
            <div className="send">
                <lable for="send">Send</lable>
                <input type="submit" id='send' value="Send"/>
            </div>
        </form>
    );
}
 
export default Form;