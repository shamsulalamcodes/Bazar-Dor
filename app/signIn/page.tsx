"use client";

import { FloppyDisk } from "@gravity-ui/icons";
import { Button, Description, FieldError, FieldGroup, Fieldset, Form, Input, Label, TextField, toast } from "@heroui/react";
import { authClient } from "../lib/auth-client";
import Link from "next/link";
import GoogleBtn from "@/components/shared/GoogleBtn";
import GithubBtn from "@/components/shared/GithubBtn";

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
            toast.danger('Sign Up Failed!!', {
                description: error?.message
            });
        }
    }

    return (
        <div className="max-w-96 m-auto">
            <Form className="w-full pt-10" onSubmit={onSubmit}>
                <Fieldset>
                    <Fieldset.Legend className="text-3xl text-center">সাইন ইন</Fieldset.Legend>
                    {/* <Description>Update your profile information.</Description> */}
                    <FieldGroup>
                        <TextField isRequired name="email" type="email">
                            <Label>Email</Label>
                            <Input placeholder="john@example.com" />
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
                            <Label>Password</Label>
                            <Input placeholder="Enter your password" />
                            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                            <FieldError />
                        </TextField>

                    </FieldGroup>
                    <Fieldset.Actions>
                        <Button type="submit">
                            <FloppyDisk />
                            Login
                        </Button>
                        <Button type="reset" variant="secondary">
                            Cancel
                        </Button>
                    </Fieldset.Actions>
                </Fieldset>
            </Form>

            <div className="flex justify-center gap-5 items-center">
                <GoogleBtn />
                <GithubBtn />
            </div>

            <p className="text-center pb-5">Do not have an account? <Link className="text-blue-600 underline" href="/signUp">Sign-UP now</Link></p>
        </div>
    );
}

export default SignIn