import { Table } from 'antd';
import React from 'react';
import PageWithTabs from 'Components/PageWithTabs';
import moment from 'moment';
import { Wrapper, Container } from './styledComponents';

const dataSource = [
  {
    key: '1',
    TimeStamp: Date.now(),
    Product: 'APD US Equity_US_USD_USD',
    Ticker: 'APD',
    Exchange: 'US',
    Currency: 'USD',
    Side: 'BUY',
    Qty: 1,
    Price: 284.1,
  },
  {
    key: '2',
    TimeStamp: Date.now(),
    Product: 'APD US Equity_US_USD_USD',
    Ticker: 'APD',
    Exchange: 'US',
    Currency: 'USD',
    Side: 'BUY',
    Qty: 4,
    Price: 147.145,
  },
  {
    key: '3',
    TimeStamp: Date.now(),
    Product: 'APD US Equity_US_USD_USD',
    Ticker: 'APD',
    Exchange: 'US',
    Currency: 'USD',
    Side: 'SELL',
    Qty: 20,
    Price: 67.8983,
  },
  {
    key: '4',
    TimeStamp: Date.now(),
    Product: 'APD US Equity_US_USD_USD',
    Ticker: 'APD',
    Exchange: 'US',
    Currency: 'USD',
    Side: 'BUY',
    Qty: 10,
    Price: 159.3447,
  },
  {
    key: '5',
    TimeStamp: Date.now(),
    Product: 'APD US Equity_US_USD_USD',
    Ticker: 'APD',
    Exchange: 'US',
    Currency: 'USD',
    Side: 'SELL',
    Qty: 28,
    Price: 135.1779,
  },
  {
    key: '6',
    TimeStamp: Date.now(),
    Product: 'APD US Equity_US_USD_USD',
    Ticker: 'APD',
    Exchange: 'US',
    Currency: 'USD',
    Side: 'BUY',
    Qty: 13,
    Price: 189.345,
  },
  {
    key: '7',
    TimeStamp: Date.now(),
    Product: 'APD US Equity_US_USD_USD',
    Ticker: 'APD',
    Exchange: 'US',
    Currency: 'USD',
    Side: 'BUY',
    Qty: 1,
    Price: 803.8405,
  },
  {
    key: '8',
    TimeStamp: Date.now(),
    Product: 'APD US Equity_US_USD_USD',
    Ticker: 'APD',
    Exchange: 'US',
    Currency: 'USD',
    Side: 'BUY',
    Qty: 28,
    Price: 39.285,
  },
  {
    key: '9',
    TimeStamp: Date.now(),
    Product: 'APD US Equity_US_USD_USD',
    Ticker: 'APD',
    Exchange: 'US',
    Currency: 'USD',
    Side: 'BUY',
    Qty: 14,
    Price: 481.8249,
  },
  {
    key: '10',
    TimeStamp: Date.now(),
    Product: 'APD US Equity_US_USD_USD',
    Ticker: 'APD',
    Exchange: 'US',
    Currency: 'USD',
    Side: 'BUY',
    Qty: 17,
    Price: 102.6182,
  },
  {
    key: '11',
    TimeStamp: Date.now(),
    Product: 'APD US Equity_US_USD_USD',
    Ticker: 'APD',
    Exchange: 'US',
    Currency: 'USD',
    Side: 'BUY',
    Qty: 3,
    Price: 161.3524,
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
  },
  {
    title: 'Exchange',
    dataIndex: 'Exchange',
    key: 'Exchange',
    align: 'center',
  },
  {
    title: 'Currency',
    dataIndex: 'Currency',
    key: 'Currency',
    align: 'center',
  },
  {
    title: 'Side',
    dataIndex: 'Side',
    key: 'Side',
    align: 'center',
  },
  {
    title: 'Qty',
    dataIndex: 'Qty',
    key: 'Qty',
    align: 'center',
  },
  {
    title: 'Price',
    dataIndex: 'Price',
    key: 'Price',
    width: 90,
  },
  {
    title: 'Date',
    dataIndex: 'TimeStamp',
    key: 'TimeStamp',
    width: 170,
    render: date => <span>{moment(date).format('YYYY/MM/DD hh:mm:ss')}</span>,
  },
];


const TransactionsPage = () => {
  return (
    <PageWithTabs pageKey={4}>
      <Wrapper>
        <Container>
          <Table
            pagination={{
              position: ['bottomLeft'],
            }}
            columns={columns}
            dataSource={dataSource}
          />
        </Container>
      </Wrapper>
    </PageWithTabs>
  );
};

export default TransactionsPage;
