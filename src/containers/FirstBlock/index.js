import React, {Component} from 'react';
import '../../assets/css/style.scss';

class FirstBlock extends Component {
    render() {
        return (
            <div>
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
                                        <a href="#" className="button wide open-calc-modal">РАССЧИТАТЬ СТОИМОСТЬ</a>
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

