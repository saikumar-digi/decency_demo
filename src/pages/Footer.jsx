import React from 'react';
import { Box, Container, Divider, Grid, IconButton, Link, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import styles from "../styles/Footer.module.css";

function Footer() {
    return (
        <footer className={`${styles.footer} bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-black p-4`} style={{ fontFamily: 'Arial, sans-serif' }}>
            <Container maxWidth="xl">
                <Grid container spacing={1}>
                    <Grid item md={3}>
                        <Typography variant="button" gutterBottom display="block" style={{ fontWeight: 'bold', color: 'black' }}>
                            ABOUT
                        </Typography>
                        <Box>
                            <Link href="/" underline="hover" color="black">
                                Contact Us
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" underline="hover" color="black">
                                About Us
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" underline="hover" color="black">
                                Careers
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" underline="hover" color="black">
                                Corporate Information
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item md={3}>
                        <Typography variant="button" gutterBottom display="block" style={{ fontWeight: 'bold', color: 'black' }}>
                            SOCIAL MEDIA
                        </Typography>
                        <Box>
                            <Link href="https://www.instagram.com/decency_construction05?igsh=MXR1aGlubjZsY3ExeQ%3D%3D&utm_source=qr " underline="hover" color="black">
                                <IconButton color="inherit">
                                    <InstagramIcon />
                                </IconButton>
                                Instagram
                            </Link>
                        </Box>
                        <Box>
                            <Link href="https://www.facebook.com" underline="hover" color="black">
                                <IconButton color="inherit">
                                    <FacebookIcon />
                                </IconButton>
                                Facebook
                            </Link>
                        </Box>
                        <Box>
                            <Link href="https://www.twitter.com" underline="hover" color="black">
                                <IconButton color="inherit">
                                    <TwitterIcon />
                                </IconButton>
                                Twitter
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item md={3}>
                        <Typography variant="button" gutterBottom display="block" style={{ fontWeight: 'bold', color: 'black' }}>
                            REGISTERED OFFICE ADDRESS
                        </Typography>
                        <Typography variant="subtitle2" display="block" gutterBottom>
                            Kadarkoppa Road, Near SBI Bank,
                        </Typography>
                        <Typography variant="subtitle2" display="block" gutterBottom>
                            5th block, LOKAPUR, TQ:Mudol , DT:Bagalkote
                        </Typography>
                        <Typography variant="subtitle2" display="block" gutterBottom>
                            587122, Karnataka, India.
                        </Typography>
                    </Grid>
                    <Grid item md={3}>
                        <Typography variant="button" gutterBottom display="block" style={{ fontWeight: 'bold', color: 'black' }}>
                            OFFICE LOCATION
                        </Typography>
                        <div className='mb-4'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3832.167685686567!2d75.37109187513776!3d16.160300684532498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDA5JzM3LjEiTiA3NcKwMjInMjUuMiJF!5e0!3m2!1sen!2sin!4v1703673391711!5m2!1sen!2sin"
                                width="250"
                                height="100"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <Divider sx={{ height: "1px", bgcolor: "black",marginBottom:"20px" }} />
            <Container maxWidth="md" >
                <Grid container justifyContent="center">
                    <Grid item xs={12}>
                        <Typography variant="subtitle2" display="block" gutterBottom textAlign="center" style={{ fontWeight: 'bold', color: 'black' }}>
                            Copyright ©️ 2024 Decency Corp. Created By Bidave IT Solutions.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
}

export default Footer;
