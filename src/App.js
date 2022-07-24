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
      </div>
  );
}

export default App;
