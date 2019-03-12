import React, {Component} from 'react';
import "react-alice-carousel/src/alice-carousel.scss";
import AliceCarousel from 'react-alice-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import '../../assets/css/style.scss';
import './style.scss';
import Zoom from '../../assets/icon/Zoom';
import CardItem from '../../components/Card_Item'
import Modal from "react-modal";
import CrossClose from "../../assets/icon/CrossClose";
import SliderTape from "../../components/SliderTape";
import SliderAndDescription from "../../components/SliderAndDescription";


class SecondBlock extends Component {

    constructor(props)
    {
        super();
        this.tabsDefault=[
            {id:'1', name:'Строительство под ключ', active: true},
            {id:'2', name:'Внутренние работы', active: false},
            {id:'3', name:'Бетонные работы', active: false},
            {id:'4', name:'Строительство заборов', active: false},
            {id:'5', name:'Благоустройство территории', active: false}
        ]
        this.state = {
            currentIndex: 0,
            items: [1, 2, 3, 4, 5],
            tabs: this.tabsDefault,
            workInPlaceIndex: 1,
            concreteOfWork: 1,
            modalIsOpen: false
        }
    }
    openModal = () => {
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
            <section id="projects">
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    className="Modal"
                    overlayClassName="Overlay"
                >
                    <button className='closeBtn' onClick={this.closeModal}><CrossClose width='50' height='50'/></button>
                    <CardItem />
                </Modal>
                <div className="centered">

                    <h2 className="text-align-center">

                        НАШ КАТАЛОГ

                    </h2>

                    <div className="after-h2 text-align-center">

                        Ваш ремонт будет один в один, как в дизайн-проекте. Сравните сами. Слева проект, справа готовый ремонт

                    </div>
                    <div className='product-outer'>
                        <CardItem onClick={this.openModal} />
                        <CardItem onClick={this.openModal} />
                        <CardItem onClick={this.openModal} />
                        <CardItem onClick={this.openModal} />
                        <CardItem onClick={this.openModal} />
                        <CardItem onClick={this.openModal} />
                    </div>


                </div>
            </section>

    );
    }
}




export default SecondBlock

