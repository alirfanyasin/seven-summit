export default function Footer() {
  return (
    <footer className="bg-footerImage bg-cover bg-top bg-no-repeat container min-h-screen mt-[200px]">
      <div className="flex items-center justify-center h-screen text-white">
        <div className="w-full text-center">
          <h1 className="mb-5 text-4xl font-bold md:text-5xl lg:text-6xl">
            Subscribe
          </h1>
          <p className="text-sm font-light md:text-base">
            Lihat informasi lebih lengkap dengan mengikuti <br />
            sosial media kami
          </p>

          <form action="" className="w-full mx-auto mt-10 lg:w-5/12">
            <div className="flex items-center justify-between gap-3 p-3 lg:p-5 bg-glass rounded-xl">
              <input
                type="text"
                name=""
                id=""
                className="w-full h-6 px-3 bg-transparent lg:h-10 basis-9/12"
                placeholder="Masukkan alamat email"
              />
              <button className="flex items-center justify-center h-10 text-sm font-semibold text-black bg-white rounded-md lg:text-base basis-3/12">
                Subscribe
              </button>
            </div>
          </form>

          <div id="social-media" className="flex justify-center mt-10">
            <a
              href="#"
              className="flex items-center justify-center w-16 h-16 mx-2 rounded-full bg-glass"
            >
              <iconify-icon
                icon="mdi:instagram"
                style={{ fontSize: "35px" }}
              ></iconify-icon>
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-16 h-16 mx-2 rounded-full bg-glass"
            >
              <iconify-icon
                icon="hugeicons:twitter"
                style={{ fontSize: "35px" }}
              ></iconify-icon>
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-16 h-16 mx-2 rounded-full bg-glass"
            >
              <iconify-icon
                icon="iconoir:facebook"
                style={{ fontSize: "35px" }}
              ></iconify-icon>
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-16 h-16 mx-2 rounded-full bg-glass"
            >
              <iconify-icon
                icon="iconoir:youtube"
                style={{ fontSize: "35px" }}
              ></iconify-icon>
            </a>
          </div>
        </div>
      </div>

      <p className="relative text-sm font-light text-center text-white lg:text-base bottom-10">
        Copyright © 2024. All Rights Reserved.
      </p>
    </footer>
  );
}
