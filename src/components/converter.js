import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import { BiCopy } from "react-icons/bi";
const OPTIONS = ["none", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

export default function Converter() {
  const [binaryResult, setBinaryResult] = useState("binary");
  const [hexResult, setHexResult] = useState("hex");
  const [octResult, setOctResult] = useState("oct");
  const [customResult, setCustomResult] = useState("select base first");
  const [input, setInput] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);
  const [customBase, setCustomBase] = useState(null);

  useEffect(() => {
    if (customBase) {
      setCustomResult(Number(input).toString(customBase));
    }
  }, [customBase, input]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
  }

  function handleOnChange(e) {
    console.log(e.target.id);
    if (e.target.id === "input") {
      if (!isNaN(e.target.value)) {
        setInput(e.target.value);
        setInvalidInput(false);
        setBinaryResult(Number(e.target.value).toString(2));
        setHexResult(Number(e.target.value).toString(16).toUpperCase());
        setOctResult(Number(e.target.value).toString(8).toUpperCase());
        if (customBase) {
            setCustomResult(Number(e.target.value).toString(customBase));
        //   if (input !== "") {
        //   } else {
        //     setCustomBase("custom");
        //   }
        }
      } else {
        setInvalidInput(true);
      }
    }
  }

  function handleCustomBaseSelect(e) {
    console.log(e.value === "none");
    if (e.value === "none") {
      setCustomBase(null);
      setCustomResult("select base first");
    } else {
      setCustomBase(e.value);
    }
  }

  function handleCopy(e) {
    console.log("copy", e.target.id);
    switch (e.target.id) {
      case "binary-copy":
        navigator.clipboard.writeText(binaryResult);
        break;
      case "oct-copy":
        navigator.clipboard.writeText(octResult);
        break;
      case "hex-copy":
        navigator.clipboard.writeText(hexResult);
        break;
      case "custom-copy":
        navigator.clipboard.writeText(customResult);
        break;
      default:
        console.log("error");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-x-8 flex flex-row">
        <div className="flex flex-col gap-2">
          <label htmlFor="input">Decimal Input</label>
          <input
            value={input}
            type="text"
            onChange={handleOnChange}
            className={`border-2 ${
              invalidInput ? "border-red-500" : "border-blue-400"
            } rounded-lg focus:outline-none text-black h-10 px-3`}
            id="input"
          />
          {invalidInput && <p className="text-red-500">Numbers only</p>}
        </div>
        <div className="space-y-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="binary">Binary (Base 2)</label>
            <div className="flex flex-row items-center gap-3">
              <input
                type="text"
                onChange={handleOnChange}
                className="border-2 border-blue-400 rounded-lg text-black h-10 px-3 outline-none"
                //   disabled={true}
                value={binaryResult}
                id="binary"
              />
              <BiCopy onClick={handleCopy} id="binary-copy" size={20} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="binary">Octal (Base 8)</label>
            <div className="flex flex-row items-center gap-3">
              <input
                type="text"
                onChange={handleOnChange}
                className="border-2 border-blue-400 rounded-lg text-black h-10 px-3 outline-none"
                //   disabled={true}
                value={octResult}
                id="binary"
              />
              <BiCopy onClick={handleCopy} id="oct-copy" size={20} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="binary">Hexadecimal (Base 16)</label>
            <div className="flex flex-row items-center gap-3">
              <input
                type="text"
                onChange={handleOnChange}
                className="border-2 border-blue-400 rounded-lg text-black h-10 px-3 outline-none"
                //   disabled={true}
                value={hexResult}
                id="binary"
              />
              <BiCopy onClick={handleCopy} id="hex-copy" size={20} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row relative">
              <label htmlFor="binary">Custom Base: </label>
              <Dropdown
                options={OPTIONS}
                className="focus:border-2 focus:border-white rounded-md absolute right-[5rem] w-14 z-10 bg-purple-600 px-2"
                onChange={handleCustomBaseSelect}
                placeholder="none"
              />
            </div>
            <div className="flex flex-row items-center gap-3">
              <input
                type="text"
                onChange={handleOnChange}
                className="border-2 border-blue-400 rounded-lg text-black h-10 px-3 outline-none"
                //   disabled={true}
                value={customResult}
                id="custom"
                disabled={!customBase}
              />
              {customBase && (
                <BiCopy onClick={handleCopy} id="custom-copy" size={20} />
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
