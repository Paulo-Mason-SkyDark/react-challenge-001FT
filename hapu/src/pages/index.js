import Hero from "../components/hero";
import Footer from "../components/footer/index";
import SectionFive from "../components/sections/section_five/index";
import SectionOne from '../components/sections/section_one';
import SectionTwo from '../components/sections/section_two';
import SectionFour from '../components/sections/section_four';

export default function Home() {
  return (
    <>
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionFour />
      <SectionFive />
      <Footer />
    </>
  );
}


export function getStaticProps() {

  return {
    props: {

    },
  };
}