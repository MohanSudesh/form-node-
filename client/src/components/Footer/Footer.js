import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { withStyles } from '@material-ui/core/styles'
import Sponsor from '../../assets/sponsor.jpeg'
import FacebookLogo from '../../assets/facebook.svg'
import InstagramLogo from '../../assets/instagram.svg'
import TwitterLogo from '../../assets/twitter.svg'
import LinkedinLogo from '../../assets/linkedin.svg'
import Logo from '../../assets/logo1.svg'

const styles = theme => ({
    root: {
        padding: theme.spacing(5),
        background : "-moz-linear-gradient(-0.75% 93.07% 25.51deg,rgba(100, 192, 253, 1) 0%,rgba(87, 137, 250, 1) 53.91%,rgba(70, 65, 245, 1) 100%)",
        background : "-webkit-linear-gradient(25.51deg, rgba(100, 192, 253, 1) 0%, rgba(87, 137, 250, 1) 53.91%, rgba(70, 65, 245, 1) 100%)",
        background : "-webkit-gradient(linear,-0.75% 93.07% ,95.62% 11.29% ,color-stop(0,rgba(100, 192, 253, 1) ),color-stop(0.5391,rgba(87, 137, 250, 1) ),color-stop(1,rgba(70, 65, 245, 1) ))",
        background : "-o-linear-gradient(25.51deg, rgba(100, 192, 253, 1) 0%, rgba(87, 137, 250, 1) 53.91%, rgba(70, 65, 245, 1) 100%)",
        background : "-ms-linear-gradient(25.51deg, rgba(100, 192, 253, 1) 0%, rgba(87, 137, 250, 1) 53.91%, rgba(70, 65, 245, 1) 100%)",
        background : "linear-gradient(64.49deg, rgba(100, 192, 253, 1) 0%, rgba(87, 137, 250, 1) 53.91%, rgba(70, 65, 245, 1) 100%)",
        color: "white",
        height: "auto",
    },
    icons: {
        width: theme.spacing(3),
        margin: theme.spacing(1),
    },
    center: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(3),
        }
    },
    address: {
        [theme.breakpoints.down('md')]: {
            fontSize: "18px"
        }
    },
    logo: {
        width: "90%",
        marginTop: theme.spacing(1),
        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(3)
        }
    }
})

const Footer = ({ classes }) => {
  return (
    <section>
        <Grid container className={classes.root}>
            <Grid item xs={12} lg={6} align="center">
                <Grid container justify="center" align="center">
                    <Grid item xs={12} lg={6} align="center">
                        <Typography variant="h6">
                            Sponsored By
                        </Typography>
                        <img
                            src={Sponsor}
                            alt="shaastra logo"
                            id="shaastra"
                            className={classes.logo}
                        />
                    </Grid>
                    <Grid item xs={12} lg={6} align="center">
                        <img
                            src={Logo}
                            alt="shaastra logo"
                            id="shaastra"
                            className={classes.logo}
                        />
                    </Grid>  
                </Grid>   
            </Grid>
            <Grid item xs={12} lg={6} >
                <Grid container className={classes.center}>
                    <Grid item xs={12} lg={6} align="center">
                        <Typography variant="h5" className={classes.address}>
                            Indian Institute of Technology Madras
                            <br />
                            Adyar, Chennai - 600036.
                        </Typography>
                        <br/>
                        <Typography variant="h6" className={classes.address}>
                            For more info, visit <br/>
                            <Link href="www.shaastra.org" style={{ color: "black" }}>www.shaastra.org</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={6} align="center">
                        <Link href="https://www.facebook.com/Shaastra">
                            <img
                                src={FacebookLogo}
                                alt=""
                                className={classes.icons}
                            />
                        </Link>
                        <Link href="https://www.instagram.com/shaastra_iitm">
                            <img
                                src={InstagramLogo}
                                alt=""
                                className={classes.icons}
                            />
                        </Link>
                        <Link href="https://www.twitter.com/ShaastraIITM">
                            <img
                                src={TwitterLogo}
                                alt=""
                                className={classes.icons}
                            />
                        </Link>
                        <Link href="https://www.linkedin.com/company/shaastra-iit-madras">
                            <img
                                src={LinkedinLogo}
                                alt=""
                                className={classes.icons}
                            />
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
     </section>
  )
}

export default withStyles(styles)(Footer)