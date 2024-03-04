function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDndStore: function() {
            return s
        },
        toggleDndMode: function() {
            return r
        },
        useDndMode: function() {
            return a
        },
        isInDndMode: function() {
            return o
        }
    });
    var i = n("308503");
    let s = (0, i.default)(e => ({
        inDndMode: !1
    }));

    function r(e) {
        s.setState({
            inDndMode: e
        })
    }

    function a() {
        return s(e => e.inDndMode)
    }

    function o() {
        return s.getState().inDndMode
    }
}