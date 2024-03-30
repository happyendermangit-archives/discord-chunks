function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Progress: function() {
            return d
        }
    });
    var r, o, i = n("470079"),
        a = n("803997"),
        u = n.n(a),
        s = n("447515"),
        l = n("657645");

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(r = o || (o = {})).XSMALL = "xsmall", r.SMALL = "small", r.LARGE = "large";
    var f = "indeterminate";

    function d(e) {
        var t, n = e.className,
            r = e.percent,
            o = e.size,
            a = void 0 === o ? "small" : o,
            d = e.foregroundColor,
            _ = void 0 === d ? s.default.unsafe_rawColors.BRAND_500.css : d,
            E = e.backgroundColor,
            p = e.foregroundGradientColor,
            m = e.animate,
            y = void 0 === m || m,
            I = null != r ? r : 0;
        return t = null != p ? {
            background: "linear-gradient(to right, ".concat(p[0], ", ").concat(p[1], ")")
        } : {
            backgroundColor: _
        }, i.createElement("div", {
            className: u()(n, l.progress, l[a]),
            style: {
                backgroundColor: void 0 === E ? "var(--background-modifier-active)" : E
            }
        }, I !== f && "number" == typeof I ? i.createElement("div", {
            className: u()(l.progressBar, l[a], c({}, l.animating, y)),
            style: function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        c(e, t, n[t])
                    })
                }
                return e
            }({
                transform: "translate3d(".concat(Math.min(Math.max(0, I), 100) - 100, "%, 0, 0)")
            }, t)
        }) : i.createElement(i.Fragment, null, i.createElement("div", {
            className: u()(l.indeterminateBar1, l[a], c({}, l.animating, y)),
            style: t
        }), i.createElement("div", {
            className: u()(l.indeterminateBar2, l[a], c({}, l.animating, y)),
            style: t
        })))
    }
    d.Sizes = o, d.INDETERMINATE = f
}