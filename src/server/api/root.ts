import { createTRPCRouter } from "./trpc";
import { projectRouter } from "./routers/project";
import { filterbyCategory } from "./routers/filterbyCategory";
import { approvalRouter } from "./routers/approval";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  project: projectRouter,
  filterByCategory: filterbyCategory,
  approval: approvalRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
