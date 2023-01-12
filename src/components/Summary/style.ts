import styled, { css } from 'styled-components';

export const SummaryContainer = styled.section`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    margin-top: -5rem;
`;

interface SummaryCardProps{
    variant?: 'green';
}

export const SummaryCard = styled.div<SummaryCardProps>`
    background: ${props => props.theme["gray-600"]};
    border-radius: 6px;
    padding: 2rem;

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${props => props.theme["gray-300"]};
    }
    
    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
    }

    ${props => props.variant === 'green' && css`
        background: ${props.theme["green-700"]};
    `}
`;

export const NewTransactionButton = styled.button`
    height: 50px;
    border: 0;
    background: ${props => props.theme["green-500"]};
    color: ${props => props.theme["white"]};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;

    &:hover{
        background: ${props => props.theme["green-700"]};
        transition: background-color 0.2s;
    }
`;