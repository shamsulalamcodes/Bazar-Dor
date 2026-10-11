"use client";

import { Button, FieldError, FieldGroup, Fieldset, Form, Input, Label, TextField, toast } from "@heroui/react";
import { authClient } from "../lib/auth-client";
import { redirect } from "next/navigation";
import Link from "next/link";
import GoogleBtn from "@/components/shared/GoogleBtn";
import GithubBtn from "@/components/shared/GithubBtn";
import Othoba from "@/components/shared/Othoba";
import { useState } from "react";

const SignUp = () => {

    const [same, setSame] = useState<string>('')
    const [password, setPassword] = useState("");

    const onSbmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const dats: Record<string, string> = {};
        formData.forEach((value, key) => {
            dats[key] = value.toString();
        });

        setSame(dats.password1)

        const { data, error } = await authClient.signUp.email({
            name: dats?.name,
            email: dats?.email,
            password: dats?.password1,
            image: dats?.image || "/icons8/person-96.png"
        });

        if (data?.user) {
            toast.success("Signing Up Successful", {
                actionProps: {
                    className: "bg-success text-success-foreground"
                },
                description: "You can continue using our bazar",
            })
            redirect('/signIn')
        }
        else {
            toast.danger('Sign Up Failed!!', {
                description: error?.message
            });
        }
    }

    return (
        <div className="max-w-[500px] m-auto">
            <Form className="w-full mt-5" onSubmit={onSbmit}>
                <Fieldset>
                    <Fieldset.Legend className="text-3xl text-center my-2">
                        <p className="text-2xl font-bold">অ্যাকাউন্ট তৈরি করুন</p>
                        <p className="text-slate-600 text-sm">বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
                    </Fieldset.Legend>
                    {/* <Description>Update your profile information.</Description> */}
                    <div className="bg-white rounded-xl p-5 border ">
                        <FieldGroup>
                            <TextField
                                isRequired
                                name="name"
                                validate={(value) => {
                                    if (value.length < 3) {
                                        return "Name must be at least 3 characters";
                                    }

                                    return null;
                                }}
                            >
                                <Label>নাম</Label>
                                <Input placeholder="যেমন: রহিম উদ্দিন" />
                                <FieldError />
                            </TextField>
                            <TextField isRequired name="email" type="email">
                                <Label>ইমেইল</Label>
                                <Input placeholder="you@example.com" />
                                <FieldError />
                            </TextField>

                            <TextField
                                isRequired
                                minLength={8}
                                name="password1"
                                type="password"
                                value={password}
                                onChange={setPassword}
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

                            <TextField
                                isRequired
                                minLength={8}
                                name="password2"
                                type="password"
                                validate={(value) => (value !== password ? "Password doesn't match!!" : null)}
                            >
                                <Label>পাসওয়ার্ড নিশ্চিত করুন</Label>
                                <Input placeholder="আবার লিখুন" />
                                <FieldError />
                            </TextField>

                        </FieldGroup>
                        <Fieldset.Actions>
                            <Button className='bg-green-600 w-full font-bold text-white' type="submit">
                                অ্যাকাউন্ট তৈরি করুন
                            </Button>
                        </Fieldset.Actions>
                        <Othoba />
                        <div className="flex justify-center gap-5 items-center">
                            <GoogleBtn />
                            <GithubBtn />
                        </div>

                        <p className="text-center">অ্যাকাউন্ট আছে? <Link className="text-green-600 underline" href="/signIn">সাইন ইন করুন</Link></p>
                    </div>
                </Fieldset>
            </Form>
            <p className="text-slate-600 text-sm py-1 rounded-2xl my-3 lg:my-5 text-center hover:bg-slate-300">
                <Link href="/">← হোম পেজে ফিরে যান</Link>
            </p>
        </div >
    );
}

export default SignUp