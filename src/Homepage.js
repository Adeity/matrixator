import Header from './components/Header'
import Footer from './components/Footer'
import DefinitionSection from './components/Sections/DefinitionSection'
import ResultSection from './components/Sections/ResultSection'
import React, { useState } from 'react';

function Homepage(props) {

    return (
        <div>
            <Header />
            <DefinitionSection
                definedMatrices = {props.initialData.definedMatrices}
                calculations = {props.calculations}
                definitionSectionFunctions = {props.definitionSectionFunctions}
            />
            <ResultSection
                matrixGetters = {props.matrixGetters}
                expressionText = {props.expressionText}
                resultMatrix = {props.resultMatrix}
                parseError = {props.parseError}
            />
            {/*<Footer />*/}
        </div>
    )
}

export default Homepage