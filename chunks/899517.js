function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        closeUserProfileModal: function() {
            return l
        },
        openUserProfileModal: function() {
            return s
        }
    });
    var r = n("629815"),
        o = n("531822"),
        i = n("208454"),
        a = n("335050"),
        u = n("281767");

    function s(e) {
        var t = e.userId,
            n = e.section,
            s = e.guildId,
            l = void 0 === s ? u.ME : s,
            c = e.channelId,
            f = e.messageId,
            d = e.roleId,
            _ = e.friendToken,
            E = e.autoFocusNote,
            p = e.analyticsLocation,
            m = e.sourceAnalyticsLocations,
            y = i.default.getUser(t),
            I = l !== u.ME ? l : void 0;
        if (null == y) return (0, o.fetchProfile)(t, {
            friendToken: _,
            guildId: I
        }).then(function() {
            r.default.dispatch({
                type: "USER_PROFILE_MODAL_OPEN",
                userId: t,
                section: n,
                guildId: l,
                channelId: c,
                messageId: f,
                roleId: d,
                friendToken: _,
                autoFocusNote: E,
                analyticsLocation: p,
                sourceAnalyticsLocations: m
            })
        });
        (0, a.default)(t, y.getAvatarURL(void 0, 80), {
            withMutualGuilds: !0,
            friendToken: _,
            guildId: I
        }), r.default.dispatch({
            type: "USER_PROFILE_MODAL_OPEN",
            userId: t,
            section: n,
            guildId: l,
            channelId: c,
            messageId: f,
            roleId: d,
            friendToken: _,
            autoFocusNote: E,
            analyticsLocation: p,
            sourceAnalyticsLocations: m
        })
    }

    function l() {
        r.default.dispatch({
            type: "USER_PROFILE_MODAL_CLOSE"
        })
    }
}