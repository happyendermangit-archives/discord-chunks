function(e, t, n) {
    "use strict";
    var i, a, l, s;
    n.r(t), n.d(t, {
        Mode: function() {
            return i
        },
        PainLevel: function() {
            return a
        },
        defaultThresholds: function() {
            return o
        }
    }), (l = i || (i = {}))[l.KeepAsIs = 0] = "KeepAsIs", l[l.UseGreyDot = 1] = "UseGreyDot", (s = a || (a = {}))[s.Low = 0] = "Low", s[s.Medium = 1] = "Medium", s[s.High = 2] = "High";
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