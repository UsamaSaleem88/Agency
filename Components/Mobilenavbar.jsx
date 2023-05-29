import React, { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import useOutside from "./useOutside";
function Mobilenavbar() {
  // UseState
  const wrapperRef = React.useRef(null);
  const [menubar, setMenubar] = useState(false);
  useOutside(wrapperRef, setMenubar);

  return (
    <div className="max-lg:block hidden">
      <div className="flex px-[20px] pt-[30px]">
        <div className="w-[56px] h-[40px] flex justify-center items-center border border-inherit">
          <RxHamburgerMenu size={35} onClick={() => setMenubar(!menubar)} />
        </div>
      </div>

      <div
        className={
          "flex flex-col justify-center leading-10 transition-[left_4s_ease] font-semibold text-[18px]  h-full z-10 fixed top-0   bg-[#D9D9D9] px-[20px] " +
          (menubar ? "left-0" : " -left-[200px]")
        }
        ref={wrapperRef}
      >
        {menubar && (
          <>
            <a href="#" onClick={() => setMenubar(false)}>
              Home
            </a>
            <a href="#" onClick={() => setMenubar(false)}>
              Services
            </a>
            <a href="#" onClick={() => setMenubar(false)}>
              Pricing
            </a>
            <a href="#" onClick={() => setMenubar(false)}>
              Blog
            </a>
            <a href="#" onClick={() => setMenubar(false)}>
              Faq
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default Mobilenavbar;
