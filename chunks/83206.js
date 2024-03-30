function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        QuestsIconWithGradient: function() {
            return l
        }
    });
    var r = n("470079"),
        o = n("722161"),
        i = n("94919"),
        a = n("405502"),
        u = n("563090");

    function s(e) {
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
    }
    var l = function(e) {
        var t, n, l = e.height,
            c = e.width,
            f = (e.color, function(e, t) {
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
            }(e, ["height", "width", "color"])),
            d = (0, a.useColorValue)(u.Color.TEAL_160),
            _ = (0, a.useColorValue)(u.Color.BRAND_430);
        return r.createElement("svg", (t = s({}, (0, o.default)(f)), n = (n = {
            xmlns: "http://www.w3.org/2000/svg",
            width: void 0 === c ? 24 : c,
            height: void 0 === l ? 24 : l,
            fill: "none",
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
        }), t), r.createElement("defs", null, r.createElement("linearGradient", {
            id: "gradient",
            x1: "0",
            x2: "0",
            y1: "0",
            y2: "1"
        }, r.createElement("stop", {
            offset: "0%",
            stopColor: d.hex
        }), r.createElement("stop", {
            offset: "100%",
            stopColor: _.hex
        }))), r.createElement(i.QuestsIcon, s({
            color: "url(#gradient)",
            height: "100%",
            width: "100%"
        }, f)))
    }
}