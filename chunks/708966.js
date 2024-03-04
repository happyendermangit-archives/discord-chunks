function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useControlledState: function() {
            return i
        },
        clamp: function() {
            return o
        },
        snapValueToStep: function() {
            return s
        }
    }), n("222007");
    var r = n("884691");

    function i(e, t, n) {
        let [i, o] = (0, r.useState)(e || t), s = (0, r.useRef)(void 0 !== e), a = void 0 !== e;
        (0, r.useEffect)(() => {
            let e = s.current;
            e !== a && console.warn("WARN: A component changed from ".concat(e ? "controlled" : "uncontrolled", " to ").concat(a ? "controlled" : "uncontrolled", ".")), s.current = a
        }, [a]);
        let c = a ? e : i,
            u = (0, r.useCallback)(function(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
                let s = function(e) {
                    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
                    n && !Object.is(c, e) && n(e, ...r), !a && (c = e)
                };
                if ("function" == typeof e) {
                    console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320");
                    o(function(t) {
                        for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                        let u = e(a ? c : t, ...i);
                        return (s(u, ...r), a) ? t : u
                    })
                } else !a && o(e), s(e, ...r)
            }, [a, c, n]);
        return [c, u]
    }

    function o(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0;
        return Math.min(Math.max(e, t), n)
    }

    function s(e, t, n, r) {
        t = Number(t), n = Number(n);
        let i = (e - (isNaN(t) ? 0 : t)) % r,
            o = 2 * Math.abs(i) >= r ? e + Math.sign(i) * (r - Math.abs(i)) : e - i;
        isNaN(t) ? !isNaN(n) && o > n && (o = Math.floor(n / r) * r) : o < t ? o = t : !isNaN(n) && o > n && (o = t + Math.floor((n - t) / r) * r);
        let s = r.toString(),
            a = s.indexOf("."),
            c = a >= 0 ? s.length - a : 0;
        if (c > 0) {
            let e = Math.pow(10, c);
            o = Math.round(o * e) / e
        }
        return o
    }
}