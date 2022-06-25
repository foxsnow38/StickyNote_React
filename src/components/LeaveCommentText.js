import { React, useContext } from 'react'
import MainContext from '../MainContext'

export default function LeaveCommentText({}) {
    const{ position} = useContext(MainContext)
    return (
     
            <div className="Leave-Comment-Text" style={{position:'fixed', top:(position.y+(30)),left:position.x}} > Yorum yazmak icin tikla</div>
       
    )
}
