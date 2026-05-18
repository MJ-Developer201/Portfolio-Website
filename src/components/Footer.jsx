import React from "react";
import { Box, Container, Typography, Link, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "transparent", // transparent background
        color: "black", // black text
        py: 3,
        mt: 8,
      }}
    >
      <Container
        id="footer"
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left side */}
        <Typography variant="body2">
          © {new Date().getFullYear()} DEV201
        </Typography>

        {/* Right side with icons */}
        <Stack direction="row" spacing={3} sx={{ mt: { xs: 2, md: 0 } }}>
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener"
            color="inherit"
            underline="hover"
            sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
          >
            <GitHubIcon fontSize="small" /> GitHub
          </Link>

          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener"
            color="inherit"
            underline="hover"
            sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
          >
            <LinkedInIcon fontSize="small" /> LinkedIn
          </Link>

          <Link
            href="mailto:youremail@example.com"
            color="inherit"
            underline="hover"
            sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
          >
            <EmailIcon fontSize="small" /> Contact
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
