
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript } from 'react-icons/si'
import SectionTitle from '../SectionTitle';
import KnowledgeItem from './KnowledgeItem';
import { Container } from './styles';

function Knowledge() {
  return (
    <Container>
      <SectionTitle title='Conhecimentos' description='Tecnologias'/>

      <section data-aos='fade-up'>
        <h2>Em aprimoramento</h2>
        <div className='icons'>
          <KnowledgeItem title='HTML'icon={<AiFillHtml5/>}/>
          <KnowledgeItem title='CSS'icon={<FaCss3Alt/>}/>
          <KnowledgeItem title='JavaScript'icon={<IoLogoJavascript/>}/>
          {/*<KnowledgeItem title='React'icon={<FaReact/>}/> */}
        </div>
      </section>

      <section data-aos='fade-up'>
       <h2>Em estudo</h2>
       <div className='icons'>
          <KnowledgeItem title='React'icon={<FaReact/>}/>
          <KnowledgeItem title='Typescript'icon={<SiTypescript/>}/> 
       </div>
      </section>
    </Container>
  );
};

export default Knowledge;
