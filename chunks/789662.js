function(e, t, n) {
    "use strict";
    var i, r, s, a;
    n.r(t), n.d(t, {
        Mode: function() {
            return i
        },
        PainLevel: function() {
            return r
        },
        defaultThresholds: function() {
            return o
        }
    }), (s = i || (i = {}))[s.KeepAsIs = 0] = "KeepAsIs", s[s.UseGreyDot = 1] = "UseGreyDot", (a = r || (r = {}))[a.Low = 0] = "Low", a[a.Medium = 1] = "Medium", a[a.High = 2] = "High";
    let o = {
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