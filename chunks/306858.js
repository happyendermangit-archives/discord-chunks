function(e, t, n) {
    "use strict";
    var r = {
            __proto__: null,
            foo: {}
        },
        a = Object;
    e.exports = function() {
        return ({
            __proto__: r
        }).foo === r.foo && !(r instanceof a)
    }
}