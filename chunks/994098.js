function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        RoleCircle: function() {
            return c
        },
        RoleDot: function() {
            return l
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("582444"),
        u = n("320042");

    function s(e) {
        var t = e.color,
            n = e.className,
            o = e.background;
        return null == t ? null : r.createElement("svg", {
            className: i()(u.svg, n),
            viewBox: "0 0 20 20",
            fill: "none"
        }, (void 0 === o || o) && r.createElement("path", {
            className: u.background,
            d: "M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z"
        }), r.createElement("circle", {
            className: u.dotBorderBase,
            cx: "10",
            cy: "10",
            r: "6"
        }), r.createElement("circle", {
            className: u.dotBorderColor,
            cx: "10",
            cy: "10",
            r: "6",
            fill: t
        }), r.createElement("circle", {
            className: u.dot,
            cx: "10",
            cy: "10",
            r: "5",
            fill: t
        }))
    }

    function l(e) {
        var t = e.color,
            n = e.name,
            o = e.tooltip;
        return null == t ? null : void 0 === o || o ? r.createElement(a.Tooltip, {
            text: n
        }, function(t) {
            var n, o;
            return r.createElement("span", (n = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r, o, i;
                        r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    })
                }
                return e
            }({}, t), o = (o = {
                "aria-hidden": !0
            }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(o)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
            }), n), r.createElement(s, e))
        }) : r.createElement(s, e)
    }

    function c(e) {
        var t = e.color,
            n = e.className;
        return null == t ? null : r.createElement("span", {
            className: i()(u.roleCircle, n),
            style: {
                backgroundColor: t
            }
        })
    }
}