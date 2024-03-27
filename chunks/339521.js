function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("862337"),
        o = n("145131"),
        u = n("140546");

    function d(e) {
        let {
            percentage: t,
            isSingleLine: n
        } = e;
        return (0, i.jsx)("div", {
            className: s({
                [u.bar]: n,
                [u.barInMultiLine]: !n
            }),
            children: (0, i.jsx)("div", {
                className: u.barInner,
                style: {
                    width: "".concat(100 * Math.max(Math.min(t, 1), 0), "%")
                }
            })
        })
    }

    function c(e) {
        return String(e).padStart(2, "0")
    }

    function f(e) {
        let {
            time: t,
            padLargestUnit: n
        } = e, i = Math.floor(t) % 60, l = Math.floor(t / 60) % 60, a = Math.floor(t / 3600);
        return 0 === a ? n ? "".concat(c(l), ":").concat(c(i)) : "".concat(l, ":").concat(c(i)) : n ? "".concat(c(a), ":").concat(c(l), ":").concat(c(i)) : "".concat(a, ":").concat(c(l), ":").concat(c(i))
    }
    class m extends l.PureComponent {
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
                themed: l,
                singleLine: a = !1
            } = this.props, {
                now: r
            } = this.state, c = (t - e) / 1e3, m = Math.max(Math.min((r - e) / 1e3, c), 0);
            return a ? (0, i.jsxs)("div", {
                className: s(n, {
                    [u.themed]: l
                }, u.singleLineContainer),
                children: [(0, i.jsx)("div", {
                    className: u.textLeftInSingleLine,
                    children: f({
                        time: m,
                        padLargestUnit: !0
                    })
                }), (0, i.jsx)("div", {
                    className: u.barInSingleLine,
                    children: (0, i.jsx)(d, {
                        percentage: m / c,
                        isSingleLine: !0
                    })
                }), (0, i.jsx)("div", {
                    className: u.textRight,
                    children: f({
                        time: c,
                        padLargestUnit: !0
                    })
                })]
            }) : (0, i.jsxs)("div", {
                className: s(n, {
                    [u.themed]: l
                }),
                children: [(0, i.jsx)(d, {
                    percentage: m / c,
                    isSingleLine: !1
                }), (0, i.jsxs)(o.default, {
                    children: [(0, i.jsx)(o.default.Child, {
                        grow: 1,
                        className: u.textLeft,
                        children: f({
                            time: m,
                            padLargestUnit: !1
                        })
                    }), (0, i.jsx)(o.default.Child, {
                        grow: 0,
                        className: u.textRight,
                        children: f({
                            time: c,
                            padLargestUnit: !1
                        })
                    })]
                })]
            })
        }
        constructor(...e) {
            super(...e), this.timer = new r.Interval, this.state = {
                now: Date.now()
            }
        }
    }
    m.defaultProps = {
        themed: !1
    };
    var p = m
}