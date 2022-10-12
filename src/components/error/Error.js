import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons';
import './Error.css';

const Error = () => {
    return (
        <div>
            <div className='error-dg'>
                <h1>404 Not Found</h1>
                <div>
                    <FontAwesomeIcon className='i-set' icon={faFaceSadTear} />
                </div>
            </div>
        </div>
    );
};

export default Error;