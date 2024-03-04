function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        pushLayer: function() {
            return s
        },
        popLayer: function() {
            return r
        },
        popAllLayers: function() {
            return a
        }
    });
    var i = n("913144");

    function s(e) {
        i.default.dispatch({
            type: "LAYER_PUSH",
            component: e
        })
    }

    function r() {
        i.default.dispatch({
            type: "LAYER_POP"
        })
    }

    function a() {
        i.default.dispatch({
            type: "LAYER_POP_ALL"
        })
    }
}