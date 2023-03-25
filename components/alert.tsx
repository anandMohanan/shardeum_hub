export const AlertComponent = ({ process }: { process: string }) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
      <div
        className="max-w-xs rounded-md border bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800"
        role="alert"
      >
        <div className="p-2 sm:p-4">
          <h3 className="text-xs font-semibold text-gray-800 dark:text-white sm:text-base">
            {process} done
          </h3>
          {/* <h2 className="mt-10 mb-7 text-center text-2xl font-bold lg:text-4xl">
            Redirecting back to
            <span className=" bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent  hover:from-pink-600 hover:to-purple-400">
              /
            </span>{" "}
          </h2> */}
        </div>
      </div>
      {/* {router.push("/")} */}
    </div>
  );
};
