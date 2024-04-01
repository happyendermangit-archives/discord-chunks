function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        closeUserProfileModal: function() {
            return d
        },
        openUserProfileModal: function() {
            return u
        }
    });
    var i = n("570140"),
        r = n("232567"),
        s = n("594174"),
        a = n("342656"),
        o = n("484459"),
        l = n("981631");

    function u(e) {
        let {
            userId: t,
            section: n,
            guildId: u = l.ME,
            channelId: d,
            messageId: _,
            roleId: c,
            friendToken: E,
            autoFocusNote: I,
            analyticsLocation: T,
            sourceAnalyticsLocations: f
        } = e, S = s.default.getUser(t), h = u !== l.ME ? u : void 0, A = (0, a.isInProfileMutualsExperiment)().enabled;
        if (null == S) return (0, r.fetchProfile)(t, {
            friendToken: E,
            guildId: h,
            withMutualFriends: A,
            withMutualGuilds: !0
        }).then(() => {
            i.default.dispatch({
                type: "USER_PROFILE_MODAL_OPEN",
                userId: t,
                section: n,
                guildId: u,
                channelId: d,
                messageId: _,
                roleId: c,
                friendToken: E,
                autoFocusNote: I,
                analyticsLocation: T,
                sourceAnalyticsLocations: f
            })
        });
        (0, o.maybeFetchUserProfileForPopout)(S, {
            withMutualGuilds: !0,
            friendToken: E,
            guildId: h
        }), i.default.dispatch({
            type: "USER_PROFILE_MODAL_OPEN",
            userId: t,
            section: n,
            guildId: u,
            channelId: d,
            messageId: _,
            roleId: c,
            friendToken: E,
            autoFocusNote: I,
            analyticsLocation: T,
            sourceAnalyticsLocations: f
        })
    }

    function d() {
        i.default.dispatch({
            type: "USER_PROFILE_MODAL_CLOSE"
        })
    }
}