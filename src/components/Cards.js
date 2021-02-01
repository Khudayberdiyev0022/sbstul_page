import React from 'react'
import '../components/cards.css'

const Cards = () => {
    return (
        <div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6" style={{padding: "1rem"}}>
                        <img class="d-block w-100" src=" " alt="!" style={{background: "red", height: "100%"}}/>
                    </div>
                    <div class="col-md-6" style={{padding: "1rem"}}>
                        <h3>Shopping learn</h3>
                        <p>We have been shaping learners for over one hundred and fifty years – young women and young men who are academically well prepared and who will make a difference in whatever they do. The School motto says ‘That which you do, do well’ and in every aspect of learning in and outside the classroom, how we interact together as a community, in the co-curricular, service and spiritual life of the School, this underpins our School values.</p>
                    <img class="d-block w-100" src=" " alt="!" style={{background: "blue", height: "75%"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
