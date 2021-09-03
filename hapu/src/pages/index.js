import Hero from "../components/hero";
import Footer from "../components/footer/index";
import SectionFive from "../components/sections/section_five/index";
import SectionOne from '../components/sections/section_one';
import SectionTwo from '../components/sections/section_two';
import SectionFour from '../components/sections/section_four';
import SectionTree from '../components/sections/section_tree';

export default function Home() {
  return (
    <>
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionTree />
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