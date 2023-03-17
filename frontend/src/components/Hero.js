import React from "react";

const Hero = (props) => {
  let vegButton =
    props.rest_veg == "veg" ? (
      <button
        type="button"
        class="pointer-events-none inline-block rounded bg-success px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white"
      >
        Veg
      </button>
    ) : (
      <button
        type="button"
        class=" pointer-events-none inline-block rounded bg-danger px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white "
      >
        Non-Veg
      </button>
    );
  return (
    <div className="w-full bg-gray-100 py-16 px-4">
      <div className="max-w-[1240px] h-[450px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[550px] h-[400px] mx-3 my-auto inline-block rounded-xl"
          src={props.rest_image}
          alt="/restaurant"
        />
        <div className="flex flex-col justify-start mx-2 my-auto">
          <h1 className="md:text-4xl sm:text-3xl text-7xl font-bold py-1 text-[#5f5c6d]">
            {props.rest_name}
          </h1>

          <div class="my-2 flex justify-start space-x-2">{vegButton}</div>
          <div class="flex justify-start space-x-2 my-3">
            <div class="space-y-2">
              <button
                type="button"
                class=" pointer-events-none inline-block rounded-full bg-slate-400 px-6 pt-2.5 pb-2 text-xs font-medium leading-normal text-neutral-50"
              >
                # {props.rest_city}
              </button>
              <span> </span>
              <button
                type="button"
                class="pointer-events-none inline-block rounded-full bg-slate-400 px-6 pt-2.5 pb-2 text-xs font-medium leading-normal text-neutral-50"
              >
                # {props.rest_type}
              </button>
              <span> </span>
              <button
                type="button"
                class=" pointer-events-none inline-block rounded-full bg-slate-400 px-6 pt-2.5 pb-2 text-xs font-medium leading-normal text-neutral-50"
              >
                # {props.rest_rating}
              </button>
            </div>
          </div>
          <div className="flex justify-start mx-3 my-3">
            {props.rest_description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
