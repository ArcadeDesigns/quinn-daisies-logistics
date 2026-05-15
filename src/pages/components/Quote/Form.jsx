import React, { useState } from "react";

export default function Form() {
  const [pickupMethod, setPickupMethod] = useState("dropoff"); // "pickup" or "dropoff"
  const [destination, setDestination] = useState("door"); // "port" or "door"

  return (
    <section className="FormPosition">
      <div className="FormCtn">
        <div className="FormCtnHeader">
          <h3 className="reveal__left">
            Strategic Freight & Logistics Planning Starts Here
          </h3>
          <p className="reveal__right">
            Provide details about your shipment and our team will develop a
            tailored logistics solution with clear cost projections, operational
            guidance, and strategic delivery planning.
          </p>
        </div>

        {/* --- BOOK SHIPMENT LINK (optional) --- */}
        <div className="BookShipment">
          <div className="BookShipmentHeader">
            <h3>Existing Client Portal Access</h3>
            <p>
              Sign in to your account to manage shipments, submit freight
              requests, monitor logistics activity, and access your operational
              dashboard in real time.
            </p>
          </div>

          <div className="SingleBtnCtn-Right">
            <button className="ApplicationButton" type="button">
              <span>Book a Shipment</span>
              <span className="material-symbols-outlined">arrow_outward</span>
            </button>
          </div>
        </div>

        <div className="FormCtnHeaderSection">
          {/* --- NAME FIELDS --- */}
          <div className="FormSelection">
            <input type="text" placeholder="Company Name *" required />
            <input type="text" placeholder="First Name *" required />
            <input type="text" placeholder="Last Name *" required />
          </div>

          {/* --- SERVICE TYPE DROPDOWN --- */}
          <div className="FormSelection">
            <select required>
              <option value="" disabled selected>
                Service Type *
              </option>
              <option value="freight">Freight</option>
              <option value="cargo">Cargo</option>
              <option value="international">International</option>
              <option value="local">Local</option>
              <option value="express">Express</option>
            </select>
          </div>

          {/* --- COUNTRY & LOCATION --- */}
          <div className="FormSelection">
            <input type="text" placeholder="Country *" required />
            <input type="text" placeholder="State / Region" />
            <input type="text" placeholder="City / Location *" required />
          </div>

          {/* --- PICKUP / DROPOFF RADIO GROUP --- */}
          <div className="FormSection">
            <label className="FormLabel">How will we receive your cargo?</label>
            <div className="FormRadioGroup">
              <label
                className={`FormRadioLabel ${pickupMethod === "pickup" ? "active" : ""}`}
              >
                <input
                  type="radio"
                  name="pickupMethod"
                  value="pickup"
                  checked={pickupMethod === "pickup"}
                  onChange={() => setPickupMethod("pickup")}
                />
                <span className="radio-circle"></span>
                Pick Up from My Location
              </label>
              <label
                className={`FormRadioLabel ${pickupMethod === "dropoff" ? "active" : ""}`}
              >
                <input
                  type="radio"
                  name="pickupMethod"
                  value="dropoff"
                  checked={pickupMethod === "dropoff"}
                  onChange={() => setPickupMethod("dropoff")}
                />
                <span className="radio-circle"></span>I Will Drop Off at Your
                Facility
              </label>
            </div>
          </div>

          {/* --- FINAL DESTINATION RADIO GROUP --- */}
          <div className="FormSection">
            <label className="FormLabel">Final Destination</label>
            <div className="FormRadioGroup">
              <label
                className={`FormRadioLabel ${destination === "port" ? "active" : ""}`}
              >
                <input
                  type="radio"
                  name="destination"
                  value="port"
                  checked={destination === "port"}
                  onChange={() => setDestination("port")}
                />
                <span className="radio-circle"></span>
                Ship to Port Only
              </label>
              <label
                className={`FormRadioLabel ${destination === "door" ? "active" : ""}`}
              >
                <input
                  type="radio"
                  name="destination"
                  value="door"
                  checked={destination === "door"}
                  onChange={() => setDestination("door")}
                />
                <span className="radio-circle"></span>
                Door-to-Door Delivery
              </label>
            </div>
          </div>

          {/* --- DESCRIPTION TEXTAREA --- */}
          <div className="FormSection">
            <label className="FormLabel">Describe Your Shipment</label>
            <textarea
              className="FormTextarea"
              placeholder="Tell us about the cargo, dimensions, weight, special handling, etc."
              rows="4"
            ></textarea>
          </div>

          {/* --- SUBMIT BUTTON --- */}
          <button className="ApplicationButton" type="submit">
            <span>Get My Free Quote</span>
            <span className="material-symbols-outlined">arrow_outward</span>
          </button>
        </div>
      </div>
    </section>
  );
}
