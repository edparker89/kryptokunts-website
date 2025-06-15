import React from "react";
import Rows from "./Rows";
import Image from "next/image";
import {
  wolvesMatch1,
  wolvesMatch2,
  wolvesMatch3,
  wolvesMatch4,
} from "@/assets";

export function RoadMap() {
  const contentRoadMap = [
    {
      title: "Phase 1",
      titleText: "Call of the Wolves",
      description:
        "Laying the foundation for a thriving and engaged community.",
      list: [
        "Community Development: Foster a strong, inclusive community centered on Whimsy Wolves' core values of Artistry, Generosity, and Innovation.",
        "Partner Collaborations: Forge partnerships with like-minded founders, projects and brands to expand reach and visibility.",
        "Community Engagement: Organize events, giveaways, and activities to strengthen bonds within the Whimsy Wolves community.",
        "NFT Mint Event: Celebrate the official minting of Whimsy Wolves.",
      ],
      bgImage: wolvesMatch1,
    },

    {
      title: "Phase 2",
      titleText: "Heart of the Wolves",
      description:
        "Building deep emotional connections through our unique storytelling and brand.",
      list: [
        "IP Development: Create compelling stories, characters, and experiences that resonate with people on a personal level.",
        "Short-Form Media: Share animated shorts, comics, and digital content to showcase the Whimsy Wolves world.",
        "Merchandise and Collectibles: Introduce physical and digital products to bring the Whimsy Wolves experience to life.",
        "Collaborative Expansion: Partner with creators, influencers, and brands to amplify our reach and message.",
      ],
      bgImage: wolvesMatch2,
    },
    {
      title: "Phase 3",
      titleText: "Legacy of the Wolves",
      description: "Expanding the Whimsy World.",
      list: [
        "Unveil a new twist in the Whimsy World with the &quot;Sheep&quot; Invasione activation.",
        "Utilities: Develop new DApps and blockchain ecosystems to drive innovation, promote the advancement of blockchain technology, and onboard the masses into a more accessible, decentralized future.",
        "Interactive Entertainment: Launch immersive experiences like blockchain-based mini-games, collaborative storytelling campaigns, and real-time events that allow holders to shape the Whimsy Wolves world.",
        "Community-Driven Content: Empower the community to co-create content or influence story arcs leveraging the blockchain.",
      ],
      bgImage: wolvesMatch3,
    },
  ];

  // const data = contentTimeLine.map((item) => ({
  //   title: item.title,
  //   content: (
  //     <div id="roadmap" className="flex flex-col gap-4">
  //       <h2 className="text-[40px]">{item.titleText}</h2>
  //       <p className="text-[20px]">
  //         <b>{item.description}</b>
  //       </p>

  //       <p className="text-[18px]">
  //       <ul className="flex flex-col gap-3">
  //           {item.list.map((listItem, index) => (
  //             <li dangerouslySetInnerHTML={{ __html: listItem }} key={index}></li>
  //           ))}
  //         </ul>
  //       </p>
  //     </div>
  //   ),
  // }));

  return (
    <div id="roadmap" className="w-full mt-32">
      <Rows className="justify-center pb-12">
        <h2 className="text-6xl">Road Map</h2>
      </Rows>

      {contentRoadMap.map((item, index) => (
        <Rows className="flex-col pt-4 pb-2" key={index}>
          <Rows className="w-full">
            <Image
              src={item.bgImage}
              alt="Wolves Fun"
              className="w-full h-auto "
            />
          </Rows>
          ``
          <Rows className="flex-col lg:flex-row justify-between container mx-auto py-12 px-4 xl:px-0">
            <h3 className="text-5xl">{item.title}</h3>

            <Rows className="flex-col gap-4 max-w-[700px]">
              <h4 className="text-4xl">{item.titleText}</h4>
              <p className="text-lg font-bold">{item.description}</p>
              <ul className="flex flex-col gap-3">
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

      <Rows className="w-full">
        <Image src={wolvesMatch4} alt="Wolves Fun" className="w-full h-auto " />
      </Rows>
    </div>
  );
}
