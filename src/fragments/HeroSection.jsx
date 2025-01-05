import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { NotFoundCity } from "../components/NotFoundCity";

import iconMountain from "../../public/icon-mountain.png";
import iconWeather from "../../public/icon-weather.png";
import iconSearch from "../../public/icon-search.png";
import clearIcon from "../../public/weather/clear.png";
import cloudIcon from "../../public/weather/cloud.png";
import mistIcon from "../../public/weather/mist.png";
import rainIcon from "../../public/weather/rain.png";
import snowIcon from "../../public/weather/snow.png";
import humidityIcon from "../../public/icon-humidity.png";
import windIcon from "../../public/icon-wind.png";

import axios from "axios";

export default function HeroSection() {
  const [mapMountain, setMapMountain] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15799.755934582523!2d112.91210776475985!3d-8.107695677435354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd63e89e1d817bb%3A0x9c14d4ed3c488f54!2sGn.%20Semeru!5e0!3m2!1sid!2sid!4v1730097301986!5m2!1sid!2sid"
  );
  const [cityName, setCityName] = useState("");
  const [dataWeather, setDataWeather] = useState(null);
  const [imageWeather, setImageWeather] = useState("");
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");

  const handleInputCityName = (event) => {
    setCityName(event.target.value);
  };
  const handleInputMountain = (event) => {
    setMapMountain(event.target.value);
  };

  useEffect(() => {
    if (dataWeather && dataWeather.data && dataWeather.data.weather) {
      const weatherMain = dataWeather.data.weather[0].main;

      // console.log(dataWeather.data);

      const tempInCelsius = (dataWeather.data.main.temp - 273.15).toFixed(1);
      setTemperature(parseInt(tempInCelsius));
      setDescription(dataWeather.data.weather[0].description);
      setHumidity(dataWeather.data.main.humidity);
      setWind(dataWeather.data.wind.speed);
      // setImageWeather(
      //   " https://openweathermap.org/img/wn/" + weatherMain + ".png"
      // );

      switch (weatherMain) {
        case "Clear":
          setImageWeather(clearIcon);
          setDescription("Cerah");
          break;
        case "Clouds":
          setImageWeather(cloudIcon);
          setDescription("Berawan");
          break;
        case "Rain":
          setImageWeather(rainIcon);
          setDescription("Hujan");
          break;
        case "Snow":
          setImageWeather(snowIcon);
          setDescription("Dingin");
          break;
        case "Mist":
          setImageWeather(mistIcon);
          setDescription("Berkabut");
          break;
        case "Haze":
          setImageWeather(mistIcon);
          setDescription("Kabut-kabut");
          break;
        default:
          setImageWeather("");
          break;
      }

      console.log(weatherMain);
    }
  }, [dataWeather]);

  const handleSearchCity = () => {
    const APIKey = "27d0745ee683a27f1b198bfd7d7c0683";
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`
      )
      .then((response) => {
        setDataWeather(response);
      })
      .catch((err) => {
        setCityName("error");
        console.log("Tidak ada nama kota");
      });
  };

  return (
    <section
      className={`h-screen bg-center bg-cover bg-heroImage ${
        dataWeather != null ? "md:mb-[350px]  mb-[1100px]" : "mb-0"
      }`}
    >
      <Navbar />
      <div className="container flex items-center justify-center h-screen ">
        <div className="mt-32 text-center text-white">
          <h1 className="text-4xl font-bold lg:text-7xl md:text-5xl">
            Katalog Seven Summit <br /> di Jawa Timur
          </h1>
          <p className="mt-10 text-sm font-light lg:text-2xl md:text-xl">
            Nikmati pengalaman mendaki tujuh puncak tertinggi di Jawa Timur{" "}
            <br />
            dengan informasi lengkap dan akurat dari kami!
          </p>

          <div className="max-w-[60em] mt-32 mx-auto">
            <div
              className="grid grid-cols-5 gap-2 p-5 md:gap-4 bg-glass rounded-xl"
              id="main-searching"
            >
              <div className="flex items-center justify-center col-span-2 gap-2 md:gap-4">
                <img
                  src={iconMountain}
                  alt=""
                  className="w-6 md:w-10 lg:w-20"
                />
                <select
                  name=""
                  id=""
                  className="w-full h-5 text-sm text-white bg-transparent md:h-10 md:text-xl"
                  onChange={handleInputMountain}
                >
                  <option
                    value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15799.755934582523!2d112.91210776475985!3d-8.107695677435354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd63e89e1d817bb%3A0x9c14d4ed3c488f54!2sGn.%20Semeru!5e0!3m2!1sid!2sid!4v1730097301986!5m2!1sid!2sid"
                    className="text-black"
                  >
                    Gunung Semeru
                  </option>
                  <option
                    value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15814.43798331262!2d112.57914426468466!3d-7.72497846364384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7878f152cf4193%3A0xeb267981e389631a!2sGn.%20Arjuno!5e0!3m2!1sid!2sid!4v1730097483579!5m2!1sid!2sid"
                    className="text-black"
                  >
                    Gunung Arjuno
                  </option>

                  <option
                    value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15799.043473174486!2d114.03553356476345!3d-8.125811778112247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6b42773c84e2f%3A0x3a10116dfddf0e75!2sGn.%20Raung!5e0!3m2!1sid!2sid!4v1730097804753!5m2!1sid!2sid"
                    className="text-black"
                  >
                    Gunung Raung
                  </option>
                  <option
                    value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15807.173288326647!2d112.43970026472202!3d-7.916645470429352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7886139df6420d%3A0x7c0b132170d2d00a!2sGn.%20Welirang!5e0!3m2!1sid!2sid!4v1730097836338!5m2!1sid!2sid"
                    className="text-black"
                  >
                    Gunung Welirang
                  </option>

                  <option
                    value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15818.065591019778!2d111.18386686466589!3d-7.627478460285503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e798c8138540ea3%3A0x78393c7070cc3f2b!2sGn.%20Lawu!5e0!3m2!1sid!2sid!4v1730097870404!5m2!1sid!2sid"
                    className="text-black"
                  >
                    Gunung Lawu
                  </option>

                  <option
                    value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15805.345571752552!2d113.55636686473134!3d-7.964145072148613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6f00ac4296cf1%3A0xa369a084dd569ec!2sGn.%20Argapura!5e0!3m2!1sid!2sid!4v1730097896997!5m2!1sid!2sid"
                    className="text-black"
                  >
                    Gunung Argopuro
                  </option>

                  <option
                    value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15807.045547178828!2d112.43966646472266!3d-7.919974470549364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78861262728a81%3A0xe6b4902a08057403!2sGn.%20Butak!5e0!3m2!1sid!2sid!4v1730097919899!5m2!1sid!2sid"
                    className="text-black"
                  >
                    Gunung Butak
                  </option>
                </select>
              </div>

              <div className="flex items-center justify-center col-span-2 gap-2 md:gap-4">
                <img src={iconWeather} alt="" className="w-6 md:w-10 lg:w-20" />
                <input
                  type="text"
                  className="w-full h-5 text-sm text-white bg-transparent md:h-10 md:text-xl"
                  placeholder="Nama kota"
                  onChange={handleInputCityName}
                />
              </div>

              <button
                className="flex items-center justify-center w-full col-span-1 gap-4 p-2 bg-white rounded-lg md:p-0"
                onClick={handleSearchCity}
              >
                <img src={iconSearch} alt="" className="w-5 md:w-5 lg:w-10" />
                <span className="hidden font-bold text-black md:block">
                  Cari
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Not Found City Start */}
      {cityName === "error" && <NotFoundCity />}
      {/* Not Found City End */}

      {/* Weather and Mountain Start */}
      <div
        className={`container relative md:-mt-14  ${
          dataWeather == null || cityName === "error" ? "hidden" : "block"
        } `}
      >
        <div className="items-center justify-between gap-5 md:flex">
          <div className="mb-5 md:basis-8/12 basis-full md:mb-0">
            <div className="w-full p-5 overflow-hidden rounded-xl bg-glass">
              <iframe
                src={mapMountain}
                width="100%"
                height="460"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="md:basis-4/12 basis-full">
            <div className="w-full p-5 bg-glass rounded-xl">
              <img
                src={imageWeather}
                alt="Weather Icon"
                className="w-[70%] mb-7 mx-auto mt-10"
              />
              <h2 className="mb-4 text-5xl font-bold text-center text-white">
                {temperature} <sup className="text-4xl">°C</sup>
              </h2>
              <h3 className="text-xl font-semibold text-center text-white capitalize">
                {description}
              </h3>

              <div className="flex items-center justify-between gap-4 mt-12">
                <div className="flex items-center gap-2 text-white basis-6/12">
                  <img
                    src={humidityIcon}
                    alt="icon humidity"
                    className="block w-20 basis-4/12"
                  />
                  <div className="basis-8/12">
                    <h4 className="font-semibold text-md">{humidity} %</h4>
                    <p className="text-xs font-light">Kelembapan</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-white basis-6/12">
                  <img
                    src={windIcon}
                    alt="icon wind"
                    className="block w-full basis-4/12"
                  />
                  <div className="basis-8/12">
                    <h4 className="font-semibold text-md">{wind} Km/h</h4>
                    <p className="text-xs font-light">Kecepatan Angin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Weather and Mountain End */}
    </section>
  );
}
