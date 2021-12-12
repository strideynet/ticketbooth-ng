import * as React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { AppBar, createTheme, CssBaseline, ThemeProvider, Toolbar, Link, Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

const theme = createTheme({})

function Copyright () {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
      {'ticketbooth-ng | Copyright © '}
      <Link color="inherit" href="https://noahstride.co.uk/">
        Noah Stride
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default function App () {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`
        }}
        >
        <Toolbar>
          <Typography variant="h4" color="inherit" noWrap>
            BBB 2022
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm">
        <Outlet />
      </Container>
      <Box
        component="footer"
        sx={{
          py: 1,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800]
        }}
      >
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
      </Box>
    </ThemeProvider>
  )
}
