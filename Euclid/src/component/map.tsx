// GoogleMapsIframe.js
import { Paper } from '@mui/material';
import React from 'react';

const Map = () => {
  return (
    <Paper style={{ borderColor:'black', border:'0.2rem solid black', width:'75rem'}}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
        <div style={{ marginLeft: '5rem', padding:'1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem'}}>
            <h2 style={{ fontSize: '2rem',textAlign:'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}> K.J. Somaiya College of Engineering</h2>
            <p style={{ fontSize: '1.5rem', textAlign:'center',lineHeight: '1.4', whiteSpace: 'pre-line' }}>Vidyanagar, <br />Vidyavihar East,<br /> Mumbai-400077, <br />Maharashtra,<br /> India</p>
          </div>
        </div>
        <div style={{ position: 'relative', width: '600px', height: '450px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.792765997356!2d72.89734591114566!3d19.072846982056515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c627a20bcaa9%3A0xb2fd3bcfeac0052a!2sK.%20J.%20Somaiya%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1709566519952!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            // allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </Paper>
  );
};

export default Map;
