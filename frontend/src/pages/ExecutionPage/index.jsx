import { Table, Select } from 'antd';
import moment from 'moment';
import React from 'react';
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
    Id: '1',
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
  },
  {
    title: 'Ticker',
    dataIndex: 'Ticker',
    key: 'Ticker',
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
    title: 'Order Type',
    dataIndex: 'OrderType',
    key: 'OrderType',
    render: type => (
      <Select defaultValue={type} style={{ width: 120 }}>
        <Option value="market">MARKET</Option>
        <Option value="limit">LIMIT</Option>
      </Select>
    ),
  },
  {
    title: 'Order Status',
    dataIndex: 'OrderStatus',
    key: 'OrderStatus',
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
    render: date => <span>{moment(date).format('YYYY/MM/DD hh:mm:ss')}</span>,
  },
];

const ExecutionPage = () => {
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows,
      );
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };

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
              ...rowSelection,
            }}
            pagination={false}
            columns={columns}
            dataSource={dataSource}
          />
        </Container>
      </Wrapper>
    </PageWithTabs>
  );
};

export default ExecutionPage;
