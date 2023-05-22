import React from "react";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";

// import placeholderImage from "../../public/placeholderImage";
import candyCrushProject from "../../public/candyCrushProject.PNG";
import Pro2_2 from "../../public/Pro2_2.PNG";
import Pro2_3 from "../../public/Pro2_3.PNG";
import pokemons from "../../public/pokemons.PNG";

export default function Portfolio() {
  return (
    <div>
      <h3 className="text-3xl py-1 flex justify-center">Portofolio</h3>

      <div className="mt-10 flex justify-center gap-16 py-3">
        {/*  */}
        <div>
          <Image
            src={candyCrushProject}
            width={500}
            height={500}
            className="w-full h-48 object-cover"
          />

          <br></br>
          <a
            href="https://github.com/DevAbdul-codeHub/candyCrushProject"
            class="text-fuchsia-500 hover:text-yellow-600 font-bold"
          >
            Candy Crush Game | GitHub Repo
          </a>

          <p className="flex-wrap">
            The motivation behind this project was to practice JavaScript
            fundamentals and gain hands-on experience with the DOM API.
          </p>
        </div>

        <div>
          <Image
            src={Pro2_3}
            width={500}
            height={500}
            className="w-full h-48 object-cover"
          />
          <br></br>
          <a
            href="https://github.com"
            class="text-fuchsia-500 hover:text-yellow-600 font-bold"
          >
            Real estate Platform | GitHub Repo
          </a>

          <p className="flex-wrap">
            The BrokerConnect is an online platform designed exclusively for
            real estate agents to list rental properties.
          </p>
        </div>

        <div>
          <Image
            src={pokemons}
            width={500}
            height={500}
            className="w-full h-48 object-cover"
          />
          <br></br>
          <a
            href="https://github.com/DevAbdul-codeHub/pokemonApp"
            class="text-fuchsia-500 hover:text-yellow-600 font-bold"
          >
            Pokemon App | GitHub Repo
          </a>

          <p className="flex-wrap">
            A Pokemon app that utilizes server-side rendering. The views of the
            application are generated and rendered on the server-side, and then
            sent to the client.
          </p>
        </div>
        {/*  */}
      </div>
    </div>
  );
}
