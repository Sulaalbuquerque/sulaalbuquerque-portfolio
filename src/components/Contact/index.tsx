import SectionTitle from '../SectionTitle';
import { ContactData, Container } from './styles';

import { MdEmail } from 'react-icons/md'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaDiscord, FaTelegramPlane } from 'react-icons/fa'

export function Contact() {
  return (
    <Container>
      <SectionTitle 
        title={
          <>
            Precisa de um Dev Front-end?
          </>
        }
        description={
          <div className='description'>
            Entre em contato:
          </div>
        }
      />

      <ContactData data-aos='fade-up'>
        <div className="network">
          <a href='https://gmail.com' target='_blank'>
            <MdEmail/>
            <span>devsulaalbuquerque@gmail.com</span>
          </a>
        </div>

        <div className="network">
          <a href='https://discord.com/channels/@me' target='_blank'>
            <FaDiscord/>
            <span>Sula#6499</span>
          </a>
        </div>

        <div className="network">
          <a href='https://web.telegram.org/k/' target='_blank'>
            <FaTelegramPlane/>
            <span>+55 (88) 9 9337 7622</span>
          </a>
        </div>

        <div className="network">
          <a href='https://linkedin.com/in/sula-albuquerque-659968203/' target='_blank'>
            <AiFillLinkedin/>
            <span>Sula Albuquerque</span>
          </a>
        </div>

      </ContactData>

    </Container>
  );
};

