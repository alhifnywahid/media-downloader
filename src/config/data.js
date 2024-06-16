import axios from "axios";

const replace = (query) => {
  return query.replace("http://", "https://");
}

const URL = {
	tiktok: "https://gopretapi.vercel.app/api/downloader/tiktok?url=",
	instagram: "https://gopretapi.vercel.app/api/downloader/tiktok?url=",
};

const tiktok = async (url) => {
	try {
		const response = await axios.get(URL.tiktok + url);
		return {
			status: true,
			result: {
				thumb: response.data.result.thumbnail,
				audio: replace(response.data.result.audio),
				wm: replace(response.data.result.nowm),
				nowm: replace(response.data.result.watermark),
			},
		};
	} catch (error) {
		return {
			status: false,
		};
	}
};
const instagram = (url) => {
	return new Promise((res, rej) => {
		axios
			.get(`https://gopretapi.vercel.app/api/downloader/tiktok?url=${url}`)
			.then((res) => res.data)
			.then((data) => res(data))
			.catch((err) => rej(err));
	});
};

export { tiktok, instagram };
