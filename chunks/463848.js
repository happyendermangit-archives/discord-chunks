function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserActivityTypes: function() {
            return b
        },
        default: function() {
            return j
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        o = n("77078"),
        u = n("871388"),
        d = n("152311"),
        c = n("632710"),
        f = n("299285"),
        m = n("267196"),
        p = n("945701"),
        h = n("964261"),
        E = n("235932"),
        g = n("78512"),
        S = n("314848"),
        C = n("699209"),
        T = n("769791"),
        v = n("373469"),
        I = n("42203"),
        _ = n("305961"),
        N = n("957255"),
        A = n("800762"),
        x = n("313873"),
        y = n("599110"),
        O = n("474293"),
        R = n("49111"),
        M = n("782340"),
        L = n("970574");

    function P(e) {
        let {
            type: t,
            source: n,
            activity: i,
            applicationStream: a,
            user: s,
            guildId: r,
            channelId: u,
            onAction: f,
            isEmbedded: m = (0, d.default)(i),
            actionColor: p
        } = e;
        return (0, l.jsx)(c.default, {
            className: (0, O.getClass)(L, "actions", t),
            type: t,
            source: n,
            activity: i,
            applicationStream: a,
            user: s,
            guildId: r,
            look: o.Button.Looks.FILLED,
            color: null != p ? p : o.Button.Colors.PRIMARY,
            channelId: u,
            onAction: f,
            isEmbedded: m
        })
    }
    let b = x.default.Types;
    var j = function(e) {
        let {
            activity: t,
            user: n,
            useStoreStream: a = !0,
            showActions: o = !0,
            hideHeader: d = !1,
            analyticsParams: c,
            ...O
        } = e, b = (0, r.useStateFromStores)([A.default, I.default], () => {
            var e;
            return I.default.getChannel(null === (e = A.default.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId)
        }), {
            enableHangStatus: j
        } = C.HangStatusExperiment.useExperiment({
            guildId: null == b ? void 0 : b.guild_id,
            location: "UserActivityContainer"
        }, {
            autoTrackExposure: !1
        }), U = (0, r.useStateFromStores)([v.default], () => a ? v.default.getAnyStreamForUser(n.id) : null), D = j && N.default.can(R.Permissions.CONNECT, b), k = (null == t ? void 0 : t.type) === R.ActivityTypes.HANG_STATUS && D ? b : null, w = (0, r.useStateFromStores)([_.default, A.default, I.default], () => {
            var e, l;
            return (0, u.default)(t, R.ActivityFlags.EMBEDDED) ? _.default.getGuild(null === (e = I.default.getChannel(null === (l = A.default.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id)) || void 0 === l ? void 0 : l.channelId)) || void 0 === e ? void 0 : e.getGuildId()) : null != k ? _.default.getGuild(k.getGuildId()) : null
        }), F = (0, r.useStateFromStores)([_.default], () => null != U ? _.default.getGuild(U.guildId) : null), G = (0, r.useStateFromStores)([f.default], () => {
            if (null != t) return null != t.application_id ? f.default.getApplication(t.application_id) : f.default.getApplicationByName(t.name);
            return null
        }), B = (0, m.default)(), H = (0, S.default)(n), V = B && null != t && H;
        return (i.useEffect(() => {
            (null == t ? void 0 : t.type) === R.ActivityTypes.HANG_STATUS && D && y.default.track(R.AnalyticEvents.VIEW_HANG_STATUS, {
                source: "UserProfilePopout",
                guild_id: null == k ? void 0 : k.guild_id,
                channel_id: null == k ? void 0 : k.id
            })
        }, [null == t ? void 0 : t.type, D, k]), (null == t ? void 0 : t.type) !== R.ActivityTypes.HANG_STATUS || D) ? (0, l.jsx)(x.default, {
            ...O,
            activity: t,
            user: n,
            application: G,
            hideHeader: d,
            activityGuild: null != w ? w : F,
            showReactions: V,
            renderActions: o ? () => (0, l.jsxs)("div", {
                className: s(V && L.actionsWrapper),
                children: [(0, l.jsx)(P, {
                    ...O,
                    applicationStream: U,
                    activity: t,
                    user: n
                }), V && (0, l.jsx)(p.default, {
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
                            interactionType: l,
                            emoji: i,
                            reply: a
                        } = e;
                        y.default.track(R.AnalyticEvents.ACTIVITY_REACTOR_INTERACTED, {
                            application_id: t.application_id,
                            interaction_type: l,
                            ...c
                        }), l === h.AtomicReactorInteractionTypes.ReactSubmit && null != i && (0, E.sendReactionToActivity)({
                            reaction: i,
                            user: n,
                            activity: t,
                            application: G,
                            altText: (0, g.getActivityAltText)(n, t),
                            stream: U
                        }), l === h.AtomicReactorInteractionTypes.ReplySubmit && null != a && (0, E.sendReplyToActivity)({
                            reply: a,
                            user: n,
                            activity: t,
                            application: G,
                            altText: (0, g.getActivityAltText)(n, t),
                            stream: U
                        })
                    }
                })]
            }) : null,
            onOpenSpotifyTrack: T.openTrack,
            onOpenSpotifyArtist: T.openArtist,
            onOpenSpotifyAlbum: T.openAlbum
        }) : null
    }
}