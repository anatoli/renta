import React, {Component} from 'react'

import '../../assets/css/style.scss';
import './style.scss';

import Zoom from '../../assets/icon/Zoom';

class SliderTape extends Component {

    constructor (props) {
        super();
        this.state = {
            currentIndex: 0,
            translateIndex: 0,
            concreteOfWork: 1,
            modalIsOpen: false
        }
    }

    Next = () => {
        let index = this.state.translateIndex + 1;
        if ( index > this.lengthSlider) {
            index = 0
        };
        this.setState({translateIndex: index})
    };

    Back = () => {
        let index = this.state.translateIndex - 1;
        if ( index < 0 ) {
            index = this.lengthSlider
        };
        this.setState({translateIndex: index})
    };
    
    render() {
        const { currentIndex, translateIndex} = this.state;
        const { imagesList, imageListIndex, onClickImage, zoomDisabled} = this.props;
        this.lengthSlider = !!imagesList && imagesList.length ? imagesList.length - 1 : this.props.children.length - 1;
        return(
            <div className="tab-content">
                {/* Slider */}
                <div className="single-slider-wrapper">
                    <div className={`single-slider design-slider owl-carousel owl-loaded owl-drag ${currentIndex === 2 ? 'owl-hidden' : ''}`}>

                        <div className="owl-stage-outer">
                            <div className="owl-stage" style={{ transform: `translate3d(${0 - 990*(translateIndex)}px, 0px, 0px)`, transition: 'all 0s ease 0s; width: 11880px' }}>
                                {(
                                    this.props.children ?
                                        this.props.children.map((el, i) =>
                                            <div className={`owl-item ${translateIndex === i ? 'active' : ''}`}>
                                                {el}
                                            </div>
                                        )
                                    :
                                        imagesList.map((el, i) =>
                                            <div className={`owl-item ${translateIndex === i ? 'active' : ''}`}>
                                                <a href={el}
                                                   onClick={(e) => {
                                                       e.preventDefault();
                                                       onClickImage(imageListIndex);
                                                   }}
                                                   className="single-slider-design-media show-zoom"
                                                   data-fancybox="design-1">

                                                    <img
                                                        src={el}
                                                        alt="" className="single-slider-media -item-image"/>
                                                    {!zoomDisabled &&
                                                    <span className="photo-overlay"></span>
                                                    }
                                                    <span className="photo-border"></span>
                                                    {!zoomDisabled &&
                                                    <Zoom/>
                                                    }

                                                </a>
                                            </div>
                                        )
                                )}
                            </div>
                        </div>

                        <div className="owl-nav">
                            <button type="button" role="presentation" className="owl-prev" onClick={() =>{this.Back('workInPlaceIndex')}}><span
                                aria-label="Previous">‹</span></button>
                            <button type="button" role="presentation" className="owl-next" onClick={() => {this.Next('workInPlaceIndex')}}><span
                                aria-label="Next" >›</span></button>
                        </div>
                        <div className="owl-dots disabled"></div>
                    </div>
                </div>

            </div>
        )
    }
}

export default SliderTape