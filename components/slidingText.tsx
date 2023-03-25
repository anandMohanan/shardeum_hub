import { IBM_Plex_Mono } from "@next/font/google";
import { ibm } from "../src/pages";
import { api } from "../src/utils/api";

export const SlidingText = () => {
  const nftCount = api.project.getNftCount.useQuery();
  const defiCount = api.project.getDefiCount.useQuery();
  const gamingCount = api.project.getGamingCount.useQuery();
  const otherCount = api.project.getOtherCount.useQuery();
  return (
    <div
      className={` ${ibm.className} relative flex overflow-x-hidden bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 dark:bg-gradient-to-r dark:from-purple-200 dark:via-purple-400 dark:to-purple-800`}
    >
      <div className="animate-marquee whitespace-nowrap py-4 lg:py-4">
        <span className="mx-4   text-sm   lg:text-4xl">
          NFT projects: {nftCount.data} |
        </span>
        <span className="mx-4  text-sm   lg:text-4xl">
          Defi projects: {defiCount.data} |
        </span>
        <span className="mx-4  text-sm   lg:text-4xl">
          Gaming projects: {gamingCount.data} |
        </span>
        <span className="mx-4  text-sm   lg:text-4xl">
          Other projects: {otherCount.data} |
        </span>
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-4  filter lg:py-4">
        <span className="mx-4  text-sm  lg:text-4xl">
          NFT projects: {nftCount.data} |
        </span>
        <span className="mx-4  text-sm  lg:text-4xl">
          Defi projects: {defiCount.data} |
        </span>
        <span className="mx-4  text-sm lg:text-4xl">
          Gaming projects: {gamingCount.data} |
        </span>
        <span className="mx-4  text-sm   lg:text-4xl">
          Other projects: {otherCount.data} |
        </span>
      </div>
    </div>
  );
};
