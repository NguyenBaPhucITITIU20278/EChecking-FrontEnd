import React from 'react';
import { Table } from 'antd';
import { render } from 'react-dom';

const TableComponent = () => {

    const columns = [   
        {
            title: () => <span className='max-w-32'>Index</span>,
            dataIndex: 'index',
            sorter: (a, b) => a.index - b.index,
            render: (text) => <span className='flex'>{text}</span>,
        },
        {
            title: 'Student ID',
            dataIndex: 'studentId',
            sorter: (a, b) => a.studentId - b.studentId,
            render: (text) => <span className='font-palanquin uppercase '>{text}</span>,
        },
        {
            title: 'Student Name',
            dataIndex: 'studentName',
            sorter: (a, b) => a.studentName.length - b.studentName.length,
        },
        {
            title: 'Join At',
            dataIndex: 'joinAt',
            sorter: (a, b) => new Date(a.joinAt) - new Date(b.joinAt),
        },
        {
            title: 'File Upload',
            dataIndex: 'fileUpload',
            render: (text, record) => (
                <a href={record.fileUpload} target="_blank" rel="noopener noreferrer">View File</a>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            index: 1,
            studentId: 'S101',
            studentName: 'John Doe',
            joinAt: '2022-01-01',
            fileUpload: 'https://example.com/file1.pdf',
        },
        {
            key: '2',
            index: 2,
            studentId: 'S102',
            studentName: 'Jane Smith',
            joinAt: '2022-01-02',
            fileUpload: 'https://example.com/file2.pdf',
        },
        {
            key: '3',
            index: 3,
            studentId: 'S103',
            studentName: 'Jim Brown',
            joinAt: '2022-01-03',
            fileUpload: 'https://example.com/file3.pdf',
        },
    ];

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
    };

    return <Table rowSelection={rowSelection} columns={columns} dataSource={data} className='w-full antd-table'/>;
};

export default TableComponent;