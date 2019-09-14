import React from 'react';
import { Link } from 'react-router-dom';
import camaer from '../../assets/images/camaer.jpeg';
import  './Logo.css';

const logo = (props) => (
    <div className="Logo" style={{height: props.height}}>
        <Link to='/'>
            <img src={camaer} alt="MyBurger" />
        </Link>
        
    </div>
);
export default logo;