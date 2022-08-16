import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import styled from '@emotion/styled';

const AccordionWrapper = styled.div`
  .css-1tom6df-MuiPaper-root-MuiAccordion-root:before {
    height: 0;
  }

  .css-13859ar-MuiPaper-root-MuiAccordion-root:last-of-type {
    border-radius: 0;
  }
  .css-13859ar-MuiPaper-root-MuiAccordion-root.Mui-expanded:last-of-type {
    padding-bottom: 10px;
  }
`;

const FaqQuestions = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <AccordionWrapper>
      <Accordion
        sx={{
          fontFamily: 'Inter',
          borderRadius: 'none',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(0, 0 , 0, 0.2)',
        }}
      >
        <AccordionSummary
          onClick={() =>
            isOpen ? setIsOpen(false) : setIsOpen(true)
          }
          expandIcon={
            isOpen ? (
              <AddCircleOutlineIcon sx={{ color: '#22B56B' }} />
            ) : (
              <RemoveCircleOutlineIcon sx={{ color: '#22B56B' }} />
            )
          }
          aria-controls="panel1a-content"
        >
          <Typography component="h2">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{description}</Typography>
        </AccordionDetails>
      </Accordion>
    </AccordionWrapper>
  );
};

export default FaqQuestions;
