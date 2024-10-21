import React from "react";
import Image from "next/image";
import { Timeline } from "./ui/timeline";

const Milestone = () => {
    const data = [
        {
            title: "March 2024",
            content: (
                <div>
                    <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-1">
                        Project Proposal
                    </h2>
                    <p className="text-2xl text-neutral-600 dark:text-neutral-400 mb-2">
                        A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.
                    </p>
                    <br></br>
                    <p className="text-xs font-bold">Marks Allocated: 6</p>
                    <div className="w-[60%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '6%' }}></div>
                    </div>
                </div>
            ),
        },
        {
            title: "June 2024",
            content: (
                <div>
                    <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-1">
                        Progress Presentation I
                    </h2>
                    <p className="text-2xl text-neutral-600 dark:text-neutral-400 mb-2">
                        Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.
                    </p>
                    <br></br>
                    <p className="text-xs font-bold">Marks Allocated: 6</p>
                    <div className="w-[60%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '6%' }}></div>
                    </div>
                </div>
            ),
        },
        {
            title: "July 2024",
            content: (
                <div>
                    <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-1">
                        Research Paper
                    </h2>
                    <p className="text-2xl text-neutral-600 dark:text-neutral-400 mb-2">
                        Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge.
                    </p>
                    <br></br>
                    <p className="text-xs font-bold">Marks Allocated: 10</p>
                    <div className="w-[60%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '10%' }}></div>
                    </div>

                </div>
            ),
        },
        {
            title: "September 2024",
            content: (
                <div>
                    <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-1">
                        Progress Presentation II
                    </h2>
                    <p className="text-2xl text-neutral-600 dark:text-neutral-400 mb-2">
                        Progress Presentation II evaluates the project's overall readiness and completeness, ensuring alignment with goals.
                    </p>
                    <br></br>
                    <p className="text-xs font-bold">Marks Allocated: 18</p>
                    <div className="w-[60%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '18%' }}></div>
                    </div>
                </div>
            ),
        },
        {
            title: "October 2024",
            content: (
                <div>
                    <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-1">
                        Website Assessment
                    </h2>
                    <p className="text-2xl text-neutral-600 dark:text-neutral-400 mb-2">
                        The Website helps to promote our research project and reveals all details related to the project.
                    </p>
                    <br></br>
                    <p className="text-xs font-bold">Marks Allocated: 2</p>
                    <div className="w-[60%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '2%' }}></div>
                    </div>
                </div>
            ),
        },
        {
            title: "November 2024",
            content: (
                <div>
                    <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-1">
                        Logbook
                    </h2>
                    <p className="text-2xl text-neutral-600 dark:text-neutral-400 mb-2">
                        Status of the project is validated through the Logbook. This also includes, Status documents 1 & 2.
                    </p>
                    <br></br>
                    <p className="text-xs font-bold">Marks Allocated: 3</p>
                    <div className="w-[60%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '3%' }}></div>
                    </div>
                </div>
            ),
        },
        {
            title: "November 2024",
            content: (
                <div>
                    <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-1">
                        Final Report
                    </h2>
                    <p className="text-2xl text-neutral-600 dark:text-neutral-400 mb-2">
                        Final Report evalutes the completed project done throughout the year. Marks mentioned below includes marks for Individual & group reports and also Final report.
                    </p>
                    <br></br>
                    <p className="text-xs font-bold">Marks Allocated: 19</p>
                    <div className="w-[60%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '19%' }}></div>
                    </div>
                </div>
            ),
        },
        {
            title: "November 2024",
            content: (
                <div>
                    <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-1">
                        Final Presentation & Viva
                    </h2>
                    <p className="text-2xl text-neutral-600 dark:text-neutral-400 mb-2">
                        Viva is held individually to assess each member's contribution to the project.
                    </p>
                    <br></br>
                    <p className="text-sm font-bold">Marks Allocated: 20</p>
                    <div className="w-[60%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                </div>
            ),
        }
    ];


    return (
        <div className="py-20 w-full" id="milestones">
            <center>
                <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-8 pl-1">
                    Milestones <span className="text-purple-600">Timeline in Brief</span>
                </h1>
            </center>
            <Timeline data={data} />
        </div>
    );
};

export default Milestone;
