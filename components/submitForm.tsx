import { useRouter } from "next/router";
import { type ChangeEvent, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { api } from "../src/utils/api";
import { Loader } from "./loader";

enum Category {
  DEFI = "DEFI",
  NFT = "NFT",
  GAMING = "GAMING",
  OTHER = "OTHER",
}

type inputs = {
  name: string;
  about: string;
  description: string;
  website: string;
  email: string;
  discord: string;
  logo: string;
  github: string;
  twitter: string;

  category: Category;
};

export const SubmitForm = () => {
  const [keyword, setKeyword] = useState<string[]>([]);
  const router = useRouter();
  const [submitDone, setSubmitDone] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<inputs>();

  const handleKeywordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value.split(","));
    console.log(keyword);
  };
  const res = api.project.createSharediumProject.useMutation();
  const onSubmit: SubmitHandler<inputs> = (data) => {
    res.mutate({
      about: data.about,
      category: data.category,
      contactEmail: data.email,
      description: data.description,
      discordLink: data.discord,
      githubLink: data.github,
      keywords: keyword,
      logoUrl: data.logo,
      name: data.name,
      twitterLink: data.twitter,
      website: data.website,
    });

    if (res.isLoading) return <Loader />;

    console.log("submitted successfully");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block py-1 text-sm font-medium dark:text-white">
            <span className="">Name of the Project</span>
          </label>
          <input
            required
            type="text"
            {...register("name")}
            className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-secondary dark:bg-slate-900 dark:text-gray-400 sm:p-4"
            placeholder="Project name"
          />
        </div>

        <div className="mb-4">
          <label className="block py-1 text-sm font-medium dark:text-white">
            <span className="">Short Description about the project</span>
          </label>
          <input
            required
            {...register("about")}
            type="text"
            className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-secondary dark:bg-slate-900 dark:text-gray-400 sm:p-4"
            placeholder="Short description"
          />
        </div>

        <div className="mb-4">
          <label className="block py-1 text-sm font-medium dark:text-white">
            <span className="">Description</span>
          </label>
          <textarea
            required
            {...register("description")}
            className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-secondary dark:bg-slate-900 dark:text-gray-400 sm:p-4"
            placeholder="Full Description about your project"
          />
        </div>
        <div className="mb-4">
          <label className="block py-1 text-sm font-medium dark:text-white">
            <span className="">Website Link</span>
          </label>
          <input
            required
            type="text"
            {...register("website")}
            className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-secondary dark:bg-slate-900 dark:text-gray-400 sm:p-4"
            placeholder="Website"
          />
        </div>
        <div className="mb-4">
          <label className="block py-1 text-sm font-medium dark:text-white">
            <span className="">Email Address</span>
          </label>
          <input
            required
            type="text"
            {...register("email")}
            className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-secondary dark:bg-slate-900 dark:text-gray-400 sm:p-4"
            placeholder="Email Address"
          />
        </div>
        <div className="mb-4">
          <label className="block py-1 text-sm font-medium dark:text-white">
            <span className="">Discord Link</span>
          </label>
          <input
            required
            {...register("discord")}
            type="text"
            className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-secondary dark:bg-slate-900 dark:text-gray-400 sm:p-4"
            placeholder="Discord Link"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="hs-hero-password-2"
            className="block py-1 text-sm font-medium dark:text-white"
          >
            <span className="">Logo url</span>
          </label>
          <input
            required
            type="text"
            {...register("logo")}
            className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-secondary dark:bg-slate-900 dark:text-gray-400 sm:p-4"
            placeholder="Logo url"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="hs-hero-password-2"
            className="block py-1 text-sm font-medium dark:text-white"
          >
            <span className="">Github Link</span>
          </label>
          <input
            required
            {...register("github")}
            type="text"
            className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-secondary dark:bg-slate-900 dark:text-gray-400 sm:p-4"
            placeholder="Github Link"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="hs-hero-password-2"
            className="block py-1 text-sm font-medium dark:text-white"
          >
            <span className="">Twitter Link</span>
          </label>
          <input
            required
            type="text"
            {...register("twitter")}
            className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-secondary dark:bg-slate-900 dark:text-gray-400 sm:p-4"
            placeholder="Twitter Link"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="hs-hero-password-2"
            className="block py-1 text-sm font-medium dark:text-white"
          >
            <span className="">Keywords</span>
          </label>
          <input
            required
            type="text"
            onChange={(e) => handleKeywordChange(e)}
            className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-secondary dark:bg-slate-900 dark:text-gray-400 sm:p-4"
            placeholder="easy,efficient,shardeum,evm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="hs-hero-password-2"
            className="block py-1 text-sm font-medium dark:text-white"
          >
            <span className="">Categories</span>
          </label>
          <select
            {...register("category")}
            className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-secondary dark:bg-slate-900 dark:text-gray-400 sm:p-4"
          >
            <option value={Category.NFT}>NFT</option>
            <option value={Category.DEFI}>DEFI</option>
            <option value={Category.GAMING}>GAMING</option>
            <option value={Category.OTHER}>OTHER</option>
          </select>
        </div>

        <div className="grid">
          <input
            type="submit"
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md border border-transparent bg-gradient-to-r from-purple-400 to-pink-600  py-3 px-4   text-sm font-semibold text-white transition-all hover:from-pink-600 hover:to-purple-400  focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 dark:focus:ring-offset-gray-800 sm:p-4"
          />
        </div>
      </form>
      {submitDone && (
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
          <div
            className="max-w-xs rounded-md border bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800"
            role="alert"
          >
            <div className="p-2 sm:p-4">
              <h3 className="text-xs font-semibold text-gray-800 dark:text-white sm:text-base">
                Submitted Successfully, we will notify the update to you soon
              </h3>
              <h2 className="mt-10 mb-7 text-center text-2xl font-bold lg:text-4xl">
                Redirecting back to
                <span className=" bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent  hover:from-pink-600 hover:to-purple-400">
                  /
                </span>{" "}
              </h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
