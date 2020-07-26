import {Navbar} from './Navbar';
import React from "react";

export class Header extends React.Component {

    componentDidMount() {
        let blinkOpacity = 0;
        this.timer = setInterval(() => {
            if (blinkOpacity === 0) {
                blinkOpacity = 100;
            } else {
                blinkOpacity = 0;
            }
            document.getElementById('blink-content').querySelector('span').style.opacity = blinkOpacity;
        }, 900);
    }

    componentWillUnmount() {
        console.log('unmount');
        if (this.timer)
            clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                <img src="/icon.jpg" className="h-32 w-32 md:h-40 md:w-40 rounded-full mx-auto mb-8"/>
                <h1 className="font-raleway font-black text-3xl md:text-5xl uppercase text-center">Răzvan Stătescu</h1>
                <h2 className={`font-bold text-center text-xs md:text-base`} id="blink-content">Freelance Web Developer
                    & Content
                    Creator
                    <span className="text-orange ml-2">|</span>
                </h2>
                <Navbar/>
            </div>
        )
    }
}
