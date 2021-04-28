import { Button, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import { useForm } from "react-hook-form";
import ContactModel from "../../../Models/ContactModel";
import globals from "../../../Services/Globals";
import notify from "../../../Services/Notification";
import "./ContactUs.css";

function ContactUs(): JSX.Element {
  const { register, handleSubmit, reset, errors } = useForm<ContactModel>();

  async function send(contact: ContactModel) {
    // console.log(contact);

    try {
      const response = await axios.post<ContactModel>(
        globals.urls.contactUs,
        contact
      );
      notify.success(response.data.name + ", your message successfully sent!");
      reset();
    } catch (error) {
      notify.error(error);
    }
  }

  return (
    <div className="ContactUs">
      <div className="Main1">
        <Typography variant="h4" className="HeadMain">
          השאירו הודעה:
        </Typography>
        <br />
        <form onSubmit={handleSubmit(send)}>
          <TextField
            required
            type="text"
            name="name"
            label="שם מלא"
            variant="outlined"
            inputRef={register}
            fullWidth
          />
          <br />
          <br />
          <TextField
            required
            type="text"
            name="phone"
            label="טלפון"
            variant="outlined"
            inputRef={register}
            fullWidth
          />
          <br />
          <br />
          <TextField
            required
            type="email"
            name="email"
            label="דואר אלקטרוני"
            variant="outlined"
            inputRef={register}
            fullWidth
          />
          <br />
          <br />
          <TextField
            required
            multiline
            type="text"
            rows="3"
            name="message"
            label="הודעה"
            variant="outlined"
            inputRef={register}
            fullWidth
          />
          <br />
          <br />
          <Button variant="contained" fullWidth type="submit" color="primary">
            שלח
          </Button>
        </form>
      </div>
      <div className="Main2">
        <Typography variant="h4" className="HeadMain">
          צרו קשר:
        </Typography>
        <br />
        <br />
        <span>נשמח לעמוד לשירותכם בכל נושא ושאלה!</span>
        <br />
        <br />
        <p>אימייל: SHOEmestyle!@mail.com </p>
        <p>טלפון: 051-23456789 </p>
        <p>כתובת: רחוב נעליים 7, תל נעליים, ישראל </p>
        <p>שעות פעילות: ימים א׳ - ה׳ בשעות 08:30-16:30 </p>
      </div>
    </div>
  );
}

export default ContactUs;
