import ResultViewDiv from '../ResultViewDiv/ResultViewDiv'
import React from "react";

class ResultSection extends React.Component{
    shouldComponentUpdate(nextProps) {
        //  Component should update because expression text is different or result matrix is different
        return this.props.expressionText !== nextProps.expressionText
            ||
            this.props.resultMatrix !== nextProps.resultMatrix
            ||
            this.props.parseError !== nextProps.parseError;
    }

    render() {
        return(
            <div className={"result-section"}>
                <ResultViewDiv
                    key = {this.props.expressionText+this.props.resultMatrix}
                    matrixGetters = {this.props.matrixGetters}
                    expressionText = {this.props.expressionText}
                    resultMatrix = {this.props.resultMatrix}
                    parseError = {this.props.parseError}
                />
            </div>
        );
    }
}
export  default ResultSection;