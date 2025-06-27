import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Card({ children }) {
  return <div className="bg-zinc-900 rounded-xl p-4 shadow-lg">{children}</div>;
}

function CardContent({ children }) {
  return <div className="p-2">{children}</div>;
}

export default function Portfolio() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  const works = [
    {
      title: "🚗 One Last Journey (Mustang Render)",
      image: "/One Last Journey In My Mustang 07(3)-2.jpg",
      description: "A cinematic render of a Mustang ‘07, highlighting dusk lighting and storytelling." 
    },
    {
      title: "🌀 Monster Cycle Render",
      image: "/MONSTER - CYCLE RENDER - MAIN SHOT.png",
      description: "Stylized creature-cycle composition using advanced lighting and Blender nodes."
    },
    {
      title: "🌆 A Trip to Heaven",
      image: "/A trip to heaven. (1 of 1).jpg",
      description: "Concept art capturing serenity using gradient overlays and matte painting."
    },
    {
      title: "🏙️ Vacation 4K Matte Shot",
      image: "/VACATION 4K.png",
      description: "Matte painting and 3D overlay to create a surreal urban vacation view."
    },
    {
      title: "🔴 Photo Manipulation: Pinkuuuuu",
      image: "/pinkuuuuu.png",
      description: "Color-graded photo manipulation with layered blend modes."
    },
    {
      title: "🌄 Vectorscape",
      image: "/vectorscape.png",
      description: "Vector-style layered landscape inspired by side-scroller aesthetics."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen px-6 py-10 font-sans">
      <h1 className="text-5xl font-bold text-red-600 mb-6">Vinesh Palaparthy</h1>
      <p className="text-xl mb-10 text-gray-300 max-w-3xl">
        🎮 Game & Graphic Designer | Crafting immersive visuals, cinematic edits & game-ready assets
      </p>

      <div className="space-y-20">
        {works.map((work, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <Card>
              <CardContent>
                <img src={work.image} alt={work.title} className="rounded-lg w-full mb-4" />
                <h2 className="text-2xl text-red-500 font-semibold mb-2">{work.title}</h2>
                <p className="text-gray-400">{work.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
