import { Component } from "react";
import Image from 'next/image';

import nannyImg from '../../../assets/images/NannyValuesImage.svg';

import { Card, Container, ContentInfo, LeftText, RightImg} from './styles';

class SectionOne extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <>
            <Card>
              {/* <Image src={logoImg} alt="logo hapu" /> */}
              <a href="">Sarah’s day care available now in North Sydney</a>
              <span>Wednesday, Thursday, Friday - 7:30 - 5:30</span>
            </Card>

            <Container>
                <ContentInfo>
                  <LeftText>
                    <h2>Share your home, <br/> nanny and costs</h2>
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
                  </LeftText>
                  <RightImg>
                    <Image src={nannyImg} alt="Image Book" />
                  </RightImg>
                </ContentInfo>
            </Container>
          </>
            
        );
    }
}

export default SectionOne;