import React from "react";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";

// import placeholderImage from "../../public/placeholderImage";
import Pro2_1 from "../../public/Pro2_1.PNG";
import Pro2_2 from "../../public/Pro2_2.PNG";
import Pro2_3 from "../../public/Pro2_3.PNG";

export default function Portfolio() {
  return (
    <div>
      <h3 className="text-3xl py-1 flex justify-center">Portofolio</h3>

      <div className="mt-10 flex justify-center gap-16 py-3">
        {/*  */}
        <div>
          <Image src={Pro2_2} width={500} height={500} />
          <br></br>
          <a
            href="https://github.com"
            class="text-fuchsia-500 hover:text-yellow-600 font-bold"
          >
            GitHub Repo
          </a>

          <p className="flex-wrap">
            The BrokerConnect is an online platform designed exclusively for
            real estate agents to list rental properties.
          </p>
        </div>

        <div>
          <Image src={Pro2_2} width={500} height={500} />
          <br></br>
          <a
            href="https://github.com"
            class="text-fuchsia-500 hover:text-yellow-600 font-bold"
          >
            GitHub Repo
          </a>

          <p className="flex-wrap">
            The BrokerConnect is an online platform designed exclusively for
            real estate agents to list rental properties.
          </p>
        </div>

        <div>
          <Image src={Pro2_2} width={500} height={500} />
          <br></br>
          <a
            href="https://github.com"
            class="text-fuchsia-500 hover:text-yellow-600 font-bold"
          >
            GitHub Repo
          </a>

          <p className="flex-wrap">
            The BrokerConnect is an online platform designed exclusively for
            real estate agents to list rental properties.
          </p>
        </div>
        {/*  */}
      </div>
    </div>
  );
}
