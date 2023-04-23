import React from "react";
import OutlinedCard from "../Components/StudyCard";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import BasicBreadcrumbs from "../Components/BreadCrumbs";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  boxShadow: "none",
  justifyContent: "center",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Subject() {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          mt: 10,
          width: { md: "80%", sm: "100%" },
          mx: "auto",
          p: 2,
        }}
      >
        <BasicBreadcrumbs />
        <Box component="div" sx={{ py: 3 }}>
          <h1
            style={{
             
              color: "#405fbd",
              fontSize: "38px",
              lineHeight: 1.5,
              fontFamily: "var(--font-morphon)",
            }}
          >
            Study Resources via Subjects
          </h1>
          <Typography
            variant="paragraph"
            sx={{
              
              fontSize: "23px",
              color: "rgba(0,0,0,.85)",
              textAlign: "justify",
            }}
          >
            Find using our extensive subjects filters & get most out of it.
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          {[...Array(9)].map((item, ind) => {
            return (
              <Grid item xs={12} sm={12} md={4} lg={4} key={ind}>
                <Item sx={{ textAlign: "center", background: "none" }}>
                  <OutlinedCard />
                </Item>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      {/* Lower section */}
      <Box
        component="div"
        sx={{
          height: "13rem",
          width: "100%",
          background: "white",
          p: 3,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <h2
          style={{ fontFamily: "var(--font-manrop)", fontWeight: 700, mb: 5 }}
        >
          Join us and improve your grades with best deals.
        </h2>
        <Button
          variant="contained"
          sx={{ borderRadius: 20, width: 104, height: 38 }}
        >
          Join now
        </Button>
      </Box>
    </>
  );
}

export default Subject;
