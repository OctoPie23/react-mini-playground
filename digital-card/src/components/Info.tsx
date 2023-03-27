import "./Info.css";

const Info = () => {
    return (
        <div>
            <div className="image"></div>
            <div className="rectangle">
                <div className="info">
                    <h3 className="name">Shrijal Acharya</h3>
                    <h4 className="job-title">Aspiring Software Engineer</h4>
                    <h5 className="website">
                        <a href="https://shricodev.github.io" target={"_blank"}>
                            shricodev.github.io
                        </a>
                    </h5>
                    <div className="linkedin-email">
                        <button className="email">
                            <i className="fa-sharp fa-solid fa-envelope fa-lg"></i>
                            <a
                                href="mailto:shrijal.acharya@gmail.com"
                                target={"_blank"}
                            >
                                Gmail
                            </a>
                        </button>
                        <button className="linkedin">
                            <i className="fa-brands fa-linkedin-in fa-lg"></i>
                            <a
                                href="https://linkedin.com/in/shrijal007"
                                target={"_blank"}
                            >
                                LinkedIn
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;
