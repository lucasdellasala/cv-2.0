export const List = (props) => {
    const items = props.items;
    return (
        <ul>
            {
                items.map((item) => {
                    console.log({ item })
                    return (
                        <li>
                            <a href={item.url}><h4>{item.company}</h4></a> <span>{item.role}</span> | <span>{item.from} - {item.to}</span>
                            <p>{item.description}</p>
                        </li>)
                }
                )}
        </ul>)
}

