import { useRef, useState } from "react";

// Inputs controlados usam o hook useState para capturar seu valor em tempo real.
// Inputs não controlados usam o hook useRef para capturar seu valor após o submit.

const Formulario = () => {
    const [fieldValue, setFieldValue] = useState({
        nome: "Luiz",
    });
    const fieldCidade = useRef(null);

    const handleChange = (e) => {
        setFieldValue({ ...fieldValue, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fieldCidade.current.value);
    };

    return (
        <div>
            <form action="https://descomplica.com.br/" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nome"
                    value={fieldValue.nome}
                    onChange={handleChange}
                />
                
                <input
                    type="text"
                    name="cidade"
                    value={fieldValue.cidade}
                    ref = {fieldCidade}
                />
                <button type="submit"> Enviar </button>
            </form>
        </div>
    );
};

export default Formulario;
