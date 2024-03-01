function(e, _, E) {
    "use strict";
    var t, o;
    E.r(_), E.d(_, {
        ReleaseChannelsSets: function() {
            return n
        }
    }), E("222007"), (o = t || (t = {})).STABLE = "stable", o.BETA = "beta", o.ALPHA = "alpha", o.PTB = "ptb", o.CANARY = "canary", o.STAGING = "staging", o.DEVELOPMENT = "development";
    let n = {
        ALL: new Set(["alpha", "beta", "canary", "development", "ptb", "stable", "staging"])
    }
}