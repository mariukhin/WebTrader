import React from 'react';
import PageWithTabs from 'Components/PageWithTabs';
import { Wrapper, Container } from './styledComponents';

const ExecutionPage = () => {
  return (
    <PageWithTabs pageKey={2}>
      <Wrapper>
        <Container>ExecutionPage</Container>
      </Wrapper>
    </PageWithTabs>
  );
};

export default ExecutionPage;
