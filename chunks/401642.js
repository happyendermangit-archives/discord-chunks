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
        u = i("506885"),
        r = i("49111");

    function d(t) {
        let {
            userId: e,
            section: i,
            guildId: d = r.ME,
            channelId: s,
            friendToken: o,
            autoFocusNote: c,
            analyticsLocation: E
        } = t, _ = a.default.getUser(e), f = d !== r.ME ? d : void 0;
        if (null == _) return (0, l.fetchProfile)(e, {
            friendToken: o,
            guildId: f
        }).then(() => {
            n.default.dispatch({
                type: "USER_PROFILE_MODAL_OPEN",
                userId: e,
                section: i,
                guildId: d,
                channelId: s,
                friendToken: o,
                autoFocusNote: c,
                analyticsLocation: E
            })
        });
        (0, u.default)(e, _.getAvatarURL(void 0, 80), {
            withMutualGuilds: !0,
            friendToken: o,
            guildId: f
        }), n.default.dispatch({
            type: "USER_PROFILE_MODAL_OPEN",
            userId: e,
            section: i,
            guildId: d,
            channelId: s,
            friendToken: o,
            autoFocusNote: c,
            analyticsLocation: E
        })
    }

    function s() {
        n.default.dispatch({
            type: "USER_PROFILE_MODAL_CLOSE"
        })
    }
}