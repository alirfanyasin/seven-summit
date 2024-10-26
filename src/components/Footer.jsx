export default function Footer() {
  return (
    <footer className="bg-footerImage bg-cover bg-top bg-no-repeat min-h-screen mt-[200px]">
      <div className="flex justify-center items-center text-white h-screen">
        <div className="text-center w-full">
          <h1 className="text-6xl mb-5 font-bold">Subscribe</h1>
          <p className="font-light">
            Lihat informasi lebih lengkap dengan mengikuti <br />
            sosial media kami
          </p>

          <form action="" className="mt-10 w-5/12 mx-auto">
            <div className="bg-glass p-5 rounded-xl flex justify-between items-center gap-3">
              <input
                type="text"
                name=""
                id=""
                className="h-10 w-full basis-9/12 px-3 bg-transparent"
                placeholder="Masukkan alamat email"
              />
              <button className="bg-white text-black font-semibold basis-3/12 h-10 flex justify-center items-center rounded-md">
                Subscribe
              </button>
            </div>
          </form>

          <div id="social-media" className="flex justify-center mt-10">
            <a
              href="#"
              className="bg-glass w-16 h-16 flex justify-center mx-2 items-center rounded-full"
            >
              <iconify-icon
                icon="mdi:instagram"
                style={{ fontSize: "35px" }}
              ></iconify-icon>
            </a>
            <a
              href="#"
              className="bg-glass w-16 h-16 flex justify-center mx-2 items-center rounded-full"
            >
              <iconify-icon
                icon="hugeicons:twitter"
                style={{ fontSize: "35px" }}
              ></iconify-icon>
            </a>
            <a
              href="#"
              className="bg-glass w-16 h-16 flex justify-center mx-2 items-center rounded-full"
            >
              <iconify-icon
                icon="iconoir:facebook"
                style={{ fontSize: "35px" }}
              ></iconify-icon>
            </a>
            <a
              href="#"
              className="bg-glass w-16 h-16 flex justify-center mx-2 items-center rounded-full"
            >
              <iconify-icon
                icon="iconoir:youtube"
                style={{ fontSize: "35px" }}
              ></iconify-icon>
            </a>
          </div>
        </div>
      </div>

      <p className="font-light text-center text-white relative bottom-10">
        Copyright © 2024. All Rights Reserved.
      </p>
    </footer>
  );
}
