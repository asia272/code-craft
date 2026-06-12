import { Editor } from '@monaco-editor/react'
import Header from './_components/Header'
import EditorPanel from './_components/EditorPanel'

const Home = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <EditorPanel />
                Main content
            </div>

        </div>
    )
}

export default Home