import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export function MainPage() {
  return (
    <Container component="main" maxWidth="xs">
      <Grid container>
        <Grid item xs={12}>
          <Box>
            <Typography>
              Hello
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
