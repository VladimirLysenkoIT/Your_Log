import React from 'react';
import {Header} from '../../components/header/index';
import { BodyContentBox } from '../../components/bodyContentBox';

export const Home = () => {
    return (
        <div className="">
            <Header />
            <BodyContentBox customClass={'home'}>
                <h1>Hello it's homepage</h1>
            </BodyContentBox>
        </div>
    );
}