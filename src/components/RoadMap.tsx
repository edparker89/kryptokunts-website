import React from "react";
import Rows from "./Rows";
import Image from "next/image";
import {
  Roadmap1,
  Roadmap2,
  Roadmap3,
  Roadmap4,
} from "@/assets";

export function RoadMap() {
  const contentRoadMap = [
    {
      title: "☣️ PHASE 1",
      titleText: "RISE OF THE KUNTS",
      description: "The Outbreak Begins.",
      list: [
        "The first wave of infection spreads across X (Twitter) and Web3 as the OG Horde assembles. The art is revealed, the lore seeps into the timeline, and the undead start recruiting the living. WL competitions, raid calls, and sneak peeks infect the feed.",
        "",
        "🧟‍♂️ Mission: Build the Horde. Infect the socials. Reveal the art.",
        "💀 Milestones:",
        "- OG + WL recruitment campaigns",
        "- Lore + artwork teasers",
        "- Mint UI and website launch",
        "- Early collabs and Horde partnerships",
      ],
      bgImage: Roadmap1,
    },
    {
      title: "🔥 PHASE 2",
      titleText: "MINT OR DIE",
      description: "The Infection Spreads.",
      list: [
        "The Horde hits critical mass. Mint goes live — blood, pixels, and chaos on-chain. The undead rise in full force as the collection sells out and new members stumble into the crypt. Community events, giveaways, and early token utility drop to keep the Horde hungry.",
        "",
        "🧟‍♀️ Mission: Infect the blockchain. Expand the Horde.",
        "💀 Milestones:",
        "- Mint launch + reveal",
        "- OG, WL + public mint events",
        "- Secondary market listings",
        "- Horde-exclusive spaces, polls, and chaos drops",
      ],
      bgImage: Roadmap2,
    },
    {
      title: "🌍 PHASE 3",
      titleText: "THE REWILDING",
      description: "Undead for the Planet.",
      list: [
        "Once the Horde is strong, the mission evolves — from memes to meaning. Each mint fuels real-world rewilding: restoring habitats, supporting conservation, and proving degeneracy can give life back to Earth. The Horde for Good movement rises, merging NFT chaos with environmental impact.",
        "",
        "🧟‍♂️ Mission: Turn undead power into planet-positive action.",
        "💀 Milestones:",
        "- Habitat restoration partnerships",
        "- Horde for Good fund tracking",
        "- IRL + Web3 eco-collabs",
        "- Expansion of the undead brand (more updates soon...!)",
      ],
      bgImage: Roadmap3,
    },
  ];

  return (
    <section id="roadmap" className="w-full overflow-x-hidden mt-32">
      {/* Section Title */}
      <Rows className="justify-center pb-12 px-4">
        <h2
          className="text-[clamp(1.75rem,5vw,2.5rem)] text-center text-white font-bold uppercase"
          style={{
            textShadow:
              "0 0 15px #698362aa, 0 0 30px #69836288, 0 0 45px #698362cc",
          }}
        >
          ROAD MAP
        </h2>
      </Rows>

      {/* Phases 1–3 */}
      {contentRoadMap.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-full overflow-hidden">
            <Image
              src={item.bgImage}
              alt={`Roadmap Phase ${index + 1}`}
              className="w-full h-auto object-cover"
              priority={index === 0}
            />
          </div>

          {/* Phase Content */}
          <Rows className="flex-col lg:flex-row items-center lg:items-start justify-between max-w-[1200px] mx-auto py-12 px-4 sm:px-6 gap-8">
            {/* Phase Title */}
            <div className="flex lg:items-center lg:justify-start min-w-[150px]">
              <h3
                className="text-[clamp(1.5rem,5vw,2rem)] text-white font-bold uppercase"
                style={{
                  textShadow:
                    "0 0 10px #698362aa, 0 0 20px #69836288, 0 0 30px #698362cc",
                }}
              >
                {item.title}
              </h3>
            </div>

            {/* Content */}
            <Rows className="flex-col gap-4 max-w-[700px]">
              <h4 className="text-[clamp(1.25rem,4vw,1.75rem)] text-white font-bold uppercase">
                {item.titleText}
              </h4>
              <p className="text-[clamp(1rem,3.5vw,1.25rem)] font-bold text-white/90">
                {item.description}
              </p>
              <ul className="text-[clamp(1rem,3vw,1.25rem)] flex flex-col gap-3 text-white/80">
                {item.list.map((listItem, i) => (
                  <li
                    key={i}
                    dangerouslySetInnerHTML={{ __html: listItem }}
                  ></li>
                ))}
              </ul>
            </Rows>
          </Rows>
        </div>
      ))}

      {/* Phase 4 image */}
      <div className="w-full overflow-hidden">
        <Image
          src={Roadmap4}
          alt="Roadmap End"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
