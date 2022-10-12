import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';

const Topic = ({ topic }) => {
    const { id, name, logo } = topic;


    return (
        <div>
            <div className='topic-container'>
                <div className='img-container'>
                    <img src={logo} alt="" />
                </div>
                <div className='name-flex'>
                    <h1 className='name-font'>{name}</h1>
                    <Link className='btn-start' to={`/start/${id}`} >Start</Link>
                </div>
            </div>
        </div>
    );
};

export default Topic;