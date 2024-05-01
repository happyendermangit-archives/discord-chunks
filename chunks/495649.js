function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("789020");
    var i = n("147913"),
        r = n("703656"),
        a = n("271383"),
        s = n("430824"),
        o = n("914010"),
        l = n("70956"),
        u = n("630388"),
        d = n("745752"),
        _ = n("45966"),
        c = n("17181"),
        E = n("981631"),
        I = n("176505"),
        T = n("372897");

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let S = null,
        h = null;
    class A extends i.default {
        constructor(...e) {
            super(...e), f(this, "actions", {
                GUILD_DELETE: e => this.handleGuildDelete(e),
                CHANNEL_SELECT: e => this.handleChannelSelect(e),
                POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e)
            }), f(this, "handleConnectionOpen", e => {
                var t;
                null != (S = null !== (t = null != S ? S : o.default.getGuildId()) && void 0 !== t ? t : null) && this._openOnboardingIfIncomplete(S)
            }), f(this, "handleChannelSelect", e => {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                if (S === t && h === n) return;
                if (S = null != t ? t : null, h = null != n ? n : null, null == S || null == h) return;
                let i = s.default.getGuild(t);
                null != i && i.hasFeature(E.GuildFeatures.COMMUNITY) && _.default.shouldFetchPrompts(S, 8 * l.default.Millis.HOUR) && (0, d.loadOnboardingPrompts)(S), this._openOnboardingIfIncomplete(S, n)
            }), f(this, "handleGuildDelete", e => {
                let {
                    guild: t
                } = e;
                (0, c.discardOnboardingPromise)(t.id)
            }), f(this, "_openOnboardingIfIncomplete", async (e, t) => {
                var n, i;
                if ((0, c.isOnboardingActiveForGuild)(e)) {
                    (0, r.transitionTo)(E.Routes.CHANNEL(e, I.StaticChannelRoute.GUILD_ONBOARDING));
                    return
                }
                let o = s.default.getGuild(e);
                if (null == o || !o.hasFeature(E.GuildFeatures.GUILD_ONBOARDING)) return;
                let l = a.default.getSelfMember(e);
                !(null == l || (0, u.hasFlag)(null !== (n = l.flags) && void 0 !== n ? n : 0, T.GuildMemberFlags.COMPLETED_ONBOARDING)) && (0, u.hasFlag)(null !== (i = l.flags) && void 0 !== i ? i : 0, T.GuildMemberFlags.STARTED_ONBOARDING) && (await (0, c.default)({
                    guildId: e
                }), (0, r.transitionTo)(E.Routes.CHANNEL(e, t)))
            })
        }
    }
    t.default = new A
}