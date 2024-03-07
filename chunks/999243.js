function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return L
        }
    }), E("222007"), E("702976");
    var t = E("689988"),
        o = E("393414"),
        n = E("26989"),
        r = E("305961"),
        a = E("162771"),
        i = E("718517"),
        I = E("568734"),
        T = E("685829"),
        s = E("863636"),
        S = E("937692"),
        N = E("49111"),
        O = E("724210"),
        A = E("657944");
    let R = null,
        l = null;
    class u extends t.default {
        constructor(...e) {
            super(...e), this.actions = {
                GUILD_DELETE: e => this.handleGuildDelete(e),
                CHANNEL_SELECT: e => this.handleChannelSelect(e),
                POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e)
            }, this.handleConnectionOpen = e => {
                var _;
                null != (R = null !== (_ = null != R ? R : a.default.getGuildId()) && void 0 !== _ ? _ : null) && this._openOnboardingIfIncomplete(R)
            }, this.handleChannelSelect = e => {
                let {
                    guildId: _,
                    channelId: E
                } = e;
                if (R === _ && l === E) return;
                if (R = null != _ ? _ : null, l = null != E ? E : null, null == R || null == l) return;
                let t = r.default.getGuild(_);
                null != t && t.hasFeature(N.GuildFeatures.COMMUNITY) && s.default.shouldFetchPrompts(R, 8 * i.default.Millis.HOUR) && (0, T.loadOnboardingPrompts)(R), this._openOnboardingIfIncomplete(R, E)
            }, this.handleGuildDelete = e => {
                let {
                    guild: _
                } = e;
                (0, S.discardOnboardingPromise)(_.id)
            }, this._openOnboardingIfIncomplete = async (e, _) => {
                var E, t;
                if ((0, S.isOnboardingActiveForGuild)(e)) {
                    (0, o.transitionTo)(N.Routes.CHANNEL(e, O.StaticChannelRoute.GUILD_ONBOARDING));
                    return
                }
                let a = r.default.getGuild(e);
                if (null == a || !a.hasFeature(N.GuildFeatures.GUILD_ONBOARDING)) return;
                let i = n.default.getSelfMember(e);
                !(null == i || (0, I.hasFlag)(null !== (E = i.flags) && void 0 !== E ? E : 0, A.GuildMemberFlags.COMPLETED_ONBOARDING)) && (0, I.hasFlag)(null !== (t = i.flags) && void 0 !== t ? t : 0, A.GuildMemberFlags.STARTED_ONBOARDING) && (await (0, S.default)({
                    guildId: e
                }), (0, o.transitionTo)(N.Routes.CHANNEL(e, _)))
            }
        }
    }
    var L = new u
}