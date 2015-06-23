module.exports.parse = function( str ){
  var parts = str.split(',');

  if ( parts.length !== 2 ){
    throw new Error('Invalid daterange');
  }

  return {
    start: {
      inclusive: parts[0][0] === '['
    , value: parts[0].slice(1)
    }

  , end: {
      inclusive: parts[1][ parts[1].length -1 ] === ']'
    , value: parts[1].slice( 0, -1 )
    }
  };
};

module.exports.serialize = function( range ){
  var inclusivity = {
    true: '[]', false: '()'
  };

  return [
    inclusivity[ range.start.inclusive ][0] + range.start.value
  , range.end.value + inclusivity[ range.end.inclusive ][1]
  ].join(',');
};