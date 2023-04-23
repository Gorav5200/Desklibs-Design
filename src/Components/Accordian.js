import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderLeft: "none",
  borderRight: "none",
  borderBottom: "none",

  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:first-child": {
    borderTop: "none",
  },

  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: "0.9rem", color: "var(--heading-color)" }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  color: "var(--heading-color)",

  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },

  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

//Can be made dynamicaallyy based on API response
const accroidinData = [
  {
    heading: "Business management assignment help",
    subHeading: "Business development",
    details: `When you have an idea, it is easy to start a business but the real challenge comes in its development. Business development is the process and set of activities focused on building the business mainly in terms of sales and profit.
    There is a lot of competition in the market which makes survival very difficult thus it is important for the businesses to form plans and strategies which will build customers and clients thereby increasing sales and service delivery. Starting a business is like buying a plot but the value is added when the construction of the business is done, business development is a construction of the business to add and increase its value`,
  },
  {
    heading: "Why should you choose business development assignment help?",
    subHeading: "",
    details: `Get 24/7 help with your assignment with step by step study assistance as per your requirement.
    Online learning platforms are the best solutions to your business development assignment queries where you can search for any topic and get all the relevant and accurate solutions and study material for your academic assistance.
    By availing of the services you make studying more fun and effective in terms of learning because you can refer to various documents to find the best solution to your questions and you can study from anywhere and at any time you find convenient.
    Choose business development  online assignment help for your academics and open the doors to the new era’s smart learning system`,
  },
  {
    heading:
      "Why should you choose desklib’s business development assignment help?",
    subHeading: "Business development",
    details: `Desklib is an educational platform that started with the aim to help students with their studies. By choosing Desklib’s business development assignment help, students get access to more than two million documents and study material that students can refer to for their assignment, homework, research, dissertation, projects, etc.
    The online library provided by Desklib’s includes carefully chosen best documents from across the world and it is updated and added with new study material and documents regularly.
    Desklib is accessible by any student from anywhere and they can get the study material on any subject regardless of the college they are enrolled in or the course or degree they are pursuing. It provides various affordable subscription plans which students can choose from according to their budget, usage, and suitability.`,
  },
];

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  //   borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expandedIndex, setExpandedIndex] = React.useState(10);

  const RenderAccordian = ({ heading, subHeading, details, index }) => {
    return (
      <>
        <Accordion
          expanded={expandedIndex == index}
          onChange={ ()=>{ index == expandedIndex ? setExpandedIndex(null)  : setExpandedIndex(index) }}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>{heading}</Typography>
          </AccordionSummary>
          {subHeading && <Typography>{subHeading}</Typography>}
          <AccordionDetails>
            <Typography>{details}</Typography>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  return (
    <div
      style={{
        background: "rgba(0, 0, 0, .03)",
        padding: 4,
        borderRadius: "10px",
        border: "1px solid rgba(0, 0, 0, .125)",
      }}
    >
      {" "}
      {accroidinData.map((each, index) => (
        <RenderAccordian
          heading={each?.heading}
          subHeading={each?.subHeading}
          details={each?.details}
          index={index}
        />
      ))}
    </div>
  );
}
