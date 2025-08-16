import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";


// Floating balls definition - make sure this array is complete and well-formed.
const floatingBalls = [
  { id: 1, delay: 0, top: "10%", left: "15%", img: "/balls/ball1.png" },
  { id: 2, delay: 1, top: "40%", left: "80%", img: "/balls/ball2.png" },
  { id: 3, delay: 2, top: "70%", left: "25%", img: "/balls/ball3.png" },
  { id: 4, delay: 3, top: "20%", left: "60%", img: "/balls/ball4.png" },
];

function BallVisual({ ball }) {
  // Try to use an image (from /public/balls/ballN.png). If it fails to load, fall back to emoji.
  const [imgError, setImgError] = useState(false);

  if (!ball) return null;

  return (
    <>
      {ball.img && !imgError ? (
        <img
          src={ball.img}
          alt={`ball-${ball.id}`}
          className="w-full h-full object-cover rounded-full"
          onError={() => setImgError(true)}
        />
      ) : (
        <span aria-hidden className="text-xl">🎱</span>
      )}
    </>
  );
}

export default function ComingSoon() {
  const [logoError, setLogoError] = useState(false);

  return (
    <div className="h-screen w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 flex flex-col items-center justify-center relative overflow-hidden text-white">
      {/* Neon radial overlays (visual only) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,150,0.18),transparent_60%)] animate-pulse pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,200,255,0.12),transparent_70%)] animate-ping pointer-events-none" />

      {/* Floating snooker balls overlay - guarded mapping to prevent runtime errors */}
      {Array.isArray(floatingBalls) && floatingBalls.length > 0 &&
        floatingBalls.map((ball) => {
          if (!ball || typeof ball !== "object") return null;

          return (
            <motion.div
              key={ball.id}
              className="absolute w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-green-400 to-purple-500 shadow-[0_0_18px_rgba(0,255,150,0.85)] flex items-center justify-center text-black font-bold"
              style={{ top: ball.top, left: ball.left }}
              animate={{ y: [0, -18, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: ball.delay }}
            >
              <BallVisual ball={ball} />
            </motion.div>
          );
        })}

      {/* Logo area - fallback to text badge if /logo.png missing */}
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className="mb-6">
        {!logoError ? (
          <img
            src="../logo.png"
            alt="Dropzone Logo"
            //the image is vertical rectangular make it circular like a snooker ball

            width={140}
            height={140}
            className="w-48 h-48 object-contain drop-shadow-[0_0_26px_rgba(0,255,150,0.85)]"
            onError={() => setLogoError(true)}
          />
        ) : (
          <div className="w-36 h-36 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-2xl font-bold tracking-tight">
            DROPZONE
          </div>
        )}
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        style={{ fontFamily: '"Orbitron", sans-serif' }}
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-cyan-400 to-purple-500 drop-shadow-[0_0_24px_rgba(0,255,150,0.9)]"
      >
        DROPZONE
      </motion.h1>

      {/* Flickering tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.55, 1, 0.55] }}
        transition={{ repeat: Infinity, duration: 2.25 }}
        style={{ fontFamily: '"Rajdhani", sans-serif' }}
        className="mt-3 text-xl md:text-2xl font-semibold tracking-wide text-green-300 drop-shadow-[0_0_10px_rgba(0,255,150,0.8)]"
      >
        Rack'em Up... 🎱
      </motion.p>

      {/* Sub tagline */}
      <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} style={{ fontFamily: '"Rajdhani", sans-serif' }} className="mt-2 text-base md:text-lg text-gray-300 font-light">
        Capital's ultimate Pool • Snooker • Billiards • Gaming Club
      </motion.p>

      {/* CTA */}
      <motion.a
        // href="#"
        whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(0,255,150,0.7)" }}
        style={{ fontFamily: '"Orbitron", sans-serif' }}
        className="mt-8 cursor-default px-5 py-3 rounded-2xl bg-gradient-to-r from-green-400 via-cyan-400 to-purple-500 text-black font-extrabold text-lg shadow-[0_0_14px_rgba(0,255,150,0.75)]"
      >
        Breaking Soon...
      </motion.a>


      {/* Social Links */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.2 }}
  className="absolute bottom-6 flex flex-col items-center"
>
  <p
    className="text-gray-400 text-sm"
    style={{ fontFamily: '"Rajdhani", sans-serif' }}
  >
    Follow us for updates
  </p>

  <div className="flex gap-6 mt-3">
    {/* Instagram */}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.instagram.com/dropzonegaming.in/"
      className="flex items-center gap-2 hover:text-pink-400 transition"
    >
      <FaInstagram className="text-pink-500 text-lg drop-shadow-[0_0_6px_#ff2aed] animate-pulse" />
      <span>Instagram</span>
    </a>

    {/* WhatsApp */}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://wa.me/+919220312446"
      className="flex items-center gap-2 hover:text-green-400 transition"
    >
      <FaWhatsapp className="text-green-400 text-lg drop-shadow-[0_0_6px_#00ff88] animate-pulse" />
      <span>Contact</span>
    </a>
  </div>
</motion.div>


      {/* Social Links */}
      {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-6 flex flex-col items-center">
        <p className="text-gray-400 text-sm" style={{ fontFamily: '"Rajdhani", sans-serif' }}>
          Follow us for updates
        </p>
        <div className="flex gap-6 mt-3">
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/dropzonegaming.in/" className="hover:text-green-400 transition">
            Instagram
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://wa.me/+919220312446" className="hover:text-green-400 transition">
            Contact
          </a>
        </div>
      </motion.div> */}
    </div>
  );
}




