import { useEffect, useState } from "react";

function useCEP(cep) {
    const [endereco, setEndereco] = useState({});
    const fetchCEP = (cep) => {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((dados) => dados.json())
            .then((endereco) => setEndereco(endereco));
    };

    useEffect(() => {
        fetchCEP(cep);
    }, [cep]);

    return endereco;
}

export default useCEP;