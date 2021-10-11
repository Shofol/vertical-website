import Head from "next/head";
import Hero from "../components/Home/Hero";
import Process from "../components/Home/Process/Process";
import Testimonials from '../components/Home/Testimonials'
import Intro from '../components/Home/Intro'
import Why from '../components/Home/Why'
import { createClient } from 'contentful';
import Meta from '../components/Utilities/Meta';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: 'master',
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,

});

export const getStaticProps = async ({ params }) => {
  const res = await client.getEntries({
    content_type: 'home',
  })

  return { props: { home: res.items } }
}

export default function Home({ home }) {

  return (
    <>
      <Meta title="Vertrical" description="We help you deploy scalable & compliant Digital Health. Digital Health product and IT teams rely on Vertrical to deploy tailored microservices and apps that handle sensitive health data." />
      <main>
        <Hero home={home} />
        <Testimonials home={home} />
        <Process />
        <Intro />
        <Why />
      </main>
    </>
  );
}
