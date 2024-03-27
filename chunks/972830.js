function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addPostConnectionCallback: function() {
            return o
        }
    }), n("177593"), n("653041");
    var i = n("570140"),
        r = n("38618");
    let s = [];

    function a(e) {
        setImmediate(() => e())
    }

    function o(e) {
        r.default.isConnectedOrOverlay() ? a(e) : s.push(e)
    }
    i.default.subscribe("CONNECTION_OPEN", () => {
        s.forEach(e => a(e)), s = []
    })
}