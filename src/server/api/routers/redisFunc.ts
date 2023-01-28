import { z } from "zod";
import redis from "../../../utils/redis";
import { v4 as uuidv4 } from "uuid";

import { createTRPCRouter, publicProcedure } from "../trpc";

type EntryType = {
  id: string;
  name: string;
  created_at: Date;
  score: number;
  ip: string;
};

export const redisFuncRouter = createTRPCRouter({
  // create a trpc mutation to create a new sharedium project in the database
  addVote: publicProcedure
    .input(
      z.object({
        // id: z.string(),
        name: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const keys = await redis.hkeys("project");
      const id = keys.find((key) => key === input.name);
      if (id) {
        const ip: string =
          (ctx.req.headers["x-forwarded-for"] as string) ||
          (ctx.req.headers["Remote_Addr"] as string) ||
          "NA";
        const count = ip == "NA" ? 1 : await redis.sadd("s:" + input.name, ip);
        console.log(count);

        if (count === 0) {
          // return { error: "you cannot vote" };
          console.log("count ==0");
        } else {
          const entry: EntryType = JSON.parse(
            (await redis.hget("project", id)) || "null"
          ) as EntryType;
          const updated: EntryType = {
            ...entry,
            score: entry.score + 1,
            ip,
          };

          await redis.hset("project", id, JSON.stringify(updated));
          console.log(updated);
          return { updated };
        }
      }
    }),

  createItem: publicProcedure
    .input(
      z.object({
        // id: z.string(),
        name: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      // const newEntry = {
      //   input.id,
      //   input.name,
      //   created_at: Date.now(),
      //       score: 1,
      //       ip: 'NA',
      // }
      const id = uuidv4();
      const newEntry = {
        id: id,
        name: input.name,
        created_at: Date.now(),
        score: 1,
        ip: "NA",
      };

      if (!input.name) {
        // ctx.res.status(400).json({
        //   error: "Feature can not be empty",
        // });
        console.log("input error");
      } else if (input.name.length < 150) {
        await redis.hset("project", id, JSON.stringify(newEntry));
        console.log("input success");
      } else {
        console.log("kundi 150 error");
      }
      // const project = (await redis.hvals("project"))
      //   .map((entry: EntryType) => JSON.parse(entry))
      //   .sort((a: EntryType, b: EntryType) => b.score - a.score);
      // console.log(`from redi ${project}`);

      return newEntry;
    }),
  getRedisItems: publicProcedure.query(async () => {
    const project: EntryType[] = (await redis.hvals("project"))
      .map((entry) => entry as unknown as EntryType)
      .sort((a: EntryType, b: EntryType) => b.score - a.score);
    return project;
  }),

  getIp: publicProcedure.query(({ ctx }) => {
    const ip =
      ctx.req.headers["x-forwarded-for"] ||
      ctx.req.headers["Remote_Addr"] ||
      "NA";

    return ip;
  }),
});
