import Image from "next/image";
import React from "react";

function Buildmoreapp() {
  return (
    <div className="bg-[#FFF5F5] mt-[60px]">
      <div>
        <div className="text-center ">
          <h1 className="font-bold text-[40px] max-md:text-[20px]">
            We build more than just apps
          </h1>
          <p className="py-5 max-md:text-[12px]">
            We enjoy breaking free from conventional thinking and exploring new
            possibilities. <br /> We nurture fresh ideas into thriving jungles
            of innovation.
          </p>
        </div>

        <div className="flex justify-center max-lg:flex-col items-center gap-10 px-[40px]">
          <div className="bg-[white] p-[20px] w-full">
            <Image
              src={"/img/digital.svg"}
              width={32}
              height={32}
              className="pb-[10px]"
            />
            <h1 className="font-bold text-[18px]">Digital Product Design</h1>
            <p className="text-[16px] max-md:text-[12px]">
              Our expert team creates value-driven digital products, combining
              user-centric design and innovative solutions to meet client needs.
            </p>
          </div>

          <div className="bg-[white] p-[20px] w-full">
            <Image
              src={"/img/websites.svg"}
              width={32}
              height={32}
              className="pb-[10px]"
            />

            <h1 className="font-bold text-[18px]">Websites</h1>
            <p className="text-[16px] max-md:text-[12px]">
              We design visually stunning and functional websites that leave a
              lasting impression, tailored to your brand and business goals.
            </p>
          </div>

          <div className="bg-[white] p-[20px] w-full">
            <Image
              src={"/img/phone.svg"}
              width={32}
              height={32}
              className="pb-[10px]"
            />

            <h1 className="font-bold text-[18px]">Mobile Apps</h1>
            <p className="text-[16px] max-md:text-[12px]">
              We create seamless, intuitive mobile applications for iOS and
              Android, bringing your ideas to life with innovative technology.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center max-lg:flex-col gap-10 px-[40px] py-[20px]">
          <div className="bg-[white] p-[20px] w-full">
            <Image
              src={"/img/websites.svg"}
              width={32}
              height={32}
              className="pb-[10px]"
            />

            <h1 className="font-bold text-[18px]">Design Systems</h1>
            <p className="text-[16px] max-md:text-[12px]">
              Streamline your digital projects with our comprehensive design
              systems for consistent user experiences.
            </p>
          </div>

          <div className="bg-[white] p-[20px] w-full">
            <Image
              src={"/img/branding.svg"}
              width={32}
              height={32}
              className="pb-[10px]"
            />

            <h1 className="font-bold text-[18px]">Branding</h1>
            <p className="text-[16px] max-md:text-[12px]">
              Our experts create impactful strategies that resonate, elevate,
              and position your business for recognition and success.
            </p>
          </div>

          <div className="bg-[white] p-[20px] w-full">
            <Image
              src={"/img/ux.svg"}
              width={32}
              height={32}
              className="pb-[10px]"
            />

            <h1 className="font-bold text-[18px]">UI and UX</h1>
            <p className="text-[16px] max-md:text-[12px]">
              We blend stunning visuals with seamless interactions, crafting
              exceptional user experiences that captivate and engage.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center max-lg:flex-col gap-10 px-[40px] py-[20px]">
          <div className="bg-[white] p-[20px] w-full">
            <Image
              src={"/img/development.svg"}
              width={32}
              height={32}
              className="pb-[10px]"
            />

            <h1 className="font-bold text-[18px]">Website Development</h1>
            <p className="text-[16px] max-md:text-[12px]">
              Our skilled team creates dynamic websites, tailored to your unique
              needs, with responsive design and optimal performance.
            </p>
          </div>

          <div className="bg-[white] p-[20px] w-full">
            <Image
              src={"/img/frontback.svg"}
              width={32}
              height={32}
              className="pb-[10px]"
            />

            <h1 className="font-bold text-[18px]">
              Front/Back-end Development
            </h1>
            <p className="text-[16px] max-md:text-[12px]">
              We build powerful and efficient web solutions, handling both
              client-side interfaces & server-side functionality with expertise
              and precision.
            </p>
          </div>

          <div className="bg-[white] p-[20px] w-full">
            <Image
              src={"/img/simple.svg"}
              width={32}
              height={32}
              className="pb-[10px]"
            />

            <h1 className="font-bold text-[18px]">Simple anything... </h1>
            <p className="text-[16px] max-md:text-[12px]">
              Whatever your needs may be, our team is ready to provide expert
              solutions and support for any project or challenge you face.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buildmoreapp;
