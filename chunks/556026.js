function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Heading: function() {
            return l
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("135983"),
        u = n("433952"),
        s = n("787035"),
        l = function(e) {
            var t = e.variant,
                n = e.className,
                o = function(e, t) {
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
                }(e, ["variant", "className"]),
                l = (0, u.usePrivateHeadingLevel)(),
                c = "h".concat(Math.min(l, 6));
            return r.createElement(a.Text, function(e) {
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
            }({
                variant: t,
                tag: c,
                className: i()(s.defaultColor, n)
            }, l > 6 ? {
                "data-excessive-heading-level": l
            } : {}, o))
        }
}