type HeaderProps = {
    fullName: string
    title: string
    phone: string
    email: string
    website: string
    linkedIn: string
    location: string
}

const Header = (props: HeaderProps) => {
    return (
        <section className="text-center">
            <h1 className="text-2xl font-bold font-serif text-sky-500">{props.fullName}</h1>
            <h3 className="text-xl">{props.title}</h3>
            <div className="flex justify-center text-sm">
                <p>{props.phone}</p>
                <p className="mx-3">•</p>
                <a href={"mailto:" + props.email}>{props.email}</a>
                <p className="mx-3">•</p>
                <a href={props.website} target="_blank">{props.website}</a>
                <p className="mx-3">•</p>
                <a href={props.linkedIn} target="_blank">{props.linkedIn}</a>
                <p className="mx-3">•</p>
                <p>{props.location}</p>
            </div>
        </section>
    )
}

export default Header;
