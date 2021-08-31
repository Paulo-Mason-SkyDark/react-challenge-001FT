import { Component } from "react";
import Image from 'next/image';

//import styles
//import {Container} from './styles';

//import assets
import logoImg from '../../assets/icons/logofooter.svg';

export default class BottomBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Image src={logoImg} alt="logo hapu" />  
                <div>
                    <nav>
                        <ul>
                            <a href=""><li>Create Your Nanny Share</li></a>
                            <a href=""><li>Browse Shares</li></a>
                            <a href=""><li>Our Story</li></a>
                        </ul>
                    </nav>
                </div>
                <div>
                    <h2>Become a Nanny Share Host</h2>
                    <a href=""><span>Sign In</span></a>
                </div>
            </div>
        );
    }
}

