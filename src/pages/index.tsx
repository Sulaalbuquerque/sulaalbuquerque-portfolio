import { HomeContainer } from '../styles/HomeStyles'
import Header from "../components/Header";
import HomeHero from '../components/HomeHero';
import Experiences from '../components/Experiences';
import Projects from '../components/Projects';
import Knowledge from '../components/Knowledge';
import FormContact from '../components/FormContact';
import Footer from '../components/Footer';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../services/prismic';
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Head from 'next/head';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface HomeProps {
  projetos: IProjeto[];
}

export default function Home({ projetos }: HomeProps) {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
      <HomeContainer>

        <Head>
          <title>Home | Meu portfólio</title>

          <meta
            name="description"
            content="Sou uma desenvolvedora Front-end. Esta página tem como objetivo trazer alguns projetos desenvolvidos por mim."
          />
          <meta property="og:image" content="/ogimage.png" /> {/* a barra indica a pasta public*/}
          <meta property="og:image:secure_url" content="/ogimage.png" />
          <meta name="twitter:image" content="/ogimage.png" />
          <meta name="twitter:image:src" content="/ogimage.png" />
          <meta
            property="og:description"
            content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
          />
        </Head>

        <Header/>

        <main className="container">
          <HomeHero/>
          {/*<Experiences/>*/}
          <Knowledge/>
          <Projects projetos={projetos}/>
          <FormContact/>
        </main>

        <Footer/>

      </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projeto')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const projetos = projectResponse.results.map(projeto => ({
    slug: projeto.uid,
    title: projeto.data.title,
    type: projeto.data.type,
    description: projeto.data.description,
    link: projeto.data.link.url,
    thumbnail: projeto.data.thumbnail.url
  }));


  return {
    props: {
      projetos
    },
    revalidate: 86400 /*24 horas - revalida uma vez por dia */
  };
};