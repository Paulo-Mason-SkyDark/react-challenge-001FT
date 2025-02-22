import { Component } from "react";
import Image from 'next/image';

//import styles
import { Container, NavContent, IconsContent, Copy, Width, Divider } from './styles';

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
                    <Image src={logoImg} alt="logo hapu" width="64" height="24" />
                    <NavContent>
                        <div>
                            <a href=""><span>Share Your Nanny</span></a>
                            <a href=""><span>Our Story</span></a>
                        </div>
                        <div>
                            <a href=""><span>Blog</span></a>
                            <a href=""><span>Terms and Privacy</span></a>
                        </div>
                        {/* <nav>
                            <ul>
                                <a href=""><li>Share Your Nanny</li></a>
                                <a href=""><li>Our Story</li></a>
                            </ul>
                            <ul>
                                <a href=""><li>Blog</li></a>
                                <a href=""><li>Terms and Privacy</li></a>
                            </ul>
                        </nav> */}
                    </NavContent>
                    <IconsContent>
                        <Image src={Facebook} alt="logo facebook" width="45" height="45" />
                        <Width>
                            <Image src={Twitter} alt="logo twitter" width="45" height="45" />
                        </Width>
                        <Image src={Instagram} alt="logo instagram" width="45" height="45" />
                    </IconsContent>
                </Container>
                <Copy>
                    <Divider />
                    <p>Copyright © 2017 Hapu PTY Limited All rights reserved</p>
                    <p>Teste desenvolvido por Paulo Daniel de Araújo - SkyDark - Mason</p>
                </Copy>
            </>

        );
    }
}


// desenvolvido por Paulo Daniel de Araújo - SkyDark - Mason
