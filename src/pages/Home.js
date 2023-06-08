import React from 'react';
import Lottie from 'react-lottie';
import Animated_M from '../lotties/Animated_M.json';
import HomeText from "./Home_elements/HomeText";

export default function Home() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: Animated_M,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
      <div className="home">
        <HomeText/>
        <div className="AnimatedM">
          <Lottie options={defaultOptions} />
        </div>
      </div>
  );
}