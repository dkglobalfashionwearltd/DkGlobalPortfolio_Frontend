// import React from "react";

// const logos = [
//   "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
//   "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg",
//   "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
//   "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
//   "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
// ];

// const ClientSlider = () => {
//   return (
//     <div className="w-full bg-gray-50 py-8 overflow-hidden">
//       <div className="relative flex overflow-hidden group">
//         {/* Track with duplicated logos */}
//         <div className="flex animate-slide whitespace-nowrap">
//           {[...logos, ...logos].map((logo, i) => (
//             <div
//               key={i}
//               className="inline-flex items-center justify-center px-8"
//             >
//               <img
//                 src={logo}
//                 alt={`Client ${i}`}
//                 className="h-16 w-auto object-contain"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClientSlider;

// import React from "react";

// const logos = [
//   "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
//   "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg",
//   "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
//   "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
//   "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
// ];

// const ClientSlider = () => {
//   return (
//     <div className="w-full bg-gray-50 py-8 overflow-hidden">
//       <div className="relative flex overflow-hidden group">
//         {/* Track container */}
//         <div className="flex animate-marquee">
//           {/* First set of logos */}
//           <div className="flex shrink-0 gap-12 px-8">
//             {logos.map((logo, i) => (
//               <img
//                 key={`first-${i}`}
//                 src={logo}
//                 alt={`Client ${i}`}
//                 className="h-16 w-auto object-contain"
//               />
//             ))}
//           </div>

//           {/* Duplicate set of logos */}
//           <div className="flex shrink-0 gap-12 px-8">
//             {logos.map((logo, i) => (
//               <img
//                 key={`second-${i}`}
//                 src={logo}
//                 alt={`Client duplicate ${i}`}
//                 className="h-16 w-auto object-contain"
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClientSlider;

import React, { useEffect, useRef, useState } from "react";

const logos = [
  "https://download.logo.wine/logo/JD_Sports/JD_Sports-Logo.wine.png",
  "https://1000logos.net/wp-content/uploads/2020/06/New-Yorker-Logo.jpg",
  "https://www.sportclubshop.it/wp-content/uploads/2023/04/RockExperience-1-300x300.webp",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkBQsPH3oz6f1ol13xdEkN40oQX3otFN4jKUfIYBw7reQCSoaGVApQ9GOCJ3AiFgmzIuw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNy9U-GIPfO1fMsjdD_cji1WqD-pAONDWl8A&s",
  "https://d139l9lsy1wb51.cloudfront.net/Pictures/1024x536/6/3/7/28637_swedemount_300px_457323.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQixulRe7T776VzN-Jnx-TQwHE6qR2hm8apQ&s",
  "https://www.strichpunkt-design.de/storage/app/media/work/back-to-nature-strichpunkt-fuer-me-ru/teaser.jpg",
  "https://img.cdn.mountainwarehouse.com/common/mw-opengraph.png?w=1200",
  "https://images.squarespace-cdn.com/content/v1/61958f07196e2240e89c6d3f/1638387401779-616SDURSJPZZ0ST32921/image-asset.jpeg",
  "https://www.diosan.com/marcas/imgs/kapriol.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ50VP3TyON9e3rz_hbAiSmTgDO9VbgroH4Ww&s",
  "https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/92416/optimized_product_thumb_stage.jpg",
  "https://www.bengtssons.com/wp-content/uploads/2021/03/SWE_Logo_cmyk-1.png",
  "https://images.seeklogo.com/logo-png/15/1/x-trail-logo-png_seeklogo-154356.png",
];

const ClientSlider = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(20); // default 20s

  useEffect(() => {
    if (trackRef.current) {
      const trackWidth = trackRef.current.scrollWidth; // total width of one track
      const speed = 100; // px per second → adjust for faster/slower
      setDuration(trackWidth / speed);
    }
  }, []);

  return (
    <div className="w-full h-[18rem] flex items-center bg-gray-50 overflow-hidden">
      <div className="relative overflow-hidden group">
        <div className="py-10">
          <h1 className="text-2xl font-bold text-center">
            Our Valuable <span className="text-indigo-600">Clients</span>
          </h1>
        </div>
        <div
          className="flex animate-marquee"
          style={{ ["--marquee-duration" as any]: `${duration}s` }}
        >
          {/* First track */}
          <div ref={trackRef} className="flex shrink-0 items-center gap-12">
            {logos?.map((logo, i) => (
              <img
                key={`first-${i}`}
                src={logo}
                alt={`Client ${i}`}
                className="h-[6rem] w-auto object-contain rounded-2xl"
              />
            ))}
          </div>

          {/* Duplicate track */}
          <div className="flex shrink-0 items-center gap-12 px-6">
            {logos?.map((logo, i) => (
              <img
                key={`second-${i}`}
                src={logo}
                alt={`Client duplicate ${i}`}
                className="h-[6rem] w-auto object-contain rounded-2xl"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSlider;
