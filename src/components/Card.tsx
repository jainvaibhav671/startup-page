export type CardInterface = {
  href: string;
  name: string;
};

export function Card({ links }: { links: CardInterface[] }) {
  const _links = links.map((link, key) => {
    return (
      <a key={key} href={link.href}>
        {link.name}
      </a>
    );
  });

  return (
    <div className="border py-1 px-3 rounded-md text-slate-100 flex flex-col gap-2">
      {_links}
    </div>
  );
}
