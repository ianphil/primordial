import {expect} from 'chai';
import Artist from './artist';

describe('Artist object', () => {
  it('Should have id of zero', () => {
    var artist = new Artist();
    expect(artist.id).to.equal(0);
  });
});
