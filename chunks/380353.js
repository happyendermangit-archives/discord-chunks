function(e, t, n) {
    "use strict";
    var i, a, s, l;
    n.r(t), n.d(t, {
        Mode: function() {
            return i
        },
        PainLevel: function() {
            return a
        },
        defaultThresholds: function() {
            return r
        }
    }), (s = i || (i = {}))[s.KeepAsIs = 0] = "KeepAsIs", s[s.UseGreyDot = 1] = "UseGreyDot", (l = a || (a = {}))[l.Low = 0] = "Low", l[l.Medium = 1] = "Medium", l[l.High = 2] = "High";
    let r = {
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