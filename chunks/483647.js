function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Mode: function() {
            return i
        },
        PainLevel: function() {
            return a
        },
        defaultThresholds: function() {
            return u
        }
    }), (r = i || (i = {}))[r.KeepAsIs = 0] = "KeepAsIs", r[r.UseGreyDot = 1] = "UseGreyDot", (o = a || (a = {}))[o.Low = 0] = "Low", o[o.Medium = 1] = "Medium", o[o.High = 2] = "High";
    var r, o, i, a, u = {
        careALot: {
            monthOpenPerc: .01,
            yearOpenPerc: .01,
            sentMessages: 1e3
        },
        careALittle: {
            monthOpenPerc: .001,
            yearOpenPerc: .001,
            sentMessages: 5,
            minOpens: 2
        },
        smallServerSize: 50,
        mediumServerSize: 200,
        frecency: {
            yearMinOpensSmallServer: 10,
            yearMinOpensLargeServer: 50,
            monthMinOpens: 2,
            totalOpensPercent: .1
        }
    }
}