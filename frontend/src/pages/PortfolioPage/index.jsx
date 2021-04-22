import React from 'react';
import PageWithTabs from 'Components/PageWithTabs';
import { Wrapper, Container } from './styledComponents';

const PortfolioPage = () => {
  return (
    <PageWithTabs pageKey={3}>
      <Wrapper>
        <Container>PortfolioPage</Container>
      </Wrapper>
    </PageWithTabs>
  );
};

export default PortfolioPage;
