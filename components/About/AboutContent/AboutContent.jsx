import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import styles from './AboutContent.module.scss';

gsap.registerPlugin(ScrollTrigger);

const AboutContent = () => {
    useEffect(() => {
        const tl1= gsap.timeline({scrollTrigger: {
            trigger: '.imageDiv',
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: 1
        }})
            .from('.imageDiv', {y: '256px', opacity: 0}, 0)
    }, [])
    
    return (
        <div className={`${styles.containerDiv}`}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-2`}></div>
                    <div className={`col-8`}>
                        <div className={`${styles.contentDiv}`}>
                            <div className={`${styles.textDiv}`}>
                                <div className={`${styles.imageDiv} imageDiv`}></div>
                                
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum pulvinar mi ac condimentum. Morbi aliquam ipsum at gravida laoreet. Maecenas porttitor tortor ac augue dictum, nec varius lacus scelerisque. Morbi rhoncus condimentum aliquet. Aliquam urna arcu, consequat eget finibus in, fringilla eget orci. Vestibulum pellentesque feugiat euismod. Donec arcu quam, fermentum vitae eros id, suscipit condimentum ipsum. Maecenas congue tellus vitae mi elementum pharetra. Aenean euismod commodo ex, non interdum tellus molestie ac.</p>

                                <p>Morbi a sem sed tellus rhoncus porttitor at eu purus. Praesent condimentum accumsan lacus a tristique. Duis sed vestibulum ipsum. Pellentesque convallis nulla lectus, non pellentesque nisl laoreet et. Aenean hendrerit tortor dolor, sit amet fermentum ex elementum quis. Fusce semper suscipit neque et semper. Cras eget quam turpis. Aliquam velit enim, mattis id libero id, convallis tristique nunc.</p>
                            </div>
                            <div className={`${styles.ownerDiv}`}>
                                <h1>Brenda<br/>McBride</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;