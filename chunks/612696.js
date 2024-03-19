function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return d
        }
    });
    var n = i("773336"),
        l = i("126939"),
        a = i("501260"),
        u = i("871388"),
        r = i("49111");

    function d(t) {
        let {
            user: e,
            activity: i,
            application: d,
            channelId: s,
            currentUser: o,
            isEmbedded: c,
            ChannelStore: E,
            GuildStore: _,
            GuildMemberCountStore: f,
            RelationshipStore: I,
            SelectedChannelStore: A,
            VoiceStateStore: T,
            PermissionStore: C
        } = t, S = E.getChannel(s), N = (0, l.getIsActivitiesEnabledForCurrentPlatform)(S);
        if (null == e) return !1;
        if (c) return (0, a.default)({
            userId: e.id,
            activity: i,
            channelId: s,
            currentUser: o,
            application: d,
            isActivitiesEnabledForCurrentPlatform: N,
            ChannelStore: E,
            VoiceStateStore: T,
            PermissionStore: C,
            GuildStore: _
        }) === a.EmbeddedActivityJoinability.CAN_JOIN;
        if (!(0, n.isDesktop)()) return !1;
        if ((0, u.default)(i, r.ActivityFlags.PARTY_PRIVACY_FRIENDS) && I.isFriend(e.id)) return !0;
        if ((0, u.default)(i, r.ActivityFlags.PARTY_PRIVACY_VOICE_CHANNEL)) {
            let t = E.getChannel(A.getVoiceChannelId());
            if (null == t || !T.isInChannel(t.id, e.id)) return !1;
            switch (t.type) {
                case r.ChannelTypes.DM:
                case r.ChannelTypes.GROUP_DM:
                    return !0
            }
            let i = _.getGuild(t.getGuildId());
            if (null == i || i.hasFeature(r.GuildFeatures.COMMUNITY)) return !1;
            let n = f.getMemberCount(i.id);
            return null != n && n < 100
        }
        return !1
    }
}