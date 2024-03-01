function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("424973"), n("808653"), n("702976");
    var s = n("891189"),
        i = n("666038"),
        r = n("584375"),
        a = n("875978"),
        o = n("432173"),
        d = n("568734"),
        u = n("773336"),
        l = n("49111");
    class f extends i.default {
        isEdited() {
            return null != this.editedTimestamp
        }
        getChannelId() {
            return this.channel_id
        }
        getReaction(e) {
            return this.reactions.find(t => (0, o.emojiEquals)(t.emoji, e))
        }
        userHasReactedWithEmoji(e, t) {
            return this.reactions.some(n => {
                if ((0, o.emojiEquals)(n.emoji, e)) return t && n.me || !t && n.me_burst
            })
        }
        addReaction(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.ReactionTypes.NORMAL,
                i = -1,
                d = this.reactions.map((d, l) => {
                    if ((0, o.emojiEquals)(d.emoji, e)) {
                        if (i = l, s === a.ReactionTypes.BURST) {
                            if (t && d.me) return d;
                            let e = t && d.me_burst ? d.burst_count : d.burst_count + 1,
                                s = null != d.burst_colors && d.burst_colors.length > 0 ? d.burst_colors : n;
                            d = {
                                ...d,
                                me_burst: !!t || d.me_burst,
                                burst_count: e,
                                count_details: {
                                    ...d.count_details,
                                    burst: e
                                },
                                burst_colors: s,
                                themedBurstColors: (0, r.buildPlatformedThemedEmojiColorPalette)({
                                    colors: s,
                                    shouldProcessMobileColors: (0, u.isIOS)()
                                })
                            }
                        } else if (s === a.ReactionTypes.VOTE) {
                            var f, _;
                            let e = null !== (_ = null === (f = d.count_details) || void 0 === f ? void 0 : f.vote) && void 0 !== _ ? _ : 0,
                                n = t && d.me_vote ? e : e + 1;
                            d = {
                                ...d,
                                count_details: {
                                    ...d.count_details,
                                    vote: n
                                },
                                me_vote: !!t || d.me_vote
                            }
                        } else {
                            if (t && d.me_burst) return d;
                            let e = t && d.me ? d.count : d.count + 1;
                            d = {
                                ...d,
                                count: e,
                                count_details: {
                                    ...d.count_details,
                                    normal: e
                                },
                                me: !!t || d.me
                            }
                        }
                    }
                    return d
                });
            return -1 === i && (s === a.ReactionTypes.BURST ? d.push({
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
                themedBurstColors: (0, r.buildPlatformedThemedEmojiColorPalette)({
                    colors: null != n ? n : [],
                    shouldProcessMobileColors: (0, u.isIOS)()
                })
            }) : s === a.ReactionTypes.VOTE ? d.push({
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
            }) : d.push({
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
            })), this.set("reactions", d)
        }
        addReactionBatch(e, t) {
            return e.reduce((e, n) => {
                let {
                    users: s,
                    emoji: i
                } = n;
                return s.reduce((e, n) => e.addReaction(i, n === t), e)
            }, this)
        }
        removeReaction(e) {
            var t, n, s, i;
            let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.ReactionTypes.NORMAL,
                u = -1,
                l = this.reactions.map((t, n) => {
                    if ((0, o.emojiEquals)(t.emoji, e)) {
                        if (d === a.ReactionTypes.BURST) {
                            let e = r && !t.me_burst ? t.burst_count : t.burst_count - 1;
                            t = {
                                ...t,
                                burst_count: e,
                                me_burst: !r && t.me_burst,
                                count_details: {
                                    ...t.count_details,
                                    burst: e
                                }
                            }
                        } else if (d === a.ReactionTypes.VOTE) {
                            var s, i;
                            let e = null !== (i = null === (s = t.count_details) || void 0 === s ? void 0 : s.vote) && void 0 !== i ? i : 0,
                                n = r && !t.me_vote ? e : e - 1;
                            t = {
                                ...t,
                                count_details: {
                                    ...t.count_details,
                                    vote: n
                                },
                                me_vote: !r && t.me_vote
                            }
                        } else {
                            let e = r && !t.me ? t.count : t.count - 1;
                            t = {
                                ...t,
                                count: e,
                                me: !r && t.me,
                                count_details: {
                                    ...t.count_details,
                                    normal: e
                                }
                            }
                        }
                        u = n
                    }
                    return t
                }),
                {
                    count: f,
                    burst_count: _,
                    count_details: c
                } = null !== (t = l[u]) && void 0 !== t ? t : {},
                g = null !== (n = null == c ? void 0 : c.normal) && void 0 !== n ? n : 0,
                m = null !== (s = null == c ? void 0 : c.burst) && void 0 !== s ? s : 0,
                h = null !== (i = null == c ? void 0 : c.vote) && void 0 !== i ? i : 0;
            return -1 !== u && f <= 0 && _ <= 0 && g <= 0 && m <= 0 && h <= 0 && l.splice(u, 1), this.set("reactions", l)
        }
        removeReactionsForEmoji(e) {
            return this.set("reactions", this.reactions.filter(t => !(0, o.emojiEquals)(t.emoji, e)))
        }
        isSystemDM() {
            return this.author.isSystemUser()
        }
        hasFlag(e) {
            return (0, d.hasFlag)(this.flags, e)
        }
        isCommandType() {
            return this.type === l.MessageTypes.CHAT_INPUT_COMMAND || this.type === l.MessageTypes.CONTEXT_MENU_COMMAND
        }
        isPoll() {
            return null != this.poll
        }
        canDeleteOwnMessage(e) {
            var t, n, i;
            if (this.author.id === e) return !0;
            let r = null !== (i = null === (t = this.interactionMetadata) || void 0 === t ? void 0 : t.authorizing_integration_owners) && void 0 !== i ? i : {};
            return (null === (n = this.interactionMetadata) || void 0 === n ? void 0 : n.user_id) === e && 1 === Object.keys(r).length && s.ApplicationIntegrationType.USER_INSTALL in r
        }
        toJS() {
            return {
                ...this,
                webkhook_id: this.webhookId,
                edited_timestamp: this.editedTimestamp,
                mention_everyone: this.mentionEveryone
            }
        }
        isFirstMessageInForumPost(e) {
            return this.id === this.channel_id && e.isForumPost()
        }
        constructor(e) {
            var t, n, s;
            super(), this.id = e.id, this.type = e.type || l.MessageTypes.DEFAULT, this.channel_id = e.channel_id, this.author = e.author, this.content = e.content || "", this.customRenderedContent = e.customRenderedContent, this.attachments = e.attachments || [], this.embeds = e.embeds || [], this.mentions = e.mentions || [], this.mentionRoles = e.mentionRoles || [], this.mentionChannels = e.mentionChannels || [], this.mentioned = e.mentioned || !1, this.pinned = e.pinned || !1, this.mentionEveryone = e.mentionEveryone || !1, this.tts = e.tts || !1, this.codedLinks = e.codedLinks || [], this.giftCodes = e.giftCodes || [], this.timestamp = e.timestamp || new Date, this.editedTimestamp = e.editedTimestamp || null, this.state = e.state || l.MessageStates.SENT, this.nonce = e.nonce || null, this.blocked = e.blocked || !1, this.call = e.call || null, this.bot = e.bot || !1, this.webhookId = e.webhookId || null, this.reactions = e.reactions || [], this.applicationId = e.application_id || e.applicationId || null, this.application = e.application || null, this.activity = e.activity || null, this.activityInstance = e.activity_instance || e.activityInstance || null, this.messageReference = e.messageReference || null, this.flags = e.flags || 0, this.isSearchHit = e.hit || e.isSearchHit || !1, this.stickers = e.stickers || [], this.stickerItems = null !== (n = null !== (t = e.sticker_items) && void 0 !== t ? t : e.stickerItems) && void 0 !== n ? n : [], this.components = e.components, this.loggingName = e.loggingName || null, this.colorString = e.colorString, this.nick = e.nick, this.interaction = e.interaction || null, this.interactionData = e.interactionData || null, this.interactionMetadata = e.interactionMetadata || null, this.interactionError = e.interactionError || null, this.roleSubscriptionData = e.roleSubscriptionData, this.purchaseNotification = e.purchaseNotification, this.poll = e.poll, this.referralTrialOfferId = e.referralTrialOfferId || null, this.giftInfo = null !== (s = e.gift_info) && void 0 !== s ? s : e.giftInfo
        }
    }
    var _ = f
}