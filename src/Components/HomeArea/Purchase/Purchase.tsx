import { Button, ButtonGroup, TextField, Typography } from "@material-ui/core";
import "./Purchase.css";
import { LocalMallOutlined } from "@material-ui/icons";
import CheckCircleSharpIcon from "@material-ui/icons/CheckCircleSharp";

function Purchase(): JSX.Element {
  return (
    <div className="Purchase FormBox">
      <Typography variant="h3" className="Headline">
        <LocalMallOutlined /> ביצוע הזמנה:
      </Typography>
      <br />
      <TextField
        label="דגם:"
        dir="rtl"
        variant="filled"
        type="text"
        className="TextBox"
      />
      <br />
      <br />
      <TextField
        label="צבע:"
        dir="rtl"
        variant="filled"
        type="text"
        className="TextBox"
      />
      <br />
      <br />
      <TextField
        label="מידה:"
        dir="rtl"
        variant="filled"
        type="number"
        className="TextBox"
      />
      <br />
      <br />
      {/* <ButtonGroup variant="contained"> */}
      <Button
        variant="contained"
        className="Button"
      >
        אישור
      </Button>
      <Button variant="contained" className="Button">
        ביטול
      </Button>
      {/* </ButtonGroup> */}
    </div>
  );
}

export default Purchase;
