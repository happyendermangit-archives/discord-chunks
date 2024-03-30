function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addPostConnectionCallback: function() {
            return u
        }
    });
    var r = n("629815"),
        o = n("950879"),
        i = [];

    function a(e) {
        setImmediate(function() {
            return e()
        })
    }

    function u(e) {
        o.default.isConnectedOrOverlay() ? a(e) : i.push(e)
    }
    r.default.subscribe("CONNECTION_OPEN", function() {
        i.forEach(function(e) {
            return a(e)
        }), i = []
    })
}