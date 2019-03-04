import React, {Component} from 'react';

import '../../assets/css/style.scss';
import './style.scss';

class WorkTypes extends Component {
    render() {
        return (
            <section id="types">
                <div className="centered">

                    <h2 className="text-align-center">

                        ВЫПОЛНЯЕМ ВСЕ ВИДЫ РАБОТ

                    </h2>
                    <div className="types">
                        <div className="type-item">

                            <img
                                src={require('../../assets/img/carkas.jpg')}
                                alt="" className="type-image"/>

                            <div className="type-title">Каркасный дом под ключ</div>

                        </div>
                        <div className="type-item">

                            <img
                                src={require('../../assets/img/kosmetich.jpg')}
                                alt="" className="type-image"/>

                            <div className="type-title">Косметический ремонт</div>

                        </div>

                        <div className="type-item">

                            <img
                                src={require('../../assets/img/kap_remont.jpg')}
                                alt="" className="type-image"/>

                            <div className="type-title">Капитальный ремонт</div>

                        </div>

                        <div className="type-item">

                            <img
                                src={require('../../assets/img/design.jpg')}
                                alt="" className="type-image"/>

                            <div className="type-title">Ландшафтный дизайн</div>

                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default WorkTypes