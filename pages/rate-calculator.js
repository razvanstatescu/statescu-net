import { NextSeo } from 'next-seo';
import React from 'react';
import NumberFormat from 'react-number-format';

import { Header } from '../components/Header';
import RateCalculatorStyle from '../styles/rate-calculator.module.scss';

export default class RateCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {
        week: "-",
        day: "-",
        hour: "-",
      },
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target ? target.value : event.value * 12;
    const name = target ? target.name : "income";

    const currentState = Object.assign({}, this.state, { [name]: value });

    this.setState({
      [name]: Number.parseInt(value),
    });

    if (currentState?.income && currentState?.billable_hours && currentState?.weeks_off) {
      this.setState({
        results: {
          week: Math.round(
            (((2 * currentState.income) / ((52 - currentState.weeks_off) * currentState.billable_hours)) *
              currentState.billable_hours) /
              5
          ),
          day: Math.round(
            ((2 * currentState.income) / ((52 - currentState.weeks_off) * currentState.billable_hours)) *
              currentState.billable_hours
          ),
          hour: Math.round((2 * currentState.income) / ((52 - currentState.weeks_off) * currentState.billable_hours)),
        },
      });
    }
  };

  render() {
    return (
      <div className="container mx-auto mt-8 md:mt-24 max-w-3xl mb-16">
        <NextSeo
          title="Freelancer Rate Calculator"
          openGraph={{
            url: "https://statescu.net/rate-calculator",
            title: "Freelancer Rate Calculator",
          }}
        />

        <div>
          <Header />

          <h1 className="font-raleway text-2xl md:text-4xl mb-1 mt-12 md:mt-16">⏱ Freelance Rate Calculator</h1>
          <p className="mb-8">
            You can use this simple freelance rate calculator as a starting point in your freelancing journey.{" "}
            <span className="font-bold block">Good luck 🚀!</span>
          </p>
          <div className="flex space-y-8 flex-wrap">
            <div className={`w-full ${RateCalculatorStyle.formGroup}`}>
              <NumberFormat
                thousandSeparator={true}
                onValueChange={this.handleInputChange}
                placeholder="Desired monthly income"
              />
              <small className="mt-1 text-gray-700 block">Input the monthly income in your own currency.</small>
              {/* <input
                type="number"
                name="income"
                placeholder="Desired annual income"
                onChange={this.handleInputChange}
              /> */}
            </div>
            <div className={`w-full md:w-1/2 md:pr-3 ${RateCalculatorStyle.formGroup}`}>
              <input
                type="number"
                name="billable_hours"
                placeholder="Number of billable hours per week"
                onChange={this.handleInputChange}
              />
            </div>
            <div className={`w-full md:w-1/2 md:pl-3 ${RateCalculatorStyle.formGroup}`}>
              <input
                type="number"
                name="weeks_off"
                placeholder="Number of weeks off per year"
                onChange={this.handleInputChange}
              />
            </div>
          </div>

          <h2 className="text-2xl mt-12 mb-4">💰 A good rate for you is ...</h2>
          <div className="flex flex-wrap md:flex-no-wrap md:space-x-4 space-y-6 md:space-y-0">
            <div className={RateCalculatorStyle.resultItem}>
              <div className={RateCalculatorStyle.header}>Per Week</div>
              <div>{this.state.results.week}</div>
            </div>
            <div className={RateCalculatorStyle.resultItem}>
              <div className={RateCalculatorStyle.header}>Per Day</div>
              <div>{this.state.results.day}</div>
            </div>
            <div className={RateCalculatorStyle.resultItem}>
              <div className={RateCalculatorStyle.header}>Per Hour</div>
              <div>{this.state.results.hour}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
