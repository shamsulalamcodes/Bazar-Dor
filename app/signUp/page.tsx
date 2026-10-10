"use client";

import { FloppyDisk } from "@gravity-ui/icons";
import { Button, Description, FieldError, FieldGroup, Fieldset, Form, Input, Label, TextField, toast } from "@heroui/react";
import { authClient } from "../lib/auth-client";
import { redirect } from "next/navigation";
import Link from "next/link";
import GoogleBtn from "@/components/shared/GoogleBtn";
import GithubBtn from "@/components/shared/GithubBtn";

const SignUp = () => {
    const onSbmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const dats: Record<string, string> = {};
        formData.forEach((value, key) => {
            dats[key] = value.toString();
        });


        const { data, error } = await authClient.signUp.email({
            name: dats?.name,
            email: dats?.email,
            password: dats?.password,
            image: dats?.image
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
        <div className="max-w-96 m-auto">
            <Form className="w-full pt-10" onSubmit={onSbmit}>
                <Fieldset>
                    <Fieldset.Legend className="text-3xl text-center">সাইন আপ</Fieldset.Legend>
                    {/* <Description>Update your profile information.</Description> */}
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
                            <Label>Name</Label>
                            <Input placeholder="Your Name" />
                            <FieldError />
                        </TextField>
                        <TextField isRequired name="email" type="email">
                            <Label>Email</Label>
                            <Input placeholder="Your Email" />
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
                        <TextField name="image" type="text" defaultValue='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyaDkRIXQuL1DKIbt3ZjiZe8r_7GZFbHzrtQjon6vAWg&s=10' >
                            <Label>Image</Label>
                            <Input placeholder="Your Image URL" />
                            <FieldError />
                        </TextField>

                    </FieldGroup>
                    <Fieldset.Actions>
                        <Button type="submit">
                            <FloppyDisk />
                            Save changes
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

            <p className="pb-5 text-center">Already have an account? <Link className="text-blue-600 underline" href="/signIn">Sign-In here</Link></p>
        </div>
    );
}

export default SignUp