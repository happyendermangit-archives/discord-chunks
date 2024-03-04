function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PRETTY_KEYS: function() {
            return u
        },
        KeyCombo: function() {
            return d
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("414456"),
        r = n.n(s),
        a = n("485328"),
        o = n("192998");

    function l(e) {
        let {
            direction: t = "up"
        } = e;
        return (0, i.jsx)("svg", {
            width: "10",
            height: "10",
            xmlns: "http://www.w3.org/2000/svg",
            className: r(o.bindArrow, o[t]),
            children: (0, i.jsx)("g", {
                fill: "#FFFFFF",
                children: (0, i.jsx)("polygon", {
                    transform: "translate(5.025000, 5.000000) scale(1, -1) translate(-5.025000, -5.000000) ",
                    points: "4.16666667 10 4.16666672 3.33333333 1.25 6.25 0.05 5 5.00000005 0 9.99999967 5 8.75 6.25 5.83333338 3.33333333 5.83333333 10"
                })
            })
        })
    }
    let u = {
        mod: () => a.default.modKey,
        alt: () => a.default.altKey,
        up: () => (0, i.jsx)(l, {
            direction: "up"
        }),
        down: () => (0, i.jsx)(l, {
            direction: "down"
        }),
        left: () => (0, i.jsx)(l, {
            direction: "left"
        }),
        right: () => (0, i.jsx)(l, {
            direction: "right"
        }),
        pageup: () => "page up",
        pagedown: () => "page down",
        "any-character": () => "any key",
        plus: () => "+",
        return: () => a.default.returnKey
    };

    function d(e) {
        let {
            shortcut: t,
            dim: n = !1,
            className: s,
            keyClassName: a
        } = e, l = Array.isArray(t) ? t : t.split("+");
        return (0, i.jsx)("div", {
            className: r(o.combo, s, {
                [o.dim]: n
            }),
            children: l.map(e => null != u[e] ? u[e]() : e).map((e, t) => (0, i.jsx)("span", {
                className: r(o.key, a),
                children: e
            }, t))
        })
    }
}