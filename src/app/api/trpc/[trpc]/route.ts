import { appRouter } from "@/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { NextResponse } from "next/server";

const handler = async (req: Request) => {
  const res = await fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => ({}),
  }).then(res => res.json());

  return NextResponse.json(res);
};

export { handler as GET, handler as POST };