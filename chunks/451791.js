function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useNumberFieldState: function() {
            return s
        }
    }), n("222007");
    var r = n("679750"),
        i = n("546262"),
        o = n("884691");

    function s(e) {
        let {
            minValue: t,
            maxValue: n,
            step: s,
            formatOptions: c,
            value: u,
            defaultValue: d,
            onChange: l,
            locale: f,
            isDisabled: p,
            isReadOnly: h
        } = e, [v, g] = (0, r.useControlledState)(u, isNaN(d) ? NaN : d, l), [b, m] = (0, o.useState)(() => isNaN(v) ? "" : new(0, i.NumberFormatter)(f, c).format(v)), y = (0, o.useMemo)(() => new i.NumberParser(f, c), [f, c]), x = (0, o.useMemo)(() => y.getNumberingSystem(b), [y, b]), w = (0, o.useMemo)(() => new i.NumberFormatter(f, {
            ...c,
            numberingSystem: x
        }), [f, c, x]), S = (0, o.useMemo)(() => w.resolvedOptions(), [w]), k = (0, o.useCallback)(e => isNaN(e) || null === e ? "" : w.format(e), [w]), E = isNaN(s) ? 1 : s;
        "percent" === S.style && isNaN(s) && (E = .01);
        let [_, M] = (0, o.useState)(v), [D, C] = (0, o.useState)(f), [P, T] = (0, o.useState)(c);
        (!Object.is(v, _) || f !== D || c !== P) && (m(k(v)), M(v), C(f), T(c));
        let A = (0, o.useMemo)(() => y.parse(b), [y, b]),
            R = (e, i) => {
                if (isNaN(A)) {
                    let e = isNaN(i) ? 0 : i;
                    return (0, r.snapValueToStep)(e, t, n, E)
                } {
                    let i = (0, r.snapValueToStep)(A, t, n, E);
                    return "+" === e && i > A || "-" === e && i < A ? i : (0, r.snapValueToStep)(a(e, A, E), t, n, E)
                }
            },
            I = (0, o.useMemo)(() => !p && !h && (isNaN(A) || isNaN(n) || (0, r.snapValueToStep)(A, t, n, E) > A || a("+", A, E) <= n), [p, h, t, n, E, A]),
            O = (0, o.useMemo)(() => !p && !h && (isNaN(A) || isNaN(t) || (0, r.snapValueToStep)(A, t, n, E) < A || a("-", A, E) >= t), [p, h, t, n, E, A]);
        return {
            validate: e => y.isValidPartialNumber(e, t, n),
            increment: () => {
                let e = R("+", t);
                e === v && m(k(e)), g(e)
            },
            incrementToMax: () => {
                null != n && g((0, r.snapValueToStep)(n, t, n, E))
            },
            decrement: () => {
                let e = R("-", n);
                e === v && m(k(e)), g(e)
            },
            decrementToMin: () => {
                null != t && g(t)
            },
            canIncrement: I,
            canDecrement: O,
            minValue: t,
            maxValue: n,
            numberValue: A,
            setNumberValue: g,
            setInputValue: m,
            inputValue: b,
            commit: () => {
                let e;
                if (!b.length) {
                    g(NaN), m(void 0 === u ? "" : k(v));
                    return
                }
                if (isNaN(A)) {
                    m(k(v));
                    return
                }
                e = isNaN(s) ? (0, r.clamp)(A, t, n) : (0, r.snapValueToStep)(A, t, n, s), g(e = y.parse(k(e))), m(k(void 0 === u ? e : v))
            }
        }
    }

    function a(e, t, n) {
        let r = "+" === e ? t + n : t - n;
        if (t % 1 != 0 || n % 1 != 0) {
            let i = t.toString().split("."),
                o = n.toString().split("."),
                s = i[1] && i[1].length || 0,
                a = o[1] && o[1].length || 0,
                c = Math.pow(10, Math.max(s, a));
            t = Math.round(t * c), n = Math.round(n * c), r = ("+" === e ? t + n : t - n) / c
        }
        return r
    }
}