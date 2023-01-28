import clsx from "clsx";
import { api } from "../src/utils/api";

type ProjectType = {
  id: string;
  name: string;
  score: number;
  ip: string;
};

export const Item = ({
  isFirst,
  isLast,
  isReleased,
  hasVoted,
  feature,
  name,
}: {
  isFirst: boolean;
  isLast: boolean;
  isReleased: boolean;
  hasVoted: boolean;
  feature: ProjectType;
  name: string;
}) => {
  const vote = api.redisFunc.addVote.useMutation();
  const getRedisItems = api.redisFunc.getRedisItems.useQuery();

  //   function Item({
  //     isFirst,
  //     isLast,
  //     isReleased,
  //     hasVoted,
  //     feature,
  //   }:

  const onBtnClick = () => {
    vote.mutate({ name: name });
  };

  return (
    <div
      className={clsx(
        "mx-8 flex items-center border-t border-l border-r p-6",
        isFirst && "rounded-t-md",
        isLast && "rounded-b-md border-b"
      )}
    >
      <button
        className={clsx(
          "mr-4 h-8 w-8 min-w-[2rem] rounded-full ring-1 ring-gray-200 focus:outline-none focus:ring focus:ring-blue-300",
          (isReleased || hasVoted) &&
            "cursor-not-allowed bg-green-100 ring-green-300"
        )}
        disabled={isReleased || hasVoted}
        onClick={() => onBtnClick()}
      >
        {isReleased ? "✅" : "👍"}
      </button>
      <h3 className="text w-full text-left font-semibold">{feature.name}</h3>
      <div className="ml-2 rounded-xl bg-gray-200 px-2 text-sm text-gray-700">
        {feature.score}
      </div>
    </div>
  );
};
