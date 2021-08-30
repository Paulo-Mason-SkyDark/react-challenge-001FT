import { Component } from "react";
import Image from 'next/image';
import HeaderImgLeft from '../../assets/images/ImageHeader.svg';
import HeaderImgBG from '../../assets/images/Image.svg';

import PlayButton from '../../assets/icons/PlayButtonIcon.svg';
import bgImg from '../../assets/images/Image.svg';

//import of styles js
import { HeroBG, HeroContent, TextLeft } from './styles';

//imports of components
import NavBar from '../Navbar';

class Hero extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <HeroBG bg={bgImg}>
                <NavBar />

                <HeroContent>
                  <TextLeft>
                      <h1>
                          Easily create or join a local <br /> nanny share with Hapu
                      </h1>
                      <p>
                          Hapu is Airbnb for nanny share.
                          Share your home, nanny and costs <br />
                          and create new flexible, 
                          affordable solutions in childcare.
                      </p>
                      <div>
                          <Image src={PlayButton}/>
                          <span>See hapu in action (27 seconds)</span>
                      </div>
                  </TextLeft>
                  <div className="cardInfomatioRight">
                      <Image src={HeaderImgLeft} />
                  </div>
                </HeroContent>
            </HeroBG>
        );
    }
}

export default Hero;