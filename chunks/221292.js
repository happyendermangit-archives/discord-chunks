function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        trackUserProfileAction: function() {
            return N
        },
        trackUserProfileActivityJoined: function() {
            return O
        },
        trackUserProfileBadgePressed: function() {
            return p
        }
    }), n("653041");
    var i = n("367907"),
        r = n("271383"),
        s = n("158776"),
        a = n("699516"),
        o = n("800599"),
        l = n("594174"),
        u = n("626135"),
        d = n("768581"),
        _ = n("621853"),
        c = n("318661"),
        E = n("228168"),
        I = n("981631"),
        T = n("231338");
    let f = e => {
            let {
                user: t,
                userProfile: n,
                guildMember: i,
                guildMemberProfile: r
            } = e, s = null != n ? n : r, a = [];
            if ((null == i ? void 0 : i.nick) && a.push(E.TrackUserProfileProperties.NICKNAME), (null == s ? void 0 : s.pronouns) && a.push(E.TrackUserProfileProperties.PRONOUNS), null == t ? void 0 : t.avatar) {
                let e = (0, d.isAnimatedIconHash)(null == t ? void 0 : t.avatar);
                a.push(e ? E.TrackUserProfileProperties.ANIMATED_AVATAR : E.TrackUserProfileProperties.AVATAR)
            }
            if (null == s ? void 0 : s.banner) {
                let e = (0, d.isAnimatedIconHash)(null == s ? void 0 : s.banner);
                a.push(e ? E.TrackUserProfileProperties.ANIMATED_BANNER : E.TrackUserProfileProperties.BANNER)
            }
            return (null == s ? void 0 : s.bio) && a.push(E.TrackUserProfileProperties.BIO), (null == s ? void 0 : s.themeColors) != null && void 0 !== s.themeColors.find(e => null !== e) && a.push(E.TrackUserProfileProperties.THEME), (null == t ? void 0 : t.avatarDecoration) != null && a.push(E.TrackUserProfileProperties.AVATAR_DECORATION), (null == s ? void 0 : s.profileEffectId) != null && a.push(E.TrackUserProfileProperties.PROFILE_EFFECT), a
        },
        S = e => {
            let t = s.default.getStatus(e),
                n = s.default.isMobileOnline(e);
            return t === T.StatusTypes.ONLINE && n ? "".concat(t, "-mobile") : t === T.StatusTypes.ONLINE ? "".concat(t, "-desktop") : t
        },
        h = e => "string" == typeof e || null == e ? e : Object.keys(I.ActivityTypes)[Object.values(I.ActivityTypes).indexOf(e)],
        A = e => {
            var t, n;
            let {
                layout: i,
                userId: a,
                guildId: o
            } = e, u = l.default.getUser(a);
            if (null == u) return {};
            let d = (0, c.getDisplayProfile)(null == u ? void 0 : u.id, o),
                _ = null != o ? r.default.getMember(o, null == u ? void 0 : u.id) : null;
            return {
                profile_layout: i,
                profile_properties: f({
                    user: u,
                    userProfile: null == d ? void 0 : d._userProfile
                }),
                guild_profile_properties: f({
                    guildMember: _,
                    guildMemberProfile: null == d ? void 0 : d._guildMemberProfile
                }),
                profile_activity_types: s.default.getActivities(u.id, o).map(e => {
                    let {
                        type: t
                    } = e;
                    return t
                }).filter(e => void 0 !== e),
                profile_badges: null == d ? void 0 : null === (t = d.getBadges()) || void 0 === t ? void 0 : t.map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                }),
                avatar_decoration_sku_id: null === (n = u.avatarDecoration) || void 0 === n ? void 0 : n.skuId,
                profile_effect_sku_id: null == d ? void 0 : d.profileEffectId,
                user_status: S(u.id)
            }
        },
        m = e => {
            var t, n;
            return null == e ? {} : {
                related_user_id: e,
                relationship_type: a.default.getRelationshipType(e),
                related_since: a.default.getSince(e),
                num_mutual_friends: _.default.getMutualFriendsCount(e),
                num_mutual_guilds: null === (t = _.default.getMutualGuilds(e)) || void 0 === t ? void 0 : t.length,
                affinity: null === (n = o.default.getUserAffinity(e)) || void 0 === n ? void 0 : n.affinity
            }
        },
        N = e => {
            let {
                userId: t,
                guildId: n,
                channelId: r,
                messageId: s,
                roleId: a,
                analyticsLocations: o,
                layout: l,
                action: d,
                section: _
            } = e;
            u.default.track(I.AnalyticEvents.USER_PROFILE_ACTION, {
                ...(0, i.collectGuildAnalyticsMetadata)(n),
                ...(0, i.collectChannelAnalyticsMetadataFromId)(r),
                ...A({
                    layout: l,
                    userId: t,
                    guildId: n
                }),
                ...m(t),
                location_stack: o,
                profile_action: d,
                profile_section: _,
                source_message_id: s,
                source_role_id: a
            })
        },
        O = e => {
            let {
                userId: t,
                guildId: n,
                channelId: r,
                analyticsLocations: s,
                layout: a,
                activityType: o,
                applicationId: l,
                voiceChannelId: d
            } = e;
            u.default.track(I.AnalyticEvents.USER_PROFILE_ACTIVITY_JOINED, {
                ...(0, i.collectGuildAnalyticsMetadata)(n),
                ...(0, i.collectChannelAnalyticsMetadataFromId)(r),
                ...A({
                    layout: a,
                    userId: t,
                    guildId: n
                }),
                ...m(t),
                location_stack: s,
                activity_type: h(o),
                application_id: l,
                voice_channel_id: d
            })
        },
        p = e => {
            let {
                userId: t,
                guildId: n,
                channelId: r,
                analyticsLocations: s,
                layout: a,
                badge: o
            } = e;
            u.default.track(I.AnalyticEvents.USER_PROFILE_BADGE_PRESSED, {
                ...(0, i.collectGuildAnalyticsMetadata)(n),
                ...(0, i.collectChannelAnalyticsMetadataFromId)(r),
                ...A({
                    layout: a,
                    userId: t,
                    guildId: n
                }),
                ...m(t),
                location_stack: s,
                badge: o
            })
        }
}