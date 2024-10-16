"use client";
import React from "react";
import { cn } from "@/app/lib/utils/cn";
import Image from "next/image";

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "max-w-sm w-full mx-auto p-4 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
                className
            )}
        >
            {children}
        </div>
    );
};

export const CardImage = ({
    src,
    alt,
    className,
}: {
    src: string;
    alt: string;
    className?: string;
}) => {
    return (
        <div className={cn("relative w-full h-80 rounded-t-xl overflow-hidden", className)}>
            <Image
                src={src}
                alt={alt}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
            />
        </div>
    );
};

export const CardTitle = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <h3
            className={cn(
                "text-lg font-semibold text-gray-800 dark:text-white py-2",
                className
            )}
        >
            {children}
        </h3>
    );
};

export const CardDescription = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <p
            className={cn(
                "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
                className
            )}
        >
            {children}
        </p>
    );
};

export const CardFooter = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "flex justify-between mt-4 text-sm text-blue-500",
                className
            )}
        >
            {children}
        </div>
    );
};
