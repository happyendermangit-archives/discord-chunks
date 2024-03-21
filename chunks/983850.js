function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MESSAGE_SCAN_TIMEOUT: function() {
            return R
        },
        MAX_TIMEOUT_FOR_JITTER: function() {
            return O
        },
        default: function() {
            return q
        }
    }), n("222007"), n("808653");
    var i = n("345570"),
        s = n.n(i),
        r = n("452016"),
        a = n.n(r),
        o = n("432710"),
        l = n("913144"),
        u = n("689988"),
        d = n("692038"),
        c = n("155084"),
        _ = n("256572"),
        f = n("271938"),
        E = n("982108"),
        h = n("42203"),
        g = n("377253"),
        m = n("18494"),
        p = n("162771"),
        S = n("299039"),
        v = n("660464"),
        T = n("695681"),
        I = n("457971"),
        A = n("447435"),
        C = n("574933"),
        y = n("49111"),
        N = n("397336");
    let R = 3e3,
        O = 800,
        D = {};

    function P(e) {
        return "".concat(e.channel_id, ":").concat(e.id)
    }

    function L() {
        Object.values(D).forEach(e => {
            let {
                timeout: t
            } = e;
            clearTimeout(t)
        }), D = {}
    }

    function M(e, t) {
        if (null == e.id || null == e.channel_id) return !1;
        let n = P(e);
        if (null != D[n]) {
            let {
                timeout: i
            } = D[n];
            return clearTimeout(i),
                function(e, t) {
                    let n = P(e),
                        {
                            setAt: i
                        } = D[n];
                    if (t === A.TimeoutCancelSource.UPDATE) {
                        var s, r;
                        let t = null !== (s = e.attachments) && void 0 !== s ? s : [],
                            n = null !== (r = e.embeds) && void 0 !== r ? r : [],
                            i = t.filter(e => (0, A.isMediaObscured)({
                                type: A.ObscuredMediaTypes.Attachment,
                                media: e
                            }, !0)),
                            a = n.filter(e => (0, A.isMediaObscured)({
                                type: A.ObscuredMediaTypes.Embed,
                                media: e
                            }, !0));
                        (0, A.trackExplicitMediaScanComplete)({
                            messageId: e.id,
                            channelId: e.channel_id,
                            numOfAttachments: t.length,
                            numOfEmbeds: n.length,
                            numOfExplicitAttachments: i.length,
                            numOfExplicitEmbeds: a.length
                        })
                    }(0, A.trackScanTiming)(i, t)
                }(e, t), delete D[n], !0
        }
        return !1
    }
    let b = (e, t) => {
        if (0 !== e.length) {
            if (t) {
                (0, T.sendMultiChannelMessagesForScanning)(e);
                return
            }(0, T.sendMessagesForScanning)(e[0].channel_id, e.map(e => e.id))
        }
    };

    function U(e, t) {
        let {
            forceBatchScan: n = !1,
            jitter: i = !1
        } = null != t ? t : {}, s = (null == t ? void 0 : t.isMessageUpdate) ? e.filter(v.hasUnscannedAttachmentsOrEmbedsForTimeout) : e;
        s.forEach(e => {
            let t = P(e);
            null == D[t] && (c.default.increment({
                name: o.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE
            }), D[t] = {
                setAt: Date.now(),
                timeout: setTimeout(() => {
                    ! function(e) {
                        if (M(e, A.TimeoutCancelSource.TIMEOUT)) {
                            let t = g.default.getMessage(e.channel_id, e.id),
                                {
                                    attachmentIds: n,
                                    embedIds: i
                                } = (0, v.getUnscannedAttachmentsAndEmbedIdsForTimeout)(t);
                            (0, A.trackScanningTimedOut)({
                                channelId: e.channel_id,
                                messageId: e.id,
                                attachmentIds: n,
                                embedIds: i
                            }), l.default.dispatch({
                                type: "MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT",
                                messageId: e.id,
                                channelId: e.channel_id
                            })
                        }
                    }(e)
                }, R)
            })
        });
        let r = n || new Set(s.map(e => e.channel_id)).size > 1;
        i ? setTimeout(() => {
            let e = s.filter(e => null != D[P(e)]);
            b(e, r)
        }, Math.random() * O) : b(s, r)
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
            return d.numOfAttachments += null !== (a = null === (n = t.attachments) || void 0 === n ? void 0 : n.length) && void 0 !== a ? a : 0, d.numOfEmbeds += null !== (o = null === (i = t.embeds) || void 0 === i ? void 0 : i.length) && void 0 !== o ? o : 0, d.numOfAttachmentsPendingScan += null !== (l = null === (s = t.attachments) || void 0 === s ? void 0 : s.filter(v.shouldScanAttachment).length) && void 0 !== l ? l : 0, d.numOfEmbedsPendingScan += null !== (u = null == t ? void 0 : null === (r = t.embeds) || void 0 === r ? void 0 : r.filter(v.shouldScanEmbed).length) && void 0 !== u ? u : 0, {
                ...e,
                [t.channel_id]: d
            }
        }, {});
        return t
    }

    function k(e, t) {
        let {
            messagesPendingScan: n,
            attributesByChannelId: i
        } = function(e) {
            let t = e.filter(e => (0, v.hasAttachmentsOrEmbeds)(e) && (0, A.shouldRedactExplicitContent)(e)),
                n = e.map(e => {
                    if (null != e && "referenced_message" in e && null != e.referenced_message && (0, v.hasAttachmentsOrEmbeds)(e.referenced_message) && (0, A.shouldRedactExplicitContent)(e.referenced_message)) return e.referenced_message
                }).filter(function(e) {
                    return null != e
                });
            n.length > 0 && (t = [...t, ...n]);
            let i = a(t, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
                s = i.filter(e => (0, v.hasAttachmentsOrEmbedsRequiringScan)(e));
            return {
                messagesPendingScan: s,
                attributesByChannelId: w(i)
            }
        }(e);
        return S.default.entries(i).forEach(e => {
            let [t, n] = e;
            (0, A.trackExplicitMediaRedactableMessagedLoaded)({
                channelId: t,
                numOfAttachments: n.numOfAttachments,
                numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                numOfEmbeds: n.numOfEmbeds,
                numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
            })
        }), !!(n.length > 0) && (U(n, t), !0)
    }

    function V(e) {
        var t, n, i, s, r, a;
        let {
            message: o
        } = e;
        if (!(0, I.isEligibleForExplicitMediaRedaction)() || null == o.channel_id || null == o.id || (null === (t = o.author) || void 0 === t ? void 0 : t.id) === f.default.getId() || null == o.embeds && null == o.attachments || (null === (n = o.embeds) || void 0 === n ? void 0 : n.length) === 0 && (null === (i = o.attachments) || void 0 === i ? void 0 : i.length) === 0) return !1;
        if (!(0, v.hasUnscannedAttachmentsOrEmbedsForTimeout)(o)) {
            let e = null !== (a = null !== (r = g.default.getMessage(o.channel_id, o.id)) && void 0 !== r ? r : C.default.getMessage(o.id, o.channel_id)) && void 0 !== a ? a : null === (s = _.default.getMessage(o.channel_id, o.id)) || void 0 === s ? void 0 : s.message;
            null != e && !(0, v.hasUnscannedAttachmentsOrEmbedsForTimeout)((0, d.updateMessageRecord)(e, o)) && M(e, A.TimeoutCancelSource.UPDATE)
        }
        let l = m.default.getChannelId(),
            u = E.default.getCurrentSidebarChannelId(l),
            c = o.channel_id === l || o.channel_id === u;
        if (!c) return !1;
        let h = g.default.getMessage(o.channel_id, o.id);
        return null != h && k([h], {
            isMessageUpdate: !0
        })
    }

    function G(e) {
        var t, n;
        let {
            channelId: i,
            message: s,
            optimistic: r,
            isPushNotification: a
        } = e;
        if (!(0, I.isEligibleForExplicitMediaRedaction)() || r || a || null == i || (null === (t = s.author) || void 0 === t ? void 0 : t.id) === f.default.getId()) return !1;
        let o = m.default.getChannelId(),
            l = E.default.getCurrentSidebarChannelId(o),
            u = i === o || i === l,
            d = h.default.getChannel(i);
        if (!u) return !1;
        let c = null === (n = null == d ? void 0 : d.isPrivate()) || void 0 === n || n,
            _ = (null == d ? void 0 : d.memberCount) == null || (null == d ? void 0 : d.memberCount) > 100;
        return k([s], {
            jitter: c && _
        })
    }

    function F(e) {
        let {
            channelId: t,
            messages: n
        } = e;
        if (!(0, I.isEligibleForExplicitMediaRedaction)() || null == t || null == n) return !1;
        let i = m.default.getChannelId(),
            s = E.default.getCurrentSidebarChannelId(i),
            r = t === i || t === s;
        return !!r && k(n)
    }

    function x(e) {
        let {
            messages: t
        } = e;
        if (!(0, I.isEligibleForExplicitMediaRedaction)() || null == t) return !1;
        let n = s(t),
            i = a(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id);
        return k(i)
    }

    function B(e) {
        let {
            guildId: t,
            threads: n
        } = e;
        if (null == n || !(0, I.isEligibleForExplicitMediaRedaction)()) return !1;
        let i = p.default.getGuildId() === t;
        if (!i) return !1;
        let s = S.default.keys(n).map(e => n[e].first_message);
        return k(s)
    }

    function H(e) {
        let {
            guildId: t,
            firstMessages: n
        } = e;
        if (null == n || !(0, I.isEligibleForExplicitMediaRedaction)()) return !1;
        let i = p.default.getGuildId() === t;
        return !!i && k(n, {
            forceBatchScan: !0
        })
    }

    function Y(e) {
        let {
            channelId: t
        } = e;
        if (null == t || !(0, I.isEligibleForExplicitMediaRedaction)()) return !1;
        let n = t === m.default.getChannelId();
        return !!n && W(t)
    }

    function K(e) {
        let {
            settings: t,
            local: n
        } = e;
        if (!(0, I.isEligibleForExplicitMediaRedaction)() || !n || t.type !== N.UserSettingsTypes.PRELOADED_USER_SETTINGS) return !1;
        let i = m.default.getChannelId();
        return null != i && W(i)
    }

    function j(e) {
        let {
            channelId: t,
            chatOpen: n
        } = e;
        return !!(0, I.isEligibleForExplicitMediaRedaction)() && !!n && W(t)
    }

    function W(e) {
        let t = g.default.getMessages(e);
        return 0 !== t.length && function(e) {
            let {
                messagesPendingScan: t,
                attributesByChannelId: n
            } = function(e) {
                let t = e.filter(e => (0, v.hasAttachmentsOrEmbeds)(e) && (0, A.shouldRedactExplicitContent)(e)),
                    n = e.map(e => {
                        if (y.MessageTypesWithLazyLoadedReferences.has(e.type) && null != e.messageReference) {
                            let t = _.default.getMessageByReference(e.messageReference);
                            if (t.state === _.ReferencedMessageState.LOADED && null != t.message && (0, v.hasAttachmentsOrEmbeds)(t.message) && (0, A.shouldRedactExplicitContent)(t.message)) return t.message
                        }
                    }).filter(function(e) {
                        return null != e
                    });
                n.length > 0 && (t = [...t, ...n]);
                let i = a(t, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
                    s = i.filter(e => (0, v.hasAttachmentsOrEmbedsRequiringScan)(e));
                return {
                    messagesPendingScan: s,
                    attributesByChannelId: w(i)
                }
            }(e);
            return S.default.entries(n).forEach(e => {
                let [t, n] = e;
                (0, A.trackExplicitMediaRedactableMessagedLoaded)({
                    channelId: t,
                    numOfAttachments: n.numOfAttachments,
                    numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                    numOfEmbeds: n.numOfEmbeds,
                    numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
                })
            }), !!(t.length > 0) && (U(t), !0)
        }(t)
    }
    class z extends u.default {
        constructor(...e) {
            super(...e), this.actions = {
                LOAD_MESSAGES_SUCCESS: F,
                LOAD_FORUM_POSTS: B,
                LOAD_THREADS_SUCCESS: H,
                LOAD_ARCHIVED_THREADS_SUCCESS: H,
                MESSAGE_CREATE: G,
                MESSAGE_UPDATE: V,
                LOGOUT: L,
                SEARCH_FINISH: x,
                MOD_VIEW_SEARCH_FINISH: x,
                CHANNEL_SELECT: Y,
                LOAD_PINNED_MESSAGES_SUCCESS: x,
                USER_SETTINGS_PROTO_UPDATE: K,
                CHANNEL_RTC_UPDATE_CHAT_OPEN: j
            }
        }
    }
    var q = new z
}