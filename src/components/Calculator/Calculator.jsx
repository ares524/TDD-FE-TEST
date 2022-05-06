import React, { Component } from 'react';
import axios from 'axios';
import './Calculator.css';

import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';
import './Calculator.css';

class Calculator extends Component {
    state = {
        sum: '0',
        average: '0',
        deviation: '0',
        argument: '',
    };

    submit = () => {
        const that = this;
        const { argument } = that.state;
        if (argument !== '') {
            axios
                .post('http://localhost:3001/api/calculate', {
                    argument,
                })
                .then(function (response) {
                    const resp = response.data;
                    that.setState({
                        sum: resp.sum.toString(),
                        average: resp.average.toFixed(2).toString(),
                        deviation: resp.deviation.toFixed(2).toString(),
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };

    setArguments = (value) => {
        const regex = /[^\d.,]|\.(?=.*\.)|\,(?=,*\,)/g;
        const subst = ``;

        const result = value.replace(regex, subst);
        this.setState({ argument: result });
        this.setState({
            sum: '0',
            average: '0',
            deviation: '0',
        });
    };

    render() {
        const { argument, sum, average, deviation } = this.state;

        return (
            <div className="calculator-container">
                <Display sum={sum} average={average} deviation={deviation} />
                <Keypad argument={argument} handleSubmit={this.submit} setArguments={this.setArguments} />
            </div>
        );
    }
}

export default Calculator;
