/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";

/* eslint-disable no-unused-vars */
function App() {
  const [data, setData] = useState({});
  const [display, setDisplay] = useState(false);
  function handlerTheme(e) {
    const theme = e.target.checked;
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    const value = e.target.children[0].value;
    setData({});
    if (value) {
      setDisplay(true);
      axios
        .get(`https://gopretapi.vercel.app/api/downloader/tiktok?url=${value}`)
        .then((res) => {
          if (res.data.status) {
            setData(res.data.result);
          } else {
            console.log(res.data.result.nowm);
          }
        });
    }
  }

  const links = ["Tiktok", "Instagram", "Youtube", "Twitter"];

  return (
    <>
      <h1 className="text-2xl font-bold w-full  bg-slate-800 h-16 flex justify-center items-center rounded fixed top-0 left-0">
        Tiktok Downloader
      </h1>
      <div className="flex justify-center items-center h-screen flex-col gap-10">
        <form onSubmit={submitHandler} className="join">
          <input
            className="input input-bordered join-item"
            placeholder="link tiktok bro"
          />
          <button type="submit" className="btn btn-outline join-item ">
            Download
          </button>
        </form>
        <div
          className={`show-message card card-side bg-base-100 shadow-[0_0_3px_black] justify-center items-center ${
            display ? "flex" : "hidden"
          }`}
        >
          <figure
            className={`rounded-lg h-[250px] m-5 ${
              data.thumbnail ? "" : "w-[250px] skeleton"
            }`}
          >
            <img
              className={`${data.thumbnail ? "h-full" : ""}`}
              src={data.thumbnail}
            />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-center items-center flex-col gap-4 w-60">
              <a
                href={data.nowm}
                className={`btn btn-primary w-full ${
                  data.thumbnail ? "" : "skeleton"
                }`}
              >
                {data.nowm ? "Watermark" : ""}
              </a>
              <a
                href={data.watermark}
                className={`btn btn-primary w-full ${
                  data.thumbnail ? "" : "skeleton"
                }`}
              >
                {data.nowm ? "Tanpa Watermark" : ""}
              </a>
              <a
                href={data.audio}
                className={`btn btn-primary w-full ${
                  data.thumbnail ? "" : "skeleton"
                }`}
              >
                {data.nowm ? "Audio" : ""}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar fixed bottom-0 left-0 w-full p-6 bg-slate-800 flex justify-center items-center join gap-4">
        {links.map((link) => (
          <button key={link} className="btn join-item">
            {link}
          </button>
        ))}
      </div>
    </>
  );
}

export default App;
