import { Component } from "react";
import Image from 'next/image';
import HeaderImgLeft from '../../assets/images/ImageHeader.svg';
import HeaderImgBG from '../../assets/images/Image.svg';

import PlayButton from '../../assets/icons/PlayButtonIcon.svg';

//import of styles js
import{ HeaderBG }from './style';

//imports of components
import NavBar from '../header/navbar/index';

class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <HeaderBG background='#9451d0' backgroundImage={HeaderImgBG}>
                <NavBar/>
                <div className="TextAlignLeft">
                    <h1>
                        Easily create or join a local nanny share with Hapu
                    </h1>
                    <p>
                        Hapu is Airbnb for nanny share.
                        Share your home, nanny and costs and create new flexible, 
                        affordable solutions in childcare.
                    </p>
                    <div>
                        <Image src={PlayButton}/>
                        <span>See hapu in action (27 seconds)</span>
                    </div>
                </div>
                <div className="cardInfomatioRight">
                    <Image src={HeaderImgLeft} />
                </div>
            </HeaderBG>
        );
    }
}

export default Header;