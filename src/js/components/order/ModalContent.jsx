import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import styled from 'styled-components'

import {Button, FormControl, Glyphicon, Label, Modal, Table} from 'react-bootstrap';
import {colors, types} from '../../utils/enums';
import InputWithValidation from './components/InputWithValidation.jsx';
import {emailValidation, phoneValidation} from '../../utils/validation';


@inject('uiStore', 'orderStore')
@observer
export default class ModalContent extends React.Component {

    constructor(props) {
        super(props);
        this.hideModal = this.hideModal.bind(this);
    }

    handleInputChange(type, value){
        console.log(type, value)
    }

    hideModal() {
        this.props.uiStore.hideModal();
    }

    render() {
        const {uiStore, orderStore} = this.props;
        return (
            <Modal
                onHide={this.hideModal}
                show={uiStore.modalVisiblity}>
                <Modal.Header closeButton>
                    <Modal.Title>{'Оформление заказа'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table
                        bordered
                        condensed
                        hover
                        responsive
                        striped>
                        <thead>
                            <tr>
                                <HeaderCell>#</HeaderCell>
                                <HeaderCell>{'Тип'}</HeaderCell>
                                <HeaderCell>{'Цвет'}</HeaderCell>
                                <HeaderCell>{'Размеры'}</HeaderCell>
                                <HeaderCell>{'Стоимость'}</HeaderCell>
                                <HeaderCell>{'Удалить'}</HeaderCell>
                            </tr>
                        </thead>
                        <tbody>
                            {orderStore.getAll().map((orderContract, index) => (
                                <tr key={++index}>
                                    <Cell>{index}</Cell>
                                    <Cell>{types[orderContract.type]}</Cell>
                                    <Cell>{colors[orderContract.color]}</Cell>
                                    <Cell>{`${orderContract.height}x${orderContract.width}`}</Cell>
                                    <Cell>{orderContract.price}</Cell>
                                    <Cell><Button bsStyle="danger"><Glyphicon
                                        glyph="glyphicon glyphicon-trash"/></Button></Cell>
                                </tr>
                        ))}

                        </tbody>
                    </Table>
                </Modal.Body>
                <OrderForm>
                    <PriceLabel>{`К оплате ${orderStore.finalPrice} грн`}</PriceLabel>

                    <InputWithValidation
                        name={'email'}
                        onChange={(event) => this.handleInputChange(event.target.name, event.target.value)}
                        placeholder={'Ваш email'}
                        validation={emailValidation}
                    />
                    <InputWithValidation
                        name={'phone'}
                        onChange={(event) => this.handleInputChange(event.target.name, event.target.value)}
                        placeholder={'Ваш номер'}
                        validation={phoneValidation()}
                    />
                    <InputWithValidation
                        name={'address'}
                        onChange={(event) => this.handleInputChange(event.target.name, event.target.value)}
                        placeholder={'Адрес доставки'}
                    />

                </OrderForm>
                <Modal.Footer>
                    <Button onClick={this.hideModal}>{'Закрыть'}</Button>
                    <Button onClick={this.hideModal}>{'Оформить заказ'}</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

const PriceLabel = styled(Label)`
   font-size: 18px;
   margin: 5px;
`;

const OrderForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const HeaderCell = styled.th`
    text-align: center;
`;

const Cell = styled.td`
    text-align: center;
`;






