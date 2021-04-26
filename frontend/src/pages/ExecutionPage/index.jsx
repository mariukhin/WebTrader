import { Table, Select } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import PageWithTabs from 'Components/PageWithTabs';
import {
  Wrapper,
  ButtonContainer,
  ButtonStyle,
  Container,
  ShowTradersCheckbox,
  PriceInput,
} from './styledComponents';

const { Option } = Select;

const dataSource = [
  {
    key: '1',
    TimeStamp: Date.now(),
    Execute: true,
    Product: 'APD US Equity_US_USD_USD',
    Ticker: 'APD',
    Exchange: 'US',
    Currency: 'USD',
    OrderType: 'LIMIT',
    Side: 'BUY',
    TimeInForce: 'GTC',
    Qty: 1,
    Price: 284.1,
    OrderStatus: 'UNKNOWN',
    OrderText: 'Not in market',
    AlgoStrategy: 'NONE',
  },
  {
    key: '2',
    TimeStamp: Date.now(),
    Execute: true,
    Product: 'APD US Equity_US_USD_USD',
    Ticker: 'APD',
    Exchange: 'US',
    Currency: 'USD',
    OrderType: 'MARKET',
    Side: 'SELL',
    TimeInForce: 'GTC',
    Qty: 1,
    Price: 0,
    OrderStatus: 'UNKNOWN',
    OrderText: 'Not in market',
    AlgoStrategy: 'NONE',
  },
  {
    key: '3',
    TimeStamp: Date.now(),
    Execute: true,
    Product: 'APD US Equity_US_USD_USD',
    Ticker: 'APD',
    Exchange: 'US',
    Currency: 'USD',
    OrderType: 'LIMIT',
    Side: 'SELL',
    TimeInForce: 'GTC',
    Qty: 1,
    Price: 284.1,
    OrderStatus: 'UNKNOWN',
    OrderText: 'Not in market',
    AlgoStrategy: 'NONE',
  },
  {
    key: '4',
    TimeStamp: Date.now(),
    Execute: true,
    Product: 'APD US Equity_US_USD_USD',
    Ticker: 'APD',
    Exchange: 'US',
    Currency: 'USD',
    OrderType: 'MARKET',
    Side: 'BUY',
    TimeInForce: 'GTC',
    Qty: 1,
    Price: 0,
    OrderStatus: 'UNKNOWN',
    OrderText: 'Not in market',
    AlgoStrategy: 'NONE',
  },
  {
    key: '5',
    TimeStamp: Date.now(),
    Execute: true,
    Product: 'APD US Equity_US_USD_USD',
    Ticker: 'APD',
    Exchange: 'US',
    Currency: 'USD',
    OrderType: 'LIMIT',
    Side: 'BUY',
    TimeInForce: 'GTC',
    Qty: 1,
    Price: 284.1,
    OrderStatus: 'UNKNOWN',
    OrderText: 'Not in market',
    AlgoStrategy: 'NONE',
  },
  {
    key: '6',
    TimeStamp: Date.now(),
    Execute: true,
    Product: 'APD US Equity_US_USD_USD',
    Ticker: 'APD',
    Exchange: 'US',
    Currency: 'USD',
    OrderType: 'LIMIT',
    Side: 'BUY',
    TimeInForce: 'GTC',
    Qty: 1,
    Price: 284.1,
    OrderStatus: 'UNKNOWN',
    OrderText: 'Not in market',
    AlgoStrategy: 'NONE',
  },
];

const columns = [
  {
    title: 'Product Name',
    dataIndex: 'Product',
    key: 'Product',
    width: 220,
  },
  {
    title: 'Ticker',
    dataIndex: 'Ticker',
    key: 'Ticker',
    align: 'center',
    width: 80,
  },
  {
    title: 'Exchange',
    dataIndex: 'Exchange',
    key: 'Exchange',
    align: 'center',
    width: 100,
  },
  {
    title: 'Currency',
    dataIndex: 'Currency',
    key: 'Currency',
    align: 'center',
    width: 100,
  },
  {
    title: 'Order Type',
    dataIndex: 'OrderType',
    key: 'OrderType',
    width: 130,
    render: type => (
      <Select defaultValue={type} style={{ width: 98 }}>
        <Option value="market">MARKET</Option>
        <Option value="limit">LIMIT</Option>
      </Select>
    ),
  },
  {
    title: 'Order Status',
    dataIndex: 'OrderStatus',
    key: 'OrderStatus',
    width: 110,
  },
  {
    title: 'Order Text',
    dataIndex: 'OrderText',
    key: 'OrderText',
  },
  {
    title: 'Algo Strategy',
    dataIndex: 'AlgoStrategy',
    key: 'AlgoStrategy',
  },
  {
    title: 'Side',
    dataIndex: 'Side',
    key: 'Side',
  },
  {
    title: 'Time In Force',
    dataIndex: 'TimeInForce',
    key: 'TimeInForce',
  },
  {
    title: 'Qty',
    dataIndex: 'Qty',
    key: 'Qty',
    align: 'center',
    width: 60,
  },
  {
    title: 'Price',
    dataIndex: 'Price',
    key: 'Price',
    render: price => <PriceInput value={price} />,
  },
  {
    title: 'Date',
    dataIndex: 'TimeStamp',
    key: 'TimeStamp',
    width: 150,
    render: date => <span>{moment(date).format('YYYY/MM/DD hh:mm:ss')}</span>,
  },
];

const ExecutionPage = () => {
  // const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  // const onSelectChange = newSelectedRowKeys => {
  //   console.log('selectedRowKeys changed: ', newSelectedRowKeys);
  //   setSelectedRowKeys({ newSelectedRowKeys });
  // };

  return (
    <PageWithTabs pageKey={2}>
      <Wrapper>
        <Container>
          <ShowTradersCheckbox>Show Closeout Traders</ShowTradersCheckbox>
          <ButtonContainer>
            <ButtonStyle type="primary">Connect</ButtonStyle>
            <ButtonStyle>Execute</ButtonStyle>
            <ButtonStyle>Generate Orders</ButtonStyle>
            <ButtonStyle danger>Cancel</ButtonStyle>
          </ButtonContainer>
          <Table
            rowSelection={{
              type: 'checkbox',
              // selectedRowKeys,
              // onChange: onSelectChange,
            }}
            pagination={false}
            columns={columns}
            dataSource={dataSource}
            scroll={{ y: 380 }}
          />
        </Container>
      </Wrapper>
    </PageWithTabs>
  );
};

export default ExecutionPage;
