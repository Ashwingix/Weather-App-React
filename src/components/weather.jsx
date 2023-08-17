import { useState } from "react";
import "../styles/weather.css";
import axios from "axios";
const Key = "72127e4fc0764c84e0e193e80dd28b51";

const Weather = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}`);
    //   console.log(response);
      setData(response.data);
    } catch (error) {
      alert(" Error");
    }
  };

  return (
    <div className="w">
      <div className="w1">
        <img
          src="https://images.pexels.com/photos/2816625/pexels-photo-2816625.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          height={650}
          width={600}
          alt=""
        />
      </div>
      <div className="w2">
        <div className="">
          <h1>Weather Forecast</h1>
          <input
            type="text"
            placeholder="Search City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <br></br>
          <button onClick={fetchData}>Search</button>
          <hr></hr>
          {data && (
            <div className="cont">
              <div className="name">{data.name} </div>

              <div className="winfo">
                {Math.round(data.main.temp)} <span>&deg; F</span>
              </div>
              <div className="lati">
                latitude- {data.coord.lat}
                <br></br>
                longtitude- {data.coord.lon}
              </div>
            </div> 
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;



