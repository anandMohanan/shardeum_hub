import { SharediumProject } from "@prisma/client";
import { useState } from "react";
import { api } from "../src/utils/api";
import clsx from "clsx";
import { NextApiRequest } from "next";
import redis from "../src/utils/redis";
import { Item } from "./items";

export const Vote = ({ project }: any) => {
  const [hasVoted, setHasVoted] = useState<Boolean>();
  const [isReleased, setIsReleased] = useState<Boolean>();
  const [isFirst, setIsFirst] = useState<Boolean>();
  const [isLast, setIsLast] = useState<Boolean>();
  const vote = api.redisFunc.addVote.useMutation();
  const getRedisItems = api.redisFunc.getRedisItems.useQuery();
  const getIp = api.redisFunc.getIp.useQuery();
  const ip = getIp.data;
  console.log("ip from vote tsx" + ip);

  //   function Item({
  //     isFirst,
  //     isLast,
  //     isReleased,
  //     hasVoted,
  //     feature,
  //   }:

  //   const onBtnClick = () => {
  //     vote.mutate({ name: project.name });
  //   };

  console.log(getRedisItems.data);

  return (
    <>
      {getRedisItems.data?.map((project, i) => {
        return (
          <Item
            key={i}
            isFirst={i === 0}
            isLast={i === getRedisItems.data.length - 1}
            isReleased={false}
            hasVoted={project.ip === ip}
            feature={project}
            name={project.name}
          />
        );
      })}
    </>
  );
};
