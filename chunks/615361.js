function(e, t, n) {
    "use strict";
    var i, s;
    n.r(t), n.d(t, {
        ReleaseChannelsSets: function() {
            return r
        }
    }), n("222007"), (s = i || (i = {})).STABLE = "stable", s.PTB = "ptb", s.CANARY = "canary", s.BETA_RELEASE = "betaRelease", s.CANARY_RELEASE = "canaryRelease", s.GOOGLE_RELEASE = "googleRelease", s.STAGING = "staging", s.DEVELOPMENT = "development";
    let r = {
        ALL: new Set(["betaRelease", "canary", "canaryRelease", "development", "googleRelease", "ptb", "stable", "staging"])
    }
}