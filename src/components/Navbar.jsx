import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.44)",
          boxShadow: "none",
          color: "black",
          backdropFilter: "blur(6px)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "var(--accent-color)",
              cursor: "pointer",
            }}
          >
            MarcDev
          </Typography>

          <Stack direction="row" spacing={4}>
            <Typography
              component="a"
              href="#header"
              variant="button"
              sx={{
                cursor: "pointer",
                "&:hover": { color: "var(--accent-color)" },
              }}
            >
              Home
            </Typography>
            <Typography
              component={"a"}
              href="#capstone"
              variant="button"
              sx={{
                cursor: "pointer",
                "&:hover": { color: "var(--accent-color)" },
              }}
            >
              Project
            </Typography>
            <Typography
              component={"a"}
              href="#skills"
              variant="button"
              sx={{
                cursor: "pointer",
                "&:hover": { color: "var(--accent-color)" },
              }}
            >
              About
            </Typography>
            <Typography
              component="a"
              href="#footer"
              variant="button"
              sx={{
                cursor: "pointer",
                "&:hover": { color: "var(--accent-color)" },
              }}
            >
              Contact
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
