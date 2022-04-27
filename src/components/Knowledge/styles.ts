import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    

    > section {
        margin-top: 8rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4rem;

        h2{
            color: ${({ theme }) => theme.secondary};
            font-weight: 200;
        }

        .icons{
            display: flex;
            flex-direction: row;
            gap: 7rem;
        }

        @media (max-width: 1000px) {
            gap: 5rem;
        }

        @media (max-width: 700px) {
            gap: 2rem;
            flex-wrap: wrap;
            margin-top: 5rem;

            .icons{
                gap: 2.5rem;
            }
        }
    }
`

export const KnowledgeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
    justify-content: center;

    p {
        color: ${({ theme }) => theme.primary};
        font-weight: 300;
        font-size: 1.3rem;
        text-transform: uppercase;
    }

    svg {
        width: 3rem;
        height: 3rem;
        color: ${({ theme }) => theme.secondary};
        transition: 0.3s;
    }

    &:hover {
        svg {
        color: ${({ theme }) => theme.primary};
        transform: scale(0.95);
        }
    }

    @media (max-width: 1000px) {
        p {
        font-size: 1rem;
        }
        
        svg {
        width: 2.5rem;
        height: 2.5rem;
        }
    }
`
