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
            a = void 0 === i ? 16 : i,
            u = e.height,
            s = void 0 === u ? a : u,
            l = e.color,
            c = e.foreground,
            f = function(e, t) {
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
        }({}, (0, o.default)(f)), n = (n = {
            width: a,
            height: s,
            viewBox: "0 0 16 16"
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
            d: "M14.3385 7.6721L10.4015 6.85189L11.891 4.56187C11.9309 4.49891 11.9482 4.42423 11.94 4.35013C11.9318 4.27603 11.8986 4.20692 11.8459 4.15421C11.7932 4.10149 11.7241 4.06829 11.65 4.06009C11.5759 4.05189 11.5012 4.0692 11.4382 4.10911L9.14822 5.59859L8.328 1.66158C8.328 1.57457 8.29345 1.49114 8.23193 1.42961C8.1704 1.36809 8.08693 1.3335 7.99992 1.3335C7.91291 1.3335 7.82944 1.36809 7.76791 1.42961C7.70639 1.49114 7.67183 1.57457 7.67183 1.66158L6.85162 5.59859L4.5616 4.10911C4.49863 4.0692 4.42395 4.05189 4.34985 4.06009C4.27576 4.06829 4.20665 4.10149 4.15393 4.15421C4.10122 4.20692 4.06802 4.27603 4.05982 4.35013C4.05162 4.42423 4.06892 4.49891 4.10884 4.56187L5.59836 6.85189L1.66134 7.6721C1.57432 7.6721 1.49086 7.70665 1.42933 7.76818C1.3678 7.8297 1.33325 7.91317 1.33325 8.00018C1.33325 8.0872 1.3678 8.17062 1.42933 8.23215C1.49086 8.29368 1.57432 8.32827 1.66134 8.32827L5.59836 9.14848L4.10884 11.4385C4.06803 11.5011 4.05031 11.5759 4.0587 11.6502C4.06708 11.7244 4.10104 11.7934 4.15477 11.8453C4.18407 11.8768 4.21963 11.9019 4.25918 11.9188C4.29874 11.9358 4.34139 11.9443 4.38442 11.9438C4.44713 11.9426 4.50835 11.9244 4.5616 11.8913L6.85162 10.4017L7.67183 14.3387C7.67183 14.4258 7.70639 14.5092 7.76791 14.5708C7.82944 14.6323 7.91291 14.6668 7.99992 14.6668C8.08693 14.6668 8.1704 14.6323 8.23193 14.5708C8.29345 14.5092 8.328 14.4258 8.328 14.3387L9.14822 10.4017L11.4382 11.8913C11.4915 11.9244 11.5527 11.9426 11.6154 11.9438C11.6585 11.9443 11.7011 11.9358 11.7407 11.9188C11.7802 11.9019 11.8158 11.8768 11.8451 11.8453C11.8988 11.7934 11.9328 11.7244 11.9411 11.6502C11.9495 11.5759 11.9318 11.5011 11.891 11.4385L10.4015 9.14848L14.3385 8.32827C14.4255 8.32827 14.509 8.29368 14.5705 8.23215C14.632 8.17062 14.6666 8.0872 14.6666 8.00018C14.6666 7.91317 14.632 7.8297 14.5705 7.76818C14.509 7.70665 14.4255 7.6721 14.3385 7.6721Z",
            fill: void 0 === l ? "currentColor" : l,
            className: c
        }))
    }
}