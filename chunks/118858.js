function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        convertSkemaError: function() {
            return o
        }
    });
    var r = "_errors";

    function o(e) {
        var t = {};
        for (var n in e) {
            var o = e[n];
            if (null != o) {
                if (n === r && (t._misc = e[n].map(function(e) {
                        return e.message
                    })), !Array.isArray(o)) {
                    var i = o[r];
                    null != i ? t[n] = i.map(function(e) {
                        return e.message
                    }) : t[n] = [Object.keys(o)[0]]
                }
            }
        }
        return t
    }
}