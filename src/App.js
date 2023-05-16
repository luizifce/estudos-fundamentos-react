import "./App.css";
import Voos from "./Voos";
import React from "react";
import AssentosOnibus from "./AssentosOnibus";
import ViaCEP from "./ViaCEP";

// Component em forma de arrow function
const Titulo = () => {
    return (
        <h1>
            <span>Olá</span> a <strong>todos</strong>!!!
        </h1>
    );
};

// Component com evento em forma de classes ES6
class MeuBotao extends React.Component {
    handleClick(e) {
        e.preventDefault();
        this.imprime();
    }

    imprime() {
        console.log("Clicou");
    }

    render() {
        return (
            <a
                onClick={this.handleClick.bind(this)}
                type="button"
                href="https://descomplica.com.br"
            >
                {this.props.label} - {this.props.number}
            </a>
        );
    }
}

function PessoaIdade(props) {
    return <strong>{props.label}</strong>;
}

function Pessoa(props) {
    return (
        <section>
            <p>
                Você é {props.idade >= 18 && <PessoaIdade label="de maior" />}
            </p>
        </section>
    );
}

const ListItem = ({ label }) => {
    return (
        <li>
            <strong>{label}</strong>
        </li>
    );
};

const Lista = () => {
    const passos = [
        "Configurar projeto",
        "Embedar React",
        "Criar Components",
        "Escrever testes",
        "Fazer deploy",
    ];

    return (
        // Passando key como idx, para auxiliar o algoritmo do react a atualizar os itens da lista.
        <ul>
            {passos.map((element, idx) => {
                return <ListItem key={idx} label={element} />;
            })}
        </ul>
    );
};

function App() {
    const continha = 5 + 8;
    const labelBotao = `Teste: ${continha}`;

    return (
        <div className="App">
            <Titulo />
            <ViaCEP />
            <AssentosOnibus />
            <Voos />
            <Lista />
            <Pessoa idade={19} />
            <Pessoa idade={12} />

            <article>
                <h2>Subtítulo</h2>
                <p>Olá a todos</p>

                <MeuBotao label={labelBotao} number={continha} />
            </article>
        </div>
    );
}

export default App;
