import Image from "next/image";
import astroSmall from "../../public/astrologosmall.png";
import searchIC from "../../public/search.svg";

export default function Users() {
  return (
    <>
      <div className="bg-gradient-to-tr from-blue-500 to-red-500 min-h-screen py-4">
        <div className="container mx-auto px-5 md:px-24">
          <div className="flex flex-col w-full md:flex-row justify-around items-center">
            <Image
              src={astroSmall}
              width="192"
              height="192"
              alt="astro logo sm"
            />
            <div className="text-2xl py-4 font-bold text-white">DATA TABLE</div>
            <div className="flex">
              <input
                className="py-2 px-2 rounded-lg border-b focus:outline-none"
                type="text"
                placeholder="Search"
                required
              />
              <div className="ml-2 px-2 py-2 bg-white rounded-md text-center">
                <Image
                  src={searchIC}
                  width="20"
                  height="20"
                  alt="astro logo sm"
                />
              </div>
            </div>
          </div>

          <table className="rounded m-5 w-full mx-auto bg-gray-200 text-gray-800">
            <thead>
              <tr className="text-left border-b-2 border-gray-300 text-gray-400 bg-white">
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Phone Number</th>
              </tr>
            </thead>

            <tbody className="font-medium">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                return (
                  <tr
                    key={item}
                    className="bg-gray-100 border-b border-gray-200"
                  >
                    <td className="px-4 py-3">{item}</td>
                    <td className="px-4 py-3">Smith</td>
                    <td className="px-4 py-3">50</td>
                    <td className="px-4 py-3">Male</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
