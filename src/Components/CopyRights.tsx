"use client"

import Link from "next/link";

const shortcuts ={
    Privacy:"/PrivacyPolicy",
}
const CopyRights = () => {
  return (
      <footer className="pointer-events-auto">
          <center>
              <hr className="my-3 border-gray-400 opacity-15 z-20 sm:mx-auto lg:my-6 text-center" />
              <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
          © 2025{" "}
                  <a
                      className="relative z-10"
                      onClick={(e) => e.stopPropagation()}
                      href="https://github.com/Sly-SL">
            Slysl
          </a>
          . All Rights Reserved.
<Link className="relative z-10"
      onClick={(e) => e.stopPropagation()}
      href={shortcuts.Privacy}>
  <span className="hover:underline">Privacy Policy</span>
</Link>
        </span>
          </center>
      </footer>
  )
}
export default CopyRights;