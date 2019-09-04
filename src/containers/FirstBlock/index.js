import React, {Component} from 'react';
import '../../assets/css/style.scss';
import CrossClose from "../../assets/icon/CrossClose";
import ContactsForm from "../../components/ContactsForm";
import Modal from "react-modal";

class FirstBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        }
    }

    openModal = (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.setState({modalIsOpen: true});
        return false;
    };

    afterOpenModal = () => {
        // references are now sync'd and can be accessed.
    };

    closeModal = () => {
        this.setState({modalIsOpen: false});
    };
    render() {
        return (
            <div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    className="Modal"
                    overlayClassName="Overlay"
                >
                    <button className='closeBtn' onClick={this.closeModal}><CrossClose width='50' height='50'/></button>
                    <ContactsForm type='cost' />
                </Modal>
                <header>
                    <div className="centered">

                        <div className="header-content">
                            <h1>

                                СВОЙ ДОМ <br/>
                                ПОД КЛЮЧ

                                <em>
                                    с гарантией сроков и поэтапной оплатой
                                </em>
                            </h1>

                            <div className="header-button-wrapper">

                                Все виды строительных работ<br/> и ландшафтного дизайна<br/><br/>

                                <div className="big-button-wrapper">

                                    <div className="button-wrapper pulse-button">
                                        <a href="#" className="button wide open-calc-modal" onClick={this.openModal}>РАССЧИТАТЬ СТОИМОСТЬ</a>
                                    </div>

                                    <div className="button-description">Получите предварательную смету уже сегодня</div>
                                </div>
                            </div>

                        </div>
                        <img src={require('../../assets/img/first_house.png')} alt=""
                             className="header-image"/>
                    </div>
                </header>
            </div>
        )
    }
}

export default FirstBlock;

