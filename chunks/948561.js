function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        MAX_TIMEOUT_FOR_JITTER: function() {
            return v
        },
        MESSAGE_SCAN_TIMEOUT: function() {
            return D
        }
    }), n("47120"), n("724458");
    var r = n("952639"),
        s = n.n(r),
        a = n("605906"),
        o = n.n(a),
        l = n("286379"),
        u = n("570140"),
        d = n("147913"),
        _ = n("786761"),
        c = n("797614"),
        E = n("869765"),
        I = n("314897"),
        T = n("433355"),
        f = n("592125"),
        S = n("375954"),
        h = n("944486"),
        A = n("914010"),
        m = n("709054"),
        N = n("93735"),
        p = n("522664"),
        O = n("651530"),
        R = n("163268"),
        C = n("735020"),
        g = n("981631"),
        L = n("526761");
    let D = 3e3,
        v = 800,
        M = {};

    function y(e) {
        return "".concat(e.channel_id, ":").concat(e.id)
    }

    function P() {
        Object.values(M).forEach(e => {
            let {
                timeout: t
            } = e;
            clearTimeout(t)
        }), M = {}
    }

    function U(e, t) {
        if (null == e.id || null == e.channel_id) return !1;
        let n = y(e);
        if (null != M[n]) {
            let {
                timeout: i
            } = M[n];
            return clearTimeout(i),
                function(e, t) {
                    let {
                        setAt: n
                    } = M[y(e)];
                    if (t === R.TimeoutCancelSource.UPDATE) {
                        var i, r;
                        let t = null !== (i = e.attachments) && void 0 !== i ? i : [],
                            n = null !== (r = e.embeds) && void 0 !== r ? r : [],
                            s = t.filter(e => (0, R.isMediaObscured)({
                                type: R.ObscuredMediaTypes.Attachment,
                                media: e
                            }, !0)),
                            a = n.filter(e => (0, R.isMediaObscured)({
                                type: R.ObscuredMediaTypes.Embed,
                                media: e
                            }, !0));
                        (0, R.trackExplicitMediaScanComplete)({
                            messageId: e.id,
                            channelId: e.channel_id,
                            numOfAttachments: t.length,
                            numOfEmbeds: n.length,
                            numOfExplicitAttachments: s.length,
                            numOfExplicitEmbeds: a.length
                        })
                    }(0, R.trackScanTiming)(n, t)
                }(e, t), delete M[n], !0
        }
        return !1
    }
    let b = (e, t) => {
        if (0 !== e.length) {
            if (t) {
                (0, p.sendMultiChannelMessagesForScanning)(e);
                return
            }(0, p.sendMessagesForScanning)(e[0].channel_id, e.map(e => e.id))
        }
    };

    function G(e, t) {
        let {
            forceBatchScan: n = !1,
            jitter: i = !1
        } = null != t ? t : {}, r = (null == t ? void 0 : t.isMessageUpdate) ? e.filter(N.hasUnscannedAttachmentsOrEmbedsForTimeout) : e;
        r.forEach(e => {
            let t = y(e);
            null == M[t] && (c.default.increment({
                name: l.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE
            }), M[t] = {
                setAt: Date.now(),
                timeout: setTimeout(() => {
                    ! function(e) {
                        if (U(e, R.TimeoutCancelSource.TIMEOUT)) {
                            let t = S.default.getMessage(e.channel_id, e.id),
                                {
                                    attachmentIds: n,
                                    embedIds: i
                                } = (0, N.getUnscannedAttachmentsAndEmbedIdsForTimeout)(t);
                            (0, R.trackScanningTimedOut)({
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
                }, D)
            })
        });
        let s = n || new Set(r.map(e => e.channel_id)).size > 1;
        i ? setTimeout(() => {
            b(r.filter(e => null != M[y(e)]), s)
        }, Math.random() * v) : b(r, s)
    }

    function w(e) {
        return e.reduce((e, t) => {
            var n, r, s, a, o, l, u, d;
            null == e[t.channel_id] && (e[t.channel_id] = {
                numOfAttachments: 0,
                numOfAttachmentsPendingScan: 0,
                numOfEmbeds: 0,
                numOfEmbedsPendingScan: 0
            });
            let _ = e[t.channel_id];
            return _.numOfAttachments += null !== (o = null === (n = t.attachments) || void 0 === n ? void 0 : n.length) && void 0 !== o ? o : 0, _.numOfEmbeds += null !== (l = null === (r = t.embeds) || void 0 === r ? void 0 : r.length) && void 0 !== l ? l : 0, _.numOfAttachmentsPendingScan += null !== (u = null === (s = t.attachments) || void 0 === s ? void 0 : s.filter(e => (0, N.shouldScanAttachment)(e, i)).length) && void 0 !== u ? u : 0, _.numOfEmbedsPendingScan += null !== (d = null == t ? void 0 : null === (a = t.embeds) || void 0 === a ? void 0 : a.filter(e => (0, N.shouldScanEmbed)(e, i)).length) && void 0 !== d ? d : 0, {
                ...e,
                [t.channel_id]: _
            }
        }, {})
    }

    function B(e, t) {
        let {
            messagesPendingScan: n,
            attributesByChannelId: i
        } = function(e) {
            let t = e.filter(e => (0, N.hasAttachmentsOrEmbeds)(e) && (0, R.shouldRedactExplicitContent)(e)),
                n = e.map(e => {
                    if (null != e && "referenced_message" in e && null != e.referenced_message && (0, N.hasAttachmentsOrEmbeds)(e.referenced_message) && (0, R.shouldRedactExplicitContent)(e.referenced_message)) return e.referenced_message
                }).filter(function(e) {
                    return null != e
                });
            n.length > 0 && (t = [...t, ...n]);
            let i = o()(t, (e, t) => e.id === t.id && e.channel_id === t.channel_id);
            return {
                messagesPendingScan: i.filter(e => (0, N.hasAttachmentsOrEmbedsRequiringScan)(e)),
                attributesByChannelId: w(i)
            }
        }(e);
        return m.default.entries(i).forEach(e => {
            let [t, n] = e;
            (0, R.trackExplicitMediaRedactableMessagedLoaded)({
                channelId: t,
                numOfAttachments: n.numOfAttachments,
                numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                numOfEmbeds: n.numOfEmbeds,
                numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
            })
        }), !!(n.length > 0) && (G(n, t), !0)
    }

    function k(e) {
        var t, n, i, r, s, a;
        let {
            message: o
        } = e;
        if (!(0, O.isEligibleForExplicitMediaRedaction)() || null == o.channel_id || null == o.id || (null === (t = o.author) || void 0 === t ? void 0 : t.id) === I.default.getId() || null == o.embeds && null == o.attachments || (null === (n = o.embeds) || void 0 === n ? void 0 : n.length) === 0 && (null === (i = o.attachments) || void 0 === i ? void 0 : i.length) === 0) return !1;
        if (!(0, N.hasUnscannedAttachmentsOrEmbedsForTimeout)(o)) {
            let e = null !== (a = null !== (s = S.default.getMessage(o.channel_id, o.id)) && void 0 !== s ? s : C.default.getMessage(o.id, o.channel_id)) && void 0 !== a ? a : null === (r = E.default.getMessage(o.channel_id, o.id)) || void 0 === r ? void 0 : r.message;
            null != e && !(0, N.hasUnscannedAttachmentsOrEmbedsForTimeout)((0, _.updateMessageRecord)(e, o)) && U(e, R.TimeoutCancelSource.UPDATE)
        }
        let l = h.default.getChannelId(),
            u = T.default.getCurrentSidebarChannelId(l);
        if (!(o.channel_id === l || o.channel_id === u)) return !1;
        let d = S.default.getMessage(o.channel_id, o.id);
        return null != d && B([d], {
            isMessageUpdate: !0
        })
    }

    function V(e) {
        var t, n;
        let {
            channelId: i,
            message: r,
            optimistic: s,
            isPushNotification: a
        } = e;
        if (!(0, O.isEligibleForExplicitMediaRedaction)() || s || a || null == i || (null === (t = r.author) || void 0 === t ? void 0 : t.id) === I.default.getId()) return !1;
        let o = h.default.getChannelId(),
            l = T.default.getCurrentSidebarChannelId(o),
            u = i === o || i === l,
            d = f.default.getChannel(i);
        if (!u) return !1;
        let _ = null === (n = null == d ? void 0 : d.isPrivate()) || void 0 === n || n,
            c = (null == d ? void 0 : d.memberCount) == null || (null == d ? void 0 : d.memberCount) > 100;
        return B([r], {
            jitter: _ && c
        })
    }

    function F(e) {
        let {
            channelId: t,
            messages: n
        } = e;
        if (!(0, O.isEligibleForExplicitMediaRedaction)() || null == t || null == n) return !1;
        let i = h.default.getChannelId(),
            r = T.default.getCurrentSidebarChannelId(i);
        return (t === i || t === r) && B(n)
    }

    function x(e) {
        let {
            messages: t
        } = e;
        if (!(0, O.isEligibleForExplicitMediaRedaction)() || null == t) return !1;
        let n = s()(t);
        return B(o()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id))
    }

    function H(e) {
        let {
            guildId: t,
            threads: n
        } = e;
        return !!(null != n && (0, O.isEligibleForExplicitMediaRedaction)()) && A.default.getGuildId() === t && B(m.default.keys(n).map(e => n[e].first_message))
    }

    function Y(e) {
        let {
            guildId: t,
            firstMessages: n
        } = e;
        return !!(null != n && (0, O.isEligibleForExplicitMediaRedaction)()) && A.default.getGuildId() === t && B(n, {
            forceBatchScan: !0
        })
    }

    function j(e) {
        let {
            channelId: t
        } = e;
        return !!(null != t && (0, O.isEligibleForExplicitMediaRedaction)()) && t === h.default.getChannelId() && z(t)
    }

    function W(e) {
        let {
            settings: t,
            local: n
        } = e;
        if (!(0, O.isEligibleForExplicitMediaRedaction)() || !n || t.type !== L.UserSettingsTypes.PRELOADED_USER_SETTINGS) return !1;
        let i = h.default.getChannelId();
        return null != i && z(i)
    }

    function K(e) {
        let {
            channelId: t,
            chatOpen: n
        } = e;
        return !!(0, O.isEligibleForExplicitMediaRedaction)() && !!n && z(t)
    }

    function z(e) {
        let t = S.default.getMessages(e);
        return 0 !== t.length && function(e) {
            let {
                messagesPendingScan: t,
                attributesByChannelId: n
            } = function(e) {
                let t = e.filter(e => (0, N.hasAttachmentsOrEmbeds)(e) && (0, R.shouldRedactExplicitContent)(e)),
                    n = e.map(e => {
                        if (g.MessageTypesWithLazyLoadedReferences.has(e.type) && null != e.messageReference) {
                            let t = E.default.getMessageByReference(e.messageReference);
                            if (t.state === E.ReferencedMessageState.LOADED && null != t.message && (0, N.hasAttachmentsOrEmbeds)(t.message) && (0, R.shouldRedactExplicitContent)(t.message)) return t.message
                        }
                    }).filter(function(e) {
                        return null != e
                    });
                n.length > 0 && (t = [...t, ...n]);
                let i = o()(t, (e, t) => e.id === t.id && e.channel_id === t.channel_id);
                return {
                    messagesPendingScan: i.filter(e => (0, N.hasAttachmentsOrEmbedsRequiringScan)(e)),
                    attributesByChannelId: w(i)
                }
            }(e);
            return m.default.entries(n).forEach(e => {
                let [t, n] = e;
                (0, R.trackExplicitMediaRedactableMessagedLoaded)({
                    channelId: t,
                    numOfAttachments: n.numOfAttachments,
                    numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                    numOfEmbeds: n.numOfEmbeds,
                    numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
                })
            }), !!(t.length > 0) && (G(t), !0)
        }(t)
    }
    async function X() {
        if (!(0, O.isEligibleForExplicitMediaRedaction)()) return;
        let {
            body: e
        } = await (0, p.fetchValidContentScanVersion)();
        i = e.version
    }
    class Q extends d.default {
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                LOAD_MESSAGES_SUCCESS: F,
                LOAD_FORUM_POSTS: H,
                LOAD_THREADS_SUCCESS: Y,
                LOAD_ARCHIVED_THREADS_SUCCESS: Y,
                MESSAGE_CREATE: V,
                MESSAGE_UPDATE: k,
                LOGOUT: P,
                SEARCH_FINISH: x,
                MOD_VIEW_SEARCH_FINISH: x,
                CHANNEL_SELECT: j,
                LOAD_PINNED_MESSAGES_SUCCESS: x,
                USER_SETTINGS_PROTO_UPDATE: W,
                CHANNEL_RTC_UPDATE_CHAT_OPEN: K,
                POST_CONNECTION_OPEN: X
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new Q
}