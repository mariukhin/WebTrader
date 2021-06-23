import { Table } from 'antd';
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import * as transactionApiActions from 'Api/transaction';
import { getTransactionsList } from 'Selectors/transaction';

import { FETCHING_STATE } from 'Utils/';

import PageWithTabs from 'Components/PageWithTabs';
import moment from 'moment';
import { Wrapper, Container } from './styledComponents';

const columns = [
  {
    title: 'Product Name',
    dataIndex: 'product',
    key: 'product',
    width: 220,
  },
  {
    title: 'Ticker',
    dataIndex: 'ticker',
    key: 'ticker',
    align: 'center',
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
    title: 'Side',
    dataIndex: 'side',
    key: 'side',
    align: 'center',
  },
  {
    title: 'Qty',
    dataIndex: 'qty',
    key: 'qty',
    align: 'center',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    width: 90,
  },
  {
    title: 'Date',
    dataIndex: 'timeStamp',
    key: 'timeStamp',
    width: 170,
    render: date => <span>{moment(date).format('YYYY/MM/DD hh:mm:ss')}</span>,
  },
];

const TransactionsPage = () => {
  const dispatch = useDispatch();
  const transactionsList = useSelector(getTransactionsList);

  useEffect(() => {
    dispatch(transactionApiActions.getTransactionsList());
  }, []);

  return (
    <PageWithTabs pageKey={4}>
      <Wrapper>
        <Container>
          {transactionsList &&
            transactionsList.state === FETCHING_STATE.LOADED && (
              <Table
                pagination={{
                  position: ['bottomLeft'],
                }}
                columns={columns}
                dataSource={transactionsList.data}
              />
            )}
        </Container>
      </Wrapper>
    </PageWithTabs>
  );
};

export default TransactionsPage;
