const App = () => {
    return(
        <div>
            <Person age={23} name='Maria' hobbies={['skateboard', 'being good', 'making snacks']}/>
            <Person age={31} name='James' hobbies={['bike', 'being bad', 'making pizza']}/>
            <Person age={5} name='Oliverrrrrrrrrrrr' hobbies={['being hilarious', 'walking', 'making mac n cheese']}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));