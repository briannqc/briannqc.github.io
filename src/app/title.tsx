const Title = ({title}: { title: string }) => {
    return (
        <>
            <h3 className="w-full text-center font-semibold text-lg text-sky-500">{title}</h3>
            <hr/>
        </>
    )
}

export default Title;