import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col md:w-[600px] w-[90%] mx-auto">
        <div className="flex flex-col w-full border-opacity-50 ">
          <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
            <h1>
              Maaf fitur ini belum tersedia, silahkah hubungi{" "}
              <a
                className="text-blue-500 underline"
                href="https://wa.me/6285655207366"
              >
                owner!
              </a>
            </h1>
          </div>
          <div className="divider">atau</div>
          <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
            <Link className="btn " to="/">
              Kembali ke halaman utama.
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error;
