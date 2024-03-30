function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        formatPercent: function() {
            return a
        },
        parseInteger: function() {
            return i
        },
        shortenAndLocalizeNumber: function() {
            return o
        }
    });
    var r = n("941504");

    function o(e) {
        if (e < 1e6) return r.default.Messages.NUMBER_ABBREVIATION_FULL.format({
            value: e
        });
        var t = (e / 1e6).toFixed(1);
        return r.default.Messages.NUMBER_ABBREVIATION_MILLIONS.format({
            value: t
        })
    }

    function i(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NaN;
        if (null == e) return t;
        var n = parseInt(e);
        return Number.isNaN(n) ? t : n
    }

    function a(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return Intl.NumberFormat(e, function(e) {
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
            style: "percent",
            minimumFractionDigits: 0
        }, n)).format(t)
    }
}