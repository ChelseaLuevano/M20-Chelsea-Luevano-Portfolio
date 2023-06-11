import React, { useState } from 'react';
import Portfolio from './Portfolio';
import Header from './Header';
import Footer from './Footer'

function mainPage() {

    return (
        <div>
            <Header />
            <Portfolio />
            <Footer />
        </div>
    )
}

export default mainPage;