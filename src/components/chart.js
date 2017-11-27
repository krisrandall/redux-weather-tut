

import React, { Component }     from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine }    from 'react-sparklines'
import _l from 'lodash'


function average(data) {
    return _l.round( _l.sum(data) / data.length )
}

export default ({data, color, units}) => {

    return (
        <div>
            <Sparklines height={120} width={180} data={data}>
                <SparklinesLine color={color}/>
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>{average(data)} {units}</div>
        </div>
    )

}

