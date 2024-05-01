function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isInDndMode: function() {
            return a
        },
        toggleDndMode: function() {
            return r
        },
        useDndMode: function() {
            return s
        },
        useDndStore: function() {
            return i
        }
    });
    let i = (0, n("652874").default)(e => ({
        inDndMode: !1
    }));

    function r(e) {
        i.setState({
            inDndMode: e
        })
    }

    function s() {
        return i(e => e.inDndMode)
    }

    function a() {
        return i.getState().inDndMode
    }
}