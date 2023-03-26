import "./MainContent.css";

const MainContent = () => {
    return (
        <main>
            <h1 className="main--title">Fun Facts About React!</h1>
            <ul className="main--facts">
                <li>React is a JS library for building user interfaces.</li>
                <li>It was created by Facebook and released in 2013.</li>
                <li>Has well over 100k stars on github.</li>
                <li>It is maintained by Facebook.</li>
                <li>
                    React uses a virtual DOM to efficiently update the UI, which
                    helps to reduce performance issues.
                </li>
                <li>
                    React is widely used by companies and organizations of all
                    sizes, including Facebook, Netflix, and Airbnb.
                </li>
                <li>
                    React is open-source and has a large community of developers
                    contributing to it.
                </li>
                <li>
                    React has a declarative programming style, which makes it
                    easier to reason about and maintain code.
                </li>
            </ul>
        </main>
    );
};

export default MainContent;
