import React, { Component } from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames';
import ReactDOM from 'react-dom';

import './styles.sass';

class CheckBox extends Component {
  static propTypes = {
    text: PropTypes.node,
    /** html id */
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    /** component size */
    size: PropTypes.oneOf(['50', '100']),
    className: PropTypes.string,
    /**
     * Обработчик изменения значения 'checked' компонента, принимает на вход isChecked и value компонента
     * @param {boolean} isChecked
     * @param {string} value
     */
    onChange: PropTypes.func,
    /**
     * Обработчик фокуса комнонента
     * @param {React.FocusEvent} event
     */
    onFocus: PropTypes.func,
    /**
     * Обработчик снятия фокуса компонента
     * @param {React.FocusEvent} event
     */
    onBlur: PropTypes.func
  };

  constructor (props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  static defaultProps = {
    size: '100'
  };

  state = {
    focused: false,
    checked: false
  };

  root;

  render () {
    const {
      size,
      disabled,
      checked,
      id,
      className
    } = this.props;
    const checkedState = checked !== undefined
      ? checked
      : this.state.checked;

    let CheckboxClassName = cn('ico-checkbox',
      `ico-checkbox--size-${size}`,
      {
        'ico-checkbox--disabled': disabled,
        'ico-checkbox--focused': this.state.focused,
        'ico-checkbox--checked': checked
      },
      className
    );
    return (
      <label
        className={ CheckboxClassName }
        htmlFor={ id }
        onFocus={ this.handleFocus }
        onBlur={ this.handleBlur }
        ref={ (root) => {
          this.root = root;
        } }
      >
        { this.checkboxContent(checkedState) }
      </label>
    );
  }

  checkboxContent (isChecked) {
    const {
      name,
      disabled,
      id,
      value,
      text
    } = this.props;
    return [
      <span
        className={ cn('ico-checkbox__check') }
        key="ico-checkbox"
      >
        <input
          className={ cn('ico-checkbox__realinput') }
          type="checkbox"
          autoComplete="off"
          name={ name }
          id={ id }
          value={ value }
          checked={ isChecked }
          disabled={ disabled }
          onChange={ this.handleChange }
        />
        {/*<span className="ico-checkbox__fakeinput">*/}
            {/*<span className="ico-checkbox__fakeinput-inner">*/}
                {/*<SuccessIcon/>*/}
            {/*</span>*/}
            {/*<span className="input__shadow"/>*/}
        {/*</span>*/}
      </span>,
      text &&
      <span
        className="ico-checkbox__text"
        key="text"
        role="presentation"
      >
            { text }
        </span>
    ];
  }

  handleChange () {
    const {
      disabled,
      checked,
       onChange,
      id
    } = this.props;
    if (!disabled) {
      const nextCheckedValue = !(
        checked !== undefined
          ? checked
          : this.state.checked
      );
      this.setState({ checked: nextCheckedValue });

      if (onChange) {
        this.props.onChange(nextCheckedValue, id);
      }
    }
  }

  handleFocus (event) {
    this.setState({ focused: true });

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  }

  handleBlur (event) {
    this.setState({ focused: false });

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  }

  /**
   * Устанавливает фокус на чекбокс.
   *
   * @public
   */
  focus () {
    ReactDOM.findDOMNode(this.root).focus();
  }

  /**
   * Убирает фокус с чекбокса.
   *
   * @public
   */
  blur () {
    if (document.activeElement) {
      document.activeElement.blur();
    }
  }
}

export default CheckBox;
