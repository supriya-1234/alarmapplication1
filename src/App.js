import React from "react";
import AlarmForm from "./alarmForm";
import AlarmContainer from "./alarmContainer";
import "./styles.css";

export default function App() {
  const defaultalarms = [
    {
      label: "interview at ONGC",
      alarmTime: new Date(Date().now + 30 * 60 * 1000)
    },
    {
      label: "interview at NTPC",
      alarmTime: new Date(Date().now + 100 * 60 * 1000)
    },
    {
      label: "interview at Google",
      alarmTime: new Date(Date().now + 200 * 60 * 1000)
    }
  ];
  const [alarms, setAlarms] = React.useState(defaultalarms);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = (label, alarmTime) => {
    const alarmCopy = [...alarms];
    alarmCopy.push([label, alarmTime]);
    setAlarms(alarmCopy);
  };
  const handleDelete = (index) => {
    const alarmCopy = [...alarms];
    alarmCopy.splice(index, 1);
    setAlarms(alarmCopy);
  };
  return (
    <div className="App">
      <AlarmContainer
        onOpen={() => setOpen(true)}
        alarms={alarms}
        onDelete={handleDelete}
      />
      <AlarmForm
        open={open}
        onOpen={handleClickOpen}
        onClose={handleClose}
        onSave={handleSave}
      />
    </div>
  );
}
