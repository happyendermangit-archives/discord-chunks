function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("819439"),
        u = n("63431");

    function s(e) {
        var t, n, o, s = e.className,
            l = e.children,
            c = e.forceUseColor,
            f = e.hideStars;
        return r.createElement("span", {
            className: i()(u.container, s, (t = {}, n = u.containerColored, o = void 0 !== c && c, n in t ? Object.defineProperty(t, n, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = o, t))
        }, l, f ? null : r.createElement(r.Fragment, null, r.createElement(a.default, {
            foreground: u.sparkleStarTopRight
        }), r.createElement(a.default, {
            foreground: u.sparkleStarRight
        }), r.createElement(a.default, {
            foreground: u.sparkleStarBottomLeft
        })))
    }
}