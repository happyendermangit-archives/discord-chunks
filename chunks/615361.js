function(e, t, n) {
    "use strict";
    var i, s;
    n.r(t), n.d(t, {
        ReleaseChannelsSets: function() {
            return r
        }
    }), n("222007"), (s = i || (i = {})).STABLE = "stable", s.PTB = "ptb", s.CANARY = "canary", s.BETA = "betaRelease", s.ALPHA = "alphaRelease", s.STAGING = "staging", s.DEVELOPMENT = "development";
    let r = {
        ALL: new Set(["alphaRelease", "betaRelease", "canary", "development", "ptb", "stable", "staging"])
    }
}