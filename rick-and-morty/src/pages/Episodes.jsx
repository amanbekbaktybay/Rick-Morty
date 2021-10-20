import "../styles/components/Episodes.scss";
import {Search} from "../components/ui/base/Search";
import {Episode} from "../components/ui/base/Episode";
import {useEffect, useState} from "react";
import {sortArray} from "../scripts";
import {EpisodesProfile} from "./EpisodesProfile";
import {Navigation} from "../components/ui/base/Navigation";

export function Episodes(props){

    const [episodes,setEpisodes] = useState([]);

    const [buffer1,setBuffer1] = useState([]);
    const [buffer2,setBuffer2] = useState([]);
    const [buffer3,setBuffer3] = useState([]);
    const [buffer4,setBuffer4] = useState([]);

    const [season,setSeason] = useState(1);

    const [isEpisodesProfile,setIsEpisodesProfile] = useState(false);
    const [episodesProfileProps,setEpisodesProfileProps] = useState({});


    const [search,setSearch] = useState("");
   async function fetchEpisode() {
      const response1 = await fetch("http://173.249.20.184:7001/api/Episodes/GetAll?PageNumber=1&PageSize=10&Season=1");
      const response2 = await fetch("http://173.249.20.184:7001/api/Episodes/GetAll?PageNumber=1&PageSize=10&Season=2");
      const response3 = await fetch("http://173.249.20.184:7001/api/Episodes/GetAll?PageNumber=1&PageSize=10&Season=3");
      const response4 = await fetch("http://173.249.20.184:7001/api/Episodes/GetAll?PageNumber=1&PageSize=10&Season=4");

      const responseJson1 = response1.json();
      await responseJson1.then(data => {
          const responseArray = data.data;
          responseArray.forEach(item => {
              buffer1.push(
                  <Episode
                      episodesData={item}
                      key={item.id}
                      callback={() => {
                          setEpisodesProfileProps(item);
                          setIsEpisodesProfile(!isEpisodesProfile);
                      }}
                  />
              );
          });
      })

       const responseJson2 = response2.json();
       await responseJson2.then(data => {
          const responseArray = data.data;
          responseArray.forEach(item => {
              buffer2.push(
                  <Episode
                      episodesData={item}
                      key={item.id}
                      callback={() => {
                          setEpisodesProfileProps(item);
                          setIsEpisodesProfile(!isEpisodesProfile);
                      }}
                  />
              );
          });
      })
       const responseJson3 = response3.json();
       await responseJson3.then(data => {
          const responseArray = data.data;
          responseArray.forEach(item => {
              buffer3.push(
                  <Episode
                      episodesData={item}
                      key={item.id}
                      callback={() => {
                          setEpisodesProfileProps(item);
                          setIsEpisodesProfile(!isEpisodesProfile);
                      }}
                  />
              );
          });
      })
       const responseJson4 = response4.json();
       await responseJson4.then(data => {
          const responseArray = data.data;
          responseArray.forEach(item => {
              buffer4.push(
                  <Episode
                      episodesData={item}
                      key={item.id}
                      callback={() => {
                          setEpisodesProfileProps(item);
                          setIsEpisodesProfile(!isEpisodesProfile);
                      }}
                  />
              );
          });
      })
   }


   sortArray(buffer2);

    useEffect(async () => {
        if (buffer1.length === 0){
           await fetchEpisode();
           setEpisodes(buffer1);
        }

        if (search) {
          let filteredArray = episodes.filter(item => item.props.name.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()));
          setEpisodes(filteredArray);
        }else{
          switch (season){
          case 1:setEpisodes(buffer1);break;
          case 2:setEpisodes(buffer2);break;
          case 3:setEpisodes(buffer3);break;
          case 4:setEpisodes(buffer4);break;
          }
        }

    },[search]);

    return(
        <div className="container">
            {
                isEpisodesProfile?
                    <EpisodesProfile
                        callback={() => {setIsEpisodesProfile(!isEpisodesProfile)}}
                        episodesData={episodesProfileProps}
                    />
                    :
                <section>
                    <Search placeHolder="Найти эпизод" callback={(value) => {
                        setSearch(value)
                    }}/>
                    <div className="episodes">
                        <div className="episodes__seasons">
                        <span className="episodes__season"
                              onClick={() => {
                                  setEpisodes(buffer1)
                                  setSeason(1);
                              }}>
                            <p className="episodes__season-num">
                                СЕЗОН 1
                            </p>
                        </span>

                            <span className="episodes__season" onClick={() => {
                                setEpisodes(buffer2)
                                setSeason(2);
                            }}>
                            <p className="episodes__season-num">
                                СЕЗОН 2
                            </p>
                        </span>

                            <span className="episodes__season" onClick={() => {
                                setEpisodes(buffer3)
                                setSeason(3);
                            }}>
                            <p className="episodes__season-num">
                                СЕЗОН 3
                            </p>
                        </span>

                            <span className="episodes__season" onClick={() => {
                                setEpisodes(buffer4)
                                setSeason(4);
                            }}>
                            <p className="episodes__season-num">
                                СЕЗОН 4
                            </p>
                        </span>
                            <span className="episodes__season" onClick={() => {
                                setEpisodes(buffer4)
                                setSeason(4);
                            }}>
                            <p className="episodes__season-num">
                                СЕЗОН 4
                            </p>
                        </span>
                        </div>

                        <div className="episodes__block">
                            {episodes}
                        </div>
                    </div>
                    <Navigation iconNumber={3}/>
                </section>
            }

        </div>
    );
}