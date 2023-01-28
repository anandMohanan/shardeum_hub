import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const filterbyCategory = createTRPCRouter({
  filterByGaming: publicProcedure.query(({ ctx }) => {
    const gamingProjects = ctx.prisma.sharediumProject.findMany({
      where: { category: "GAMING", approved: true },
    });
    return gamingProjects;
  }),
  filterByNft: publicProcedure.query(({ ctx }) => {
    const gamingProjects = ctx.prisma.sharediumProject.findMany({
      where: { category: "NFT", approved: true },
    });
    return gamingProjects;
  }),
  filterByDefi: publicProcedure.query(({ ctx }) => {
    const gamingProjects = ctx.prisma.sharediumProject.findMany({
      where: { category: "DEFI", approved: true },
    });
    return gamingProjects;
  }),
  filterByOther: publicProcedure.query(({ ctx }) => {
    const gamingProjects = ctx.prisma.sharediumProject.findMany({
      where: { category: "OTHER", approved: true },
    });
    return gamingProjects;
  }),
});
