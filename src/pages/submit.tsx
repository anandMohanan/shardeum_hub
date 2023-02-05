import type { SharediumProject } from "@prisma/client";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { api } from "../utils/api";
enum Category {
  DEFI = "DEFI",
  NFT = "NFT",
  GAMING = "GAMING",
  OTHER = "OTHER",
}
const Submit: NextPage = () => {
  const [name, setName] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [discordLink, setDiscordLink] = useState<string>("");
  const [twitterLink, setTwitterLink] = useState<string>("");
  const [githubLink, setGithubLink] = useState<string>("");
  const [website, setWebsite] = useState<string>("");
  const [keyword, setKeyword] = useState<string[]>([]);
  console.log("outside comp");
  const [category, setCategory] = useState<Category>(Category.NFT);
  // call the mutation from the api client (generated by tRPC) and pass the input data as an argument to the mutation
  const [error, setError] = useState<string>("");
  const [resultState, setResultState] = useState<SharediumProject>();
  const res = api.project.createSharediumProject.useMutation();

  const router = useRouter();
  const handleKeywordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value.split(","));
    console.log(keyword);
  };

  const onSubmitBtn = () => {
    console.log(name, about, description, discordLink, twitterLink, website);
    if (
      name == "" ||
      about == "" ||
      description == "" ||
      discordLink == "" ||
      twitterLink == "" ||
      website == ""
    ) {
      setError("Please fill out everything");
    } else {
      res.mutate({
        name,
        about,
        description,
        discordLink,
        twitterLink,
        website,
        category,
        githubLink,
        keywords: keyword,
      });
    }
  };

  return (
    <>
      {res.isError ? (
        <>
          <h1>
            Error -<span> {res.error.message}</span>{" "}
          </h1>
        </>
      ) : (
        <>
          <main>
            <section className="relative h-full min-h-screen w-full py-40">
              <div
                className="absolute top-0 h-full w-full bg-blueGray-800 bg-full bg-no-repeat"
                style={{
                  backgroundImage:
                    "url('https://raw.githubusercontent.com/creativetimofficial/notus-nextjs/main/public/img/register_bg_2.png')",
                }}
              ></div>
              <div className="container mx-auto h-full px-4">
                <div className="flex h-full content-center items-center justify-center">
                  <div className="w-full px-4 ">
                    <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0 bg-blueGray-200 shadow-lg">
                      <div className="mb-0 rounded-t px-6 py-6">
                        <div className="mb-3 text-center">
                          <h6 className="text-sm font-bold text-blueGray-500">
                            Submit your project
                          </h6>
                        </div>

                        <hr className="border-b-1 mt-6 border-blueGray-300" />
                      </div>
                      <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
                        <form>
                          <div className="relative mb-3 w-full">
                            <label
                              htmlFor="name"
                              className="mb-3 block text-base font-medium text-blueGray-600"
                            >
                              Name
                            </label>
                            <input
                              required
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Name of the project"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                          </div>

                          <div className="relative mb-3 w-full">
                            <label
                              htmlFor="about"
                              className="mb-3 block text-base font-medium text-blueGray-600"
                            >
                              About
                            </label>
                            <input
                              required
                              type="text"
                              name="about"
                              placeholder="Short Description about the project"
                              value={about}
                              onChange={(e) => setAbout(e.target.value)}
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                          </div>
                          <div className="relative mb-3 w-full">
                            <label
                              htmlFor="Description"
                              className="mb-3 block text-base font-medium text-blueGray-600"
                            >
                              Description
                            </label>
                            <input
                              required
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Full Description for your project"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                          </div>
                          <div className="relative mb-3 w-full">
                            <label
                              htmlFor="Website"
                              className="mb-3 block text-base font-medium text-blueGray-600"
                            >
                              Website
                            </label>
                            <input
                              required
                              type="text"
                              name="Website"
                              id="website"
                              placeholder="website link"
                              value={website}
                              onChange={(e) => setWebsite(e.target.value)}
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                          </div>
                          <div className="relative mb-3 w-full">
                            <label
                              htmlFor="Discord link"
                              className="mb-3 block text-base font-medium text-blueGray-600"
                            >
                              Discord
                            </label>
                            <input
                              required
                              type="text"
                              name="Discord"
                              id="Discord"
                              placeholder="discord server link"
                              value={discordLink}
                              onChange={(e) => setDiscordLink(e.target.value)}
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                          </div>
                          <div className="relative mb-3 w-full">
                            <label
                              htmlFor="Twitter link"
                              className="mb-3 block text-base font-medium text-blueGray-600"
                            >
                              Twitter Link
                            </label>
                            <input
                              required
                              type="text"
                              name="Twitter"
                              id="Twitter"
                              placeholder="twitter link"
                              value={twitterLink}
                              onChange={(e) => setTwitterLink(e.target.value)}
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                          </div>
                          <div className="relative mb-3 w-full">
                            <label
                              htmlFor="Github link"
                              className="mb-3 block text-base font-medium text-blueGray-600"
                            >
                              Github
                            </label>
                            <input
                              required
                              type="text"
                              name="Github"
                              id="Github"
                              placeholder="github link"
                              value={githubLink}
                              onChange={(e) => setGithubLink(e.target.value)}
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                          </div>
                          <label className="mb-3 block text-base font-medium text-blueGray-600">
                            Category
                          </label>
                          <select
                            name="CATEGORY"
                            onChange={(e) =>
                              setCategory(e.target.value as Category)
                            }
                          >
                            <option value={Category.NFT}>NFT</option>
                            <option value={Category.DEFI}>DEFI</option>
                            <option value={Category.GAMING}>GAMING</option>
                            <option value={Category.OTHER}>OTHER</option>
                          </select>
                          <div className="relative mb-3 w-full">
                            <label className="mb-3 block text-base font-medium text-blueGray-600">
                              Keywords
                            </label>
                            <input
                              required
                              type="text"
                              placeholder="Type your keywords separated with ,"
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              onChange={(e) => handleKeywordChange(e)}
                            />
                          </div>
                          <div className="mt-6 text-center">
                            {/* <button
                              className="mr-1 mb-1 w-full rounded bg-slate-600 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-blueGray-600"
                              type="button"
                              onClick={() => onSubmitBtn()}
                            >
                              Submit your project */}
                            <input
                              className="mr-1 mb-1 w-full cursor-pointer rounded bg-slate-600 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-blueGray-600"
                              type="submit"
                              value="Submit your project"
                              onClick={() => onSubmitBtn()}
                            />
                            {/* </button> */}
                          </div>
                        </form>
                        {error != "" ? (
                          <p className="text-red-700">{error}</p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </>
      )}
    </>
  );
};

export default Submit;
