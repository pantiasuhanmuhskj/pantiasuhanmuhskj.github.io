"use client";
import Image from "next/image";
import CopyButton from "./CopyButton";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  reknumber: string;
  onClick?: () => void; // Optional onClick handler for the button
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  reknumber,
  onClick,
}) => (
  <div className="border rounded-lg overflow-hidden shadow-sm flex flex-col px-5 py-1 text-center items-center justify-center">
    <Image
      src={imageSrc}
      alt={title}
      width={400}
      height={100}
      className="w-full px-5 h-full"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <CopyButton textToCopy={reknumber} />
    </div>
  </div>
);

interface CardGridProps {
  cardData: CardProps[];
}

const CardGrid: React.FC<CardGridProps> = ({ cardData }) => (
  <div className="grid grid-cols-2 gap-1 bg-[#fefefe]">
    {cardData.map((card, index) => (
      <Card key={index} {...card} />
    ))}
  </div>
);

export default CardGrid;
