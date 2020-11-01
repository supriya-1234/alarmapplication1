import React from "react";
import "./styles.css";
import { Paper, Box, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/DeleteSweep";

export default function Alarm(props) {
  return (
    <>
      <Paper elevation={3}>
        <Box display="flex" flexDirection="row">
          <Typography variant="h4">{props.label}</Typography>
          <Typography variant="h4">{props.alarmTime.toUTCString()}</Typography>
          <IconButton aria-label="delete" onClick={props.onEdit}>
            <Edit />
          </IconButton>
          <IconButton
            aria-label="delete"
            disabled
            color="primary"
            onClick={props.onDelete}
          >
            <Delete />
          </IconButton>
        </Box>
      </Paper>
    </>
  );
}
