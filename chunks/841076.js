function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        useCallback: function() {
            return u
        },
        useCallbackOne: function() {
            return o
        },
        useMemo: function() {
            return a
        },
        useMemoOne: function() {
            return i
        }
    });
    var r = n("884691");

    function i(t, e) {
        var n = (0, r.useState)(function() {
                return {
                    inputs: e,
                    result: t()
                }
            })[0],
            i = (0, r.useRef)(!0),
            o = (0, r.useRef)(n),
            a = i.current || e && o.current.inputs && function(t, e) {
                if (t.length !== e.length) return !1;
                for (var n = 0; n < t.length; n++)
                    if (t[n] !== e[n]) return !1;
                return !0
            }(e, o.current.inputs) ? o.current : {
                inputs: e,
                result: t()
            };
        return (0, r.useEffect)(function() {
            i.current = !1, o.current = a
        }, [a]), a.result
    }

    function o(t, e) {
        return i(function() {
            return t
        }, e)
    }
    var a = i,
        u = o
}