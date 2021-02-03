import React from 'react'

const Carousel = () => {
    return (
        <div>
            <div class="container-fluid" style={{padding: "0", margin: "0"}}>
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>


                    <div class="carousel-inner">
                        <div class="carousel-item active" style={{ background: "blue", height: "100vh", width: "100%" }}>
                            <img class="d-block w-100" src=" " alt="Los Angeles" />
                            <div class="carousel-caption">
                                <h3 style={{

                                }}>Toshkent ... universiteti</h3>
                                <p>O'qsih muddati 3yil</p>
                            </div>

                        </div>

                        <div class="carousel-item" style={{ background: "green", height: "100vh", width: "100%" }}>
                            <img class="d-block w-100" src=" " alt="Chicago" />
                            <div class="carousel-caption">
                                <h3>Toshkent ... universiteti</h3>
                                <p>O'qsih muddati 3yil</p>
                            </div>
                        </div>

                        <div class="carousel-item" style={{ background: "red", height: "100vh", width: "100%" }}>
                            <img class="d-block w-100" src=" " alt="New york" />
                            <div class="carousel-caption">
                                <h3>Toshkent ... universiteti</h3>
                                <p>O'qsih muddati 3yil</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel
