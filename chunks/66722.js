function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        KeyCombo: function() {
            return c
        },
        PRETTY_KEYS: function() {
            return l
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("423466"),
        u = n("121938");

    function s(e) {
        var t = e.direction;
        return r.createElement("svg", {
            width: "10",
            height: "10",
            xmlns: "http://www.w3.org/2000/svg",
            className: i()(u.bindArrow, u[void 0 === t ? "up" : t])
        }, r.createElement("g", {
            fill: "#FFFFFF"
        }, r.createElement("polygon", {
            transform: "translate(5.025000, 5.000000) scale(1, -1) translate(-5.025000, -5.000000) ",
            points: "4.16666667 10 4.16666672 3.33333333 1.25 6.25 0.05 5 5.00000005 0 9.99999967 5 8.75 6.25 5.83333338 3.33333333 5.83333333 10"
        })))
    }
    var l = {
        mod: function() {
            return a.default.modKey
        },
        alt: function() {
            return a.default.altKey
        },
        up: function() {
            return r.createElement(s, {
                direction: "up"
            })
        },
        down: function() {
            return r.createElement(s, {
                direction: "down"
            })
        },
        left: function() {
            return r.createElement(s, {
                direction: "left"
            })
        },
        right: function() {
            return r.createElement(s, {
                direction: "right"
            })
        },
        pageup: function() {
            return "page up"
        },
        pagedown: function() {
            return "page down"
        },
        "any-character": function() {
            return "any key"
        },
        plus: function() {
            return "+"
        },
        return: function() {
            return a.default.returnKey
        }
    };

    function c(e) {
        var t, n, o, a = e.shortcut,
            s = e.dim,
            c = e.className,
            f = e.keyClassName,
            d = Array.isArray(a) ? a : a.split("+");
        return r.createElement("div", {
            className: i()(u.combo, c, (t = {}, n = u.dim, o = void 0 !== s && s, n in t ? Object.defineProperty(t, n, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = o, t))
        }, d.map(function(e) {
            return null != l[e] ? l[e]() : e
        }).map(function(e, t) {
            return r.createElement("span", {
                key: t,
                className: i()(u.key, f)
            }, e)
        }))
    }
}