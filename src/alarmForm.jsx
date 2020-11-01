import React from "react";
import "./styles.css";
import { TextField, Button, Box } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function AlarmForm(props, onOpen, onClose) {
  const [label, setLabel] = React.useState("");
  const [alarmTime, setAlarmTime] = React.useState("07:30");

  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Add an Alarm</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Box display="flex" flexDirection="column">
              <TextField
                id="outlined-basic"
                label="Alarm-label"
                variant="outlined"
                value={label}
                onChange={(event) => setLabel(event.target.value)}
              />
              <TextField
                id="time"
                label="Alarm clock"
                type="time"
                value={alarmTime}
                onChange={(event) => setAlarmTime(event.target.value)}
                inputProps={{
                  step: 300 // 5 min
                }}
              />
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            onClick={() => props.onSave(label, alarmTime)}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