// // eslint-disable-next-line no-unused-vars
// import { motion } from "framer-motion";

// const floatingBalls = [
//   { id: 1, delay: 0, top: "10%", left: "15%" },
//   { id: 2, delay: 1, top: "40%", left: "80%" },
//   { id: 3, delay: 2, top: "70%", left: "25%" },
//   { id: 4, delay: 3, top: "20%", left: "60%" },
// ];

// export default function ComingSoon() {
//   return (
//     <div className="h-screen w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 flex flex-col items-center justify-center relative overflow-hidden text-white">
//       {/* Animated neon background */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,150,0.2),transparent_60%)] animate-pulse" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,200,255,0.15),transparent_70%)] animate-ping" />

//       {/* Floating snooker balls overlay */}
//       {floatingBalls.map((ball) => (
//         <motion.div
//           key={ball.id}
//           className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-purple-500 shadow-[0_0_20px_rgba(0,255,150,0.8)] flex items-center justify-center text-black font-bold"
//           style={{ top: ball.top, left: ball.left }}
//           animate={{ y: [0, -20, 0] }}
//           transition={{ repeat: Infinity, duration: 4, delay: ball.delay }}
//         >
//           🎱
//         </motion.div>
//       ))}

//       {/* Dropzone Logo Text */}
//       <motion.h1
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//         className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-cyan-400 to-purple-500 drop-shadow-[0_0_20px_rgba(0,255,150,0.9)]"
//       >
//         DROPZONE
//       </motion.h1>

//       {/* Flickering tagline like neon sign */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: [0.6, 1, 0.6] }}
//         transition={{ repeat: Infinity, duration: 2 }}
//         className="mt-4 text-xl md:text-2xl tracking-wide text-green-300 drop-shadow-[0_0_8px_rgba(0,255,150,0.7)]"
//       >
//         Rack'em Up... 🎱
//       </motion.p>

//       {/* Sub tagline */}
//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1 }}
//         className="mt-3 text-base md:text-lg text-gray-300"
//       >
//         Capital’s ultimate Pool • Snooker • Billiards • Gaming Club
//       </motion.p>

//       {/* Call to Action */}
//       <motion.a
//         href="#"
//         whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,255,150,0.7)" }}
//         className="mt-10 px-6 py-3 rounded-2xl bg-gradient-to-r from-green-400 via-cyan-400 to-purple-500 text-black font-bold shadow-[0_0_15px_rgba(0,255,150,0.7)]"
//       >
//         {/* Get Ready to Play */}
//         Breaking Soon...
//       </motion.a>

//       {/* Social Links */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5 }}
//         className="absolute bottom-6 flex flex-col items-center"
//       >
//         <p className="text-gray-400 text-sm">Follow us for updates</p>
//         <div className="flex gap-6 mt-3">
//           <a target="_blank" href="https://www.instagram.com/dropzonegaming.in/" className="hover:text-green-400 transition">Instagram</a>
//           {/* <a href="#" className="hover:text-green-400 transition">Facebook</a> */}
//           <a target="_blank" href="https://wa.me/+919220312446" className="hover:text-green-400 transition">Contact</a>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
