function(e, t, n) {
    "use strict";
    var r = n("884691"),
        i = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        o = r.useState,
        s = r.useEffect,
        a = r.useLayoutEffect,
        c = r.useDebugValue;

    function u(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !i(e, n)
        } catch (e) {
            return !0
        }
    }
    var d = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
        return t()
    } : function(e, t) {
        var n = t(),
            r = o({
                inst: {
                    value: n,
                    getSnapshot: t
                }
            }),
            i = r[0].inst,
            d = r[1];
        return a(function() {
            i.value = n, i.getSnapshot = t, u(i) && d({
                inst: i
            })
        }, [e, n, t]), s(function() {
            return u(i) && d({
                inst: i
            }), e(function() {
                u(i) && d({
                    inst: i
                })
            })
        }, [e]), c(n), n
    };
    t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : d
}