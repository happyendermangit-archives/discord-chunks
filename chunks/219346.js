function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        formatPrice: function() {
            return s
        }
    });
    var r, o = n("567198"),
        i = n.n(o),
        a = n("563090");

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var s = function(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                o = r.convertToMajorUnits,
                i = function(e, t) {
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
                }(r, ["convertToMajorUnits"]);
            return Intl.NumberFormat(n, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        u(e, t, n[t])
                    })
                }
                return e
            }({
                style: "currency",
                currency: t
            }, i)).format(void 0 === o || o ? c(e, t) : e)
        },
        l = (u(r = {}, a.CurrencyCodes.AED, 2), u(r, a.CurrencyCodes.AFN, 2), u(r, a.CurrencyCodes.ALL, 2), u(r, a.CurrencyCodes.AMD, 2), u(r, a.CurrencyCodes.ANG, 2), u(r, a.CurrencyCodes.AOA, 2), u(r, a.CurrencyCodes.ARS, 2), u(r, a.CurrencyCodes.AUD, 2), u(r, a.CurrencyCodes.AWG, 2), u(r, a.CurrencyCodes.AZN, 2), u(r, a.CurrencyCodes.BAM, 2), u(r, a.CurrencyCodes.BBD, 2), u(r, a.CurrencyCodes.BDT, 2), u(r, a.CurrencyCodes.BGN, 2), u(r, a.CurrencyCodes.BHD, 3), u(r, a.CurrencyCodes.BIF, 0), u(r, a.CurrencyCodes.BMD, 2), u(r, a.CurrencyCodes.BND, 2), u(r, a.CurrencyCodes.BOB, 2), u(r, a.CurrencyCodes.BOV, 2), u(r, a.CurrencyCodes.BRL, 2), u(r, a.CurrencyCodes.BSD, 2), u(r, a.CurrencyCodes.BTN, 2), u(r, a.CurrencyCodes.BWP, 2), u(r, a.CurrencyCodes.BYR, 0), u(r, a.CurrencyCodes.BYN, 2), u(r, a.CurrencyCodes.BZD, 2), u(r, a.CurrencyCodes.CAD, 2), u(r, a.CurrencyCodes.CDF, 2), u(r, a.CurrencyCodes.CHE, 2), u(r, a.CurrencyCodes.CHF, 2), u(r, a.CurrencyCodes.CHW, 2), u(r, a.CurrencyCodes.CLF, 0), u(r, a.CurrencyCodes.CLP, 0), u(r, a.CurrencyCodes.CNY, 2), u(r, a.CurrencyCodes.COP, 2), u(r, a.CurrencyCodes.COU, 2), u(r, a.CurrencyCodes.CRC, 2), u(r, a.CurrencyCodes.CUC, 2), u(r, a.CurrencyCodes.CUP, 2), u(r, a.CurrencyCodes.CVE, 2), u(r, a.CurrencyCodes.CZK, 2), u(r, a.CurrencyCodes.DJF, 0), u(r, a.CurrencyCodes.DKK, 2), u(r, a.CurrencyCodes.DOP, 2), u(r, a.CurrencyCodes.DZD, 2), u(r, a.CurrencyCodes.EGP, 2), u(r, a.CurrencyCodes.ERN, 2), u(r, a.CurrencyCodes.ETB, 2), u(r, a.CurrencyCodes.EUR, 2), u(r, a.CurrencyCodes.FJD, 2), u(r, a.CurrencyCodes.FKP, 2), u(r, a.CurrencyCodes.GBP, 2), u(r, a.CurrencyCodes.GEL, 2), u(r, a.CurrencyCodes.GHS, 2), u(r, a.CurrencyCodes.GIP, 2), u(r, a.CurrencyCodes.GMD, 2), u(r, a.CurrencyCodes.GNF, 0), u(r, a.CurrencyCodes.GTQ, 2), u(r, a.CurrencyCodes.GYD, 2), u(r, a.CurrencyCodes.HKD, 2), u(r, a.CurrencyCodes.HNL, 2), u(r, a.CurrencyCodes.HRK, 2), u(r, a.CurrencyCodes.HTG, 2), u(r, a.CurrencyCodes.HUF, 2), u(r, a.CurrencyCodes.IDR, 2), u(r, a.CurrencyCodes.ILS, 2), u(r, a.CurrencyCodes.INR, 2), u(r, a.CurrencyCodes.IQD, 3), u(r, a.CurrencyCodes.IRR, 2), u(r, a.CurrencyCodes.ISK, 0), u(r, a.CurrencyCodes.JMD, 2), u(r, a.CurrencyCodes.JOD, 3), u(r, a.CurrencyCodes.JPY, 0), u(r, a.CurrencyCodes.KES, 2), u(r, a.CurrencyCodes.KGS, 2), u(r, a.CurrencyCodes.KHR, 2), u(r, a.CurrencyCodes.KMF, 0), u(r, a.CurrencyCodes.KPW, 2), u(r, a.CurrencyCodes.KRW, 0), u(r, a.CurrencyCodes.KWD, 3), u(r, a.CurrencyCodes.KYD, 2), u(r, a.CurrencyCodes.KZT, 2), u(r, a.CurrencyCodes.LAK, 2), u(r, a.CurrencyCodes.LBP, 2), u(r, a.CurrencyCodes.LKR, 2), u(r, a.CurrencyCodes.LRD, 2), u(r, a.CurrencyCodes.LSL, 2), u(r, a.CurrencyCodes.LTL, 2), u(r, a.CurrencyCodes.LVL, 2), u(r, a.CurrencyCodes.LYD, 3), u(r, a.CurrencyCodes.MAD, 2), u(r, a.CurrencyCodes.MDL, 2), u(r, a.CurrencyCodes.MGA, 2), u(r, a.CurrencyCodes.MKD, 2), u(r, a.CurrencyCodes.MMK, 2), u(r, a.CurrencyCodes.MNT, 2), u(r, a.CurrencyCodes.MOP, 2), u(r, a.CurrencyCodes.MRO, 2), u(r, a.CurrencyCodes.MUR, 2), u(r, a.CurrencyCodes.MVR, 2), u(r, a.CurrencyCodes.MWK, 2), u(r, a.CurrencyCodes.MXN, 2), u(r, a.CurrencyCodes.MXV, 2), u(r, a.CurrencyCodes.MYR, 2), u(r, a.CurrencyCodes.MZN, 2), u(r, a.CurrencyCodes.NAD, 2), u(r, a.CurrencyCodes.NGN, 2), u(r, a.CurrencyCodes.NIO, 2), u(r, a.CurrencyCodes.NOK, 2), u(r, a.CurrencyCodes.NPR, 2), u(r, a.CurrencyCodes.NZD, 2), u(r, a.CurrencyCodes.OMR, 3), u(r, a.CurrencyCodes.PAB, 2), u(r, a.CurrencyCodes.PEN, 2), u(r, a.CurrencyCodes.PGK, 2), u(r, a.CurrencyCodes.PHP, 2), u(r, a.CurrencyCodes.PKR, 2), u(r, a.CurrencyCodes.PLN, 2), u(r, a.CurrencyCodes.PYG, 0), u(r, a.CurrencyCodes.QAR, 2), u(r, a.CurrencyCodes.RON, 2), u(r, a.CurrencyCodes.RSD, 2), u(r, a.CurrencyCodes.RUB, 2), u(r, a.CurrencyCodes.RWF, 0), u(r, a.CurrencyCodes.SAR, 2), u(r, a.CurrencyCodes.SBD, 2), u(r, a.CurrencyCodes.SCR, 2), u(r, a.CurrencyCodes.SDG, 2), u(r, a.CurrencyCodes.SEK, 2), u(r, a.CurrencyCodes.SGD, 2), u(r, a.CurrencyCodes.SHP, 2), u(r, a.CurrencyCodes.SLL, 2), u(r, a.CurrencyCodes.SOS, 2), u(r, a.CurrencyCodes.SRD, 2), u(r, a.CurrencyCodes.SSP, 2), u(r, a.CurrencyCodes.STD, 2), u(r, a.CurrencyCodes.SVC, 2), u(r, a.CurrencyCodes.SYP, 2), u(r, a.CurrencyCodes.SZL, 2), u(r, a.CurrencyCodes.THB, 2), u(r, a.CurrencyCodes.TJS, 2), u(r, a.CurrencyCodes.TMT, 2), u(r, a.CurrencyCodes.TND, 3), u(r, a.CurrencyCodes.TOP, 2), u(r, a.CurrencyCodes.TRY, 2), u(r, a.CurrencyCodes.TTD, 2), u(r, a.CurrencyCodes.TWD, 2), u(r, a.CurrencyCodes.TZS, 2), u(r, a.CurrencyCodes.UAH, 2), u(r, a.CurrencyCodes.UGX, 0), u(r, a.CurrencyCodes.USD, 2), u(r, a.CurrencyCodes.USN, 2), u(r, a.CurrencyCodes.USS, 2), u(r, a.CurrencyCodes.UYI, 0), u(r, a.CurrencyCodes.UYU, 2), u(r, a.CurrencyCodes.UZS, 2), u(r, a.CurrencyCodes.VEF, 2), u(r, a.CurrencyCodes.VND, 0), u(r, a.CurrencyCodes.VUV, 0), u(r, a.CurrencyCodes.WST, 2), u(r, a.CurrencyCodes.XAF, 0), u(r, a.CurrencyCodes.XAG, 0), u(r, a.CurrencyCodes.XAU, 0), u(r, a.CurrencyCodes.XBA, 0), u(r, a.CurrencyCodes.XBB, 0), u(r, a.CurrencyCodes.XBC, 0), u(r, a.CurrencyCodes.XBD, 0), u(r, a.CurrencyCodes.XCD, 2), u(r, a.CurrencyCodes.XDR, 0), u(r, a.CurrencyCodes.XFU, 0), u(r, a.CurrencyCodes.XOF, 0), u(r, a.CurrencyCodes.XPD, 0), u(r, a.CurrencyCodes.XPF, 0), u(r, a.CurrencyCodes.XPT, 0), u(r, a.CurrencyCodes.XSU, 0), u(r, a.CurrencyCodes.XTS, 0), u(r, a.CurrencyCodes.XUA, 0), u(r, a.CurrencyCodes.YER, 2), u(r, a.CurrencyCodes.ZAR, 2), u(r, a.CurrencyCodes.ZMW, 2), u(r, a.CurrencyCodes.ZWL, 2), r),
        c = function(e, t) {
            var n = l[t];
            if (null == n) throw Error("Unexpected currency ".concat(t));
            return new(i())(e).dividedBy(Math.pow(10, n)).toNumber()
        }
}