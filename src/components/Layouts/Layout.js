import React from "react"

import Aux from '../../hoc/ux'
import './Layout.css'

const layout = (props) => (
    <Aux>
        <div class="jumbotron">
            {props.children}
        </div>
    </Aux>
)

export default layout;