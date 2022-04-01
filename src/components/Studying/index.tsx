
import { FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si'
import SectionTitle from '../SectionTitle';
import KnowledgeItem from '../Knowledge/KnowledgeItem';
import { Container } from './styles';

function Studying() {
  return (
    <Container>
      <SectionTitle title='Tecnologias em estudo'/>

      <section>
        <KnowledgeItem title='React'icon={<FaReact/>}/>
        <KnowledgeItem title='Typescript'icon={<SiTypescript/>}/> 
      </section>
    </Container>
  );
};

export default Studying;
