function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MAX_TIMEOUT_FOR_JITTER: function() {
            return G
        },
        MESSAGE_SCAN_TIMEOUT: function() {
            return k
        }
    });
    var r = n("952639"),
        o = n.n(r),
        i = n("605906"),
        a = n.n(i),
        u = n("767556"),
        s = n("629815"),
        l = n("807471"),
        c = n("273829"),
        f = n("35911"),
        d = n("299794"),
        _ = n("217014"),
        E = n("248579"),
        p = n("935741"),
        m = n("204394"),
        y = n("894288"),
        I = n("63116"),
        h = n("523018"),
        O = n("690944"),
        T = n("685799"),
        S = n("688221"),
        v = n("411372"),
        g = n("497625"),
        A = n("281767"),
        b = n("382021");

    function N(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function R(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function C(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function P(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function D(e) {
        return (D = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function L(e, t) {
        return (L = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function M(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || w(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function U(e) {
        return function(e) {
            if (Array.isArray(e)) return N(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || w(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function w(e, t) {
        if (e) {
            if ("string" == typeof e) return N(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return N(e, t)
        }
    }
    var k = 3e3,
        G = 800,
        B = {},
        j = void 0;

    function F(e) {
        return "".concat(e.channel_id, ":").concat(e.id)
    }

    function V() {
        Object.values(B).forEach(function(e) {
            clearTimeout(e.timeout)
        }), B = {}
    }

    function H(e, t) {
        if (null == e.id || null == e.channel_id) return !1;
        var n = F(e);
        return null != B[n] && (clearTimeout(B[n].timeout), function(e, t) {
            var n = B[F(e)].setAt;
            if (t === v.TimeoutCancelSource.UPDATE) {
                var r, o, i = null !== (r = e.attachments) && void 0 !== r ? r : [],
                    a = null !== (o = e.embeds) && void 0 !== o ? o : [],
                    u = i.filter(function(e) {
                        return (0, v.isMediaObscured)({
                            type: v.ObscuredMediaTypes.Attachment,
                            media: e
                        }, !0)
                    }),
                    s = a.filter(function(e) {
                        return (0, v.isMediaObscured)({
                            type: v.ObscuredMediaTypes.Embed,
                            media: e
                        }, !0)
                    });
                (0, v.trackExplicitMediaScanComplete)({
                    messageId: e.id,
                    channelId: e.channel_id,
                    numOfAttachments: i.length,
                    numOfEmbeds: a.length,
                    numOfExplicitAttachments: u.length,
                    numOfExplicitEmbeds: s.length
                })
            }(0, v.trackScanTiming)(n, t)
        }(e, t), delete B[n], !0)
    }
    var x = function(e, t) {
        if (0 !== e.length) {
            if (t) {
                (0, T.sendMultiChannelMessagesForScanning)(e);
                return
            }(0, T.sendMessagesForScanning)(e[0].channel_id, e.map(function(e) {
                return e.id
            }))
        }
    };

    function Y(e, t) {
        var n = null != t ? t : {},
            r = n.forceBatchScan,
            o = n.jitter,
            i = (null == t ? void 0 : t.isMessageUpdate) ? e.filter(O.hasUnscannedAttachmentsOrEmbedsForTimeout) : e;
        i.forEach(function(e) {
            var t = F(e);
            null == B[t] && (f.default.increment({
                name: u.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE
            }), B[t] = {
                setAt: Date.now(),
                timeout: setTimeout(function() {
                    ! function(e) {
                        if (H(e, v.TimeoutCancelSource.TIMEOUT)) {
                            var t = m.default.getMessage(e.channel_id, e.id),
                                n = (0, O.getUnscannedAttachmentsAndEmbedIdsForTimeout)(t),
                                r = n.attachmentIds,
                                o = n.embedIds;
                            (0, v.trackScanningTimedOut)({
                                channelId: e.channel_id,
                                messageId: e.id,
                                attachmentIds: r,
                                embedIds: o
                            }), s.default.dispatch({
                                type: "MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT",
                                messageId: e.id,
                                channelId: e.channel_id
                            })
                        }
                    }(e)
                }, k)
            })
        });
        var a = void 0 !== r && r || new Set(i.map(function(e) {
            return e.channel_id
        })).size > 1;
        void 0 !== o && o ? setTimeout(function() {
            x(i.filter(function(e) {
                return null != B[F(e)]
            }), a)
        }, Math.random() * G) : x(i, a)
    }

    function W(e) {
        return e.reduce(function(e, t) {
            null == e[t.channel_id] && (e[t.channel_id] = {
                numOfAttachments: 0,
                numOfAttachmentsPendingScan: 0,
                numOfEmbeds: 0,
                numOfEmbedsPendingScan: 0
            });
            var n, r, o, i, a, u, s, l, c, f, d = e[t.channel_id];
            return d.numOfAttachments += null !== (s = null === (o = t.attachments) || void 0 === o ? void 0 : o.length) && void 0 !== s ? s : 0, d.numOfEmbeds += null !== (l = null === (i = t.embeds) || void 0 === i ? void 0 : i.length) && void 0 !== l ? l : 0, d.numOfAttachmentsPendingScan += null !== (c = null === (a = t.attachments) || void 0 === a ? void 0 : a.filter(function(e) {
                return (0, O.shouldScanAttachment)(e, j)
            }).length) && void 0 !== c ? c : 0, d.numOfEmbedsPendingScan += null !== (f = null == t ? void 0 : null === (u = t.embeds) || void 0 === u ? void 0 : u.filter(function(e) {
                return (0, O.shouldScanEmbed)(e, j)
            }).length) && void 0 !== f ? f : 0, n = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        P(e, t, n[t])
                    })
                }
                return e
            }({}, e), r = null != (r = P({}, t.channel_id, d)) ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(r)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
            }), n
        }, {})
    }

    function K(e, t) {
        var n, r, o, i, u = (r = (n = e).filter(function(e) {
                return (0, O.hasAttachmentsOrEmbeds)(e) && (0, v.shouldRedactExplicitContent)(e)
            }), (o = n.map(function(e) {
                if (null != e && "referenced_message" in e && null != e.referenced_message && (0, O.hasAttachmentsOrEmbeds)(e.referenced_message) && (0, v.shouldRedactExplicitContent)(e.referenced_message)) return e.referenced_message
            }).filter(function(e) {
                return null != e
            })).length > 0 && (r = U(r).concat(U(o))), {
                messagesPendingScan: (i = a()(r, function(e, t) {
                    return e.id === t.id && e.channel_id === t.channel_id
                })).filter(function(e) {
                    return (0, O.hasAttachmentsOrEmbedsRequiringScan)(e)
                }),
                attributesByChannelId: W(i)
            }),
            s = u.messagesPendingScan,
            l = u.attributesByChannelId;
        return h.default.entries(l).forEach(function(e) {
            var t = M(e, 2),
                n = t[0],
                r = t[1];
            (0, v.trackExplicitMediaRedactableMessagedLoaded)({
                channelId: n,
                numOfAttachments: r.numOfAttachments,
                numOfAttachmentsPendingScan: r.numOfAttachmentsPendingScan,
                numOfEmbeds: r.numOfEmbeds,
                numOfEmbedsPendingScan: r.numOfEmbedsPendingScan
            })
        }), !!(s.length > 0) && (Y(s, t), !0)
    }

    function z(e) {
        var t = e.message;
        if (!(0, S.isEligibleForExplicitMediaRedaction)() || null == t.channel_id || null == t.id || (null === (n = t.author) || void 0 === n ? void 0 : n.id) === _.default.getId() || null == t.embeds && null == t.attachments || (null === (r = t.embeds) || void 0 === r ? void 0 : r.length) === 0 && (null === (o = t.attachments) || void 0 === o ? void 0 : o.length) === 0) return !1;
        if (!(0, O.hasUnscannedAttachmentsOrEmbedsForTimeout)(t)) {
            var n, r, o, i, a, u, s = null !== (u = null !== (a = m.default.getMessage(t.channel_id, t.id)) && void 0 !== a ? a : g.default.getMessage(t.id, t.channel_id)) && void 0 !== u ? u : null === (i = d.default.getMessage(t.channel_id, t.id)) || void 0 === i ? void 0 : i.message;
            null != s && !(0, O.hasUnscannedAttachmentsOrEmbedsForTimeout)((0, c.updateMessageRecord)(s, t)) && H(s, v.TimeoutCancelSource.UPDATE)
        }
        var l = y.default.getChannelId(),
            f = E.default.getCurrentSidebarChannelId(l);
        if (!(t.channel_id === l || t.channel_id === f)) return !1;
        var p = m.default.getMessage(t.channel_id, t.id);
        return null != p && K([p], {
            isMessageUpdate: !0
        })
    }

    function X(e) {
        var t, n, r = e.channelId,
            o = e.message,
            i = e.optimistic,
            a = e.isPushNotification;
        if (!(0, S.isEligibleForExplicitMediaRedaction)() || i || a || null == r || (null === (t = o.author) || void 0 === t ? void 0 : t.id) === _.default.getId()) return !1;
        var u = y.default.getChannelId(),
            s = E.default.getCurrentSidebarChannelId(u),
            l = r === u || r === s,
            c = p.default.getChannel(r);
        if (!l) return !1;
        var f = null === (n = null == c ? void 0 : c.isPrivate()) || void 0 === n || n,
            d = (null == c ? void 0 : c.memberCount) == null || (null == c ? void 0 : c.memberCount) > 100;
        return K([o], {
            jitter: f && d
        })
    }

    function q(e) {
        var t = e.channelId,
            n = e.messages;
        if (!(0, S.isEligibleForExplicitMediaRedaction)() || null == t || null == n) return !1;
        var r = y.default.getChannelId(),
            o = E.default.getCurrentSidebarChannelId(r);
        return (t === r || t === o) && K(n)
    }

    function Q(e) {
        var t = e.messages;
        if (!(0, S.isEligibleForExplicitMediaRedaction)() || null == t) return !1;
        var n = o()(t);
        return K(a()(n, function(e, t) {
            return e.id === t.id && e.channel_id === t.channel_id
        }))
    }

    function J(e) {
        var t = e.guildId,
            n = e.threads;
        return !!(null != n && (0, S.isEligibleForExplicitMediaRedaction)()) && I.default.getGuildId() === t && K(h.default.keys(n).map(function(e) {
            return n[e].first_message
        }))
    }

    function Z(e) {
        var t = e.guildId,
            n = e.firstMessages;
        return !!(null != n && (0, S.isEligibleForExplicitMediaRedaction)()) && I.default.getGuildId() === t && K(n, {
            forceBatchScan: !0
        })
    }

    function $(e) {
        var t = e.channelId;
        return !!(null != t && (0, S.isEligibleForExplicitMediaRedaction)()) && t === y.default.getChannelId() && en(t)
    }

    function ee(e) {
        var t = e.settings,
            n = e.local;
        if (!(0, S.isEligibleForExplicitMediaRedaction)() || !n || t.type !== b.UserSettingsTypes.PRELOADED_USER_SETTINGS) return !1;
        var r = y.default.getChannelId();
        return null != r && en(r)
    }

    function et(e) {
        var t = e.channelId,
            n = e.chatOpen;
        return !!(0, S.isEligibleForExplicitMediaRedaction)() && !!n && en(t)
    }

    function en(e) {
        var t, n, r, o, i, u, s, l = m.default.getMessages(e);
        if (0 === l.length) return !1;
        return u = (i = (n = (t = l).filter(function(e) {
            return (0, O.hasAttachmentsOrEmbeds)(e) && (0, v.shouldRedactExplicitContent)(e)
        }), (r = t.map(function(e) {
            if (A.MessageTypesWithLazyLoadedReferences.has(e.type) && null != e.messageReference) {
                var t = d.default.getMessageByReference(e.messageReference);
                if (t.state === d.ReferencedMessageState.LOADED && null != t.message && (0, O.hasAttachmentsOrEmbeds)(t.message) && (0, v.shouldRedactExplicitContent)(t.message)) return t.message
            }
        }).filter(function(e) {
            return null != e
        })).length > 0 && (n = U(n).concat(U(r))), {
            messagesPendingScan: (o = a()(n, function(e, t) {
                return e.id === t.id && e.channel_id === t.channel_id
            })).filter(function(e) {
                return (0, O.hasAttachmentsOrEmbedsRequiringScan)(e)
            }),
            attributesByChannelId: W(o)
        })).messagesPendingScan, s = i.attributesByChannelId, h.default.entries(s).forEach(function(e) {
            var t = M(e, 2),
                n = t[0],
                r = t[1];
            (0, v.trackExplicitMediaRedactableMessagedLoaded)({
                channelId: n,
                numOfAttachments: r.numOfAttachments,
                numOfAttachmentsPendingScan: r.numOfAttachmentsPendingScan,
                numOfEmbeds: r.numOfEmbeds,
                numOfEmbedsPendingScan: r.numOfEmbedsPendingScan
            })
        }), !!(u.length > 0) && (Y(u), !0)
    }

    function er() {
        return eo.apply(this, arguments)
    }

    function eo() {
        var e;
        return e = function() {
            return function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            }(this, function(e) {
                switch (e.label) {
                    case 0:
                        if (!(0, S.isEligibleForExplicitMediaRedaction)()) return [2];
                        return [4, (0, T.fetchValidContentScanVersion)()];
                    case 1:
                        return j = e.sent().body.version, [2]
                }
            })
        }, (eo = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    C(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    C(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }
    var ei = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && L(e, t)
        }(o, e);
        var t, n, r = (t = o, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = D(t);
            if (n) {
                var a = D(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : R(e)
        });

        function o() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, o), e = r.apply(this, arguments), P(R(e), "actions", {
                LOAD_MESSAGES_SUCCESS: q,
                LOAD_FORUM_POSTS: J,
                LOAD_THREADS_SUCCESS: Z,
                LOAD_ARCHIVED_THREADS_SUCCESS: Z,
                MESSAGE_CREATE: X,
                MESSAGE_UPDATE: z,
                LOGOUT: V,
                SEARCH_FINISH: Q,
                MOD_VIEW_SEARCH_FINISH: Q,
                CHANNEL_SELECT: $,
                LOAD_PINNED_MESSAGES_SUCCESS: Q,
                USER_SETTINGS_PROTO_UPDATE: ee,
                CHANNEL_RTC_UPDATE_CHAT_OPEN: et,
                POST_CONNECTION_OPEN: er
            }), e
        }
        return o
    }(l.default);
    t.default = new ei
}