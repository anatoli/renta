import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/style.scss';
import "react-alice-carousel/src/alice-carousel.scss";
import AliceCarousel from 'react-alice-carousel';
import { ScrollMenuCustom } from '../ScrollMenu'

import "./style.scss"
import Zoom from "../../assets/icon/Zoom";
import SliderTape from "../SliderTape";
import Modal from "react-modal";

class Galery extends Component {

    constructor(props)
    {
        super();
        let array = [];
        for (let i = 2; i<59; i++){
            array.push(i);
        }
        this.state = {
            currentIndex: 0,
            items: array
        };

    }

    static PropTypes = {
      images: PropTypes.array.isRequired
    };
    openModal = (index) => {
        this.setState({modalIsOpen: true, modalActiveImage: index});
        return false;
    };

    afterOpenModal = () => {
        // references are now sync'd and can be accessed.
    };

    closeModal = () => {
        this.setState({modalIsOpen: false});
    };

    slideTo = (i) => this.setState({currentIndex: i});

    onSlideChanged = (e) => this.setState({currentIndex: e.item});

    slideNext = () => this.setState({currentIndex: this.state.currentIndex + 1});

    slidePrev = () => this.setState({currentIndex: this.state.currentIndex - 1});

    renderThumbs = () =>
        <div className='wrapperGallery'>
            {this.state.items.map((item, i) =>
                <div>
                    <a href={item}
                       onClick={(e) => {
                           e.preventDefault();
                           this.openModal(i);
                       }}
                       className="single-slider-design-media show-zoom"
                       data-fancybox="design-1">
                    <img key={i} onClick={() => this.slideTo(i)} className='images' src={`images/galery/${item}.jpg`} />
                    <span className="photo-overlay--galery"/>
                    <span className="photo-border"/>
                    <Zoom/>
                    </a>
                </div>
            )}
        </div>;

    renderGallery = () =>  {
        const {items} = this.state;
        let imagesList = [];
        {items.map(
                (item) => { imagesList.push({ src:`images/galery/${item}.jpg`}) }
            )
        }
        return imagesList ;
    }

    render()
    {
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
                    <ScrollMenuCustom list={this.renderGallery()} translate={this.state.modalActiveImage}/>
                </Modal>
                {this.renderThumbs()}

            </div>
        );
    }

}

export default Galery
