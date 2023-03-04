import { api } from "../src/utils/api";

export const SlidingText = () => {
  const nftCount = api.project.getNftCount.useQuery();
  const defiCount = api.project.getDefiCount.useQuery();
  const gamingCount = api.project.getGamingCount.useQuery();
  const otherCount = api.project.getOtherCount.useQuery();
  return (
    <div className="relative flex overflow-x-hidden bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className="animate-marquee whitespace-nowrap py-8">
        <span className="mx-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-clip-text text-4xl italic text-transparent">
          NFT projects: {nftCount.data}
        </span>
        <span className="mx-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-clip-text text-4xl italic text-transparent">
          Defi projects: {defiCount.data}
        </span>
        <span className="mx-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-clip-text text-4xl italic text-transparent">
          Gaming projects: {gamingCount.data}
        </span>
        <span className="mx-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-clip-text text-4xl italic text-transparent">
          Other projects: {otherCount.data}
        </span>
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-8">
        <span className="mx-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-clip-text text-4xl italic text-transparent">
          NFT projects: {nftCount.data}
        </span>
        <span className="mx-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-clip-text text-4xl italic text-transparent">
          Defi projects: {defiCount.data}
        </span>
        <span className="mx-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-clip-text text-4xl italic text-transparent">
          Gaming projects: {gamingCount.data}
        </span>
        <span className="mx-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-clip-text text-4xl italic text-transparent">
          Other projects: {otherCount.data}
        </span>
      </div>
    </div>
  );
};
