const Tweet = (prop) => {
    return(
        <div>
            <h1>Username: {prop.username}</h1>
            <h2>Name: {prop.name}</h2>
            <h3>Date: {prop.date}</h3>
            <h4>Tweet: {prop.tweet}</h4>
        </div>
    )
}