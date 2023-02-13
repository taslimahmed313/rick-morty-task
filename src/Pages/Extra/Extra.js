import React, { useEffect, useState } from 'react';

const Extra = () => {
    const [cast, setCast] = useState([]);
    const [episodee, setEpisode] = useState([]);
    const url = "https://rickandmortyapi.com/api/character/3";
    useEffect(()=>{
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            // console.log(data.episode);
            // return data.episode.map(ep => {
            //     fetch(ep)
            //     .then(res => res.json())
            //     .then(epi=> setEpisode(epi))
            // })
            // data.episode.map(ep => setEpisode(ep))
            setEpisode(data.episode);
          });
    },[])
    // console.log(cast)
    // console.log(episodee)


    useEffect(()=>{
        // episodee.map(ep => console.log(ep))
        episodee.map((ep) =>
          fetch(ep)
            .then((res) => res.json())
            .then((data) => {
              // console.log(data)
              setCast(data)
            })
        );
    },[episodee])

     console.log(cast);

//    cast.map((c) => setEpisode(c));


    
    return (
      <div>
        {/* {cast.map((c) => console.log(c))} */}
        <div className='text-2xl'>{cast.name}</div>
      </div>
    );
};

export default Extra;