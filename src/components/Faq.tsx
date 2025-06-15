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
      question: "What is Whimsy Wolves?",
      answer:
        "Whimsy Wolves is a captivating collection of 7,777 digital wolves on the blockchain.",
    },
    {
      question: "What blockchain is Whimsy Wolves on?",
      answer: "Whimsy Wolves will be living on the Ethereum blockchain. ",
    },
    {
      question: "What is the Mission of Whimsy Wolves?",
      answer:
        "Whimsy Wolves is a family-friendly, creative, and innovative project designed to bring joy, connection, and imagination to people of all ages. <br/><br/> Our mission is to build a beloved brand that connects people through storytelling, art, and community engagement, creating meaningful experiences that resonate in everyday life, guided by our core values: Artistry, Generosity, and Innovation. ",
    },
    {
      question: "What is the Whimsy Wolves about?",
      answer:
        "Our primary focus is on providing a family-friendly space where creativity, imagination, and joy thrive. Whimsy Wolves is designed to be a safe and enjoyable experience for users of all ages, ensuring that families, artists, collectors and enthusiasts can explore, play, and connect in a wholesome online environment.",
    },
    {
      question: "How do I participate in the Whimsy Wolves pre-sale?",
      answer:
        "If you would like to participate in the pre-sale, you must be on the Whimsylist and there are several opportunities to participate. Follow our social media accounts and join our Discord server. We will have announcements for raffle events and social media engagement campaigns. For specific details head over to Medium for more information.",
    },
    {
      question: "What is Whimsy Wolves roadmap?",
      answer:
        "Whimsy Wolves roadmap strategy centers on building strong Intellectual Property, starting with a focus on short-form media to quickly capture attention and engage our audience. From there, we’ll bridge into tangible real-world engagements, such as merchandise and partnerships, to solidify the brand’s presence and deepen its connection with the public. IP is the cornerstone of Whimsy Wolves, and every step we take is designed to strengthen and expand its recognition and value.",
    },
    {
        question: "What is Whimsy Wolves' Intellectual Property Policy?",
        answer: "Whimsy Wolves grants full ownership of the purchased non-fungible token and its associated artwork to the buyer, managed through the Ethereum blockchain. Owners are allowed personal and commercial use of the artwork, including displaying it on verified marketplaces and third-party websites. Additionally, owners can create and sell derivative works for commercial purposes. However, modifications, use in hate speech or unauthorized commercial products, and attempts to trademark or acquire additional IP rights for the artwork are prohibited. Furthermore, holders of the non-fungible tokens are not permitted to use the artwork to represent Whimsy Wolves or use the Whimsy Wolves trademark in any manner."
    }
  ];

  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  const handleQuestionClick = (question: string) => {
    setSelectedQuestion(selectedQuestion === question ? null : question);
  };

  return (
    <section
      id="faq"
      className={`w-full container mx-auto px-4 xl:px-0 py-20 ${sectionClass}`}
    >
      <Rows className="justify-center mb-12">
        <h2 className="text-6xl">FAQ</h2>
      </Rows>
      <Rows className="flex-col gap-4">
        {faqContent.map((item, index) => (
          <Rows
            onClick={() => handleQuestionClick(item.question)}
            className={`justify-between ${
              selectedQuestion === item.question
                ? "items-start"
                : "items-center"
            } border-[3px] border-black p-8 rounded-lg cursor-pointer hover:bg-gray-400/10`}
            key={index}
          >
            <Rows className="flex-col gap-3">
              <h3
                className={`text-2xl  ${
                  selectedQuestion === item.question ? "text-primaryColor" : ""
                }`}
              >
                {item.question}
              </h3>
              {selectedQuestion === item.question && <p dangerouslySetInnerHTML={{__html: item.answer}}></p>}
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
