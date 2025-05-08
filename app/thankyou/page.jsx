'use client';

import React from 'react';
import Typography from '@mui/material/Typography';
import { Card, CardContent, Button } from '@mui/material';
import Link from 'next/link';
import { HomeOutlined } from '@mui/icons-material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import styles from '@/styles/thankyou.module.css';

export default function ThankYou() {
    return (
        <div className={styles.container}>
            <Card className={styles.card}>
                <CardContent>
                    <img src="/img/tt.png" alt="Thank You" className={styles.image} />
                    <Typography variant="body1" className={styles.message}>
                        Thank you for signing up with <strong>LetsDiskuss</strong>!<br />
                        Check your email for activation. Please check the spam folder if it's not in your inbox.
                    </Typography>
                    <div className={styles.buttonGroup}>
                        <Link href="/" passHref>
                            <Button
                                variant="outlined"
                                endIcon={<HomeOutlined />}
                                className={styles.button}
                                style={{ marginRight: 12 }}
                            >
                                Go to Home
                            </Button>
                        </Link>
                        <Link href="/signin" passHref>
                            <Button
                                variant="contained"
                                endIcon={<ExitToAppIcon />}
                                className={styles.button}
                            >
                                Login
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
