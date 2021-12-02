import { init } from 'ityped';
import React, { useEffect, useState } from 'react';

// Import the calendarheatmap
import CalendarHeatmap from 'react-calendar-heatmap';
import { getContributions } from '../../utils/requests';




export default function Heatmap() {

    const [state, setState] = useState({
        values: [],
        numDays: 365,
        startDate: '0000-00-00',
        endDate: '0000-00-00',

    })
    
    useEffect(async() => {
        let contributions = await getContributions() 
        setState({
            values: await contributions, 
            numDays:  contributions.length, 
            startDate: contributions[0].date,
            endDate: contributions[contributions.length-1].date
        })

        const header = await document.querySelector('#ContributionsHeader');
        if(header){
            init(header,{
                cursorChar: '_',
                showCursor: true,
                loop: false,
                strings: [
                    'Contributions'
                ]
            })
        }else{return null}
     
    }, [])

    function onClick(){

    }
    return (
        <>
            <span id="ContributionsHeader" className="Main-h3"></span>

            <div 
            data-aos="fade-up" 
            data-aos-duration="600"
            data-aos-offset="200"
            id = 'Heatmap'
            >
                <CalendarHeatmap
                    startDate = {state.startDate}
                    endDate ={state.endDate}
                    values={state.values}
                    onClick={onClick}
                    classForValue={(value) => {
                        if (value.count === 0) {
                        return 'color-empty';
                        }
                        if(value.count<=2){
                            return `color-github-${1}`
                        }
                        if(value.count >= 3 ){
                            return `color-github-${2}`;
                        }
                        if(value.count >= 5 ){
                            return `color-github-${3}`;
                        }if(value.count >= 10 ){
                            return `color-github-${4}`;
                        }else{
                            return `color-github-${4}`
                        }


                    }}
                />
            </div>
        </>
    )
}

