import React from 'react';
import styled from 'styled-components'

import {H2} from '../../common/Atom';
import {calc, validator} from '../../utils/PriceCalculator';
import ResultBlock from './ResultBlock.jsx';

export default class CalculatorBlock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 'plastic',
            color: 'brown',
            height: 1000,
            width: 700
        };
    }

    calcPrice() {
        this.setState({error: null});
        if (validator(this.state.height, this.state.width)) {
            this.setState({error: validator(this.state.height, this.state.width)})
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
                    <label>{'Ширина москитной сетки (мм):'}</label>
                    <Input
                        onChange={event => this.handleInputChange('width', event.target.value)}
                        placeholder={this.state.width}/>

                </InputWithLabel>

                <InputWithLabel>
                    <label>{'Высота москитной сетки (мм):'}</label>
                    <Input
                        onChange={event => this.handleInputChange('height', event.target.value)}
                        placeholder={this.state.height}/>

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
                    !this.state.error && this.state.price && <ResultBlock
                        oldPrice={this.state.oldPrice}
                        price={this.state.price}
                        square={this.state.square}
                    />
                }
                {
                    !this.state.error && this.state.price &&
                    <button>{'Добавить в корзину'}</button>
                }

            </InputsWrapper>
        )
    }
}

const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const InputWithLabel = styled.div`
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
`;

const Input = styled.input`
    width: 171px;
    type: 'text'
`;

const Select = styled.select`
    width: 175px;
`;