function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        popAllLayers: function() {
            return s
        },
        popLayer: function() {
            return a
        },
        pushLayer: function() {
            return r
        }
    });
    var i = n("570140");

    function r(e) {
        i.default.dispatch({
            type: "LAYER_PUSH",
            component: e
        })
    }

    function a() {
        i.default.dispatch({
            type: "LAYER_POP"
        })
    }

    function s() {
        i.default.dispatch({
            type: "LAYER_POP_ALL"
        })
    }
}