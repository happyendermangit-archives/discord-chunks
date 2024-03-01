function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addPostConnectionCallback: function() {
            return o
        }
    }), n("860677"), n("424973");
    var s = n("913144"),
        i = n("619443");
    let r = [];

    function a(e) {
        setImmediate(() => e())
    }

    function o(e) {
        i.default.isConnectedOrOverlay() ? a(e) : r.push(e)
    }
    s.default.subscribe("CONNECTION_OPEN", () => {
        r.forEach(e => a(e)), r = []
    })
}