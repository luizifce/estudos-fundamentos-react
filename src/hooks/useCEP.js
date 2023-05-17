import { useEffect, useState } from "react";
import { useSettingsContext } from "../App";

function useCEP(cep) {
    const [endereco, setEndereco] = useState({});
    const {cepUrlBase} = useSettingsContext();
    const fetchCEP = (cep) => {
        fetch(`${cepUrlBase}/ws/${cep}/json/`)
            .then((dados) => dados.json())
            .then((endereco) => setEndereco(endereco));
    };

    useEffect(() => {
        fetchCEP(cep);
    }, [cep]);

    return endereco;
}

export default useCEP;
