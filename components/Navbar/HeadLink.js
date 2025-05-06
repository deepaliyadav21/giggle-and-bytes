import React from "react";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import styles from "@/styles/Header.module.css";

export default function HeadLink(props) {
  return (
    <span>
      {props.earn ? (
        <Link href={props.link} prefetch={false} passHref>
          <Tooltip title={props.tooltip}>
            <Button
              target="_blank"
              color="inherit"
              className={styles.pulse_button}
              style={{
                textTransform: "capitalize",
                color: "#fff",
                marginLeft: 10,
                borderRadius: 15,
              }}
            >
              {props.icon}
              <span style={{ marginLeft: 5 }}>{props.title}</span>
            </Button>
          </Tooltip>
        </Link>
      ) : (
        <Link href={props.link} prefetch={false} passHref>
          <Tooltip title={props.tooltip}>
            <Button
              color="inherit"
              style={{
                textTransform: "capitalize",
                color: "#fff",
                marginLeft: 10,
              }}
            >
              {props.icon}
              <span style={{ marginLeft: 5 }}>{props.title}</span>
            </Button>
          </Tooltip>
        </Link>
      )}
    </span>
  );
}
