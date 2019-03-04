import React, {Component} from 'react'

import '../../assets/css/style.scss';
import './style.scss';

import Zoom from '../../assets/icon/Zoom';

class SliderAndDescription extends Component {

    render() {
        const {imagesList} = this.props;
        return(
            <div className="owl-item" >
                <div className="single-slider-item si-justify">

                    {/* Media */}
                    <div className="single-slider-media-wrapper">
                        <div className="single-slider-media">


                            {/* Photo */}
                            <a href="http://am24.by/wp-content/uploads/2019/01/8.jpg"
                               className="single-slider-media-item show-zoom"
                               data-fancybox="works-3-1">

                                <img
                                    src={imagesList.srcList[4]}
                                    alt="" className="single-slider-media-item-image" />

                                    <span className="photo-overlay"></span>
                                    <span className="photo-border"></span>

                                    <Zoom />

                            </a>


                            {/* Photo */}
                            <a href="http://am24.by/wp-content/uploads/2019/01/82.jpg"
                               className="single-slider-media-item show-zoom"
                               data-fancybox="works-3-1">

                                <img
                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/82.jpg&amp;w=180&amp;h=120"
                                    alt="" className="single-slider-media-item-image" />

                                    <span className="photo-overlay"></span>
                                    <span className="photo-border"></span>

                                    <Zoom />

                            </a>


                            {/* Photo */}
                            <a href="http://am24.by/wp-content/uploads/2019/01/83.jpg"
                               className="single-slider-media-item show-zoom"
                               data-fancybox="works-3-1">

                                <img
                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/83.jpg&amp;w=180&amp;h=120"
                                    alt="" className="single-slider-media-item-image" />

                                    <span className="photo-overlay"></span>
                                    <span className="photo-border"></span>

                                    <Zoom />

                            </a>


                            {/* Photo */}
                            <a href="http://am24.by/wp-content/uploads/2019/01/84.jpg"
                               className="single-slider-media-item show-zoom"
                               data-fancybox="works-3-1">

                                <img
                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/84.jpg&amp;w=180&amp;h=120"
                                    alt="" className="single-slider-media-item-image" />

                                    <span className="photo-overlay"></span>
                                    <span className="photo-border"></span>

                                    <Zoom />

                            </a>


                            {/* Photo */}
                            <a href="http://am24.by/wp-content/uploads/2019/01/85.jpg"
                               className="single-slider-media-item show-zoom"
                               data-fancybox="works-3-1">

                                <img
                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/85.jpg&amp;w=180&amp;h=120"
                                    alt="" className="single-slider-media-item-image" />

                                    <span className="photo-overlay"></span>
                                    <span className="photo-border"></span>

                                    <Zoom />

                            </a>


                            {/* Photo */}
                            <a href="http://am24.by/wp-content/uploads/2019/01/86.jpg"
                               className="single-slider-media-item show-zoom"
                               data-fancybox="works-3-1">

                                <img
                                    src="http://am24.by/wp-content/themes/remont/timthumb.php?src=http://am24.by/wp-content/uploads/2019/01/86.jpg&amp;w=180&amp;h=120"
                                    alt="" className="single-slider-media-item-image" />

                                    <span className="photo-overlay"></span>
                                    <span className="photo-border"></span>

                                    <Zoom />

                            </a>


                        </div>
                    </div>

                    {/* Content */}
                    <div className="single-slider-content">

                        {/* Top */}
                        <div className="single-slider-content-top">

                            {/* Title */}
                            <div className="single-slider-content-top-title">

                                <strong>{imagesList.description.name}</strong>

                            </div>

                        </div>


                        {/* Stats */}
                        <div className="single-slider-content-stats si-justify">


                            {/* Single */}
                            <div className="single-slider-content-stat">

                                <strong>Площадь:</strong>
                                {imagesList.description.area}М<sup>2</sup>
                            </div>


                            {/* Single */}
                            <div className="single-slider-content-stat">

                                <strong>Срок:</strong>
                                {imagesList.description.time} ДНЯ
                            </div>


                        </div>


                    </div>

                </div>
            </div>
        )
    }
}

export default SliderAndDescription