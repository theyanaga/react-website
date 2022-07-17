import {classNames} from "@headlessui/react/dist/utils/class-names";
import React from "react";

export default function Main() {
    return (
        <div>
            <div className="mx-auto py-10 relative text-4xl text-lime-400">
                Welcome to the World of OKRs.
            </div>
            <div className="text-2xl text-lime-300 py-10">
                This is a website for people like you and me to track their goals.
            </div>
            <div>
                Start by going to the panel page!
            </div>
        </div>
    );
}