function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        shortenAndLocalizeNumber: function() {
            return s
        },
        parseInteger: function() {
            return r
        },
        formatPercent: function() {
            return a
        }
    });
    var i = n("782340");

    function s(e) {
        if (e < 1e6) return i.default.Messages.NUMBER_ABBREVIATION_FULL.format({
            value: e
        });
        let t = (e / 1e6).toFixed(1);
        return i.default.Messages.NUMBER_ABBREVIATION_MILLIONS.format({
            value: t
        })
    }

    function r(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NaN;
        if (null == e) return t;
        let n = parseInt(e);
        return Number.isNaN(n) ? t : n
    }

    function a(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return Intl.NumberFormat(e, {
            style: "percent",
            minimumFractionDigits: 0,
            ...n
        }).format(t)
    }
}