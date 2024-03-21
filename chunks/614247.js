function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        convertSkemaError: function() {
            return o
        }
    });
    let t = "_errors";

    function o(e) {
        let _ = {};
        for (let E in e) {
            let o = e[E];
            if (null == o) continue;
            if (E === t && (_._misc = e[E].map(e => e.message)), Array.isArray(o)) continue;
            let n = o[t];
            null != n ? _[E] = n.map(e => e.message) : _[E] = [Object.keys(o)[0]]
        }
        return _
    }
}