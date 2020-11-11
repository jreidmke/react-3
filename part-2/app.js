const App = () => {
    return(
        <div>
            <Tweet username='maria' name='Maria' date='01/24/89' tweet='This hot dog is-is good'/>
            <Tweet username='james' name='James' date='11/26/96' tweet='This hamburger is-is good'/>
            <Tweet username='oliver' name='Oliver' date='3/31/2012' tweet='This hot dog is-is good'/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));