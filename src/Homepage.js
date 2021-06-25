import Header from './components/Header'
import Footer from './components/Footer'
import DefinitionSection from './components/Sections/DefinitionSection'
import OperationsSection from './components/Sections/OperationsSection'
import ResultSection from './components/Sections/ResultSection'
import React, { useState } from 'react';

function Homepage(props) {


    useState()

    return (
        <div>

            <Header />
            <DefinitionSection
                definedMatrices = {props.definedMatrices}
            />
            <OperationsSection />
            <ResultSection />
            {/*<Footer />*/}
        </div>
    )
}

export default Homepage