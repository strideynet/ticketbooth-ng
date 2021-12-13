import * as React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { AppBar, createTheme, CssBaseline, ThemeProvider, Toolbar, Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Paper, Button, Divider } from '@mui/material'
import { Link as RouterLink, Outlet } from 'react-router-dom'

import DashboardIcon from '@mui/icons-material/Dashboard'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PeopleIcon from '@mui/icons-material/People'
import BugReportIcon from '@mui/icons-material/BugReport'
import { signIn, signOut, useUserContext } from './services/firebase'

const theme = createTheme({})

function NavBar (): React.ReactElement {
  return (
    <React.Fragment>
      <List>
        <ListItem button to="/" component={RouterLink}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText>
            Dashboard
            </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Participants" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button to="/debug" component={RouterLink}>
          <ListItemIcon>
            <BugReportIcon />
          </ListItemIcon>
          <ListItemText>
            Debug
            </ListItemText>
        </ListItem>
      </List>
    </React.Fragment>
  )
}

function LoggedInView (): React.ReactElement {
  return (
   <React.Fragment>
      <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' }
      }}
    >
      <Toolbar />
      <NavBar />
    </Drawer>
    <Box
      component="main"
      sx={{
        backgroundColor: theme.palette.grey[100],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto'
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Outlet />
      </Container>
    </Box>
   </React.Fragment>
  )
}

function LoggedOutView (): React.ReactElement {
  return (
    <Box
    component="main"
    sx={{
      backgroundColor: theme.palette.grey[100],
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto'
    }}
  >
    <Toolbar />
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
    <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 'auto'
            }}
          >
            <Typography variant="h3" color="red" gutterBottom align="center">
              Access Unauthorised
            </Typography>
            <Button onClick={signIn} variant="contained">
              Sign In
            </Button>
          </Paper>
    </Container>
  </Box>
  )
}

export default function App (): React.ReactElement {
  const user = useUserContext()
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Typography
              component="h1"
              variant="h6"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              ticketbooth-ng
            </Typography>
            { user !== null &&
              <Button onClick={signOut} color="inherit" variant="text">
                Sign Out
              </Button>
            }
          </Toolbar>
        </AppBar>
        {
          user !== null ? (<LoggedInView />) : (<LoggedOutView />)
        }
      </Box>
    </ThemeProvider>
  )
}
