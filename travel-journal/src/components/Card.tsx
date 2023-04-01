interface Card {
    id: string;
    title: string;
    location: string;
    googleMapsUrl: string;
    startDate: string;
    endDate: string;
    description: string;
    imageUrl: string;
}

const Card = ({
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
}: Card) => {
    return (
        <div className="container mx-auto mb-10 min-w-[500px] justify-center rounded-3xl border-2 border-y-2 drop-shadow-lg">
            <div className="card overflow-hidden rounded-lg p-3 pb-5">
                <div className="flex">
                    <img
                        className="mx-auto h-full max-w-full rounded-3xl pt-2 sm:w-[65px] md:w-48 lg:w-64"
                        src={imageUrl}
                        alt={title}
                    />
                    <div className="card-details p-3">
                        <p className="px-2 tracking-[.3em]">
                            <i className="fa-solid fa-location-dot mt-1"></i>
                            {location}
                            <span className="pl-4 tracking-normal">
                                <a
                                    href={googleMapsUrl}
                                    className="whitespace-no-wrap text-sm text-gray-500"
                                >
                                    View on Google Maps
                                </a>
                            </span>
                        </p>
                        <h1 className="p-2 text-3xl font-extrabold">{title}</h1>
                        <div className="time description">
                            <h2 className="mb-2 p-2 text-sm font-semibold">
                                {startDate} - {endDate}
                            </h2>
                            <p className="text-gray w-full overflow-x-auto">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
