"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "@/styles/Header.module.css";
import { Avatar, Typography, Button, Badge, Menu, MenuItem, Box, Fab, Zoom } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HeadLink from "./HeadLink";


import HomeIcon from '@mui/icons-material/Home';
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ImageIcon from "@mui/icons-material/Image";
import CallIcon from "@mui/icons-material/Call";
import CreateIcon from "@mui/icons-material/Create";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

export default function Navbar() {
  const [language, setLanguage] = useState("hindi");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState(false);


const handleLogin = () => {
    setAuth(true);
  };
  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage(false);
      }, 4000);
    }
  }, [message]);

  return (
    <>
      <div
        className={styles.main}
        style={{ color: "#fff" }}
        id="back-to-top-anchor"
      >
        <span className={`${styles.logo} sm-h md-s`}>
          <Link href="/">
            <img
              src="/logo/logo.webp"
              alt="Letsdiskuss Logo"
              width={110}
              height={60}
            />
          </Link>
        </span>

        <div className="sm-h md-s">
          <center>
            <div
              style={{
                display: "flex",
                color: "black",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  color: "black",
                  justifyContent: "center",
                }}
              >
                
                <Button
                  size="small"
                  href={`/user/avinash}`}
                  style={{
                    backgroundColor: "#22c754",
                    marginTop: "8px",
                    marginBottom: "3px",
                    color: "white",
                    height: "25px",
                    fontWeight: "700",
                  }}
                >
                  Writer of the Month
                </Button>
                <Avatar
                  style={{
                    height: "20px",
                    width: "20px",
                    margin: "10px 6px",
                    fontSize: "15px",
                    backgroundColor: "#20565c",
                  }}
                >
                  {"Avinash"}
                </Avatar>
                <a
                  style={{ marginTop: "10px", color: "grey" }}
                  href={`/user/$avinash}`}
                >
                  {"Avinash"}
                </a>
              </div>
              <div
                style={{
                  display: "flex",
                  color: "black",
                  justifyContent: "center",
                  marginLeft: "20px",
                }}
              >
                <Button
                  size="small"
                  href={`/user/$avinash}`}
                  style={{
                    backgroundColor: "#22c754",
                    marginTop: "8px",
                    marginBottom: "3px",
                    color: "white",
                    height: "25px",
                    fontWeight: "700",
                  }}
                >
                  Writer of the Week
                </Button>
                <Avatar
                  style={{
                    height: "20px",
                    width: "20px",
                    margin: "10px 6px",
                    fontSize: "15px",
                    backgroundColor: "#20565c",
                  }}
                >
                  {"Avinash"}
                </Avatar>
                <a
                  style={{ marginTop: "10px", color: "grey" }}
                  href={`/user/$avinash`}
                >
                  {"Avinash"}
                </a>
              </div>
            </div>
          </center>
        </div>

        <AppBar position="static" sx={{ backgroundColor: '#20565c' }}>
          <Toolbar style={{ minHeight: 43 }}>
            <span className="sm-s xs-s md-h xl-h pointer">
              <Link href="/">
                <img
                  src="/logo/logo.webp"
                  alt="Letsdiskuss Logo"
                  width={70}
                  height={50}
                />
              </Link>
            </span>

            <div
              className="sm-h md-s"
              style={{ width: "100%", marginLeft: 150 }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <HeadLink
                    title="Home"
                    icon={<HomeIcon />}
                    link="/"
                    tooltip="Home"
                  />
                  <HeadLink
                    title="Blogs"
                    icon={<ChatBubbleIcon />}
                    link="/blog/"
                    tooltip="Blogs"
                  />
                  <HeadLink
                    title="Gallery"
                    icon={<ImageIcon />}
                    link="/gallery"
                    tooltip="Gallery"
                  />
                  <HeadLink
                    title="Contact Us"
                    icon={<CallIcon />}
                    link="/contact"
                    tooltip="Contact Us"
                  />
                  <HeadLink
                    title="Write For Us"
                    icon={<CreateIcon />}
                    link="/write-for-us"
                    tooltip="Write For Us"
                  />
                </div>

                <div>
                  <div style={{ display: "flex" }}>
                    <Typography style={{ marginTop: 6, marginRight: 4 }}>
                      Language
                    </Typography>
                    <a
                      href={
                        isLoggedIn
                          ? `https://hi.letsdiskuss.com`
                          : "https://hi.letsdiskuss.com"
                      }
                    >
                      <Button
                        startIcon={<RadioButtonUncheckedIcon />}
                        style={{
                          color: "#fff",
                          textTransform: "capitalize",
                          borderRadius: 20,
                          paddingTop: 1,
                          paddingBottom: 1,
                          marginTop: 5,
                          marginBottom: 3,
                          fontWeight: "bold",
                        }}
                      >
                        हिंदी
                      </Button>
                    </a>
                    <Button
                      startIcon={<RadioButtonCheckedIcon />}
                      style={{
                        color: "#fff",
                        textTransform: "capitalize",
                        borderRadius: 20,
                        backgroundColor: "#22c754",
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginTop: 3,
                        marginBottom: 3,
                        fontWeight: "bold",
                      }}
                    >
                      English
                    </Button>

                    {isLoggedIn && (
                      <>
                        {currentUser?.prvlg_group === 1 && (
                          <Link href="/letsadmin/">
                            <MenuItem>Admin</MenuItem>
                          </Link>
                        )}
                        <span
                          onClick={handleMenuClick}
                          style={{
                            marginTop: 7,
                            marginLeft: 15,
                            color: "#fff",
                          }}
                        >
                          {currentUser?.user_img ? (
                            <img
                              className={styles.menuImg}
                              src={currentUser?.user_img.replace(
                                /http:/g,
                                "https:"
                              )}
                              width="30"
                              height="30"
                            />
                          ) : (
                            <AccountCircle />
                          )}
                          <Typography style={{ marginLeft: 8 }}>
                            {currentUser?.full_name}
                          </Typography>
                        </span>
                        <Menu
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleMenuClose}
                        >
                          <Link href={`/user/${currentUser?.username}`}>
                            <MenuItem onClick={handleMenuClose}>
                              {currentUser?.user_img ? (
                                <img
                                  style={{ borderRadius: 25 }}
                                  src={currentUser?.user_img.replace(
                                    /http:/g,
                                    "https:"
                                  )}
                                  width="30"
                                  height="30"
                                />
                              ) : (
                                <AccountCircle />
                              )}
                              My Profile
                            </MenuItem>
                          </Link>
                          <MenuItem onClick={logout}>
                            <ExitToAppIcon /> Signout
                          </MenuItem>
                        </Menu>
                      </>
                    )}

                    {isLoggedIn === false && (
                      <span style={{ marginLeft: 15 }}>
                        <Button
                          startIcon={<LockOpenIcon />}
                          style={{ color: "#fff", textTransform: "none" }}
                          component="a"
                          href="/signin"
                        >
                          Login
                        </Button>
                        <Button
                          startIcon={<PersonAddIcon />}
                          style={{ color: "#fff", textTransform: "none" }}
                          onClick={handleLogin}
                          component="a" // This makes the button clickable as a link
                          href="/signup" // The target route
                        >
                          Register
                        </Button>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}
