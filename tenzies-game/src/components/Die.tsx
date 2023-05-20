type propTypes = {
    key: string;
    value: number;
    isHeld: boolean;
    hold: () => void;
};

const Die = (props: propTypes) => {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white",
    };

    return (
        <div
            className="die-face h-[50px] w-[50px] rounded-lg flex justify-center items-center cursor-pointer"
            style={styles}
            onClick={props.hold}
        >
            <h2 className="text-[1.4rem]">{props.value}</h2>
        </div>
    );
};

export default Die;
