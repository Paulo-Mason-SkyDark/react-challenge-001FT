import { Component } from "react";
import Image from 'next/image';


//import styles
import { Container, BoxImage, BoxContraints, TitleSection, Paragraph } from './styles';

//import assets
import AmoutChooser from '../../../assets/images/ImageSection3.svg'



export default class SectionTree extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <BoxImage>
          <Image src={AmoutChooser} />
        </BoxImage>
        <BoxContraints>
          <TitleSection>Shared payments made simple</TitleSection>
          <Paragraph>Sometimes it’s hard enough just sharing a
            restaurant bill. Try sharing that bill week in,
            week out and you might encounter more than a few snares.
            But not with Hapu. Simply set your rates and our automated
            payment system takes care of the rest. You need never
            talk money or who owes what.</Paragraph>
            <a href="#">Read how Bridget’s share (without Hapu) ended over $15</a>
        </BoxContraints>
      </Container>
    );
  }
}

