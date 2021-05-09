const ContactUs = () => {
    return (
        <section className="contact-us">
            <h1>contact-Us</h1>
            <form autoComplete="off">
                <div className="first-name">
                    <lable for="first-name">Your Name</lable>
                    <input type="text" id="first-name" placeholder="Your First Name" autoComplete='off'/>
                </div>
                <div className="last-name">
                    <lable for="last-name">Your Last Name</lable>
                    <input type="text" id="last-name" placeholder="Your Last Name" autoComplete='off'/>
                </div>
                <div className="email">
                    <lable for="email">Your E-mail</lable>
                    <input type="email" id="email" placeholder="Your Email" autoComplete='off'/>
                </div>
                <div className="message">
                    <lable for="message">Your Message</lable>
                    <textarea id='message' rows='10' colums="5" placeholder="Your Message" autoComplete='off'></textarea>
                </div>
                <div className="send">
                    <lable for="send">Send</lable>
                    <input type="submit" id='send' value="Send"/>
                </div>
            </form>
            <div className='help-paragraph'>
                <h2>will we help you?</h2>
                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
                    content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as 
                    their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                    Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
            </div>
        </section>
    );
}
 
export default ContactUs;