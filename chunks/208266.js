function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
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
        f = n("283764");
    let E = o().localeData().months(),
        h = Array.from(Array(31).keys()).map(e => ({
            value: e + 1,
            label: "".concat(e + 1)
        })),
        _ = Array.from(Array(12).keys()).map(e => ({
            value: e + 1,
            label: E[e]
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
    let I = a.forwardRef(function(e, t) {
        let {
            value: n,
            wrapperClassName: r,
            onChange: i,
            onPopulated: E,
            error: g,
            autoFocus: I,
            required: T
        } = e, {
            day: N,
            setDay: A,
            month: S,
            setMonth: R,
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
        }(n), v = a.useMemo(() => null != N && null != S && null != C ? o("".concat(N, "/").concat(S, "/").concat(C), "DD/MM/YYYY") : null, [N, S, C]);
        a.useEffect(() => {
            i((null == v ? void 0 : v.isValid()) ? v : null)
        }, [v, i]);
        let L = g;
        null != v && !v.isValid() && (L = c.default.Messages.AGE_GATE_INVALID_BIRTHDAY);
        let M = function() {
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
            [x, y] = a.useState(I ? 0 : -1),
            D = a.useRef(null),
            U = a.useRef(null),
            b = a.useRef(null),
            P = a.useMemo(p, []),
            G = a.useCallback(() => {
                var e, t, n, s;
                switch (null === (e = P[x]) || void 0 === e ? void 0 : e.type) {
                    case "day":
                        null === (t = D.current) || void 0 === t || t.focus();
                        break;
                    case "month":
                        null === (n = U.current) || void 0 === n || n.focus();
                        break;
                    case "year":
                        null === (s = b.current) || void 0 === s || s.focus()
                }
            }, [x, D, U, b, P]);
        a.useEffect(() => {
            setTimeout(G, 500)
        }, []), a.useEffect(() => {
            if (x >= P.length) {
                null == E || E();
                return
            }
            G()
        }, [x, G]);
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
                            options: h,
                            selectOption: A,
                            children: (0, s.jsx)(d.default, {
                                ref: D,
                                className: f.inputDay,
                                "aria-label": c.default.Messages.AGE_GATE_DOB_DAY,
                                menuPlacement: d.default.MenuPlacements.TOP,
                                placeholder: (0, s.jsx)("span", {
                                    "aria-hidden": !0,
                                    children: c.default.Messages.AGE_GATE_DOB_DAY
                                }),
                                options: h,
                                value: N,
                                onChange: t => {
                                    let {
                                        value: n
                                    } = t;
                                    A(n), y(e + 1)
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
                            options: _,
                            selectOption: R,
                            children: (0, s.jsx)(d.default, {
                                ref: U,
                                className: f.inputMonth,
                                "aria-label": c.default.Messages.AGE_GATE_DOB_MONTH,
                                menuPlacement: d.default.MenuPlacements.TOP,
                                placeholder: (0, s.jsx)("span", {
                                    "aria-hidden": !0,
                                    children: c.default.Messages.AGE_GATE_DOB_MONTH
                                }),
                                options: _,
                                value: S,
                                onChange: t => {
                                    let {
                                        value: n
                                    } = t;
                                    R(n), y(e + 1)
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
                            options: M,
                            selectOption: O,
                            children: (0, s.jsx)(d.default, {
                                ref: b,
                                className: f.inputYear,
                                "aria-label": c.default.Messages.AGE_GATE_DOB_YEAR,
                                menuPlacement: d.default.MenuPlacements.TOP,
                                placeholder: (0, s.jsx)("span", {
                                    "aria-hidden": !0,
                                    children: c.default.Messages.AGE_GATE_DOB_YEAR
                                }),
                                options: M,
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
            className: l(f.container, r),
            children: [(0, s.jsx)(u.FormTitle, {
                tag: "legend",
                required: T,
                error: L,
                children: c.default.Messages.AGE_GATE_DATE_OF_BIRTH
            }), (0, s.jsx)("div", {
                className: f.inputs,
                children: F.map((e, t) => {
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
    var T = I
}