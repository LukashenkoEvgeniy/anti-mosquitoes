import styled from 'styled-components'
import {defaultTextColor} from './Colors';



export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow:1;
`;

export const Column = styled.div`
    display: flex;
    flex-grow:1;
    flex-direction: column;
`;

export const H1 = styled.h1`
    text-align: center;
    font-family: 'Lobster', cursive;
    color: ${props => props.color ? props.color : defaultTextColor};
`;

export const H2 = styled.h2`
    text-align: center;
    color: ${props => props.color ? props.color : defaultTextColor};
`;

export const Block = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 90vh;
    border-bottom: 1px solid rgba(88, 22, 113, 0.97);
    padding: 3rem 5px 3rem 5px;
`;

export const InlineBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-grow:1;
    padding: 0 5px 0 5px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

