function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserActivityTypes: function() {
            return U
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("784184"),
        s = n("111540"),
        l = n("188950"),
        c = n("684281"),
        f = n("342942"),
        d = n("110433"),
        _ = n("669452"),
        E = n("568406"),
        p = n("430376"),
        m = n("752879"),
        y = n("754951"),
        I = n("33580"),
        h = n("710057"),
        O = n("73013"),
        T = n("935741"),
        S = n("306912"),
        v = n("29884"),
        g = n("665863"),
        A = n("783479"),
        b = n("870331"),
        N = n("573525"),
        R = n("281767"),
        C = n("941504"),
        P = n("60685");

    function D(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function L(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function M(e) {
        var t = e.type,
            n = e.source,
            o = e.activity,
            i = e.applicationStream,
            a = e.user,
            s = e.guildId,
            f = e.channelId,
            d = e.onAction,
            _ = e.isEmbedded,
            E = void 0 === _ ? (0, l.default)(o) : _,
            p = e.actionColor;
        return r.createElement(c.default, {
            className: (0, N.getClass)(P, "actions", t),
            type: t,
            source: n,
            activity: o,
            applicationStream: i,
            user: a,
            guildId: s,
            look: u.Button.Looks.FILLED,
            color: null != p ? p : u.Button.Colors.PRIMARY,
            channelId: f,
            onAction: d,
            isEmbedded: E
        })
    }
    var U = A.default.Types;
    t.default = function(e) {
        var t = e.activity,
            n = e.user,
            o = e.useStoreStream,
            u = void 0 === o || o,
            l = e.showActions,
            c = e.hideHeader,
            N = e.analyticsParams,
            U = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }(e, ["activity", "user", "useStoreStream", "showActions", "hideHeader", "analyticsParams"]),
            w = (0, a.useStateFromStores)([g.default, T.default], function() {
                var e;
                return T.default.getChannel(null === (e = g.default.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId)
            }),
            k = I.HangStatusExperiment.useExperiment({
                guildId: null == w ? void 0 : w.guild_id,
                location: "UserActivityContainer"
            }, {
                autoTrackExposure: !1
            }).enableHangStatus,
            G = (0, a.useStateFromStores)([O.default], function() {
                return u ? O.default.getAnyStreamForUser(n.id) : null
            }),
            B = k && v.default.can(R.Permissions.CONNECT, w),
            j = (null == t ? void 0 : t.type) === R.ActivityTypes.HANG_STATUS && B ? w : null,
            F = (0, a.useStateFromStores)([S.default, g.default, T.default], function() {
                var e, r;
                return (0, s.default)(t, R.ActivityFlags.EMBEDDED) ? S.default.getGuild(null === (e = T.default.getChannel(null === (r = g.default.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id)) || void 0 === r ? void 0 : r.channelId)) || void 0 === e ? void 0 : e.getGuildId()) : null != j ? S.default.getGuild(j.getGuildId()) : null
            }),
            V = (0, a.useStateFromStores)([S.default], function() {
                return null != G ? S.default.getGuild(G.guildId) : null
            }),
            H = (0, a.useStateFromStores)([f.default], function() {
                if (null != t) return null != t.application_id ? f.default.getApplication(t.application_id) : f.default.getApplicationByName(t.name);
                return null
            }),
            x = (0, d.default)(),
            Y = (0, y.default)(n),
            W = x && null != t && Y;
        return (r.useEffect(function() {
            (null == t ? void 0 : t.type) === R.ActivityTypes.HANG_STATUS && B && b.default.track(R.AnalyticEvents.VIEW_HANG_STATUS, {
                source: "UserProfilePopout",
                guild_id: null == j ? void 0 : j.guild_id,
                channel_id: null == j ? void 0 : j.id
            })
        }, [null == t ? void 0 : t.type, B, j]), (null == t ? void 0 : t.type) !== R.ActivityTypes.HANG_STATUS || B) ? r.createElement(A.default, L(D({}, U), {
            activity: t,
            user: n,
            application: H,
            hideHeader: void 0 !== c && c,
            activityGuild: null != F ? F : V,
            showReactions: W,
            renderActions: void 0 === l || l ? function() {
                return r.createElement("div", {
                    className: i()(W && P.actionsWrapper)
                }, r.createElement(M, L(D({}, U), {
                    applicationStream: G,
                    activity: t,
                    user: n
                })), W && r.createElement(_.default, {
                    showReact: !0,
                    showReply: !0,
                    replyHeaderText: C.default.Messages.ACTIVITY_REACTION_REPLY_TITLE.format({
                        activity: t.name
                    }),
                    replyPlaceholder: C.default.Messages.TEXTAREA_PLACEHOLDER.format({
                        channel: "@".concat(n.globalName)
                    }),
                    onInteraction: function(e) {
                        var r = e.interactionType,
                            o = e.emoji,
                            i = e.reply;
                        b.default.track(R.AnalyticEvents.ACTIVITY_REACTOR_INTERACTED, D({
                            application_id: t.application_id,
                            interaction_type: r
                        }, N)), r === E.AtomicReactorInteractionTypes.ReactSubmit && null != o && (0, p.sendReactionToActivity)({
                            reaction: o,
                            user: n,
                            activity: t,
                            application: H,
                            altText: (0, m.getActivityAltText)(n, t),
                            stream: G
                        }), r === E.AtomicReactorInteractionTypes.ReplySubmit && null != i && (0, p.sendReplyToActivity)({
                            reply: i,
                            user: n,
                            activity: t,
                            application: H,
                            altText: (0, m.getActivityAltText)(n, t),
                            stream: G
                        })
                    }
                }))
            } : null,
            onOpenSpotifyTrack: h.openTrack,
            onOpenSpotifyArtist: h.openArtist,
            onOpenSpotifyAlbum: h.openAlbum
        })) : null
    }
}