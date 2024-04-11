function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("358085"),
        r = n("782769"),
        s = n("527805"),
        a = n("620662"),
        o = n("981631");

    function l(e) {
        let {
            user: t,
            activity: n,
            application: l,
            channelId: u,
            currentUser: d,
            isEmbedded: _,
            ChannelStore: c,
            GuildStore: E,
            GuildMemberCountStore: I,
            RelationshipStore: T,
            SelectedChannelStore: f,
            VoiceStateStore: S,
            PermissionStore: A
        } = e, h = c.getChannel(u), m = (0, r.getIsActivitiesEnabledForCurrentPlatform)(h);
        if (null == t) return !1;
        if (_) return (0, s.default)({
            userId: t.id,
            activity: n,
            channelId: u,
            currentUser: d,
            application: l,
            isActivitiesEnabledForCurrentPlatform: m,
            ChannelStore: c,
            VoiceStateStore: S,
            PermissionStore: A,
            GuildStore: E
        }) === s.EmbeddedActivityJoinability.CAN_JOIN;
        if (!(0, i.isDesktop)()) return !1;
        if ((0, a.default)(n, o.ActivityFlags.PARTY_PRIVACY_FRIENDS) && T.isFriend(t.id)) return !0;
        if ((0, a.default)(n, o.ActivityFlags.PARTY_PRIVACY_VOICE_CHANNEL)) {
            let e = c.getChannel(f.getVoiceChannelId());
            if (null == e || !S.isInChannel(e.id, t.id)) return !1;
            switch (e.type) {
                case o.ChannelTypes.DM:
                case o.ChannelTypes.GROUP_DM:
                    return !0
            }
            let n = E.getGuild(e.getGuildId());
            if (null == n || n.hasFeature(o.GuildFeatures.COMMUNITY)) return !1;
            let i = I.getMemberCount(n.id);
            return null != i && i < 100
        }
        return !1
    }
}