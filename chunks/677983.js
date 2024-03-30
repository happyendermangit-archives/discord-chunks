function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormLabel: function() {
            return f
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("246906"),
        u = n("785720"),
        s = n("941504"),
        l = n("290852");

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function f(e) {
        var t, n = e.children,
            o = e.className,
            f = e.disabled,
            d = e.required,
            _ = function(e, t) {
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
            }(e, ["children", "className", "disabled", "required"]);
        return r.createElement(u.default, function(e) {
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
            tag: "label",
            color: u.default.Colors.HEADER_SECONDARY,
            className: i()(l.label, o, (c(t = {}, l.defaultMargin, null == o), c(t, l.disabled, f), t))
        }, _), n, void 0 !== d && d && r.createElement(r.Fragment, null, r.createElement("span", {
            className: l.required,
            "aria-hidden": !0
        }, "*"), r.createElement(a.HiddenVisually, null, s.default.Messages.REQUIRED)))
    }
}