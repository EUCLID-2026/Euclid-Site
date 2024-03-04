// ContactProfile.js
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const ContactProfile = ({ user1, user2 }) => {
  return (
    <Paper elevation={0} style={{ padding: 16, marginBottom: 16, backgroundColor: 'rgba(255, 255, 255, 0)',width:'70rem' }}>
      <Grid container spacing={3} alignItems="center">
        {/* Left Avatar and Details */}
        <Grid item container justifyContent="center" xs={12} md={6} spacing={2} alignItems="center">
          <Grid item>
            <Avatar alt={user1.name} src={user1.avatar} style={{ width: 130, height: 130 }} />
          </Grid>
          <Grid item>
            <Box textAlign="center">
              <Typography variant="body1">{user1.name}</Typography>
              <Typography variant="body2">{user1.email}</Typography>
              <Typography variant="body2">{user1.phone}</Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Right Avatar and Details */}
        <Grid item container justifyContent="center" xs={12} md={6} spacing={2} alignItems="center">
          <Grid item>
            <Box textAlign="center">
              <Typography variant="body1">{user2.name}</Typography>
              <Typography variant="body2">{user2.email}</Typography>
              <Typography variant="body2">{user2.phone}</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Avatar alt={user2.name} src={user2.avatar} style={{ width: 130, height: 130 }} />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ContactProfile;
