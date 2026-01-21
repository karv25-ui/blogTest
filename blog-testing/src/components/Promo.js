function Promo(prop) {
    const promo = {
        padding: "20px",
        border: "1px solid gray",
    }
    const data = {
        heading: "Don't miss this deal!",
        subheading: "Subscribe to my newsletter and get all the shop items at 50% off!",
    }
    return (
        
        <div className="promo-section" style={promo}>
            <div>
                <h1>{data.heading}</h1>
            </div>
            <div>
                <h2>{data.subheading}</h2>
            </div>
        </div>
    );
};

export default Promo;