import { Component } from "react";
import Image from 'next/image';

import nannyImg from '../../../assets/images/NannyValuesImage.svg';
import circleAvatar from '../../../assets/images/ProfileImage.svg';

import { Card, Container, BoxImage, BoxContraints, ToLink, TitleSection, Paragraph } from './styles';

class SectionOne extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Card>
          <Image src={circleAvatar} alt="profile avatar" />
          <a href="">Sarah’s day care available now in North Sydney</a>
          <h5>Wednesday, Thursday, Friday - 7:30 - 5:30</h5>
        </Card>

        <Container>
          <BoxContraints>
            <TitleSection>Share your home, nanny and costs</TitleSection>
            <Paragraph>You have a fantastic home, a fantastic nanny
               and wouldn’t cutting your costs in half be, well, 
               fantastic?! If only it was easy to connect with
               other parents to share your costs? Well now it is,
                with Hapu. <ToLink href="#">Hapu means tribe</ToLink> and it’s our foundational 
                3 tribal principles that empowers you to create 
                and manage your own tribe. A tribe that together
                has the power to create new affordable solutions 
                in childcare that work for 
                you and your community.</Paragraph>
            <div><ToLink href="#">Ready to get started?</ToLink></div>
          </BoxContraints>
          <BoxImage>
            <Image src={nannyImg} />
          </BoxImage>
        </Container>
      </>

    );
  }
}

export default SectionOne;