function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        hasRedirectedToGuild: function() {
            return u
        },
        isEligibleForMidjourneyRedirect: function() {
            return l
        },
        isMidjourneyOnboardingFlow: function() {
            return o
        }
    }), n("442837");
    var i = n("430824"),
        r = n("914010"),
        a = n("369274"),
        s = n("558921");

    function o(e) {
        let {
            guildStore: t
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = null != t ? t : i.default, r = n.getGuild(s.MIDJOURNEY_GUILD_ID), o = (null == r ? void 0 : r.joinedAt) instanceof Date && Date.now() - r.joinedAt.getTime() <= 36e5;
        return 1 === n.getGuildCount() && o && (0, a.isEligibleForMidjourneyOnboarding)(e)
    }

    function l(e) {
        return e.isDM() && 1 === e.rawRecipients.length && e.rawRecipients[0].id === s.MIDJOURNEY_BOT_ID && o("app")
    }

    function u(e) {
        return new Promise((t, n) => {
            if (r.default.getGuildId() === e) {
                t();
                return
            }
            let i = setTimeout(() => {
                    s(), n()
                }, 3e3),
                a = () => {
                    r.default.getGuildId() === e && (s(), t())
                },
                s = () => {
                    r.default.removeChangeListener(a), clearTimeout(i)
                };
            r.default.addChangeListener(a)
        })
    }
}