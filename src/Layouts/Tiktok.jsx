import { useState } from "react";
import { Navbar } from "../components/Navbar";
import Header from "../components/Header";
import { tiktok } from "../config/data";
import Modal from "../components/Modal";
import { ThreeDots } from "react-loader-spinner";

function Tiktok() {
  const [data, setData] = useState({});
  const [display, setDisplay] = useState(false);
  const [inputVal, setInputVal] = useState(localStorage.getItem("tturl") || "");

  async function submitHandler(e) {
    e.preventDefault();
    const value = e.target.children[0].value;
    setData({});
    if (value.match("tiktok.com")) {
      localStorage.setItem("tturl", value);
      setDisplay(true);
      const response = await tiktok(value);
      if (response.status) {
        setData(response);
      }
    } else {
      document.getElementById("my_modal_2").showModal();
    }
  }

  // useEffect(() => {
  // }, [data]);

  return (
    <>
      <Header />

      <div className="flex justify-center items-center h-screen flex-col gap-10  bg-slate-200 text-black dark:text-slate-50  dark:bg-base-100">
        <h1 className="text-3xl">Tiktok Downloader</h1>
        <form onSubmit={submitHandler} className="join">
          <input
            className="input input-bordered join-item bg-transparent border-base-100 dark:border-slate-100"
            placeholder="https://vt.tiktok.com/xxxxxxxx"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button
            type="submit"
            className="btn join-item bg-transparent border-base-100 hover:border-slate-50 hover:text-white dark:border-slate-100 text-inherit"
          >
            Download
          </button>
        </form>
        <div
          className={`show-message card card-side bg-inherit shadow-[0_0_3px_black] justify-center items-center gap-5 p-10 ${
            display ? "" : "hidden"
          }`}
        >
          {data.status ? (
            <>
              <figure
                className={`rounded-lg h-[250px] bg-transparent shadow-3xl ${
                  data.status ? "" : "w-[250px] skeleton"
                }`}
              >
                <img
                  className={`${data.status && "h-full"}`}
                  src={data.status && data.result.thumb}
                  loading="lazy"
                />
              </figure>
              <div className="card-body p-0">
                <div className="card-actions justify-center items-center flex-col gap-4 w-60">
                  <a
                    href={data.status && data.result.wm}
                    className={`btn btn-primary w-full ${
                      data.status ? "" : "skeleton"
                    }`}
                  >
                    {data.status && "Watermark"}
                  </a>
                  <a
                    href={data.status && data.result.nowm}
                    className={`btn btn-primary w-full ${
                      data.status ? "" : "skeleton"
                    }`}
                  >
                    {data.status && "Tanpa Watermark"}
                  </a>
                  <a
                    href={data.result.audio}
                    className={`btn btn-primary w-full ${
                      data.status ? "" : "skeleton"
                    }`}
                  >
                    {data.status ? "Audio" : ""}
                  </a>
                </div>
              </div>
            </>
          ) : (
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          )}
        </div>
        <Modal id="my_modal_2" text1="URL Tiktok tidak valid!">
          Contoh :{" "}
          <span className="text-blue-500">https://vt.tiktok.com/ZSYD5QHt2</span>
        </Modal>
      </div>

      <Navbar />
    </>
  );
}

export default Tiktok;
