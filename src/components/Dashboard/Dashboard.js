import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
    const data =
        [
            {
                "month": "Mar",
                "investment": 100000,
                "sell": 241,
                "revenue": 10401
            },
            {
                "month": "Apr",
                "investment": 200000,
                "sell": 423,
                "revenue": 24500
            },
            {
                "month": "May",
                "investment": 500000,
                "sell": 726,
                "revenue": 67010
            },
            {
                "month": "Jun",
                "investment": 500000,
                "sell": 529,
                "revenue": 40405
            },
            {
                "month": "Jul",
                "investment": 600000,
                "sell": 601,
                "revenue": 50900
            },
            {
                "month": "Aug",
                "investment": 700000,
                "sell": 670,
                "revenue": 61000
            }
        ]

    return (
        <div className='dash-board'>
            <div>
                <h3>Line Chart</h3>
                <LineChart width={400} height={500} data={data}>
                    <Line dataKey={'investment'}></Line>
                    <Line dataKey={'sell'} stroke="#82ca9d"></Line>
                    <CartesianGrid></CartesianGrid>
                    <XAxis datakey={'month'}></XAxis>
                    <YAxis></YAxis>
                    <Legend></Legend>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
            <div>
                <h3>Bar Chart</h3>
                <BarChart width={400} height={500} data={data} >
                    <Bar dataKey={'sell'} fill="#82ca9d"></Bar>
                    <Bar dataKey={'revenue'} fill="#8884d8"></Bar>
                    <CartesianGrid></CartesianGrid>
                    <XAxis></XAxis>
                    <YAxis></YAxis>
                    <Legend></Legend>
                    <Tooltip></Tooltip>
                </BarChart>

            </div>
        </div>
    );
};

export default Dashboard;