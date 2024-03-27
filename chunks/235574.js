function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSliderState: function() {
            return o
        }
    });
    var r = n("182823"),
        i = n("697898"),
        a = n("470079");

    function o(e) {
        var t;
        let {
            isDisabled: n = !1,
            minValue: o = 0,
            maxValue: l = 100,
            numberFormatter: d,
            step: f = 1,
            orientation: p = "horizontal"
        } = e, h = (0, a.useMemo)(() => {
            let e = (l - o) / 10;
            return Math.max(e = (0, r.snapValueToStep)(e, 0, e + f, f), f)
        }, [f, l, o]), m = (0, a.useMemo)(() => u(e.value), [e.value]), g = (0, a.useMemo)(() => null !== (t = u(e.defaultValue)) && void 0 !== t ? t : [o], [e.defaultValue, o]), _ = c(e.value, e.defaultValue, e.onChange), b = c(e.value, e.defaultValue, e.onChangeEnd), [v, y] = (0, i.useControlledState)(m, g, _), [E, S] = (0, a.useState)(Array(v.length).fill(!1)), x = (0, a.useRef)(Array(v.length).fill(!0)), [w, T] = (0, a.useState)(void 0), C = (0, a.useRef)(v), D = (0, a.useRef)(E), O = e => {
            C.current = e, y(e)
        }, M = e => {
            D.current = e, S(e)
        };

        function A(e) {
            return (e - o) / (l - o)
        }

        function k(e) {
            return 0 === e ? o : v[e - 1]
        }

        function R(e) {
            return e === v.length - 1 ? l : v[e + 1]
        }

        function N(e) {
            return x.current[e]
        }

        function I(e, t) {
            if (n || !N(e)) return;
            let i = k(e),
                a = R(e);
            t = (0, r.snapValueToStep)(t, i, a, f), O(s(C.current, e, t))
        }

        function L(e) {
            return d.format(e)
        }

        function P(e) {
            let t = e * (l - o) + o;
            return (0, r.clamp)(Math.round((t - o) / f) * f + o, o, l)
        }
        return {
            values: v,
            getThumbValue: e => v[e],
            setThumbValue: I,
            setThumbPercent: function(e, t) {
                I(e, P(t))
            },
            isThumbDragging: e => E[e],
            setThumbDragging: function(e, t) {
                if (n || !N(e)) return;
                let r = D.current[e];
                D.current = s(D.current, e, t), M(D.current), b && r && !D.current.some(Boolean) && b(C.current)
            },
            focusedThumb: w,
            setFocusedThumb: T,
            getThumbPercent: e => A(v[e]),
            getValuePercent: A,
            getThumbValueLabel: e => L(v[e]),
            getFormattedValue: L,
            getThumbMinValue: k,
            getThumbMaxValue: R,
            getPercentValue: P,
            isThumbEditable: N,
            setThumbEditable: function(e, t) {
                x.current[e] = t
            },
            incrementThumb: function(e, t = 1) {
                let n = Math.max(t, f);
                I(e, (0, r.snapValueToStep)(v[e] + n, o, l, f))
            },
            decrementThumb: function(e, t = 1) {
                let n = Math.max(t, f);
                I(e, (0, r.snapValueToStep)(v[e] - n, o, l, f))
            },
            step: f,
            pageSize: h,
            orientation: p,
            isDisabled: n
        }
    }

    function s(e, t, n) {
        return e[t] === n ? e : [...e.slice(0, t), n, ...e.slice(t + 1)]
    }

    function u(e) {
        if (null != e) return Array.isArray(e) ? e : [e]
    }

    function c(e, t, n) {
        return r => {
            "number" == typeof e || "number" == typeof t ? null == n || n(r[0]) : null == n || n(r)
        }
    }
}