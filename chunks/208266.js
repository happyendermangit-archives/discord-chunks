function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    }), n("222007"), n("424973");
    var s = n("37983"),
        a = n("884691"),
        i = n("414456"),
        r = n.n(i),
        l = n("866227"),
        o = n.n(l),
        u = n("77078"),
        d = n("414943"),
        c = n("782340"),
        f = n("283764");
    let h = o().localeData().months(),
        E = Array.from(Array(31).keys()).map(e => ({
            value: e + 1,
            label: "".concat(e + 1)
        })),
        g = Array.from(Array(12).keys()).map(e => ({
            value: e + 1,
            label: h[e]
        })),
        m = /[a-zA-Z0-9]/;

    function _(e) {
        let {
            options: t,
            selectOption: n,
            children: i
        } = e, [r, l] = a.useState("");
        a.useEffect(() => {
            if ("" !== r) {
                let e = setTimeout(() => l(""), 1e3);
                return () => clearTimeout(e)
            }
        }, [r, l]);
        let o = a.useCallback(e => {
            if (m.test(e.key)) {
                let s = "".concat(r).concat(e.key.toLowerCase()),
                    a = t.find(e => e.label.toLowerCase().startsWith(s));
                null != a && n(a.value), l(s)
            }
        }, [n, l, r, t]);
        return (0, s.jsx)("div", {
            onKeyDown: o,
            children: i
        })
    }

    function p() {
        let e = o().localeData().longDateFormat("L"),
            t = e.indexOf("D"),
            n = e.indexOf("M"),
            s = e.indexOf("Y");
        return (-1 === t || -1 === n || -1 === s) && (t = 0, n = 1, s = 2), [{
            index: t,
            type: "day"
        }, {
            index: n,
            type: "month"
        }, {
            index: s,
            type: "year"
        }].sort((e, t) => e.index < t.index ? -1 : 1)
    }
    let R = a.forwardRef(function(e, t) {
        let {
            value: n,
            wrapperClassName: i,
            onChange: l,
            onPopulated: h,
            error: m,
            autoFocus: R,
            required: S
        } = e, {
            day: A,
            setDay: T,
            month: N,
            setMonth: I,
            year: C,
            setYear: O
        } = function(e) {
            let t = null,
                n = null,
                s = null;
            null != e && (t = e.date(), n = e.month() + 1, s = e.year());
            let [i, r] = a.useState(t), [l, o] = a.useState(n), [u, d] = a.useState(s);
            return {
                day: i,
                setDay: r,
                month: l,
                setMonth: o,
                year: u,
                setYear: d
            }
        }(n), v = a.useMemo(() => null != A && null != N && null != C ? o("".concat(A, "/").concat(N, "/").concat(C), "DD/MM/YYYY") : null, [A, N, C]);
        a.useEffect(() => {
            l((null == v ? void 0 : v.isValid()) ? v : null)
        }, [v, l]);
        let L = m;
        null != v && !v.isValid() && (L = c.default.Messages.AGE_GATE_INVALID_BIRTHDAY);
        let x = function() {
                let e = new Date().getFullYear(),
                    t = a.useRef(Array.from(Array(150).keys()).map(t => ({
                        value: e - t - 3,
                        label: "".concat(e - t - 3)
                    })));
                return a.useEffect(() => {
                    t.current = Array.from(Array(150).keys()).map(t => ({
                        value: e - t - 3,
                        label: "".concat(e - t - 3)
                    }))
                }, [e]), t.current
            }(),
            [M, y] = a.useState(R ? 0 : -1),
            b = a.useRef(null),
            D = a.useRef(null),
            U = a.useRef(null),
            G = a.useMemo(p, []),
            P = a.useCallback(() => {
                var e, t, n, s;
                switch (null === (e = G[M]) || void 0 === e ? void 0 : e.type) {
                    case "day":
                        null === (t = b.current) || void 0 === t || t.focus();
                        break;
                    case "month":
                        null === (n = D.current) || void 0 === n || n.focus();
                        break;
                    case "year":
                        null === (s = U.current) || void 0 === s || s.focus()
                }
            }, [M, b, D, U, G]);
        a.useEffect(() => {
            setTimeout(P, 500)
        }, []), a.useEffect(() => {
            if (M >= G.length) {
                null == h || h();
                return
            }
            P()
        }, [M, P]);
        let k = [];
        for (let e = 0; e < 3; e++) {
            let {
                type: t
            } = G[e];
            switch (t) {
                case "day":
                    k.push({
                        key: "day",
                        input: (0, s.jsx)(_, {
                            options: E,
                            selectOption: T,
                            children: (0, s.jsx)(d.default, {
                                ref: b,
                                className: f.inputDay,
                                "aria-label": c.default.Messages.AGE_GATE_DOB_DAY,
                                menuPlacement: d.default.MenuPlacements.TOP,
                                placeholder: (0, s.jsx)("span", {
                                    "aria-hidden": !0,
                                    children: c.default.Messages.AGE_GATE_DOB_DAY
                                }),
                                options: E,
                                value: A,
                                onChange: t => {
                                    let {
                                        value: n
                                    } = t;
                                    T(n), y(e + 1)
                                },
                                maxMenuHeight: 215
                            })
                        })
                    });
                    break;
                case "month":
                    k.push({
                        key: "month",
                        input: (0, s.jsx)(_, {
                            options: g,
                            selectOption: I,
                            children: (0, s.jsx)(d.default, {
                                ref: D,
                                className: f.inputMonth,
                                "aria-label": c.default.Messages.AGE_GATE_DOB_MONTH,
                                menuPlacement: d.default.MenuPlacements.TOP,
                                placeholder: (0, s.jsx)("span", {
                                    "aria-hidden": !0,
                                    children: c.default.Messages.AGE_GATE_DOB_MONTH
                                }),
                                options: g,
                                value: N,
                                onChange: t => {
                                    let {
                                        value: n
                                    } = t;
                                    I(n), y(e + 1)
                                },
                                maxMenuHeight: 215
                            })
                        })
                    });
                    break;
                case "year":
                    k.push({
                        key: "year",
                        input: (0, s.jsx)(_, {
                            options: x,
                            selectOption: O,
                            children: (0, s.jsx)(d.default, {
                                ref: U,
                                className: f.inputYear,
                                "aria-label": c.default.Messages.AGE_GATE_DOB_YEAR,
                                menuPlacement: d.default.MenuPlacements.TOP,
                                placeholder: (0, s.jsx)("span", {
                                    "aria-hidden": !0,
                                    children: c.default.Messages.AGE_GATE_DOB_YEAR
                                }),
                                options: x,
                                value: C,
                                onChange: t => {
                                    let {
                                        value: n
                                    } = t;
                                    O(n), y(e + 1)
                                },
                                maxMenuHeight: 215
                            })
                        })
                    })
            }
        }
        return (0, s.jsxs)("fieldset", {
            className: r(f.container, i),
            children: [(0, s.jsx)(u.FormTitle, {
                tag: "legend",
                required: S,
                error: L,
                children: c.default.Messages.AGE_GATE_DATE_OF_BIRTH
            }), (0, s.jsx)("div", {
                className: f.inputs,
                children: k.map((e, t) => {
                    let {
                        key: n,
                        input: a
                    } = e;
                    return (0, s.jsx)("div", {
                        tabIndex: t + 1,
                        className: f[n],
                        children: a
                    }, n)
                })
            })]
        })
    });
    var S = R
}