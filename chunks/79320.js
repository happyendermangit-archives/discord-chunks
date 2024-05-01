function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isInDndMode: function() {
            return s
        },
        toggleDndMode: function() {
            return r
        },
        useDndMode: function() {
            return a
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

    function a() {
        return i(e => e.inDndMode)
    }

    function s() {
        return i.getState().inDndMode
    }
}