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

                                ПРОКАТ <br/>
                                ИНСТРУМЕНТА

                                <em>
                                    строительный интрумент на прокат в минске
                                </em>
                            </h1>

                            <div className="header-button-wrapper">

                                Любой инструмент<br/> для самых интересных задач<br/><br/>

                                <div className="big-button-wrapper">

                                    <div className="button-wrapper pulse-button">
                                        <a href="#" className="button wide open-calc-modal">ПОСМОТРЕТЬ КАТАЛОГ</a>
                                    </div>

                                    <div className="button-description">Закажите звонок для консультации</div>
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

