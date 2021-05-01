import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { routePaths } from 'Routes';

import { Tabs } from 'antd';

import React from 'react';
import styled from 'styled-components';

const { TabPane } = Tabs;

const PageWithTabs = ({ height = '100vh', pageKey, children }) => {
  const history = useHistory();
  const currentTabRoute = activeKey => {
    switch (activeKey) {
      case 1:
        return routePaths.orders;
      case 2:
        return routePaths.execution;
      case 3:
        return routePaths.portfolio;
      case 4:
        return routePaths.transactions;
      default:
        break;
    }
  };
  return (
    <PageWithTabs.Wrapper height={height}>
      <Tabs
        defaultActiveKey={`${pageKey}`}
        type="card"
        centered
        onTabClick={(activeKey, e) =>
          history.replace(currentTabRoute(Number(activeKey)))
        }
      >
        <TabPane tab="Orders" key="1">
          {children}
        </TabPane>
        <TabPane tab="Execution" key="2">
          {children}
        </TabPane>
        <TabPane tab="Portfolio" key="3">
          {children}
        </TabPane>
        <TabPane tab="Transactions" key="4">
          {children}
        </TabPane>
      </Tabs>
    </PageWithTabs.Wrapper>
  );
};

PageWithTabs.defaultProps = {
  height: '100vh',
  pageKey: 1,
};

PageWithTabs.propTypes = {
  height: PropTypes.string,
  pageKey: PropTypes.number,
};

PageWithTabs.Wrapper = styled.div`
  height: ${({ height }) => height};
`;

export default PageWithTabs;
