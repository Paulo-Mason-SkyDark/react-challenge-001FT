import { Component } from "react";
import Image from 'next/image';

import headerImgLeft from '../../assets/images/ImageHeader.svg';
import playButton from '../../assets/icons/PlayButtonIcon.svg';

import styles from './styles.module.css';

//imports of components
import NavBar from '../Navbar';

class Hero extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.container}>
                <NavBar />
                <section className={styles.section}>
                    <div className={styles.containerGrid}>
                        <div className={styles.description}>
                            <h2>
                                Easily create or join a local <br /> nanny share with Hapu
                            </h2>
                            <p>
                                Hapu is Airbnb for nanny share.
                                Share your home, nanny and costs <br />
                                and create new flexible,
                                affordable solutions in childcare.
                            </p>
                            <div className={styles.descriptionTwo}>
                                <Image src={playButton} alt="PlayIcon" />
                                <span>See hapu in action (27 seconds)</span>
                            </div>
                        </div>
                        <div className={styles.image}>
                            <div>
                                <Image src={headerImgLeft} alt="" />
                            </div>
                        </div>
                        
                    </div>
                </section>

            </div>
        );
    }
}

export default Hero;