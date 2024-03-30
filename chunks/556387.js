function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addFocusSubscriber: function() {
            return o
        },
        notifyFocusSubscribers: function() {
            return i
        }
    });
    var r = new Map;

    function o(e, t) {
        var n = r.get(e);
        return null == n && (n = new Set, r.set(e, n)), n.add(t),
            function() {
                return null == n ? void 0 : n.delete(t)
            }
    }

    function i(e, t, n) {
        var o = r.get(e);
        if (null != o) {
            var i = !0,
                a = !1,
                u = void 0;
            try {
                for (var s, l = o[Symbol.iterator](); !(i = (s = l.next()).done); i = !0)(0, s.value)(t, n)
            } catch (e) {
                a = !0, u = e
            } finally {
                try {
                    !i && null != l.return && l.return()
                } finally {
                    if (a) throw u
                }
            }
        }
    }
}