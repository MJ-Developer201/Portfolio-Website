import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Chip,
  Stack,
  Container,
  Paper,
} from "@mui/material";

export default function Projects() {
  const projects = [
    {
      title: "Finance Tracker App",
      desc: "A personal finance dashboard built with React and Vite, connected to an Azure Function + Cosmos DB backend for real-time budget tracking.",
      tech: ["React", "Vite", "Azure Functions", "Cosmos DB"],
      image: "https://via.placeholder.com/600x400", // replace with screenshot
      link: "#",
    },
    {
      title: "IssueHold Bug Tracker",
      desc: "A lightweight bug tracking system for small teams, leveraging AWS Amplify, GraphQL, and Material UI for a modern, responsive UI.",
      tech: ["AWS Amplify", "GraphQL", "Material UI"],
      image: "https://via.placeholder.com/600x400", // replace with screenshot
      link: "#",
    },
  ];

  return (
    <Box sx={{ py: 12, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          textAlign="center"
          sx={{ fontWeight: 700, mb: 10 }}
        >
          Featured Projects
        </Typography>

        <Grid container spacing={6}>
          {projects.map((proj, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Paper
                elevation={3}
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center", // center content horizontally
                  textAlign: "center", // align text centrally
                }}
              >
                {/* Project Image */}
                <Box
                  component="img"
                  src={proj.image}
                  alt={proj.title}
                  sx={{
                    width: "100%",
                    height: 250,
                    objectFit: "cover",
                  }}
                />

                {/* Content */}
                <Box
                  sx={{
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", // keep inner items centered
                    flexGrow: 1,
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                    {proj.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 3, maxWidth: 400 }}
                  >
                    {proj.desc}
                  </Typography>

                  {/* Tech stack chips */}
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="center"
                    sx={{ flexWrap: "wrap", mb: 3 }}
                  >
                    {proj.tech.map((t, idx) => (
                      <Chip key={idx} label={t} variant="outlined" />
                    ))}
                  </Stack>

                  {/* Button */}
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      borderRadius: 2,
                    }}
                    href={proj.link}
                  >
                    View Project
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
