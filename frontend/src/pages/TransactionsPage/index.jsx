import React from 'react';
import PageWithTabs from 'Components/PageWithTabs';
import { Wrapper, Container } from './styledComponents';

const TransactionsPage = () => {
  return (
    <PageWithTabs pageKey={4}>
      <Wrapper>
        <Container>TransactionsPage</Container>
      </Wrapper>
    </PageWithTabs>
  );
};

export default TransactionsPage;
