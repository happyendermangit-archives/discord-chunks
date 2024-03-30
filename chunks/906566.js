function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("351482"),
        i = n("84541"),
        a = n("994500");
    t.default = (0, o.replaceIcon)(function(e) {
        var t, n, o = e.width,
            i = e.height,
            u = e.color,
            s = e.foreground,
            l = function(e, t) {
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
        }({}, (0, a.default)(l)), n = (n = {
            width: void 0 === o ? 24 : o,
            height: void 0 === i ? 24 : i,
            viewBox: "0 0 24 24"
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
            fill: void 0 === u ? "currentColor" : u,
            className: s,
            fillRule: "evenodd",
            d: "M16.4770909,19 C18.0152727,16.936 18.9381818,14.531 19.1323636,12 L21.7527273,12 C21.3829091,15.056 19.3363636,17.65 16.4770909,19 Z M2.24618182,12 L4.86654545,12 C5.06072727,14.531 5.98363636,16.936 7.52181818,19 C4.66254545,17.65 2.616,15.056 2.24618182,12 Z M7.52181818,3 C5.98254545,5.064 5.06072727,7.469 4.86654545,10 L2.24618182,10 C2.616,6.944 4.66254545,4.35 7.52181818,3 Z M13.0909091,10 L13.0909091,2.369 C15.3294545,4.416 16.6930909,7.111 16.9505455,10 L13.0909091,10 Z M13.0909091,19.631 L13.0909091,12 L16.9505455,12 C16.6930909,14.889 15.3294545,17.584 13.0909091,19.631 Z M10.9090909,12 L10.9090909,19.631 C8.66945455,17.584 7.30581818,14.889 7.04836364,12 L10.9090909,12 Z M10.9090909,10 L7.04836364,10 C7.30581818,7.111 8.66945455,4.416 10.9090909,2.369 L10.9090909,10 Z M19.1323636,10 C18.9381818,7.469 18.0163636,5.064 16.4770909,3 C19.3363636,4.35 21.3829091,6.944 21.7527273,10 L19.1323636,10 Z M0,11 C0,17.075 5.37163636,22 12,22 C18.6272727,22 24,17.075 24,11 C24,4.925 18.6272727,0 12,0 C5.37163636,0 0,4.925 0,11 Z",
            transform: "translate(0 1)"
        }))
    }, i.GlobeEarthIcon, void 0, {
        size: 24
    })
}