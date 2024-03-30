function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        waitForOnboardingCompletion: function() {
            return u
        }
    });
    var r = n("957808"),
        o = n("947248"),
        i = n("745894"),
        a = n("844659");

    function u(e) {
        return new Promise(function(t) {
            r.default.addConditionalChangeListener(function() {
                var n, u = r.default.getSelfMember(e);
                return !(0, o.hasFlag)(null !== (n = null == u ? void 0 : u.flags) && void 0 !== n ? n : 0, a.GuildMemberFlags.COMPLETED_ONBOARDING) || (i.default.finishOnboarding(e), t(), !1)
            })
        })
    }
}