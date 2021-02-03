import React from 'react'
import style from './circular.module.css'
import img1 from '../images/honeycomb.png'

const Circular = () => {
    return (
        <div>
            <div className={style.container}>
                <h3 className={style.title}>There are so many opportunities for Westbourne students to follow their passions whether they be on the sporting fields, the pool, the stage, the studio or the great outdoors. With extensive co-curricular and extracurricular programs in place, the difficulty will be in choosing. In addition to the programs, there are public speaking, debating, United Nations and Youth Parliament, service and social justice programs</h3>
            </div>
            <div className={style.container_two}>
                <div className={style.text}>
                    <h5>Outdoor Education</h5>
                    <p>Outdoor Education at Westbourne Grammar is a sequential program from Prep to Year 12. The School’s core values; community, creativity, scholarship and courage are reflected in each and every aspect of the program to ensure it is a truly individual. Throughout all the Year levels, activities and requirements are age appropriate, whilst experiences in each year level are enriched as competence is built upon.</p>
                    <p>From Prep to Year 9, each student attends a compulsory Year level camp which varies in length from an afternoon after school, to a five-day journey. Camps are held throughout Victoria in both dormitory-style accommodation and tents. During these camps the students participate in a wide variety of activities, including abseiling, rock climbing, hiking, kayaking and mountain biking.</p>
                    <p>There are also optional Outdoor Education experiences in which the students can participate. Optional camps are held in Years 10, 11 and 12. These experiences are open to any student, and include cross country skiing, white water rafting, downhill skiing, snowboarding and hiking along Australia’s iconic Great Alpine Walk.</p>
                    <p>The Duke of Edinburgh Award and Compass Award are available for students who want that challenge. These awards are optional for students, and take them on a journey of self-awareness.</p>
                </div>
                <img src={img1} alt="#" />
            </div>
            <div className={style.container_three}>
                <img src={img1} alt="#" />
                <div className={style.text}>

                    <h5>Sport</h5>
                    <p>All students from Year 5 to Year 12 participate in our extensive sports program both at a House level and  interschool competitions. Sport is a compulsory aspect of school life for all students. The high level of engagement and performance of Westbourne students in a wide variety of sports is a real feature of school life.  All-weather floodlit playing fields and extensive facilities accommodate many codes of play and an exceptional team of onsite and guest coaches and mentors support all abilities and aspirations. Partnerships with professional leagues and player associations provide access to opportunity and continual inspiration.  This gives Westbourne students an edge in competition but it also enhances the great sense of enjoyment, commitment and sportsmanship that permeates our comprehensive sports program.</p>
                </div>
            </div>
            <div className="container">
                <div className={style.text_four}>
                    <h5>Visual Arts</h5>
                    <p>Complimenting the extensive visual arts curriculum, there are also many opportunities for students to engage with other aspects of the arts including life drawing and photography.  Each year,  exhibitions of student art work are held which showcase the talents of our students to the wider school community.</p>
                    <p>Life drawing is a co-curricular activity which is open to VCE students. Classes run weekly for three terms, and students attend classes to develop and extend their observational and expressive drawing skills. Within sessions, students are introduced to a variety of strategies and techniques in drawing, painting and sculpting the figure from life.</p>
                    <p>Photography Club is open to interested students Year 7 to Year 12, in Terms 1 and 2. In the sessions, students learn about the workings of analogue and digital cameras, darkroom processing and digital manipulation. Classes focus on developing technical skills, visual awareness and taking effective photographs through the consideration of composition, lighting and aesthetic concerns.</p>
                </div>
            </div>
            <div className={style.container_two}>
                <img src={img1} alt="#" />
                <div className={style.text}>
                    <h5>Outdoor Education</h5>
                    <p>Outdoor Education at Westbourne Grammar is a sequential program from Prep to Year 12. The School’s core values; community, creativity, scholarship and courage are reflected in each and every aspect of the program to ensure it is a truly individual. Throughout all the Year levels, activities and requirements are age appropriate, whilst experiences in each year level are enriched as competence is built upon.</p>
                    <p>From Prep to Year 9, each student attends a compulsory Year level camp which varies in length from an afternoon after school, to a five-day journey. Camps are held throughout Victoria in both dormitory-style accommodation and tents. During these camps the students participate in a wide variety of activities, including abseiling, rock climbing, hiking, kayaking and mountain biking.</p>
                    <p>There are also optional Outdoor Education experiences in which the students can participate. Optional camps are held in Years 10, 11 and 12. These experiences are open to any student, and include cross country skiing, white water rafting, downhill skiing, snowboarding and hiking along Australia’s iconic Great Alpine Walk.</p>
                    <p>The Duke of Edinburgh Award and Compass Award are available for students who want that challenge. These awards are optional for students, and take them on a journey of self-awareness.</p>
                </div>
            </div>
        </div>
    )
}

export default Circular

