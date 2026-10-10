'use client'
import { authClient } from "@/app/lib/auth-client";
import { Button, toast } from "@heroui/react";
import { redirect } from "next/navigation";

const GithubBtn = () => {

    const handleClick = async () => {
        const { data, error } = await authClient.signIn.social({
            provider: "github"
        })

        if (error) {
            toast.danger('Log In Failed!!', {
                description: error?.message
            });
        }
        else {
            toast.success("Loging In Successful", {
                actionProps: {
                    className: "bg-success text-success-foreground"
                },
                description: "You can now continue using our bazar",
            })
            redirect('/')
        }
    }
    return (
        <div className="my-2">
            <Button className='bg-slate-500' onClick={handleClick}>Sign in With Github</Button>
        </div>
    );
};

export default GithubBtn;