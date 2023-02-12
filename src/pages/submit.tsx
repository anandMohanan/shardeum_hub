import type { SharediumProject } from "@prisma/client";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { type ChangeEvent, useState } from "react";
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
          <div className="overflow-hidden">
            <div className="mx-auto max-w-[85rem] px-4 py-20 sm:px-6 lg:px-8">
              <div className="relative mx-auto grid max-w-4xl space-y-5 sm:space-y-10">
                <div className=" text-center">
                  <p className="mb-3 bg-gradient-to-bl from-purple-400 to-pink-600 bg-clip-text text-base font-extrabold tracking-wide text-transparent  hover:from-pink-600 hover:to-purple-400  md:text-3xl lg:text-3xl ">
                    Innovate &lt; &gt; Decentralize &lt; &gt; Thrive
                  </p>
                  <h1 className="text-base font-bold text-gray-800 dark:text-gray-200 sm:text-base md:text-3xl lg:text-5xl lg:leading-tight">
                    Bring your vision to life with Shardeum
                  </h1>
                  <h3 className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text p-4 font-semibold text-transparent hover:from-pink-600 hover:to-purple-400 lg:text-3xl">
                    Submit your project now
                  </h3>
                </div>

                <form>
                  <div className="mb-4">
                    <label className="block py-1 text-sm font-medium dark:text-white">
                      <span className="">Name of the Project</span>
                    </label>
                    <input
                      required
                      type="text"
                      className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-secondary dark:bg-slate-900 dark:text-gray-400 sm:p-4"
                      placeholder="Project name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block py-1 text-sm font-medium dark:text-white">
                      <span className="">
                        Short Description about the project
                      </span>
                    </label>
                    <input
                      required
                      type="text"
                      className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-secondary dark:bg-slate-900 dark:text-gray-400 sm:p-4"
                      placeholder="Short description"
                      value={about}
                      onChange={(e) => setAbout(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block py-1 text-sm font-medium dark:text-white">
                      <span className="">Description</span>
                    </label>
                    <textarea
                      required
                      className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-secondary dark:bg-slate-900 dark:text-gray-400 sm:p-4"
                      placeholder="Full Description about your project"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block py-1 text-sm font-medium dark:text-white">
                      <span className="">Website Link</span>
                    </label>
                    <input
                      required
                      type="text"
                      className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-secondary dark:bg-slate-900 dark:text-gray-400 sm:p-4"
                      placeholder="Website"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block py-1 text-sm font-medium dark:text-white">
                      <span className="">Discord Link</span>
                    </label>
                    <input
                      required
                      type="text"
                      className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-secondary dark:bg-slate-900 dark:text-gray-400 sm:p-4"
                      placeholder="Discord Link"
                      value={discordLink}
                      onChange={(e) => setDiscordLink(e.target.value)}
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
                      type="texr"
                      className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-secondary dark:bg-slate-900 dark:text-gray-400 sm:p-4"
                      placeholder="Github Link"
                      value={githubLink}
                      onChange={(e) => setGithubLink(e.target.value)}
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
                      className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-secondary dark:bg-slate-900 dark:text-gray-400 sm:p-4"
                      placeholder="Twitter Link"
                      value={twitterLink}
                      onChange={(e) => setTwitterLink(e.target.value)}
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
                      className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-secondary dark:bg-slate-900 dark:text-gray-400 sm:p-4"
                      placeholder="easy,efficient,shardeum,evm"
                      onChange={(e) => handleKeywordChange(e)}
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
                      name="CATEGORY"
                      onChange={(e) => setCategory(e.target.value as Category)}
                      className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-secondary dark:bg-slate-900 dark:text-gray-400 sm:p-4"
                    >
                      <option value={Category.NFT}>NFT</option>
                      <option value={Category.DEFI}>DEFI</option>
                      <option value={Category.GAMING}>GAMING</option>
                      <option value={Category.OTHER}>OTHER</option>
                    </select>
                  </div>
                  <div className="absolute top-0 left-0 hidden translate-y-10 -translate-x-32 md:block">
                    <svg
                      className="h-auto w-40 text-slate-600 dark:text-ter"
                      width="347"
                      height="188"
                      viewBox="0 0 347 188"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                        stroke="currentColor"
                        stroke-width="7"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <div className="absolute top-0 right-0 hidden -translate-y-12 translate-x-20 md:block">
                    <svg
                      className="h-auto w-16 text-secondary dark:text-secondary"
                      width="121"
                      height="135"
                      viewBox="0 0 121 135"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                        stroke="currentColor"
                        stroke-width="10"
                        stroke-linecap="round"
                      />
                      <path
                        d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                        stroke="currentColor"
                        stroke-width="10"
                        stroke-linecap="round"
                      />
                      <path
                        d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                        stroke="currentColor"
                        stroke-width="10"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <div className="grid">
                    <input
                      onSubmit={() => onSubmitBtn()}
                      onClick={() => onSubmitBtn()}
                      type="submit"
                      className="inline-flex  items-center justify-center gap-2 rounded-md border border-transparent bg-gradient-to-r from-purple-400 to-pink-600  py-3 px-4   text-sm font-semibold text-white transition-all hover:from-pink-600 hover:to-purple-400  focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 dark:focus:ring-offset-gray-800 sm:p-4"
                    />
                  </div>
                </form>

                <div
                  className="absolute top-2/4 left-0 hidden -translate-y-2/4 -translate-x-40 transform md:block lg:-translate-x-80"
                  aria-hidden="true"
                >
                  <svg
                    className="h-auto w-52"
                    width="717"
                    height="653"
                    viewBox="0 0 717 653"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M170.176 228.357C177.176 230.924 184.932 227.329 187.498 220.329C190.064 213.329 186.47 205.574 179.47 203.007L170.176 228.357ZM98.6819 71.4156L85.9724 66.8638L85.8472 67.2136L85.7413 67.5698L98.6819 71.4156ZM336.169 77.9736L328.106 88.801L328.288 88.9365L328.475 89.0659L336.169 77.9736ZM616.192 128.685C620.658 122.715 619.439 114.254 613.469 109.788L516.183 37.0035C510.213 32.5371 501.753 33.756 497.286 39.726C492.82 45.696 494.039 54.1563 500.009 58.6227L586.485 123.32L521.788 209.797C517.322 215.767 518.541 224.227 524.511 228.694C530.481 233.16 538.941 231.941 543.407 225.971L616.192 128.685ZM174.823 215.682C179.47 203.007 179.475 203.009 179.48 203.011C179.482 203.012 179.486 203.013 179.489 203.014C179.493 203.016 179.496 203.017 179.498 203.018C179.501 203.019 179.498 203.018 179.488 203.014C179.469 203.007 179.425 202.99 179.357 202.964C179.222 202.912 178.991 202.822 178.673 202.694C178.035 202.437 177.047 202.026 175.768 201.456C173.206 200.314 169.498 198.543 165.106 196.099C156.27 191.182 144.942 183.693 134.609 173.352C114.397 153.124 97.7311 122.004 111.623 75.2614L85.7413 67.5698C68.4512 125.748 89.856 166.762 115.51 192.436C128.11 205.047 141.663 213.953 151.976 219.692C157.158 222.575 161.591 224.698 164.777 226.118C166.371 226.828 167.659 227.365 168.578 227.736C169.038 227.921 169.406 228.065 169.675 228.168C169.809 228.22 169.919 228.261 170.002 228.293C170.044 228.309 170.08 228.322 170.109 228.333C170.123 228.338 170.136 228.343 170.147 228.347C170.153 228.349 170.16 228.352 170.163 228.353C170.17 228.355 170.176 228.357 174.823 215.682ZM111.391 75.9674C118.596 55.8511 137.372 33.9214 170.517 28.6833C204.135 23.3705 255.531 34.7533 328.106 88.801L344.233 67.1462C268.876 11.0269 210.14 -4.91361 166.303 2.01428C121.993 9.01681 95.9904 38.8917 85.9724 66.8638L111.391 75.9674ZM328.475 89.0659C398.364 137.549 474.018 153.163 607.307 133.96L603.457 107.236C474.34 125.837 406.316 110.204 343.864 66.8813L328.475 89.0659Z"
                      fill="currentColor"
                      className="fill-primary dark:fill-accent"
                    />
                    <path
                      d="M17.863 238.22C10.4785 237.191 3.6581 242.344 2.62917 249.728C1.60024 257.113 6.75246 263.933 14.137 264.962L17.863 238.22ZM117.548 265.74L119.421 252.371L119.411 252.37L117.548 265.74ZM120.011 466.653L132.605 471.516L132.747 471.147L132.868 470.771L120.011 466.653ZM285.991 553.767C291.813 549.109 292.756 540.613 288.098 534.792L212.193 439.92C207.536 434.098 199.04 433.154 193.218 437.812C187.396 442.47 186.453 450.965 191.111 456.787L258.582 541.118L174.251 608.589C168.429 613.247 167.486 621.742 172.143 627.564C176.801 633.386 185.297 634.329 191.119 629.672L285.991 553.767ZM14.137 264.962L115.685 279.111L119.411 252.37L17.863 238.22L14.137 264.962ZM115.675 279.11C124.838 280.393 137.255 284.582 145.467 291.97C149.386 295.495 152.093 299.505 153.39 304.121C154.673 308.691 154.864 314.873 152.117 323.271L177.779 331.665C181.924 318.993 182.328 307.301 179.383 296.818C176.451 286.381 170.485 278.159 163.524 271.897C149.977 259.71 131.801 254.105 119.421 252.371L115.675 279.11ZM152.117 323.271C138.318 365.454 116.39 433.697 107.154 462.535L132.868 470.771C142.103 441.936 164.009 373.762 177.779 331.665L152.117 323.271ZM107.417 461.79C103.048 473.105 100.107 491.199 107.229 508.197C114.878 526.454 132.585 539.935 162.404 543.488L165.599 516.678C143.043 513.99 135.175 505.027 132.132 497.764C128.562 489.244 129.814 478.743 132.605 471.516L107.417 461.79ZM162.404 543.488C214.816 549.734 260.003 554.859 276.067 556.643L279.047 529.808C263.054 528.032 217.939 522.915 165.599 516.678L162.404 543.488Z"
                      fill="currentColor"
                      className="fill-secondary"
                    />
                    <path
                      d="M229.298 165.61C225.217 159.371 216.85 157.621 210.61 161.702C204.371 165.783 202.621 174.15 206.702 180.39L229.298 165.61ZM703.921 410.871C711.364 410.433 717.042 404.045 716.605 396.602L709.47 275.311C709.032 267.868 702.643 262.189 695.2 262.627C687.757 263.065 682.079 269.454 682.516 276.897L688.858 384.71L581.045 391.052C573.602 391.49 567.923 397.879 568.361 405.322C568.799 412.765 575.187 418.444 582.63 418.006L703.921 410.871ZM206.702 180.39C239.898 231.14 343.567 329.577 496.595 322.758L495.394 295.785C354.802 302.049 259.09 211.158 229.298 165.61L206.702 180.39ZM496.595 322.758C567.523 319.598 610.272 335.61 637.959 353.957C651.944 363.225 662.493 373.355 671.17 382.695C675.584 387.447 679.351 391.81 683.115 396.047C686.719 400.103 690.432 404.172 694.159 407.484L712.097 387.304C709.691 385.166 706.92 382.189 703.298 378.113C699.837 374.217 695.636 369.362 690.951 364.319C681.43 354.07 669.255 342.306 652.874 331.451C619.829 309.553 571.276 292.404 495.394 295.785L496.595 322.758Z"
                      fill="currentColor"
                      className="fill-ter"
                    />
                  </svg>
                </div>

                <div
                  className="absolute top-2/4 right-0 hidden -translate-y-2/4 translate-x-40 transform md:block lg:translate-x-80"
                  aria-hidden="true"
                >
                  <svg
                    className="h-auto w-72"
                    width="1115"
                    height="636"
                    viewBox="0 0 1115 636"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 179.257 183.892C110.144 202.465 54.2419 243.099 7.92943 270.175L23.0706 296.074Z"
                      fill="currentColor"
                      className="fill-primary dark:fill-accent"
                    />
                    <path
                      d="M451.609 382.417C446.219 388.708 446.95 398.178 453.241 403.567L555.763 491.398C562.054 496.788 571.524 496.057 576.913 489.766C582.303 483.474 581.572 474.005 575.281 468.615L484.15 390.544L562.222 299.413C567.612 293.122 566.881 283.652 560.59 278.263C554.299 272.873 544.829 273.604 539.44 279.895L451.609 382.417ZM837.202 559.655C841.706 566.608 850.994 568.593 857.947 564.09C864.9 559.586 866.885 550.298 862.381 543.345L837.202 559.655ZM464.154 407.131C508.387 403.718 570.802 395.25 638.136 410.928C704.591 426.401 776.318 465.66 837.202 559.655L862.381 543.345C797.144 442.631 718.724 398.89 644.939 381.709C572.033 364.734 504.114 373.958 461.846 377.22L464.154 407.131Z"
                      fill="currentColor"
                      className="fill-secondary"
                    />
                    <path
                      d="M447.448 0.194357C439.203 -0.605554 431.87 5.43034 431.07 13.6759L418.035 148.045C417.235 156.291 423.271 163.623 431.516 164.423C439.762 165.223 447.095 159.187 447.895 150.942L459.482 31.5025L578.921 43.0895C587.166 43.8894 594.499 37.8535 595.299 29.6079C596.099 21.3624 590.063 14.0296 581.818 13.2297L447.448 0.194357ZM1086.03 431.727C1089.68 439.166 1098.66 442.239 1106.1 438.593C1113.54 434.946 1116.62 425.96 1112.97 418.521L1086.03 431.727ZM434.419 24.6572C449.463 42.934 474.586 81.0463 521.375 116.908C568.556 153.07 637.546 187.063 742.018 200.993L745.982 171.256C646.454 157.985 582.444 125.917 539.625 93.0974C496.414 59.978 474.537 26.1903 457.581 5.59138L434.419 24.6572ZM742.018 200.993C939.862 227.372 1054.15 366.703 1086.03 431.727L1112.97 418.521C1077.85 346.879 956.138 199.277 745.982 171.256L742.018 200.993Z"
                      fill="currentColor"
                      className="fill-ter "
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Submit;
