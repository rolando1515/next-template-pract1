import Head from 'next/head';
import {Hero} from '/Users/rolandolabrador/Documents/next-template-pract1/src/ui/containers/Home /index';
import { PageLayout } from 'ui/layouts/pageLayout';


export default function Home() {
  return (
    <>
      <Head>
      <title>Roland's Portfolio</title>
        <meta name="Welcome to Roland Labrador's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <Hero/>
      </PageLayout>
      
    </>
  );
}


// to import use the relative path and take out the .tsx