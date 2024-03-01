function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        waitForOnboardingCompletion: function() {
            return s
        }
    }), n("702976");
    var a = n("26989"),
        l = n("568734"),
        i = n("921031"),
        d = n("657944");

    function s(e) {
        return new Promise(t => {
            a.default.addConditionalChangeListener(() => {
                var n;
                let s = a.default.getSelfMember(e);
                return !(0, l.hasFlag)(null !== (n = null == s ? void 0 : s.flags) && void 0 !== n ? n : 0, d.GuildMemberFlags.COMPLETED_ONBOARDING) || (i.default.finishOnboarding(e), t(), !1)
            })
        })
    }
}