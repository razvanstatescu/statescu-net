import React from 'react';

import HeaderStyle from '../styles/header.module.scss';
import { Navbar } from './Navbar';

export class Header extends React.Component {
  componentDidMount() {
    let blinkOpacity = 0;
    this.timer = setInterval(() => {
      if (blinkOpacity === 0) {
        blinkOpacity = 100;
      } else {
        blinkOpacity = 0;
      }
      document.getElementById("blink-content").querySelector("span").style.opacity = blinkOpacity;
    }, 900);
  }

  componentWillUnmount() {
    if (this.timer) clearInterval(this.timer);
  }

  render() {
    return (
      <div className="relative">
        <img src="/avatar-new.svg" className={`rounded-full mx-auto ${HeaderStyle.avatarImg}`} />
        <h1 className="font-raleway font-black text-4xl md:text-5xl text-center">Răzvan Stătescu</h1>
        <h2 className={`font-bold text-center text-xs md:text-base`} id="blink-content">
          Freelance Web Developer & Content Creator
          <span className="text-orange ml-2">|</span>
        </h2>
        <Navbar />
      </div>
    );
  }
}
