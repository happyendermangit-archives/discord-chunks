function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        MESSAGE_SCAN_TIMEOUT: function() {
            return O
        },
        MAX_TIMEOUT_FOR_JITTER: function() {
            return D
        },
        default: function() {
            return Q
        }
    }), n("222007"), n("808653");
    var s = n("345570"),
        r = n.n(s),
        a = n("452016"),
        o = n.n(a),
        l = n("432710"),
        u = n("913144"),
        d = n("689988"),
        c = n("692038"),
        _ = n("155084"),
        f = n("256572"),
        E = n("271938"),
        h = n("982108"),
        g = n("42203"),
        m = n("377253"),
        p = n("18494"),
        S = n("162771"),
        T = n("299039"),
        v = n("660464"),
        I = n("695681"),
        A = n("457971"),
        C = n("447435"),
        y = n("574933"),
        N = n("49111"),
        R = n("397336");
    let O = 3e3,
        D = 800,
        P = {};

    function L(e) {
        return "".concat(e.channel_id, ":").concat(e.id)
    }

    function M() {
        Object.values(P).forEach(e => {
            let {
                timeout: t
            } = e;
            clearTimeout(t)
        }), P = {}
    }

    function b(e, t) {
        if (null == e.id || null == e.channel_id) return !1;
        let n = L(e);
        if (null != P[n]) {
            let {
                timeout: i
            } = P[n];
            return clearTimeout(i),
                function(e, t) {
                    let n = L(e),
                        {
                            setAt: i
                        } = P[n];
                    if (t === C.TimeoutCancelSource.UPDATE) {
                        var s, r;
                        let t = null !== (s = e.attachments) && void 0 !== s ? s : [],
                            n = null !== (r = e.embeds) && void 0 !== r ? r : [],
                            i = t.filter(e => (0, C.isMediaObscured)({
                                type: C.ObscuredMediaTypes.Attachment,
                                media: e
                            }, !0)),
                            a = n.filter(e => (0, C.isMediaObscured)({
                                type: C.ObscuredMediaTypes.Embed,
                                media: e
                            }, !0));
                        (0, C.trackExplicitMediaScanComplete)({
                            messageId: e.id,
                            channelId: e.channel_id,
                            numOfAttachments: t.length,
                            numOfEmbeds: n.length,
                            numOfExplicitAttachments: i.length,
                            numOfExplicitEmbeds: a.length
                        })
                    }(0, C.trackScanTiming)(i, t)
                }(e, t), delete P[n], !0
        }
        return !1
    }
    let U = (e, t) => {
        if (0 !== e.length) {
            if (t) {
                (0, I.sendMultiChannelMessagesForScanning)(e);
                return
            }(0, I.sendMessagesForScanning)(e[0].channel_id, e.map(e => e.id))
        }
    };

    function w(e, t) {
        let {
            forceBatchScan: n = !1,
            jitter: i = !1
        } = null != t ? t : {}, s = (null == t ? void 0 : t.isMessageUpdate) ? e.filter(v.hasUnscannedAttachmentsOrEmbedsForTimeout) : e;
        s.forEach(e => {
            let t = L(e);
            null == P[t] && (_.default.increment({
                name: l.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE
            }), P[t] = {
                setAt: Date.now(),
                timeout: setTimeout(() => {
                    ! function(e) {
                        if (b(e, C.TimeoutCancelSource.TIMEOUT)) {
                            let t = m.default.getMessage(e.channel_id, e.id),
                                {
                                    attachmentIds: n,
                                    embedIds: i
                                } = (0, v.getUnscannedAttachmentsAndEmbedIdsForTimeout)(t);
                            (0, C.trackScanningTimedOut)({
                                channelId: e.channel_id,
                                messageId: e.id,
                                attachmentIds: n,
                                embedIds: i
                            }), u.default.dispatch({
                                type: "MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT",
                                messageId: e.id,
                                channelId: e.channel_id
                            })
                        }
                    }(e)
                }, O)
            })
        });
        let r = n || new Set(s.map(e => e.channel_id)).size > 1;
        i ? setTimeout(() => {
            let e = s.filter(e => null != P[L(e)]);
            U(e, r)
        }, Math.random() * D) : U(s, r)
    }

    function k(e) {
        let t = e.reduce((e, t) => {
            var n, s, r, a, o, l, u, d;
            null == e[t.channel_id] && (e[t.channel_id] = {
                numOfAttachments: 0,
                numOfAttachmentsPendingScan: 0,
                numOfEmbeds: 0,
                numOfEmbedsPendingScan: 0
            });
            let c = e[t.channel_id];
            return c.numOfAttachments += null !== (o = null === (n = t.attachments) || void 0 === n ? void 0 : n.length) && void 0 !== o ? o : 0, c.numOfEmbeds += null !== (l = null === (s = t.embeds) || void 0 === s ? void 0 : s.length) && void 0 !== l ? l : 0, c.numOfAttachmentsPendingScan += null !== (u = null === (r = t.attachments) || void 0 === r ? void 0 : r.filter(e => (0, v.shouldScanAttachment)(e, i)).length) && void 0 !== u ? u : 0, c.numOfEmbedsPendingScan += null !== (d = null == t ? void 0 : null === (a = t.embeds) || void 0 === a ? void 0 : a.filter(e => (0, v.shouldScanEmbed)(e, i)).length) && void 0 !== d ? d : 0, {
                ...e,
                [t.channel_id]: c
            }
        }, {});
        return t
    }

    function V(e, t) {
        let {
            messagesPendingScan: n,
            attributesByChannelId: i
        } = function(e) {
            let t = e.filter(e => (0, v.hasAttachmentsOrEmbeds)(e) && (0, C.shouldRedactExplicitContent)(e)),
                n = e.map(e => {
                    if (null != e && "referenced_message" in e && null != e.referenced_message && (0, v.hasAttachmentsOrEmbeds)(e.referenced_message) && (0, C.shouldRedactExplicitContent)(e.referenced_message)) return e.referenced_message
                }).filter(function(e) {
                    return null != e
                });
            n.length > 0 && (t = [...t, ...n]);
            let i = o(t, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
                s = i.filter(e => (0, v.hasAttachmentsOrEmbedsRequiringScan)(e));
            return {
                messagesPendingScan: s,
                attributesByChannelId: k(i)
            }
        }(e);
        return T.default.entries(i).forEach(e => {
            let [t, n] = e;
            (0, C.trackExplicitMediaRedactableMessagedLoaded)({
                channelId: t,
                numOfAttachments: n.numOfAttachments,
                numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                numOfEmbeds: n.numOfEmbeds,
                numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
            })
        }), !!(n.length > 0) && (w(n, t), !0)
    }

    function G(e) {
        var t, n, i, s, r, a;
        let {
            message: o
        } = e;
        if (!(0, A.isEligibleForExplicitMediaRedaction)() || null == o.channel_id || null == o.id || (null === (t = o.author) || void 0 === t ? void 0 : t.id) === E.default.getId() || null == o.embeds && null == o.attachments || (null === (n = o.embeds) || void 0 === n ? void 0 : n.length) === 0 && (null === (i = o.attachments) || void 0 === i ? void 0 : i.length) === 0) return !1;
        if (!(0, v.hasUnscannedAttachmentsOrEmbedsForTimeout)(o)) {
            let e = null !== (a = null !== (r = m.default.getMessage(o.channel_id, o.id)) && void 0 !== r ? r : y.default.getMessage(o.id, o.channel_id)) && void 0 !== a ? a : null === (s = f.default.getMessage(o.channel_id, o.id)) || void 0 === s ? void 0 : s.message;
            null != e && !(0, v.hasUnscannedAttachmentsOrEmbedsForTimeout)((0, c.updateMessageRecord)(e, o)) && b(e, C.TimeoutCancelSource.UPDATE)
        }
        let l = p.default.getChannelId(),
            u = h.default.getCurrentSidebarChannelId(l),
            d = o.channel_id === l || o.channel_id === u;
        if (!d) return !1;
        let _ = m.default.getMessage(o.channel_id, o.id);
        return null != _ && V([_], {
            isMessageUpdate: !0
        })
    }

    function F(e) {
        var t, n;
        let {
            channelId: i,
            message: s,
            optimistic: r,
            isPushNotification: a
        } = e;
        if (!(0, A.isEligibleForExplicitMediaRedaction)() || r || a || null == i || (null === (t = s.author) || void 0 === t ? void 0 : t.id) === E.default.getId()) return !1;
        let o = p.default.getChannelId(),
            l = h.default.getCurrentSidebarChannelId(o),
            u = i === o || i === l,
            d = g.default.getChannel(i);
        if (!u) return !1;
        let c = null === (n = null == d ? void 0 : d.isPrivate()) || void 0 === n || n,
            _ = (null == d ? void 0 : d.memberCount) == null || (null == d ? void 0 : d.memberCount) > 100;
        return V([s], {
            jitter: c && _
        })
    }

    function x(e) {
        let {
            channelId: t,
            messages: n
        } = e;
        if (!(0, A.isEligibleForExplicitMediaRedaction)() || null == t || null == n) return !1;
        let i = p.default.getChannelId(),
            s = h.default.getCurrentSidebarChannelId(i),
            r = t === i || t === s;
        return !!r && V(n)
    }

    function B(e) {
        let {
            messages: t
        } = e;
        if (!(0, A.isEligibleForExplicitMediaRedaction)() || null == t) return !1;
        let n = r(t),
            i = o(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id);
        return V(i)
    }

    function H(e) {
        let {
            guildId: t,
            threads: n
        } = e;
        if (null == n || !(0, A.isEligibleForExplicitMediaRedaction)()) return !1;
        let i = S.default.getGuildId() === t;
        if (!i) return !1;
        let s = T.default.keys(n).map(e => n[e].first_message);
        return V(s)
    }

    function Y(e) {
        let {
            guildId: t,
            firstMessages: n
        } = e;
        if (null == n || !(0, A.isEligibleForExplicitMediaRedaction)()) return !1;
        let i = S.default.getGuildId() === t;
        return !!i && V(n, {
            forceBatchScan: !0
        })
    }

    function K(e) {
        let {
            channelId: t
        } = e;
        if (null == t || !(0, A.isEligibleForExplicitMediaRedaction)()) return !1;
        let n = t === p.default.getChannelId();
        return !!n && z(t)
    }

    function j(e) {
        let {
            settings: t,
            local: n
        } = e;
        if (!(0, A.isEligibleForExplicitMediaRedaction)() || !n || t.type !== R.UserSettingsTypes.PRELOADED_USER_SETTINGS) return !1;
        let i = p.default.getChannelId();
        return null != i && z(i)
    }

    function W(e) {
        let {
            channelId: t,
            chatOpen: n
        } = e;
        return !!(0, A.isEligibleForExplicitMediaRedaction)() && !!n && z(t)
    }

    function z(e) {
        let t = m.default.getMessages(e);
        return 0 !== t.length && function(e) {
            let {
                messagesPendingScan: t,
                attributesByChannelId: n
            } = function(e) {
                let t = e.filter(e => (0, v.hasAttachmentsOrEmbeds)(e) && (0, C.shouldRedactExplicitContent)(e)),
                    n = e.map(e => {
                        if (N.MessageTypesWithLazyLoadedReferences.has(e.type) && null != e.messageReference) {
                            let t = f.default.getMessageByReference(e.messageReference);
                            if (t.state === f.ReferencedMessageState.LOADED && null != t.message && (0, v.hasAttachmentsOrEmbeds)(t.message) && (0, C.shouldRedactExplicitContent)(t.message)) return t.message
                        }
                    }).filter(function(e) {
                        return null != e
                    });
                n.length > 0 && (t = [...t, ...n]);
                let i = o(t, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
                    s = i.filter(e => (0, v.hasAttachmentsOrEmbedsRequiringScan)(e));
                return {
                    messagesPendingScan: s,
                    attributesByChannelId: k(i)
                }
            }(e);
            return T.default.entries(n).forEach(e => {
                let [t, n] = e;
                (0, C.trackExplicitMediaRedactableMessagedLoaded)({
                    channelId: t,
                    numOfAttachments: n.numOfAttachments,
                    numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                    numOfEmbeds: n.numOfEmbeds,
                    numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
                })
            }), !!(t.length > 0) && (w(t), !0)
        }(t)
    }
    async function q() {
        if (!(0, A.isEligibleForExplicitMediaRedaction)()) return;
        let {
            body: e
        } = await (0, I.fetchValidContentScanVersion)();
        i = e.version
    }
    class X extends d.default {
        constructor(...e) {
            super(...e), this.actions = {
                LOAD_MESSAGES_SUCCESS: x,
                LOAD_FORUM_POSTS: H,
                LOAD_THREADS_SUCCESS: Y,
                LOAD_ARCHIVED_THREADS_SUCCESS: Y,
                MESSAGE_CREATE: F,
                MESSAGE_UPDATE: G,
                LOGOUT: M,
                SEARCH_FINISH: B,
                MOD_VIEW_SEARCH_FINISH: B,
                CHANNEL_SELECT: K,
                LOAD_PINNED_MESSAGES_SUCCESS: B,
                USER_SETTINGS_PROTO_UPDATE: j,
                CHANNEL_RTC_UPDATE_CHAT_OPEN: W,
                POST_CONNECTION_OPEN: q
            }
        }
    }
    var Q = new X
}