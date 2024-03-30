function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r("470079"),
        o = r("351482"),
        a = r("183692"),
        l = r("994500");

    function c(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
                var n, o, a;
                n = e, o = t, a = r[t], o in n ? Object.defineProperty(n, o, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[o] = a
            })
        }
        return e
    }

    function s(e, t) {
        if (null == e) return {};
        var r, n, o = function(e, t) {
            if (null == e) return {};
            var r, n, o = {},
                a = Object.keys(e);
            for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && (o[r] = e[r]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (n = 0; n < a.length; n++) {
                if (r = a[n], !(t.indexOf(r) >= 0)) Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
        }
        return o
    }
    t.default = (0, o.replaceIcon)(function(e) {
        var t, r, o = e.width,
            a = e.height,
            i = e.color,
            u = s(e, ["width", "height", "color"]);
        return n.createElement("svg", (t = c({
            width: void 0 === o ? 16 : o,
            height: void 0 === a ? 16 : a
        }, (0, l.default)(u)), r = (r = {
            viewBox: "0 0 16 16"
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
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9.20038 2.39762V5.24178C9.20038 6.10455 9.89673 6.80072 10.7597 6.80072H13.6046C13.9558 6.80072 14.1343 6.37826 13.8844 6.12835L9.87292 2.11796C9.62295 1.86806 9.20038 2.04061 9.20038 2.39762ZM10.7461 8.01794C9.22044 8.01794 7.98197 6.77947 7.98197 5.25382V2.03499H3.19561C2.53749 2.03499 1.99902 2.57346 1.99902 3.23158V12.8043C1.99902 13.4624 2.53749 14.0009 3.19561 14.0009H12.7683C13.4265 14.0009 13.9649 13.4624 13.9649 12.8043V8.01794H10.7461ZM9.80015 9C9.80015 9.99411 8.99427 10.8 8.00015 10.8C7.00604 10.8 6.20015 9.99411 6.20015 9H5.00015C5.00015 10.6569 6.3433 12 8.00015 12C9.65701 12 11.0002 10.6569 11.0002 9H9.80015Z",
            fill: void 0 === i ? "currentColor" : i
        }))
    }, function(e) {
        var t = e.width,
            r = e.height,
            o = s(e, ["width", "height"]);
        return n.createElement(a.StickerSmallIcon, c({
            width: void 0 === t ? 16 : t,
            height: void 0 === r ? 16 : r
        }, o))
    }, void 0, {
        size: 16
    })
}