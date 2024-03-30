function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("763105"),
        u = n("228897"),
        s = n("118891"),
        l = n("382379");

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var f = function(e) {
        switch (e.id) {
            case s.BuiltInSectionId.BUILT_IN:
                return a.default;
            case s.BuiltInSectionId.FRECENCY:
                return u.default;
            default:
                return
        }
    };

    function d(e) {
        var t, n = e.section,
            o = e.className,
            a = e.width,
            u = e.height,
            s = e.padding,
            d = e.isSelected,
            _ = e.selectable,
            E = void 0 !== _ && _,
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
            }(e, ["section", "className", "width", "height", "padding", "isSelected", "selectable"]),
            m = f(n);
        return r.createElement("div", {
            className: i()(l.wrapper, o, (c(t = {}, l.selectable, E), c(t, l.selected, E && d), t)),
            style: {
                width: a,
                height: u,
                padding: null != s ? s : 0
            }
        }, null != m ? r.createElement(m, function(e) {
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
            className: l.icon,
            width: a,
            height: u
        }, p)) : null)
    }
}