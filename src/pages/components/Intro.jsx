export default function Intro({ title, description, backgroundImage }) {
    return (
        <div className="AboutHeaderCtn">
            {backgroundImage && <img className="BackgroundImagePosition" src={backgroundImage} alt="Quinn Daisies Logistics Image" />}
            <div className="AboutHeader">
                {title && <h1>{title}</h1>}
                {description && <p>{description}</p>}
            </div>
        </div>
    );
}
