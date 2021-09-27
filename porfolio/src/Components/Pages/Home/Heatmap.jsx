import React from 'react';

// Import the calendarheatmap
import CalendarHeatmap from 'react-calendar-heatmap';

export default class Heatmap extends React.Component {

    constructor(props, context) {
        super(props, context);
        
        function getDummyDates(from, to, numberDates) {
            numberDates = numberDates || 50;
            let result = [];
        
            for(let i = 0; i < numberDates;i++){
                result.push(
                    {
                        date: new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime())),
                        count: Math.floor(Math.random() * 6)
                    }
                );
            }
        
            return result;
        }
        
        this.state = {
            // Some dates to render in the heatmap
            values: getDummyDates(new Date(2016, 0, 1), new Date(2017, 2, 1), 500),
            // How many days should be shown
            numDays: 365
        };

        this.onClick = this.onClick.bind(this);
    }
 
    onClick(value) {
        console.log(value);
    }

    render() {
        return (
            <div style={{width: 700}}>
                <h4>Contributions</h4>
                <CalendarHeatmap
                    endDate={new Date('2017-01-01')}
                    numDays={this.state.numDays}
                    values={this.state.values}
                    onClick={this.onClick}
                />
            </div>
        );
    }
}

