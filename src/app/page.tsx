import Header from "@/app/header";
import resume from "@/resume.json"
import Summary from "@/app/summary";

export default function Home() {
    return (
        <div className="flex justify-center items-center p-5">
            <main className="w-full max-w-5xl p-10 border shadow-2xl">
                <Header {...resume.header} />
                <Summary highlights={resume.summary}/>
            </main>
        </div>
    )
}
