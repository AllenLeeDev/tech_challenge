export interface IGetSongs {
    index: any
    song?: string | String ;
    artist?: String;
    songReleaseDate?: String;
    playCount: Number
    metricA?: Number
    metricB?: Number
    metricC?: Number
    metricCi?: Number
    metricD?: Number
    metricE?: Number
    metricF?: Number
    metricG?: Number
    metricH?: Number
    metricI?: Number
    metricJ?: Number
    metricK?: Number
    metricL?: Number
    metricM?: Number
    metricN?: Number
    metricO?: Number
    metricP?: Number
}

export interface IGetSongsData {
    getSongs: IGetSongs[]
}
