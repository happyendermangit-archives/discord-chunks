function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getMediaPostEmbedCommonData: function() {
            return _
        },
        getMediaPostEmbedChannelPath: function() {
            return c
        },
        canUseMediaPostEmbed: function() {
            return I
        }
    }), n("702976");
    var r = n("312016"),
        i = n("361572"),
        l = n("305961"),
        u = n("315102"),
        a = n("387111"),
        o = n("856220"),
        s = n("49111"),
        d = n("894488"),
        E = n("782340");

    function _(e) {
        var t, n, r, i, l;
        let {
            mediaPostEmbedData: s,
            guild: _,
            parentChannel: c,
            postThread: I,
            user: S,
            selectedGuildId: T,
            canAccess: f = !1
        } = e;
        if (null == s) return null;
        let p = (0, o.getThumbnailImage)(s.thumbnail),
            N = !f && s.has_media_attachment,
            A = f ? E.default.Messages.MEDIA_POST_EMBED_SUBSCRIBED_CTA : E.default.Messages.MEDIA_POST_EMBED_SUBSCRIBE_CTA,
            R = null != S ? a.default.getName(s.guild_id, s.channel_id, S) : void 0,
            C = null == S ? void 0 : S.getAvatarURL(null == _ ? void 0 : _.id, 40);
        (null == C || T !== s.guild_id) && (C = u.default.getGuildIconURL({
            id: s.guild_id,
            icon: s.guild_icon,
            size: 40,
            canAnimate: !1
        }));
        let L = function(e) {
                if (null == e) return !1;
                let {
                    height: t,
                    width: n
                } = e;
                return null != t && null != n && t >= n
            }(s.thumbnail) && !N,
            O = (null === (t = s.thumbnail) || void 0 === t ? void 0 : t.filename) != null && (null === (r = s.thumbnail) || void 0 === r ? void 0 : null === (n = r.filename) || void 0 === n ? void 0 : n.startsWith(d.SPOILER_ATTACHMENT_PREFIX));
        return {
            title: null !== (i = s.title) && void 0 !== i ? i : "",
            subtitle: s.description,
            ctaText: A,
            coverImage: p,
            coverImageOverlayText: N ? E.default.Messages.MEDIA_POST_EMBED_BLURRED_THUMBNAIL_TEXT : void 0,
            parentChannelId: s.parent_channel_id,
            threadId: s.channel_id,
            postThread: I,
            messageId: s.message_id,
            canAccess: f,
            guildId: s.guild_id,
            guildName: null !== (l = null == _ ? void 0 : _.name) && void 0 !== l ? l : s.guild_name,
            authorId: null == s ? void 0 : s.author_id,
            authorName: R,
            channelName: null == c ? void 0 : c.name,
            avatarUrl: C,
            shouldShowBlurredThumbnailImage: N,
            shouldContainMediaWithBackground: L,
            shouldSpoiler: O,
            obscureAwaitingScan: !1,
            flags: s.flags,
            contentScanVersion: s.content_scan_version
        }
    }

    function c(e) {
        if (null == e) return;
        let t = (0, r.parseURLSafely)(e);
        if (null == t) return;
        let n = (0, r.remainingPathFromDiscordHostMatch)(t);
        if (null != n) return (0, i.tryParseChannelPath)(n)
    }

    function I(e, t) {
        let n = l.default.getGuild(e);
        if (null == n || null == t) return !1;
        let r = n.hasFeature(s.GuildFeatures.CREATOR_MONETIZABLE) || n.hasFeature(s.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
            i = !0 === t.isMediaChannel();
        return i && r
    }
}