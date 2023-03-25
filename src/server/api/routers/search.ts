import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const searchRouter = createTRPCRouter({
  // create a trpc mutation to create a new sharedium project in the database
  searchProjects: publicProcedure
    .input(
      z.object({
        query: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      const posts = ctx.prisma.sharediumProject.findMany({
        where: {
          OR: [
            {
              name: {
                contains: input.query,
                mode: "insensitive",
              },
            },
            {
              keywords: {
                hasSome: input.query,
              },
            },
          ],
        },
      });

      return posts;
    }),
});
