import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Container,
  Paper,
} from "@mui/material";

export default function Capstone() {
  return (
    <Box
      id="capstone"
      sx={{
        bgcolor: "linear-gradient(135deg, #EEF2FF 0%, #F9FAFB 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Left Side: Text */}
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              flex: 1, // makes left and right balance evenly
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                fontWeight: 800,
                lineHeight: 1.1,
                mb: 3,
                color: "#026da3ff)",
                WebkitBackgroundClip: "text",
              }}
            >
              IssueHold
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 4, fontSize: "1.2rem", maxWidth: 500 }}
            >
              Ticket management system built using React, AWS DynamoDB, and
              Cognito - host's a modern, clean interface for managing tickets.
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <Button
                component="a"
                href="https://www.issuehold.com"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                size="large"
                sx={{
                  borderRadius: 3,
                  px: 4,
                  py: 1.5,
                  textTransform: "none",
                  fontWeight: 600,
                  background: "var(--accent-color)", // from app.css
                  boxShadow: "0 8px 24px rgba(99,102,241,0.3)",
                  "&:hover": {
                    background: "var(--accent-color)", // can darken with rgba or add --accent-hover
                  },
                }}
              >
                View Site
              </Button>
              <Button
                component="a"
                href="https://github.com/MJ-Developer201/issueLock"
                target="_blank"
                rel="noopener noreferrer"
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
                    backgroundColor: "rgba(99,102,241,0.1)",
                  },
                }}
              >
                GitHub
              </Button>
            </Stack>
          </Box>

          {/* Right Side: Image */}
          <Paper
            elevation={6}
            sx={{
              flex: 1, // balances width with left side
              borderRadius: 4,
              bgcolor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              maxHeight: { xs: "300px", md: "450px" },
            }}
          >
            <Box
              component="img"
              src="/ScreenshotIsuelock.png" // use public/ directly
              alt="Step Illustration"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}
