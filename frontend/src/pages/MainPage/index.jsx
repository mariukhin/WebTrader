import React from 'react';
import PageWithTabs from 'Components/PageWithTabs';
import { Wrapper, Container } from './styledComponents';

const MainPage = () => {
  return (
    <PageWithTabs pageNum={1}>
      <Wrapper>
        <Container>MainPage</Container>
      </Wrapper>
    </PageWithTabs>
  );
};

export default MainPage;
