function(e, t, n) {
    "use strict";
    var r = n("884691"),
        a = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        i = r.useState,
        o = r.useEffect,
        s = r.useLayoutEffect,
        c = r.useDebugValue;

    function l(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !a(e, n)
        } catch (e) {
            return !0
        }
    }
    var u = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
        return t()
    } : function(e, t) {
        var n = t(),
            r = i({
                inst: {
                    value: n,
                    getSnapshot: t
                }
            }),
            a = r[0].inst,
            u = r[1];
        return s(function() {
            a.value = n, a.getSnapshot = t, l(a) && u({
                inst: a
            })
        }, [e, n, t]), o(function() {
            return l(a) && u({
                inst: a
            }), e(function() {
                l(a) && u({
                    inst: a
                })
            })
        }, [e]), c(n), n
    };
    t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : u
}