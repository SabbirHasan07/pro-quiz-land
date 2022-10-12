import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPenNib } from '@fortawesome/free-solid-svg-icons';

const Topics = () => {
    const topics = useLoaderData();
    const topicsData = topics.data;



    return (
        <div>
            <div className='title-head'>
                <h1>Start Your Journey and make yourself like a pro  <FontAwesomeIcon icon={faPenNib} /></h1>
            </div>
            <div className='topics-container'>
                {
                    topicsData.map(topic => <Topic
                        key={topic.id}

                        topic={topic}

                    ></Topic>)
                }
            </div>
        </div>
    );
};

export default Topics;