// import Lottie from 'react-lottie';
// import Animated_M from '../lotties/Animated_M.json';
import HomeText from "./Home_elements/HomeText";
// import ReactAnime  from 'react-animejs'
// import {motion} from 'framer-motion'

function Home() {

  // const defaultOptions = {
  //     loop: false,
  //     autoplay: true,
  //     animationData: Animated_M,
  //     rendererSettings: {
  //       preserveAspectRatio: "xMidYMid slice"
  //     }
  // };

  const style_background = {
    right: "-676px",
    maxWidth: "calc(230vw + 1670px)"
  };

  return (
    <div>
        <div className="home">
          {/* <span className="tags top-tags"> &lt;html&gt; </span>
          <span className="tags bottom-tags"> &lt;/html&gt; </span>  */}
          <picture>
            <source media='(max-width:768px)' type='images/webp' srcSet='https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp' />
            <source media={"(min-width: 1280px)"} type="image/webp" srcSet="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp 1x, https://github.githubassets.com/images/modules/site/home-campaign/hero-bg-2x.webp 2x"></source>
            <img alt='planet background' aria-hidden="true" width="4377" className="home_background" style={style_background} src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp"></img>
          </picture>
          <HomeText/>
          {/* <div><Lottie options={defaultOptions}/></div> */}
      </div>
    </div>
  )
}


export default Home;