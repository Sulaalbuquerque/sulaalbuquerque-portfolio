import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  
`

export const ContactData = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;

  .network{
    margin: 1rem 0;
    
    a{
      color: ${({ theme }) => theme.secondary};
      display: flex;
      align-items: center;
      transition: 0.3s;

      :hover{
        transform: scale(0.9);
      }

      svg{
        margin-right: 1rem;
        height: 1.5rem;
        width: 1.5rem;
      }

      span{
        font-weight: 200;
      }
    }
  }

  @media (max-width: 700px) {
    align-items: center;

    .network{
      margin: 2rem 0;
        
      a{
        flex-direction: column;
        justify-content: center;

        svg{
          margin-bottom: .6rem;
        }
      }
    }
  }

  @media (min-width: 701px) {
    a{
      width: 50%;
    }
  }

  @media (min-width: 1000px) {
    a{
      width: 40%;
    }
  }
`


