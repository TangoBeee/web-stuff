const Hero = () => {
    return (
        <>
            <main className="hero-section container">
                <div className="hero-content">
                    <h1>YOUR FEET DESERVE THE BEST</h1>

                    <p>
                        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                    </p>

                    <div className="hero-btns">
                        <a href="#" className="shopping-btn">Shop Now</a>
                        
                        <a href="#" className="catergory-btn">Category</a>
                    </div>

                    <div className="affiliates">
                        <p>Also Available On</p>

                    <div className="affiliates-logo">
                        <a target="_blank" href="#">
                            <img src="/images/flipkart.png" alt="flipkart-logo" />
                        </a>
                        
                        <a target="_blank" href="#">
                            <img src="/images/amazon.png" alt="amazon-logo" />
                        </a>
                    </div>
                    </div>
                </div>

                <div className="hero-image">
                    <img src="/images/hero-image.png" alt="hero-image" />
                </div>
            </main>
        </>
    );
};

export default Hero;