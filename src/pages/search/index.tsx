"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { Loader } from "../../../components/loader";
import { ProjectDetail } from "../../../components/projectDetail";
import { api } from "../../utils/api";

const Search = () => {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  // const router = useRouter();

  const encodedSearchQuery = encodeURI(searchQuery || "");
  const searchresults = api.search.searchProjects.useQuery({
    query: encodedSearchQuery,
  });

  // if (!encodedSearchQuery) {
  //   router.push("/").catch((e) => console.log(e));
  // }

  if (searchresults.isLoading) {
    return <Loader />;
  }

  if (!searchresults.data) {
    return null;
  }

  return (
    <>
      <span className="text-xl">
        Showing results for:{" "}
        <span className="font-semibold">{searchQuery}</span>
      </span>
      <ProjectDetail queryProjects={searchresults.data} admin={false} />
    </>
  );
};

export default Search;
