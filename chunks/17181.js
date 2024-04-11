function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        },
        discardOnboardingPromise: function() {
            return T
        },
        isOnboardingActiveForGuild: function() {
            return A
        },
        openAndWaitForOnboarding: function() {
            return S
        }
    });
    var i = n("512722"),
        r = n.n(i),
        s = n("481060"),
        a = n("749210"),
        o = n("703656"),
        l = n("549817"),
        u = n("745752"),
        d = n("819553"),
        _ = n("679240"),
        c = n("981631"),
        E = n("176505");
    let I = {};

    function T(e) {
        I[e] = null
    }
    async function f(e) {
        let {
            guildId: t,
            returnChannelId: n,
            isPreview: i = !1
        } = e;
        (0, s.closeAllModals)(), r()(null == I[t], "should not double-join guilds");
        let l = await (0, a.waitForGuild)(t);
        if (l.hasFeature(c.GuildFeatures.COMMUNITY)) {
            if (i)(0, u.startOnboarding)(t);
            else {
                if (!l.hasFeature(c.GuildFeatures.GUILD_ONBOARDING)) return;
                await (0, u.maybeFetchOnboardingPrompts)(t)
            }
            d.default.shouldShowOnboarding(t) && (await S(t), null != n && (0, o.transitionTo)(c.Routes.CHANNEL(t, n)))
        }
    }

    function S(e) {
        return new Promise(t => {
            I[e] = t, (0, _.waitForOnboardingCompletion)(e).then(() => {
                var t, n;
                null === (n = I[t = e]) || void 0 === n || n.call(I), I[t] = null, l.default.finishOnboarding(e)
            }), (0, o.transitionTo)(c.Routes.CHANNEL(e, E.StaticChannelRoute.GUILD_ONBOARDING))
        })
    }

    function A(e) {
        return null != I[e]
    }
}