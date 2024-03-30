function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        INTERACTION_EVENTS: function() {
            return r
        },
        clearCurrentlyInteractingWindowId: function() {
            return u
        },
        getCurrentlyInteractingWindowId: function() {
            return i
        },
        setCurrentlyInteractingWindowId: function() {
            return a
        }
    });
    var r = ["click", "mousedown", "mouseup", "keydown", "keyup", "keypress", "contextmenu"],
        o = null;

    function i() {
        return o
    }

    function a(e) {
        o = e
    }

    function u(e) {
        o === e && (o = null)
    }
}