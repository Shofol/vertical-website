import Head from "next/head";
import Hero from "../components/Home/Hero";
import Process from "../components/Home/Process/Process";
import Testimonials from '../components/Home/Testimonials'
import Intro from '../components/Home/Intro'
import Why from '../components/Home/Why'


export default function Home() {

  return (
    <>
      <main>
        <Hero />
        <Testimonials />
        <Process />
        <Intro />
        <Why />
      </main>
    </>
  );
}
