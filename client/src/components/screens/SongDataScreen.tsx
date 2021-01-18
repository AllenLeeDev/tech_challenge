import React, {useState, useMemo } from 'react'
import { useQuery } from "@apollo/client"
import GET_SONGS from "../../services/constants"
import "../styles/table.css"
import { IGetSongs, IGetSongsData } from "./SongDataTypes"


const defaultConfig = {key: "artist", direction:"descending"}
const useSortableData = (data: IGetSongs[], config = defaultConfig) => {
  const [sortConfig, setSortConfig] = useState<any>(config);

  const sortedItems = useMemo(() => {
    if(!data) {
    return
  }
    let sortableItems = [...data];
    if(sortConfig)  {
      sortableItems.sort((a,b) => {
        if(a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1
        }
        return 0
      });
    }
    return sortableItems
  }, [data, sortConfig])

  const requestSort = (key: keyof IGetSongs) => {
    let direction = "ascending";
    if(
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending"
    }
    setSortConfig({ key, direction })
  };

return { items: sortedItems, requestSort, sortConfig}
};


const SongDataScreen: React.FC = () => {
     const { loading, error, data } = useQuery<IGetSongsData>(GET_SONGS)
    
     const { items, requestSort, sortConfig } = useSortableData(data && data.getSongs)

    const getClassNamesFor = (name: string) => {
      if (!sortConfig) {
        return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined
    }

    if (error) return <p> Error </p>
    
   return loading || !items ? <p> Loading </p> : (
    <table>
      <caption>My Favorite Songs</caption>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort('song')}
              className={getClassNamesFor('song')}
            >
              Songs
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('artist')}
              className={getClassNamesFor('artist')}
            >
              Artist
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('songReleaseDate')}
              className={getClassNamesFor('songReleaseDate')}
            >
              Song Release Date
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('playCount')}
              className={getClassNamesFor('playCount')}
            >
             PlayCount
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('metricA')}
              className={getClassNamesFor('metricA')}
            >
              MetricB
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('metricB')}
              className={getClassNamesFor('metricB')}
            >
              MetricB
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('metricC')}
              className={getClassNamesFor('metricC')}
            >
              MetricC
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('metricCi')}
              className={getClassNamesFor('metricCi')}
            >
              MetricCi
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('metricD')}
              className={getClassNamesFor('metricD')}
            >
              MetricD
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('metricE')}
              className={getClassNamesFor('metricE')}
            >
              MetricE
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('metricF')}
              className={getClassNamesFor('metricF')}
            >
              MetricF
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('metricG')}
              className={getClassNamesFor('metricG')}
            >
              MetricG
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('metricH')}
              className={getClassNamesFor('metricH')}
            >
              MetricH
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('metricI')}
              className={getClassNamesFor('metricI')}
            >
              MetricI
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('metricJ')}
              className={getClassNamesFor('metricJ')}
            >
              MetricJ
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('metricK')}
              className={getClassNamesFor('metricK')}
            >
              MetricK
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('metricL')}
              className={getClassNamesFor('metricL')}
            >
             MetricL
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('metricM')}
              className={getClassNamesFor('metricM')}
            >
              MetricM
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('metricN')}
              className={getClassNamesFor('metricN')}
            >
              MetricN
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('metricO')}
              className={getClassNamesFor('metricO')}
            >
              MetricO
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('metricP')}
              className={getClassNamesFor('metricP')}
            >
              MetricP
            </button>
          </th>

        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.index}>
            <td className="text-left">{item.song}</td>
            <td className="text-left">{item.artist}</td>
            <td>{item.songReleaseDate}</td>
            <td>{item.playCount}</td>
            <td>{item.metricA}</td>
            <td>{item.metricB}</td>
            <td>{item.metricC}</td>
            <td>{item.metricCi}</td>
            <td>{item.metricD}</td>
            <td>{item.metricE}</td>
            <td>{item.metricF}</td>
            <td>{item.metricG}</td>
            <td>{item.metricH}</td>
            <td>{item.metricI}</td>
            <td>{item.metricJ}</td>
            <td>{item.metricK}</td>
            <td>{item.metricL}</td>
            <td>{item.metricM}</td>
            <td>{item.metricN}</td>
            <td>{item.metricO}</td>
            <td>{item.metricP}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SongDataScreen