import React from 'react'
import HeaderV from '../Header/header'
import CarouselV from '../Carousel/carousel'
// import History from ''
import FooterV from '../Footer/footer'


const Homepage = () => {
    return (
        <React.Fragment>
            <HeaderV />
            <CarouselV />
            <div style={{ margin: "300px 300px" }}>
                <FooterV />
            </div>
        </React.Fragment>
    )
}
export default Homepage