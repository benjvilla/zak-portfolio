// Home page imports
import React from 'react'

// Home page content
export default function Home(){

    return (
        <div className='homePage'>
            <div className='heroOverlay'>
                <h2>Hi, I'm Zak Rittenhouse!</h2>
                <h3>Learning Experience Designer</h3>
                <a href="/portfolio" class="medium-button">View Portfolio</a>
                <div>
                    <p>Marvel Nerd</p>
                    <p>Tech Geek</p>
                    <p>Music Lover</p>
                    <p>DEI Practitioner</p>
                </ div>
            </ div>

            <div className='heroContainer'>
                <div className='homeThen'>
                    <h3>It all started with burgers and shakes...</h3>
                    <img 
                        class="js-lazy e2e-site-project-module-image image-loaded" 
                        src="https://cdn.myportfolio.com/af2b14b5-5d34-48cb-8346-883337609fd8/13de2d52-d313-4baf-b6ba-f0113f60d6e7_rw_1200.jpg?h=106a34051a573155c12e81df16d4dd50" 
                        width="40%" 
                        srcset="https://cdn.myportfolio.com/af2b14b5-5d34-48cb-8346-883337609fd8/13de2d52-d313-4baf-b6ba-f0113f60d6e7_rw_600.jpg?h=be9c1536d3e2e6bac97988ea3ff3c567 600w,https://cdn.myportfolio.com/af2b14b5-5d34-48cb-8346-883337609fd8/13de2d52-d313-4baf-b6ba-f0113f60d6e7_rw_1200.jpg?h=106a34051a573155c12e81df16d4dd50 960w," 
                        sizes="(max-width: 960px) 100vw, 960px" 
                    />
                    <p>
                        Most people are surprised to learn I started my career as a server and milkshake master at Steak n’ Shake when I was 18. Learning and development came into my life at age 20, after I was asked if I wanted to teach what I knew to new hires in the restaurant. From then on, I was fascinated by learning and development methods, theories, design, technology and the way it could make or break a workplace experience. It is also the thing I can’t shut up about, so I’m lucky that I’ve been able to do this kind of work for over a decade.
                    </ p>
                </ div>

                <div className='homeNow'>
                    <h3>...Then, it turned into so much more.</h3>
                    <img 
                        class="js-lazy e2e-site-project-module-image image-loaded" 
                        src="https://cdn.myportfolio.com/af2b14b5-5d34-48cb-8346-883337609fd8/e8735317-e619-42f7-b986-c7ffe9660bbb_rw_3840.JPG?h=df7f7097fb265ec58f861745c4d9a7fb" 
                        width="40%" 
                        srcset="https://cdn.myportfolio.com/af2b14b5-5d34-48cb-8346-883337609fd8/e8735317-e619-42f7-b986-c7ffe9660bbb_rw_600.JPG?h=ca171dd96d78f28a030d9cbdf05395c0 600w,https://cdn.myportfolio.com/af2b14b5-5d34-48cb-8346-883337609fd8/e8735317-e619-42f7-b986-c7ffe9660bbb_rw_1200.JPG?h=d734d990f9b33cf412d1dac7dde4aada 1200w,https://cdn.myportfolio.com/af2b14b5-5d34-48cb-8346-883337609fd8/e8735317-e619-42f7-b986-c7ffe9660bbb_rw_1920.JPG?h=0b1f864aec6ae81779e3c068cf78884b 1920w,https://cdn.myportfolio.com/af2b14b5-5d34-48cb-8346-883337609fd8/e8735317-e619-42f7-b986-c7ffe9660bbb_rw_3840.JPG?h=df7f7097fb265ec58f861745c4d9a7fb 3840w," 
                        sizes="(max-width: 3840px) 100vw, 3840px" 
                    />
                    <p>
                        When I work with new hires, veteran staff, managers, directors or even executives, they tell me they really understand my passion for people and how employee training is effective when done correctly—that’s my favorite part of what I do. To have the value of the work you do recognized by external clients and internal stakeholder is the best reward.
                    </p>
                </ div>

                <div className='testimonials'>

                </ div>
            </ div>
        </ div>
    )
}