import React from "react";
import {
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
  RiTimeLine,
} from "react-icons/ri";
import { heroCardsData } from "../../../Data/Contact";
import ContactCard from "./ContactCard";

function HeroCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {heroCardsData.map((card) => (
        <ContactCard key={card.id} {...card} />
      ))}
    </div>
  );
}

export default HeroCards;
