function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ADD_SOURCE: function() {
            return r
        },
        ADD_TARGET: function() {
            return a
        },
        REMOVE_SOURCE: function() {
            return i
        },
        REMOVE_TARGET: function() {
            return o
        },
        addSource: function() {
            return s
        },
        addTarget: function() {
            return c
        },
        removeSource: function() {
            return l
        },
        removeTarget: function() {
            return u
        }
    });
    var r = "dnd-core/ADD_SOURCE",
        a = "dnd-core/ADD_TARGET",
        i = "dnd-core/REMOVE_SOURCE",
        o = "dnd-core/REMOVE_TARGET";

    function s(e) {
        return {
            type: r,
            payload: {
                sourceId: e
            }
        }
    }

    function c(e) {
        return {
            type: a,
            payload: {
                targetId: e
            }
        }
    }

    function l(e) {
        return {
            type: i,
            payload: {
                sourceId: e
            }
        }
    }

    function u(e) {
        return {
            type: o,
            payload: {
                targetId: e
            }
        }
    }
}