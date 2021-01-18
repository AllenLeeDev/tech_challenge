import { gql } from "@apollo/client"


const GET_SONGS = 
gql`
    query GetSongs {
      getSongs {
        song
        artist
        songReleaseDate
        playCount
        metricA
        metricB
        metricC
        metricCi
        metricD
        metricE
        metricF
        metricG
        metricH
        metricI
        metricJ
        metricK
        metricL
        metricM
        metricN
        metricO
        metricP
      }
    }
  `

export default GET_SONGS