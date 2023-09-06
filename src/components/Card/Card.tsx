type CardInterface = {
  title: string;
  data: Row[];
};

export function Card({ links }: { links: CardInterface }) {
  console.log(links);
  const _links = links.data.map((link, key) => {
    return (
      <a key={key} href={link.Link.url as string}>
        {link.Name.title[0].plain_text}
      </a>
    );
  });

  return (
    <div className="border py-1 px-3 rounded-md text-slate-100 flex flex-col gap-2">
      <span className="text-lg font-bold">{links.title}</span>
      {_links}
    </div>
  );
}
