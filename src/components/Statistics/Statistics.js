import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import './Statistics.css';


const Statistics = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <div className='st-header'>
                <h1>Statistics</h1>
                <h3>"Chart"</h3>
            </div>
            
           
            <div className='chart'>
                <LineChart width={1000} height={400} data={data.data}>
                    <Line type="monotone" dataKey="total" stroke="#006400" />
                    <CartesianGrid stroke="#008080" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        </div>

    );
};

export default Statistics;