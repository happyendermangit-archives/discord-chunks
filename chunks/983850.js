function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MESSAGE_SCAN_TIMEOUT: function() {
            return A
        },
        MAX_TIMEOUT_FOR_JITTER: function() {
            return y
        },
        default: function() {
            return Q
        }
    }), n("222007"), n("808653");
    var i = n("345570"),
        s = n.n(i),
        r = n("452016"),
        a = n.n(r),
        o = n("913144"),
        l = n("689988"),
        u = n("692038"),
        d = n("256572"),
        c = n("271938"),
        f = n("982108"),
        _ = n("42203"),
        h = n("377253"),
        E = n("18494"),
        g = n("162771"),
        m = n("299039"),
        p = n("695681"),
        S = n("457971"),
        v = n("447435"),
        T = n("574933"),
        I = n("49111"),
        C = n("397336");
    let A = 3e3,
        y = 800,
        N = {};

    function R(e) {
        return "".concat(e.channel_id, ":").concat(e.id)
    }

    function O() {
        Object.values(N).forEach(e => {
            let {
                timeout: t
            } = e;
            clearTimeout(t)
        }), N = {}
    }

    function D(e, t) {
        if (null == e.id || null == e.channel_id) return;
        let n = R(e);
        if (null != N[n]) {
            let {
                timeout: i
            } = N[n];
            return function(e, t) {
                let n = R(e),
                    {
                        setAt: i
                    } = N[n];
                if (t === v.TimeoutCancelSource.UPDATE) {
                    var s, r;
                    let t = null !== (s = e.attachments) && void 0 !== s ? s : [],
                        n = null !== (r = e.embeds) && void 0 !== r ? r : [],
                        i = t.filter(e => (0, v.isMediaObscured)({
                            type: v.ObscuredMediaTypes.Attachment,
                            media: e
                        }, !0)),
                        a = n.filter(e => (0, v.isMediaObscured)({
                            type: v.ObscuredMediaTypes.Embed,
                            media: e
                        }, !0));
                    (0, v.trackExplicitMediaScanComplete)({
                        messageId: e.id,
                        channelId: e.channel_id,
                        numOfAttachments: t.length,
                        numOfEmbeds: n.length,
                        numOfExplicitAttachments: i.length,
                        numOfExplicitEmbeds: a.length
                    })
                }(0, v.trackScanTiming)(i, t)
            }(e, t), clearTimeout(i), delete N[n], !0
        }
        return !1
    }
    let P = (e, t) => {
        if (0 !== e.length) {
            if (t) {
                (0, p.sendMultiChannelMessagesForScanning)(e);
                return
            }(0, p.sendMessagesForScanning)(e[0].channel_id, e.map(e => e.id))
        }
    };

    function M(e, t) {
        let {
            forceBatchScan: n = !1,
            jitter: i = !1
        } = null != t ? t : {};
        e.forEach(e => {
            let t = R(e);
            null == N[t] && (N[t] = {
                setAt: Date.now(),
                timeout: setTimeout(() => {
                    ! function(e) {
                        if (D(e, v.TimeoutCancelSource.TIMEOUT)) {
                            let t = h.default.getMessage(e.channel_id, e.id),
                                {
                                    attachmentIds: n,
                                    embedIds: i
                                } = V(t);
                            (0, v.trackScanningTimedOut)({
                                channelId: e.channel_id,
                                messageId: e.id,
                                attachmentIds: n,
                                embedIds: i
                            }), o.default.dispatch({
                                type: "MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT",
                                messageId: e.id,
                                channelId: e.channel_id
                            })
                        }
                    }(e)
                }, A)
            })
        });
        let s = n || new Set(e.map(e => e.channel_id)).size > 1;
        i ? setTimeout(() => {
            let t = e.filter(e => null != N[R(e)]);
            P(t, s)
        }, Math.random() * y) : P(e, s)
    }
    let L = e => null == e.content_scan_version || e.content_scan_version < 1,
        b = e => {
            var t, n, i, s, r, a, o, l;
            let u = null != (l = e).content_scan_version ? l.content_scan_version : null != l.contentScanVersion ? l.contentScanVersion : null;
            return !((null === (t = e.video) || void 0 === t ? void 0 : t.width) === 0 && (null === (n = e.video) || void 0 === n ? void 0 : n.height) === 0 || (null === (i = e.thumbnail) || void 0 === i ? void 0 : i.width) === 0 && (null === (s = e.thumbnail) || void 0 === s ? void 0 : s.height) === 0 || (null === (r = e.image) || void 0 === r ? void 0 : r.width) === 0 && (null === (a = e.image) || void 0 === a ? void 0 : a.height) === 0 || "images" in e && (null === (o = e.images) || void 0 === o ? void 0 : o.some(e => 0 === e.width && 0 === e.height))) && (null == u || u < 1)
        };

    function U(e) {
        let {
            attachmentIds: t,
            embedIds: n
        } = V(e);
        return t.length > 0 || n.length > 0
    }

    function w(e) {
        let t = e.reduce((e, t) => {
            var n, i, s, r, a, o, l, u;
            null == e[t.channel_id] && (e[t.channel_id] = {
                numOfAttachments: 0,
                numOfAttachmentsPendingScan: 0,
                numOfEmbeds: 0,
                numOfEmbedsPendingScan: 0
            });
            let d = e[t.channel_id];
            return d.numOfAttachments += null !== (a = null === (n = t.attachments) || void 0 === n ? void 0 : n.length) && void 0 !== a ? a : 0, d.numOfEmbeds += null !== (o = null === (i = t.embeds) || void 0 === i ? void 0 : i.length) && void 0 !== o ? o : 0, d.numOfAttachmentsPendingScan += null !== (l = null === (s = t.attachments) || void 0 === s ? void 0 : s.filter(L).length) && void 0 !== l ? l : 0, d.numOfEmbedsPendingScan += null !== (u = null == t ? void 0 : null === (r = t.embeds) || void 0 === r ? void 0 : r.filter(b).length) && void 0 !== u ? u : 0, {
                ...e,
                [t.channel_id]: d
            }
        }, {});
        return t
    }

    function k(e) {
        return null != e && (null != e.attachments && e.attachments.length > 0 || null != e.embeds && e.embeds.length > 0)
    }

    function V(e) {
        var t, n, i, s, r, a, o, l;
        let u = null !== (r = null == e ? void 0 : null === (t = e.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== r ? r : 0,
            d = null !== (a = null == e ? void 0 : null === (n = e.embeds) || void 0 === n ? void 0 : n.length) && void 0 !== a ? a : 0;
        if (0 === u && 0 === d) return {
            attachmentIds: [],
            embedIds: []
        };
        let c = null !== (o = null == e ? void 0 : null === (i = e.attachments) || void 0 === i ? void 0 : i.filter(L)) && void 0 !== o ? o : [],
            f = null !== (l = null == e ? void 0 : null === (s = e.embeds) || void 0 === s ? void 0 : s.filter(b)) && void 0 !== l ? l : [];
        return {
            attachmentIds: c.map(e => e.id).filter(Boolean),
            embedIds: f.map((e, t) => "embed_".concat(t)).filter(Boolean)
        }
    }

    function G(e, t) {
        let {
            messagesPendingScan: n,
            attributesByChannelId: i
        } = function(e) {
            let t = e.filter(e => k(e) && (0, v.shouldRedactExplicitContent)(e)),
                n = e.map(e => {
                    if (null != e && "referenced_message" in e && null != e.referenced_message && k(e.referenced_message) && (0, v.shouldRedactExplicitContent)(e.referenced_message)) return e.referenced_message
                }).filter(function(e) {
                    return null != e
                });
            n.length > 0 && (t = [...t, ...n]);
            let i = a(t, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
                s = i.filter(e => U(e));
            return {
                messagesPendingScan: s,
                attributesByChannelId: w(i)
            }
        }(e);
        return m.default.entries(i).forEach(e => {
            let [t, n] = e;
            (0, v.trackExplicitMediaRedactableMessagedLoaded)({
                channelId: t,
                numOfAttachments: n.numOfAttachments,
                numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                numOfEmbeds: n.numOfEmbeds,
                numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
            })
        }), !!(n.length > 0) && (M(n, t), !0)
    }

    function F(e) {
        var t, n, i, s;
        let {
            message: r
        } = e;
        if (!(0, S.isEligibleForExplicitMediaRedaction)() || null == r.channel_id || null == r.id || (null === (t = r.author) || void 0 === t ? void 0 : t.id) === c.default.getId() || null == r.embeds && null == r.attachments) return !1;
        if (!U(r)) {
            let e = null !== (s = null !== (i = h.default.getMessage(r.channel_id, r.id)) && void 0 !== i ? i : T.default.getMessage(r.id, r.channel_id)) && void 0 !== s ? s : null === (n = d.default.getMessage(r.channel_id, r.id)) || void 0 === n ? void 0 : n.message;
            null != e && !U((0, u.updateMessageRecord)(e, r)) && D(e, v.TimeoutCancelSource.UPDATE)
        }
        let a = E.default.getChannelId(),
            o = f.default.getCurrentSidebarChannelId(a),
            l = r.channel_id === a || r.channel_id === o;
        if (!l) return !1;
        let _ = h.default.getMessage(r.channel_id, r.id);
        return null != _ && G([_])
    }

    function x(e) {
        var t, n;
        let {
            channelId: i,
            message: s,
            optimistic: r,
            isPushNotification: a
        } = e;
        if (!(0, S.isEligibleForExplicitMediaRedaction)() || r || a || null == i || (null === (t = s.author) || void 0 === t ? void 0 : t.id) === c.default.getId()) return !1;
        let o = E.default.getChannelId(),
            l = f.default.getCurrentSidebarChannelId(o),
            u = i === o || i === l,
            d = _.default.getChannel(i);
        if (!u) return !1;
        let h = null === (n = null == d ? void 0 : d.isPrivate()) || void 0 === n || n,
            g = (null == d ? void 0 : d.memberCount) == null || (null == d ? void 0 : d.memberCount) > 100;
        return G([s], {
            jitter: h && g
        })
    }

    function B(e) {
        let {
            channelId: t,
            messages: n
        } = e;
        if (!(0, S.isEligibleForExplicitMediaRedaction)() || null == t || null == n) return !1;
        let i = E.default.getChannelId(),
            s = f.default.getCurrentSidebarChannelId(i),
            r = t === i || t === s;
        return !!r && G(n)
    }

    function H(e) {
        let {
            messages: t
        } = e;
        if (!(0, S.isEligibleForExplicitMediaRedaction)() || null == t) return !1;
        let n = s(t),
            i = a(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id);
        return G(i)
    }

    function Y(e) {
        let {
            guildId: t,
            threads: n
        } = e;
        if (null == n || !(0, S.isEligibleForExplicitMediaRedaction)()) return !1;
        let i = g.default.getGuildId() === t;
        if (!i) return !1;
        let s = m.default.keys(n).map(e => n[e].first_message);
        return G(s)
    }

    function j(e) {
        let {
            guildId: t,
            firstMessages: n
        } = e;
        if (null == n || !(0, S.isEligibleForExplicitMediaRedaction)()) return !1;
        let i = g.default.getGuildId() === t;
        return !!i && G(n, {
            forceBatchScan: !0
        })
    }

    function W(e) {
        let {
            channelId: t
        } = e;
        if (null == t || !(0, S.isEligibleForExplicitMediaRedaction)()) return !1;
        let n = t === E.default.getChannelId();
        return !!n && q(t)
    }

    function K(e) {
        let {
            settings: t,
            local: n
        } = e;
        if (!(0, S.isEligibleForExplicitMediaRedaction)() || !n || t.type !== C.UserSettingsTypes.PRELOADED_USER_SETTINGS) return !1;
        let i = E.default.getChannelId();
        return null != i && q(i)
    }

    function z(e) {
        let {
            channelId: t,
            chatOpen: n
        } = e;
        return !!(0, S.isEligibleForExplicitMediaRedaction)() && !!n && q(t)
    }

    function q(e) {
        let t = h.default.getMessages(e);
        return 0 !== t.length && function(e) {
            let {
                messagesPendingScan: t,
                attributesByChannelId: n
            } = function(e) {
                let t = e.filter(e => k(e) && (0, v.shouldRedactExplicitContent)(e)),
                    n = e.map(e => {
                        if (I.MessageTypesWithLazyLoadedReferences.has(e.type) && null != e.messageReference) {
                            let t = d.default.getMessageByReference(e.messageReference);
                            if (t.state === d.ReferencedMessageState.LOADED && null != t.message && k(t.message) && (0, v.shouldRedactExplicitContent)(t.message)) return t.message
                        }
                    }).filter(function(e) {
                        return null != e
                    });
                n.length > 0 && (t = [...t, ...n]);
                let i = a(t, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
                    s = i.filter(e => U(e));
                return {
                    messagesPendingScan: s,
                    attributesByChannelId: w(i)
                }
            }(e);
            return m.default.entries(n).forEach(e => {
                let [t, n] = e;
                (0, v.trackExplicitMediaRedactableMessagedLoaded)({
                    channelId: t,
                    numOfAttachments: n.numOfAttachments,
                    numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                    numOfEmbeds: n.numOfEmbeds,
                    numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
                })
            }), !!(t.length > 0) && (M(t), !0)
        }(t)
    }
    class X extends l.default {
        constructor(...e) {
            super(...e), this.actions = {
                LOAD_MESSAGES_SUCCESS: B,
                LOAD_FORUM_POSTS: Y,
                LOAD_THREADS_SUCCESS: j,
                LOAD_ARCHIVED_THREADS_SUCCESS: j,
                MESSAGE_CREATE: x,
                MESSAGE_UPDATE: F,
                LOGOUT: O,
                SEARCH_FINISH: H,
                MOD_VIEW_SEARCH_FINISH: H,
                CHANNEL_SELECT: W,
                LOAD_PINNED_MESSAGES_SUCCESS: H,
                USER_SETTINGS_PROTO_UPDATE: K,
                CHANNEL_RTC_UPDATE_CHAT_OPEN: z
            }
        }
    }
    var Q = new X
}