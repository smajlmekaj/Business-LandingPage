import React from 'react';

import styled from '@emotion/styled';
import FaqQuestion from './FaqQuestion';

const SectionWrapper = styled.div`
  margin: 20px 0;
  p {
    font-weight: 400;
    font-size: 13px;
    color: #667085;
    font-family: 'Inter';
  }

  h2 {
    font-weight: 600;
    font-size: 14px;
    color: #101828;
    font-style: normal;
    padding: 10px 0;
    font-family: inherit;
  }
`;

const FaqQuestions = () => {
  return (
    <SectionWrapper>
      <FaqQuestion
        title="Is there a free trial available?"
        description="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
      />
      <FaqQuestion
        title="Can I change my plan later?"
        description="Insert Text..."
      />
      <FaqQuestion
        title="What is your cancellation policy?"
        description="Insert Text..."
      />
      <FaqQuestion
        title="Can other info be added to an invoice?"
        description="Insert Text..."
      />
      <FaqQuestion
        title="How does billing work?"
        description="Insert Text..."
      />
      <FaqQuestion
        title="How do I change my account email?"
        description="Insert Text..."
      />
    </SectionWrapper>
  );
};

export default FaqQuestions;
