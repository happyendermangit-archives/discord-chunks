function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addGlobalTag: function() {
            return o
        },
        getGlobalTagsArray: function() {
            return i
        }
    });
    var r = {};

    function o(e, t) {
        r[e] = t
    }

    function i() {
        return Object.keys(r).map(function(e) {
            return "".concat(e, ":").concat(r[e])
        })
    }
}