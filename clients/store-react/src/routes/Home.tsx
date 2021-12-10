import { Box, Paper, Typography } from '@mui/material';
import * as React from 'react';
export default function Home() {
  return (
    <Box sx={{ my: 4 }}>
        <Paper>
        <Typography variant="h3" component="h1">
            Home
        </Typography>
        </Paper>
    </Box>
  );
}
