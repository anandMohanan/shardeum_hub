import { useRouter } from "next/router";
import { type ChangeEvent, useState } from "react";
// import { useForm, type SubmitHandler } from "react-hook-form";
import { api } from "../src/utils/api";
import { Loader } from "./loader";
import { marked } from "marked";
import { supabase } from "../src/utils/supabase";
import { AlertComponent } from "./alert";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

enum Category {
  DEFI = "DEFI",
  NFT = "NFT",
  GAMING = "GAMING",
  OTHER = "OTHER",
}

interface inputs {
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
}

export const SubmitForm = () => {
  const [keyword, setKeyword] = useState<string[]>([]);
  const inputObj: {
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
  } = {
    name: "",
    about: "",
    category: Category.OTHER,
    description: "",
    discord: "",
    email: "",
    github: "",
    logo: "",
    twitter: "",
    website: "",
  };
  const [controlData, setControlData] = useState(inputObj);
  const router = useRouter();
  const [submitDone, setSubmitDone] = useState<boolean>(false);
  console.log(controlData);

  const handleKeywordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value.split(","));
  };
  const res = api.project.createSharediumProject.useMutation();
  const Submit = () => {
    res.mutate({
      about: controlData.about,
      category: controlData.category,
      contactEmail: controlData.email,
      description: controlData.description,
      discordLink: controlData.discord,
      githubLink: controlData.github,
      keywords: keyword,
      logoUrl: controlData.logo,
      name: controlData.name,
      twitterLink: controlData.twitter,
      website: controlData.website,
    });

    console.log("submitted successfully");
  };

  const uploadFiles = async (e: ChangeEvent<HTMLInputElement>) => {
    let file;
    if (e.target.files) {
      file = e.target.files[0];
    }
    console.log(file);

    const { data, error } = await supabase.storage
      .from("logo")
      .upload(`${controlData.name}/${file?.name!}`, file as File);
    const { data: imageList, error: imageError } = await supabase.storage
      .from("logo")
      .list(`${controlData.name}`, {
        limit: 1,
        offset: 0,
      });
    console.log("data", data);

    imageList?.forEach((image) => {
      const { data } = supabase.storage
        .from("logo")
        .getPublicUrl(`${controlData.name}/${image.name}`);
      setControlData({ ...controlData, logo: data.publicUrl });
    });
    console.log("logo", controlData.logo);
  };

  if (res.isLoading) return <Loader />;
  // if (res.status == "success")
  if (res.isSuccess) {
    router.push("/").catch((e) => console.log(e));
    return <AlertComponent process="submit" />;
  }

  return (
    <>
      <form onSubmit={() => Submit()}>
        <div className="mb-4">
          <label className="block py-1 text-sm font-medium dark:text-white">
            <span className="">Name of the Project</span>
          </label>
          <input
            required
            type="text"
            onChange={(e) => {
              setControlData({ ...controlData, name: e.target.value });
            }}
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
            onChange={(e) => {
              setControlData({ ...controlData, about: e.target.value });
            }}
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
            onChange={(e) => {
              setControlData({ ...controlData, description: e.target.value });
            }}
            className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-secondary dark:bg-slate-900 dark:text-gray-400 sm:p-4"
            placeholder="Full Description about your project"
          />
        </div>
        <div>
          <h2>Preview:</h2>
          {/* <div
          id="markdown-output"
          dangerouslySetInnerHTML={{ __html: marked(controlData.description) }}
        /> */}
          <ReactMarkdown
            children={controlData.description}
            remarkPlugins={[remarkGfm]}
          />
        </div>
        <div className="mb-4">
          <label className="block py-1 text-sm font-medium dark:text-white">
            <span className="">Website Link</span>
          </label>
          <input
            required
            type="text"
            onChange={(e) => {
              setControlData({ ...controlData, website: e.target.value });
            }}
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
            type="email"
            onChange={(e) => {
              setControlData({ ...controlData, email: e.target.value });
            }}
            className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-secondary dark:bg-slate-900 dark:text-gray-400 sm:p-4"
            placeholder="Email Address"
          />
        </div>
        <div className="mb-4">
          <label className="block py-1 text-sm font-medium dark:text-white">
            <span className="">Discord Link</span>
          </label>
          <input
            onChange={(e) => {
              setControlData({ ...controlData, discord: e.target.value });
            }}
            type="url"
            className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-secondary dark:bg-slate-900 dark:text-gray-400 sm:p-4"
            placeholder="Discord Link"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="hs-hero-password-2"
            className="block py-1 text-sm font-medium dark:text-white"
          >
            <span className="">Project Logo</span>
          </label>

          <input
            type="file"
            accept="image/*"
            name="title"
            onChange={(e) => {
              uploadFiles(e).catch((err) => console.log(err));
            }}
            id="form-nftImage"
            className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-secondary dark:bg-slate-900 dark:text-gray-400 sm:p-4"
            placeholder="Project Logo"
            required
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
            onChange={(e) => {
              setControlData({ ...controlData, github: e.target.value });
            }}
            type="url"
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
            type="url"
            onChange={(e) => {
              setControlData({ ...controlData, twitter: e.target.value });
            }}
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
            onChange={(e) => {
              setControlData({
                ...controlData,
                category: e.target.value as Category,
              });
            }}
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
            // onClick={() => Submit()}
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md border border-transparent bg-gradient-to-r from-purple-400 to-pink-600  py-3 px-4   text-sm font-semibold text-white transition-all hover:from-pink-600 hover:to-purple-400  focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 dark:focus:ring-offset-gray-800 sm:p-4"
          />
        </div>
      </form>
    </>
  );
};
