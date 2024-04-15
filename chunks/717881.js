function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserActivityTypes: function() {
            return U
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("442837"),
        l = n("481060"),
        u = n("620662"),
        d = n("841784"),
        _ = n("850827"),
        c = n("812206"),
        E = n("202458"),
        I = n("220779"),
        T = n("142550"),
        f = n("954017"),
        S = n("314091"),
        A = n("159244"),
        h = n("574176"),
        m = n("952164"),
        N = n("199902"),
        O = n("592125"),
        p = n("430824"),
        R = n("496675"),
        C = n("979651"),
        g = n("543595"),
        L = n("626135"),
        D = n("153066"),
        v = n("981631"),
        M = n("689938"),
        y = n("60685");

    function P(e) {
        let {
            type: t,
            source: n,
            activity: r,
            applicationStream: s,
            user: a,
            guildId: o,
            channelId: u,
            onAction: c,
            isEmbedded: E = (0, d.default)(r),
            actionColor: I
        } = e;
        return (0, i.jsx)(_.default, {
            className: (0, D.getClass)(y, "actions", t),
            type: t,
            source: n,
            activity: r,
            applicationStream: s,
            user: a,
            guildId: o,
            look: l.Button.Looks.FILLED,
            color: null != I ? I : l.Button.Colors.PRIMARY,
            channelId: u,
            onAction: c,
            isEmbedded: E
        })
    }
    let U = g.default.Types;
    t.default = function(e) {
        let {
            activity: t,
            user: n,
            useStoreStream: s = !0,
            showActions: l = !0,
            hideHeader: d = !1,
            analyticsParams: _,
            ...D
        } = e, U = (0, o.useStateFromStores)([C.default, O.default], () => {
            var e;
            return O.default.getChannel(null === (e = C.default.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId)
        }), {
            enableHangStatus: b
        } = h.HangStatusExperiment.useExperiment({
            guildId: null == U ? void 0 : U.guild_id,
            location: "UserActivityContainer"
        }, {
            autoTrackExposure: !1
        }), G = (0, o.useStateFromStores)([N.default], () => s ? N.default.getAnyStreamForUser(n.id) : null), w = b && R.default.can(v.Permissions.CONNECT, U), B = (null == t ? void 0 : t.type) === v.ActivityTypes.HANG_STATUS && w ? U : null, k = (0, o.useStateFromStores)([p.default, C.default, O.default], () => {
            var e, i;
            return (0, u.default)(t, v.ActivityFlags.EMBEDDED) ? p.default.getGuild(null === (e = O.default.getChannel(null === (i = C.default.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id)) || void 0 === i ? void 0 : i.channelId)) || void 0 === e ? void 0 : e.getGuildId()) : null != B ? p.default.getGuild(B.getGuildId()) : null
        }), V = (0, o.useStateFromStores)([p.default], () => null != G ? p.default.getGuild(G.guildId) : null), F = (0, o.useStateFromStores)([c.default], () => {
            if (null != t) return null != t.application_id ? c.default.getApplication(t.application_id) : c.default.getApplicationByName(t.name);
            return null
        }), x = (0, E.default)(), H = (0, A.default)(n), Y = x && null != t && H;
        return (r.useEffect(() => {
            (null == t ? void 0 : t.type) === v.ActivityTypes.HANG_STATUS && w && L.default.track(v.AnalyticEvents.VIEW_HANG_STATUS, {
                source: "UserProfilePopout",
                guild_id: null == B ? void 0 : B.guild_id,
                channel_id: null == B ? void 0 : B.id
            })
        }, [null == t ? void 0 : t.type, w, B]), (null == t ? void 0 : t.type) !== v.ActivityTypes.HANG_STATUS || w) ? (0, i.jsx)(g.default, {
            ...D,
            activity: t,
            user: n,
            application: F,
            hideHeader: d,
            activityGuild: null != k ? k : V,
            showReactions: Y,
            renderActions: l ? () => (0, i.jsxs)("div", {
                className: a()(Y && y.actionsWrapper),
                children: [(0, i.jsx)(P, {
                    ...D,
                    applicationStream: G,
                    activity: t,
                    user: n
                }), Y && (0, i.jsx)(I.default, {
                    showReact: !0,
                    showReply: !0,
                    replyHeaderText: M.default.Messages.ACTIVITY_REACTION_REPLY_TITLE.format({
                        activity: t.name
                    }),
                    replyPlaceholder: M.default.Messages.TEXTAREA_PLACEHOLDER.format({
                        channel: "@".concat(n.globalName)
                    }),
                    onInteraction: e => {
                        let {
                            interactionType: i,
                            emoji: r,
                            reply: s
                        } = e;
                        L.default.track(v.AnalyticEvents.ACTIVITY_REACTOR_INTERACTED, {
                            application_id: t.application_id,
                            interaction_type: i,
                            ..._
                        }), i === T.AtomicReactorInteractionTypes.ReactSubmit && null != r && (0, f.sendReactionToActivity)({
                            reaction: r,
                            user: n,
                            activity: t,
                            application: F,
                            altText: (0, S.getActivityAltText)(n, t),
                            stream: G
                        }), i === T.AtomicReactorInteractionTypes.ReplySubmit && null != s && (0, f.sendReplyToActivity)({
                            reply: s,
                            user: n,
                            activity: t,
                            application: F,
                            altText: (0, S.getActivityAltText)(n, t),
                            stream: G
                        })
                    }
                })]
            }) : null,
            onOpenSpotifyTrack: m.openTrack,
            onOpenSpotifyArtist: m.openArtist,
            onOpenSpotifyAlbum: m.openAlbum
        }) : null
    }
}