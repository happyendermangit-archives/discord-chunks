function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormTitle: function() {
            return f
        },
        FormTitleTags: function() {
            return o
        }
    });
    var r, o, i = n("470079"),
        a = n("803997"),
        u = n.n(a),
        s = n("433952"),
        l = n("315143");

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function f(e) {
        var t, n, r = e.tag,
            o = void 0 === r ? "h5" : r,
            a = e.children,
            f = e.className,
            d = e.faded,
            _ = e.disabled,
            E = e.required,
            p = e.error,
            m = e.errorId,
            y = function(e, t) {
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
            }(e, ["tag", "children", "className", "faded", "disabled", "required", "error", "errorId"]);
        switch (o) {
            case "legend":
            case "label":
                t = o;
                break;
            default:
                t = s.H
        }
        return i.createElement(t, function(e) {
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
            className: u()(l[o], "h5" !== o ? l.defaultColor : null, f, (c(n = {}, l["defaultMargin".concat(o)], null == f), c(n, l.faded, d), c(n, l.disabled, _), c(n, l.error, null != p), n))
        }, y), a, void 0 !== E && E && null == p ? i.createElement("span", {
            className: l.required
        }, "*") : null, null != p ? i.createElement("span", {
            id: m,
            className: l.errorMessage
        }, null != a ? i.createElement("span", {
            className: l.errorSeparator
        }, "-") : null, p) : null)
    }(r = o || (o = {})).H1 = "h1", r.H2 = "h2", r.H3 = "h3", r.H4 = "h4", r.H5 = "h5", r.LABEL = "label", r.LEGEND = "legend"
}