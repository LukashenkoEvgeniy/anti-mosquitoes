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
    color: ${props => props.color ? props.color : defaultTextColor};
`;

export const H2 = styled.h2`
       color: ${props => props.color ? props.color : defaultTextColor};
`;

export const Block = styled.section`
    display: flex;
    flex-direction: column
    align-items: center;
    min-height: 90vh;
    border-bottom: 1px solid #dee2e6;
    padding: 3rem;
`;

export const InlineBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-grow:1;
    border: 1px solid #1477da;
    padding: 3rem;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

