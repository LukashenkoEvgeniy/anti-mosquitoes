import React from 'react';
import styled from 'styled-components'
import {inject} from 'mobx-react';

import {H2} from '../../common/Atom';
import {calc, validator} from '../../utils/PriceCalculator';
import ResultBlock from './ResultBlock.jsx';
import {Badge, Button, FormControl} from 'react-bootstrap';
import OrderContract from "../../stores/OrderContract";

@inject('orderStore', 'uiStore')
export default class CalculatorBlock extends React.Component {

    initState = {
        type: 'plastic',
        color: 'brown',
        height: 0,
        width: 0,
        price: 0
    };

    constructor(props) {
        super(props);
        this.state = this.initState;
    }

    onAddToBasket() {
        this.props.orderStore.add(new OrderContract(this.state));
        this.setState(this.initState);
    }

    calcPrice() {
        this.setState({error: null});
        if (validator(this.state.height, this.state.width)) {
            this.setState({error: validator(this.state.height, this.state.width)});
            return;
        }
        let {price, oldPrice, square} = calc(this.state.height, this.state.width, this.state.color, this.state.type);
        this.setState({price, oldPrice, square});
    };

    handleInputChange(name, value) {
        switch (name) {
            case 'color':
                this.setState({color: value}, () => this.calcPrice());
                break;
            case 'type':
                this.setState({type: value}, () => this.calcPrice());
                break;
            case 'height':
                this.setState({height: value}, () => this.calcPrice());
                break;
            case 'width':
                this.setState({width: value}, () => this.calcPrice());
        }
    };

    render() {
        return (
            <InputsWrapper>
                <H2>{'Расчет стоимости сетки на окна'}</H2>

                <InputWithLabel>
                    <label>{'Ширина сетки (мм):'}</label>
                    <Input
                        step="100"
                        max="3000"
                        min="200"
                        onChange={event => this.handleInputChange('width', event.target.value)}
                        placeholder={this.state.width}
                        type="number"
                    />

                </InputWithLabel>

                <InputWithLabel>
                    <label>{'Высота сетки (мм):'}</label>
                    <Input
                        step="100"
                        min="2000"
                        max="3000"
                        onChange={event => this.handleInputChange('height', event.target.value)}
                        placeholder={this.state.height}
                        type="number"
                    />


                </InputWithLabel>

                <InputWithLabel>
                    <label>{'Тип окна:'}</label>
                    <Select
                        name={'type'}
                        onChange={event => this.handleInputChange(event.target.name, event.target.value)}
                    >
                        <option value="plastic">{'Пластиковое'}</option>
                        <option value="aluminum">{'Алюминиевое'}</option>
                        <option value="wood_euro">{'Деревянное (евроокно)'}</option>
                        <option value="wood_old">{'Деревянное (старое)'}</option>
                    </Select>
                </InputWithLabel>

                <InputWithLabel>
                    <label>{'Выбор цвета рамки:'}</label>
                    <Select
                        name={'color'}
                        onChange={event => this.handleInputChange(event.target.name, event.target.value)}
                    >
                        <option value="brown">{'Коричневый'}</option>
                        <option value="white">{'Белый'}</option>
                    </Select>
                </InputWithLabel>
                {this.state.error &&
                <p>{this.state.error}</p>
                }
                {
                    !this.state.error && !!this.state.price && <ResultBlock
                        oldPrice={this.state.oldPrice}
                        price={this.state.price}
                        square={this.state.square}
                    />
                }
                {
                    !!!this.state.error && !!this.state.price &&
                    <ButtonWrapper bsStyle="success" onClick={() => this.onAddToBasket()}>{'Добавить в корзину'}</ButtonWrapper>
                }
                {
                    this.props.orderStore.ifOrderExist &&
                    <ButtonWrapper bsStyle="success"
                            onClick={() => this.props.orderStore.ifOrderExist ? this.props.uiStore.showModal() : null}>{'Оформить заказ'}</ButtonWrapper>
                }
            </InputsWrapper>
        )
    }
}

const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const InputWithLabel = styled.div`
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    
    label {
      font-weight: 100;
    }

    @media (max-width: 550px) {
      flex-direction: column;
          justify-content: center;
          align-items: center;
    }
`;

const Input = styled(FormControl)`
    width: 171px; 
    background: #46484a;
    color: white;
    border-radius: 0px;
`;

const Select = styled(FormControl).attrs({
    componentClass: 'select'
})` 
        width: 171px; 
        background: #46484a;
        color: white;
        border-radius: 0px;

        
`;

const ButtonWrapper = styled(Button)`
    margin: 5px;
`;

