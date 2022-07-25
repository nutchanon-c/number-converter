import Converter from "./components/converter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const notify = (message) => {
    if (message === "Error") {
      toast.error(message);
    } else {
      toast.success(message);
    }
  };

  return (
    <div
      className={`py-10 bg-black text-white top-[50%] h-screen max-h-screen flex flex-col pb-28 md:pb-10`}
    >
      <div className="flex flex-col w-full items-center">
        <h1
          className={`text-5xl md:text-6xl
            px-10 md:px-0`}
        >
          Number Base Converter
        </h1>
        <hr className="border-[1px] border-white w-[80%] my-5" />
        <div className="top-[50%]">
          <Converter notify={notify} />
        </div>
      </div>
      <footer className="flex flex-col mt-auto text-center w-full text-base">
        <p>
          Created by{" "}
          <a
            href="https://github.com/nutchanon-c"
            target="_blank"
            rel="noreferrer"
            className="text-blue-300 hover:text-purple-500"
          >
            nutchanon-c
          </a>
        </p>
      </footer>
      <ToastContainer
        className="mb-16"
        position="bottom-center"
        autoClose={500}
        closeOnClick={true}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        hideProgressBar={true}
        limit={1}
        theme="dark"
      />
    </div>
  );
}

export default App;
