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

        {
            key: "4",
            index: 4,
            studentId: "S104",
            studentName: "Olivia Garcia",
            joinAt: "2022-04-20",
            fileUpload: "[invalid URL removed]"
        },
        {
            key: "5",
            index: 5,
            studentId: "S105",
            studentName: "William Harris",
            joinAt: "2022-05-10",
            fileUpload: "[invalid URL removed]"
        },
        {
            key: "6",
            index: 6,
            studentId: "S106",
            studentName: "Sophia Lee",
            joinAt: "2022-06-01",
            fileUpload: "[invalid URL removed]"
        },
        {
            key: "7",
            index: 7,
            studentName: "Benjamin Jones",
            studentId: "S107",
            joinAt: "2022-07-15",
            fileUpload: "[invalid URL removed]"
        },
        {
            key: "8",
            index: 8,
            studentId: "S108",
            studentName: "Emily Miller",
            joinAt: "2022-08-08",
            fileUpload: "[invalid URL removed]"
        },
        {
            key: "9",
            index: 9,
            studentId: "S109",
            studentName: "David Davis",
            joinAt: "2022-09-02",
            fileUpload: "[invalid URL removed]"
        },
        {
            key: "10",
            index: 10,
            studentId: "S110",
            studentName: "Isabella Garcia",
            joinAt: "2022-10-16",
            fileUpload: "[invalid URL removed]"
        }
    ];

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
    };

    return <Table rowSelection={rowSelection} columns={columns} dataSource={data} className='w-full antd-table' />;
};

export default TableComponent;