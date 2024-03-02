function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useControlledState: function() {
            return a
        },
        clamp: function() {
            return i
        },
        snapValueToStep: function() {
            return o
        }
    }), n("222007");
    var r = n("884691");

    function a(e, t, n) {
        let [a, i] = (0, r.useState)(e || t), o = (0, r.useRef)(void 0 !== e), s = void 0 !== e;
        (0, r.useEffect)(() => {
            let e = o.current;
            e !== s && console.warn("WARN: A component changed from ".concat(e ? "controlled" : "uncontrolled", " to ").concat(s ? "controlled" : "uncontrolled", ".")), o.current = s
        }, [s]);
        let c = s ? e : a,
            l = (0, r.useCallback)(function(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) r[a - 1] = arguments[a];
                let o = function(e) {
                    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) r[a - 1] = arguments[a];
                    n && !Object.is(c, e) && n(e, ...r), !s && (c = e)
                };
                if ("function" == typeof e) {
                    console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320");
                    i(function(t) {
                        for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
                        let l = e(s ? c : t, ...a);
                        return (o(l, ...r), s) ? t : l
                    })
                } else !s && i(e), o(e, ...r)
            }, [s, c, n]);
        return [c, l]
    }

    function i(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0;
        return Math.min(Math.max(e, t), n)
    }

    function o(e, t, n, r) {
        t = Number(t), n = Number(n);
        let a = (e - (isNaN(t) ? 0 : t)) % r,
            i = 2 * Math.abs(a) >= r ? e + Math.sign(a) * (r - Math.abs(a)) : e - a;
        isNaN(t) ? !isNaN(n) && i > n && (i = Math.floor(n / r) * r) : i < t ? i = t : !isNaN(n) && i > n && (i = t + Math.floor((n - t) / r) * r);
        let o = r.toString(),
            s = o.indexOf("."),
            c = s >= 0 ? o.length - s : 0;
        if (c > 0) {
            let e = Math.pow(10, c);
            i = Math.round(i * e) / e
        }
        return i
    }
}