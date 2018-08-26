import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import styled from 'styled-components'

import {Button, Label, Modal, Table} from 'react-bootstrap';
import {colors, types} from '../../utils/enums';


@inject('uiStore', 'orderStore')
@observer
export default class ModalContent extends React.Component {

    constructor(props){
        super(props);
        this.hideModal = this.hideModal.bind(this);
    }

    hideModal(){
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
                    <Table striped bordered condensed hover responsive>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>{'Тип'}</th>
                            <th>{'Цвет'}</th>
                            <th>{'Размеры'}</th>
                            <th>{'Стоимость'}</th>
                            <th>{'Удалить'}</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orderStore.getAll().map((orderContract, index)=>(
                            <tr key={++index}>
                                <td>{index}</td>
                                <td>{types[orderContract.type]}</td>
                                <td>{colors[orderContract.color]}</td>
                                <td>{`${orderContract.height}x${orderContract.width}`}</td>
                                <td>{orderContract.price}</td>
                                <td>x</td>
                            </tr>
                        ))}

                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <div>
                        <Label>{`К оплате ${orderStore.finalPrice} грн`}</Label>
                        <Button onClick={this.hideModal}>{'Закрыть'}</Button>
                        <Button onClick={this.hideModal}>{'Оформить заказ'}</Button>
                    </div>

                </Modal.Footer>
            </Modal>
        );
    }
}

const AdvantageCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    alight-items: center;
    justify-content: center;
    padding-top: 10em;
`;


