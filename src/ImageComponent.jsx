import React from "react";

// Componente classe che visualizza un'immagine con src, alt, style e className passati tramite props
class ImageComponent extends React.Component {
  render() {
    return (
      <img
        src={this.props.src} // src passato tramite props
        alt={this.props.alt} // alt passato tramite props
        style={this.props.style} // style passato tramite props
        className={this.props.className} // className passato tramite props
      />
    );
  }
}

export default ImageComponent; // Esporto il componente per poterlo usare altrove
