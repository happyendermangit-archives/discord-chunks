function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ADD_SOURCE: function() {
            return r
        },
        ADD_TARGET: function() {
            return i
        },
        REMOVE_SOURCE: function() {
            return o
        },
        REMOVE_TARGET: function() {
            return s
        },
        addSource: function() {
            return a
        },
        addTarget: function() {
            return c
        },
        removeSource: function() {
            return u
        },
        removeTarget: function() {
            return d
        }
    });
    var r = "dnd-core/ADD_SOURCE",
        i = "dnd-core/ADD_TARGET",
        o = "dnd-core/REMOVE_SOURCE",
        s = "dnd-core/REMOVE_TARGET";

    function a(e) {
        return {
            type: r,
            payload: {
                sourceId: e
            }
        }
    }

    function c(e) {
        return {
            type: i,
            payload: {
                targetId: e
            }
        }
    }

    function u(e) {
        return {
            type: o,
            payload: {
                sourceId: e
            }
        }
    }

    function d(e) {
        return {
            type: s,
            payload: {
                targetId: e
            }
        }
    }
}