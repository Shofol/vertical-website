import Head from "next/head";
import Hero from "../components/Home/Hero";
import Process from "../components/Home/Process/Process";
import Testimonials from '../components/Home/Testimonials'
import Intro from '../components/Home/Intro'
import Why from '../components/Home/Why'
import { createClient } from 'contentful';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: 'master',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticProps = async ({ params }) => {
  const res = await client.getEntries({
    content_type: 'home',
  })

  return { props: { home: res.items }}
}

export default function Home({ home }) {

  return (
    <>
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
