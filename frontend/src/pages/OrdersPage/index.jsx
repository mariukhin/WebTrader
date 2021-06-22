import { Table } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as orderApiActions from 'Api/order';
import { getError, getOrdersList } from 'Selectors/order';

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

const dataSource = [
  {
    key: '1',
    Product: 'APD US Equity_US_USD_USD',
    Ticker: 'APD',
    MarketDescription: '',
    Exchange: 'US',
    Currency: 'USD',
    CurrentValue: 1,
    TradedValue: 3,
    WantedValue: 4,
    Price: 20.1,
  },
  {
    key: '2',
    Product: 'AXP US Equity_US_USD_USD',
    Ticker: 'AXP',
    MarketDescription: '',
    Exchange: 'US',
    Currency: 'USD',
    CurrentValue: 3,
    TradedValue: 0,
    WantedValue: 3,
    Price: 69.34,
  },
  {
    key: '3',
    Product: 'APH US Equity_US_USD_USD',
    Ticker: 'APH',
    MarketDescription: '',
    Exchange: 'US',
    Currency: 'USD',
    CurrentValue: 14,
    TradedValue: -5,
    WantedValue: 9,
    Price: 214.25,
  },
  {
    key: '4',
    Product: 'ADI US Equity_US_USD_USD',
    Ticker: 'ADI',
    MarketDescription: 'Some description',
    Exchange: 'US',
    Currency: 'USD',
    CurrentValue: 12,
    TradedValue: -2,
    WantedValue: 10,
    Price: 32.76,
  },
  {
    key: '5',
    Product: 'AMA US Equity_US_USD_USD',
    Ticker: 'AMA',
    MarketDescription: '',
    Exchange: 'US',
    Currency: 'USD',
    CurrentValue: 10,
    TradedValue: 10,
    WantedValue: 20,
    Price: 16.09,
  },
];

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
    title: 'Product Description',
    dataIndex: 'marketDescription',
    key: 'marketDescription',
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
    title: 'Current Value',
    dataIndex: 'currentValue',
    key: 'currentValue',
    align: 'center',
  },
  {
    title: 'Traded Value',
    dataIndex: 'tradedValue',
    key: 'tradedValue',
    align: 'center',
  },
  {
    title: 'Wanted Value',
    dataIndex: 'wantedValue',
    key: 'wantedValue',
    align: 'center',
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
