function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        hasRedirectedToGuild: function() {
            return l
        },
        isEligibleForMidjourneyRedirect: function() {
            return s
        },
        isMidjourneyOnboardingFlow: function() {
            return u
        }
    }), n("898511");
    var r = n("306912"),
        o = n("63116"),
        i = n("999574"),
        a = n("509398");

    function u(e) {
        var t, n, o = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).guildStore,
            u = null != o ? o : r.default,
            s = u.getGuild(a.MIDJOURNEY_GUILD_ID);
        var l = (t = null == s ? void 0 : s.joinedAt, (null != (n = Date) && "undefined" != typeof Symbol && n[Symbol.hasInstance] ? !!n[Symbol.hasInstance](t) : t instanceof n) && Date.now() - s.joinedAt.getTime() <= 36e5);
        return 1 === u.getGuildCount() && l && (0, i.isEligibleForMidjourneyOnboarding)(e)
    }

    function s(e) {
        return e.isDM() && 1 === e.rawRecipients.length && e.rawRecipients[0].id === a.MIDJOURNEY_BOT_ID && u("app")
    }

    function l(e) {
        return new Promise(function(t, n) {
            if (o.default.getGuildId() === e) {
                t();
                return
            }
            var r = setTimeout(function() {
                    a(), n()
                }, 3e3),
                i = function() {
                    o.default.getGuildId() === e && (a(), t())
                },
                a = function() {
                    o.default.removeChangeListener(i), clearTimeout(r)
                };
            o.default.addChangeListener(i)
        })
    }
}