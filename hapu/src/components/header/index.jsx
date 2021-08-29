import { Component } from "react";
import Image from 'next/image';
import HeaderImg from '../../assets/images/ImageHeader.svg';
import PlayButton from '../../assets/icons/PlayButtonIcon.svg';

//imports of components
import NavBar from '../header/navbar/index';

class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <header>
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
                    <Image src={HeaderImg} />
                </div>
            </header>
        );
    }
}

export default Header;