function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("351482"),
        i = n("626153"),
        a = n("994500");
    t.default = (0, o.replaceIcon)(function(e) {
        var t, n, o = e.width,
            i = e.height,
            u = e.color,
            s = void 0 === u ? "currentColor" : u,
            l = e.foreground,
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
            }(e, ["width", "height", "color", "foreground"]);
        return r.createElement("svg", (t = function(e) {
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
        }({}, (0, a.default)(c)), n = (n = {
            width: void 0 === o ? 24 : o,
            height: void 0 === i ? 24 : i,
            viewBox: "0 0 24 24",
            fill: "none"
        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t), r.createElement("path", {
            className: l,
            fill: s,
            d: "M19.0999 3.99994V5.12653L4.84988 8.26441V18.1176C4.84988 18.5496 5.14628 18.9251 5.56998 19.0315L9.36998 19.9726C9.44598 19.9905 9.52388 19.9999 9.59988 19.9999C9.89533 19.9999 10.1775 19.8635 10.3599 19.6235L10.5599 19.3593V16.2214L9.21798 17.9943L6.74988 17.3825V15.2112L10.5599 16.0509V13.92C10.5599 12.3294 11.8493 11.04 13.4399 11.04H20.9999V3.99994H19.0999Z"
        }), r.createElement("path", {
            className: l,
            fill: s,
            d: "M3.89988 8.25994H1.99988V15.2941H3.89988V8.25994Z"
        }), r.createElement("path", {
            className: l,
            fill: s,
            d: "M12.48 13.92C12.48 13.3898 12.9098 12.96 13.44 12.96H22.56C23.0901 12.96 23.52 13.3898 23.52 13.92V20.2213C23.52 20.7514 23.0901 21.1813 22.56 21.1813H18.1294C17.8916 21.1813 17.6623 21.2695 17.4858 21.4289L15.0408 23.6378C14.8865 23.7772 14.64 23.6677 14.64 23.4597V21.4213C14.64 21.2887 14.5325 21.1813 14.4 21.1813H13.44C12.9098 21.1813 12.48 20.7514 12.48 20.2213V13.92Z"
        }))
    }, i.AnnouncementsIcon, void 0, {
        size: 24
    })
}