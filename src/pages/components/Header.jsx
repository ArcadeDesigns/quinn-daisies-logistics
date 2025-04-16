export default function Header({
    title,
    subtitle,
    description,
    buttonText,
    buttonLink,
    backgroundImages = [],
}) {
    return (
        <div className="OpportunityAppCtn">
            <div className="OpportunityAppHeader">
                <div className="ContentCtn-Center">
                    {subtitle && <span className="ContentCtn-Center-Span">{subtitle}</span>}
                    {title && <h1>{title}</h1>}
                    {description && <p>{description}</p>}
                </div>

                {buttonText && buttonLink && (
                    <div className="SingleBtnCtn-Center">
                        <a href={buttonLink}>
                            {buttonText}
                            <img
                                src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729712988/Quinn%20Daisies%20Logistics/Near_Me_htd7ob.png"
                                alt="Request Quote"
                            />
                        </a>
                    </div>
                )}
            </div>

            {backgroundImages.length > 0 && (
                <div className="BackgroundImage">
                    {backgroundImages.map((img, index) => (
                        <img key={index} src={img} alt={`Background ${index + 1}`} />
                    ))}
                </div>
            )}
        </div>
    );
}
