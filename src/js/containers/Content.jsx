import React, {Fragment} from 'react';
import styled from 'styled-components'
import {inject, observer} from 'mobx-react';

import Advantages from './Advantages.jsx';
import Presentation from './Presentation.jsx';
import Instruction from './Instruction.jsx';
import Calculator from './Calculator.jsx';
import Description from './Description.jsx';
import Navigation from './Navigation.jsx';
import OrderModal from './OrderModal.jsx';

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