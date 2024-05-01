function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ProgressCircle: function() {
            return _
        }
    });
    var i, r = n("735250"),
        a = n("470079"),
        s = n("120356"),
        o = n.n(s),
        l = n("592450");

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let d = Object.freeze({
        SMALL: 1,
        MEDIUM: 2,
        LARGE: 4
    });
    class _ extends(i = a.Component) {
        renderCircle() {
            let {
                strokeSize: e,
                percent: t,
                colorOverride: n,
                background: i
            } = this.props, a = (20 - e) / 2, s = a * Math.PI * 2;
            return (0, r.jsxs)("svg", {
                viewBox: "0 0 ".concat(20, " ").concat(20),
                className: l.circle,
                children: [(0, r.jsx)("circle", {
                    className: l.circleBackgroundAlt,
                    cx: 10,
                    cy: 10,
                    r: 10
                }), (0, r.jsx)("circle", {
                    className: o()(l.circleBackground, i),
                    cx: 10,
                    cy: 10,
                    r: (20 - 2 * e) / 2
                }), (0, r.jsx)("circle", {
                    className: l.circleProgress,
                    cx: 10,
                    cy: 10,
                    r: a,
                    strokeWidth: "".concat(e, "px"),
                    strokeLinecap: "round",
                    transform: "rotate(-90 ".concat(10, " ").concat(10, ")"),
                    stroke: null != n ? n : "currentColor",
                    style: {
                        strokeDasharray: s,
                        strokeDashoffset: (1 - Math.min(Math.max(t, 0), 100) / 100) * s
                    }
                })]
            })
        }
        render() {
            let {
                className: e,
                children: t
            } = this.props;
            return (0, r.jsxs)("div", {
                className: o()(l.progressCircle, e),
                children: [this.renderCircle(), null != t ? (0, r.jsx)("div", {
                    className: l.circleOverlay,
                    children: t
                }) : null]
            })
        }
    }
    u(_, "StrokeSizes", d), u(_, "defaultProps", {
        strokeSize: d.MEDIUM
    })
}