
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import SectionTitle from '../SectionTitle';
import KnowledgeItem from './KnowledgeItem';
import { Container } from './styles';

function Knowledge() {
  return (
    <Container>
      <SectionTitle title='Conhecimentos'/>

      <section>
        <KnowledgeItem title='HTML'icon={<AiFillHtml5/>}/>
        <KnowledgeItem title='CSS'icon={<FaCss3Alt/>}/>
        <KnowledgeItem title='JavaScript'icon={<IoLogoJavascript/>}/>
        {/*<KnowledgeItem title='React'icon={<FaReact/>}/> */}
      </section>
    </Container>
  );
};

export default Knowledge;
