import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Divider, IconButton , } from "@mui/material";
import { AiOutlineArrowRight } from "react-icons/ai";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const optionData = [
  { name: "Business Development", count: "27058" },
  { name: "Finance", count: "27925" },
  { name: "Leadership Management", count: "72676" },
  { name: "Entrepreneurship", count: "4931" },
  { name: "Professional Development", count: "57308" },
  { name: "Marketing", count: "11895 " },
];
const card = (
  <React.Fragment>
    <CardContent sx={{ textAlign: "left" }}>
      <h4
        style={{ color: "#405fbd", fontWeight: "bold" }}
        color="text.secondary"
        gutterBottom
      >
        Business Management
      </h4>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Well, nothing to worry about business management homework help, we are
        willing to help you.
      </Typography>
    </CardContent>

    {optionData.map((item, _) => {
      return (
        <>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "space-between",
              cursor: "pointer",
              textAlign: "left",
              alignItems: "flex-start",
            }}
          >
            <h5
              style={{ color: "black", fontSize: "16px" }}
              color="text.secondary"
              gutterBottom
            >
              {item.name}
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {item.count} Documents
              </Typography>
            </h5>

            <IconButton sx={{ fontSize: 17, color: "black" }}>
              <AiOutlineArrowRight />
            </IconButton>
          </CardActions>
          <Divider />
        </>
      );
    })}
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Card
      sx={{ borderRadius: "1.5em", width: "100%", height: "auto", padding: 2 }}
      variant="outlined"
    >
      {card}
    </Card>
  );
}
export const NormalCard = ({ name, count }) => {
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        overflow:"hidden",
        height: 104,
        boxShadow: 4,
        borderRadius: 5,
        p: 2,
        mx: "auto",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          cursor: "pointer",
          textAlign: "left",
          alignItems: "center",
        }}
      >
        <div >
          <Typography
            variant="h5"
            component="h2"
            style={{ color: "black", fontSize: "16px" }}
          >
            {name}
          </Typography>
          
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {count} Documents
          </Typography>
        </div>
        <IconButton sx={{ fontSize: 17, color: "black" }}>
          <AiOutlineArrowRight />
        </IconButton>
      </CardContent>
    </Box>
  );
};

