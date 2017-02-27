import Redis_Repository from '../repositories/redis_repo';
import DocumentDB_Repository from '../repositories/documentdb_repo';

class Artist_Created {
  constructor(artist_command) {
    this.artist_command = artist_command;
  }

  fire_event() {
    // publish event
    Redis_Repository.publish('event_source', this.artist_command);

    // persist event
    DocumentDB_Repository.addItem(this.artist_command, function(err) {
      if (err) return;
    });
  }
}
