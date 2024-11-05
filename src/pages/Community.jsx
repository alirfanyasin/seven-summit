import { Navbar } from "../components/Navbar";
import discordIcon from "../../public/icon-discord.png";
import qrIcon from "../../public/icon-qr.png";
import { useState } from "react";

export default function Community() {
  const [qr, setQr] = useState("hidden");

  const handleQr = () => {
    if (qr === "block") {
      setQr("hidden");
    } else {
      setQr("block");
    }
  };

  return (
    <div className="bg-[#040A16]">
      <section className="h-screen bg-center bg-cover bg-heroImage4">
        <Navbar />

        <div className="container flex items-center justify-between h-screen gap-4">
          <div className="text-white transition-all basis-6/12">
            <h1 className="text-5xl font-bold">Komunitas</h1>
            <p className="mt-5 font-light">
              Ceritakan pengalaman seru Anda selama pendakian! Bagikan <br />
              momen-momen menantang, pemandangan indah yang tak terlupakan.
            </p>
            <div className="flex items-center justify-start mt-5">
              <a
                href=""
                target="_blank"
                className="inline-block px-5 py-3 font-semibold text-white rounded-md bg-glass"
              >
                <div className="flex items-center justify-center">
                  <img src={discordIcon} className="w-6 me-3" alt="" />
                  <span>Gabung Komunitas</span>
                </div>
              </a>

              <button className="inline-block p-3 rounded-md bg-glass ms-2">
                <img
                  src={qrIcon}
                  alt=""
                  className="w-6"
                  onClick={() => handleQr()}
                />
              </button>
            </div>

            <div
              className={`mt-5 overflow-hidden w-36 rounded-xl transition ${qr}`}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW-Q-OuJRKEGLFM0nFq5o9Q596vBQheogFQxHoiRWz2PqJonxLsSDfEoJZ09wszZzSRLk&usqp=CAU"
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex items-center h-[80%] gap-2 basis-4/12 ">
            <div className="h-full overflow-hidden group">
              <div className="space-y-3 animate-loop-scroll group-hover:paused">
                <div className="p-5 text-white bg-glass rounded-xl">
                  <h3 className="mb-3 text-base font-semibold">Irfan Yasin</h3>
                  <p className="text-sm font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque, assumenda. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Cum nam iusto error in sit ipsa voluptates
                    hic quos quod numquam.
                  </p>
                </div>
                <div className="p-5 text-white bg-glass rounded-xl">
                  <h3 className="mb-3 text-base font-semibold">Irfan Yasin</h3>
                  <p className="text-sm font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque, assumenda. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Cum nam iusto error in sit ipsa voluptates
                    hic quos quod numquam.
                  </p>
                </div>
                <div className="p-5 text-white bg-glass rounded-xl">
                  <h3 className="mb-3 text-base font-semibold">Irfan Yasin</h3>
                  <p className="text-sm font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque, assumenda. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Cum nam iusto error in sit ipsa voluptates
                    hic quos quod numquam.
                  </p>
                </div>
                <div className="p-5 text-white bg-glass rounded-xl">
                  <h3 className="mb-3 text-base font-semibold">Irfan Yasin</h3>
                  <p className="text-sm font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque, assumenda. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Cum nam iusto error in sit ipsa voluptates
                    hic quos quod numquam.
                  </p>
                </div>
                <div className="p-5 text-white bg-glass rounded-xl">
                  <h3 className="mb-3 text-base font-semibold">Irfan Yasin</h3>
                  <p className="text-sm font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque, assumenda. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Cum nam iusto error in sit ipsa voluptates
                    hic quos quod numquam.
                  </p>
                </div>
                <div className="p-5 text-white bg-glass rounded-xl">
                  <h3 className="mb-3 text-base font-semibold">Irfan Yasin</h3>
                  <p className="text-sm font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque, assumenda. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Cum nam iusto error in sit ipsa voluptates
                    hic quos quod numquam.
                  </p>
                </div>
              </div>

              <div
                className="mt-3 space-y-3 animate-loop-scroll group-hover:paused"
                aria-hidden="true"
              >
                <div className="p-5 text-white bg-glass rounded-xl">
                  <h3 className="mb-3 text-base font-semibold">Yasin</h3>
                  <p className="text-sm font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque, assumenda. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Cum nam iusto error in sit ipsa voluptates
                    hic quos quod numquam.
                  </p>
                </div>
                <div className="p-5 text-white bg-glass rounded-xl">
                  <h3 className="mb-3 text-base font-semibold">Irfan Yasin</h3>
                  <p className="text-sm font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque, assumenda. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Cum nam iusto error in sit ipsa voluptates
                    hic quos quod numquam.
                  </p>
                </div>
                <div className="p-5 text-white bg-glass rounded-xl">
                  <h3 className="mb-3 text-base font-semibold">Irfan Yasin</h3>
                  <p className="text-sm font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque, assumenda. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Cum nam iusto error in sit ipsa voluptates
                    hic quos quod numquam.
                  </p>
                </div>
                <div className="p-5 text-white bg-glass rounded-xl">
                  <h3 className="mb-3 text-base font-semibold">Irfan Yasin</h3>
                  <p className="text-sm font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque, assumenda. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Cum nam iusto error in sit ipsa voluptates
                    hic quos quod numquam.
                  </p>
                </div>
                <div className="p-5 text-white bg-glass rounded-xl">
                  <h3 className="mb-3 text-base font-semibold">Irfan Yasin</h3>
                  <p className="text-sm font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque, assumenda. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Cum nam iusto error in sit ipsa voluptates
                    hic quos quod numquam.
                  </p>
                </div>
                <div className="p-5 text-white bg-glass rounded-xl">
                  <h3 className="mb-3 text-base font-semibold">Irfan Yasin</h3>
                  <p className="text-sm font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque, assumenda. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Cum nam iusto error in sit ipsa voluptates
                    hic quos quod numquam.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="h-full overflow-hidden">
              <div className="animate-loop-scroll-back">
                <div className="p-5 mb-3 text-white bg-glass rounded-xl">
                  <h3 className="mb-3 text-base font-semibold">Irfan Yasin</h3>
                  <p className="text-sm font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque, assumenda.
                  </p>
                </div>
                <div className="p-5 mb-3 text-white bg-glass rounded-xl">
                  <h3 className="mb-3 text-base font-semibold">Irfan Yasin</h3>
                  <p className="text-sm font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque, assumenda.
                  </p>
                </div>
                <div className="p-5 mb-3 text-white bg-glass rounded-xl">
                  <h3 className="mb-3 text-base font-semibold">Irfan Yasin</h3>
                  <p className="text-sm font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque, assumenda.
                  </p>
                </div>
                <div className="p-5 mb-3 text-white bg-glass rounded-xl">
                  <h3 className="mb-3 text-base font-semibold">Irfan Yasin</h3>
                  <p className="text-sm font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque, assumenda.
                  </p>
                </div>
                <div className="p-5 mb-3 text-white bg-glass rounded-xl">
                  <h3 className="mb-3 text-base font-semibold">Irfan Yasin</h3>
                  <p className="text-sm font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque, assumenda.
                  </p>
                </div>
                <div className="p-5 mb-3 text-white bg-glass rounded-xl">
                  <h3 className="mb-3 text-base font-semibold">Irfan Yasin</h3>
                  <p className="text-sm font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque, assumenda.
                  </p>
                </div>
                <div className="p-5 mb-3 text-white bg-glass rounded-xl">
                  <h3 className="mb-3 text-base font-semibold">Irfan Yasin</h3>
                  <p className="text-sm font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque, assumenda.
                  </p>
                </div>
                <div className="p-5 mb-3 text-white bg-glass rounded-xl">
                  <h3 className="mb-3 text-base font-semibold">Irfan Yasin</h3>
                  <p className="text-sm font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque, assumenda.
                  </p>
                </div>
                <div className="p-5 mb-3 text-white bg-glass rounded-xl">
                  <h3 className="mb-3 text-base font-semibold">Irfan Yasin</h3>
                  <p className="text-sm font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque, assumenda.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
