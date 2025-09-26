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
      title: "PHASE 1",
      titleText: "CALL OF THE WOLVES",
      description:
        "Laying the foundation for a thriving and engaged community.",
      list: [
        "Community Development: Foster a strong, inclusive community centered on Whimsy Wolves' core values of Artistry, Generosity, and Innovation.",
        "Partner Collaborations: Forge partnerships with like-minded founders, projects and brands to expand reach and visibility.",
        "Community Engagement: Organize events, giveaways, and activities to strengthen bonds within the Whimsy Wolves community.",
        "NFT Mint Event: Celebrate the official minting of Whimsy Wolves.",
      ],
      bgImage: Roadmap1,
    },
    {
      title: "PHASE 2",
      titleText: "Heart of the Wolves",
      description:
        "Building deep emotional connections through our unique storytelling and brand.",
      list: [
        "IP Development: Create compelling stories, characters, and experiences that resonate with people on a personal level.",
        "Short-Form Media: Share animated shorts, comics, and digital content to showcase the Whimsy Wolves world.",
        "Merchandise and Collectibles: Introduce physical and digital products to bring the Whimsy Wolves experience to life.",
        "Collaborative Expansion: Partner with creators, influencers, and brands to amplify our reach and message.",
      ],
      bgImage: Roadmap2,
    },
    {
      title: "PHASE 3",
      titleText: "Legacy of the Wolves",
      description: "Expanding the Whimsy World.",
      list: [
        "Unveil a new twist in the Whimsy World with the &quot;Sheep&quot; Invasione activation.",
        "Utilities: Develop new DApps and blockchain ecosystems to drive innovation, promote the advancement of blockchain technology, and onboard the masses into a more accessible, decentralized future.",
        "Interactive Entertainment: Launch immersive experiences like blockchain-based mini-games, collaborative storytelling campaigns, and real-time events that allow holders to shape the Whimsy Wolves world.",
        "Community-Driven Content: Empower the community to co-create content or influence story arcs leveraging the blockchain.",
      ],
      bgImage: Roadmap3,
    },
  ];

  return (
    <div id="roadmap" className="w-full mt-32">
      {/* Section Title */}
      <Rows className="justify-center pb-12">
        <h2
          className="text-6xl text-center text-white font-bold uppercase"
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
          <Rows className="w-full">
            <Image
              src={item.bgImage}
              alt="Roadmap"
              className="w-full h-auto"
            />
          </Rows>

          {/* Phase Content */}
          <Rows className="flex-col lg:flex-row items-center lg:items-stretch justify-between container mx-auto py-12 px-4 xl:px-0 gap-8">
            
            {/* Phase Title - glowing + middle-left */}
            <div className="flex lg:items-center lg:justify-start min-w-[180px]">
              <h3
                className="text-5xl text-white font-bold uppercase"
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
              <h4 className="text-4xl text-white">{item.titleText}</h4>
              <p className="text-lg font-bold text-white/90">
                {item.description}
              </p>
              <ul className="flex flex-col gap-3 text-white/80">
                {item.list.map((listItem, index) => (
                  <li
                    dangerouslySetInnerHTML={{ __html: listItem }}
                    key={index}
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
