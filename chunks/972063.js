function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isInDndMode: function() {
            return a
        },
        toggleDndMode: function() {
            return o
        },
        useDndMode: function() {
            return i
        },
        useDndStore: function() {
            return r
        }
    });
    var r = (0, n("652874").default)(function(e) {
        return {
            inDndMode: !1
        }
    });

    function o(e) {
        r.setState({
            inDndMode: e
        })
    }

    function i() {
        return r(function(e) {
            return e.inDndMode
        })
    }

    function a() {
        return r.getState().inDndMode
    }
}