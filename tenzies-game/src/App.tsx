import "./App.css";
import { useEffect, useState } from "react";
import Die from "./components/Die";

import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
    const [dice, setDice] = useState(allNewDice());
    const [tenzies, setTenzies] = useState(false);

    useEffect(() => {
        const allSame = dice.every((die) => die.value === dice[0].value);
        const allHeld = dice.every((die) => die.isHeld);
        if (!allSame && !allHeld) return;
        setTenzies(true);
    }, [dice]);

    function generateNewDie() {
        const randomNo = Math.floor(Math.random() * 6) + 1;
        return {
            id: nanoid(),
            value: randomNo,
            isHeld: false,
        };
    }

    function allNewDice() {
        const newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie());
        }
        return newDice;
    }

    function rollDice() {
        if (!tenzies) {
            setDice((oldDice) =>
                oldDice.map((die) => {
                    return die.isHeld ? die : generateNewDie();
                })
            );
        } else {
            setTenzies(false);
            setDice(allNewDice());
        }
    }

    function holdDice(id: string) {
        setDice((oldDice) =>
            oldDice.map((die) => {
                return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
            })
        );
    }

    const diceElements = dice.map((die) => (
        <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            hold={() => holdDice(die.id)}
        />
    ));

    return (
        <main className="container mx-auto p-[20px] flex flex-col items-center justify-around">
            {tenzies && <Confetti />}
            <h1 className="text-[40px] m-0">Tenzies</h1>
            <div className="max-w-[400px]">
                <p className="font-[400] mt-0 text-center">
                    Roll until all dice are same. Click each die to freeze it's
                    current value between rolls
                </p>
            </div>
            <div className="grid grid-rows-2 grid-cols-5 gap-[20px]">
                {diceElements}
            </div>
            <button
                className="h-[50px] w-[150px] border-none active:opacity-[0.8] rounded-md bg-black text-white text-[1.3rem] focus:outline-none cursor-pointer"
                onClick={rollDice}
            >
                {!tenzies ? "Roll" : "New Game"}
            </button>
        </main>
    );
}

export default App;
