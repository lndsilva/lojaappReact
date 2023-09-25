//4-Template expression
const TemplateExpression = () => {

    const name = 'João Antunes';

    const dados = {
        idade: 23,
        job: 'Desenvolvedor'
    }

    return (
        <div>
            <p>A soma é {2 + 2}</p>
            <h3>Bem vindo {name}</h3>
            <p>Sua idade é {dados.idade} anos</p>
            <p>Você é um {dados.job}</p>
        </div>
    );
};

export default TemplateExpression;