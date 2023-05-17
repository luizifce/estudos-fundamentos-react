import { ThemeContext } from "./App";

const Fonts = () => {
    return (
        <ThemeContext.Consumer>
            {(value) => (
                <div>
                    <button
                        type="button"
                        onClick={() => value.setFont("Arial")}
                    >
                        Arial
                    </button>
                    <button
                        type="button"
                        onClick={() => value.setFont("Tahoma")}
                    >
                        Tahoma
                    </button>
                    <button
                        type="button"
                        onClick={() => value.setFont("Verdana")}
                    >
                        Verdana
                    </button>
                </div>
            )}
        </ThemeContext.Consumer>
    );
};

export default Fonts;
