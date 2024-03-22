function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        openUserProfileModal: function() {
            return d
        },
        closeUserProfileModal: function() {
            return s
        }
    });
    var n = i("913144"),
        l = i("327037"),
        a = i("697218"),
        r = i("506885"),
        u = i("49111");

    function d(t) {
        let {
            userId: e,
            section: i,
            guildId: d = u.ME,
            channelId: s,
            messageId: o,
            roleId: c,
            friendToken: E,
            autoFocusNote: _,
            analyticsLocation: f,
            sourceAnalyticsLocations: I
        } = t, A = a.default.getUser(e), T = d !== u.ME ? d : void 0;
        if (null == A) return (0, l.fetchProfile)(e, {
            friendToken: E,
            guildId: T
        }).then(() => {
            n.default.dispatch({
                type: "USER_PROFILE_MODAL_OPEN",
                userId: e,
                section: i,
                guildId: d,
                channelId: s,
                messageId: o,
                roleId: c,
                friendToken: E,
                autoFocusNote: _,
                analyticsLocation: f,
                sourceAnalyticsLocations: I
            })
        });
        (0, r.default)(e, A.getAvatarURL(void 0, 80), {
            withMutualGuilds: !0,
            friendToken: E,
            guildId: T
        }), n.default.dispatch({
            type: "USER_PROFILE_MODAL_OPEN",
            userId: e,
            section: i,
            guildId: d,
            channelId: s,
            messageId: o,
            roleId: c,
            friendToken: E,
            autoFocusNote: _,
            analyticsLocation: f,
            sourceAnalyticsLocations: I
        })
    }

    function s() {
        n.default.dispatch({
            type: "USER_PROFILE_MODAL_CLOSE"
        })
    }
}