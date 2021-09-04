import { Component } from "react";
import Image from 'next/image';

//import styles
import { Container, NavContent, IconsContent, Copy, Width } from './styles';

//import assets
import logoImg from '../../assets/icons/Logofooter.svg';
import Facebook from '../../assets/icons/Facebook.svg';
import Instagram from '../../assets/icons/Instagram.svg';
import Twitter from '../../assets/icons/Twitter.svg';

export default class BottomBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Container>
                    <Image src={logoImg} alt="logo hapu" />
                    <NavContent>
                        <nav>
                            <ul>
                                <a href=""><li>Share Your Nanny</li></a>
                                <a href=""><li>Our Story</li></a>
                                <a href=""><li>Blog</li></a>
                                <a href=""><li>Terms and Privacy</li></a>
                            </ul>
                        </nav>
                    </NavContent>
                    <IconsContent>
                        <Image  src={Facebook} alt="logo facebook" width="45" height="45" />
                        <Width>
                        <Image src={Twitter} alt="logo twitter" width="45" height="45" />
                        </Width>
                        <Image src={Instagram} alt="logo instagram" width="45" height="45" />
                    </IconsContent>
                </Container>
                <Copy>
                    <hr />
                    <p>Copyright © 2017 Hapu PTY Limited All rights reserved</p>
                </Copy>
            </>

        );
    }
}

