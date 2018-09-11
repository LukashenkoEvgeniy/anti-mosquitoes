import React, {Fragment} from 'react';
import styled from 'styled-components'
import {inject, observer} from 'mobx-react';

import Advantages from './Advantages';
import Presentation from './Presentation';
import Instruction from './Instruction';
import Calculator from './Calculator';
import Description from './Description';
import Navigation from './Navigation';
import OrderModal from './OrderModal';
import Shipping from "./Shipping";

@inject('uiStore')
@observer
export default class Content extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.uiStore.addNavRef('Presentation', this.presentation);
        this.props.uiStore.addNavRef('Advantages', this.advantages);
        this.props.uiStore.addNavRef('Description', this.description);
        this.props.uiStore.addNavRef('Instruction', this.instruction);
        this.props.uiStore.addNavRef('Calculator', this.calculator);
        this.props.uiStore.addNavRef('Shipping', this.shipping);
    }

    render() {
        return (
            <Fragment>
                <Navigation key={1}/>
                <ContentWrapper>
                    <div key={1} ref={(ref) => this.presentation = ref}>
                        <Presentation/>
                    </div>
                    <div key={2} ref={(ref) => this.advantages = ref}>
                        <Advantages/>
                    </div>
                    <div key={3} ref={(ref) => this.description = ref}>
                        <Description/>
                    </div>
                    <div key={4} ref={(ref) => this.instruction = ref}>
                        <Instruction/>
                    </div>
                    <div key={5} ref={(ref) => this.calculator = ref}>
                        <Calculator/>
                    </div>
                    <div key={6} ref={(ref) => this.shipping = ref}>
                        <Shipping/>
                    </div>
                </ContentWrapper>
                <OrderModal/>
            </Fragment>
        );
    }
}

const ContentWrapper = styled.div`
    margin-right: auto;
    margin-left: auto;
    width: 65%;
    box-sizing: border-box;
    display: block;
    top:3em;
    
     @media (max-device-width: 1200px) {
        width: 85%;
    } 
    
    @media (max-width: 600px) {
        width: 95%;
    }
`;