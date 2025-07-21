// Componente funzionale che visualizza un bottone con testo passato tramite props
function ButtonComponent(props) {
  return (
    <button>{props.text}</button> // Il testo del bottone viene preso dalle props
  );
}

export default ButtonComponent; // Esporto il componente per poterlo usare altrove
