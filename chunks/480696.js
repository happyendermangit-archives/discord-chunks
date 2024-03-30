function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("351482"),
        i = n("453884"),
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
            className: s,
            fill: void 0 === u ? "currentColor" : u,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M5.66493 5H18.3351C19.9079 5 21.2137 6.21463 21.3273 7.78329L21.9932 16.9774C22.0684 18.0165 21.2871 18.9198 20.248 18.9951C20.2027 18.9984 20.1572 19 20.1117 19C18.9191 19 17.8786 18.1904 17.5855 17.0342L17.0699 15H6.93021L6.41455 17.0342C6.12148 18.1904 5.081 19 3.88832 19C2.84651 19 2.00195 18.1554 2.00195 17.1136C2.00195 17.0682 2.0036 17.0227 2.00688 16.9774L2.67277 7.78329C2.78638 6.21463 4.09216 5 5.66493 5ZM14.5001 10C15.3285 10 16.0001 9.32843 16.0001 8.5C16.0001 7.67157 15.3285 7 14.5001 7C13.6716 7 13.0001 7.67157 13.0001 8.5C13.0001 9.32843 13.6716 10 14.5001 10ZM18.5001 13C19.3285 13 20.0001 12.3284 20.0001 11.5C20.0001 10.6716 19.3285 10 18.5001 10C17.6716 10 17.0001 10.6716 17.0001 11.5C17.0001 12.3284 17.6716 13 18.5001 13ZM6.00007 9H4.00008V11H6.00007V13H8.00007V11H10.0001V9H8.00007V7H6.00007V9Z",
            "aria-hidden": !0
        }))
    }, i.GameControllerIcon, void 0, {
        size: 24
    })
}