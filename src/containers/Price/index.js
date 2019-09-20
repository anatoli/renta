import React, {Component} from 'react';
import readXlsxFile from 'read-excel-file'
// import OwlCarousel from 'react-owl-carousel';
import '../../assets/css/style.scss';
import './style.scss';

import Modal from 'react-modal';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import CrossClose from '../../assets/icon/CrossClose';
import {parseExcel} from '../../helpers/exelReader';


class Price extends Component {
    constructor(props)
    {
        super();
        this.state = {
            currentIndex: 0,
            items: [1, 2, 3, 4, 5],
            tabs: this.tabsDefault,
            workInPlaceIndex: 1,
            concreteOfWork: 1,
            modalIsOpen: false
        }
    }

    componentDidMount() {
        debugger
        parseExcel('../../../public/price.xlsx').then((rows) => {
            console.log(rows)
        }).catch((error => {console.log("textError"); console.log(error)}))
    }

    tabClick = (id) => {
        const updateArray=[];
        this.tabsDefault.map((el) => {
            el.active = (el.id === id);
            updateArray.push(el);
        });
        this.setState({tabs: updateArray, currentIndex: id})
    };

    Next = (key) => {
        let index = Number(this.state[key]) + 1;
        if ( index > 6 ) {
            index = 1
        };
        this.setState({[key]: index})
    };

    Back = (key) => {
        let index = Number(this.state[key]) - 1;
        if ( index < 0 ) {
            index = 6
        };
        this.setState({[key]: index})
    };

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
        const { currentIndex, workInPlaceIndex, concreteOfWork } =this.state;
        return (
            <section id="price">
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    className="Modal"
                    overlayClassName="Overlay"
                >
                    <button className='closeBtn' onClick={this.closeModal}><CrossClose width='50' height='50'/></button>
                </Modal>
                <h2>Ознакомтесь с ценами</h2>
                {this.priceData &&
                    this.priceData.map((el) => {
                        <div>{el}</div>
                    })
                }
            </section>
        );
    }
}

export default Price;
