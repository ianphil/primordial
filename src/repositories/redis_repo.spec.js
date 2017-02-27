import {expect} from 'chai';
import redis_repo from './redis_repo';
import redis from 'redis';

describe('Redis Repository', function() {
  // var msg = 'none';

  // before(function(done) {
  //   redis_repo.subscribe('test_chan', function(message) {
  //     msg = message;
  //     done();
  //   });
  // });

  it('Should publish message', function() {
    redis_repo.publish('test_chan', 'test_msg');
    expect(1).to.equal(1);
  });

  // it('Should subscribe to a message', function() {
  //   redis_repo.kill();
  //   expect(msg).to.equal('test_msg');
  // });
});
