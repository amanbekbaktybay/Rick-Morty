import "../styles/components/Episodes.scss";
import {Search} from "../components/ui/base/Search";
import {Episode} from "../components/ui/base/Episode";
import {useEffect, useState} from "react";

export function Episodes(props){

    const [episodes,setEpisodes] = useState([]);
    const [buffer,setBuffer] = useState([]);
    const [search,setSearch] = useState("");
   async function fetchEpisode() {
      const response = await fetch("http://173.249.20.184:7001/api/Episodes/GetAll?PageNumber=1&PageSize=10&Season=1");
      const responseJson = response.json();

      await responseJson.then(data => {
          const responseArray = data.data;

          responseArray.forEach(item => {
              buffer.push(
                  <Episode
                      link={item["imageName"]}
                      name={item.name}
                      series={item.series}
                      date={item["premiere"]}
                      key={item.id}
                  />
              );
          });
      })
   }



    useEffect(async () => {
        if (buffer.length === 0){
           await fetchEpisode();
           setEpisodes(buffer);
        }
        if (search) {
            let filteredArray = buffer.filter(item => item.props.name.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()));
            setEpisodes(filteredArray);
        }else{
            setEpisodes(buffer);
        }
    },[search])
    return(
        <div className="container">
            <Search placeHolder="Найти эпизод" callback={(value) => setSearch(value)}/>
            <div className="episodes">
                <div className="episodes__seasons">
                    <span className="episodes__season">
                        <p className="episodes__season-num">
                            СЕЗОН 1
                        </p>
                    </span>

                     <span className="episodes__season">
                        <p className="episodes__season-num">
                            СЕЗОН 2
                        </p>
                    </span>

                     <span className="episodes__season">
                        <p className="episodes__season-num">
                            СЕЗОН 3
                        </p>
                    </span>

                    <span className="episodes__season">
                        <p className="episodes__season-num">
                            СЕЗОН 4
                        </p>
                    </span>
                </div>

                <div className="episodes__block">
                    {episodes}
                </div>
            </div>

        </div>
    );
}