import React from "react";

// Componente classe che visualizza un'immagine con src e alt passati tramite props
class ImageComponent extends React.Component {
  render() {
    return (
      <img src={this.props.src} alt={this.props.alt} /> // src e alt vengono presi dalle props
    );
  }
}

export default ImageComponent; // Esporto il componente per poterlo usare altrove
