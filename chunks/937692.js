function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        discardOnboardingPromise: function() {
            return p
        },
        default: function() {
            return E
        },
        openAndWaitForOnboarding: function() {
            return N
        },
        isOnboardingActiveForGuild: function() {
            return S
        }
    });
    var a = n("627445"),
        l = n.n(a),
        i = n("77078"),
        d = n("851387"),
        s = n("393414"),
        r = n("921031"),
        o = n("685829"),
        u = n("471706"),
        f = n("843035"),
        g = n("49111"),
        c = n("724210");
    let _ = {};

    function p(e) {
        _[e] = null
    }
    async function E(e) {
        let {
            guildId: t,
            returnChannelId: n,
            isPreview: a = !1
        } = e;
        (0, i.closeAllModals)(), l(null == _[t], "should not double-join guilds");
        let r = await (0, d.waitForGuild)(t);
        if (r.hasFeature(g.GuildFeatures.COMMUNITY)) {
            if (a)(0, o.startOnboarding)(t);
            else {
                if (!r.hasFeature(g.GuildFeatures.GUILD_ONBOARDING)) return;
                await (0, o.maybeFetchOnboardingPrompts)(t)
            }
            u.default.shouldShowOnboarding(t) && (await N(t), null != n && (0, s.transitionTo)(g.Routes.CHANNEL(t, n)))
        }
    }

    function N(e) {
        return new Promise(t => {
            _[e] = t, (0, f.waitForOnboardingCompletion)(e).then(() => {
                var t, n;
                null === (n = _[t = e]) || void 0 === n || n.call(_), _[t] = null, r.default.finishOnboarding(e)
            }), (0, s.transitionTo)(g.Routes.CHANNEL(e, c.StaticChannelRoute.GUILD_ONBOARDING))
        })
    }

    function S(e) {
        return null != _[e]
    }
}