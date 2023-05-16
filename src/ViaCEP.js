import React from "react";
import useCEP from "./hooks/useCEP";

function ViaCEP() {
    const endereco = useCEP("60751110")

    return (
        <table>
            <tr>
                <td>Bairro:</td>
                <td>{endereco.bairro} </td>
            </tr>
            <tr>
                <td>Complemento:</td>
                <td>{endereco.complemento}</td>
            </tr>
            <tr>
                <td>UF:</td>
                <td>{endereco.uf}</td>
            </tr>
            <tr>
                <td>Localidade:</td>
                <td>{endereco.localidade}</td>
            </tr>
        </table>
    );
}

export default ViaCEP;
