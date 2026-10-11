"use client";

import { FieldError, FieldGroup, Fieldset, Form, Avatar, Button, Card, Input, Label, TextField, toast } from "@heroui/react";
import img0 from '../../assets/icons8-person-24.png'
import img from '../../assets/icons8-log-out-50.png'
import type { FormEvent } from "react";
import Image from "next/image";
import { authClient } from "../lib/auth-client";
import { redirect } from "next/navigation";

export default function ProfilePage() {
    const { data } = authClient.useSession()

    if (!data) redirect('/signIn')

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const dats: Record<string, string> = {};
        formData.forEach((value, key) => {
            dats[key] = value.toString();
        });

        const { data, error } = await authClient.updateUser({
            name: dats.name
        })

        if (data) {
            toast.success("Updating Successful", {
                actionProps: {
                    className: "bg-success text-success-foreground"
                },
                description: "You can continue using our bazar",
            })
            redirect('/')
        }
        else {
            toast.danger('Updating Failed!!', {
                description: error?.message
            });
        }
    };

    const avater = data?.user?.image ?? img;
    const firstLetter = data?.user?.name[0]

    const handleSignOut = async () => {
        await authClient.signOut()
        toast.danger('Successfully signed out!!');
        redirect('/signIn')
    };

    return (
        <main className="min-h-screen my-auto bg-[#f0f5f0] p-4">
            <div className="mx-auto w-full max-w-[627px]">
                {/* Page heading */}
                <h1 className="text-2xl font-bold text-neutral-900">আমার প্রোফাইল</h1>
                <p className="mt-1 text-sm text-neutral-600">
                    আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
                </p>

                {/* User card */}
                <Card className="mt-5 flex-row items-center gap-4 rounded-3xl border border-neutral-200 bg-[#fafbf9] p-5 shadow-none">
                    <Avatar>
                        {data ?
                            <Image width={40} height={40} className="rounded-lg" src={avater} alt={data?.user?.name} />
                            :
                            <p className="rounded-xl py-2 px-5 text-center bg-green-600">{firstLetter}</p>
                        }
                    </Avatar>

                    <div className="min-w-0 flex-1">
                        <p className="truncate text-lg font-medium text-neutral-900">
                            {data && data.user.name}
                        </p>
                        <p className="truncate text-[15px] text-neutral-500">
                            {data && data.user.email}
                        </p>
                    </div>

                    <Button
                        variant="outline"
                        size="sm"
                        onPress={handleSignOut}
                        className="gap-1.5 border border-red-500 bg-transparent text-red-600"
                    >
                        <Image src={img} alt='out' className='text-red-600' width={20} height={20} />
                        সাইন আউট
                    </Button>
                </Card>

                {/* Info card */}
                <div className="bg-white p-5 rounded-2xl mt-5">
                    <p className="my-3">তথ্য</p>
                    <Form className="w-full p-5 border rounded-2xl" onSubmit={onSubmit}>
                        <Fieldset>
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
                            </FieldGroup>
                            <Fieldset.Actions>
                                <Button className='bg-green-600 w-full font-bold text-white' type="submit">
                                    আপডেট
                                </Button>
                            </Fieldset.Actions>

                        </Fieldset>
                    </Form>
                </div>
            </div>
        </main >
    );
}