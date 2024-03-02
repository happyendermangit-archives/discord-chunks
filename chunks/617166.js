function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSliderState: function() {
            return o
        }
    }), n("222007");
    var r = n("240849"),
        a = n("679750"),
        i = n("884691");

    function o(e) {
        var t;
        let {
            isDisabled: n = !1,
            minValue: o = 0,
            maxValue: u = 100,
            numberFormatter: d,
            step: p = 1,
            orientation: f = "horizontal"
        } = e, m = (0, i.useMemo)(() => {
            let e = (u - o) / 10;
            return Math.max(e = (0, r.snapValueToStep)(e, 0, e + p, p), p)
        }, [p, u, o]), h = (0, i.useMemo)(() => c(e.value), [e.value]), v = (0, i.useMemo)(() => null !== (t = c(e.defaultValue)) && void 0 !== t ? t : [o], [e.defaultValue, o]), g = l(e.value, e.defaultValue, e.onChange), y = l(e.value, e.defaultValue, e.onChangeEnd), [b, x] = (0, a.useControlledState)(h, v, g), [S, w] = (0, i.useState)(Array(b.length).fill(!1)), D = (0, i.useRef)(Array(b.length).fill(!0)), [C, k] = (0, i.useState)(void 0), P = (0, i.useRef)(b), E = (0, i.useRef)(S), T = e => {
            P.current = e, x(e)
        }, M = e => {
            E.current = e, w(e)
        };

        function R(e) {
            return (e - o) / (u - o)
        }

        function I(e) {
            return 0 === e ? o : b[e - 1]
        }

        function O(e) {
            return e === b.length - 1 ? u : b[e + 1]
        }

        function A(e) {
            return D.current[e]
        }

        function L(e, t) {
            if (n || !A(e)) return;
            let a = I(e),
                i = O(e);
            t = (0, r.snapValueToStep)(t, a, i, p), T(s(P.current, e, t))
        }

        function N(e) {
            return d.format(e)
        }

        function F(e) {
            let t = e * (u - o) + o;
            return (0, r.clamp)(Math.round((t - o) / p) * p + o, o, u)
        }
        return {
            values: b,
            getThumbValue: e => b[e],
            setThumbValue: L,
            setThumbPercent: function(e, t) {
                L(e, F(t))
            },
            isThumbDragging: e => S[e],
            setThumbDragging: function(e, t) {
                if (n || !A(e)) return;
                let r = E.current[e];
                E.current = s(E.current, e, t), M(E.current), y && r && !E.current.some(Boolean) && y(P.current)
            },
            focusedThumb: C,
            setFocusedThumb: k,
            getThumbPercent: e => R(b[e]),
            getValuePercent: R,
            getThumbValueLabel: e => N(b[e]),
            getFormattedValue: N,
            getThumbMinValue: I,
            getThumbMaxValue: O,
            getPercentValue: F,
            isThumbEditable: A,
            setThumbEditable: function(e, t) {
                D.current[e] = t
            },
            incrementThumb: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    n = Math.max(t, p);
                L(e, (0, r.snapValueToStep)(b[e] + n, o, u, p))
            },
            decrementThumb: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    n = Math.max(t, p);
                L(e, (0, r.snapValueToStep)(b[e] - n, o, u, p))
            },
            step: p,
            pageSize: m,
            orientation: f,
            isDisabled: n
        }
    }

    function s(e, t, n) {
        return e[t] === n ? e : [...e.slice(0, t), n, ...e.slice(t + 1)]
    }

    function c(e) {
        if (null != e) return Array.isArray(e) ? e : [e]
    }

    function l(e, t, n) {
        return r => {
            "number" == typeof e || "number" == typeof t ? null == n || n(r[0]) : null == n || n(r)
        }
    }
}