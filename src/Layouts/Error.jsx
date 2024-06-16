import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div id="error-page">
        <h1>Maaf fitur ini belum tersedia</h1>
      </div>
    </>
  );
}

export default Error;
