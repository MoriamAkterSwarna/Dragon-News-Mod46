"use client";
import Marquee from "react-fast-marquee";

const news = [
    {
        _id: "1",
        title: "Breaking News: Major Event Unfolds in the City",
    },
    {
        _id: "2",
        title: "Breaking News: New Policy Announced by the Government",
    },
    {
        _id: "3",
        title: "Breaking News: Sports Team Wins Championship",
    },
]

export default function BreakingNews() {
  return (
    <div className="flex items-center bg-white border py-2 px-4 gap-4">
       <p className="text-base-100 bg-red-500 text-white px-3 py-2">Latest</p>

      <Marquee speed={60} pauseOnHover>
        {news?.map((item) => (
          <span key={item._id} className="mr-16 text-gray-700 text-sm">
            {item.title}
          </span>
        ))}
      </Marquee>
    </div>
  );
}