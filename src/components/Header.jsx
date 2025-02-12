import banner from "../images/banner.png"

const Header = () => {

    return(
        <div
            className="hero h-[600px] border-t border-b -mt-4"
            style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl text-white font-bold">Hello Banana Fam</h1>
                        <p className="mb-5 text-white text-2xl font-thin">
                            Whether you're peeling or standing - with us you'll slide straight into the next big event!
                        </p>
                        <input
                            type="text"
                            placeholder="Search for events"
                            className="input input-bordered input-lg input-warning w-full max-w-xs mt-2" />
                    </div>
            </div>
        </div>
    )
};

export default Header;