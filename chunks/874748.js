function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canUseMediaPostEmbed: function() {
            return I
        },
        getMediaPostEmbedChannelPath: function() {
            return E
        },
        getMediaPostEmbedCommonData: function() {
            return c
        }
    }), n("789020");
    var i = n("830121"),
        r = n("754688"),
        s = n("430824"),
        a = n("768581"),
        o = n("5192"),
        l = n("154135"),
        u = n("981631"),
        d = n("959517"),
        _ = n("689938");

    function c(e) {
        var t, n, i, r, s;
        let {
            mediaPostEmbedData: u,
            guild: c,
            parentChannel: E,
            postThread: I,
            user: T,
            selectedGuildId: f,
            canAccess: S = !1
        } = e;
        if (null == u) return null;
        let A = (0, l.getThumbnailImage)(u.thumbnail),
            h = !S && u.has_media_attachment,
            m = S ? _.default.Messages.MEDIA_POST_EMBED_SUBSCRIBED_CTA : _.default.Messages.MEDIA_POST_EMBED_SUBSCRIBE_CTA,
            N = null != T ? o.default.getName(u.guild_id, u.channel_id, T) : void 0,
            O = null == T ? void 0 : T.getAvatarURL(null == c ? void 0 : c.id, 40);
        (null == O || f !== u.guild_id) && (O = a.default.getGuildIconURL({
            id: u.guild_id,
            icon: u.guild_icon,
            size: 40,
            canAnimate: !1
        }));
        let p = function(e) {
                if (null == e) return !1;
                let {
                    height: t,
                    width: n
                } = e;
                return null != t && null != n && t >= n
            }(u.thumbnail) && !h,
            R = (null === (t = u.thumbnail) || void 0 === t ? void 0 : t.filename) != null && (null === (i = u.thumbnail) || void 0 === i ? void 0 : null === (n = i.filename) || void 0 === n ? void 0 : n.startsWith(d.SPOILER_ATTACHMENT_PREFIX));
        return {
            title: null !== (r = u.title) && void 0 !== r ? r : "",
            subtitle: u.description,
            ctaText: m,
            coverImage: A,
            coverImageOverlayText: h ? _.default.Messages.MEDIA_POST_EMBED_BLURRED_THUMBNAIL_TEXT : void 0,
            parentChannelId: u.parent_channel_id,
            threadId: u.channel_id,
            postThread: I,
            messageId: u.message_id,
            canAccess: S,
            guildId: u.guild_id,
            guildName: null !== (s = null == c ? void 0 : c.name) && void 0 !== s ? s : u.guild_name,
            authorId: null == u ? void 0 : u.author_id,
            authorName: N,
            channelName: null == E ? void 0 : E.name,
            avatarUrl: O,
            shouldShowBlurredThumbnailImage: h,
            shouldContainMediaWithBackground: p,
            shouldSpoiler: R,
            obscureAwaitingScan: !1,
            flags: u.flags,
            contentScanVersion: u.content_scan_version
        }
    }

    function E(e) {
        if (null == e) return;
        let t = (0, i.parseURLSafely)(e);
        if (null == t) return;
        let n = (0, i.remainingPathFromDiscordHostMatch)(t);
        if (null != n) return (0, r.tryParseChannelPath)(n)
    }

    function I(e, t) {
        let n = s.default.getGuild(e);
        if (null == n || null == t) return !1;
        let i = n.hasFeature(u.GuildFeatures.CREATOR_MONETIZABLE) || n.hasFeature(u.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
        return !0 === t.isMediaChannel() && i
    }
}