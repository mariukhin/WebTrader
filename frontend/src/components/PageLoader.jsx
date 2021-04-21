import PropTypes from 'prop-types';

import { Spin } from 'antd';

import React from 'react';
import styled from 'styled-components';

const PageLoader = ({ height = '100vh' }) => (
  <PageLoader.Wrapper height={height}>
    <Spin size="large" />
  </PageLoader.Wrapper>
);

PageLoader.defaultProps = {
  height: '100vh',
};

PageLoader.propTypes = {
  height: PropTypes.string,
};

PageLoader.Wrapper = styled.div`
  height: ${({ height }) => height};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--merino);

  & .ant-spin-dot-item {
    background-color: var(--blue-zodiac);
  }
`;

export default PageLoader;
