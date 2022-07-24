import Converter from "./components/converter";

function App() {
  return (
    <div className="p-10 bg-black text-white top-[50%]">
      <div className="flex flex-col w-full items-center">
        <h1 className="text-6xl">Number Base Converter</h1>
        <hr className="border-[1px] border-white w-[80%] my-5" />
        <div className="top-[50%]">
          <Converter />
        </div>
      </div>
      <div className="absolute bottom-5 right-5">
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
      </div>
    </div>
  );
}

export default App;
