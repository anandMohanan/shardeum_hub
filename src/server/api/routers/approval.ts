import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const approvalRouter = createTRPCRouter({
  // create a trpc mutation to create a new sharedium project in the database
  approvalAwaiting: publicProcedure.query(({ ctx }) => {
    const projects = ctx.prisma.sharediumProject.findMany({
      where: { approved: false },
    });
    return projects;
  }),

  changeApproval: publicProcedure
    .input(z.object({ status: z.boolean(), id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const updateProject = ctx.prisma.sharediumProject.update({
        where: { id: input.id },
        data: {
          approved: input.status,
        },
      });
      return updateProject;
    }),
});
