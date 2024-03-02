function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
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

    function d(e) {
        let {
            userId: t,
            section: i,
            guildId: d = r.ME,
            channelId: s,
            friendToken: o,
            autoFocusNote: c,
            analyticsLocation: f
        } = e, _ = a.default.getUser(t), E = d !== r.ME ? d : void 0;
        if (null == _) return (0, l.fetchProfile)(t, {
            friendToken: o,
            guildId: E
        }).then(() => {
            n.default.dispatch({
                type: "USER_PROFILE_MODAL_OPEN",
                userId: t,
                section: i,
                guildId: d,
                channelId: s,
                friendToken: o,
                autoFocusNote: c,
                analyticsLocation: f
            })
        });
        (0, u.default)(t, _.getAvatarURL(void 0, 80), {
            withMutualGuilds: !0,
            friendToken: o,
            guildId: E
        }), n.default.dispatch({
            type: "USER_PROFILE_MODAL_OPEN",
            userId: t,
            section: i,
            guildId: d,
            channelId: s,
            friendToken: o,
            autoFocusNote: c,
            analyticsLocation: f
        })
    }

    function s() {
        n.default.dispatch({
            type: "USER_PROFILE_MODAL_CLOSE"
        })
    }
}