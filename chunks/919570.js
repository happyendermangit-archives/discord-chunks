function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        INTERACTION_EVENTS: function() {
            return i
        },
        clearCurrentlyInteractingWindowId: function() {
            return o
        },
        getCurrentlyInteractingWindowId: function() {
            return s
        },
        setCurrentlyInteractingWindowId: function() {
            return a
        }
    });
    let i = ["click", "mousedown", "mouseup", "keydown", "keyup", "keypress", "contextmenu"],
        r = null;

    function s() {
        return r
    }

    function a(e) {
        r = e
    }

    function o(e) {
        r === e && (r = null)
    }
}