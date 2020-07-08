import React from 'react';
import GridLayout from 'react-grid-layout';
import { CMArea } from 'senze-graphs';
// import { CMDonut } from 'senze-graphs';
import { CMLine } from 'senze-graphs';


const GridBlock = () => {
  


const Series = {
  data: [
    { label: "Aug'18", value: '93' },
    { label: "Sept'18", value: '112' },
    { label: "Oct'18", value: '43' },
    { label: "Nov'18", value: '74' },
    { label: "Dec'18", value: '119' },
    { label: "Forecast - Jan'19", value: '88' },
  ],
  summary: { value: 529 },
  info: [],
};

   const graphData =  {
    "title":"Average Monthly Spending",
    "subtitle":"for all cardholders",
    "summary":{
		"subtext":"total",
		"value": 3576
    },
    "data":[
        {"label":"Dec","x1":"621.12","x2":"367.87", "x3":"675.23", "x4":"512.56"},
        {"label":"Jan","x1":"547.21","x2":"412.12", "x3":"556.34", "x4":"524.12"},
        {"label":"Feb","x1":"587.46","x2":"378.23", "x3":"424.45", "x4":"593.23"},
        {"label":"Mar","x1":"564.35","x2":"343.23", "x3":"493.33", "x4":"456.78"},
        {"label":"Apr","x1":"612.34","x2":"467.45", "x3":"513.43", "x4":"421.34"}
    ],
    "labels":[{
        "label" : "Groceries",
        "value" : "x1"
    },
    {
        "label" : "Restaurant",
        "value" : "x2"
    },
    {
        "label" : "Travel",
        "value" : "x3"
    },
    {
        "label" : "Others",
        "value" : "x4"
    }
],
    "info":[]
}

 const layout = [
      {i: "a",x: 0, y: 0, w: 2, h: 8, static: true},
      {i: "b",x: 2, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      {i: "c",x: 5, y: 0, w: 1, h: 8}
    ]; 

    return (
    <GridLayout className="layout" layout={layout} cols={3} rowHeight={30} width={1000}>
        
        <div key="a"><CMArea data={graphData} /></div>
        <div key="b" style={{backgroundColor:'blue'}}>b</div>
        <div key="c" style={{backgroundColor:'pink'}}><CMLine data={graphData} /></div>
            </GridLayout>            
   
    )
}

export default GridBlock;