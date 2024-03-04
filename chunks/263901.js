function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addPostConnectionCallback: function() {
            return o
        }
    }), n("860677"), n("424973");
    var i = n("913144"),
        s = n("619443");
    let r = [];

    function a(e) {
        setImmediate(() => e())
    }

    function o(e) {
        s.default.isConnectedOrOverlay() ? a(e) : r.push(e)
    }
    i.default.subscribe("CONNECTION_OPEN", () => {
        r.forEach(e => a(e)), r = []
    })
}