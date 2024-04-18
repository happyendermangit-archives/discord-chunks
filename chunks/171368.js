function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        closeUserProfileModal: function() {
            return _
        },
        openUserProfileModal: function() {
            return d
        }
    });
    var i = n("570140"),
        r = n("232567"),
        s = n("594174"),
        a = n("342656"),
        o = n("447452"),
        l = n("484459"),
        u = n("981631");

    function d(e) {
        let {
            userId: t,
            section: n,
            guildId: d = u.ME,
            channelId: _,
            messageId: c,
            roleId: E,
            friendToken: I,
            autoFocusNote: T,
            analyticsLocation: f,
            sourceAnalyticsLocations: S
        } = e, h = s.default.getUser(t), A = null != d && d !== u.ME ? d : void 0, m = (0, a.isInProfileMutualsExperiment)().enabled || (0, o.getSimplifiedProfileExperimentConfig)({
            location: "openUserProfileModal",
            autoTrackExposure: !1
        }).basicsEnabled;
        if (null == h) return (0, r.fetchProfile)(t, {
            guildId: A,
            withMutualGuilds: !0,
            withMutualFriends: m,
            friendToken: I
        }).then(() => {
            i.default.dispatch({
                type: "USER_PROFILE_MODAL_OPEN",
                userId: t,
                section: n,
                guildId: null != d ? d : void 0,
                channelId: null != _ ? _ : void 0,
                messageId: null != c ? c : void 0,
                roleId: null != E ? E : void 0,
                friendToken: I,
                autoFocusNote: T,
                analyticsLocation: f,
                sourceAnalyticsLocations: S
            })
        });
        (0, l.maybeFetchUserProfileForPopout)(h, {
            guildId: A,
            withMutualGuilds: !0,
            withMutualFriends: m,
            friendToken: I
        }), i.default.dispatch({
            type: "USER_PROFILE_MODAL_OPEN",
            userId: t,
            section: n,
            guildId: null != d ? d : void 0,
            channelId: null != _ ? _ : void 0,
            messageId: null != c ? c : void 0,
            roleId: null != E ? E : void 0,
            friendToken: I,
            autoFocusNote: T,
            analyticsLocation: f,
            sourceAnalyticsLocations: S
        })
    }

    function _() {
        i.default.dispatch({
            type: "USER_PROFILE_MODAL_CLOSE"
        })
    }
}