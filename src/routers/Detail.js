import React from "react"

class Detail extends React.Component{
    render(){
        const {location:{state}}=this.props
        return(
            <div>
                <h1>{state.title}</h1>
                <p>{state.summary}</p>
                <img src={state.poster} alt={state.title}/>
            </div>
        )
    }
}

export default Detail;