import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line,XAxis, YAxis,Tooltip } from 'recharts';

const Statistics = () => {
    const data = useLoaderData();
    const chatdata = data.data;
    return (
        <div>
            <div>
                {
                chatdata.map(cd=> console.log(cd))
}
            </div>
            
            <div>
                
            </div>
        </div>

    );
};

export default Statistics;