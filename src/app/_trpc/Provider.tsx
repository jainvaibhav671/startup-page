"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "./client";
import { httpBatchLink } from "@trpc/client";

export default function Provider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient({});
  const trpcClient = trpc.createClient({
    links: [
      httpBatchLink({
        url: "http://127.0.0.1:3000/api/trpc"
      })
    ]
  })

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        { children }
      </QueryClientProvider>
    </trpc.Provider>
  )
}
