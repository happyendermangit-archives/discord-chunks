function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r("470079"),
        l = r("351482"),
        i = r("336938"),
        a = r("994500");
    t.default = (0, l.replaceIcon)(function(e) {
        var t, r, l = e.width,
            i = e.height,
            o = e.color,
            c = void 0 === o ? "currentColor" : o,
            u = e.foreground,
            s = function(e, t) {
                if (null == e) return {};
                var r, n, l = function(e, t) {
                    if (null == e) return {};
                    var r, n, l = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && (l[r] = e[r]);
                    return l
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        if (r = i[n], !(t.indexOf(r) >= 0)) Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
                    }
                }
                return l
            }(e, ["width", "height", "color", "foreground"]);
        return n.createElement("svg", (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))), n.forEach(function(t) {
                    var n, l, i;
                    n = e, l = t, i = r[t], l in n ? Object.defineProperty(n, l, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[l] = i
                })
            }
            return e
        }({}, (0, a.default)(s)), r = (r = {
            width: void 0 === l ? 24 : l,
            height: void 0 === i ? 24 : i,
            viewBox: "0 0 24 24",
            fill: "none"
        }, r), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                r.push.apply(r, n)
            }
            return r
        })(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }), t), n.createElement("path", {
            className: u,
            fill: c,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18 10.7101C15.1085 9.84957 13 7.17102 13 4C13 3.69264 13.0198 3.3899 13.0582 3.093C12.7147 3.03189 12.3611 3 12 3C8.686 3 6 5.686 6 9V14C6 15.657 4.656 17 3 17V18H21V17C19.344 17 18 15.657 18 14V10.7101ZM8.55493 19C9.24793 20.19 10.5239 21 11.9999 21C13.4759 21 14.7519 20.19 15.4449 19H8.55493Z"
        }), n.createElement("path", {
            d: "M18.2624 5.50209L21 2.5V1H16.0349V2.49791H18.476L16 5.61088V7H21V5.50209H18.2624Z",
            fill: c
        }))
    }, i.BellZIcon, void 0, {
        size: 24
    })
}