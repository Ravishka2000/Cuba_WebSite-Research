import React from "react";
import { Card, CardImage, CardTitle, CardDescription, CardFooter } from "./ui/AboutUsCard";

const AboutUs = () => {
    return (
        <div className="py-20 w-full" id="about">
            <h1 className="heading">
                About <span className="text-purple">Us</span>
            </h1>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
                <Card>
                    <CardImage src="/pravini.png" alt="Team Member" />
                    <div className="p-4">
                        <CardTitle>Pravini Wickramanayake</CardTitle>
                        <CardDescription>
                            Sri Lanka Institute of Information Technology <br />
                            <strong>Department:</strong> Information Systems Engineering
                        </CardDescription>
                        <CardFooter>
                            <a href="https://scholar.google.com">LinkedIn</a>
                            <a href="mailto:example@example.com">E-Mail</a>
                        </CardFooter>
                    </div>
                </Card>
                <Card>
                    <CardImage src="/pravini.png" alt="Team Member" />
                    <div className="p-4">
                        <CardTitle>Pravini Wickramanayake</CardTitle>
                        <CardDescription>
                            Sri Lanka Institute of Information Technology <br />
                            <strong>Department:</strong> Information Systems Engineering
                        </CardDescription>
                        <CardFooter>
                            <a href="https://scholar.google.com">LinkedIn</a>
                            <a href="mailto:example@example.com">E-Mail</a>
                        </CardFooter>
                    </div>
                </Card>
                <Card>
                    <CardImage src="/pravini.png" alt="Team Member" />
                    <div className="p-4">
                        <CardTitle>Pravini Wickramanayake</CardTitle>
                        <CardDescription>
                            Sri Lanka Institute of Information Technology <br />
                            <strong>Department:</strong> Information Systems Engineering
                        </CardDescription>
                        <CardFooter>
                            <a href="https://scholar.google.com">LinkedIn</a>
                            <a href="mailto:example@example.com">E-Mail</a>
                        </CardFooter>
                    </div>
                </Card>
                <Card>
                    <CardImage src="/pravini.png" alt="Team Member" />
                    <div className="p-4">
                        <CardTitle>Pravini Wickramanayake</CardTitle>
                        <CardDescription>
                            Sri Lanka Institute of Information Technology <br />
                            <strong>Department:</strong> Information Systems Engineering
                        </CardDescription>
                        <CardFooter>
                            <a href="https://scholar.google.com">LinkedIn</a>
                            <a href="mailto:example@example.com">E-Mail</a>
                        </CardFooter>
                    </div>
                </Card>
                <Card>
                    <CardImage src="/pravini.png" alt="Team Member" />
                    <div className="p-4">
                        <CardTitle>Pravini Wickramanayake</CardTitle>
                        <CardDescription>
                            Sri Lanka Institute of Information Technology <br />
                            <strong>Department:</strong> Information Systems Engineering
                        </CardDescription>
                        <CardFooter>
                            <a href="https://scholar.google.com">LinkedIn</a>
                            <a href="mailto:example@example.com">E-Mail</a>
                        </CardFooter>
                    </div>
                </Card>
                <Card>
                    <CardImage src="/pravini.png" alt="Team Member" />
                    <div className="p-4">
                        <CardTitle>Pravini Wickramanayake</CardTitle>
                        <CardDescription>
                            Sri Lanka Institute of Information Technology <br />
                            <strong>Department:</strong> Information Systems Engineering
                        </CardDescription>
                        <CardFooter>
                            <a href="https://scholar.google.com">LinkedIn</a>
                            <a href="mailto:example@example.com">E-Mail</a>
                        </CardFooter>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default AboutUs;
