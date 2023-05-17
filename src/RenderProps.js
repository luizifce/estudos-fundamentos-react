const Consumer = ({ children }) => {
    const style = { color: "red" };

    return <div className="consumer">{children(style)}</div>;
};

const RenderProps = () => {
    return (
        <Consumer>
            {(style) => <span style={{ color: style.color }}>Olá galera!</span>}
        </Consumer>
    );
};

export default RenderProps;
