import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";

const FlipCard = ({ content, backContent }) => {
  return (
    <Box sx={{
      perspective: '1000px',
      '&:hover .flipCardInner': {
        transform: 'rotateY(180deg)',
      },
      width: '15vw',
      height: '15vw',
    }}>
      <Box className="flipCardInner" sx={{
        transition: 'transform 0.8s',
        transformStyle: 'preserve-3d',
        position: 'relative',
        width: '100%',
        height: '100%',
      }}>

      <Card sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#B0D0C0',
        border: '3px solid #2F6A4D',
        borderRadius: '2vw',
        position: 'absolute',
        backfaceVisibility: 'hidden',
      }}>
        <CardContent>
          <Typography variant="body1" align="center">
            {content}
          </Typography>
        </CardContent>
      </Card>

        <Box sx={{
          transform: 'rotateY(180deg)',
          backgroundColor: '#2F6A4D', 
          color: 'white', 
          borderRadius: '2vw',
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Typography variant="body2" align="center" sx={{ px: 2 }}>
            {backContent}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

function Projects() {
  const projectCards = [
    { content: "Dashboard to Monitor the Rescue Consumption of Blockchain Set-Up", backContent: "This project creates a centralized dashboard to monitor multiple blockchain networks, improving operational efficiency, promoting industry adoption, fostering innovation, and enhancing security measures." },
    { content: "HASHCHAIN: Abstract Blockchain Addressing the Issue of Product Counterfeiting", backContent: "This project combats product counterfeiting by using NFTs on a custom L2 Ethereum chain, benefiting businesses, creators, and regulators with enhanced intellectual property protection and regulatory compliance." },
    { content: "Geolocation tagged Land Registry Application using Blockchain", backContent: "This project leverages blockchain to modernize land registry. It utilizes Geo-tagging and smart contracts to automate transactions, offering benefits like improved governance, access to records, and reduced fraud."},
    { content: "Demonstration of Blockchain Vulnerabilities", backContent: "This project exposes blockchain vulnerabilities, focusing on Reentrancy and DoS attacks, particularly in Ethereum Sepolia. Inspired by incidents like the DAO Hack, it educates users to take preventive measures in blockchain environments."},
    { content: "Anomaly Detection for Indigenous Crypto Coin Transactions", backContent: "This project creates a web app for cryptocurrency miners to mine a specific coin across diverse nodes. It integrates a robust machine learning algorithm to detect anomalies in mining patterns, enhancing security and performance of cryptocurrency networks."},
    { content: "Nexus Design Systems", backContent: "Nexus Design Systems is EUCLID lab's official design system, featuring a UI library for React and a CLI/GUI tool named 'blockchain boot' for creating starter applications."},
  ];

  return (
    <Container>
      <Box maxWidth='xl' sx={{ p: 4, width: '102.4%', ml: -4, textAlign: 'center', display: 'flex', justifyContent: 'center', marginLeft: '1vw' }}>
        <Grid container spacing={4} justifyContent="center">
          {projectCards.map((project, index) => (
            <Grid item xs={6} sm={6} md={4} key={index}>
              <FlipCard content={project.content} backContent={project.backContent} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Typography variant="h4" align='center' sx={{ mt: 4, textDecoration: 'underline' }}>
        VIEW ALL
      </Typography>
    </Container>
  );
}

export default Projects;
