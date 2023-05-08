import { useEffect, useState } from "react";

type Meme = {
    url: string;
};

const Body = () => {
    const API_URL = "https://api.imgflip.com/get_memes";

    // to specify that the memes is genric and contains an array of object
    const [memes, setMemes] = useState<Meme[]>([]);

    const [meme, setMeme] = useState({
        topText: "when the most popular meme",
        bottomText: "is one you've never heard before",
        randomImage: "https://i.imgflip.com/3pdf2w.png",
    });

    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((memesData) => setMemes(memesData.data.memes))
            .catch((err) => console.log(`Something went wrong: ${err}`));
    }, []);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    const getMeme = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        // this random no serves as the index of which meme to show.
        const index = Math.floor(Math.random() * memes.length);
        const url = memes[index].url;
        // to not lose the user intered top and bottom text
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: url,
        }));
    };

    return (
        <main className="px-[10rem] py-[40px]">
            <form
                className="grid grid-cols-2 grid-rows-[40px] gap-[17px]"
                onSubmit={getMeme}
            >
                <input
                    type="text"
                    className=" rounded-md p-[15px] border border-solid border-[#D5D4D8]"
                    placeholder="Top text - optional"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    className=" rounded-md p-[15px] border border-solid border-[#D5D4D8]"
                    placeholder="Bottom text - optional"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className="col-span-2 rounded-xl bg-gradient via-pink-600 to-purple-800 text-white border-none cursor-pointer py-[20px] font-normal text-[1.3rem]"
                >
                    Get a new meme🤣
                </button>
            </form>
            <div className="meme relative">
                {meme.randomImage !== "" ? (
                    <img
                        src={meme.randomImage}
                        alt="Meme"
                        className="max-w-[100%] mt-[10px] mx-auto block rounded-sm"
                    />
                ) : null}
                <h2 className="meme--text top top-0">{meme.topText}</h2>
                <h2 className="meme--text bottom bottom-0">{meme.bottomText}</h2>
            </div>
        </main>
    );
};

export default Body;
