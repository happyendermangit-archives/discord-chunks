function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MESSAGE_SCAN_TIMEOUT: function() {
            return y
        },
        MAX_TIMEOUT_FOR_JITTER: function() {
            return N
        },
        default: function() {
            return K
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
        p = n("660464"),
        S = n("695681"),
        v = n("457971"),
        T = n("447435"),
        I = n("574933"),
        C = n("49111"),
        A = n("397336");
    let y = 3e3,
        N = 800,
        R = {};

    function O(e) {
        return "".concat(e.channel_id, ":").concat(e.id)
    }

    function D() {
        Object.values(R).forEach(e => {
            let {
                timeout: t
            } = e;
            clearTimeout(t)
        }), R = {}
    }

    function P(e, t) {
        if (null == e.id || null == e.channel_id) return !1;
        let n = O(e);
        if (null != R[n]) {
            let {
                timeout: i
            } = R[n];
            return clearTimeout(i),
                function(e, t) {
                    let n = O(e),
                        {
                            setAt: i
                        } = R[n];
                    if (t === T.TimeoutCancelSource.UPDATE) {
                        var s, r;
                        let t = null !== (s = e.attachments) && void 0 !== s ? s : [],
                            n = null !== (r = e.embeds) && void 0 !== r ? r : [],
                            i = t.filter(e => (0, T.isMediaObscured)({
                                type: T.ObscuredMediaTypes.Attachment,
                                media: e
                            }, !0)),
                            a = n.filter(e => (0, T.isMediaObscured)({
                                type: T.ObscuredMediaTypes.Embed,
                                media: e
                            }, !0));
                        (0, T.trackExplicitMediaScanComplete)({
                            messageId: e.id,
                            channelId: e.channel_id,
                            numOfAttachments: t.length,
                            numOfEmbeds: n.length,
                            numOfExplicitAttachments: i.length,
                            numOfExplicitEmbeds: a.length
                        })
                    }(0, T.trackScanTiming)(i, t)
                }(e, t), delete R[n], !0
        }
        return !1
    }
    let L = (e, t) => {
        if (0 !== e.length) {
            if (t) {
                (0, S.sendMultiChannelMessagesForScanning)(e);
                return
            }(0, S.sendMessagesForScanning)(e[0].channel_id, e.map(e => e.id))
        }
    };

    function M(e, t) {
        let {
            forceBatchScan: n = !1,
            jitter: i = !1
        } = null != t ? t : {}, s = (null == t ? void 0 : t.isMessageUpdate) ? e.filter(p.hasUnscannedAttachmentsOrEmbedsForTimeout) : e;
        s.forEach(e => {
            let t = O(e);
            null == R[t] && (R[t] = {
                setAt: Date.now(),
                timeout: setTimeout(() => {
                    ! function(e) {
                        if (P(e, T.TimeoutCancelSource.TIMEOUT)) {
                            let t = h.default.getMessage(e.channel_id, e.id),
                                {
                                    attachmentIds: n,
                                    embedIds: i
                                } = (0, p.getUnscannedAttachmentsAndEmbedIdsForTimeout)(t);
                            (0, T.trackScanningTimedOut)({
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
                }, y)
            })
        });
        let r = n || new Set(s.map(e => e.channel_id)).size > 1;
        i ? setTimeout(() => {
            let e = s.filter(e => null != R[O(e)]);
            L(e, r)
        }, Math.random() * N) : L(s, r)
    }

    function b(e) {
        let t = e.reduce((e, t) => {
            var n, i, s, r, a, o, l, u;
            null == e[t.channel_id] && (e[t.channel_id] = {
                numOfAttachments: 0,
                numOfAttachmentsPendingScan: 0,
                numOfEmbeds: 0,
                numOfEmbedsPendingScan: 0
            });
            let d = e[t.channel_id];
            return d.numOfAttachments += null !== (a = null === (n = t.attachments) || void 0 === n ? void 0 : n.length) && void 0 !== a ? a : 0, d.numOfEmbeds += null !== (o = null === (i = t.embeds) || void 0 === i ? void 0 : i.length) && void 0 !== o ? o : 0, d.numOfAttachmentsPendingScan += null !== (l = null === (s = t.attachments) || void 0 === s ? void 0 : s.filter(p.shouldScanAttachment).length) && void 0 !== l ? l : 0, d.numOfEmbedsPendingScan += null !== (u = null == t ? void 0 : null === (r = t.embeds) || void 0 === r ? void 0 : r.filter(p.shouldScanEmbed).length) && void 0 !== u ? u : 0, {
                ...e,
                [t.channel_id]: d
            }
        }, {});
        return t
    }

    function U(e, t) {
        let {
            messagesPendingScan: n,
            attributesByChannelId: i
        } = function(e) {
            let t = e.filter(e => (0, p.hasAttachmentsOrEmbeds)(e) && (0, T.shouldRedactExplicitContent)(e)),
                n = e.map(e => {
                    if (null != e && "referenced_message" in e && null != e.referenced_message && (0, p.hasAttachmentsOrEmbeds)(e.referenced_message) && (0, T.shouldRedactExplicitContent)(e.referenced_message)) return e.referenced_message
                }).filter(function(e) {
                    return null != e
                });
            n.length > 0 && (t = [...t, ...n]);
            let i = a(t, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
                s = i.filter(e => (0, p.hasAttachmentsOrEmbedsRequiringScan)(e));
            return {
                messagesPendingScan: s,
                attributesByChannelId: b(i)
            }
        }(e);
        return m.default.entries(i).forEach(e => {
            let [t, n] = e;
            (0, T.trackExplicitMediaRedactableMessagedLoaded)({
                channelId: t,
                numOfAttachments: n.numOfAttachments,
                numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                numOfEmbeds: n.numOfEmbeds,
                numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
            })
        }), !!(n.length > 0) && (M(n, t), !0)
    }

    function w(e) {
        var t, n, i, s, r, a;
        let {
            message: o
        } = e;
        if (!(0, v.isEligibleForExplicitMediaRedaction)() || null == o.channel_id || null == o.id || (null === (t = o.author) || void 0 === t ? void 0 : t.id) === c.default.getId() || null == o.embeds && null == o.attachments || (null === (n = o.embeds) || void 0 === n ? void 0 : n.length) === 0 && (null === (i = o.attachments) || void 0 === i ? void 0 : i.length) === 0) return !1;
        if (!(0, p.hasUnscannedAttachmentsOrEmbedsForTimeout)(o)) {
            let e = null !== (a = null !== (r = h.default.getMessage(o.channel_id, o.id)) && void 0 !== r ? r : I.default.getMessage(o.id, o.channel_id)) && void 0 !== a ? a : null === (s = d.default.getMessage(o.channel_id, o.id)) || void 0 === s ? void 0 : s.message;
            null != e && !(0, p.hasUnscannedAttachmentsOrEmbedsForTimeout)((0, u.updateMessageRecord)(e, o)) && P(e, T.TimeoutCancelSource.UPDATE)
        }
        let l = E.default.getChannelId(),
            _ = f.default.getCurrentSidebarChannelId(l),
            g = o.channel_id === l || o.channel_id === _;
        if (!g) return !1;
        let m = h.default.getMessage(o.channel_id, o.id);
        return null != m && U([m], {
            isMessageUpdate: !0
        })
    }

    function k(e) {
        var t, n;
        let {
            channelId: i,
            message: s,
            optimistic: r,
            isPushNotification: a
        } = e;
        if (!(0, v.isEligibleForExplicitMediaRedaction)() || r || a || null == i || (null === (t = s.author) || void 0 === t ? void 0 : t.id) === c.default.getId()) return !1;
        let o = E.default.getChannelId(),
            l = f.default.getCurrentSidebarChannelId(o),
            u = i === o || i === l,
            d = _.default.getChannel(i);
        if (!u) return !1;
        let h = null === (n = null == d ? void 0 : d.isPrivate()) || void 0 === n || n,
            g = (null == d ? void 0 : d.memberCount) == null || (null == d ? void 0 : d.memberCount) > 100;
        return U([s], {
            jitter: h && g
        })
    }

    function V(e) {
        let {
            channelId: t,
            messages: n
        } = e;
        if (!(0, v.isEligibleForExplicitMediaRedaction)() || null == t || null == n) return !1;
        let i = E.default.getChannelId(),
            s = f.default.getCurrentSidebarChannelId(i),
            r = t === i || t === s;
        return !!r && U(n)
    }

    function G(e) {
        let {
            messages: t
        } = e;
        if (!(0, v.isEligibleForExplicitMediaRedaction)() || null == t) return !1;
        let n = s(t),
            i = a(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id);
        return U(i)
    }

    function F(e) {
        let {
            guildId: t,
            threads: n
        } = e;
        if (null == n || !(0, v.isEligibleForExplicitMediaRedaction)()) return !1;
        let i = g.default.getGuildId() === t;
        if (!i) return !1;
        let s = m.default.keys(n).map(e => n[e].first_message);
        return U(s)
    }

    function x(e) {
        let {
            guildId: t,
            firstMessages: n
        } = e;
        if (null == n || !(0, v.isEligibleForExplicitMediaRedaction)()) return !1;
        let i = g.default.getGuildId() === t;
        return !!i && U(n, {
            forceBatchScan: !0
        })
    }

    function B(e) {
        let {
            channelId: t
        } = e;
        if (null == t || !(0, v.isEligibleForExplicitMediaRedaction)()) return !1;
        let n = t === E.default.getChannelId();
        return !!n && j(t)
    }

    function H(e) {
        let {
            settings: t,
            local: n
        } = e;
        if (!(0, v.isEligibleForExplicitMediaRedaction)() || !n || t.type !== A.UserSettingsTypes.PRELOADED_USER_SETTINGS) return !1;
        let i = E.default.getChannelId();
        return null != i && j(i)
    }

    function Y(e) {
        let {
            channelId: t,
            chatOpen: n
        } = e;
        return !!(0, v.isEligibleForExplicitMediaRedaction)() && !!n && j(t)
    }

    function j(e) {
        let t = h.default.getMessages(e);
        return 0 !== t.length && function(e) {
            let {
                messagesPendingScan: t,
                attributesByChannelId: n
            } = function(e) {
                let t = e.filter(e => (0, p.hasAttachmentsOrEmbeds)(e) && (0, T.shouldRedactExplicitContent)(e)),
                    n = e.map(e => {
                        if (C.MessageTypesWithLazyLoadedReferences.has(e.type) && null != e.messageReference) {
                            let t = d.default.getMessageByReference(e.messageReference);
                            if (t.state === d.ReferencedMessageState.LOADED && null != t.message && (0, p.hasAttachmentsOrEmbeds)(t.message) && (0, T.shouldRedactExplicitContent)(t.message)) return t.message
                        }
                    }).filter(function(e) {
                        return null != e
                    });
                n.length > 0 && (t = [...t, ...n]);
                let i = a(t, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
                    s = i.filter(e => (0, p.hasAttachmentsOrEmbedsRequiringScan)(e));
                return {
                    messagesPendingScan: s,
                    attributesByChannelId: b(i)
                }
            }(e);
            return m.default.entries(n).forEach(e => {
                let [t, n] = e;
                (0, T.trackExplicitMediaRedactableMessagedLoaded)({
                    channelId: t,
                    numOfAttachments: n.numOfAttachments,
                    numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                    numOfEmbeds: n.numOfEmbeds,
                    numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
                })
            }), !!(t.length > 0) && (M(t), !0)
        }(t)
    }
    class W extends l.default {
        constructor(...e) {
            super(...e), this.actions = {
                LOAD_MESSAGES_SUCCESS: V,
                LOAD_FORUM_POSTS: F,
                LOAD_THREADS_SUCCESS: x,
                LOAD_ARCHIVED_THREADS_SUCCESS: x,
                MESSAGE_CREATE: k,
                MESSAGE_UPDATE: w,
                LOGOUT: D,
                SEARCH_FINISH: G,
                MOD_VIEW_SEARCH_FINISH: G,
                CHANNEL_SELECT: B,
                LOAD_PINNED_MESSAGES_SUCCESS: G,
                USER_SETTINGS_PROTO_UPDATE: H,
                CHANNEL_RTC_UPDATE_CHAT_OPEN: Y
            }
        }
    }
    var K = new W
}