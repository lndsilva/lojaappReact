const Events = () => {
  const HandleClick = (e) => {
    console.log(e);
    console.log("Executou");
  };

  return (
    <div>
      <button onClick={() => console.log("Testando um evento de clique")}>
        Clique aqui
      </button>
      <div>
        <button onClick={HandleClick}>Clique aqui - com função</button>
      </div>
    </div>
  );
};

export default Events;
