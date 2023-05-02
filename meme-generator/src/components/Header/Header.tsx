import trollFace from "../../assets/troll-face.png";

const Header = () => {
    return (
        <header className="bg-green-300 flex items-center h-[65px] text-white bg-gradient p-[45px]">
            <img
                src={trollFace}
                alt="Troll Face"
                className="w-[50px] mr-[6px]"
            />
            <div className="items-center text-[35px] mr-auto">
                <h2>Meme Generator</h2>
            </div>
            <h4 className="text-[18px] font-[500]">React Course - Project 3</h4>
        </header>
    );
};

export default Header;
