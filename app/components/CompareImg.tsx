import React from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'
import HeadingComponent from './Heading'

type Props = {}

const CompareImg = (props: Props) => {
    return (
        <>
            <HeadingComponent text='Comparison' align='text-center' />
            <ReactCompareSlider
                  itemOne={<ReactCompareSliderImage alt="Image one" src="https://images.unsplash.com/photo-1438401171849-74ac270044ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1784&q=70"/>}
                  itemTwo={<ReactCompareSliderImage alt="Image two" src="https://images.unsplash.com/photo-1437809781432-a957377661ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1784&q=70" style={{transform: 'scale(1.125)'}}/>}
                 
                position={50}
                // style={{
                //     height: '100vh',
                //     transform: 'scale(0.75)',
                //     width: '100%'
                // }}
            />
        </>
    )
}

export default CompareImg