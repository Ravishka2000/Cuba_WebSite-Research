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
                    <CardImage src="/NuwanSir.jpg" alt="Team Member" />
                    <div className="p-4">
                        <CardTitle>Dr. Nuwan Kodagoda</CardTitle>
                        <CardDescription>
                            Sri Lanka Institute of Information Technology <br />
                            <strong>Department:</strong> Software Engineering 
                        </CardDescription>
                        <CardFooter>
                            <a href="https://www.linkedin.com/in/nuwan-kodagoda-a4875a4/">LinkedIn</a>
                            <a href="mailto:nuwan.k@sliit.lk">E-Mail</a>
                        </CardFooter>
                    </div>
                </Card>
                <Card>
                    <CardImage src="/JennyMiss.jpg" alt="Team Member" />
                    <div className="p-4">
                        <CardTitle>Ms. Jenny Krishara</CardTitle>
                        <CardDescription>
                            Sri Lanka Institute of Information Technology <br />
                            <strong>Department:</strong> Software Engineering 
                        </CardDescription>
                        <CardFooter>
                            <a href="https://www.linkedin.com/in/jenny-krishara-1a09a0111/">LinkedIn</a>
                            <a href="mailto:jenny.k@sliit.lk">E-Mail</a>
                        </CardFooter>
                    </div>
                </Card>
                <Card>
                    <CardImage src="/Hiruna.jpg" alt="Team Member" />
                    <div className="p-4">
                        <CardTitle>Lalanga S.P.H</CardTitle>
                        <CardDescription>
                            Sri Lanka Institute of Information Technology <br />
                            <strong>Department:</strong> Software Engineering 
                        </CardDescription>
                        <CardFooter>
                            <a href="https://www.linkedin.com/in/hiruna-lalanga/">LinkedIn</a>
                            <a href="mailto:it21049590@my.sliit.lk">E-Mail</a>
                        </CardFooter>
                    </div>
                </Card>
                <Card>
                    <CardImage src="/Ravishka.jpg" alt="Team Member" />
                    <div className="p-4">
                        <CardTitle>Ranaweera G.R.D</CardTitle>
                        <CardDescription>
                            Sri Lanka Institute of Information Technology <br />
                            <strong>Department:</strong> Software Engineering
                        </CardDescription>
                        <CardFooter>
                            <a href="https://www.linkedin.com/in/ravishka-dulshan-a33569225/">LinkedIn</a>
                            <a href="mailto:it21052606@my.sliit.lk">E-Mail</a>
                        </CardFooter>
                    </div>
                </Card>
                <Card>
                    <CardImage src="/Maneesha.jpg" alt="Team Member" />
                    <div className="p-4">
                        <CardTitle>Karunarathna K.M.P.M</CardTitle>
                        <CardDescription>
                            Sri Lanka Institute of Information Technology <br />
                            <strong>Department:</strong> Information Technology
                        </CardDescription>
                        <CardFooter>
                            <a href="https://www.linkedin.com/in/maneesha-karunarathna/">LinkedIn</a>
                            <a href="mailto:it21060908@my.sliit.lk ">E-Mail</a>
                        </CardFooter>
                    </div>
                </Card>
                <Card>
                    <CardImage src="/Pravini.jpg" alt="Team Member" />
                    <div className="p-4">
                        <CardTitle>Wickramanayake V.P.P</CardTitle>
                        <CardDescription>
                            Sri Lanka Institute of Information Technology <br />
                            <strong>Department:</strong> Software Engineering
                        </CardDescription>
                        <CardFooter>
                            <a href="https://www.linkedin.com/in/pravini-wickramanayake-09156b225/">LinkedIn</a>
                            <a href="mailto:it21041402@my.sliit.lk">E-Mail</a>
                        </CardFooter>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default AboutUs;
