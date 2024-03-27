function(t, r, n) {
    "use strict";
    var e = n("626544").match(/firefox\/(\d+)/i);
    t.exports = !!e && +e[1]
}