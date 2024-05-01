function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addGlobalTag: function() {
            return r
        },
        getGlobalTagsArray: function() {
            return a
        }
    });
    let i = {};

    function r(e, t) {
        i[e] = t
    }

    function a() {
        return Object.keys(i).map(e => "".concat(e, ":").concat(i[e]))
    }
}