function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        popAllLayers: function() {
            return a
        },
        popLayer: function() {
            return i
        },
        pushLayer: function() {
            return o
        }
    });
    var r = n("629815");

    function o(e) {
        r.default.dispatch({
            type: "LAYER_PUSH",
            component: e
        })
    }

    function i() {
        r.default.dispatch({
            type: "LAYER_POP"
        })
    }

    function a() {
        r.default.dispatch({
            type: "LAYER_POP_ALL"
        })
    }
}