import React from "react";
import { Box, Typography, Button, Stack, Container } from "@mui/material";

export default function Intro() {
  return (
    <Box
      id="header"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        bgcolor: "linear-gradient(135deg, #EEF2FF 0%, #F9FAFB 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="column"
          alignItems={{ xs: "center", md: "flex-start" }} // center on mobile, left on desktop
          spacing={3}
          textAlign={{ xs: "center", md: "left" }}
          sx={{ pl: { xs: 0, md: 6 }, pr: { xs: 0, md: 6 } }} // whitespace padding
        >
          {/* Name */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.8rem", md: "2.5rem" },
              color: "text.primary",
            }}
          >
            <span style={{ color: "var(--accent-color)" }}>Marcus</span>{" "}
            Ferguson
          </Typography>

          {/* Title */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.2rem", md: "3.5rem" },
              lineHeight: 1.2,
              background:
                "linear-gradient(90deg, var(--accent-color), #3B82F6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Front-End Web Developer
          </Typography>

          {/* Short Bio */}
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: "600px",
              fontWeight: 400,
              fontSize: { xs: "1rem", md: "1.1rem" },
            }}
          >
            Experienced in building responsive, user-friendly interfaces with a
            focus on performance and scalability. Proficient in JavaScript,
            React, and cloud development.
          </Typography>

          {/* CTA Buttons */}
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={2}>
            <Button
              component="a"
              href="#capstone"
              variant="contained"
              size="large"
              sx={{
                borderRadius: 3,
                px: 4,
                py: 1.5,
                textTransform: "none",
                fontWeight: 600,
                background: "var(--accent-color)",
                boxShadow: "0 8px 24px rgba(99,102,241,0.3)",
              }}
            >
              View My Work
            </Button>
            <Button
              component="a"
              href="#footer"
              variant="outlined"
              size="large"
              sx={{
                borderRadius: 3,
                px: 4,
                py: 1.5,
                textTransform: "none",
                fontWeight: 600,
                borderColor: "var(--accent-color)",
                color: "var(--accent-color)",
                "&:hover": {
                  borderColor: "var(--accent-color)",
                  backgroundColor: "rgba(99,102,241,0.1)",
                },
              }}
            >
              Contact Me
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
