import React from "react";
import { Fab } from "@material-ui/core/Fab";

import "./styles.css";
import Alarm from "./alarm";
import { Add } from "@material-ui/icons";
export default function AlarmContainer(props) {
  return (
    <>
      <Fab color="primary" aria-label="add" onClick={props.onOpen}>
        <Add />
      </Fab>
      {props.alarms.length === 0
        ? "No alarm found"
        : props.alarms.map((alarm, index) => (
            <Alarm
              key={alarm.label}
              label={alarm.label}
              alarmTime={alarm.alarmTime}
              onDelete={() => props.onDelete(index)}
            />
          ))}
    </>
  );
}
