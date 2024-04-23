function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("653041");
    var s = n("735250"),
        a = n("470079"),
        i = n("120356"),
        r = n.n(i),
        l = n("913527"),
        o = n.n(l),
        u = n("481060"),
        d = n("987134"),
        c = n("689938"),
        f = n("520843");
    let h = o()().localeData().months(),
        g = Array.from(Array(31).keys()).map(e => ({
            value: e + 1,
            label: "".concat(e + 1)
        })),
        E = Array.from(Array(12).keys()).map(e => ({
            value: e + 1,
            label: h[e]
        })),
        m = /[a-zA-Z0-9]/;

    function p(e) {
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

    function _() {
        let e = o()().localeData().longDateFormat("L"),
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
    let S = a.forwardRef(function(e, t) {
        let {
            value: n,
            wrapperClassName: i,
            onChange: l,
            onPopulated: h,
            error: m,
            autoFocus: S,
            required: R
        } = e, {
            day: A,
            setDay: N,
            month: T,
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
        }(n), v = a.useMemo(() => null != A && null != T && null != C ? o()("".concat(A, "/").concat(T, "/").concat(C), "DD/MM/YYYY") : null, [A, T, C]);
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
            [b, y] = a.useState(S ? 0 : -1),
            M = a.useRef(null),
            D = a.useRef(null),
            P = a.useRef(null),
            U = a.useMemo(_, []),
            G = a.useCallback(() => {
                var e, t, n, s;
                switch (null === (e = U[b]) || void 0 === e ? void 0 : e.type) {
                    case "day":
                        null === (t = M.current) || void 0 === t || t.focus();
                        break;
                    case "month":
                        null === (n = D.current) || void 0 === n || n.focus();
                        break;
                    case "year":
                        null === (s = P.current) || void 0 === s || s.focus()
                }
            }, [b, M, D, P, U]);
        a.useEffect(() => {
            setTimeout(G, 500)
        }, []), a.useEffect(() => {
            if (b >= U.length) {
                null == h || h();
                return
            }
            G()
        }, [b, G]);
        let w = [];
        for (let e = 0; e < 3; e++) {
            let {
                type: t
            } = U[e];
            switch (t) {
                case "day":
                    w.push({
                        key: "day",
                        input: (0, s.jsx)(p, {
                            options: g,
                            selectOption: N,
                            children: (0, s.jsx)(d.default, {
                                ref: M,
                                className: f.__invalid_inputDay,
                                "aria-label": c.default.Messages.AGE_GATE_DOB_DAY,
                                menuPlacement: d.default.MenuPlacements.TOP,
                                placeholder: (0, s.jsx)("span", {
                                    "aria-hidden": !0,
                                    children: c.default.Messages.AGE_GATE_DOB_DAY
                                }),
                                options: g,
                                value: A,
                                onChange: t => {
                                    let {
                                        value: n
                                    } = t;
                                    N(n), y(e + 1)
                                },
                                maxMenuHeight: 215
                            })
                        })
                    });
                    break;
                case "month":
                    w.push({
                        key: "month",
                        input: (0, s.jsx)(p, {
                            options: E,
                            selectOption: I,
                            children: (0, s.jsx)(d.default, {
                                ref: D,
                                className: f.__invalid_inputMonth,
                                "aria-label": c.default.Messages.AGE_GATE_DOB_MONTH,
                                menuPlacement: d.default.MenuPlacements.TOP,
                                placeholder: (0, s.jsx)("span", {
                                    "aria-hidden": !0,
                                    children: c.default.Messages.AGE_GATE_DOB_MONTH
                                }),
                                options: E,
                                value: T,
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
                    w.push({
                        key: "year",
                        input: (0, s.jsx)(p, {
                            options: x,
                            selectOption: O,
                            children: (0, s.jsx)(d.default, {
                                ref: P,
                                className: f.__invalid_inputYear,
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
            className: r()(f.container, i),
            children: [(0, s.jsx)(u.FormTitle, {
                tag: "legend",
                required: R,
                error: L,
                children: c.default.Messages.AGE_GATE_DATE_OF_BIRTH
            }), (0, s.jsx)("div", {
                className: f.inputs,
                children: w.map((e, t) => {
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
    t.default = S
}