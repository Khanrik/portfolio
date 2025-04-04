import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";

export const Bottom = () => {
    return (
        <div className="w-full mt-6">
            <div className="flex justify-between items-center px-4 py-2 bg-[var(--cardBackground)]">
                <div className="text-xs text-[var(--bodyText)]">
                    Designed and developed by Henrik H. Huynh
                </div>
                <div className="text-xl text-[var(--bodyText)] space-x-3 translate-y-0.5">
                    <a href="https://www.linkedin.com/in/henrik-huynh-708067285/" target="_blank">
                        <button className="text-[var(--bodyText)] hover:text-[var(--headerText)] transition-colors cursor-pointer">
                            <FaLinkedin/>
                        </button>
                    </a>
                    <a href="https://github.com/Khanrik" target="_blank">
                        <button className="text-[var(--bodyText)] hover:text-[var(--headerText)] transition-colors cursor-pointer">
                            <DiGithubBadge/>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};
