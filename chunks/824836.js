function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NameWithRole: function() {
            return m
        },
        NameWithRoleAnchor: function() {
            return p
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("428982"),
        s = n("622780"),
        l = n("994098"),
        c = n("658092");

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                f(e, t, n[t])
            })
        }
        return e
    }

    function _(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function E(e) {
        var t = e.roleStyle,
            n = e.name,
            o = e.color,
            a = e.roleName,
            u = e.dotAlignment,
            s = void 0 === u ? "left" : u,
            d = e.className,
            _ = "username" === t,
            E = "dot" === t ? r.createElement(l.RoleDot, {
                color: o,
                name: a,
                className: "left" === s ? c.roleDotLeft : c.roleDotRight
            }) : null;
        return r.createElement("span", {
            style: {
                color: _ && null != o ? o : void 0
            },
            className: i()(d, f({}, c.username, _))
        }, "left" === s && E, n, "right" === s && E)
    }

    function p(e) {
        var t = e.name,
            n = e.color,
            o = e.roleName,
            i = e.dotAlignment,
            l = e.className,
            c = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }(e, ["name", "color", "roleName", "dotAlignment", "className"]),
            f = (0, a.useStateFromStores)([s.default], function() {
                return s.default.roleStyle
            }),
            p = "username" === f,
            m = r.createElement(E, {
                roleStyle: f,
                name: t,
                color: n,
                roleName: o,
                dotAlignment: i,
                className: l
            }),
            y = p ? {
                color: n
            } : void 0;
        return r.createElement(u.Anchor, _(d({}, c), {
            children: m,
            style: y
        }))
    }

    function m(e) {
        var t = (0, a.useStateFromStores)([s.default], function() {
            return s.default.roleStyle
        });
        return r.createElement(E, _(d({}, e), {
            roleStyle: t
        }))
    }
}