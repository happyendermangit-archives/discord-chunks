function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r = n("735250"),
        s = n("470079"),
        a = n("120356"),
        o = n.n(a),
        l = n("846519"),
        u = n("285952"),
        d = n("991463");

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c(e) {
        let {
            percentage: t,
            isSingleLine: n
        } = e;
        return (0, r.jsx)("div", {
            className: o()({
                [d.bar]: n,
                [d.barInMultiLine]: !n
            }),
            children: (0, r.jsx)("div", {
                className: d.barInner,
                style: {
                    width: "".concat(100 * Math.max(Math.min(t, 1), 0), "%")
                }
            })
        })
    }

    function E(e) {
        return String(e).padStart(2, "0")
    }

    function I(e) {
        let {
            time: t,
            padLargestUnit: n
        } = e, i = Math.floor(t) % 60, r = Math.floor(t / 60) % 60, s = Math.floor(t / 3600);
        return 0 === s ? n ? "".concat(E(r), ":").concat(E(i)) : "".concat(r, ":").concat(E(i)) : n ? "".concat(E(s), ":").concat(E(r), ":").concat(E(i)) : "".concat(s, ":").concat(E(r), ":").concat(E(i))
    }
    class T extends(i = s.PureComponent) {
        componentDidMount() {
            this.timer.start(500, () => {
                this.setState({
                    now: Date.now()
                })
            })
        }
        componentWillUnmount() {
            this.timer.stop()
        }
        render() {
            let {
                start: e,
                end: t,
                className: n,
                themed: i,
                singleLine: s = !1
            } = this.props, {
                now: a
            } = this.state, l = (t - e) / 1e3, _ = Math.max(Math.min((a - e) / 1e3, l), 0);
            return s ? (0, r.jsxs)("div", {
                className: o()(n, {
                    [d.themed]: i
                }, d.singleLineContainer),
                children: [(0, r.jsx)("div", {
                    className: d.textLeftInSingleLine,
                    children: I({
                        time: _,
                        padLargestUnit: !0
                    })
                }), (0, r.jsx)("div", {
                    className: d.barInSingleLine,
                    children: (0, r.jsx)(c, {
                        percentage: _ / l,
                        isSingleLine: !0
                    })
                }), (0, r.jsx)("div", {
                    className: d.textRight,
                    children: I({
                        time: l,
                        padLargestUnit: !0
                    })
                })]
            }) : (0, r.jsxs)("div", {
                className: o()(n, {
                    [d.themed]: i
                }),
                children: [(0, r.jsx)(c, {
                    percentage: _ / l,
                    isSingleLine: !1
                }), (0, r.jsxs)(u.default, {
                    children: [(0, r.jsx)(u.default.Child, {
                        grow: 1,
                        className: d.textLeft,
                        children: I({
                            time: _,
                            padLargestUnit: !1
                        })
                    }), (0, r.jsx)(u.default.Child, {
                        grow: 0,
                        className: d.textRight,
                        children: I({
                            time: l,
                            padLargestUnit: !1
                        })
                    })]
                })]
            })
        }
        constructor(...e) {
            super(...e), _(this, "timer", new l.Interval), _(this, "state", {
                now: Date.now()
            })
        }
    }
    _(T, "defaultProps", {
        themed: !1
    }), t.default = T
}