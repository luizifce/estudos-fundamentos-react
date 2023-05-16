const voosDisponiveis = [
    {
        id: "123",
        title: "Volta ter. 19 de julho",
        details: [
            {
                id: "132",
                title: "Espaço para as pernas dentro da média (76cm)",
            },
            {
                id: "142",
                title: "Saída USB no assento",
            },
            {
                id: "152",
                title: "Vídeo sobre demanda",
            },
            {
                id: "162",
                title: "Emissão de carbono estimada de 83kg",
            },
        ],
    },
    {
        id: "151",
        title: "13:00 - 15:00",
        details: [
            {
                id: "132",
                title: "Espaço para as pernas dentro da média (100cm)",
            },
            {
                id: "142",
                title: "Saída USB no assento",
            },
            {
                id: "152",
                title: "Vídeo sobre demanda",
            },
            {
                id: "162",
                title: "Emissão de carbono estimada de 193kg",
            },
        ],
    },
];

function ItemVooDetails({ details }) {
    return (
        <ul>
            {details.map((detail) => (
                <li key={detail.id}> {detail.title} </li>
            ))}
        </ul>
    );
}

function ItemVoo({id, title, children}) {
    return (
        <div className="voo">
            <header>
                <h3>{title} </h3>
            </header>
            <div className="voo-details">
                {children}
            </div>
        </div>
    );
}

function Voos() {
    return (
        <div className="voos">
            {voosDisponiveis.map((voo) => {
                return (
                    <ItemVoo
                        key={voo.id}
                        title={voo.title}
                    >
                        <ItemVooDetails details={voo.details} />
                    </ItemVoo>
                );
            })}
        </div>
    );
}

export default Voos;
