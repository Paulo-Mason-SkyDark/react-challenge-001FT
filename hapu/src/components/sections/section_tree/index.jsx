import { Component } from "react";
import Image from 'next/image';

//import images
import chooseAmount from '../../../assets/images/ImageSection3.svg';

//import styles
import {Container, ContentInfo, RightText} from './styles';

export default class SectionTree extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <ContentInfo>
                    <Image src={chooseAmount} alt="choose amount"  width="456" height="336px"/>
                  <RightText>
                    <h2>Share your home, nanny and costs</h2>
                    <p>
                      You have a fantastic home, a fantastic nanny and wouldn’t <br/>
                      cutting your costs in half be, well, fantastic?! If only it <br/>
                      was easy to connect with other parents to share your costs? <br/>
                      Well now it is, with Hapu. Hapu means tribe and it’s our <br/>
                      foundational 3 tribal principles that empowers you to create <br/>
                      and manage your own tribe. A tribe that together has the <br/>
                      power to create new affordable solutions in childcare that <br/>
                      work for you and your community.
                    </p>

                    <a href="">Ready to get started?</a>
                  </RightText>
                </ContentInfo>
            </Container>
        );
    }
}

