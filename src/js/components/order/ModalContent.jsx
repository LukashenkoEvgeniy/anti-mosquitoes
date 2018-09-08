import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import styled from 'styled-components'

import {Button, Glyphicon, Label, Modal, Table} from 'react-bootstrap';
import {colors, types} from '../../utils/enums';
import InputWithValidation from './components/InputWithValidation.jsx';
import {addressValidation, emailValidation, phoneValidation} from '../../utils/validation';


@inject('uiStore', 'orderStore')
@observer
export default class ModalContent extends React.Component {

    constructor(props) {
        super(props);
        this.hideModal = this.hideModal.bind(this);
        this.ordering = this.ordering.bind(this);
        this.state = {message: null}
    }

    handleInputChange(type, value) {
        this.setState({[type]: value})
    }

    onDeleteClick(orderContract) {
        this.props.orderStore.remove(orderContract);
    }

    hideModal() {
        this.setState(null);
        this.props.uiStore.hideModal();
    }

    ordering() {
        this.props.orderStore.sendOrder({...this.state})
            .then((message) => {
                this.setState({message: message});
                setTimeout(() => this.hideModal(), 5000)
            })
            .catch(message => this.setState({message: message}))
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
                            <tr key={orderContract.id}>
                                <Cell>{++index}</Cell>
                                <Cell>{types[orderContract.type]}</Cell>
                                <Cell>{colors[orderContract.color]}</Cell>
                                <Cell>{`${orderContract.height}x${orderContract.width}`}</Cell>
                                <Cell>{orderContract.price}</Cell>
                                <Cell>
                                    <Button
                                        bsStyle="danger"
                                        onClick={() => this.onDeleteClick(orderContract)}
                                    >
                                        <Glyphicon
                                            glyph="glyphicon glyphicon-trash"/>
                                    </Button>
                                </Cell>
                            </tr>
                        ))}

                        </tbody>
                    </Table>
                </Modal.Body>
                <OrderForm>
                    <PriceLabel>{`К оплате ${orderStore.finalPrice} грн`}</PriceLabel>

                    <InputWithValidation
                        handleInputChange={(name, value) => this.handleInputChange(name, value)}
                        name={'email'}
                        placeholder={'Ваш email'}
                        validation={emailValidation}
                    />
                    <InputWithValidation
                        handleInputChange={(name, value) => this.handleInputChange(name, value)}
                        name={'phone'}
                        placeholder={'Ваш номер'}
                        validation={phoneValidation}
                    />
                    <InputWithValidation
                        handleInputChange={(name, value) => this.handleInputChange(name, value)}
                        name={'address'}
                        placeholder={'Адрес доставки'}
                        validation={addressValidation}
                    />
                    {this.state.message && <ResponseMessage>{this.state.message}</ResponseMessage>}
                </OrderForm>
                <Modal.Footer>
                    <Button onClick={this.hideModal}>{'Закрыть'}</Button>
                    <Button onClick={this.ordering}>{'Оформить заказ'}</Button>
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

const ResponseMessage = styled(Label)`
    background-color: green;
    font-size: 18px;
    margin: 5px;
`;





