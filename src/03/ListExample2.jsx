import React from 'react';


class ListExample2 extends React.PureComponent {


    render() {

        const priceList = [1000, 2000, 3000, 4000];
        //const prices = priceList.map((price) => (<div> 가격 {price}원</div>));

        /*
        return (

            <>
               

                {priceList.map((price)=>(<div key={price}>{price}</div>))}
            </>
        )
        */
       ﻿return priceList.map((price)=>(<div key={price}>{price}</div>));
    }


}


export default ListExample2; 