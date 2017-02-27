import {expect} from 'chai';
import documentdb_repo from './documentdb_repo';

describe('DocDB Repo', () => {
   before(function(done) {
    documentdb_repo.init(function() {
      done();
    });
  });

  it('Should have expected database', () => {
    var expected_db = "artist_cmd";
    var actual_db = documentdb_repo.database.id;

    expect(expected_db).to.equal(actual_db);
  });

  it('Should have expected collection', () => {
    var expected_coll = "artist_commands";
    var actual_coll = documentdb_repo.collection.id;

    expect(expected_coll).to.equal(actual_coll);
  });
});
