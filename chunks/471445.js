function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getChannelIconComponent: function() {
            return q
        },
        getChannelIconTooltipText: function() {
            return Q
        },
        getSimpleChannelIconComponent: function() {
            return J
        }
    });
    var i = n("859802"),
        r = n("281956"),
        a = n("271383"),
        s = n("430824"),
        o = n("607744"),
        l = n("594174"),
        u = n("482500"),
        d = n("36082"),
        _ = n("119828"),
        c = n("747380"),
        E = n("648414"),
        I = n("315970"),
        T = n("308540"),
        f = n("814550"),
        S = n("93879"),
        h = n("535321"),
        A = n("277942"),
        m = n("974029"),
        N = n("481479"),
        p = n("160696"),
        O = n("832440"),
        R = n("634648"),
        C = n("356842"),
        g = n("630641"),
        L = n("908434"),
        v = n("74846"),
        D = n("789536"),
        M = n("316949"),
        y = n("133429"),
        P = n("702066"),
        U = n("763300"),
        b = n("883877"),
        G = n("724215"),
        w = n("761529"),
        B = n("308570"),
        k = n("632184"),
        V = n("414896"),
        x = n("398856"),
        F = n("170039"),
        H = n("178695"),
        Y = n("548420"),
        j = n("761374"),
        W = n("435443"),
        K = n("447003"),
        z = n("176505"),
        Z = n("981631"),
        X = n("689938");

    function Q(e, t, n, i) {
        if (null == e) return null;
        if (e.id === (null == t ? void 0 : t.rulesChannelId)) return X.default.Messages.CHANNEL_TOOLTIP_RULES;
        switch (e.type) {
            case Z.ChannelTypes.GUILD_TEXT:
                if (i) return X.default.Messages.CHANNEL_TOOLTIP_TEXT_ACTIVE_THREADS;
                if (e.isNSFW()) return X.default.Messages.CHANNEL_TOOLTIP_TEXT_NSFW;
                if ((0, K.default)(e)) return X.default.Messages.CHANNEL_TOOLTIP_TEXT_LIMITED;
                return X.default.Messages.CHANNEL_TOOLTIP_TEXT;
            case Z.ChannelTypes.GUILD_FORUM:
                let r = e.isMediaChannel();
                if (e.isNSFW()) return r ? X.default.Messages.CHANNEL_TOOLTIP_MEDIA_NSFW : X.default.Messages.CHANNEL_TOOLTIP_FORUM_NSFW;
                if ((0, K.default)(e)) return r ? X.default.Messages.CHANNEL_TOOLTIP_MEDIA_LIMITED : X.default.Messages.CHANNEL_TOOLTIP_FORUM_LIMITED;
                return r ? X.default.Messages.MEDIA_CHANNEL : X.default.Messages.FORUM;
            case Z.ChannelTypes.GUILD_MEDIA:
                if (e.isNSFW()) return X.default.Messages.CHANNEL_TOOLTIP_MEDIA_NSFW;
                if ((0, K.default)(e)) return X.default.Messages.CHANNEL_TOOLTIP_MEDIA_LIMITED;
                return X.default.Messages.MEDIA_CHANNEL;
            case Z.ChannelTypes.GUILD_STAGE_VOICE:
                if (n) return X.default.Messages.CHANNEL_TOOLTIP_STAGE_LOCKED;
                if ((0, K.default)(e)) return X.default.Messages.CHANNEL_TOOLTIP_STAGE_LIMITED;
                return X.default.Messages.CHANNEL_TOOLTIP_STAGE;
            case Z.ChannelTypes.GUILD_VOICE:
                if (n) return X.default.Messages.CHANNEL_TOOLTIP_VOICE_LOCKED;
                if ((0, K.default)(e)) return X.default.Messages.CHANNEL_TOOLTIP_VOICE_LIMITED;
                return X.default.Messages.CHANNEL_TOOLTIP_VOICE;
            case Z.ChannelTypes.GUILD_ANNOUNCEMENT:
                if (e.isNSFW()) return X.default.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS_NSFW;
                if ((0, K.default)(e)) return X.default.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS_LIMITED;
                return X.default.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS;
            case Z.ChannelTypes.GUILD_STORE:
                return X.default.Messages.CHANNEL_TOOLTIP_STORE;
            case Z.ChannelTypes.DM:
                return X.default.Messages.DM;
            case Z.ChannelTypes.GROUP_DM:
                return X.default.Messages.GROUP_DM;
            case Z.ChannelTypes.GUILD_DIRECTORY:
                return X.default.Messages.CHANNEL_TOOLTIP_DIRECTORY;
            case Z.ChannelTypes.PUBLIC_THREAD:
                return X.default.Messages.THREAD;
            case Z.ChannelTypes.PRIVATE_THREAD:
                return X.default.Messages.PRIVATE_THREAD;
            default:
                return null
        }
    }

    function q(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            {
                locked: X = !1,
                video: Q = !1,
                stream: q = !1,
                hasActiveThreads: J = !1,
                textFocused: $ = !1
            } = n;
        if (null == e) return null;
        null == t && (t = s.default.getGuild(e.getGuildId()));
        let ee = (0, r.shouldShowMembershipVerificationGate)(null == t ? void 0 : t.id, [s.default, o.default, l.default, a.default]),
            et = null != t && (0, i.canSeeGuildHome)(null == t ? void 0 : t.id);
        if ((null == e ? void 0 : e.id) === (null == t ? void 0 : t.rulesChannelId)) return f.default;
        switch (e.type) {
            case Z.ChannelTypes.GUILD_ANNOUNCEMENT:
                if (J) {
                    if (e.isNSFW()) return U.default;
                    if ((0, K.default)(e)) return G.default;
                    else return u.default
                }
                if (e.isNSFW()) return P.default;
                if ((0, K.default)(e)) return y.default;
                return M.default;
            case Z.ChannelTypes.GUILD_STORE:
                return Y.default;
            case Z.ChannelTypes.DM:
            case Z.ChannelTypes.GROUP_DM:
                return d.default;
            case Z.ChannelTypes.PRIVATE_THREAD:
                return w.default;
            case Z.ChannelTypes.ANNOUNCEMENT_THREAD:
            case Z.ChannelTypes.PUBLIC_THREAD:
                if (e.isNSFW()) return b.default;
                if (e.isForumPost()) return R.default;
                else return W.default;
            case Z.ChannelTypes.GUILD_TEXT:
                if (J) {
                    if (e.isNSFW()) return b.default;
                    if ((0, K.default)(e)) return w.default;
                    else return W.default
                }
                if (e.isNSFW()) return A.default;
                if ((0, K.default)(e)) return h.default;
                return S.default;
            case Z.ChannelTypes.GUILD_FORUM:
                let en = e.isMediaChannel();
                if (e.isNSFW()) return en ? D.default : O.default;
                if ((0, K.default)(e)) return en ? v.default : p.default;
                else return en ? L.default : N.default;
            case Z.ChannelTypes.GUILD_MEDIA:
                if (e.isNSFW()) return D.default;
                if ((0, K.default)(e)) return v.default;
                else return L.default;
            case Z.ChannelTypes.GUILD_STAGE_VOICE:
                if (ee) return (0, K.default)(e) ? g.default : H.default;
                if (X) return g.default;
                if ((0, K.default)(e)) return H.default;
                else return F.default;
            case Z.ChannelTypes.GUILD_VOICE:
                if ($) return m.default;
                if (e.isNSFW()) return x.default;
                if (q) return j.default;
                if (ee) {
                    if ((0, K.default)(e)) return g.default;
                    return Q ? c.default : V.default
                }
                if (X) return g.default;
                if ((0, K.default)(e)) return Q ? c.default : V.default;
                else return Q ? _.default : k.default;
            case Z.ChannelTypes.GUILD_DIRECTORY:
                return T.default;
            case Z.ChannelTypes.GUILD_CATEGORY:
                return I.default;
            default:
                if (z.StaticChannelIds.has(e.id)) {
                    if (e.id === z.StaticChannelId.GUILD_HOME || e.id === z.StaticChannelId.SERVER_GUIDE) {
                        if (et) return C.default;
                        return B.default
                    }
                    if (e.id === z.StaticChannelId.CHANNEL_BROWSER || e.id === z.StaticChannelId.CUSTOMIZE_COMMUNITY) return E.default
                }
                return null
        }
    }

    function J(e) {
        switch (e) {
            case Z.ChannelTypes.GUILD_ANNOUNCEMENT:
                return M.default;
            case Z.ChannelTypes.GUILD_STORE:
                return Y.default;
            case Z.ChannelTypes.DM:
            case Z.ChannelTypes.GROUP_DM:
                return d.default;
            case Z.ChannelTypes.PRIVATE_THREAD:
                return w.default;
            case Z.ChannelTypes.ANNOUNCEMENT_THREAD:
            case Z.ChannelTypes.PUBLIC_THREAD:
                return W.default;
            case Z.ChannelTypes.GUILD_TEXT:
            case Z.ChannelTypes.GUILD_FORUM:
            case Z.ChannelTypes.GUILD_MEDIA:
                return S.default;
            case Z.ChannelTypes.GUILD_STAGE_VOICE:
                return F.default;
            case Z.ChannelTypes.GUILD_VOICE:
                return k.default;
            case Z.ChannelTypes.GUILD_CATEGORY:
                return I.default;
            default:
                return null
        }
    }
}