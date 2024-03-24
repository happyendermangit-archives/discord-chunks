function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    }), n("222007"), n("424973");
    var s = n("37983"),
        a = n("884691"),
        r = n("414456"),
        l = n.n(r),
        i = n("866227"),
        o = n.n(i),
        u = n("77078"),
        d = n("414943"),
        c = n("782340"),
        E = n("283764");
    let f = o().localeData().months(),
        _ = Array.from(Array(31).keys()).map(e => ({
            value: e + 1,
            label: "".concat(e + 1)
        })),
        h = Array.from(Array(12).keys()).map(e => ({
            value: e + 1,
            label: f[e]
        })),
        g = /[a-zA-Z0-9]/;

    function m(e) {
        let {
            options: t,
            selectOption: n,
            children: r
        } = e, [l, i] = a.useState("");
        a.useEffect(() => {
            if ("" !== l) {
                let e = setTimeout(() => i(""), 1e3);
                return () => clearTimeout(e)
            }
        }, [l, i]);
        let o = a.useCallback(e => {
            if (g.test(e.key)) {
                let s = "".concat(l).concat(e.key.toLowerCase()),
                    a = t.find(e => e.label.toLowerCase().startsWith(s));
                null != a && n(a.value), i(s)
            }
        }, [n, i, l, t]);
        return (0, s.jsx)("div", {
            onKeyDown: o,
            children: r
        })
    }

    function T() {
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
    let p = a.forwardRef(function(e, t) {
        let {
            value: n,
            wrapperClassName: r,
            onChange: i,
            onPopulated: f,
            error: g,
            autoFocus: p,
            required: I
        } = e, {
            day: A,
            setDay: S,
            month: R,
            setMonth: N,
            year: C,
            setYear: O
        } = function(e) {
            let t = null,
                n = null,
                s = null;
            null != e && (t = e.date(), n = e.month() + 1, s = e.year());
            let [r, l] = a.useState(t), [i, o] = a.useState(n), [u, d] = a.useState(s);
            return {
                day: r,
                setDay: l,
                month: i,
                setMonth: o,
                year: u,
                setYear: d
            }
        }(n), L = a.useMemo(() => null != A && null != R && null != C ? o("".concat(A, "/").concat(R, "/").concat(C), "DD/MM/YYYY") : null, [A, R, C]);
        a.useEffect(() => {
            i((null == L ? void 0 : L.isValid()) ? L : null)
        }, [L, i]);
        let M = g;
        null != L && !L.isValid() && (M = c.default.Messages.AGE_GATE_INVALID_BIRTHDAY);
        let v = function() {
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
            [D, x] = a.useState(p ? 0 : -1),
            U = a.useRef(null),
            y = a.useRef(null),
            b = a.useRef(null),
            P = a.useMemo(T, []),
            G = a.useCallback(() => {
                var e, t, n, s;
                switch (null === (e = P[D]) || void 0 === e ? void 0 : e.type) {
                    case "day":
                        null === (t = U.current) || void 0 === t || t.focus();
                        break;
                    case "month":
                        null === (n = y.current) || void 0 === n || n.focus();
                        break;
                    case "year":
                        null === (s = b.current) || void 0 === s || s.focus()
                }
            }, [D, U, y, b, P]);
        a.useEffect(() => {
            setTimeout(G, 500)
        }, []), a.useEffect(() => {
            if (D >= P.length) {
                null == f || f();
                return
            }
            G()
        }, [D, G]);
        let F = [];
        for (let e = 0; e < 3; e++) {
            let {
                type: t
            } = P[e];
            switch (t) {
                case "day":
                    F.push({
                        key: "day",
                        input: (0, s.jsx)(m, {
                            options: _,
                            selectOption: S,
                            children: (0, s.jsx)(d.default, {
                                ref: U,
                                className: E.inputDay,
                                "aria-label": c.default.Messages.AGE_GATE_DOB_DAY,
                                menuPlacement: d.default.MenuPlacements.TOP,
                                placeholder: (0, s.jsx)("span", {
                                    "aria-hidden": !0,
                                    children: c.default.Messages.AGE_GATE_DOB_DAY
                                }),
                                options: _,
                                value: A,
                                onChange: t => {
                                    let {
                                        value: n
                                    } = t;
                                    S(n), x(e + 1)
                                },
                                maxMenuHeight: 215
                            })
                        })
                    });
                    break;
                case "month":
                    F.push({
                        key: "month",
                        input: (0, s.jsx)(m, {
                            options: h,
                            selectOption: N,
                            children: (0, s.jsx)(d.default, {
                                ref: y,
                                className: E.inputMonth,
                                "aria-label": c.default.Messages.AGE_GATE_DOB_MONTH,
                                menuPlacement: d.default.MenuPlacements.TOP,
                                placeholder: (0, s.jsx)("span", {
                                    "aria-hidden": !0,
                                    children: c.default.Messages.AGE_GATE_DOB_MONTH
                                }),
                                options: h,
                                value: R,
                                onChange: t => {
                                    let {
                                        value: n
                                    } = t;
                                    N(n), x(e + 1)
                                },
                                maxMenuHeight: 215
                            })
                        })
                    });
                    break;
                case "year":
                    F.push({
                        key: "year",
                        input: (0, s.jsx)(m, {
                            options: v,
                            selectOption: O,
                            children: (0, s.jsx)(d.default, {
                                ref: b,
                                className: E.inputYear,
                                "aria-label": c.default.Messages.AGE_GATE_DOB_YEAR,
                                menuPlacement: d.default.MenuPlacements.TOP,
                                placeholder: (0, s.jsx)("span", {
                                    "aria-hidden": !0,
                                    children: c.default.Messages.AGE_GATE_DOB_YEAR
                                }),
                                options: v,
                                value: C,
                                onChange: t => {
                                    let {
                                        value: n
                                    } = t;
                                    O(n), x(e + 1)
                                },
                                maxMenuHeight: 215
                            })
                        })
                    })
            }
        }
        return (0, s.jsxs)("fieldset", {
            className: l(E.container, r),
            children: [(0, s.jsx)(u.FormTitle, {
                tag: "legend",
                required: I,
                error: M,
                children: c.default.Messages.AGE_GATE_DATE_OF_BIRTH
            }), (0, s.jsx)("div", {
                className: E.inputs,
                children: F.map((e, t) => {
                    let {
                        key: n,
                        input: a
                    } = e;
                    return (0, s.jsx)("div", {
                        tabIndex: t + 1,
                        className: E[n],
                        children: a
                    }, n)
                })
            })]
        })
    });
    var I = p
}