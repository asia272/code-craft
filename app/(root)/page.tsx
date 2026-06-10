import { Show, SignUpButton, UserButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
    return (
        <div>Home
            <Show when={"signed-in"}>
                <UserButton />
            </Show>
            <Show when={"signed-out"}>
                <SignUpButton />
            </Show>
        </div>
    )
}

export default Home