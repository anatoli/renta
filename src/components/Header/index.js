import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../../assets/css/style.scss';
import Modal from "react-modal";
import CrossClose from "../../assets/icon/CrossClose";
import ContactsForm from "../ContactsForm";

class Header extends Component {
    static PropTypes = {
        scrollPosition: PropTypes.toString
    };

    constructor(props) {
        super(props);
        this.state = {
            headerPosition: ''
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', () =>{
            if(window.scrollY > 0){
               this.setState({headerPosition: 'fixed'})
            } else {
                this.setState({headerPosition: ''})
            };
        });
    }

    componentWillUnmount(){
        window.removeEventListener('scroll');
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
            <section id="top" className={this.state.headerPosition}>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    className="Modal"
                    overlayClassName="Overlay"
                >
                    <button className='closeBtn' onClick={this.closeModal}><CrossClose width='50' height='50'/></button>
                    <ContactsForm type='call' />
                </Modal>
                <div className="centered si-justify">
                    <a href="/" className="logo">
                        <strong>СТРОЙКА ПОД КЛЮЧ</strong>
                        В МИНСКЕ
                    </a>

                    <div className="si-phone">

                        <a href='tel:+375259480702' className="phone-link">+375 (25) 948-07-02</a>

                        <a href="tel:+375298791671" className="phone-link">+375 (29) 680-80-38</a>

                        <a href="tel:+375298791671" className="phone-link">+375 (29) 879-16-71</a>

                        <a href="#" className="open-phone-modal modal-link buzz-inside" data-extra="1" onClick={this.openModal}>
                            <span className="phone-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z"/></svg>
                            </span>
                            <span className="text">ЗАКАЗАТЬ ЗВОНОК</span>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Header;
