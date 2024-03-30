function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Button: function() {
            return c
        },
        Separator: function() {
            return l
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("660276");

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function l(e) {
        var t = e.className;
        return r.createElement("div", {
            className: i()(t, u.separator)
        })
    }

    function c(e) {
        var t, n = e.onClick,
            o = e.onContextMenu,
            l = e.className,
            c = e.selected,
            f = e.children,
            d = e.disabled,
            _ = void 0 !== d && d,
            E = e.dangerous,
            p = function(e, t) {
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
            }(e, ["onClick", "onContextMenu", "className", "selected", "children", "disabled", "dangerous"]);
        return r.createElement(a.Clickable, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    s(e, t, n[t])
                })
            }
            return e
        }({
            onClick: _ ? void 0 : n,
            onContextMenu: _ ? void 0 : o,
            className: i()(l, (s(t = {}, u.button, !0), s(t, u.selected, void 0 !== c && c), s(t, u.disabled, _), s(t, u.dangerous, E), t))
        }, p), f)
    }
    t.default = function(e) {
        var t = e.className,
            n = e.children;
        return r.createElement("div", {
            className: i()(t, u.wrapper)
        }, n)
    }
}