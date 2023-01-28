import { createTRPCRouter } from "./trpc";
import { projectRouter } from "./routers/project";
import { filterbyCategory } from "./routers/filterbyCategory";
import { approvalRouter } from "./routers/approval";
import { redisFuncRouter } from "./routers/redisFunc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  project: projectRouter,
  filterByCategory: filterbyCategory,
  approval: approvalRouter,
  redisFunc: redisFuncRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
