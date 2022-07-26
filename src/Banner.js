import './Banner.css';
import React from 'react'

function Banner() {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + '...': string;
    }
    
    return (
        <header className="banner" 
            style={{ 
                backgroundImage: `url('https://image.tmdb.org/t/p/original/wu444tM9YBllq9UcBv5TeidO3j3.jpg')`,
                backgroundCover: "cover",
                backgroundPosition: "center center",
        }}>
          <div className="banner__contents">
                <h1 className="banner__title">Movie Name</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">{truncate(`The universe (Latin: universus) is all of space and time[a] and their contents,[10] including planets, stars, galaxies, and all other forms of matter and energy. The Big Bang theory is the prevailing cosmological description of the development of the universe. According to estimation of this theory, space and time emerged together 13.799±0.021 billion years ago,[2] and the universe has been expanding ever since. While the spatial size of the entire universe is unknown,[3] the cosmic inflation equation indicates that it must have a minimum diameter of 23 trillion light years,[11] and it is possible to measure the size of the observable universe, which is approximately 93 billion light-years in diameter at the present daThe earliest cosmological models of the universe were developed by ancient Greek and Indian philosophers and were geocentric, placing Earth at the center.[12][13] Over the centuries, more precise astronomical observations led Nicolaus Copernicus to develop the heliocentric model with the Sun at the center of the Solar System. In developing the law of universal gravitation, Isaac Newton built upon Copernicus's work as well as Johannes Kepler's laws of planetary motion and observations by Tycho Brahe.
                        een discovered that the universe contains much more matter than is accounted for by visible objects; stars, galaxies, nebulas and interstellar gas. This unseen matter is known as dark matter[17] (dark means that there is a wide range of strong indirect evidence that it exists, but we have not yet detected it directly). The ΛCDM model is the most widely accepted model of the universe. It suggests that about 69.2%±1.2% [2015] of the mass and energy in the universe is a cosmological constant (or, in extensions to ΛCDM, other forms of dark energy, such as a scalar field) which is responsible for the current expansion of space, and about 25.8%±1.1% [2015] is dark matter.[18] Ordinary ('baryonic') matter is therefore only 4.84%±0.1% [2015] of the physical universe.[18] Stars, planets, and visible gas clouds only form about 6% of the ordinary
                `, 150)}
                </h1>
                <div className="banner--fadeBottom" />
            </div>  
        </header>
    )
}

export default Banner
