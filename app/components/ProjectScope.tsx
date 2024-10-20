"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProjectScope = () => {
    return (
        <motion.div
            className="min-h-screen bg-black text-gray-100 p-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='scope'
        >
            {/* Project Scope Title */}
            <h1 className="heading">
                Project <span className="text-purple">Scope</span>
            </h1>

            {/* Literature Survey Section */}
            <section className="my-20">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-8 border-b-4 border-purple-500 inline-block"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Literature Survey
                </motion.h2>
                <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <div>
                        <p className="mt-4 text-gray-300">
                            The United Nations Sustainable Development Goals (SDGs) were adopted in 2015 to achieve sustainability by 2030. However, slow progress suggests a need to enhance collective abilities to address complex challenges. This examines technological developments in four key areas of inner development: courage, critical thinking, communication, and co-creation skills. Virtual Reality (VR) has shown promise in addressing public speaking anxiety by offering immersive environments for practice but often lacks real-time feedback and adaptive complexity. A proposed VR application addresses this by using real-time analysis and performance-based adjustments [1].
                            For critical thinking, traditional methods like Socratic questioning may not fully engage students. Simulations and gamification offer more immersive and effective environments, while large language models (LLMs) provide personalized learning opportunities [2],[3],[4].
                            Communication skills, particularly listening, can be enhanced through educational technology and gamified environments that offer interactive assessments and motivation through leaderboards [5].
                            For co-creation, collaborative platforms like MediaWiki and Google Docs help with group work but lack real-time communication. An interactive platform with real-time communication features is proposed to enhance collaboration and co-creation skills [6],[7].
                        </p>
                    </div>
                    
                    <div className="flex flex-row space-x-4">
                        <div className="w-1/2">
                            <Image
                                src="/IDG.png"
                                alt="Coconut Export Stats"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                                priority
                            />
                            <p className="text-sm text-gray-400 mt-2">
                                Figure 1: Inner Development Goals (IDG)
                            </p>
                        </div>
                        
                        <div className="w-1/2">
                            <h5 className="text-2xl font-semibold text-purple-400 mb-2">References</h5>
                            <p className="text-gray-300 text-xs">
                                [1] M. Takac, J. Collett, K. J. Blom, R. Conduit, I. Rehm, and A. De Foe, “Public speaking anxiety decreases within repeated virtual reality training sessions,” PLoS ONE, vol. 14, no. 5, p. e0216288, May 2019, doi: 10.1371/journal.pone.0216288. <br/>
                                [2] R. H. Ennis, "Critical Thinking across the Curriculum: A Vision," Topoi, vol. 37, pp. 165-184, 2018. DOI: 10.1007/s11245-017-9476-0.<br/>
                                [3] S. Triantafyllou, T. Sapounidis, and Y. Farhaoui, "Gamification and Computational Thinking in Education: A Systematic Literature Review," Proceedings of the 2024 SCT Conference, 2024. DOI: 10.56294/sctconf2024659.<br/>
                                [4] Z. Qu, J. Liu, L. Che, Y. Su, and W. Zhang, "Research on the Application of Gamification Programming Teaching for High School Students’ Computational Thinking Development," 2023 International Conference on Educational Innovation and Technology (ICEIT), 2023. DOI: 10.1109/ICEIT57125.2023.10107843. <br/>
                                [5] Xi, N., & Hamari, J. (2020). Does gamification affect brand engagement and equity? A study in online brand communities. Journal of Business Research, 109,449–460. https://doi.org/10.1016/j.jbusres.2019.11.058. <br/>
                                [6] K.-W. Chu and D. M. Kennedy, "Using online collaborative tools for groups to co-construct knowledge," Online Information Review, vol. 35, no. 4, pp. 581-597, 2011, doi: 10.1108/14684521111161945. <br/>
                                [7] S. Smith, "Canva in Creative Writing Courses: Student Perceptions and Challenges," Children and Libraries, vol. 17, no. 4, pp. 13-18, 2020, doi: 10.5260/chara.17.4.13.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>


            {/* Research Gap Section */}
            <section className="mb-20">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-8 border-b-4 border-purple-500 inline-block"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Research Gap
                </motion.h2>
                <div className="w-1/2">
                            <p className="text-gray-300">
                            Following areas are the research gaps found in most of the recent researches.
                            </p>
                        </div>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    {[
                        {
                            title: 'Identification & Classification',
                            description:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
                        },
                        {
                            title: 'Severity Assessment',
                            description:
                                'Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.',
                        },
                        {
                            title: 'Information Sharing',
                            description:
                                'Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.',
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h3 className="text-xl font-semibold text-purple-400">{item.title}</h3>
                            <p className="mt-3 text-gray-300">{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Research Problem & Solution Section */}
            <section className="mb-20">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-8 border-b-4 border-purple-500 inline-block"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Research Problem & Solution
                </motion.h2>
                <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <div>
                        <h3 className="text-2xl font-semibold text-purple-400">Proposed Problem</h3>
                        <p className="mt-4 text-gray-300">
                        This study focuses on the challenges students face in public speaking, critical thinking, communication, and collaboration, which hinder their academic success and personal development. Public speaking is a significant issue, with students frequently experiencing anxiety, nervousness, and self-doubt. These emotions result in performance problems like shaky speech, lack of eye contact, and excessive pauses. Contributing factors include negative mindsets, limited vocabulary, lack of motivation, and insufficient preparation. Despite these challenges, there is strong interest in using Virtual Reality (VR) tools to improve public speaking skills.

                        Critical thinking, a crucial skill in higher education, is not adequately fostered by traditional teaching methods, which focus more on memorization than reflective thinking. As a result, many graduates struggle to apply their knowledge to real-world problems. Gamification is a promising approach to enhancing critical thinking, as it engages students in decision-making and problem-solving activities. However, challenges remain in designing effective, personalized gamified learning experiences.

                        Collaboration in group projects also presents difficulties, such as communication breakdowns, uneven work distribution, and conflicting schedules. These issues often lead to frustration and unequal participation, which negatively affect academic performance. Developing a technology-driven platform to enhance co-creation skills could help address these issues by facilitating better teamwork and balanced contributions.

                        Listening skills are essential but often overlooked in university education. Current teaching methods typically treat listening as an innate ability, offering little direct instruction or feedback. Many students struggle to process dense lecture content and engage in discussions effectively. Moreover, feedback for listening is often delayed or unclear, making it difficult for students to improve. Without targeted interventions to develop listening skills, students will continue to struggle, impacting their academic success. 

                        These challenges highlight the need for innovative, technology-driven solutions to enhance public speaking, critical thinking, collaboration, and listening skills.
                        </p>
                    </div>
                    {/* <div className="w-full">
                        <iframe
                            width="100%"
                            height="300"
                            src="https://www.youtube.com/embed/sample-video-id"
                            title="YouTube video"
                            className="rounded-lg shadow-lg"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div> */}
                </motion.div>

                <motion.div
                    className="mt-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <h3 className="text-2xl font-semibold text-purple-400">Proposed Solution</h3>
                    <p className="mt-4 text-gray-300">
                    The proposed solution is a comprehensive, technology-driven platform that integrates Virtual Reality (VR), gamification, and real-time feedback mechanisms. VR will be used to simulate public speaking scenarios, helping students overcome anxiety through practice in immersive environments. Gamified modules will enhance critical thinking by engaging students in decision-making and problem-solving tasks. For collaboration, the platform will support co-creation with tools that improve communication, task management, and balanced contributions in group projects. Additionally, listening skills will be developed through targeted exercises and immediate feedback, helping students process and engage with complex content more effectively. This holistic approach will address key academic and personal development challenges.
                    </p>
                </motion.div>
            </section>

            {/* Research Objectives Section */}
            <section className="mb-20">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-8 border-b-4 border-purple-500 inline-block"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Research Objectives
                </motion.h2>
                <motion.ul
                    className="list-disc pl-5 space-y-4 text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <li>
                    Develop a Virtual Reality (VR) tool to help students reduce anxiety and improve performance in public speaking through simulated practice environments.
                    </li>
                    <li>
                    Use gamification to foster critical thinking by engaging students in interactive decision-making and problem-solving exercises, moving beyond rote memorization
                    </li>
                    <li>
                    Create a platform to support collaboration in group projects, addressing communication issues, unequal work distribution, and scheduling conflicts to promote balanced participation.
                    </li>
                    <li>
                    Implement targeted listening exercises coupled with a 3D customizable avatar providing real-time feedback to help students process complex information and participate more effectively in discussions.
                    </li>
                </motion.ul>
            </section>

            {/* Methodology Section */}
            <section className="mb-20">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-8 border-b-4 border-purple-500 inline-block"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Methodology
                </motion.h2>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <div className="col-span-1">
                        <Image
                            src="/sysOverviewD.png"
                            alt="Methodology Flow"
                            width={700}
                            height={500}
                            className="rounded-lg shadow-lg"
                            priority
                        />
                        <p className="text-sm text-gray-400 mt-4">
                            Figure 2: System Overview Diagramn
                        </p>
                    </div>
                    <div className="col-span-2">
                        <p className="mt-4 text-gray-300">
                            This study focuses on the challenges students face in public speaking, critical thinking, communication, and collaboration, which hinder their academic success and personal development. Public speaking is a significant issue, with students frequently experiencing anxiety, nervousness, and self-doubt. These emotions result in performance problems like shaky speech, lack of eye contact, and excessive pauses. Contributing factors include negative mindsets, limited vocabulary, lack of motivation, and insufficient preparation. Despite these challenges, there is strong interest in using Virtual Reality (VR) tools to improve public speaking skills.

                            Critical thinking, a crucial skill in higher education, is not adequately fostered by traditional teaching methods, which focus more on memorization than reflective thinking. As a result, many graduates struggle to apply their knowledge to real-world problems. Gamification is a promising approach to enhancing critical thinking, as it engages students in decision-making and problem-solving activities. However, challenges remain in designing effective, personalized gamified learning experiences.

                            Collaboration in group projects also presents difficulties, such as communication breakdowns, uneven work distribution, and conflicting schedules. These issues often lead to frustration and unequal participation, which negatively affect academic performance. Developing a technology-driven platform to enhance co-creation skills could help address these issues by facilitating better teamwork and balanced contributions.

                            Listening skills are essential but often overlooked in university education. Current teaching methods typically treat listening as an innate ability, offering little direct instruction or feedback. Many students struggle to process dense lecture content and engage in discussions effectively. Moreover, feedback for listening is often delayed or unclear, making it difficult for students to improve. Without targeted interventions to develop listening skills, students will continue to struggle, impacting their academic success.

                            These challenges highlight the need for innovative, technology-driven solutions to enhance public speaking, critical thinking, collaboration, and listening skills.
                        </p>
                    </div>
                </motion.div>

            </section>

            {/* Technologies Used Section */}
            <section>
            <motion.h2
                className="text-3xl md:text-4xl font-bold mb-8 border-b-4 border-purple-500 inline-block"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Technologies Used
            </motion.h2>
            <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                {[
                    { src: '/python.png', alt: 'Python', name: 'Python' },
                    { src: '/react.png', alt: 'React', name: 'React' },
                    { src: '/flask.jpg', alt: 'Flask', name: 'Flask' },
                    { src: '/unity.png', alt: 'Unity', name: 'Unity' },
                    { src: '/mongodb.png', alt: 'MongoDB', name: 'MongoDB' },
                    { src: '/chatgpt.png', alt: 'ChatGPT', name: 'ChatGPT 3.5' },
                    { src: '/docker.png', alt: 'Docker', name: 'Docker' },
                    { src: '/kub8.png', alt: 'Kubernetes', name: 'Kubernetes' },
                    { src: '/ThreeJs.png', alt: 'Three.js', name: 'Three.js' },
                    { src: '/socket.io.png', alt: 'Socket.io', name: 'Socket.io' },
                    { src: '/websocket.jpeg', alt: 'websocket', name: 'Websocket' },
                
                ].map((tech, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col justify-center items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:bg-purple-600 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                    >
                        <Image src={tech.src} alt={tech.alt} width={80} height={80} />
                        <p className="text-white mt-4">{tech.name}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
        </motion.div>
    );
};

export default ProjectScope;
