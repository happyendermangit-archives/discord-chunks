function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isMidjourneyOnboardingFlow: function() {
            return o
        },
        isEligibleForMidjourneyRedirect: function() {
            return l
        },
        hasRedirectedToGuild: function() {
            return u
        }
    }), n("446674");
    var i = n("305961"),
        s = n("162771"),
        r = n("256896"),
        a = n("760797");

    function o(e) {
        let {
            guildStore: t
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = null != t ? t : i.default, s = n.getGuild(a.MIDJOURNEY_GUILD_ID), o = (null == s ? void 0 : s.joinedAt) instanceof Date && Date.now() - s.joinedAt.getTime() <= 36e5;
        return 1 === n.getGuildCount() && o && (0, r.isEligibleForMidjourneyOnboarding)(e)
    }

    function l(e) {
        return e.isDM() && 1 === e.rawRecipients.length && e.rawRecipients[0].id === a.MIDJOURNEY_BOT_ID && o("app")
    }

    function u(e) {
        return new Promise((t, n) => {
            if (s.default.getGuildId() === e) {
                t();
                return
            }
            let i = setTimeout(() => {
                    a(), n()
                }, 3e3),
                r = () => {
                    s.default.getGuildId() === e && (a(), t())
                },
                a = () => {
                    s.default.removeChangeListener(r), clearTimeout(i)
                };
            s.default.addChangeListener(r)
        })
    }
}