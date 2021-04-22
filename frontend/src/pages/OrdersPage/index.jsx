import React from 'react';
import PageWithTabs from 'Components/PageWithTabs';
import { Wrapper, Container } from './styledComponents';

const OrdersPage = () => {
  return (
    <PageWithTabs pageKey={1}>
      <Wrapper>
        <Container>OrdersPage</Container>
      </Wrapper>
    </PageWithTabs>
  );
};

export default OrdersPage;
