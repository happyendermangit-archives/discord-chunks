function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addPostConnectionCallback: function() {
            return o
        }
    }), n("177593"), n("653041");
    var i = n("570140"),
        r = n("38618");
    let a = [];

    function s(e) {
        setImmediate(() => e())
    }

    function o(e) {
        r.default.isConnectedOrOverlay() ? s(e) : a.push(e)
    }
    i.default.subscribe("CONNECTION_OPEN", () => {
        a.forEach(e => s(e)), a = []
    }), i.default.subscribe("CONNECTION_RESUMED", () => {
        a.forEach(e => s(e)), a = []
    })
}