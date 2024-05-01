function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        waitForOnboardingCompletion: function() {
            return o
        }
    }), n("789020");
    var i = n("271383"),
        r = n("630388"),
        a = n("549817"),
        s = n("372897");

    function o(e) {
        return new Promise(t => {
            i.default.addConditionalChangeListener(() => {
                var n;
                let o = i.default.getSelfMember(e);
                return !(0, r.hasFlag)(null !== (n = null == o ? void 0 : o.flags) && void 0 !== n ? n : 0, s.GuildMemberFlags.COMPLETED_ONBOARDING) || (a.default.finishOnboarding(e), t(), !1)
            })
        })
    }
}