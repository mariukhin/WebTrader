import { Table, Select, Form } from 'antd';
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import * as R from 'ramda';

import { useDispatch, useSelector } from 'react-redux';

import * as executionApiActions from 'Api/execution';
import { getExecutionList, getConnectedStatus } from 'Selectors/execution';

import { FETCHING_STATE } from 'Utils/';

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

const ExecutionPage = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(null);

  const dispatch = useDispatch();
  const executionList = useSelector(getExecutionList);
  const isConnected = useSelector(getConnectedStatus);

  useEffect(() => {
    dispatch(executionApiActions.getExecutionList());
  }, []);

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
      width: 80,
    },
    {
      title: 'Exchange',
      dataIndex: 'exchange',
      key: 'exchange',
      align: 'center',
      width: 100,
    },
    {
      title: 'Currency',
      dataIndex: 'currency',
      key: 'currency',
      align: 'center',
      width: 100,
    },
    {
      title: 'Order Type',
      dataIndex: 'orderType',
      key: 'orderType',
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
      dataIndex: 'orderStatus',
      key: 'orderStatus',
      width: 110,
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
      title: 'Side',
      dataIndex: 'side',
      key: 'side',
    },
    {
      title: 'Time In Force',
      dataIndex: 'timeInForce',
      key: 'timeInForce',
    },
    {
      title: 'Qty',
      dataIndex: 'qty',
      key: 'qty',
      align: 'center',
      width: 60,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price, record, idx) => (
        <PriceInput onChange={e => handleInput(e, record, idx)} value={price} />
      ),
    },
    {
      title: 'Date',
      dataIndex: 'timeStamp',
      key: 'timeStamp',
      width: 150,
      render: date => <span>{moment(date).format('YYYY/MM/DD hh:mm:ss')}</span>,
    },
  ];

  const handleInput = (e, record, idx) => {
    e.preventDefault();
    const updatedData = R.update(
      idx,
      { ...record, Price: Number(e.target.value) },
      data,
    );
    setData(updatedData);
  };

  return (
    <PageWithTabs pageKey={2}>
      <Wrapper>
        <Container>
          <ShowTradersCheckbox>Show Closeout Traders</ShowTradersCheckbox>
          <ButtonContainer>
            <ButtonStyle
              type="primary"
              onClick={e =>
                isConnected
                  ? dispatch(executionApiActions.disconnectExecution())
                  : dispatch(executionApiActions.connectExecution())
              }
            >
              {isConnected ? 'Disconnect' : 'Connect'}
            </ButtonStyle>
            <ButtonStyle>Execute</ButtonStyle>
            <ButtonStyle>Generate Orders</ButtonStyle>
            <ButtonStyle danger>Cancel</ButtonStyle>
          </ButtonContainer>
          {executionList && executionList.state === FETCHING_STATE.LOADED && (
            <Form form={form} component={false}>
              <Table
                rowSelection={{
                  type: 'checkbox',
                }}
                pagination={false}
                columns={columns}
                dataSource={executionList.data}
                scroll={{ y: 380 }}
              />
            </Form>
          )}
        </Container>
      </Wrapper>
    </PageWithTabs>
  );
};

export default ExecutionPage;
