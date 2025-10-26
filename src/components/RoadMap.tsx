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
    <div id="roadmap" className="w-full mt-32">
      {/* Section Title */}
      <Rows className="justify-center pb-12 px-4">
        <h2
          className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] xl:text-[72px] 
          text-center text-white font-bold uppercase"
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
        <Rows className="flex-col pt-4 pb-2" key={index}>
          {/* Background Image */}
          <Rows className="w-full">
            <Image src={item.bgImage} alt="Roadmap" className="w-full h-auto" />
          </Rows>

          {/* Phase Content */}
          <Rows className="flex-col lg:flex-row items-center lg:items-stretch justify-between container mx-auto py-12 px-4 xl:px-0 gap-8">
            {/* Phase Title */}
            <div className="flex lg:items-center lg:justify-start min-w-[180px] text-center lg:text-left">
              <h3
                className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] text-white font-bold uppercase"
                style={{
                  textShadow:
                    "0 0 10px #698362aa, 0 0 20px #69836288, 0 0 30px #698362cc",
                }}
              >
                {item.title}
              </h3>
            </div>

            {/* Phase Details */}
            <Rows className="flex-col gap-4 max-w-[700px] text-center lg:text-left">
              <h4 className="text-[24px] sm:text-[28px] md:text-[32px] text-white font-semibold">
                {item.titleText}
              </h4>
              <p className="text-[18px] sm:text-[20px] md:text-[22px] font-bold text-white/90">
                {item.description}
              </p>
              <ul className="text-[16px] sm:text-[18px] md:text-[20px] flex flex-col gap-3 text-white/80">
                {item.list.map((listItem, i) => (
                  <li
                    dangerouslySetInnerHTML={{ __html: listItem }}
                    key={i}
                  ></li>
                ))}
              </ul>
            </Rows>
          </Rows>
        </Rows>
      ))}

      {/* Phase 4 image */}
      <Rows className="w-full">
        <Image src={Roadmap4} alt="Roadmap" className="w-full h-auto" />
      </Rows>
    </div>
  );
}
