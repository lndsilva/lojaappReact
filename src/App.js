import './App.css';
//2-importando componente
import FirstComponent from './components/FirstComponent';
//4-template expression
import TemplateExpression from './components/TemplateExpression';
import MyComponents from './components/MyComponents';
import Events from './components/Events';

function App() {
  //3-comentários
  return (
    <div className="App">
      {/*3-comentários dentro do JSX*/}
     <h1>Fundamentos do React</h1>
     <FirstComponent/>
     <TemplateExpression/>
     <MyComponents/>
     <Events/>
    </div>
  );
}

export default App;
