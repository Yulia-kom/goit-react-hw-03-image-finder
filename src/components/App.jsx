import { Component } from 'react';
// import { ToastContainer } from 'react-toastify';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';
import fetchImages from './services/api';

export default class App extends Component {
  state = {
    query: '',
    page: 1,
    isPending: false,
    isModalOpen: false,
    images: [],
    modalImg: '',
  };

  handleSetQuery = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ isPending: true, page: 1 });
  };

  handleTogleModal = image => {
    this.setState(prev => ({
      isModalOpen: !prev.isModalOpen,
      modalImg: image,
    }));
  };

  handleLoadMore(event) {
    this.setState(prev => ({ page: prev.page + 1, isPending: true }));
  }

  componentDidUpdate() {
    if (this.state.isPending) {
      fetchImages(this.state.query, this.state.page).then(img => {
        this.setState(prev => ({
          images: this.state.page > 1 ? [...prev.images, ...img] : img,
          isPending: false,
        }));
      });
    }
  }

  render() {
    const { isModalOpen, images, query, modalImg } = this.state;
    const {
      handleSetQuery,
      handleFormSubmit,
      handleTogleModal,
      handleLoadMore,
    } = this;
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <Searchbar
          handleSetQuery={handleSetQuery}
          query={query}
          handleFormSubmit={handleFormSubmit}
        />
        <ImageGallery images={images} handleTogleModal={handleTogleModal} />
        {/* <ToastContainer autoClose={3000} /> */}
        {images.length >= 12 && (
          <Button handleLoadMore={handleLoadMore.bind(this)} />
        )}
        {isModalOpen && (
          <Modal modalImg={modalImg} handleTogleModal={handleTogleModal} />
        )}
      </div>
    );
  }
}
