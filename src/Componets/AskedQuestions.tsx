import { useState } from "react";

const AskedQuestions = () => {
    const [pop, settpop] = useState(false);
    return (
        <div className="lg:mx-40 mt-40">
            <h1 className="font-bold lg:text-4xl ">Frequently Asked Questions</h1>

            <div
                onClick={() => settpop(!pop)}
                className="bg-[#132144] cursor-pointer hover:bg-[#0d276b] p-6 mt-5 flex font-bold justify-between items-center"
            >
                <h2>What is Netflix?</h2>
                <div>
                    <button onClick={() => settpop(!pop)} className="text-xl">
                        {pop ? "X" : <h1 className="text-4xl">+</h1>}
                    </button>
                </div>
            </div>

            {pop && (
                <p className="bg-[#132144] text-xl mt-1  font-semibold">
                    Netflix is a streaming service that offers a wide variety of
                    award-winning TV shows, movies, anime, documentaries and more – on
                    thousands of internet-connected devices.<br></br>
                    You can watch as much as you want, whenever you want, without a single
                    ad – all for one low monthly price. There's always something new to
                    discover, and new TV shows and movies are added every week!
                </p>
            )}

            <div className="bg-[#132144] hover:bg-[#0d276b] p-6 mt-2 flex font-bold justify-between items-center">
                <h2>How much does Netflix Cost?</h2>
                <div>
                    <button className="text-xl">
                        {pop ? "X" : <h1 className="text-4xl">+</h1>}
                    </button>
                </div>
            </div>

            <div className="bg-[#132144] hover:bg-[#0d276b] p-6 mt-2 flex font-bold justify-between items-center">
                <h2>Where can I wacth?</h2>
                <div>
                    <button className="text-xl">
                        {pop ? "X" : <h1 className="text-4xl">+</h1>}
                    </button>
                </div>
            </div>

            <div className="bg-[#132144] hover:bg-[#0d276b] p-6 mt-2 flex font-bold justify-between items-center">
                <h2>How do I cancel?</h2>
                <div>
                    <button className="text-xl">
                        {pop ? "X" : <h1 className="text-4xl">+</h1>}
                    </button>
                </div>
            </div>

            <div className="bg-[#132144] hover:bg-[#0d276b] p-6 mt-2 flex font-bold justify-between items-center">
                <h2>Is Netflix good for kids?</h2>
                <div>
                    <button className="text-xl">
                        {pop ? "X" : <h1 className="text-4xl">+</h1>}
                    </button>
                </div>
            </div>

            <div className="bg-[#132144] hover:bg-[#0d276b] p-6 mt-2 flex font-bold justify-between items-center">
                <h2>Is Netflix good for kids?</h2>
                <div>
                    <button className="text-xl">
                        {pop ? "X" : <h1 className="text-4xl">+</h1>}
                    </button>
                </div>
            </div>

            <h1 className="text-sm font-bold mt-4 underline decoration-sky-500">
                Ready to watch? Enter your email to create or restart your membership.
            </h1>
            <div className="space-x-2 space-y-5">
                <input placeholder="Email address"
                    autoComplete="on"
                    className="border-[#2bb871] border lg:w-96 w-80 bg-[#132144] text-start py-3 required  rounded-md "
                    type="search"
                />
                <button className="bg-[#E50914] hover:bg-[#6b2b2b] px-10 py-3 rounded-md font-bold">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default AskedQuestions;
