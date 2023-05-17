import "./App.css";
import Voos from "./Voos";
import React, { createContext, useState, useContext } from "react";
import AssentosOnibus from "./AssentosOnibus";
import ViaCEP from "./ViaCEP";
import RenderProps from "./RenderProps";
import Fonts from "./Fonts";
import Formulario from "./Formulario";


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

export const ThemeContext = createContext({});

// Gera um novo hook toda vez que é importado, se não fosse uma function criaria apenas um e daria conflito.
export const useThemeContext = () => useContext(ThemeContext);

export const SettingsContext = createContext({});
export const useSettingsContext = () => useContext(SettingsContext);

function App() {
    const continha = 5 + 8;
    const labelBotao = `Teste: ${continha}`;
    const [font, setFont] = useState("Arial");

    return (
        <SettingsContext.Provider
            value={{ cepUrlBase: "https://viacep.com.br" }}
        >
            <ThemeContext.Provider value={{ color: "gray", font, setFont }}>
                <div className="App">
                    <RenderProps />
                    <Fonts />
                    <Titulo />
                    <ViaCEP />
                    <AssentosOnibus />
                    <Voos />
                    <Formulario />
                    {/* {<Lista />
                <Pessoa idade={19} />
                <Pessoa idade={12} />

                <article>
                    <h2>Subtítulo</h2>
                    <p>Olá a todos</p>

                    <MeuBotao label={labelBotao} number={continha} />
                </article>} */}
                </div>
            </ThemeContext.Provider>
        </SettingsContext.Provider>
    );
}

export default App;
