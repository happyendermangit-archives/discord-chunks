function(e, t, n) {
    "use strict";
    var i, r, s, a, o, l;
    n.r(t), n.d(t, {
        ExperimentBuckets: function() {
            return i
        },
        ExperimentTypes: function() {
            return r
        },
        ExposureTypes: function() {
            return s
        },
        userTriggerExperimentId: function() {
            return u
        },
        guildTriggerExperimentId: function() {
            return c
        },
        TriggerDebuggingAAExperiments: function() {
            return d
        }
    }), (a = i || (i = {}))[a.NOT_ELIGIBLE = -1] = "NOT_ELIGIBLE", a[a.CONTROL = 0] = "CONTROL", a[a.TREATMENT_1 = 1] = "TREATMENT_1", a[a.TREATMENT_2 = 2] = "TREATMENT_2", a[a.TREATMENT_3 = 3] = "TREATMENT_3", a[a.TREATMENT_4 = 4] = "TREATMENT_4", a[a.TREATMENT_5 = 5] = "TREATMENT_5", a[a.TREATMENT_6 = 6] = "TREATMENT_6", a[a.TREATMENT_7 = 7] = "TREATMENT_7", a[a.TREATMENT_8 = 8] = "TREATMENT_8", a[a.TREATMENT_9 = 9] = "TREATMENT_9", a[a.TREATMENT_10 = 10] = "TREATMENT_10", a[a.TREATMENT_11 = 11] = "TREATMENT_11", a[a.TREATMENT_12 = 12] = "TREATMENT_12", a[a.TREATMENT_13 = 13] = "TREATMENT_13", a[a.TREATMENT_14 = 14] = "TREATMENT_14", a[a.TREATMENT_15 = 15] = "TREATMENT_15", a[a.TREATMENT_16 = 16] = "TREATMENT_16", a[a.TREATMENT_17 = 17] = "TREATMENT_17", a[a.TREATMENT_18 = 18] = "TREATMENT_18", a[a.TREATMENT_19 = 19] = "TREATMENT_19", a[a.TREATMENT_20 = 20] = "TREATMENT_20", a[a.TREATMENT_21 = 21] = "TREATMENT_21", a[a.TREATMENT_22 = 22] = "TREATMENT_22", a[a.TREATMENT_23 = 23] = "TREATMENT_23", a[a.TREATMENT_24 = 24] = "TREATMENT_24", a[a.TREATMENT_25 = 25] = "TREATMENT_25", (o = r || (r = {})).NONE_LEGACY = "none", o.GUILD = "guild", o.USER = "user", (l = s || (s = {})).MANUAL = "manual", l.AUTO = "auto", l.AUTO_FALLBACK = "auto_fallback";
    let u = "2023-10_triggerdebuggingaa",
        c = "2023-10_guildaa",
        d = [u, c]
}