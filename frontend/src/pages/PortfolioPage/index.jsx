import React, { useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography } from 'antd';
import PageWithTabs from 'Components/PageWithTabs';
import { Wrapper, Container } from './styledComponents';

const dataSource = [
  {
    key: '1',
    Product: 'APD US Equity_US_USD_USD',
    Ticker: 'APD',
    Amount: 1,
    AvgPrice: 0,
    BrokerAmount: 0,
    BrokerAvgPrice: 0,
    PL: 0.0,
  },
  {
    key: '2',
    Product: 'AXP US Equity_US_USD_USD',
    Ticker: 'AXP',
    Amount: 3,
    AvgPrice: 0,
    BrokerAmount: 0,
    BrokerAvgPrice: 0,
    PL: 0.0,
  },
  {
    key: '3',
    Product: 'APH US Equity_US_USD_USD',
    Ticker: 'APH',
    Amount: 14,
    AvgPrice: 0,
    BrokerAmount: 0,
    BrokerAvgPrice: 0,
    PL: 0.0,
  },
  {
    key: '4',
    Product: 'ADI US Equity_US_USD_USD',
    Ticker: 'ADI',
    Amount: 12,
    AvgPrice: 0,
    BrokerAmount: 0,
    BrokerAvgPrice: 0,
    PL: 0.0,
  },
  {
    key: '5',
    Product: 'AMA US Equity_US_USD_USD',
    Ticker: 'AMA',
    Amount: 10,
    AvgPrice: 0,
    BrokerAmount: 0,
    BrokerAvgPrice: 0,
    PL: 0.0,
  },
];

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
  const [data, setData] = useState(dataSource);
  const [editingKey, setEditingKey] = useState('');

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
      dataIndex: 'Product',
      key: 'Product',
      editable: true,
    },
    {
      title: 'Ticker',
      dataIndex: 'Ticker',
      key: 'Ticker',
      align: 'center',
      editable: true,
    },
    {
      title: 'Amount',
      dataIndex: 'Amount',
      key: 'Amount',
      align: 'center',
      editable: true,
    },
    {
      title: 'Avg. Price',
      dataIndex: 'AvgPrice',
      key: 'AvgPrice',
      align: 'center',
      editable: true,
    },
    {
      title: 'Broker Amount',
      dataIndex: 'BrokerAmount',
      key: 'BrokerAmount',
      align: 'center',
      editable: true,
    },
    {
      title: 'Broker Avg. Price',
      dataIndex: 'BrokerAvgPrice',
      key: 'BrokerAvgPrice',
      align: 'center',
      editable: true,
    },
    {
      title: 'PL %',
      dataIndex: 'PL',
      key: 'PL',
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
          <Form form={form} component={false}>
            <Table
              components={{
                body: {
                  cell: EditableCell,
                },
              }}
              pagination={false}
              columns={mergedColumns}
              dataSource={data}
            />
          </Form>
        </Container>
      </Wrapper>
    </PageWithTabs>
  );
};

export default PortfolioPage;
