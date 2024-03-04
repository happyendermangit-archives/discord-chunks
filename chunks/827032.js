function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addGlobalTag: function() {
            return s
        },
        getGlobalTagsArray: function() {
            return r
        }
    });
    let i = {};

    function s(e, t) {
        i[e] = t
    }

    function r() {
        return Object.keys(i).map(e => "".concat(e, ":").concat(i[e]))
    }
}