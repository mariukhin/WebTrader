import React, { useState, useEffect } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import * as portfolioApiActions from 'Api/portfolio';
import { getPortfolioList } from 'Selectors/portfolio';

import { FETCHING_STATE } from 'Utils/';

import PageWithTabs from 'Components/PageWithTabs';
import { Wrapper, Container } from './styledComponents';

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const PortfolioPage = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(null);
  const [editingKey, setEditingKey] = useState('');

  const dispatch = useDispatch();
  const portfolioList = useSelector(getPortfolioList);

  useEffect(() => {
    dispatch(portfolioApiActions.getPortfolioList());
  }, []);

  const isEditing = record => record.key === editingKey;

  const edit = record => {
    form.setFieldsValue({
      Product: '',
      Ticker: '',
      Amount: 0,
      AvgPrice: 0,
      BrokerAmount: 0,
      BrokerAvgPrice: 0,
      PL: 0.0,
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async key => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex(item => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'product',
      key: 'product',
      editable: true,
    },
    {
      title: 'Ticker',
      dataIndex: 'ticker',
      key: 'ticker',
      align: 'center',
      editable: true,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      align: 'center',
      editable: true,
    },
    {
      title: 'Avg. Price',
      dataIndex: 'avgPrice',
      key: 'avgPrice',
      align: 'center',
      editable: true,
    },
    {
      title: 'Broker Amount',
      dataIndex: 'brokerAmount',
      key: 'brokerAmount',
      align: 'center',
      editable: true,
    },
    {
      title: 'Broker Avg. Price',
      dataIndex: 'brokerAvgPrice',
      key: 'brokerAvgPrice',
      align: 'center',
      editable: true,
    },
    {
      title: 'PL %',
      dataIndex: 'pl',
      key: 'pl',
      align: 'center',
      editable: true,
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ''}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: record => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <PageWithTabs pageKey={3}>
      <Wrapper>
        <Container>
          {portfolioList && portfolioList.state === FETCHING_STATE.LOADED && (
            <Form form={form} component={false}>
              <Table
                components={{
                  body: {
                    cell: EditableCell,
                  },
                }}
                pagination={false}
                columns={mergedColumns}
                dataSource={portfolioList.data}
              />
            </Form>
          )}
        </Container>
      </Wrapper>
    </PageWithTabs>
  );
};

export default PortfolioPage;
