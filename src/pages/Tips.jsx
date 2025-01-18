import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export default function Tips() {
  const [filter, setFilter] = useState("semua");
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    // Fetch data dari file JSON
    fetch("/content-tips/datas-content.json")
      .then((response) => response.json())
      .then((data) => setDatas(data))
      .catch((error) => console.error("Error fetching data:", error));

    window.HSStaticMethods.autoInit();
  }, []);

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="bg-[#050902] h-full">
      <section className="bg-center bg-cover h-[600px] bg-heroImage5">
        <Navbar />

        <header className="container flex items-center justify-center h-full gap-4 text-center">
          <div className="text-white lg:w-[60%] w-full">
            <h1 className="text-5xl font-bold">Tips Pendakian</h1>
            <p className="mt-5 font-light">
              Baca artikel terkait tips dan cara yang baik dan benar untuk
              pendaki tingkat pemula, menengah dan profesional
            </p>
          </div>
        </header>
      </section>

      <section className="container pb-20 -mt-32">
        <div className="flex justify-end ">
          <select
            name="filter"
            id="filter"
            className="p-3 mb-5 text-white rounded-md bg-glass"
            onChange={handleFilter}
          >
            <option value="semua" className="text-black">
              Semua
            </option>
            <option value="pemula" className="text-black">
              Pemula
            </option>
            <option value="menengah" className="text-black">
              Menengah
            </option>
            <option value="profesional" className="text-black">
              Profesional
            </option>
          </select>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
          {datas
            .filter((data) => filter === "semua" || data.level === filter)
            .map((data, index) => (
              <Link
                to={`/tips/${data.id}`}
                className="block p-3 card bg-glass rounded-xl group"
                key={index}
              >
                <div className="w-full h-40 overflow-hidden rounded-md">
                  <img
                    src={data.image}
                    alt=""
                    className="object-cover w-full h-full transition duration-500 group-hover:scale-125"
                  />
                </div>
                <div className="mt-4 text-white">
                  <h2 className="mb-3 text-xl font-semibold">{data.title}</h2>
                  <p className="font-light text-md text-slate-400">
                    {data.description}
                  </p>
                </div>
                <p className="mt-3 font-light text-slate-600 font-sm">
                  {data.date}
                </p>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
