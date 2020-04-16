import React from 'react';
import './style.scss';
export const BodyContentBox = (props) => {
    return (
      <main className={`BodyContentBox ${props.customClass}`} >
        {props.children}
    </main>
    );
  }