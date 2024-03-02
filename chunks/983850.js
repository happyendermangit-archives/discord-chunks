function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MESSAGE_SCAN_TIMEOUT: function() {
            return S
        },
        MAX_TIMEOUT_FOR_JITTER: function() {
            return A
        },
        default: function() {
            return Q
        }
    }), n("222007"), n("808653");
    var s = n("345570"),
        i = n.n(s),
        r = n("452016"),
        a = n.n(r),
        o = n("913144"),
        d = n("689988"),
        u = n("692038"),
        l = n("256572"),
        f = n("271938"),
        _ = n("982108"),
        c = n("42203"),
        g = n("377253"),
        m = n("18494"),
        h = n("162771"),
        v = n("299039"),
        E = n("695681"),
        p = n("457971"),
        y = n("447435"),
        T = n("574933"),
        C = n("49111"),
        I = n("397336");
    let S = 3e3,
        A = 800,
        D = {};

    function N(e) {
        return "".concat(e.channel_id, ":").concat(e.id)
    }

    function O() {
        Object.values(D).forEach(e => {
            let {
                timeout: t
            } = e;
            clearTimeout(t)
        }), D = {}
    }

    function P(e, t) {
        if (null == e.id || null == e.channel_id) return;
        let n = N(e);
        if (null != D[n]) {
            let {
                timeout: s
            } = D[n];
            return function(e, t) {
                let n = N(e),
                    {
                        setAt: s
                    } = D[n];
                if (t === y.TimeoutCancelSource.UPDATE) {
                    var i, r;
                    let t = null !== (i = e.attachments) && void 0 !== i ? i : [],
                        n = null !== (r = e.embeds) && void 0 !== r ? r : [],
                        s = t.filter(e => (0, y.isMediaObscured)({
                            type: y.ObscuredMediaTypes.Attachment,
                            media: e
                        }, !0)),
                        a = n.filter(e => (0, y.isMediaObscured)({
                            type: y.ObscuredMediaTypes.Embed,
                            media: e
                        }, !0));
                    (0, y.trackExplicitMediaScanComplete)({
                        messageId: e.id,
                        channelId: e.channel_id,
                        numOfAttachments: t.length,
                        numOfEmbeds: n.length,
                        numOfExplicitAttachments: s.length,
                        numOfExplicitEmbeds: a.length
                    })
                }(0, y.trackScanTiming)(s, t)
            }(e, t), clearTimeout(s), delete D[n], !0
        }
        return !1
    }
    let b = (e, t) => {
        if (0 !== e.length) {
            if (t) {
                (0, E.sendMultiChannelMessagesForScanning)(e);
                return
            }(0, E.sendMessagesForScanning)(e[0].channel_id, e.map(e => e.id))
        }
    };

    function V(e, t) {
        let {
            forceBatchScan: n = !1,
            jitter: s = !1
        } = null != t ? t : {};
        e.forEach(e => {
            let t = N(e);
            null == D[t] && (D[t] = {
                setAt: Date.now(),
                timeout: setTimeout(() => {
                    ! function(e) {
                        if (P(e, y.TimeoutCancelSource.TIMEOUT)) {
                            let t = g.default.getMessage(e.channel_id, e.id),
                                {
                                    attachmentIds: n,
                                    embedIds: s
                                } = U(t);
                            (0, y.trackScanningTimedOut)({
                                channelId: e.channel_id,
                                messageId: e.id,
                                attachmentIds: n,
                                embedIds: s
                            }), o.default.dispatch({
                                type: "MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT",
                                messageId: e.id,
                                channelId: e.channel_id
                            })
                        }
                    }(e)
                }, S)
            })
        });
        let i = n || new Set(e.map(e => e.channel_id)).size > 1;
        s ? setTimeout(() => {
            let t = e.filter(e => null != D[N(e)]);
            b(t, i)
        }, Math.random() * A) : b(e, i)
    }
    let R = e => null == e.content_scan_version || e.content_scan_version < 1,
        k = e => {
            var t, n, s, i, r, a, o, d;
            let u = null != (d = e).content_scan_version ? d.content_scan_version : null != d.contentScanVersion ? d.contentScanVersion : null;
            return !((null === (t = e.video) || void 0 === t ? void 0 : t.width) === 0 && (null === (n = e.video) || void 0 === n ? void 0 : n.height) === 0 || (null === (s = e.thumbnail) || void 0 === s ? void 0 : s.width) === 0 && (null === (i = e.thumbnail) || void 0 === i ? void 0 : i.height) === 0 || (null === (r = e.image) || void 0 === r ? void 0 : r.width) === 0 && (null === (a = e.image) || void 0 === a ? void 0 : a.height) === 0 || "images" in e && (null === (o = e.images) || void 0 === o ? void 0 : o.some(e => 0 === e.width && 0 === e.height))) && (null == u || u < 1)
        };

    function M(e) {
        let {
            attachmentIds: t,
            embedIds: n
        } = U(e);
        return t.length > 0 || n.length > 0
    }

    function w(e) {
        let t = e.reduce((e, t) => {
            var n, s, i, r, a, o, d, u;
            null == e[t.channel_id] && (e[t.channel_id] = {
                numOfAttachments: 0,
                numOfAttachmentsPendingScan: 0,
                numOfEmbeds: 0,
                numOfEmbedsPendingScan: 0
            });
            let l = e[t.channel_id];
            return l.numOfAttachments += null !== (a = null === (n = t.attachments) || void 0 === n ? void 0 : n.length) && void 0 !== a ? a : 0, l.numOfEmbeds += null !== (o = null === (s = t.embeds) || void 0 === s ? void 0 : s.length) && void 0 !== o ? o : 0, l.numOfAttachmentsPendingScan += null !== (d = null === (i = t.attachments) || void 0 === i ? void 0 : i.filter(R).length) && void 0 !== d ? d : 0, l.numOfEmbedsPendingScan += null !== (u = null == t ? void 0 : null === (r = t.embeds) || void 0 === r ? void 0 : r.filter(k).length) && void 0 !== u ? u : 0, {
                ...e,
                [t.channel_id]: l
            }
        }, {});
        return t
    }

    function L(e) {
        return null != e && (null != e.attachments && e.attachments.length > 0 || null != e.embeds && e.embeds.length > 0)
    }

    function U(e) {
        var t, n, s, i, r, a, o, d;
        let u = null !== (r = null == e ? void 0 : null === (t = e.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== r ? r : 0,
            l = null !== (a = null == e ? void 0 : null === (n = e.embeds) || void 0 === n ? void 0 : n.length) && void 0 !== a ? a : 0;
        if (0 === u && 0 === l) return {
            attachmentIds: [],
            embedIds: []
        };
        let f = null !== (o = null == e ? void 0 : null === (s = e.attachments) || void 0 === s ? void 0 : s.filter(R)) && void 0 !== o ? o : [],
            _ = null !== (d = null == e ? void 0 : null === (i = e.embeds) || void 0 === i ? void 0 : i.filter(k)) && void 0 !== d ? d : [];
        return {
            attachmentIds: f.map(e => e.id).filter(Boolean),
            embedIds: _.map((e, t) => "embed_".concat(t)).filter(Boolean)
        }
    }

    function G(e, t) {
        let {
            messagesPendingScan: n,
            attributesByChannelId: s
        } = function(e) {
            let t = e.filter(e => L(e) && (0, y.shouldRedactExplicitContent)(e)),
                n = e.map(e => {
                    if (null != e && "referenced_message" in e && null != e.referenced_message && L(e.referenced_message) && (0, y.shouldRedactExplicitContent)(e.referenced_message)) return e.referenced_message
                }).filter(function(e) {
                    return null != e
                });
            n.length > 0 && (t = [...t, ...n]);
            let s = a(t, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
                i = s.filter(e => M(e));
            return {
                messagesPendingScan: i,
                attributesByChannelId: w(s)
            }
        }(e);
        return v.default.entries(s).forEach(e => {
            let [t, n] = e;
            (0, y.trackExplicitMediaRedactableMessagedLoaded)({
                channelId: t,
                numOfAttachments: n.numOfAttachments,
                numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                numOfEmbeds: n.numOfEmbeds,
                numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
            })
        }), !!(n.length > 0) && (V(n, t), !0)
    }

    function F(e) {
        var t, n, s, i;
        let {
            message: r
        } = e;
        if (!(0, p.isEligibleForExplicitMediaRedaction)() || null == r.channel_id || null == r.id || (null === (t = r.author) || void 0 === t ? void 0 : t.id) === f.default.getId() || null == r.embeds && null == r.attachments) return !1;
        if (!M(r)) {
            let e = null !== (i = null !== (s = g.default.getMessage(r.channel_id, r.id)) && void 0 !== s ? s : T.default.getMessage(r.id, r.channel_id)) && void 0 !== i ? i : null === (n = l.default.getMessage(r.channel_id, r.id)) || void 0 === n ? void 0 : n.message;
            null != e && !M((0, u.updateMessageRecord)(e, r)) && P(e, y.TimeoutCancelSource.UPDATE)
        }
        let a = m.default.getChannelId(),
            o = _.default.getCurrentSidebarChannelId(a),
            d = r.channel_id === a || r.channel_id === o;
        if (!d) return !1;
        let c = g.default.getMessage(r.channel_id, r.id);
        return null != c && G([c])
    }

    function H(e) {
        var t, n;
        let {
            channelId: s,
            message: i,
            optimistic: r,
            isPushNotification: a
        } = e;
        if (!(0, p.isEligibleForExplicitMediaRedaction)() || r || a || null == s || (null === (t = i.author) || void 0 === t ? void 0 : t.id) === f.default.getId()) return !1;
        let o = m.default.getChannelId(),
            d = _.default.getCurrentSidebarChannelId(o),
            u = s === o || s === d,
            l = c.default.getChannel(s);
        if (!u) return !1;
        let g = null === (n = null == l ? void 0 : l.isPrivate()) || void 0 === n || n,
            h = (null == l ? void 0 : l.memberCount) == null || (null == l ? void 0 : l.memberCount) > 100;
        return G([i], {
            jitter: g && h
        })
    }

    function x(e) {
        let {
            channelId: t,
            messages: n
        } = e;
        if (!(0, p.isEligibleForExplicitMediaRedaction)() || null == t || null == n) return !1;
        let s = m.default.getChannelId(),
            i = _.default.getCurrentSidebarChannelId(s),
            r = t === s || t === i;
        return !!r && G(n)
    }

    function B(e) {
        let {
            messages: t
        } = e;
        if (!(0, p.isEligibleForExplicitMediaRedaction)() || null == t) return !1;
        let n = i(t),
            s = a(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id);
        return G(s)
    }

    function Y(e) {
        let {
            guildId: t,
            threads: n
        } = e;
        if (null == n || !(0, p.isEligibleForExplicitMediaRedaction)()) return !1;
        let s = h.default.getGuildId() === t;
        if (!s) return !1;
        let i = v.default.keys(n).map(e => n[e].first_message);
        return G(i)
    }

    function j(e) {
        let {
            guildId: t,
            firstMessages: n
        } = e;
        if (null == n || !(0, p.isEligibleForExplicitMediaRedaction)()) return !1;
        let s = h.default.getGuildId() === t;
        return !!s && G(n, {
            forceBatchScan: !0
        })
    }

    function K(e) {
        let {
            channelId: t
        } = e;
        if (null == t || !(0, p.isEligibleForExplicitMediaRedaction)()) return !1;
        let n = t === m.default.getChannelId();
        return !!n && q(t)
    }

    function W(e) {
        let {
            settings: t,
            local: n
        } = e;
        if (!(0, p.isEligibleForExplicitMediaRedaction)() || !n || t.type !== I.UserSettingsTypes.PRELOADED_USER_SETTINGS) return !1;
        let s = m.default.getChannelId();
        return null != s && q(s)
    }

    function z(e) {
        let {
            channelId: t,
            chatOpen: n
        } = e;
        return !!(0, p.isEligibleForExplicitMediaRedaction)() && !!n && q(t)
    }

    function q(e) {
        let t = g.default.getMessages(e);
        return 0 !== t.length && function(e) {
            let {
                messagesPendingScan: t,
                attributesByChannelId: n
            } = function(e) {
                let t = e.filter(e => L(e) && (0, y.shouldRedactExplicitContent)(e)),
                    n = e.map(e => {
                        if (C.MessageTypesWithLazyLoadedReferences.has(e.type) && null != e.messageReference) {
                            let t = l.default.getMessageByReference(e.messageReference);
                            if (t.state === l.ReferencedMessageState.LOADED && null != t.message && L(t.message) && (0, y.shouldRedactExplicitContent)(t.message)) return t.message
                        }
                    }).filter(function(e) {
                        return null != e
                    });
                n.length > 0 && (t = [...t, ...n]);
                let s = a(t, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
                    i = s.filter(e => M(e));
                return {
                    messagesPendingScan: i,
                    attributesByChannelId: w(s)
                }
            }(e);
            return v.default.entries(n).forEach(e => {
                let [t, n] = e;
                (0, y.trackExplicitMediaRedactableMessagedLoaded)({
                    channelId: t,
                    numOfAttachments: n.numOfAttachments,
                    numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                    numOfEmbeds: n.numOfEmbeds,
                    numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
                })
            }), !!(t.length > 0) && (V(t), !0)
        }(t)
    }
    class X extends d.default {
        constructor(...e) {
            super(...e), this.actions = {
                LOAD_MESSAGES_SUCCESS: x,
                LOAD_FORUM_POSTS: Y,
                LOAD_THREADS_SUCCESS: j,
                LOAD_ARCHIVED_THREADS_SUCCESS: j,
                MESSAGE_CREATE: H,
                MESSAGE_UPDATE: F,
                LOGOUT: O,
                SEARCH_FINISH: B,
                MOD_VIEW_SEARCH_FINISH: B,
                CHANNEL_SELECT: K,
                LOAD_PINNED_MESSAGES_SUCCESS: B,
                USER_SETTINGS_PROTO_UPDATE: W,
                CHANNEL_RTC_UPDATE_CHAT_OPEN: z
            }
        }
    }
    var Q = new X
}