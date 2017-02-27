import Create_Artist from './command';
import Artist_Created from './event';

class command_Handler {
  apply_command(correlation_id, artist_data) {
    // TODO: validate
    var artist_cmd = new Create_Artist(correlation_id, artist_data);
    var artist_evt = new Artist_Created(artist_cmd);

    artist_evt.fire_event();
  }
}
