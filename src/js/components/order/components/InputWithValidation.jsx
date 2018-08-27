import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import styled from 'styled-components'

import { FormControl, FormGroup} from 'react-bootstrap';


@inject('uiStore', 'orderStore')
@observer
export default class InputWithValidation extends Component {

    state = {valid: true};

    handleInputChange(type, value) {
        if (this.props.validation(value)) {
            this.setState({valid: true});
            this.props.handleInputChange(type, value);
        } else {
            this.setState({valid: false})
        }
    }

    render() {
        return (
            <FormGroup  validationState={this.state.valid ? 'success' : 'error'}>
                <Input
                    name={this.props.name}
                    onChange={(event) => this.handleInputChange(event.target.name, event.target.value)}
                    placeholder={this.props.placeholder}
                    type="text"
                />
            </FormGroup>

        );
    }
}
const Input = styled(FormControl)`
    width: 100%;
    margin: 5px;
`;




