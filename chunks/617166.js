function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSliderState: function() {
            return s
        }
    }), n("222007");
    var r = n("240849"),
        i = n("679750"),
        o = n("884691");

    function s(e) {
        var t;
        let {
            isDisabled: n = !1,
            minValue: s = 0,
            maxValue: d = 100,
            numberFormatter: l,
            step: f = 1,
            orientation: p = "horizontal"
        } = e, h = (0, o.useMemo)(() => {
            let e = (d - s) / 10;
            return Math.max(e = (0, r.snapValueToStep)(e, 0, e + f, f), f)
        }, [f, d, s]), v = (0, o.useMemo)(() => c(e.value), [e.value]), g = (0, o.useMemo)(() => null !== (t = c(e.defaultValue)) && void 0 !== t ? t : [s], [e.defaultValue, s]), b = u(e.value, e.defaultValue, e.onChange), m = u(e.value, e.defaultValue, e.onChangeEnd), [y, x] = (0, i.useControlledState)(v, g, b), [w, S] = (0, o.useState)(Array(y.length).fill(!1)), k = (0, o.useRef)(Array(y.length).fill(!0)), [E, _] = (0, o.useState)(void 0), M = (0, o.useRef)(y), D = (0, o.useRef)(w), C = e => {
            M.current = e, x(e)
        }, P = e => {
            D.current = e, S(e)
        };

        function T(e) {
            return (e - s) / (d - s)
        }

        function A(e) {
            return 0 === e ? s : y[e - 1]
        }

        function R(e) {
            return e === y.length - 1 ? d : y[e + 1]
        }

        function I(e) {
            return k.current[e]
        }

        function O(e, t) {
            if (n || !I(e)) return;
            let i = A(e),
                o = R(e);
            t = (0, r.snapValueToStep)(t, i, o, f), C(a(M.current, e, t))
        }

        function L(e) {
            return l.format(e)
        }

        function j(e) {
            let t = e * (d - s) + s;
            return (0, r.clamp)(Math.round((t - s) / f) * f + s, s, d)
        }
        return {
            values: y,
            getThumbValue: e => y[e],
            setThumbValue: O,
            setThumbPercent: function(e, t) {
                O(e, j(t))
            },
            isThumbDragging: e => w[e],
            setThumbDragging: function(e, t) {
                if (n || !I(e)) return;
                let r = D.current[e];
                D.current = a(D.current, e, t), P(D.current), m && r && !D.current.some(Boolean) && m(M.current)
            },
            focusedThumb: E,
            setFocusedThumb: _,
            getThumbPercent: e => T(y[e]),
            getValuePercent: T,
            getThumbValueLabel: e => L(y[e]),
            getFormattedValue: L,
            getThumbMinValue: A,
            getThumbMaxValue: R,
            getPercentValue: j,
            isThumbEditable: I,
            setThumbEditable: function(e, t) {
                k.current[e] = t
            },
            incrementThumb: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    n = Math.max(t, f);
                O(e, (0, r.snapValueToStep)(y[e] + n, s, d, f))
            },
            decrementThumb: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    n = Math.max(t, f);
                O(e, (0, r.snapValueToStep)(y[e] - n, s, d, f))
            },
            step: f,
            pageSize: h,
            orientation: p,
            isDisabled: n
        }
    }

    function a(e, t, n) {
        return e[t] === n ? e : [...e.slice(0, t), n, ...e.slice(t + 1)]
    }

    function c(e) {
        if (null != e) return Array.isArray(e) ? e : [e]
    }

    function u(e, t, n) {
        return r => {
            "number" == typeof e || "number" == typeof t ? null == n || n(r[0]) : null == n || n(r)
        }
    }
}