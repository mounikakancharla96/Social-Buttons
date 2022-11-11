const Button = props => {
    const { className, text } =props
    return <button className={className}>{text}</button> 
}

const element = (
    <div className="container">
        <h1 className="heading">Social Buttons</h1>
        <div className="buttons">
            <Button className="button1" text="Like"/>
            <Button className="button2" text="Comment"/>
            <Button className="button3" text="Share"/>
        </div>
    </div>

)

ReactDOM.render(element, document.getElementById('root'))
