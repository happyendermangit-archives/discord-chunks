function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDndStore: function() {
            return r
        },
        toggleDndMode: function() {
            return s
        },
        useDndMode: function() {
            return a
        },
        isInDndMode: function() {
            return o
        }
    });
    var i = n("308503");
    let r = (0, i.default)(e => ({
        inDndMode: !1
    }));

    function s(e) {
        r.setState({
            inDndMode: e
        })
    }

    function a() {
        return r(e => e.inDndMode)
    }

    function o() {
        return r.getState().inDndMode
    }
}