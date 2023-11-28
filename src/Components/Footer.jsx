import React from "react";
import Testim from "./ui/Testimonials";
import Privacy from "./ui/Privacy";

const Footer = () => {
    return (
            <section class="bg-white dark:bg-gray-900 flex flex-col items-center">
                <Testim />
                <Privacy />
                <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 w-11/12"/>
                <div className="flex lg:flex-row flex-col gap-3 w-full justify-between text-gray-800 dark:text-white mb-12 items-center px-4">
                    <div className="flex gap-7">
                        <p className="hover:text-[#E91E63] cursor-pointer">About Us</p>
                        <p className="hover:text-[#E91E63] cursor-pointer">FAQ</p>
                        <p className="hover:text-[#E91E63] cursor-pointer">Contact</p>
                        <p className="hover:text-[#E91E63] cursor-pointer">Security</p>
                        <p className="hover:text-[#E91E63] cursor-pointer">Policy</p>
                    </div>
                    <p className="">© 2023 Match Group, LLC, All Rights Reserved</p>
                </div>

            </section>
    )
}

export default Footer