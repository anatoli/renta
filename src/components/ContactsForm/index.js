import React, {Component} from 'react';

import '../../assets/css/style.scss';
import './style.scss';

class ContactsForm extends Component {
    render() {
        return (
           <div className=" cardItem container">
                <h2>Форма обратной связи</h2>
                <form onSubmit={(e) => {e.preventDefault(); return false}} action="http://node.tentfosstoy.by/api/getCall" method="post">
                    <div className="field-block">
                        <label htmlFor="userName">Ваше имя:</label>
                        <input id="userName" className="field" type="text" name="userName" placeholder="ФИО" />
                    </div>
                    {this.props.type !== 'call' &&
                        <div className="field-block">
                            <label htmlFor="email">Ваш E-mail:</label>
                            <input id="email" className="field" type="mail" name="email"
                                   placeholder="Erreway0610@gmail.com" />
                        </div>
                    }

                    <div className="field-block">
                        <label htmlFor="phone">Ваш телефон:</label>
                        <input id="phone" className="field" name="phone" type="text" placeholder="+(375) 44 556 93 74" />
                    </div>
                    {this.props.type !== 'call' &&
                        <div className="field-block">
                            <label htmlFor="message">Текст сообщения:</label>
                            <textarea id="message" className="field" name="message" rows="4"/>
                        </div>
                    }
                    <div className="field-block">
                        <input id="check" type="checkbox" name="check" />
                            <span className="check-text">Я добровольно отправляю свои данные</span>
                    </div>
                    <button id="button" className="button" type="submit">Отправить
                    </button>
                </form>
            </div>
        )
    }
}

export default ContactsForm
