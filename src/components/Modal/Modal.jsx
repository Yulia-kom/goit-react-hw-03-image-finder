import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Modal.module.css';

export default class Modal extends Component {
  onCloseModalByEsc = event => {
    if (event.keyCode === 27) {
      this.props.handleTogleModal('');
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onCloseModalByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseModalByEsc);
  }

  render() {
    const { modalImg, handleTogleModal, tags } = this.props;
    return (
      <div
        className={style.Overlay}
        onClick={event => {
          if (event.target === event.currentTarget) {
            handleTogleModal('');
          }
        }}
      >
        <div className={style.Modal}>
          <img src={modalImg} alt={tags} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  modalImg: PropTypes.string.isRequired,
  handleTogleModal: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
};
