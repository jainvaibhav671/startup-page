import { appRouter } from "@/server";
import { httpBatchLink } from "@trpc/client";

export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: "http://127.0.0.1:3000/api/trpc"
    })
  ]
})