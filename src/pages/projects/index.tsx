import { ProjetosContainer } from '../../styles/ProjectsStyles'
import Header from '../../components/Header'
import ProjectItem from '../../components/ProjectItem'
import { getPrismicClient } from '../../services/prismic';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import Head from 'next/head';

interface IProjeto {
    slug: string;
    title: string;
    type: string;
    description: string;
    link: string;
    thumbnail: string;
  }
  
  interface ProjetoProps {
    projetos: IProjeto[];
  }

export default function Projects({ projetos }: ProjetoProps) {
    return (
        <ProjetosContainer>

            <Head>
              <title>Projetos | Meu portfólio</title>
              <meta
                name="description"
                content="Esta página tem como objetivo trazer alguns projetos desenvolvidos por mim."
              />
              <meta property="og:image" content="/portfolio.png" /> {/* a barra indica a pasta public*/}
              <meta property="og:image:secure_url" content="/portfolio.png" />
              <meta name="twitter:image" content="/portfolio.png" />
              <meta name="twitter:image:src" content="portfolio.png" />
              <meta
                property="og:description"
                content="Olá! Sou desenvolvedora Front-end e trago aqui alguns projetos desenvolvidos por mim."
              />
              {/*<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/> */}

            </Head>

            <Header/>

            <main className='container'>
                {projetos.map(projeto => (
                    <ProjectItem
                    key={projeto.slug}
                    title={projeto.title}
                    type={projeto.type}
                    slug={projeto.slug}
                    imgUrl={projeto.thumbnail}
                />
                ))}
            </main>
        </ProjetosContainer>
    )
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