import {
  Grid,
  Typography,
  Button,
  Stack,
  Box,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  SearchIconWrapper,
  StyledInputBase,
  AppBar,
  DrawerHeader,
  Search,
} from "../StyleSheets/style";
import { NormalCard } from "../Components/StudyCard";
import MultiActionAreaCard from "../Components/ViewDocument";
import CustomizedAccordions from "../Components/Accordian";
import BasicBreadcrumbs from "../Components/BreadCrumbs";

const headingStyle = {
  color: "#405fbd",
  fontSize: "38px",
  lineHeight: 1.5,
  fontFamily: "var(--font-morphon)",
};

const optionData = [
  { name: "Business Development", count: "27058" },
  { name: "Finance", count: "27925" },
  { name: "Leadership Management", count: "72676" },
  { name: "Entrepreneurship", count: "4931" },
  { name: "Professional Development", count: "57308" },
  { name: "Marketing", count: "11895 " },
];
function Business() {
  return (
    <Grid container sx={{ background: "white" }}>
      <Grid
        item
        xs={12}
        sm={12}
        md={10}
        sx={{
          mt: 11,
          mx: "auto",
          p: 2,
        }}
      >
        <BasicBreadcrumbs />

        <Grid
          container
          sx={{
            py: 3,
            rowGap: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} sm={12} md={8}>
            <h1 style={{ ...headingStyle }}>Business Management</h1>
            <Typography
              variant="paragraph"
              sx={{ fontSize: "15px", color: "rgba(0,0,0,.85)" }}
            >
              Get the best quality business management homework help and boost
              your academics grades and secure your bright shining future toward
              success.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search for Assignment sample and resources"
                sx={{ pt: 0.5, width: "100%" }}
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Grid>
        </Grid>

        {/* Normal cards */}
        <Grid container spacing={3} sx={{ rowGap: 2, mt: 5 }}>
          {optionData.map((item, _) => {
            return (
              <Grid item xs={12} md={4}>
                <NormalCard name={item.name} count={item.count} />
              </Grid>
            );
          })}
        </Grid>

        {/* View Document */}

        <Grid container spacing={3} sx={{ rowGap: 2, mt: 14 }}>
          {[...Array(9)].map((item, _) => {
            return (
              <Grid item xs={12} md={4}>
                <MultiActionAreaCard />
              </Grid>
            );
          })}
        </Grid>
        {/* Content card */}
        <Card sx={{ mt: 5, p: 2, borderRadius: 5 }}>
          <Content></Content>
        </Card>

        {/* Accordian */}
        <Box component="div" sx={{ my: 4 }}>
          <CustomizedAccordions />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Business;

function Content() {
  return (
    <ul className="list-unstyled">
      <li>
        <Typography sx={headingStyle}>
          Why Do Students Seek Online Business Management Homework Help?
        </Typography>
        <CardContent sx={{ textAlign: "justify", pl: 0 }}>
          <Typography>
            When it comes to homework help, an obvious question that comes to
            mind is about the need and benefits of outsourcing homework. How
            will it affect the study schedule as a student? Will it be capable
            to clear all my doubts? Is homework help affordable and
            student-friendly? All these questions are genuine and valid, the
            fact is that homework help is here to make your work as a student,
            even more, easier. We are here to provide you with aid in your
            academics and make some of the tedious work, manageable.
          </Typography>
        </CardContent>
      </li>
      <Divider />
      <li>
        <Typography sx={headingStyle}>
          Avail Best Business Management Homework Help
        </Typography>
        <CardContent sx={{ textAlign: "justify", pl: 0 }}>
          <Typography>
            Students might find it difficult sometimes to take out the time
            between work and studies to write an assignment or research on any
            particular topic to submit an assignment. Well, nothing to worry
            about because a Homework helper comes with associated advantages and
            benefits. students often look for{" "}
            <span
              style={{
                color: "var(--heading-color)",
                fontWeight: "bold",
              }}
            >
              {" "}
              management assignment help services.
            </span>
          </Typography>
          <br />
          <ul>
            <li className="mb-2">
              Homework and assignment submitted by an expert is always developed
              with a piece of authentic information which is gained by carrying
              out intense research of the subject
            </li>
            <li className="mb-2">
              The homework is submitted with the information which will be
              considered as an output of the study carried out by students with
              proper resource and evaluation
            </li>
            <li className="mb-2">
              The conclusions are written out in such a way that the flow of the
              assignment will be maintained step by step and experts can find it
              easy to showcase that information.
            </li>
            <li className="mb-2">
              Assignments are first studied properly and from the study with the
              proper facts, the information is written which relate to the
              management of any organization.
            </li>
          </ul>
        </CardContent>
      </li>
      <Divider />

      <li>
        <Typography sx={headingStyle}>Business Development</Typography>
        <CardContent sx={{ textAlign: "justify", pl: 0 }}>
          <Typography>
            <span
              style={{
                color: "var(--heading-color)",
                fontWeight: "bold",
              }}
            >
              {" "}
              Business Development{" "}
            </span>
            is a multi-disciplinary field that focuses on the growth and
            expansion of an organization. It encompasses various strategies,
            processes, and techniques aimed at identifying and capitalizing on
            new business opportunities, increasing revenue, and improving
            overall organizational performance.
          </Typography>
        </CardContent>
      </li>
      <Divider />
      <li>
        <Typography sx={headingStyle}>Finance</Typography>
        <CardContent sx={{ textAlign: "justify", pl: 0 }}>
          <Typography>
            <span
              style={{
                color: "var(--heading-color)",
                fontWeight: "bold",
              }}
            >
              {" "}
              Finance
            </span>{" "}
            is the study and practice of managing money and other assets. It is
            a broad subject that encompasses various areas such as investment,
            banking, insurance, and accounting. It involves the analysis of
            financial information to make informed decisions about how to
            allocate resources in order to maximize wealth.
          </Typography>
        </CardContent>
      </li>
      <Divider />
      <li>
        <Typography sx={headingStyle}>Leadership Management</Typography>
        <CardContent sx={{ textAlign: "justify", pl: 0 }}>
          <Typography>
            <span
              style={{
                color: "var(--heading-color)",
                fontWeight: "bold",
              }}
            >
              {" "}
              Leadership{" "}
            </span>{" "}
            and Management are interrelated subjects that focus on the skills
            and techniques required to lead and manage people and organizations
            effectively.
            <br /> <br />
            Leadership is the process of inspiring and guiding individuals or
            groups toward a common goal. It involves the development of a
            vision, the ability to communicate it effectively, and the use of
            influence to motivate and engage others.
          </Typography>
        </CardContent>
      </li>
      <Divider />
      <li>
        <Typography sx={headingStyle}> Professional Development</Typography>
        <CardContent sx={{ textAlign: "justify", pl: 0 }}>
          <Typography>
            <span
              style={{
                color: "var(--heading-color)",
                fontWeight: "bold",
              }}
            >
              {" "}
              Professional Development
            </span>{" "}
            Professional Development is a broad subject that refers to the
            ongoing process of learning and growth that individuals undertake in
            order to improve their skills, knowledge, and performance in their
            chosen careers. It is focused on helping individuals acquire new
            skills, improve existing ones, and advance their careers by
            continuously learning and adapting to changes in their field.
          </Typography>
        </CardContent>
      </li>
      <Divider />
      <li>
        <Typography sx={headingStyle}> Marketing</Typography>
        <CardContent sx={{ textAlign: "justify", pl: 0 }}>
          <Typography>
            The field of{" "}
            <span
              style={{
                color: "var(--heading-color)",
                fontWeight: "bold",
              }}
            >
              {" "}
              marketing
            </span>{" "}
            is very diverse. This, together with its rate of growth, has
            resulted in a sharp increase in the demand for marketing
            specialists. This implies that your chances of landing a job are
            significantly increased once you've earned your qualification.{" "}
            <br /> <br />
            Additionally, studying marketing will give you the information
            necessary to comprehend more general business principles. You will
            become knowledgeable in management, accounting, market analysis, and
            communication as a result. All of these abilities will help in a job
            that lasts a lifetime.
          </Typography>
        </CardContent>
      </li>
    </ul>
  );
}
