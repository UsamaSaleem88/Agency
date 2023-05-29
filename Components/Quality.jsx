import Image from "next/image";
import React from "react";

function Quality() {
  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold text-[40px] max-md:text-[20px]">
          For those who are striving for <br /> quality at all stages.
        </h1>
        <p className="py-5 max-md:text-[12px]">
          Design isn’t finished until somebody is using it.
        </p>
      </div>

      <div className="flex justify-center max-lg:flex-col items-center text-center gap-10 py-10">
        <div className="flex justify-center flex-col items-center">
          <Image src="/img/simplified.svg" width={64} height={64} alt="#" />
          <h2 className="20px font-bold py-2">Simplified Subscriptions</h2>
          <p className="w-[260px] max-md:text-[12px]">
            Enjoy our services with a hassle-free subscription model and a fixed
            monthly price.
          </p>
        </div>

        <div className="flex justify-center flex-col items-center">
          <Image src="/img/design.svg" width={64} height={64} alt="#" />

          <h2 className="20px font-bold py-2">
            Lightning-Fast Design Delivery
          </h2>
          <p className="w-[270px] max-md:text-[12px]">
            Experience the thrill of receiving your design within the first
            week, ensuring quick turnaround times.
          </p>
        </div>

        <div className="flex justify-center flex-col items-center">
          <Image src="/img/rivisions.svg" width={64} height={64} alt="#" />

          <h2 className="20px font-bold py-2">Unlimited Revisions</h2>
          <p className="w-[260px] max-md:text-[12px]">
            We prioritize your satisfaction by offering unlimited revisions
            until you are happy with the final design.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Quality;
