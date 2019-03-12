import React, {Component} from 'react';

import '../../assets/css/style.scss';
import './style.scss';

class CardItem extends Component {
    render() {
        return (
            <div className="product-inner" onClick={this.props.onClick}>
                <div className="product-loop-header">
                    {/*<span className="loop-product-categories">*/}
                        {/*<a href="https://vsedelaem.by/heaters/" rel="tag">Тепловые пушки</a>,*/}
                        {/*<a href="https://vsedelaem.by/petrol/diesel-heaters/" rel="tag">Тепловые пушки дизельные</a>*/}
                    {/*</span>*/}
                    {/*<a href="https://vsedelaem.by/diesel-heaters/master-b-70-ced/"*/}
                    {/*className="woocommerce-LoopProduct-link woocommerce-loop-product__link">*/}
                        {/*<h2 className="woocommerce-loop-product__title">*/}
                            {/*Тепловая пушка MASTER B 70 CED*/}
                        {/*</h2>*/}
                        <div className="product-thumbnail">
                            <img width="300" height="300"
                                 src="https://vsedelaem.by/wp-content/uploads/2018/11/master-70-ced-300x300.jpg"
                                 className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                 alt="Прокат Тепловой пушки Master 70 CED в Минске"/>
                        </div>
                    {/*</a>*/}
                </div>
                <div className="product-loop-body">
                    <span className="loop-product-categories">
                        <a href="https://vsedelaem.by/heaters/" rel="tag">Тепловые пушки</a>,
                        <a href="https://vsedelaem.by/petrol/diesel-heaters/" rel="tag">Тепловые пушки дизельные</a>
                    </span>
                    <a href="https://vsedelaem.by/diesel-heaters/master-b-70-ced/"
                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                        <h2 className="woocommerce-loop-product__title">
                            Тепловая пушка MASTER B 70 CED
                        </h2>
                    </a>
                </div>
                <div className="product-loop-footer">
                    <div className="price-add-to-cart">
                <span className="price">
                    <span className="electro-price">
                        <span className="count">10&nbsp;
                            <span className="count-literal">BYN</span>
                            <span className="day"> / день</span>
                        </span>
                    </span>
                    <span class="separator"> | </span>
                    <span className="electro-price">
                        <span className="count">9&nbsp;
                            <span className="count-literal">BYN</span>
                            <span className="day"> / от 3-х дней</span>
                        </span>
                    </span>
                </span>

                        <div className="add-to-cart-wrap" data-toggle="tooltip" data-title="Заказать оформление"
                             data-original-title=""
                             title="">
                            <a href="/?add-to-cart=7196" data-quantity="1"
                               className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                               data-product_id="7196" data-product_sku="af55a63ee804"
                               aria-label="Добавить &quot;Тепловая пушка MASTER B 70 CED&quot; в корзину"
                               rel="nofollow">Арендовать
                            </a>
                        </div>
                    </div>
                    <div className="hover-area"></div>
                </div>
            </div>

        )
    }
}

export default CardItem