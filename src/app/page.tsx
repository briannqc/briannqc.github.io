import Header from "@/app/header";
import resume from "@/resume.json"

export default function Home() {
    return (
        <div className="flex justify-center items-center p-5">
            <main className="w-full max-w-5xl p-5 border shadow-2xl">
                <Header {...resume.header} />
            </main>
        </div>
    )
}
