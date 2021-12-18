import React, { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function AvatarPicker({}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<{ url: string | null }>({ url: null });

  const selectImage = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files);
    const file = event.target.files?.item(0);
    if (file) {
      setImage({ url: URL.createObjectURL(file) });
    }
  };

  const clearImage = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      setImage({ url: null });
    }
  };

  return (
    <div className="relative">
      <div
        className="overflow-hidden bg-slate-400 w-24 h-24 rounded-full border-slate-500 transition-colors duration-150 cursor-pointer border-[1px]  hover:bg-slate-500"
        onClick={selectImage}
      >
        {image.url && (
          <img className="w-full h-full object-contain" src={image.url} />
        )}
      </div>
      {image.url && (
        <button
          className="absolute top-[-0.3rem] right-[-0.3rem] w-5 h-5 text-red-400 hover:text-red-500"
          onClick={clearImage}
        >
          <FaTimes className="h-full w-fu" />
        </button>
      )}
      <input
        type="file"
        ref={inputRef}
        className="hidden"
        onChange={onImageChange}
        multiple={false}
      />
    </div>
  );
}
