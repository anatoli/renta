import React, {Component} from 'react';
// import OwlCarousel from 'react-owl-carousel';
import '../../assets/css/style.scss';
import './style.scss';
import Modal from 'react-modal';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import CrossClose from '../../assets/icon/CrossClose';
import Zoom from '../../assets/icon/Zoom';
import SliderAndDescription from '../../components/SliderAndDescription'
import SliderTape from "../../components/SliderTape";


class ExamplesList extends Component {
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

        const imagesList2 = [
            'http://am24.by/wp-content/uploads/2019/01/11-1.jpg',
            'http://am24.by/wp-content/uploads/2019/01/12-3.jpg',
            'http://am24.by/wp-content/uploads/2019/01/13-2.jpg',
            'http://am24.by/wp-content/uploads/2019/01/14-2.jpg',
            'http://am24.by/wp-content/uploads/2019/01/15-2.jpg',
            'http://am24.by/wp-content/uploads/2019/01/16-2.jpg',
        ];
        const imagesList3 = [
            'http://am24.by/wp-content/uploads/2019/01/31.jpg',
            'http://am24.by/wp-content/uploads/2019/01/32-1.jpg',
            'http://am24.by/wp-content/uploads/2019/01/33-1.jpg',
            'http://am24.by/wp-content/uploads/2019/01/34-1.jpg',
            'http://am24.by/wp-content/uploads/2019/01/35-1.jpg',
            'http://am24.by/wp-content/uploads/2019/01/36-1.jpg',

        ];
        const imagesList4 = [
            'http://am24.by/wp-content/uploads/2019/01/31.jpg',
            'http://am24.by/wp-content/uploads/2019/01/32-1.jpg',
            'http://am24.by/wp-content/uploads/2019/01/33-1.jpg',
            'http://am24.by/wp-content/uploads/2019/01/34-1.jpg',
            'http://am24.by/wp-content/uploads/2019/01/35-1.jpg',
            'http://am24.by/wp-content/uploads/2019/01/36-1.jpg',

        ];
        const imagesList5 = {
            srcList: [
                'http://am24.by/wp-content/uploads/2019/01/31.jpg',
                'http://am24.by/wp-content/uploads/2019/01/32-1.jpg',
                'http://am24.by/wp-content/uploads/2019/01/33-1.jpg',
                'http://am24.by/wp-content/uploads/2019/01/34-1.jpg',
                'http://am24.by/wp-content/uploads/2019/01/35-1.jpg',
                'http://am24.by/wp-content/uploads/2019/01/36-1.jpg',
            ],
            description: {
                name: '1 комнатная квартира',
                area: "3477",
                time: "61"
            }
        };
        const imagesList6 = {
            srcList: [
                'http://am24.by/wp-content/uploads/2019/01/11-1.jpg',
                'http://am24.by/wp-content/uploads/2019/01/12-3.jpg',
                'http://am24.by/wp-content/uploads/2019/01/13-2.jpg',
                'http://am24.by/wp-content/uploads/2019/01/14-2.jpg',
                'http://am24.by/wp-content/uploads/2019/01/15-2.jpg',
                'http://am24.by/wp-content/uploads/2019/01/16-2.jpg',
            ],
            description: {
                name: '1 комнатная квартира',
                area: "3433",
                time: "61"
            }
        };

        return (
            <section id="design">
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    className="Modal"
                    overlayClassName="Overlay"
                >
                    <button className='closeBtn' onClick={this.closeModal}><CrossClose width='50' height='50'/></button>
                    {(() => {
                            switch (currentIndex) {
                                case "1":   return <SliderTape>
                                    <SliderAndDescription imagesList={imagesList5} />
                                    <SliderAndDescription imagesList={imagesList6} />
                                </SliderTape>;;
                                case "2": return <SliderTape imagesList={imagesList2} imageListIndex='2' onClickImage={this.openModal} zoomDisabled={true}/>;
                                case "3": return <SliderTape imagesList={imagesList3} imageListIndex='3' onClickImage={this.openModal} zoomDisabled={true}/>;
                                case "4": return <SliderTape imagesList={imagesList4} imageListIndex='4' onClickImage={this.openModal} zoomDisabled={true}/>;
                                case "5": return <SliderTape imagesList={imagesList5.srcList} imageListIndex='5' onClickImage={this.openModal} zoomDisabled={true}/>;
                                default: return <SliderTape>
                                    <SliderAndDescription imagesList={imagesList5} />
                                    <SliderAndDescription imagesList={imagesList6} />
                                </SliderTape>;
                            }}
                    )()}
                </Modal>
                <div className="centered">

                    <h2 className="text-align-center">

                        ПОСМОТРИТЕ НАШИ РАБОТЫ

                    </h2>


                    <div className="tabs-wrapper works-tabs-wrapper active">
                        <div className="tabs works-tabs">
                            {/* Single */}
                            {
                                this.state.tabs.map((el, i) =>
                                    <div className={`tab-item ${el.active ? 'active' : ''}`}
                                            onClick={() => {this.tabClick(el.id)}}>{el.name}</div>
                                )
                            }
                        </div>
                    </div>

                    <div className="tabs-content">
                        {(() => {
                            switch (currentIndex) {
                                case "1":   return <SliderTape>
                                    <SliderAndDescription imagesList={imagesList5} />
                                    <SliderAndDescription imagesList={imagesList6} />
                                </SliderTape>;;
                                case "2": return <SliderTape imagesList={imagesList2} imageListIndex='2' onClickImage={this.openModal}/>;
                                case "3": return <SliderTape imagesList={imagesList3} imageListIndex='3' onClickImage={this.openModal}/>;
                                case "4": return <SliderTape imagesList={imagesList4} imageListIndex='4' onClickImage={this.openModal}/>;
                                case "5": return <SliderTape imagesList={imagesList5.srcList} imageListIndex='5' onClickImage={this.openModal}/>;
                                default: return <SliderTape>
                                    <SliderAndDescription imagesList={imagesList5} />
                                    <SliderAndDescription imagesList={imagesList6} />
                                </SliderTape>;;
                            }}
                        )()}
                    </div>


                </div>
            </section>
        );
    }
}

export default ExamplesList;