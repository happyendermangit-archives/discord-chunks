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
            return a
        },
        setCurrentlyInteractingWindowId: function() {
            return s
        }
    });
    let i = ["click", "mousedown", "mouseup", "keydown", "keyup", "keypress", "contextmenu"],
        r = null;

    function a() {
        return r
    }

    function s(e) {
        r = e
    }

    function o(e) {
        r === e && (r = null)
    }
}