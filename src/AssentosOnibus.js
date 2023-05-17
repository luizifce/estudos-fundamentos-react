import React, { useEffect, useState } from "react";
import { ThemeContext } from "./App";

const Assento = (props) => {
    // Primeiro valor: variável que será alterada, Segundo valor: Função que irá alterar
    const [disabled, setDisabled] = useState(false);

    const handleClick = () => setDisabled(true);

    // Array vazio -> Quando component nasce.
    /*    
    useEffect(() => {
        console.log("Nasceu");
    }, []);
    */

    // Chamado quando component mudar o valor de disabled
    useEffect(() => {
        if (disabled) console.log(`Disabled alterou para ${disabled}`);
    }, [disabled]);

    return (
        // Sintaxe de consumer, que pode ser trocada pelo hook useContext para uma sintaxe mais enxuta
        <ThemeContext.Consumer>
            {(value) => (
                <button
                    className="assento"
                    type="button"
                    disabled={disabled}
                    onClick={() => handleClick()}
                >
                    {disabled ? "X" : <span style={{color: value.color, fontFamily: value.font}}>{props.pos}</span>}
                </button>
            )}
        </ThemeContext.Consumer>
    );
};

const Fileira = (props) => {
    return (
        <div className="fileira">
            {[0, 1, 2, 3].map((pos, idx) => {
                return <Assento key={idx} pos={props.de + pos} />;
            })}
        </div>
    );
};

const AssentosOnibus = () => {
    return (
        <div className="container">
            {[1, 5, 9, 13, 17].map((pos, idx) => {
                return <Fileira key={idx} de={pos} />;
            })}{" "}
        </div>
    );
};

export default AssentosOnibus;
