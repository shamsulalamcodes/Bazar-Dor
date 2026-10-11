'use client'
import { authClient } from "@/app/lib/auth-client";
import { Button, toast } from "@heroui/react";
import { redirect } from "next/navigation";
import img from '../../assets/icons8-github-24.png'
import Image from "next/image";

const GithubBtn = () => {

    const handleClick = async () => {
        const { data, error } = await authClient.signIn.social({
            provider: "github"
        })

        if (!data) {
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
            <Button className='flex font-semibold bg-white border text-black hover:bg-black hover:text-white rounded-lg p-5 items-center gap-2' onClick={handleClick}>
                <Image src={img} width={20} height={20} alt="Github" />
                GitHub দিয়ে চালিয়ে যান
            </Button>
        </div>
    );
};

export default GithubBtn;