import Image from "next/image";
import Gate from "@/components/Gate";

export default function Home() {
  return (
    <div>
      {/* Header of the page */}
      <div id="header" className="flex text-white gap-5 items-center align-center border-t-3 border-black pb-1 shadow-md/50">
        <button className="flex items-center gap-1 border border-gray-600 rounded-md px-2 py-2 shadow-md/50 ml-2">
          <Image width={25} height={30} className="invert" src="/newfile.svg" alt="newfile"/>
          <span className="leading-none">New</span>
        </button>
        <button className="flex items-center gap-2 border border-gray-600 rounded-md px-2 py-2 shadow-md/50">
          <Image width={25} height={30} className="invert" src="/openfile.svg" alt="newfile"/>
          <span>Open</span>
        </button>
        <button className="flex items-center gap-2 border border-gray-600 rounded-md px-2 py-2 shadow-md/50">
          <Image width={25} height={30} className="invert" src="/savefile.svg" alt="newfile"/>
          <span>Save</span>
        </button>
        <button className="flex items-center gap-1 border border-gray-600 rounded-md px-2 py-2 shadow-md/50">
          <Image width={25} height={30} className="invert" src="/clearfile.svg" alt="newfile"/>
          <span>Clear</span>
        </button>
        <div className="md:size-14 md:grow"></div>
        <button className="flex items-center gap-2 border border-gray-600 rounded-md px-2 py-2 shadow-md/50">
          <Image width={25} height={30} className="invert" src="/run.svg" alt="newfile"/>
          <span>Run</span>
        </button>
        <button className="flex items-center gap-2 border border-gray-600 rounded-md px-2 py-2 shadow-md/50">
          <Image width={25} height={30} className="invert" src="/faq.svg" alt="newfile"/>
          <span>FAQ</span>
        </button>
        <button className="flex items-center gap-1 border border-gray-600 rounded-md px-2 py-2 shadow-md/50 mr-2">
          <Image width={25} height={30} className="invert" src="/newsettings.svg" alt="newfile"/>
          <span>Settings</span>
        </button>
      </div>

      {/* Workspace of the page */}
      <div id="workspace" className="grid grid-cols-5 text-white">
        <div>
          <Gate type="AND" />
          <Gate type="XOR" />
        </div>
        <div className="col-span-3">
          2
        </div>
        <div>
          3
        </div>
      </div>

      {/* Footer of the page */}
      <div id="footer">
        
      </div>

    </div>
  );
}
