import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { headers } from "next/headers";
import { auth } from "./app/lib/auth";

export async function proxy(request: NextRequest) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user) {
        return NextResponse.redirect(new URL("/signIn", request.url));
    }

    return NextResponse.next(); // let logged-in users through
}

export const config = {
    matcher: ["/product/:path*"],
};