import React, { useState, useEffect } from "react";

export default function Form() {
    const VITE_BACKEND_ZONES = 'https://quinndaisies.com/api/zones';
    const VITE_BACKEND_COUNTRIES = 'https://quinndaisies.com/api/countries';
    const VITE_BACKEND_CALCULATE_PRICE = 'https://quinndaisies.com/api/calculate-price';

    const [countries, setCountries] = useState([]);
    const [weights, setWeights] = useState({});
    const [zones, setZones] = useState([]);
    const [selectedZone, setSelectedZone] = useState(null);

    const [selectedWeight, setSelectedWeight] = useState("");
    const [numPackages, setNumPackages] = useState(1);
    const [totalPrice, setTotalPrice] = useState(null);

    const calculateTotalPrice = async (zone, weight, packages) => {
        try {
            const res = await fetch(`${VITE_BACKEND_CALCULATE_PRICE}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    zone_id: zone,
                    weight: weight,
                    num_packages: packages,
                }),
            });

            if (!res.ok) {
                throw new Error("Failed to calculate price");
            }

            const data = await res.json();
            setTotalPrice(data.total_price);
        } catch (error) {
            console.error("Error calculating price:", error);
            setTotalPrice(null);
        }
    };

    useEffect(() => {
        if (selectedZone && selectedWeight && numPackages > 0) {
            calculateTotalPrice(selectedZone, selectedWeight, numPackages);
        }
    }, [selectedZone, selectedWeight, numPackages]);

    useEffect(() => {
        fetch(`${VITE_BACKEND_ZONES}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                if (data.zones && data.zones.length > 0) {
                    setZones(data.zones);
                } else {
                    console.warn("No zones found.");
                    setZones([]);
                }
            })
            .catch((err) =>
                console.error("Error fetching zones:", err)
            );
    }, [VITE_BACKEND_ZONES]);

    const RetrieveCountries = (zone_id) => {
        fetch(`${VITE_BACKEND_COUNTRIES}/${encodeURIComponent(zone_id)}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                if (data.countries && data.weights) {
                    setCountries(data.countries);
                    setWeights(data.weights);
                } else {
                    setCountries([]);
                    setWeights({});
                }
            })
            .catch((err) => console.error("Error fetching countries and weights:", err));
        setSelectedZone(zone_id);
    };

    return (
        <div className="FormPosition">
            <img
                className="FormImage"
                src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1744284251/Quinn%20Daisies%20Logistics/24999442_7024293_yno4ot.jpg"
                alt="Quinn Daisies Logistics"
            />
            <div className="FormCtn">
                <div className="FormCtnControl">
                    <div className="FormComponentInformation">
                        <h2>Request Your Customized Shipping Quote</h2>
                        <p>Please select a zone to view the available countries and logistics details.</p>
                    </div>

                    <div className="FormZones">
                        {zones.map((zone, index) => (
                            <p
                                onClick={() => RetrieveCountries(zone.zone_id)}
                                key={index}
                            >
                                {zone.zone_id}
                            </p>
                        ))}
                    </div>

                    <div className="FormSelection">
                        <select name="Country">
                            {countries.map((country, index) => (
                                <option key={index} value={country}>{country}</option>
                            ))}
                        </select>

                        <select name="Weight" onChange={(e) => setSelectedWeight(e.target.value)}>
                            {Object.keys(weights).map((weightKey, index) => (
                                <option key={index} value={weightKey}>
                                    {weightKey} - {weights[weightKey]} NGN
                                </option>
                            ))}
                        </select>

                        <input
                            type="number"
                            placeholder="Number of Packages"
                            value={numPackages}
                            onChange={(e) => setNumPackages(Number(e.target.value))}
                        />
                    </div>

                    {selectedZone && (
                        <div className="FormBookingDescription">
                            <h2>You are making a shipment for {selectedZone}</h2>
                            <p>Your shipment is to the selected zone.</p>
                            {totalPrice !== null && (
                                <p>Total Price: {totalPrice.toLocaleString()} NGN</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
}
