import React from 'react';
import './Loading.css';
import loadingImg from '../../assets/img/loadingImg.gif';

export default function Loading() {
    return (
       <>
         <img className="loading text-center" src={loadingImg} alt="loading..." />
       </>
    )
}
