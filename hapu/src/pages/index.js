import Hero from "../components/hero";
import Footer from "../components/footer/index";
import SectionChild from "../components/sections/section_child/index";
import InputSession from "../components/sections/section_input/index";

export default function Home() {
  return (
    <>
      <Hero />
      <InputSession />
      <SectionChild />
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