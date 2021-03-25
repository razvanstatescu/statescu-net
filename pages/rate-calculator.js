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
    const value = target ? target.value : event.value;
    const name = target ? target.name : "income";

    const currentState = Object.assign({}, this.state, { [name]: value });

    this.setState({
      [name]: Number.parseInt(value),
    });

    if (currentState?.income && currentState?.billable_hours && currentState?.weeks_off) {
      const ratePerHour = (1.25 * currentState.income) / ((52 - currentState.weeks_off) * currentState.billable_hours);
      this.setState({
        results: {
          week: Math.round(ratePerHour * currentState.billable_hours),
          day: Math.round((ratePerHour * currentState.billable_hours) / 5),
          hour: Math.round(ratePerHour),
        },
      });
    }
  };

  render() {
    return (
      <div className="container mx-auto mt-8 md:mt-16 max-w-3xl mb-16">
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
              <p>👉🏻 Take into account your country and experience when you choose your annual income.</p>
              <p className="mb-2">
                👉🏻 One easy thing you can do if you had a full-time job recently is to take your gross salary (NOT net
                salary) and use that number here as a starting point.
              </p>
              <NumberFormat
                thousandSeparator={true}
                onValueChange={this.handleInputChange}
                placeholder="Desired annual income"
              />
              <small className="mt-1 text-gray-700 block">Input the annual income in your own currency.</small>
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
          <p className="mt-2">
            ‼️ You should use this rate as a starting point and adjust it as you get more experience on freelancing and
            the market you are operating in.
          </p>

          <p className="mt-8">
            If you have any questions don't hesitate to contact me (details below, in the website footer).
          </p>
        </div>
      </div>
    );
  }
}
