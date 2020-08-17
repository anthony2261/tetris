import {Block} from './block';

QUnit.test( "simulates-movement-correctly", function( assert ) {
  let block = new Block({x:1, y:1, color: 'red', unit: 20})

  assert.deepEqual( block.simulateLeft, {x:0, y:1}, "simulate left correctly" );
});