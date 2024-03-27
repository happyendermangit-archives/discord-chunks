function(e) {
    "use strict";
    var t = "_erd";

    function n(e) {
        return e[t]
    }
    e.exports = {
        initState: function(e) {
            return e[t] = {},
                function(e) {
                    return e[t]
                }(e)
        },
        getState: n,
        cleanState: function(e) {
            delete e[t]
        }
    }
}