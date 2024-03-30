function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        closeUserProfileModal: function() {
            return u
        },
        openUserProfileModal: function() {
            return l
        }
    });
    var i = n("570140"),
        r = n("232567"),
        s = n("594174"),
        a = n("484459"),
        o = n("981631");

    function l(e) {
        let {
            userId: t,
            section: n,
            guildId: l = o.ME,
            channelId: u,
            messageId: d,
            roleId: _,
            friendToken: c,
            autoFocusNote: E,
            analyticsLocation: I,
            sourceAnalyticsLocations: T
        } = e, f = s.default.getUser(t), S = l !== o.ME ? l : void 0;
        if (null == f) return (0, r.fetchProfile)(t, {
            friendToken: c,
            guildId: S
        }).then(() => {
            i.default.dispatch({
                type: "USER_PROFILE_MODAL_OPEN",
                userId: t,
                section: n,
                guildId: l,
                channelId: u,
                messageId: d,
                roleId: _,
                friendToken: c,
                autoFocusNote: E,
                analyticsLocation: I,
                sourceAnalyticsLocations: T
            })
        });
        (0, a.default)(t, f.getAvatarURL(void 0, 80), {
            withMutualGuilds: !0,
            friendToken: c,
            guildId: S
        }), i.default.dispatch({
            type: "USER_PROFILE_MODAL_OPEN",
            userId: t,
            section: n,
            guildId: l,
            channelId: u,
            messageId: d,
            roleId: _,
            friendToken: c,
            autoFocusNote: E,
            analyticsLocation: I,
            sourceAnalyticsLocations: T
        })
    }

    function u() {
        i.default.dispatch({
            type: "USER_PROFILE_MODAL_CLOSE"
        })
    }
}