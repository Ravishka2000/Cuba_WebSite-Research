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
                        <h3 className="text-2xl font-semibold text-purple-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </h3>
                        <p className="mt-4 text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo
                            mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image
                            src="/path/to/nuts_chart.png"
                            alt="Coconut Export Stats"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                            priority
                        />
                        <p className="text-sm text-gray-400 mt-2">
                            Figure 1: Annual coconut export statistics from 2017-2022
                        </p>
                    </div>
                    <p className="text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac neque nec urna feugiat lacinia. Fusce
                        vehicula dolor nec nulla fermentum, nec hendrerit orci cursus.
                    </p>
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
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <div>
                        <h3 className="text-2xl font-semibold text-purple-400">Proposed Problem</h3>
                        <p className="mt-4 text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum,
                            nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
                        </p>
                    </div>
                    <div className="w-full">
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
                    </div>
                </motion.div>

                <motion.div
                    className="mt-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <h3 className="text-2xl font-semibold text-purple-400">Proposed Solution</h3>
                    <p className="mt-4 text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo
                        mollis, auctor consequat urna. Morbi a bibendum metus.
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                    </li>
                    <li>
                        Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                    </li>
                    <li>
                        Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                    </li>
                    <li>
                        Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora.
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
                    className="flex flex-col items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <Image
                        src="/path/to/methodology_chart.png"
                        alt="Methodology Flow"
                        width={700}
                        height={500}
                        className="rounded-lg shadow-lg"
                        priority
                    />
                    <p className="text-sm text-gray-400 mt-4">
                        Figure 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
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
                        { src: '/path/to/python_logo.png', alt: 'Python' },
                        { src: '/path/to/react_logo.png', alt: 'React' },
                        { src: '/path/to/tensorflow_logo.png', alt: 'TensorFlow' },
                        { src: '/path/to/keras_logo.png', alt: 'Keras' },
                        { src: '/path/to/mongodb_logo.png', alt: 'MongoDB' },
                        { src: '/path/to/firebase_logo.png', alt: 'Firebase' },
                        { src: '/path/to/docker_logo.png', alt: 'Docker' },
                        { src: '/path/to/google_colab_logo.png', alt: 'Google Colab' },
                    ].map((tech, index) => (
                        <motion.div
                            key={index}
                            className="flex justify-center items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:bg-purple-600 transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                        >
                            <Image src={tech.src} alt={tech.alt} width={80} height={80} />
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </motion.div>
    );
};

export default ProjectScope;
