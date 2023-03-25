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
    const nftProjects = ctx.prisma.sharediumProject.findMany({
      where: { category: "NFT", approved: true },
    });
    return nftProjects;
  }),
  filterByDefi: publicProcedure.query(({ ctx }) => {
    const defiProjects = ctx.prisma.sharediumProject.findMany({
      where: { category: "DEFI", approved: true },
    });
    return defiProjects;
  }),
  filterByOther: publicProcedure.query(({ ctx }) => {
    const otherProjects = ctx.prisma.sharediumProject.findMany({
      where: { category: "OTHER", approved: true },
    });
    return otherProjects;
  }),

  // ---------------------
  fiveNft: publicProcedure.query(({ ctx }) => {
    const nftProjects = ctx.prisma.sharediumProject.findMany({
      where: { category: "NFT", approved: true },
      take: 5,
    });
    return nftProjects;
  }),
  fiveDefi: publicProcedure.query(({ ctx }) => {
    const defiProjects = ctx.prisma.sharediumProject.findMany({
      where: { category: "DEFI", approved: true },
      take: 5,
    });
    return defiProjects;
  }),
  fiveOther: publicProcedure.query(({ ctx }) => {
    const otherProjects = ctx.prisma.sharediumProject.findMany({
      where: { category: "OTHER", approved: true },
      take: 5,
    });
    return otherProjects;
  }),
  fiveGaming: publicProcedure.query(({ ctx }) => {
    const gamingProjects = ctx.prisma.sharediumProject.findMany({
      where: { category: "GAMING", approved: true },
      take: 5,
    });
    return gamingProjects;
  }),
});
