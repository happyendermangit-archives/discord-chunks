function(e, t, n) {
    "use strict";
    var r = {
            foo: {}
        },
        a = Object;
    e.exports = function() {
        return ({
            __proto__: r
        }).foo === r.foo && !(({
            __proto__: null
        }) instanceof a)
    }
}