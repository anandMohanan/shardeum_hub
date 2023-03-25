import { useRouter } from "next/router";
import { useState } from "react";

import { useSearchParams } from "next/navigation";

export const SearchInput = () => {
  const search = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string | null>(
    search ? search.get("q") : ""
  );
  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    if (typeof searchQuery !== "string") {
      return;
    }

    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`).catch((e) => console.log(e));
  };
  return (
    <form onSubmit={onSearch} className="flex w-2/3 justify-center">
      <input
        value={searchQuery || ""}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="w-2/3 flex-1 rounded-full bg-zinc-800 px-5 py-1 text-zinc-200 placeholder:text-zinc-400 focus:bg-black focus:outline-none focus:ring-[1px] focus:ring-green-700 sm:px-5 sm:py-3"
        placeholder="What are you looking for?"
      />
    </form>
  );
};
