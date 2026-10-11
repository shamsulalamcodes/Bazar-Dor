'use client'
import { authClient } from "@/app/lib/auth-client";
import { Button, toast } from "@heroui/react";
import { redirect } from "next/navigation";
import img from '../../assets/icons8-google-48.png'
import Image from "next/image";

const GoogleBtn = () => {

    const handleClick = async () => {
        const { data, error } = await authClient.signIn.social({
            provider: "google", callbackURL: '/'
        });

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
        // <div className="my-2">
        //     <Button className='flex items-center gap-2' onClick={handleClick}>
        //         <Image src={img} width={20} height={20} alt="Google" />
        //         Google দিয়ে চালিয়ে যান
        //     </Button>
        // </div>
        <div className="my-2">
            <Button className='flex bg-white font-semibold hover:bg-black hover:text-white border text-black rounded-lg p-5 items-center gap-2' onClick={handleClick}>
                <Image src={img} width={20} height={20} alt="Google" />
                Google দিয়ে চালিয়ে যান
            </Button>
        </div>
    );
};

export default GoogleBtn;