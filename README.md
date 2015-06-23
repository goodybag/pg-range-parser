# PG Range

> Handles parsing of postgres [range types](http://www.postgresql.org/docs/9.3/static/rangetypes.html)

__install__

```
npm install -S pg-range-parser
```

__usage__

```javascript
var pgRangeType = require('pg-range-parser');
  
// { start:  { value: '2015-01-01', inclusive: true }
// , end:    { value: '2015-02-01', inclusive: false }
// }
pgRangeType.parse('[2015-01-01,2015-02-01)')

// '[2015-01-01,2015-02-01)'
pgRangeType.serialize({
  start:  { value: '2015-01-01', inclusive: true }
, end:    { value: '2015-02-01', inclusive: false }
})
```

pgtype will modify your enums (never drops) and add new types.

## API

### Root Namespace

#### `.parse( String ) -> Object`

Parse a range from a string

#### `.serialize( Object ) -> String`

Serialize a range object
