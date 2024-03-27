function(e, t, n) {
    "use strict";
    var r = n("470079"),
        i = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        a = r.useState,
        o = r.useEffect,
        s = r.useLayoutEffect,
        u = r.useDebugValue;

    function c(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !i(e, n)
        } catch (e) {
            return !0
        }
    }
    var l = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
        return t()
    } : function(e, t) {
        var n = t(),
            r = a({
                inst: {
                    value: n,
                    getSnapshot: t
                }
            }),
            i = r[0].inst,
            l = r[1];
        return s(function() {
            i.value = n, i.getSnapshot = t, c(i) && l({
                inst: i
            })
        }, [e, n, t]), o(function() {
            return c(i) && l({
                inst: i
            }), e(function() {
                c(i) && l({
                    inst: i
                })
            })
        }, [e]), u(n), n
    };
    t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : l
}