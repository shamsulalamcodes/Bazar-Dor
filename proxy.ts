import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { headers } from "next/headers";
import { auth } from "./app/lib/auth";
import { toast } from "@heroui/react";

export async function proxy(request: NextRequest) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const name = session?.user?.name;

    if (!session?.user) {
        toast.danger('Updating Failed!!');
        return NextResponse.redirect(new URL("/signIn", request.url));
    }

    toast.success(`Welcome ${name}`)
    return NextResponse.next(); // let logged-in users through
}

export const config = {
    matcher: ["/product/:path*"],
};