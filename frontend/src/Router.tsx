import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '@components/Header';
import { Home } from '@pages/Home';

export class Router extends Component {
    render() {
        return (
            <>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </>
        );
    }
}
