import React, { Fragment } from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

const styles = theme => ({
  link: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    marginRight: theme.spacing(15),
  }
})

const Verzeo = ({ classes, link, }) => {
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)

  function handleToggle() {
    setOpen(prevOpen => !prevOpen)
  }

  function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  return (
        <Fragment>
          <Button onClick={handleToggle} className={link && classes.link} color="inherit" ref={anchorRef}>Verzeo</Button>
          <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
              {({ TransitionProps, placement }) => (
              <Grow
                  {...TransitionProps}
                  style={{
                  transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                  }}
              >
                  <Paper id="menu-list-grow" style={{ paddingTop: '5%'}}>
                    <ClickAwayListener onClickAway={handleClose}>
                        <MenuList>
                                <MenuItem component="a" href="https://verzeo.in/internship-program">
                                    Explore internship programs <br/> at established companies.
                                </MenuItem>
                        </MenuList>
                    </ClickAwayListener>
                  </Paper>
              </Grow>
              )}
          </Popper>
        </Fragment>
    )
}

export default withStyles(styles)(Verzeo)