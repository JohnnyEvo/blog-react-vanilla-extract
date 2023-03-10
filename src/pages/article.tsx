import Head from 'next/head';
import Layout from "@/components/layout";
import {content} from "@/pages/index.css";
import Container from "@/components/container";
import Header from "@/components/header";
import Banner from "@/components/banner";
import {container} from "@/styles/components/nav.css";
import Pill from "@/components/pill";
import Aside from "@/components/aside";
import Footer from "@/components/footer";

export default function Home() {
  return (
      <>
          <Layout>
              <Head>
                  <title>Create Next App - </title>
                  <meta name="description" content="Generated by create next app"/>
                  <meta name="viewport" content="width=device-width, initial-scale=1"/>
                  <link rel="icon" href="/favicon.ico"/>
              </Head>
              <Container>
                  <Header></Header>
                  <Banner>
                      <h2>De STUPID à SOLID</h2>
                  </Banner>
                  <div className={content}>
                      Article
                  </div>
                  <Footer/>
              </Container>
          </Layout>
      </>
  )
}
