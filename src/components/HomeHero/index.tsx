import { Container, TextContainer, InfosContainer, CodeItem } from './styles'

import picture from '../../assets/setup5.webp'

function HomeHero() {
  return (
    <Container data-aos='fade-up'>
      <img src={picture} alt='Minha foto'/>

      <div>
        <TextContainer>
          <h1>Olá!</h1>
          {/*<h2>Me chamo Sula Albuquerque.</h2> */}
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos='zoom-in'>
            <span className='comment'>//Minha apresentação</span>
            <span className='purple'>Infos</span>{'\u007B'}{/*unicode*/}
            <div>
              Nome: <span className='pink'>Sula,</span>
            </div>
            <div>
              Sobrenome: <span className='pink'>Albuquerque</span>
            </div>
            {'\u007D'}{/*unicode*/}
          </CodeItem>
          <CodeItem data-aos='zoom-in'>
            <span className='purple'>Cargo</span>{'\u007B'}{/*unicode*/}
            <div>
              Função: <span className='pink'>Dev Front-end {/*Freelancer*/}</span>
            </div>
            {/*
              <div>
                Empresa: <span className='pink'>Freelancer</span>
              </div>
            */}
            {'\u007D'}{/*unicode*/}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
};

export default HomeHero;
