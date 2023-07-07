import {hexHash} from "next/dist/shared/lib/hash";
import Title from "@/app/title";

type SummaryProps = {
    highlights: string[]
}

const Summary = ({highlights}: SummaryProps) => {
    return (
        <section>
            <Title title="Summary"/>
            {highlights.map(bullet => <li className="text-sm" key={hexHash(bullet)}>{bullet}</li>)}
        </section>
    )
}

export default Summary;
