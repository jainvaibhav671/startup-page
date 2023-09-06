type Row = {
    Link: {
        id: string,
        type: "url",
        url: string | null
    },
    Name: {
        id: "title",
        type: "title",
        title: {
            type: "text",
            text: {
                content: string,
                link: string | null
            }
            plain_text: string,
            href: string | null
        }[]
    }
}

type InlineDatabase = {
    object: "block",
    type: "child_database",
    id: string,
    has_children: boolean,
    archived: boolean,
    child_database: {
        title: string
    }
}