
import { Client } from "@notionhq/client";

export const notion_token = process.env.NEXT_PUBLIC_NOTION_TOKEN;
export const database_id = process.env.NEXT_PUBLIC_DATABASE_ID;

export const notion = new Client({ auth: notion_token })
