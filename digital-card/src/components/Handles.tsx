import "./Handles.css";

const Handles = () => {
    return (
        <div className="container">
            <div className="social-handles">
                <div className="github">
                    <a href="https://github.com/shricodev" target={"_blank"}>
                        <i className="fa-brands fa-github fa-2xl"></i>
                    </a>
                </div>
                <div className="hashnode">
                    <a href="https://shricodev.hashnode.dev" target={"_blank"}>
                        <i className="fa-brands fa-hashnode fa-2xl"></i>
                    </a>
                </div>
                <div className="twitter">
                    <a href="https://twitter.com/shricodev" target={"_blank"}>
                        <i className="fa-brands fa-twitter fa-2xl"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Handles;
