import { Component } from "react";
import Image from 'next/image';
import LogoImg from '../../../assets/images/Badgelogo.svg';
import {Container} from './style';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <div>
                    <Image src={LogoImg} alt="logo hapu" />
                    <nav>
                        <li>Create Your Nanny Share</li>
                        <li>Browse Shares</li>
                        <li>Our Story</li>
                    </nav>
                </div>
                <div>
                    <li>Become a Nanny Share Host</li>
                    <li>Sign In</li>
                </div>
            </Container>
        );
    }
}

export default NavBar;