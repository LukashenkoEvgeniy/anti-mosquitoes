import React from 'react';
import styled from 'styled-components'
import {inject, observer} from 'mobx-react';

import Advantages from './Advantages.jsx';
import Presentation from './Presentation.jsx';
import Instruction from './Instruction.jsx';
import Calculator from './Calculator.jsx';
import Description from './Description.jsx';
import Navigation from './Navigation.jsx';
import OrderPopup from './OrderPopup.jsx';

@inject('uiStore')
@observer
export default class Content extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            [
                <Navigation key={1}/>,
                <ContentWrapper key={2}>
                    <Presentation/>
                    <Advantages/>
                    <Description/>
                    <Instruction/>
                    <Calculator/>
                </ContentWrapper>,
                this.props.popupVisibility && <OrderPopup key={3}/>
            ]
        );
    }

}

const ContentWrapper = styled.div`
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    box-sizing: border-box;
    display: block;
    top:3em
`;