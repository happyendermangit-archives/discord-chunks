function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getMediaPostEmbedCommonData: function() {
            return f
        },
        getMediaPostEmbedChannelPath: function() {
            return _
        },
        canUseMediaPostEmbed: function() {
            return E
        }
    }), n("702976");
    var i = n("312016"),
        s = n("361572"),
        r = n("305961"),
        a = n("315102"),
        o = n("387111"),
        l = n("856220"),
        u = n("49111"),
        d = n("894488"),
        c = n("782340");

    function f(e) {
        var t, n, i, s, r;
        let {
            mediaPostEmbedData: u,
            guild: f,
            parentChannel: _,
            postThread: E,
            user: h,
            selectedGuildId: g,
            canAccess: m = !1
        } = e;
        if (null == u) return null;
        let p = (0, l.getThumbnailImage)(u.thumbnail),
            S = !m && u.has_media_attachment,
            v = m ? c.default.Messages.MEDIA_POST_EMBED_SUBSCRIBED_CTA : c.default.Messages.MEDIA_POST_EMBED_SUBSCRIBE_CTA,
            T = null != h ? o.default.getName(u.guild_id, u.channel_id, h) : void 0,
            I = null == h ? void 0 : h.getAvatarURL(null == f ? void 0 : f.id, 40);
        (null == I || g !== u.guild_id) && (I = a.default.getGuildIconURL({
            id: u.guild_id,
            icon: u.guild_icon,
            size: 40,
            canAnimate: !1
        }));
        let C = function(e) {
                if (null == e) return !1;
                let {
                    height: t,
                    width: n
                } = e;
                return null != t && null != n && t >= n
            }(u.thumbnail) && !S,
            A = (null === (t = u.thumbnail) || void 0 === t ? void 0 : t.filename) != null && (null === (i = u.thumbnail) || void 0 === i ? void 0 : null === (n = i.filename) || void 0 === n ? void 0 : n.startsWith(d.SPOILER_ATTACHMENT_PREFIX));
        return {
            title: null !== (s = u.title) && void 0 !== s ? s : "",
            subtitle: u.description,
            ctaText: v,
            coverImage: p,
            coverImageOverlayText: S ? c.default.Messages.MEDIA_POST_EMBED_BLURRED_THUMBNAIL_TEXT : void 0,
            parentChannelId: u.parent_channel_id,
            threadId: u.channel_id,
            postThread: E,
            messageId: u.message_id,
            canAccess: m,
            guildId: u.guild_id,
            guildName: null !== (r = null == f ? void 0 : f.name) && void 0 !== r ? r : u.guild_name,
            authorId: null == u ? void 0 : u.author_id,
            authorName: T,
            channelName: null == _ ? void 0 : _.name,
            avatarUrl: I,
            shouldShowBlurredThumbnailImage: S,
            shouldContainMediaWithBackground: C,
            shouldSpoiler: A,
            obscureAwaitingScan: !1,
            flags: u.flags,
            contentScanVersion: u.content_scan_version
        }
    }

    function _(e) {
        if (null == e) return;
        let t = (0, i.parseURLSafely)(e);
        if (null == t) return;
        let n = (0, i.remainingPathFromDiscordHostMatch)(t);
        if (null != n) return (0, s.tryParseChannelPath)(n)
    }

    function E(e, t) {
        let n = r.default.getGuild(e);
        if (null == n || null == t) return !1;
        let i = n.hasFeature(u.GuildFeatures.CREATOR_MONETIZABLE) || n.hasFeature(u.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
            s = !0 === t.isMediaChannel();
        return s && i
    }
}