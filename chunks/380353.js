function(e, t, n) {
    "use strict";
    var a, i, s, l;
    n.r(t), n.d(t, {
        Mode: function() {
            return a
        },
        PainLevel: function() {
            return i
        },
        defaultThresholds: function() {
            return o
        }
    }), (s = a || (a = {}))[s.KeepAsIs = 0] = "KeepAsIs", s[s.UseGreyDot = 1] = "UseGreyDot", (l = i || (i = {}))[l.Low = 0] = "Low", l[l.Medium = 1] = "Medium", l[l.High = 2] = "High";
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