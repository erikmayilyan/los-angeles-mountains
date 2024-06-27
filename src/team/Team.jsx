import React, { useState } from 'react';
import './team.css';

function Team() {
  const [mountain, setMountain] = useState(1);

  function openPage(num) {
    setMountain(num);
  };

  return (
    <section id="team">
      <div className='container team__main'>
        <div className='team__title'>
          <h1>02.</h1>
          <h3>CLIMB</h3>
        </div>
        <div className='team__text'>
          <p>Cest ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. </p>
        </div>
        </div>
        <div className='team__text__2' hidden>
          <p>Cest ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. </p>
        </div>
        <div className='team__tabs'>
          <ul className='team__mountains'>
            <li className={mountain === 1 ? "mountain__active" : "team__mountain__btn"} onClick={() => openPage(1)}>MOUNTAIN 1</li>
            <li className={mountain === 2 ? "mountain__active" : "team__mountain__btn"} onClick={() => openPage(2)}>MOUNTAIN 2</li>
          </ul>
          <div className='team__result'>
            <div className={mountain === 1 ? "team__active" : "team__content"}>
              <div className='team__schedule'>
                <h2>SCHEDULE</h2>
                <p>25 Nov 2016 <label>Hiking and More</label></p>
                <p>28 Nov 2016 <label>Hiking and More</label></p>
                <p>18 Dec 2016 <label>Hiking and More</label></p>
                <p>7 Jan 2017 <label>Hiking and More</label></p>
              </div>
            </div>
            <div className={mountain === 2 ? "team__active" : "team__content"}>
              <div className='team__schedule'>
                <h2>SCHEDULE</h2>
                <p>25 Nov 2018 <label>Hiking, Camping, and More</label></p>
                <p>28 Nov 2018 <label>Hiking, Camping, and More</label></p>
                <p>18 Dec 2018 <label>Hiking, Camping, and More</label></p>
                <p>7 Jan 2019 <label>Hiking, Camping, and More</label></p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
};

export default Team;