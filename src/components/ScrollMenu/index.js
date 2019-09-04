import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './style.scss';

// One item component
// selected prop will be passed
const MenuItem = ({src, selected}) => {
    return <div
        className={`menu-item ${selected ? 'active' : ''} container-image`}
    >
            <img
                src={src}
                alt=""
                className="single-slider-media -item-image"/>
    </div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
    list.map(el => {
        const {src} = el;
        return <MenuItem src={src} key={src} selected={selected} />;
    });


const Arrow = ({ text, className }) => {
    return (
        <div
            className={className}
        >{text}</div>
    );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const selected = 'item1';

export class ScrollMenuCustom extends Component {
    constructor(props) {
        super(props);
        // call it again if items count changes
        this.menuItems = Menu(props.list, selected);
    }

    state = {
        selected
    };

    onSelect = key => {
        this.setState({ selected: key });
    }
    render() {
        const { selected } = this.state;
        // Create menu from items
        const menu = this.menuItems;
        return (
            <div className="App">
                <ScrollMenu
                    data={menu}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    selected={selected}
                    onSelect={this.onSelect}
                    itemClass={'menu-item--custom'}
                    wheel={false}
                    dragging={false}
                    translate={this.props.translate - 1}
                />
            </div>
        );
    }
}
