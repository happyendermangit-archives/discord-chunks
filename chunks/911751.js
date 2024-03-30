function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canUseMediaPostEmbed: function() {
            return E
        },
        getMediaPostEmbedChannelPath: function() {
            return _
        },
        getMediaPostEmbedCommonData: function() {
            return d
        }
    });
    var r = n("964164"),
        o = n("42969"),
        i = n("306912"),
        a = n("299529"),
        u = n("62957"),
        s = n("558686"),
        l = n("281767"),
        c = n("401146"),
        f = n("941504");

    function d(e) {
        var t, n, r, o, i, l = e.mediaPostEmbedData,
            d = e.guild,
            _ = e.parentChannel,
            E = e.postThread,
            p = e.user,
            m = e.selectedGuildId,
            y = e.canAccess,
            I = void 0 !== y && y;
        if (null == l) return null;
        var h = (0, s.getThumbnailImage)(l.thumbnail),
            O = !I && l.has_media_attachment,
            T = I ? f.default.Messages.MEDIA_POST_EMBED_SUBSCRIBED_CTA : f.default.Messages.MEDIA_POST_EMBED_SUBSCRIBE_CTA,
            S = null != p ? u.default.getName(l.guild_id, l.channel_id, p) : void 0,
            v = null == p ? void 0 : p.getAvatarURL(null == d ? void 0 : d.id, 40);
        (null == v || m !== l.guild_id) && (v = a.default.getGuildIconURL({
            id: l.guild_id,
            icon: l.guild_icon,
            size: 40,
            canAnimate: !1
        }));
        var g = function(e) {
                if (null == e) return !1;
                var t = e.height,
                    n = e.width;
                return null != t && null != n && t >= n
            }(l.thumbnail) && !O,
            A = (null === (t = l.thumbnail) || void 0 === t ? void 0 : t.filename) != null && (null === (r = l.thumbnail) || void 0 === r ? void 0 : null === (n = r.filename) || void 0 === n ? void 0 : n.startsWith(c.SPOILER_ATTACHMENT_PREFIX));
        return {
            title: null !== (o = l.title) && void 0 !== o ? o : "",
            subtitle: l.description,
            ctaText: T,
            coverImage: h,
            coverImageOverlayText: O ? f.default.Messages.MEDIA_POST_EMBED_BLURRED_THUMBNAIL_TEXT : void 0,
            parentChannelId: l.parent_channel_id,
            threadId: l.channel_id,
            postThread: E,
            messageId: l.message_id,
            canAccess: I,
            guildId: l.guild_id,
            guildName: null !== (i = null == d ? void 0 : d.name) && void 0 !== i ? i : l.guild_name,
            authorId: null == l ? void 0 : l.author_id,
            authorName: S,
            channelName: null == _ ? void 0 : _.name,
            avatarUrl: v,
            shouldShowBlurredThumbnailImage: O,
            shouldContainMediaWithBackground: g,
            shouldSpoiler: A,
            obscureAwaitingScan: !1,
            flags: l.flags,
            contentScanVersion: l.content_scan_version
        }
    }

    function _(e) {
        if (null == e) return;
        var t = (0, r.parseURLSafely)(e);
        if (null != t) {
            var n = (0, r.remainingPathFromDiscordHostMatch)(t);
            if (null != n) return (0, o.tryParseChannelPath)(n)
        }
    }

    function E(e, t) {
        var n = i.default.getGuild(e);
        if (null == n || null == t) return !1;
        var r = n.hasFeature(l.GuildFeatures.CREATOR_MONETIZABLE) || n.hasFeature(l.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
        return !0 === t.isMediaChannel() && r
    }
}