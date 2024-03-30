function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("470079"),
        o = n("994500");

    function i(e) {
        var t, n, i = e.width,
            a = e.height,
            u = e.color,
            s = function(e, t) {
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
            }(e, ["width", "height", "color"]);
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
        }({}, (0, o.default)(s)), n = (n = {
            width: void 0 === i ? 10 : i,
            height: void 0 === a ? 10 : a,
            viewBox: "0 0 17 22",
            fill: void 0 === u ? "currentColor" : u,
            xmlns: "http://www.w3.org/2000/svg"
        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t), r.createElement("g", {
            filter: "url(#filter0_d_1296_1706)"
        }, r.createElement("path", {
            opacity: "0.55",
            d: "M8.49999 3.7998L4.85999 7.4398V12.5598L8.49999 16.1998L12.14 12.5598V7.4398L8.49999 3.7998ZM10.32 11.7998L8.49999 13.6265L6.67999 11.8065V8.19314L8.49999 6.37314L10.32 8.19314V11.7998Z",
            fill: "white"
        }), r.createElement("path", {
            opacity: "0.8",
            d: "M6.67999 8.19354V11.8069L8.49999 13.6269L10.32 11.8069V8.19354L8.49999 6.37354L6.67999 8.19354Z",
            fill: "white"
        }), r.createElement("path", {
            d: "M8.5 3.7998V6.37314L10.32 8.19314L12.14 7.4398L8.5 3.7998Z",
            fill: "white"
        })), r.createElement("defs", null, r.createElement("filter", {
            id: "filter0_d_1296_1706",
            x: "-3.5",
            y: "-1",
            width: "24",
            height: "24",
            filterUnits: "userSpaceOnUse",
            "color-interpolation-filters": "sRGB"
        }, r.createElement("feFlood", {
            "flood-opacity": "0",
            result: "BackgroundImageFix"
        }), r.createElement("feColorMatrix", {
            in: "SourceAlpha",
            type: "matrix",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
            result: "hardAlpha"
        }), r.createElement("feOffset", {
            dy: "1"
        }), r.createElement("feGaussianBlur", {
            stdDeviation: "2"
        }), r.createElement("feColorMatrix", {
            type: "matrix",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
        }), r.createElement("feBlend", {
            mode: "normal",
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_1296_1706"
        }), r.createElement("feBlend", {
            mode: "normal",
            in: "SourceGraphic",
            in2: "effect1_dropShadow_1296_1706",
            result: "shape"
        }))))
    }
}