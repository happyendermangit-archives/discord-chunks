function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isGuildSelectableChannelType: function() {
            return g
        },
        ALL_CHANNEL_TYPES: function() {
            return m
        },
        isGuildTextChannelType: function() {
            return S
        },
        GUILD_WEBHOOK_CHANNEL_TYPES: function() {
            return v
        },
        GUILD_CHANNEL_TYPES: function() {
            return T
        },
        isGuildChannelType: function() {
            return I
        },
        GUILD_VOCAL_CHANNEL_TYPES: function() {
            return A
        },
        isGuildVocalChannelType: function() {
            return C
        },
        SILENT_JOIN_LEAVE_CHANNEL_TYPES: function() {
            return y
        },
        isPrivate: function() {
            return R
        },
        isMultiUserDM: function() {
            return D
        },
        TEXT_CHANNEL_TYPES: function() {
            return P
        },
        isTextChannel: function() {
            return L
        },
        isVoiceChannel: function() {
            return b
        },
        isGuildReadableType: function() {
            return w
        },
        THREAD_CHANNEL_TYPES: function() {
            return k
        },
        THREADED_CHANNEL_TYPES: function() {
            return V
        },
        isThread: function() {
            return G
        },
        isReadableType: function() {
            return x
        },
        GUILD_NON_CATEGORY_CHANNEL_TYPES: function() {
            return B
        },
        EDITABLE_CHANNEL_TYPES: function() {
            return H
        },
        TOGGLE_ANNOUNCEMENT_CHANNEL_TYPES: function() {
            return Y
        },
        TOPIC_CHANNEL_TYPES: function() {
            return K
        },
        NSFW_CHANNEL_TYPES: function() {
            return j
        },
        CREATEABLE_NON_VOCAL_CHANNEL_NAME_TYPES: function() {
            return W
        },
        SLOWMODE_CHANNEL_TYPES: function() {
            return z
        },
        EDITABLE_VOICE_SETTINGS_TYPES: function() {
            return q
        },
        VOICE_THREAD_PARENT_CHANNEL_TYPES: function() {
            return X
        },
        CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING: function() {
            return Q
        },
        GUILD_FAVORITES_CHANNEL_TYPES: function() {
            return Z
        },
        getAccessPermissions: function() {
            return er
        },
        getBasicAccessPermissions: function() {
            return ea
        },
        ChannelRecordBase: function() {
            return ed
        },
        UnknownChannelRecord: function() {
            return ec
        },
        GuildTextualChannelRecord: function() {
            return e_
        },
        PrivateChannelRecord: function() {
            return eh
        },
        DMChannelRecord: function() {
            return eg
        },
        createChannelRecordFromServer: function() {
            return eS
        },
        createChannelRecordFromInvite: function() {
            return ev
        },
        castChannelRecord: function() {
            return eI
        },
        createChannelRecord: function() {
            return eA
        }
    }), n("222007"), n("808653"), n("70102"), n("702976");
    var i = n("917351"),
        s = n.n(i),
        r = n("482402"),
        a = n("335710"),
        o = n("316693"),
        l = n("627929"),
        u = n("923510"),
        d = n("834052"),
        c = n("568734"),
        f = n("49111"),
        _ = n("724210"),
        E = n("333188");
    let h = new Set([f.ChannelTypes.GUILD_TEXT, f.ChannelTypes.GUILD_ANNOUNCEMENT, f.ChannelTypes.GUILD_STORE, f.ChannelTypes.ANNOUNCEMENT_THREAD, f.ChannelTypes.PUBLIC_THREAD, f.ChannelTypes.PRIVATE_THREAD, f.ChannelTypes.GUILD_DIRECTORY, f.ChannelTypes.GUILD_FORUM, f.ChannelTypes.GUILD_MEDIA, f.ChannelTypes.DM, f.ChannelTypes.GROUP_DM]);

    function g(e) {
        return h.has(e)
    }
    let m = new Set([f.ChannelTypes.DM, f.ChannelTypes.GROUP_DM, f.ChannelTypes.GUILD_TEXT, f.ChannelTypes.GUILD_VOICE, f.ChannelTypes.GUILD_STAGE_VOICE, f.ChannelTypes.GUILD_CATEGORY, f.ChannelTypes.GUILD_ANNOUNCEMENT, f.ChannelTypes.GUILD_STORE, f.ChannelTypes.ANNOUNCEMENT_THREAD, f.ChannelTypes.PUBLIC_THREAD, f.ChannelTypes.PRIVATE_THREAD, f.ChannelTypes.GUILD_DIRECTORY, f.ChannelTypes.GUILD_FORUM, f.ChannelTypes.GUILD_MEDIA]),
        p = new Set([f.ChannelTypes.GUILD_TEXT, f.ChannelTypes.GUILD_ANNOUNCEMENT, f.ChannelTypes.ANNOUNCEMENT_THREAD, f.ChannelTypes.PUBLIC_THREAD, f.ChannelTypes.PRIVATE_THREAD]);

    function S(e) {
        return p.has(e)
    }
    let v = new Set([f.ChannelTypes.GUILD_TEXT, f.ChannelTypes.GUILD_ANNOUNCEMENT, f.ChannelTypes.GUILD_FORUM, f.ChannelTypes.GUILD_MEDIA, f.ChannelTypes.GUILD_VOICE, f.ChannelTypes.GUILD_STAGE_VOICE]),
        T = new Set([f.ChannelTypes.GUILD_TEXT, f.ChannelTypes.GUILD_VOICE, f.ChannelTypes.GUILD_STAGE_VOICE, f.ChannelTypes.GUILD_CATEGORY, f.ChannelTypes.GUILD_ANNOUNCEMENT, f.ChannelTypes.GUILD_STORE, f.ChannelTypes.ANNOUNCEMENT_THREAD, f.ChannelTypes.PUBLIC_THREAD, f.ChannelTypes.PRIVATE_THREAD, f.ChannelTypes.GUILD_DIRECTORY, f.ChannelTypes.GUILD_FORUM, f.ChannelTypes.GUILD_MEDIA]);

    function I(e) {
        return T.has(e)
    }
    f.ChannelTypes.GUILD_TEXT, f.ChannelTypes.GUILD_ANNOUNCEMENT, f.ChannelTypes.GUILD_FORUM, f.ChannelTypes.GUILD_MEDIA;
    let A = new Set([f.ChannelTypes.GUILD_VOICE, f.ChannelTypes.GUILD_STAGE_VOICE]);

    function C(e) {
        return "SELECTABLE" !== e && A.has(e)
    }
    let y = new Set([f.ChannelTypes.GUILD_STAGE_VOICE]),
        N = new Set([f.ChannelTypes.DM, f.ChannelTypes.GROUP_DM]);

    function R(e) {
        return N.has(e)
    }
    let O = new Set([f.ChannelTypes.GROUP_DM]);

    function D(e) {
        return O.has(e)
    }
    let P = new Set([f.ChannelTypes.DM, f.ChannelTypes.GROUP_DM, f.ChannelTypes.GUILD_TEXT, f.ChannelTypes.GUILD_ANNOUNCEMENT, f.ChannelTypes.ANNOUNCEMENT_THREAD, f.ChannelTypes.PUBLIC_THREAD, f.ChannelTypes.PRIVATE_THREAD]);

    function L(e) {
        return P.has(e)
    }
    let M = new Set([f.ChannelTypes.DM, f.ChannelTypes.GROUP_DM, f.ChannelTypes.GUILD_VOICE, f.ChannelTypes.GUILD_STAGE_VOICE, f.ChannelTypes.PUBLIC_THREAD, f.ChannelTypes.PRIVATE_THREAD]);

    function b(e) {
        return M.has(e)
    }
    let U = new Set([f.ChannelTypes.GUILD_TEXT, f.ChannelTypes.GUILD_ANNOUNCEMENT, f.ChannelTypes.ANNOUNCEMENT_THREAD, f.ChannelTypes.PUBLIC_THREAD, f.ChannelTypes.PRIVATE_THREAD, f.ChannelTypes.GUILD_DIRECTORY, f.ChannelTypes.GUILD_FORUM, f.ChannelTypes.GUILD_MEDIA, f.ChannelTypes.DM, f.ChannelTypes.GROUP_DM]);

    function w(e) {
        return U.has(e)
    }
    let k = new Set([f.ChannelTypes.ANNOUNCEMENT_THREAD, f.ChannelTypes.PUBLIC_THREAD, f.ChannelTypes.PRIVATE_THREAD]),
        V = new Set([f.ChannelTypes.GUILD_TEXT, f.ChannelTypes.GUILD_ANNOUNCEMENT, f.ChannelTypes.GUILD_FORUM, f.ChannelTypes.GUILD_MEDIA]);

    function G(e) {
        return k.has(e)
    }
    let F = new Set([f.ChannelTypes.DM, f.ChannelTypes.GROUP_DM, f.ChannelTypes.GUILD_TEXT, f.ChannelTypes.GUILD_ANNOUNCEMENT, f.ChannelTypes.ANNOUNCEMENT_THREAD, f.ChannelTypes.PUBLIC_THREAD, f.ChannelTypes.PRIVATE_THREAD, f.ChannelTypes.GUILD_FORUM, f.ChannelTypes.GUILD_MEDIA, f.ChannelTypes.GUILD_DIRECTORY, f.ChannelTypes.GUILD_VOICE, f.ChannelTypes.GUILD_STAGE_VOICE]);

    function x(e) {
        return F.has(e)
    }
    let B = new Set([f.ChannelTypes.GUILD_TEXT, f.ChannelTypes.GUILD_ANNOUNCEMENT, f.ChannelTypes.GUILD_STORE, f.ChannelTypes.GUILD_VOICE, f.ChannelTypes.GUILD_STAGE_VOICE, f.ChannelTypes.ANNOUNCEMENT_THREAD, f.ChannelTypes.PUBLIC_THREAD, f.ChannelTypes.PRIVATE_THREAD, f.ChannelTypes.GUILD_DIRECTORY, f.ChannelTypes.GUILD_FORUM, f.ChannelTypes.GUILD_MEDIA]),
        H = new Set([f.ChannelTypes.GUILD_ANNOUNCEMENT, f.ChannelTypes.GUILD_CATEGORY, f.ChannelTypes.GUILD_STORE, f.ChannelTypes.GUILD_TEXT, f.ChannelTypes.GUILD_VOICE, f.ChannelTypes.GUILD_STAGE_VOICE, f.ChannelTypes.GUILD_DIRECTORY, f.ChannelTypes.GUILD_FORUM, f.ChannelTypes.GUILD_MEDIA]),
        Y = new Set([f.ChannelTypes.GUILD_TEXT, f.ChannelTypes.GUILD_ANNOUNCEMENT]),
        K = new Set([f.ChannelTypes.GUILD_TEXT, f.ChannelTypes.GUILD_ANNOUNCEMENT, f.ChannelTypes.GUILD_FORUM, f.ChannelTypes.GUILD_MEDIA]),
        j = new Set([f.ChannelTypes.GUILD_TEXT, f.ChannelTypes.GUILD_ANNOUNCEMENT, f.ChannelTypes.GUILD_FORUM, f.ChannelTypes.GUILD_MEDIA, f.ChannelTypes.GUILD_VOICE, f.ChannelTypes.GUILD_STAGE_VOICE]),
        W = new Set([f.ChannelTypes.GUILD_ANNOUNCEMENT, f.ChannelTypes.GUILD_TEXT, f.ChannelTypes.GUILD_FORUM, f.ChannelTypes.GUILD_MEDIA, f.ChannelTypes.ANNOUNCEMENT_THREAD]),
        z = new Set([f.ChannelTypes.GUILD_TEXT, f.ChannelTypes.GUILD_FORUM, f.ChannelTypes.GUILD_MEDIA, f.ChannelTypes.ANNOUNCEMENT_THREAD, f.ChannelTypes.PUBLIC_THREAD, f.ChannelTypes.PRIVATE_THREAD, f.ChannelTypes.GUILD_VOICE, f.ChannelTypes.GUILD_STAGE_VOICE]),
        q = new Set([f.ChannelTypes.PUBLIC_THREAD, f.ChannelTypes.PRIVATE_THREAD, f.ChannelTypes.GUILD_VOICE, f.ChannelTypes.GUILD_STAGE_VOICE]),
        X = new Set([f.ChannelTypes.GUILD_TEXT, f.ChannelTypes.GUILD_FORUM, f.ChannelTypes.GUILD_MEDIA]),
        Q = new Set([f.ChannelTypes.GUILD_TEXT, f.ChannelTypes.GUILD_CATEGORY, f.ChannelTypes.GUILD_FORUM, f.ChannelTypes.GUILD_ANNOUNCEMENT]),
        Z = new Set([f.ChannelTypes.GUILD_TEXT, f.ChannelTypes.GUILD_ANNOUNCEMENT, f.ChannelTypes.GUILD_FORUM, f.ChannelTypes.GUILD_VOICE]);

    function J(e) {
        let t = {};
        return null == e || e.forEach(e => {
            t[e.id] = {
                id: e.id,
                type: e.type,
                allow: o.default.deserialize(e.allow),
                deny: o.default.deserialize(e.deny)
            }
        }), t
    }

    function $(e) {
        return null == e ? {} : s.reduce(e, (e, t) => (e[t.id] = t.nick, e), {})
    }

    function ee(e) {
        return null == e ? [] : e.map(e => ({
            id: e.id,
            name: e.name,
            emojiId: 0 !== e.emoji_id ? e.emoji_id : void 0,
            emojiName: e.emoji_name,
            moderated: e.moderated
        }))
    }

    function et(e) {
        return null != e ? {
            id: e.id,
            name: e.name
        } : void 0
    }

    function en(e) {
        if (null == e) return null;
        switch (e.type) {
            case E.VoiceCallBackgroundTypes.EMPTY:
                return {
                    type: e.type
                };
            case E.VoiceCallBackgroundTypes.GRADIENT:
                return {
                    type: e.type, resourceId: e.resource_id
                };
            default:
                throw Error("unknown voice background display type")
        }
    }
    let ei = o.default.combine(f.Permissions.CONNECT, f.Permissions.VIEW_CHANNEL),
        es = f.BasicPermissions.CONNECT | f.BasicPermissions.VIEW_CHANNEL;

    function er(e) {
        return C(e) ? ei : f.Permissions.VIEW_CHANNEL
    }

    function ea(e) {
        return C(e) ? es : f.BasicPermissions.VIEW_CHANNEL
    }
    class eo {
        constructor(e) {
            var t, n, i;
            this.id = e.id, this.type = null !== (t = e.type) && void 0 !== t ? t : f.ChannelTypes.GUILD_TEXT, this.name = null !== (n = e.name) && void 0 !== n ? n : "", this.guild_id = null !== (i = e.guild_id) && void 0 !== i ? i : null
        }
    }

    function el(e) {
        return "topic" in e && (e.topic_ = e.topic, delete e.topic), "position" in e && (e.position_ = e.position, delete e.position), "permissionOverwrites" in e && (e.permissionOverwrites_ = e.permissionOverwrites, delete e.permissionOverwrites), "bitrate" in e && (e.bitrate_ = e.bitrate, delete e.bitrate), "userLimit" in e && (e.userLimit_ = e.userLimit, delete e.userLimit), "nsfw" in e && (e.nsfw_ = e.nsfw, delete e.nsfw), "rateLimitPerUser" in e && (e.rateLimitPerUser_ = e.rateLimitPerUser, delete e.rateLimitPerUser), "flags" in e && (e.flags_ = e.flags, delete e.flags), e
    }
    let eu = Object.freeze({});
    class ed extends eo {
        get permissionOverwrites() {
            var e;
            return null !== (e = this.permissionOverwrites_) && void 0 !== e ? e : eu
        }
        get topic() {
            var e;
            return null !== (e = this.topic_) && void 0 !== e ? e : ""
        }
        get position() {
            var e;
            return null !== (e = this.position_) && void 0 !== e ? e : 0
        }
        get bitrate() {
            var e;
            return null !== (e = this.bitrate_) && void 0 !== e ? e : f.BITRATE_DEFAULT
        }
        get userLimit() {
            var e;
            return null !== (e = this.userLimit_) && void 0 !== e ? e : 0
        }
        get nsfw() {
            var e;
            return null !== (e = this.nsfw_) && void 0 !== e && e
        }
        get rateLimitPerUser() {
            var e;
            return null !== (e = this.rateLimitPerUser_) && void 0 !== e ? e : 0
        }
        get flags() {
            var e;
            return null !== (e = this.flags_) && void 0 !== e ? e : 0
        }
        toJS() {
            return {
                ...this
            }
        }
        set(e, t) {
            return this.merge(el({
                [e]: t
            }))
        }
        merge(e) {
            let t = null,
                n = el(e);
            for (let e in n) n.hasOwnProperty(e) && this[e] !== n[e] && (null == t && (t = this.toJS()), t[e] = n[e]);
            return null != t ? new this.constructor(t) : this
        }
        computeLurkerPermissionsAllowList() {
            if (this.isGuildStageVoice() && d.default.isPublic(this.id)) return u.LURKER_STAGE_CHANNEL_PERMISSIONS_ALLOWLIST
        }
        isNSFW() {
            return this.nsfw
        }
        isManaged() {
            return null != this.application_id
        }
        isPrivate() {
            return R(this.type)
        }
        isGroupDM() {
            return this.type === f.ChannelTypes.GROUP_DM
        }
        isMultiUserDM() {
            return D(this.type)
        }
        isDM() {
            return this.type === f.ChannelTypes.DM
        }
        isSystemDM() {
            return !1
        }
        isArchivedThread() {
            var e;
            return this.isThread() && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.archived) === !0
        }
        isLockedThread() {
            var e;
            return this.isThread() && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.locked) === !0
        }
        isScheduledForDeletion() {
            return this.hasFlag(_.ChannelFlags.IS_SCHEDULED_FOR_DELETION)
        }
        isBroadcastChannel() {
            return this.hasFlag(_.ChannelFlags.IS_BROADCASTING)
        }
        isArchivedLockedThread() {
            var e, t;
            return k.has(this.type) && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.archived) === !0 && (null === (t = this.threadMetadata) || void 0 === t ? void 0 : t.locked) === !0
        }
        isForumPost() {
            return this.type === f.ChannelTypes.PUBLIC_THREAD && null != this.parentChannelThreadType && f.ChannelTypesSets.GUILD_THREADS_ONLY.has(this.parentChannelThreadType)
        }
        isCategory() {
            return this.type === f.ChannelTypes.GUILD_CATEGORY
        }
        isVocal() {
            return b(this.type)
        }
        isGuildVocal() {
            return C(this.type)
        }
        isGuildVocalOrThread() {
            return this.isGuildVocal() || this.isVocalThread()
        }
        isGuildVoice() {
            return this.type === f.ChannelTypes.GUILD_VOICE
        }
        isGuildStageVoice() {
            return this.type === f.ChannelTypes.GUILD_STAGE_VOICE
        }
        isListenModeCapable() {
            return this.isGuildStageVoice()
        }
        isThread() {
            return G(this.type)
        }
        isAnnouncementThread() {
            return this.type === f.ChannelTypes.ANNOUNCEMENT_THREAD
        }
        isVocalThread() {
            return this.type === f.ChannelTypes.PUBLIC_THREAD || this.type === f.ChannelTypes.PRIVATE_THREAD
        }
        isActiveThread() {
            var e;
            return this.isThread() && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.archived) !== !0
        }
        isDirectory() {
            return this.type === f.ChannelTypes.GUILD_DIRECTORY
        }
        isForumLikeChannel() {
            return this.isForumChannel() || this.isMediaChannel()
        }
        isForumChannel() {
            return this.type === f.ChannelTypes.GUILD_FORUM
        }
        isMediaChannel() {
            return this.type === f.ChannelTypes.GUILD_MEDIA
        }
        isMediaPost() {
            return this.type === f.ChannelTypes.PUBLIC_THREAD && this.parentChannelThreadType === f.ChannelTypes.GUILD_MEDIA
        }
        isRoleSubscriptionTemplatePreviewChannel() {
            return this.hasFlag(_.ChannelFlags.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL)
        }
        isOwner(e) {
            return this.ownerId === e
        }
        getGuildId() {
            return this.guild_id
        }
        getApplicationId() {
            return this.application_id
        }
        getDefaultSortOrder() {
            var e;
            return null !== (e = this.defaultSortOrder) && void 0 !== e ? e : a.ThreadSortOrder.LATEST_ACTIVITY
        }
        getDefaultLayout() {
            return this.isMediaChannel() ? r.ForumLayout.GRID : null == this.defaultForumLayout || this.defaultForumLayout === r.ForumLayout.DEFAULT ? r.ForumLayout.LIST : this.defaultForumLayout
        }
        get accessPermissions() {
            return er(this.type)
        }
        hasFlag(e) {
            return (0, c.hasFlag)(this.flags, e)
        }
    }
    class ec extends ed {
        static fromServer(e, t) {
            var n, i, s;
            let r = {
                application_id: e.application_id,
                appliedTags: e.applied_tags,
                availableTags: null != e.available_tags ? ee(e.available_tags) : void 0,
                bitrate_: e.bitrate,
                defaultAutoArchiveDuration: e.default_auto_archive_duration,
                defaultForumLayout: e.default_forum_layout,
                defaultReactionEmoji: null != e.default_reaction_emoji ? {
                    emojiId: 0 !== e.default_reaction_emoji.emoji_id ? e.default_reaction_emoji.emoji_id : void 0,
                    emojiName: e.default_reaction_emoji.emoji_name
                } : void 0,
                defaultSortOrder: e.default_sort_order,
                defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
                flags_: e.flags,
                guild_id: null !== (n = null != t ? t : e.guild_id) && void 0 !== n ? n : null,
                icon: e.icon,
                iconEmoji: et(e.icon_emoji),
                id: e.id,
                isMessageRequest: e.is_message_request,
                isMessageRequestTimestamp: e.is_message_request_timestamp,
                isSpam: e.is_spam,
                lastMessageId: e.last_message_id,
                lastPinTimestamp: e.last_pin_timestamp,
                member: null != e.member ? {
                    flags: e.member.flags,
                    muted: e.member.muted,
                    muteConfig: e.member.mute_config,
                    joinTimestamp: e.member.join_timestamp
                } : void 0,
                memberCount: e.member_count,
                memberIdsPreview: e.member_ids_preview,
                memberListId: e.member_list_id,
                messageCount: e.message_count,
                name: null !== (i = e.name) && void 0 !== i ? i : "",
                nicks: $(e.nicks),
                nsfw_: e.nsfw,
                originChannelId: e.origin_channel_id,
                ownerId: e.owner_id,
                parent_id: e.parent_id,
                parentChannelThreadType: void 0,
                permissionOverwrites_: J(e.permission_overwrites),
                position_: e.position,
                rateLimitPerUser_: e.rate_limit_per_user,
                rawRecipients: null != e.recipients ? e.recipients : [],
                recipients: null != e.recipients ? e.recipients.map(e => e.id) : [],
                rtcRegion: e.rtc_region,
                safetyWarnings: e.safety_warnings,
                template: e.template,
                themeColor: e.theme_color,
                threadMetadata: null != e.thread_metadata ? {
                    archived: e.thread_metadata.archived,
                    autoArchiveDuration: e.thread_metadata.auto_archive_duration,
                    archiveTimestamp: e.thread_metadata.archive_timestamp,
                    createTimestamp: e.thread_metadata.create_timestamp,
                    locked: e.thread_metadata.locked,
                    invitable: null === (s = e.thread_metadata.invitable) || void 0 === s || s
                } : void 0,
                topic_: e.topic,
                totalMessageSent: e.total_message_sent,
                type: null != e.type ? e.type : f.ChannelTypes.UNKNOWN,
                userLimit_: e.user_limit,
                version: e.version,
                videoQualityMode: e.video_quality_mode,
                voiceBackgroundDisplay: en(e.voice_background_display)
            };
            return (0, l.dangerouslyCast)(r, ec)
        }
        constructor(e) {
            super(e), this.application_id = e.application_id, this.appliedTags = e.appliedTags, this.availableTags = e.availableTags, this.bitrate_ = e.bitrate_, this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration, this.defaultForumLayout = e.defaultForumLayout, this.defaultReactionEmoji = e.defaultReactionEmoji, this.defaultSortOrder = e.defaultSortOrder, this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser, this.flags_ = e.flags_, this.icon = e.icon, this.iconEmoji = e.iconEmoji, this.isMessageRequest = e.isMessageRequest, this.isMessageRequestTimestamp = e.isMessageRequestTimestamp, this.isSpam = e.isSpam, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.member = e.member, this.memberCount = e.memberCount, this.memberIdsPreview = e.memberIdsPreview, this.memberListId = e.memberListId, this.messageCount = e.messageCount, this.nicks = e.nicks, this.nsfw_ = e.nsfw_, this.originChannelId = e.originChannelId, this.ownerId = e.ownerId, this.parent_id = e.parent_id, this.parentChannelThreadType = e.parentChannelThreadType, this.permissionOverwrites_ = e.permissionOverwrites_, this.position_ = e.position_, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.rawRecipients = e.rawRecipients, this.recipients = e.recipients, this.rtcRegion = e.rtcRegion, this.safetyWarnings = e.safetyWarnings, this.template = e.template, this.themeColor = e.themeColor, this.threadMetadata = e.threadMetadata, this.topic_ = e.topic_, this.userLimit_ = e.userLimit_, this.version = e.version, this.videoQualityMode = e.videoQualityMode, this.voiceBackgroundDisplay = e.voiceBackgroundDisplay
        }
    }
    class ef extends ed {
        static fromServer(e, t) {
            var n, i, s, r;
            let a = {
                application_id: e.application_id,
                bitrate_: e.bitrate,
                flags_: e.flags,
                guild_id: null !== (n = null != t ? t : e.guild_id) && void 0 !== n ? n : null,
                iconEmoji: et(e.icon_emoji),
                id: e.id,
                lastMessageId: e.last_message_id,
                lastPinTimestamp: e.last_pin_timestamp,
                memberListId: e.member_list_id,
                name: null !== (i = e.name) && void 0 !== i ? i : "",
                nsfw_: null !== (s = e.nsfw) && void 0 !== s && s,
                originChannelId: e.origin_channel_id,
                parent_id: e.parent_id,
                permissionOverwrites_: J(e.permission_overwrites),
                position_: e.position,
                rateLimitPerUser_: null !== (r = e.rate_limit_per_user) && void 0 !== r ? r : 0,
                rtcRegion: e.rtc_region,
                themeColor: e.theme_color,
                topic_: e.topic,
                type: null != e.type ? e.type : f.ChannelTypes.GUILD_VOICE,
                userLimit_: e.user_limit,
                version: e.version,
                videoQualityMode: e.video_quality_mode,
                voiceBackgroundDisplay: en(e.voice_background_display)
            };
            return eI(a)
        }
        constructor(e) {
            var t;
            super(e), this.application_id = e.application_id, this.bitrate_ = e.bitrate_, this.flags_ = e.flags_, this.iconEmoji = e.iconEmoji, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.memberListId = e.memberListId, this.nsfw_ = e.nsfw_, this.originChannelId = e.originChannelId, this.parent_id = e.parent_id, this.permissionOverwrites_ = null !== (t = e.permissionOverwrites_) && void 0 !== t ? t : {}, this.position_ = e.position_, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.rtcRegion = e.rtcRegion, this.themeColor = e.themeColor, this.topic_ = e.topic_, this.userLimit_ = e.userLimit_, this.version = e.version, this.videoQualityMode = e.videoQualityMode, this.voiceBackgroundDisplay = e.voiceBackgroundDisplay
        }
    }
    class e_ extends ed {
        static fromServer(e, t) {
            var n, i, s, r;
            let a = {
                application_id: e.application_id,
                defaultAutoArchiveDuration: e.default_auto_archive_duration,
                defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
                flags_: e.flags,
                guild_id: null !== (n = null != t ? t : e.guild_id) && void 0 !== n ? n : null,
                iconEmoji: et(e.icon_emoji),
                id: e.id,
                lastMessageId: e.last_message_id,
                lastPinTimestamp: e.last_pin_timestamp,
                memberListId: e.member_list_id,
                name: null !== (i = e.name) && void 0 !== i ? i : "",
                nsfw_: null !== (s = e.nsfw) && void 0 !== s && s,
                parent_id: e.parent_id,
                permissionOverwrites_: J(e.permission_overwrites),
                position_: e.position,
                rateLimitPerUser_: null !== (r = e.rate_limit_per_user) && void 0 !== r ? r : 0,
                themeColor: e.theme_color,
                topic_: e.topic,
                type: null != e.type ? e.type : f.ChannelTypes.GUILD_TEXT,
                version: e.version
            };
            return eI(a)
        }
        constructor(e) {
            var t;
            super(e), this.application_id = e.application_id, this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration, this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser, this.flags_ = e.flags_, this.iconEmoji = e.iconEmoji, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.memberListId = e.memberListId, this.nsfw_ = e.nsfw_, this.parent_id = e.parent_id, this.permissionOverwrites_ = null !== (t = e.permissionOverwrites_) && void 0 !== t ? t : {}, this.position_ = e.position_, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.themeColor = e.themeColor, this.topic_ = e.topic_, this.version = e.version
        }
    }
    class eE extends ed {
        static fromServer(e, t) {
            var n, i, s, r;
            let a = {
                availableTags: null != e.available_tags ? ee(e.available_tags) : [],
                defaultAutoArchiveDuration: e.default_auto_archive_duration,
                defaultForumLayout: e.default_forum_layout,
                defaultReactionEmoji: null != e.default_reaction_emoji ? {
                    emojiId: 0 !== e.default_reaction_emoji.emoji_id ? e.default_reaction_emoji.emoji_id : void 0,
                    emojiName: e.default_reaction_emoji.emoji_name
                } : void 0,
                defaultSortOrder: e.default_sort_order,
                defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
                flags_: e.flags,
                guild_id: null !== (n = null != t ? t : e.guild_id) && void 0 !== n ? n : null,
                iconEmoji: et(e.icon_emoji),
                id: e.id,
                lastMessageId: e.last_message_id,
                lastPinTimestamp: e.last_pin_timestamp,
                memberListId: e.member_list_id,
                name: null !== (i = e.name) && void 0 !== i ? i : "",
                nsfw_: null !== (s = e.nsfw) && void 0 !== s && s,
                parent_id: e.parent_id,
                permissionOverwrites_: J(e.permission_overwrites),
                position_: e.position,
                rateLimitPerUser_: null !== (r = e.rate_limit_per_user) && void 0 !== r ? r : 0,
                template: e.template,
                themeColor: e.theme_color,
                topic_: e.topic,
                type: null != e.type ? e.type : f.ChannelTypes.GUILD_TEXT,
                version: e.version
            };
            return (0, l.dangerouslyCast)(a, eE)
        }
        constructor(e) {
            var t, n;
            super(e), this.availableTags = null !== (t = e.availableTags) && void 0 !== t ? t : [], this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration, this.defaultForumLayout = e.defaultForumLayout, this.defaultReactionEmoji = e.defaultReactionEmoji, this.defaultSortOrder = e.defaultSortOrder, this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser, this.flags_ = e.flags_, this.iconEmoji = e.iconEmoji, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.memberListId = e.memberListId, this.nsfw_ = e.nsfw_, this.parent_id = e.parent_id, this.permissionOverwrites_ = null !== (n = e.permissionOverwrites_) && void 0 !== n ? n : {}, this.position_ = e.position_, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.template = e.template, this.themeColor = e.themeColor, this.topic_ = e.topic_, this.version = e.version
        }
    }
    class eh extends ed {
        static fromServer(e) {
            var t, n;
            let i = {
                application_id: e.application_id,
                flags_: e.flags,
                guild_id: null,
                icon: e.icon,
                id: e.id,
                isMessageRequest: e.is_message_request,
                isMessageRequestTimestamp: e.is_message_request_timestamp,
                isSpam: null !== (t = e.is_spam) && void 0 !== t && t,
                lastMessageId: e.last_message_id,
                lastPinTimestamp: e.last_pin_timestamp,
                name: null !== (n = e.name) && void 0 !== n ? n : "",
                nicks: $(e.nicks),
                ownerId: e.owner_id,
                rawRecipients: null != e.recipients ? e.recipients : [],
                recipients: null != e.recipients ? e.recipients.map(e => e.id) : [],
                safetyWarnings: e.safety_warnings,
                type: null != e.type ? e.type : f.ChannelTypes.DM
            };
            return (0, l.dangerouslyCast)(i, eh)
        }
        isSystemDM() {
            let e = this.rawRecipients[0];
            return this.type === f.ChannelTypes.DM && null != e && !0 === e.system
        }
        getRecipientId() {
            return this.recipients[0]
        }
        addRecipient(e, t, n) {
            if (e === n) return this;
            {
                var i;
                let n = this.set("recipients", s.uniq([...null !== (i = this.recipients) && void 0 !== i ? i : [], e]));
                return null == t ? n : n.set("nicks", {
                    ...n.nicks,
                    [e]: t
                })
            }
        }
        removeRecipient(e) {
            return this.set("recipients", s.without(this.recipients, e))
        }
        constructor(e) {
            var t, n, i;
            super(e), this.application_id = e.application_id, this.flags_ = e.flags_, this.icon = e.icon, this.isMessageRequest = e.isMessageRequest, this.isMessageRequestTimestamp = e.isMessageRequestTimestamp, this.isSpam = e.isSpam, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.nicks = e.nicks, this.ownerId = e.ownerId, this.rawRecipients = null !== (t = e.rawRecipients) && void 0 !== t ? t : [], this.recipients = null !== (n = e.recipients) && void 0 !== n ? n : [], this.safetyWarnings = null !== (i = e.safetyWarnings) && void 0 !== i ? i : []
        }
    }
    class eg extends eh {}
    class em extends ed {
        static fromServer(e, t) {
            var n, i, s, r, a;
            let o = {
                appliedTags: null !== (n = e.applied_tags) && void 0 !== n ? n : [],
                bitrate_: e.bitrate,
                flags_: e.flags,
                guild_id: null !== (i = null != t ? t : e.guild_id) && void 0 !== i ? i : null,
                id: e.id,
                lastMessageId: e.last_message_id,
                lastPinTimestamp: e.last_pin_timestamp,
                member: null != e.member ? {
                    flags: e.member.flags,
                    muted: e.member.muted,
                    muteConfig: e.member.mute_config,
                    joinTimestamp: e.member.join_timestamp
                } : void 0,
                memberCount: e.member_count,
                memberIdsPreview: e.member_ids_preview,
                messageCount: e.message_count,
                name: null !== (s = e.name) && void 0 !== s ? s : "",
                nsfw_: null !== (r = e.nsfw) && void 0 !== r && r,
                ownerId: e.owner_id,
                parent_id: e.parent_id,
                parentChannelThreadType: e.parentChannelThreadType,
                rateLimitPerUser_: e.rate_limit_per_user,
                rtcRegion: e.rtc_region,
                threadMetadata: null != e.thread_metadata ? {
                    archived: e.thread_metadata.archived,
                    autoArchiveDuration: e.thread_metadata.auto_archive_duration,
                    archiveTimestamp: e.thread_metadata.archive_timestamp,
                    createTimestamp: e.thread_metadata.create_timestamp,
                    locked: e.thread_metadata.locked,
                    invitable: null === (a = e.thread_metadata.invitable) || void 0 === a || a
                } : void 0,
                totalMessageSent: e.total_message_sent,
                type: null != e.type ? e.type : f.ChannelTypes.PUBLIC_THREAD,
                userLimit_: e.user_limit,
                videoQualityMode: e.video_quality_mode
            };
            return (0, l.dangerouslyCast)(o, em)
        }
        constructor(e) {
            var t;
            super(e), this.appliedTags = null !== (t = e.appliedTags) && void 0 !== t ? t : [], this.bitrate_ = e.bitrate_, this.flags_ = e.flags_, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.member = e.member, this.memberCount = e.memberCount, this.memberIdsPreview = e.memberIdsPreview, this.messageCount = e.messageCount, this.nsfw_ = e.nsfw_, this.ownerId = e.ownerId, this.parent_id = e.parent_id, this.parentChannelThreadType = e.parentChannelThreadType, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.rtcRegion = e.rtcRegion, this.threadMetadata = e.threadMetadata, this.userLimit_ = e.userLimit_, this.videoQualityMode = e.videoQualityMode
        }
    }
    let ep = {
        [f.ChannelTypes.DM]: eh.fromServer,
        [f.ChannelTypes.GROUP_DM]: eh.fromServer,
        [f.ChannelTypes.GUILD_TEXT]: e_.fromServer,
        [f.ChannelTypes.GUILD_VOICE]: ef.fromServer,
        [f.ChannelTypes.GUILD_STAGE_VOICE]: ef.fromServer,
        [f.ChannelTypes.GUILD_CATEGORY]: e_.fromServer,
        [f.ChannelTypes.GUILD_ANNOUNCEMENT]: e_.fromServer,
        [f.ChannelTypes.GUILD_STORE]: e_.fromServer,
        [f.ChannelTypes.ANNOUNCEMENT_THREAD]: em.fromServer,
        [f.ChannelTypes.PUBLIC_THREAD]: em.fromServer,
        [f.ChannelTypes.PRIVATE_THREAD]: em.fromServer,
        [f.ChannelTypes.GUILD_DIRECTORY]: e_.fromServer,
        [f.ChannelTypes.GUILD_FORUM]: eE.fromServer,
        [f.ChannelTypes.GUILD_MEDIA]: eE.fromServer
    };

    function eS(e, t) {
        var n, i;
        let s = null !== (i = ep[null !== (n = e.type) && void 0 !== n ? n : f.ChannelTypes.GUILD_TEXT]) && void 0 !== i ? i : ec.fromServer;
        return s(e, t)
    }

    function ev(e) {
        return eA(e)
    }
    let eT = {
        [f.ChannelTypes.DM]: eg,
        [f.ChannelTypes.GROUP_DM]: class e extends eh {},
        [f.ChannelTypes.GUILD_TEXT]: class e extends e_ {},
        [f.ChannelTypes.GUILD_VOICE]: class e extends ef {},
        [f.ChannelTypes.GUILD_STAGE_VOICE]: class e extends ef {},
        [f.ChannelTypes.GUILD_CATEGORY]: class e extends e_ {},
        [f.ChannelTypes.GUILD_ANNOUNCEMENT]: class e extends e_ {},
        [f.ChannelTypes.GUILD_STORE]: class e extends e_ {},
        [f.ChannelTypes.ANNOUNCEMENT_THREAD]: em,
        [f.ChannelTypes.PUBLIC_THREAD]: em,
        [f.ChannelTypes.PRIVATE_THREAD]: em,
        [f.ChannelTypes.GUILD_DIRECTORY]: class e extends e_ {},
        [f.ChannelTypes.GUILD_FORUM]: eE,
        [f.ChannelTypes.GUILD_MEDIA]: eE
    };

    function eI(e) {
        var t, n;
        let i = null !== (n = eT[null !== (t = e.type) && void 0 !== t ? t : f.ChannelTypes.GUILD_TEXT]) && void 0 !== n ? n : ec;
        return (0, l.dangerouslyCast)(e, i)
    }

    function eA(e) {
        var t, n;
        let i = null !== (n = eT[null !== (t = e.type) && void 0 !== t ? t : f.ChannelTypes.GUILD_TEXT]) && void 0 !== n ? n : ec;
        return new i(el(e))
    }
}