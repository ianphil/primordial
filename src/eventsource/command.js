class Create_Artist {
  constructor(correlation_id, artist) {
    this.artist = artist;
    this.timestamp = +new Date();
    this.correlation_id = correlation_id;
  }
}

export default Create_Artist;
