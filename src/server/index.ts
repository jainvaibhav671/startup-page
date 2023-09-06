import { database_id, notion } from "@/app/_notion/notion";
import * as trpc from "@/server/trpc"

export const appRouter = trpc.router({
  getDatabase: trpc.publicProcedure.query(async () => {
    if (database_id === undefined) return [];

    const childs: InlineDatabase[] = await notion.blocks.children.list({
      block_id: database_id
    }).then(res => {
      return res.results as InlineDatabase[]
    });

    let res = [];
    for (let item of childs.slice(0, childs.length - 1)) {

      console.log(item.child_database.title)

      const x = await notion.databases.query({
        database_id: item.id
      })

      res.push({
        title: item.child_database.title,
        // @ts-ignore
        data: x.results.map(i => i.properties) as Row[]
      })
    }

    console.log("Response:", res)

    return res
  })
})

export type AppRouter = typeof appRouter;
