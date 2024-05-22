import React from "react";

function PortfolioItem({ title, imgUrl, description, stack, link }) {
  return (
    <div className="border-2 border-stone-900 rounded-md overflow-hidden">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-36 md:h-48 object-contain cursor-pointer"
        />
      </a>
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="text-sm md:text-base mb-2 md:mb-3">{description}</p>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {Array.isArray(stack) &&
            stack.map((item, index) => (
              <span
                className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md"
                key={index}
              >
                {item}{" "}
              </span>
            ))}
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem;
