import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ img, modalImg, handleTogleModal }) => {
  return (
    <li
      className={style.ImageGalleryItem}
      onClick={() => handleTogleModal(modalImg)}
    >
      <img src={img} alt="" className={style.ImageGalleryItemimage} />
    </li>
  );
};

export default ImageGalleryItem;
