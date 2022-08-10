import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const FaqQuestions = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Accordion sx={{ boxShadow: 'none', fontFamily: 'Inter' }}>
      <AccordionSummary
        onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
        expandIcon={
          isOpen ? (
            <AddCircleOutlineIcon sx={{ color: '#22B56B' }} />
          ) : (
            <RemoveCircleOutlineIcon sx={{ color: '#22B56B' }} />
          )
        }
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography component="h2">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FaqQuestions;
