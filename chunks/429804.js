function(e) {
    "use strict";
    var t = {
            foo: {}
        },
        n = Object;
    e.exports = function() {
        return ({
            __proto__: t
        }).foo === t.foo && !(({
            __proto__: null
        }) instanceof n)
    }
}