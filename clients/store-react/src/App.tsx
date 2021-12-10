import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { AppBar, createTheme, CssBaseline, ThemeProvider, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';

const theme = createTheme({})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
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
    </ThemeProvider>
  );
}
