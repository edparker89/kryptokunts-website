"use client";

import React, { useState } from "react";
import Rows from "./Rows";
import { Icon } from "@iconify/react";

interface faqProps {
  question: string;
  answer: string;
}

export const Faq = ({ sectionClass }: { sectionClass?: string }) => {
  const faqContent: Array<faqProps> = [
    {
      question: "What is KryptoKunts?",
      answer:
        "KryptoKunts is a collection of 1,111 unique zombie-themed NFTs. We blend dark humour, art, and environmental impact — hoping to prevent the impending apocalypse by donating a portion of mint proceeds to real-world habitat restoration 🧟‍♂️ 🌱",
    },
    {
      question: "What blockchain is KryptoKunts on?",
      answer:
        "KryptoKunts lives on the Solana blockchain — chosen for its speed, low fees, and eco-friendly design. Unlike energy-heavy networks, Solana runs efficiently and uses a fraction of the power of traditional blockchains, aligning perfectly with our mission to support real-world conservation and sustainability 🌿⚡",
    },
    {
      question: "What is the Mission of KryptoKunts",
      answer:
        "Our mission is to bridge digital art with real-world impact. KryptoKunts uses zombie-themed NFTs to raise awareness of the apocalyptic impact human activity is having on the planet, and to fund IRL habitat restoration as a result. By donating 10% of mint proceeds to conservation projects, we're turning degen energy into something that gives life back to the planet 🌍💚",
    },
    {
      question: "How can I join the KryptoKunts whitelist?",
      answer:
        "You can join the whitelist by getting involved with the community — follow us on X, join the Horde on Discord (Disc-Horde...?), take part in raids, and look out for special WL giveaways. Active, supportive undead degens always rise to the top 🧟‍♂️🔥",
    },
    {
      question: "What is KryptoKunts' Intellectual Property Policy?",
      answer:
        "KryptoKunts grants full ownership of the purchased non-fungible token and its associated artwork to the buyer, managed through the Solana blockchain. Owners are allowed personal and commercial use of the artwork, including displaying it on verified marketplaces and third-party websites. Additionally, owners can create and sell derivative works for commercial purposes. However, modifications, use in hate speech or unauthorized commercial products, and attempts to trademark or acquire additional IP rights for the artwork, are prohibited. Furthermore, holders of the non-fungible tokens are not permitted to use the artwork to represent KryptoKunts or use the KryptoKunts trademark in any manner.",
    },
  ];

  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  const handleQuestionClick = (question: string) => {
    setSelectedQuestion(selectedQuestion === question ? null : question);
  };

  return (
    <section
      id="faq"
      className={`w-full container mx-auto px-4 xl:px-0 py-10 ${sectionClass}`}
    >
      {/* Glowing Title */}
      <Rows className="justify-center mb-12">
        <h3
          className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] xl:text-[72px] text-center text-white font-bold uppercase"
          style={{
            textShadow:
              "0 0 15px #698362aa, 0 0 30px #69836288, 0 0 45px #698362cc",
          }}
        >
          FAQ
        </h3>
      </Rows>

      {/* Questions */}
      <Rows className="flex-col gap-4">
        {faqContent.map((item, index) => (
          <Rows
            onClick={() => handleQuestionClick(item.question)}
            className={`justify-between ${
              selectedQuestion === item.question ? "items-start" : "items-center"
            } border-[3px] border-black p-8 rounded-lg cursor-pointer hover:bg-gray-400/10`}
            key={index}
          >
            <Rows className="flex-col gap-3">
              <h4
                className={`text-4xl text-white ${
                  selectedQuestion === item.question ? "text-[#b7c8a3]" : ""
                }`}
              >
                {item.question}
              </h4>
              {selectedQuestion === item.question && (
                <p
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                  className="text-white/90 text-xl leading-relaxed"
                ></p>
              )}
            </Rows>

            <Rows>
              {selectedQuestion === item.question ? (
                <Icon icon="mdi:minus" width="40" height="40" />
              ) : (
                <Icon icon="mdi:plus" width="40" height="40" />
              )}
            </Rows>
          </Rows>
        ))}
      </Rows>
    </section>
  );
};
