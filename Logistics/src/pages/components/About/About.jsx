export default function AboutFunction() {
    return (
        <div className="home-about">
            <div className="home-about-grid">
                <div className="home-about-grid-item">
                    <h2>
                        About <br /> us
                    </h2>
                </div>

                <img
                    className="home-about-grid-item-image"
                    src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729542805/Quinn%20Daisies%20Logistics/logistics-means-transport-together-with-technological-futuristic-holograms_2_lb4ten.jpg"
                    alt="About Us"
                />
                <img
                    className="home-about-grid-item-image"
                    src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729542859/Quinn%20Daisies%20Logistics/technological-futuristic-holograms-logistics-means-transport_itrxu8.jpg"
                    alt="About Us"
                />
            </div>

            <div className="home-about-content">
                <h2>
                    Logistics solutions tailored to meet the unique demands of
                    businesses and individuals alike.
                </h2>
                <p>
                    With a strong focus on reliability, efficiency, and personalized
                    service, we handle every aspect of your logistics journey—from
                    consultation to final delivery. We leverage advanced technology and
                    innovative practices to offer our clients end-to-end logistics
                    support that is seamless and stress-free.
                </p>

                <div className="SingleBtnCtn-Center-Dark-BG">
                    <a href="/about-quinn-daisies-logistics">
                        Learn More About Us
                        <img
                            src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1744500374/Quinn%20Daisies%20Logistics/Near_Me_1_femtwp.png"
                            alt="Quinn Daisies Images"
                        />
                    </a>
                </div>

            </div>
        </div>
    )
}