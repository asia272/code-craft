"use client";

import { UserButton } from "@clerk/nextjs";
import { Show, SignInButton } from "@clerk/react";
import { User } from "lucide-react";

function HeaderProfileBtn() {
    return (
        <>
            <UserButton>
                <UserButton.MenuItems>
                    <UserButton.Link
                        label="Profile"
                        labelIcon={<User className="size-4" />}
                        href="/profile"
                    />
                </UserButton.MenuItems>
            </UserButton>

            <Show when={"signed-out"}>
                <SignInButton />
            </Show>
        </>
    );
}
export default HeaderProfileBtn;