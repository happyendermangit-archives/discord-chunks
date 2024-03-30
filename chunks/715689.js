function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("571979"),
        o = n("864842"),
        i = n("340318"),
        a = n("796205"),
        u = n("83710"),
        s = n("947248"),
        l = n("374550"),
        c = n("281767");

    function f(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function E(e) {
        return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function p(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                _(e, t, n[t])
            })
        }
        return e
    }

    function m(e, t) {
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

    function y(e, t) {
        return (y = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var I = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && y(e, t)
        }(T, e);
        var t, n, o, I, h, O = (t = T, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = E(t);
            if (n) {
                var a = E(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : f(e)
        });

        function T(e) {
            var t, n, r, o;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, T), _(f(t = O.call(this)), "id", void 0), _(f(t), "type", void 0), _(f(t), "channel_id", void 0), _(f(t), "author", void 0), _(f(t), "bot", void 0), _(f(t), "content", void 0), _(f(t), "customRenderedContent", void 0), _(f(t), "attachments", void 0), _(f(t), "embeds", void 0), _(f(t), "pinned", void 0), _(f(t), "mentions", void 0), _(f(t), "mentionRoles", void 0), _(f(t), "mentionChannels", void 0), _(f(t), "mentionEveryone", void 0), _(f(t), "mentioned", void 0), _(f(t), "tts", void 0), _(f(t), "codedLinks", void 0), _(f(t), "giftCodes", void 0), _(f(t), "timestamp", void 0), _(f(t), "editedTimestamp", void 0), _(f(t), "state", void 0), _(f(t), "nonce", void 0), _(f(t), "blocked", void 0), _(f(t), "call", void 0), _(f(t), "webhookId", void 0), _(f(t), "reactions", void 0), _(f(t), "applicationId", void 0), _(f(t), "application", void 0), _(f(t), "activity", void 0), _(f(t), "activityInstance", void 0), _(f(t), "interaction", void 0), _(f(t), "interactionData", void 0), _(f(t), "interactionMetadata", void 0), _(f(t), "interactionError", void 0), _(f(t), "messageReference", void 0), _(f(t), "flags", void 0), _(f(t), "isSearchHit", void 0), _(f(t), "stickers", void 0), _(f(t), "stickerItems", void 0), _(f(t), "components", void 0), _(f(t), "roleSubscriptionData", void 0), _(f(t), "purchaseNotification", void 0), _(f(t), "poll", void 0), _(f(t), "loggingName", void 0), _(f(t), "referralTrialOfferId", void 0), _(f(t), "giftInfo", void 0), _(f(t), "colorString", void 0), _(f(t), "nick", void 0), t.id = e.id, t.type = e.type || c.MessageTypes.DEFAULT, t.channel_id = e.channel_id, t.author = e.author, t.content = e.content || "", t.customRenderedContent = e.customRenderedContent, t.attachments = e.attachments || [], t.embeds = e.embeds || [], t.mentions = e.mentions || [], t.mentionRoles = e.mentionRoles || [], t.mentionChannels = e.mentionChannels || [], t.mentioned = e.mentioned || !1, t.pinned = e.pinned || !1, t.mentionEveryone = e.mentionEveryone || !1, t.tts = e.tts || !1, t.codedLinks = e.codedLinks || [], t.giftCodes = e.giftCodes || [], t.timestamp = e.timestamp || new Date, t.editedTimestamp = e.editedTimestamp || null, t.state = e.state || c.MessageStates.SENT, t.nonce = e.nonce || null, t.blocked = e.blocked || !1, t.call = e.call || null, t.bot = e.bot || !1, t.webhookId = e.webhookId || null, t.reactions = e.reactions || [], t.applicationId = e.application_id || e.applicationId || null, t.application = e.application || null, t.activity = e.activity || null, t.activityInstance = e.activity_instance || e.activityInstance || null, t.messageReference = e.messageReference || null, t.flags = e.flags || 0, t.isSearchHit = e.hit || e.isSearchHit || !1, t.stickers = e.stickers || [], t.stickerItems = null !== (r = null !== (n = e.sticker_items) && void 0 !== n ? n : e.stickerItems) && void 0 !== r ? r : [], t.components = e.components, t.loggingName = e.loggingName || null, t.colorString = e.colorString, t.nick = e.nick, t.interaction = e.interaction || null, t.interactionData = e.interactionData || null, t.interactionMetadata = e.interactionMetadata || null, t.interactionError = e.interactionError || null, t.roleSubscriptionData = e.roleSubscriptionData, t.purchaseNotification = e.purchaseNotification, t.poll = e.poll, t.referralTrialOfferId = e.referralTrialOfferId || null, t.giftInfo = null !== (o = e.gift_info) && void 0 !== o ? o : e.giftInfo, t
        }
        return o = T, I = [{
            key: "isEdited",
            value: function() {
                return null != this.editedTimestamp
            }
        }, {
            key: "getChannelId",
            value: function() {
                return this.channel_id
            }
        }, {
            key: "getReaction",
            value: function(e) {
                return this.reactions.find(function(t) {
                    return (0, u.emojiEquals)(t.emoji, e)
                })
            }
        }, {
            key: "userHasReactedWithEmoji",
            value: function(e, t) {
                return this.reactions.some(function(n) {
                    if ((0, u.emojiEquals)(n.emoji, e)) return t && n.me || !t && n.me_burst
                })
            }
        }, {
            key: "addReaction",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.ReactionTypes.NORMAL,
                    o = -1,
                    s = this.reactions.map(function(s, c) {
                        if ((0, u.emojiEquals)(s.emoji, e)) {
                            if (o = c, r === a.ReactionTypes.BURST) {
                                if (t && s.me) return s;
                                var f = t && s.me_burst ? s.burst_count : s.burst_count + 1,
                                    d = null != s.burst_colors && s.burst_colors.length > 0 ? s.burst_colors : n;
                                s = m(p({}, s), {
                                    me_burst: !!t || s.me_burst,
                                    burst_count: f,
                                    count_details: m(p({}, s.count_details), {
                                        burst: f
                                    }),
                                    burst_colors: d,
                                    themedBurstColors: (0, i.buildPlatformedThemedEmojiColorPalette)({
                                        colors: d,
                                        shouldProcessMobileColors: (0, l.isIOS)()
                                    })
                                })
                            } else if (r === a.ReactionTypes.VOTE) {
                                var _, E, y = null !== (E = null === (_ = s.count_details) || void 0 === _ ? void 0 : _.vote) && void 0 !== E ? E : 0,
                                    I = t && s.me_vote ? y : y + 1;
                                s = m(p({}, s), {
                                    count_details: m(p({}, s.count_details), {
                                        vote: I
                                    }),
                                    me_vote: !!t || s.me_vote
                                })
                            } else {
                                if (t && s.me_burst) return s;
                                var h = t && s.me ? s.count : s.count + 1;
                                s = m(p({}, s), {
                                    count: h,
                                    count_details: m(p({}, s.count_details), {
                                        normal: h
                                    }),
                                    me: !!t || s.me
                                })
                            }
                        }
                        return s
                    });
                return -1 === o && (r === a.ReactionTypes.BURST ? s.push({
                    emoji: e,
                    me: !1,
                    me_burst: t,
                    count: 0,
                    count_details: {
                        burst: 1,
                        normal: 0
                    },
                    burst_count: 1,
                    burst_colors: n,
                    themedBurstColors: (0, i.buildPlatformedThemedEmojiColorPalette)({
                        colors: null != n ? n : [],
                        shouldProcessMobileColors: (0, l.isIOS)()
                    })
                }) : r === a.ReactionTypes.VOTE ? s.push({
                    emoji: e,
                    me: !1,
                    me_burst: !1,
                    me_vote: t,
                    count: 0,
                    count_details: {
                        burst: 0,
                        normal: 0,
                        vote: 1
                    },
                    burst_count: 0,
                    burst_colors: []
                }) : s.push({
                    emoji: e,
                    me: t,
                    me_burst: !1,
                    count: 1,
                    count_details: {
                        burst: 0,
                        normal: 1
                    },
                    burst_count: 0,
                    burst_colors: []
                })), this.set("reactions", s)
            }
        }, {
            key: "addReactionBatch",
            value: function(e, t) {
                return e.reduce(function(e, n) {
                    var r = n.users,
                        o = n.emoji;
                    return r.reduce(function(e, n) {
                        return e.addReaction(o, n === t)
                    }, e)
                }, this)
            }
        }, {
            key: "removeReaction",
            value: function(e) {
                var t, n, r, o, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.ReactionTypes.NORMAL,
                    l = -1,
                    c = this.reactions.map(function(t, n) {
                        if ((0, u.emojiEquals)(t.emoji, e)) {
                            if (s === a.ReactionTypes.BURST) {
                                var r = i && !t.me_burst ? t.burst_count : t.burst_count - 1;
                                t = m(p({}, t), {
                                    burst_count: r,
                                    me_burst: !i && t.me_burst,
                                    count_details: m(p({}, t.count_details), {
                                        burst: r
                                    })
                                })
                            } else if (s === a.ReactionTypes.VOTE) {
                                var o, c, f = null !== (c = null === (o = t.count_details) || void 0 === o ? void 0 : o.vote) && void 0 !== c ? c : 0,
                                    d = i && !t.me_vote ? f : f - 1;
                                t = m(p({}, t), {
                                    count_details: m(p({}, t.count_details), {
                                        vote: d
                                    }),
                                    me_vote: !i && t.me_vote
                                })
                            } else {
                                var _ = i && !t.me ? t.count : t.count - 1;
                                t = m(p({}, t), {
                                    count: _,
                                    me: !i && t.me,
                                    count_details: m(p({}, t.count_details), {
                                        normal: _
                                    })
                                })
                            }
                            l = n
                        }
                        return t
                    }),
                    f = null !== (t = c[l]) && void 0 !== t ? t : {},
                    d = f.count,
                    _ = f.burst_count,
                    E = f.count_details,
                    y = null !== (n = null == E ? void 0 : E.normal) && void 0 !== n ? n : 0,
                    I = null !== (r = null == E ? void 0 : E.burst) && void 0 !== r ? r : 0,
                    h = null !== (o = null == E ? void 0 : E.vote) && void 0 !== o ? o : 0;
                return -1 !== l && d <= 0 && _ <= 0 && y <= 0 && I <= 0 && h <= 0 && c.splice(l, 1), this.set("reactions", c)
            }
        }, {
            key: "removeReactionsForEmoji",
            value: function(e) {
                return this.set("reactions", this.reactions.filter(function(t) {
                    return !(0, u.emojiEquals)(t.emoji, e)
                }))
            }
        }, {
            key: "isSystemDM",
            value: function() {
                return this.author.isSystemUser()
            }
        }, {
            key: "hasFlag",
            value: function(e) {
                return (0, s.hasFlag)(this.flags, e)
            }
        }, {
            key: "isCommandType",
            value: function() {
                return this.type === c.MessageTypes.CHAT_INPUT_COMMAND || this.type === c.MessageTypes.CONTEXT_MENU_COMMAND
            }
        }, {
            key: "isPoll",
            value: function() {
                return null != this.poll
            }
        }, {
            key: "isInteractionPlaceholder",
            value: function() {
                return null != this.interaction && this.author.isNonUserBot()
            }
        }, {
            key: "canDeleteOwnMessage",
            value: function(e) {
                if (this.author.id === e) return !0;
                var t, n, o, i = null !== (o = null === (t = this.interactionMetadata) || void 0 === t ? void 0 : t.authorizing_integration_owners) && void 0 !== o ? o : {};
                return (null === (n = this.interactionMetadata) || void 0 === n ? void 0 : n.user_id) === e && 1 === Object.keys(i).length && r.ApplicationIntegrationType.USER_INSTALL in i
            }
        }, {
            key: "toJS",
            value: function() {
                return m(p({}, this), {
                    webkhook_id: this.webhookId,
                    edited_timestamp: this.editedTimestamp,
                    mention_everyone: this.mentionEveryone
                })
            }
        }, {
            key: "isFirstMessageInForumPost",
            value: function(e) {
                return this.id === this.channel_id && e.isForumPost()
            }
        }], d(o.prototype, I), h && d(o, h), T
    }(o.default);
    t.default = I
}