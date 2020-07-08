import React from 'react';
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';

const ResponsiveGridBlock = () => {

    const layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
    { i: 'c', x: 4, y: 0, w: 1, h: 2 }
    ];

    return (
      <ResponsiveGridLayout className="layout" layouts={layout}
        rowHeight={70} width={1000}
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
        <div key="a" style={{backgroundColor:'yellow'}}>a</div>
            <div key="b" style={{ backgroundColor: 'pink' }}>b</div>
            <div key="c" style={{ backgroundColor: 'grey' }}>c</div>
      </ResponsiveGridLayout>
    );
}

export default ResponsiveGridBlock;