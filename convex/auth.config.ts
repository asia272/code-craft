import { AuthConfig } from "convex/server";

const authConfig: AuthConfig = {
    providers: [
        {
            domain: "https://trusted-shark-98.clerk.accounts.dev",
            applicationID: "convex",
        },
    ],
};

export default authConfig;