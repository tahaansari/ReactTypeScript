export interface Props{
    title: string
    color?: string
}

const Header = (props:Props) => {
    return(
        <>
            <h1 style={{color: props.color ? props.color:"red"}}>{props.title}</h1>
        </>
    )
}

export default Header;