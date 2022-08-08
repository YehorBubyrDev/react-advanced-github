import React from "react";
import { useAppSelector } from "../hooks/redux";

export default function FavoritesPage() {
  const { favourites } = useAppSelector((state) => state.github);

  if (favourites.length === 0) return <p className="text-center">No items.</p>;

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul className="list-none">
        {favourites.map((f) => {
          return (
            <li
              key={f}
              className="py-2 px-4 hover:bg-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <a href={f} target="_blank">
                {f}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
