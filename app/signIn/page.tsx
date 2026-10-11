"use client";

import { FloppyDisk } from "@gravity-ui/icons";
import { Button, Description, FieldError, FieldGroup, Fieldset, Form, Input, Label, TextField, toast } from "@heroui/react";
import { authClient } from "../lib/auth-client";
import Link from "next/link";
import GoogleBtn from "@/components/shared/GoogleBtn";
import GithubBtn from "@/components/shared/GithubBtn";
import Othoba from "@/components/shared/Othoba";

const SignIn = () => {
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const dats: Record<string, string> = {};
        formData.forEach((value, key) => {
            dats[key] = value.toString();
        });

        const { data, error } = await authClient.signIn.email({
            email: dats?.email,
            password: dats?.password,
            rememberMe: true,
            callbackURL: '/'
        });

        if (data?.user) {
            toast.success("Signing In Successful", {
                actionProps: {
                    className: "bg-success text-success-foreground"
                },
                description: "You can now continue using our bazar",
            })
        }
        else {
            toast.danger('Signing In Failed!!', {
                description: error?.message
            });
        }
    }

    return (
        <div className="sm:w-3/4 md:w-1/2 w-full m-auto">
            <Form className="mt-5" onSubmit={onSubmit}>
                <Fieldset>
                    <Fieldset.Legend className="text-3xl text-center my-2">
                        <p className="text-2xl font-bold">সাইন ইন</p>
                        <p className="text-slate-600 text-sm">বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
                    </Fieldset.Legend>
                    {/* <Description>Update your profile information.</Description> */}
                    <div className="bg-white rounded-xl p-5 border ">
                        <FieldGroup>
                            <TextField isRequired name="email" type="email">
                                <Label>ইমেইল</Label>
                                <Input placeholder="you@example.com" />
                                <FieldError />
                            </TextField>

                            <TextField
                                isRequired
                                minLength={8}
                                name="password"
                                type="password"
                                validate={(value) => {
                                    if (value.length < 8) {
                                        return "Password must be at least 8 characters";
                                    }
                                    if (!/[A-Z]/.test(value)) {
                                        return "Password must contain at least one uppercase letter";
                                    }
                                    if (!/[0-9]/.test(value)) {
                                        return "Password must contain at least one number";
                                    }
                                    return null;
                                }}
                            >
                                <Label>পাসওয়ার্ড</Label>
                                <Input placeholder="কমপক্ষে ৮ অক্ষর" />
                                <FieldError />
                            </TextField>

                        </FieldGroup>
                        <Fieldset.Actions>
                            <Button className='bg-green-600 w-full font-bold text-white' type="submit">
                                সাইন ইন
                            </Button>
                        </Fieldset.Actions>
                        <Othoba />
                        <div className="flex flex-col sm:flex-row justify-center sm:gap-5 items-center">
                            <GoogleBtn />
                            <GithubBtn />
                        </div>

                        <p className="text-center">অ্যাকাউন্ট নেই? <Link className="text-green-600 underline" href="/signUp">সাইন আপ করুন</Link></p>
                    </div>
                </Fieldset>
            </Form>
            <p className="text-slate-600 text-sm lg:my-5 py-1 rounded-2xl my-2 text-center hover:bg-slate-300">
                <Link href="/">← হোম পেজে ফিরে যান</Link>
            </p>
        </div >
    );
}

export default SignIn