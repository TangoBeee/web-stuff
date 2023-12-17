import Button from '../Button/Button'
import style from './ContactForm.module.css'
import contactImage from '../../assets/contact.svg'
import {MdEmail, MdMessage, MdPhone} from "react-icons/md"

const ContactForm = () => {

  const onViaSupportChat = () => {
    //TODO("Complete this")
    console.log("via chat")
  }

  const onViaPhoneCall = () => {
    //TODO("Complete this")
    console.log("via phone")
  }

  const onViaEmail = () => {
    //TODO("Complete this")
    console.log("via email")
  }

  const onFormSubmit = (event) => {
    //TODO("Complete this")

    event.preventDefault()
    console.log(event)
  }

  return (
    <section className={`${style.container}`}>
        <div className={`${style.contact_form}`}>
          <div className={`${style.top_buttons}`}>
            <Button onClick={onViaSupportChat} text="VIA SUPPORT CHAT" icon={<MdMessage fontSize={24} />} />
            <Button onClick={onViaPhoneCall} text="VIA CALL" icon={<MdPhone fontSize={24} />} />
          </div>

          <Button onClick={onViaEmail} text="VIA EMAIL FORM" icon={<MdEmail fontSize={24} />} customButton="email_submit_button" />


          <form onSubmit={onFormSubmit}>
            <div className={`${style.form_control}`}>
              <label htmlFor="name">Name</label>
              <input type="text" name='name' required />
            </div>

            <div className={`${style.form_control}`}>
              <label htmlFor="email">Email</label>
              <input type="email" name='email' required />
            </div>

            <div className={`${style.form_control}`}>
              <label htmlFor="message">Message</label>
              <textarea name='message' rows="8" required />
            </div>

            <Button text="Submit" />
          </form>

        </div>

        <div className={`${style.contactImage}`}>
          <img src={contactImage} alt="contact-image" />
        </div>
    </section>
  )
}

export default ContactForm