import Header from './components/Header'
import Footer from './components/Footer'
import DefinitionSection from './components/Sections/DefinitionSection'
import OperationsSection from './components/Sections/OperationsSection'
import ResultSection from './components/Sections/ResultSection'
import React, { useState } from 'react';

function Homepage(props) {

    return (
        <div>
            <Header />
            <DefinitionSection
                definedMatrices = {props.initialData.definedMatrices}
                calculations = {props.calculations}
            />
            {/*<OperationsSection*/}
            {/*    initialData = {props.initialData}*/}
            {/*    expressionText = {props.expressionText}*/}
            {/*    calculations = {props.calculations}*/}
            {/*/>*/}
            <ResultSection
                definedMatrices = {props.initialData.definedMatrices}
                expressionText = {props.expressionText}
                resultMatrix = {props.resultMatrix}
            />
            {/*<Footer />*/}
        </div>
    )
}

export default Homepage