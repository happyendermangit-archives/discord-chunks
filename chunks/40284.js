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
            return a
        },
        REMOVE_TARGET: function() {
            return o
        },
        addSource: function() {
            return s
        },
        addTarget: function() {
            return u
        },
        removeSource: function() {
            return c
        },
        removeTarget: function() {
            return l
        }
    });
    var r = "dnd-core/ADD_SOURCE",
        i = "dnd-core/ADD_TARGET",
        a = "dnd-core/REMOVE_SOURCE",
        o = "dnd-core/REMOVE_TARGET";

    function s(e) {
        return {
            type: r,
            payload: {
                sourceId: e
            }
        }
    }

    function u(e) {
        return {
            type: i,
            payload: {
                targetId: e
            }
        }
    }

    function c(e) {
        return {
            type: a,
            payload: {
                sourceId: e
            }
        }
    }

    function l(e) {
        return {
            type: o,
            payload: {
                targetId: e
            }
        }
    }
}