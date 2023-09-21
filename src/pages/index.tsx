import Head from 'next/head';
import {
 

  
  Hero
  
} from '.ui/containers/hero';
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
      </PageLayout>
      
    </>
  );
}

