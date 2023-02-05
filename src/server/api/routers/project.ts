import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

const VALUES = ["DEFI", "NFT", "GAMING", "OTHER"] as const;

export const projectRouter = createTRPCRouter({
  // create a trpc mutation to create a new sharedium project in the database
  createSharediumProject: publicProcedure
    .input(
      z.object({
        name: z.string(),
        about: z.string(),
        description: z.string(),
        twitterLink: z.string(),
        discordLink: z.string(),
        website: z.string(),
        category: z.enum(VALUES),
        keywords: z.array(z.string()),
        githubLink: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const newProject = await ctx.prisma.sharediumProject.create({
        data: {
          about: input.about,
          description: input.description,
          discordLink: input.discordLink,
          name: input.name,
          twitterLink: input.twitterLink,
          githubLink: input.githubLink,

          website: input.website,
          category: input.category,
          keywords: input.keywords,
        },
      });

      return newProject;
    }),

  getProjectCount: publicProcedure.query(({ ctx }) => {
    const count = ctx.prisma.sharediumProject.count({
      where: { approved: true },
    });
    return count;
  }),

  getAllProjects: publicProcedure.query(({ ctx }) => {
    const allProjects = ctx.prisma.sharediumProject.findMany({ take: 10 });
    return allProjects;
  }),

  getProjectByName: publicProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      const project = ctx.prisma.sharediumProject.findUnique({
        where: {
          name: input.name,
        },
      });
      return project;
    }),
});
