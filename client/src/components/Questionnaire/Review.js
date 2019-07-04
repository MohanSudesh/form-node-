import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  { name: 'Product 3', desc: 'Something else', price: '$6.51' },
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' },
]
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA']

const styles = theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing(2),
  },
  question: {
    color: theme.palette.primary.main
  }
})

const Review = ({
  classes,
  studentState, city, name, email, postalAddress, pincode, contactNumber, whatsappNumber,
  collegeState, collegeName, collegeAddress, degree, branch, year, collegeCity,
  previousCA, previousCAYear, socialMediaSites, fbLink, whyDoYouWish, areYouTheRightCandidate, pastExperience,
}) => {

  const otherDetails = [
    { name: 'Which Social Media Sites do you use?', detail: socialMediaSites, },
    { name: 'Facebook profile Link.', detail: fbLink, },
    { name: 'Why do you want to become a Campus Ambassador?', detail: whyDoYouWish, },
    { name: 'Why do you think you are the right candidate?', detail: areYouTheRightCandidate, },
    { name: 'Do you have any past experience in handling Positions of Responsibility?', detail: pastExperience, },
  ]

  if( previousCA ){
    otherDetails.push({ name: 'I was a CA for Shaastra previously.', detail: previousCAYear, },)
  }

  const personalDetails = [
    { name: 'Name', detail: name },
    { name: 'Email', detail: email },
    { name: 'State', detail: studentState },
    { name: 'City', detail: city },
    { name: 'Postal Address', detail: postalAddress },
    { name: 'Pincode', detail: pincode },
    { name: 'Contact Number', detail: contactNumber },
    { name: 'Whatsapp Number', detail: whatsappNumber },
  ]

  const collegeDetails = [
    { name: 'College Name', detail: collegeName },
    { name: 'College State', detail: collegeState },
    { name: 'College City', detail: collegeCity },
    { name: 'College Address', detail: collegeAddress },
    { name: 'Degree', detail: degree },
    { name: 'Branch', detail: branch },
    { name: 'Year', detail: year },
  ]

  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item container direction="column" xs={12}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Personal details
          </Typography>
          <Grid container>
            {personalDetails.map(field => (
              <Fragment key={field.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom className={classes.question}>{field.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom style={{ overflowWrap: "break-word", }}>{field.detail}</Typography>
                </Grid>
              </Fragment>
            ))}
          </Grid>
        </Grid>
        <Grid item container direction="column" xs={12}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            College details
          </Typography>
          <Grid container>
            {collegeDetails.map(field => (
              <Fragment key={field.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom className={classes.question}>{field.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom style={{ overflowWrap: "break-word", }}>{field.detail}</Typography>
                </Grid>
              </Fragment>
            ))}
          </Grid>
        </Grid>
        <Grid item container direction="column" xs={12}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Other details
          </Typography>
          <Grid container>
            {otherDetails.map(field => (
              <Fragment key={field.name}>
                <Grid item xs={12}>
                  <Typography gutterBottom className={classes.question}>{field.name}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography gutterBottom style={{ overflowWrap: "break-word", }}>{field.detail}</Typography>
                </Grid>
                <br/>
              </Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default withStyles(styles)(Review)