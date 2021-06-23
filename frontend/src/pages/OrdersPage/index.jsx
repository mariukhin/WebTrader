import { Table } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as orderApiActions from 'Api/order';
import { getOrdersList } from 'Selectors/order';

import { FETCHING_STATE } from 'Utils/';

import PageWithTabs from 'Components/PageWithTabs';
import {
  Wrapper,
  Container,
  FilterContainer,
  FilterText,
  FilterInput,
  ResetButton,
  ShowTradersCheckbox,
} from './styledComponents';

const columns = [
  {
    title: 'Product Name',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: 'Ticker',
    dataIndex: 'ticker',
    key: 'ticker',
  },
  {
    title: 'Exchange',
    dataIndex: 'exchange',
    key: 'exchange',
    align: 'center',
  },
  {
    title: 'Currency',
    dataIndex: 'currency',
    key: 'currency',
    align: 'center',
  },
  {
    title: 'Time In Force',
    dataIndex: 'timeInForce',
    key: 'timeInForce',
    align: 'center',
  },
  {
    title: 'QTY',
    dataIndex: 'qty',
    key: 'qty',
    align: 'center',
  },
  {
    title: 'Order Status',
    dataIndex: 'orderStatus',
    key: 'orderStatus',
    align: 'center',
  },
  {
    title: 'Order Text',
    dataIndex: 'orderText',
    key: 'orderText',
  },
  {
    title: 'Algo Strategy',
    dataIndex: 'algoStrategy',
    key: 'algoStrategy',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
];

const OrdersPage = () => {
  const dispatch = useDispatch();
  const ordersList = useSelector(getOrdersList);

  useEffect(() => {
    dispatch(orderApiActions.getOrdersList());
  }, []);

  return (
    <PageWithTabs pageKey={1}>
      <Wrapper>
        <Container>
          <ShowTradersCheckbox>Show Closeout Traders</ShowTradersCheckbox>
          <FilterContainer>
            <FilterText>Filter:</FilterText>
            <FilterInput enterButton="Apply" size="medium" /* loading */ />
            <ResetButton>Reset</ResetButton>
          </FilterContainer>
          {ordersList && ordersList.state === FETCHING_STATE.LOADED && (
            <Table
              pagination={false}
              columns={columns}
              dataSource={ordersList.data}
            />
          )}
        </Container>
      </Wrapper>
    </PageWithTabs>
  );
};

export default OrdersPage;
