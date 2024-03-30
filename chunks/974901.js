function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getChannelIconComponent: function() {
            return J
        },
        getChannelIconTooltipText: function() {
            return Q
        },
        getSimpleChannelIconComponent: function() {
            return Z
        }
    });
    var r = n("924504"),
        o = n("654417"),
        i = n("957808"),
        a = n("306912"),
        u = n("267322"),
        s = n("208454"),
        l = n("464227"),
        c = n("238470"),
        f = n("888233"),
        d = n("9760"),
        _ = n("79362"),
        E = n("425358"),
        p = n("545307"),
        m = n("223382"),
        y = n("258674"),
        I = n("746743"),
        h = n("857851"),
        O = n("2566"),
        T = n("259931"),
        S = n("501435"),
        v = n("429047"),
        g = n("33010"),
        A = n("12897"),
        b = n("725292"),
        N = n("458872"),
        R = n("696253"),
        C = n("455083"),
        P = n("373399"),
        D = n("972059"),
        L = n("15589"),
        M = n("989267"),
        U = n("857566"),
        w = n("727482"),
        k = n("692879"),
        G = n("758099"),
        B = n("893427"),
        j = n("444192"),
        F = n("183760"),
        V = n("417863"),
        H = n("833376"),
        x = n("207326"),
        Y = n("901482"),
        W = n("244363"),
        K = n("716589"),
        z = n("928204"),
        X = n("281767"),
        q = n("941504");

    function Q(e, t, n, r) {
        if (null == e) return null;
        if (e.id === (null == t ? void 0 : t.rulesChannelId)) return q.default.Messages.CHANNEL_TOOLTIP_RULES;
        switch (e.type) {
            case X.ChannelTypes.GUILD_TEXT:
                if (r) return q.default.Messages.CHANNEL_TOOLTIP_TEXT_ACTIVE_THREADS;
                if (e.isNSFW()) return q.default.Messages.CHANNEL_TOOLTIP_TEXT_NSFW;
                if ((0, K.default)(e)) return q.default.Messages.CHANNEL_TOOLTIP_TEXT_LIMITED;
                return q.default.Messages.CHANNEL_TOOLTIP_TEXT;
            case X.ChannelTypes.GUILD_FORUM:
                var o = e.isMediaChannel();
                if (e.isNSFW()) return o ? q.default.Messages.CHANNEL_TOOLTIP_MEDIA_NSFW : q.default.Messages.CHANNEL_TOOLTIP_FORUM_NSFW;
                if ((0, K.default)(e)) return o ? q.default.Messages.CHANNEL_TOOLTIP_MEDIA_LIMITED : q.default.Messages.CHANNEL_TOOLTIP_FORUM_LIMITED;
                return o ? q.default.Messages.MEDIA_CHANNEL : q.default.Messages.FORUM;
            case X.ChannelTypes.GUILD_MEDIA:
                if (e.isNSFW()) return q.default.Messages.CHANNEL_TOOLTIP_MEDIA_NSFW;
                if ((0, K.default)(e)) return q.default.Messages.CHANNEL_TOOLTIP_MEDIA_LIMITED;
                return q.default.Messages.MEDIA_CHANNEL;
            case X.ChannelTypes.GUILD_STAGE_VOICE:
                if (n) return q.default.Messages.CHANNEL_TOOLTIP_STAGE_LOCKED;
                if ((0, K.default)(e)) return q.default.Messages.CHANNEL_TOOLTIP_STAGE_LIMITED;
                return q.default.Messages.CHANNEL_TOOLTIP_STAGE;
            case X.ChannelTypes.GUILD_VOICE:
                if (n) return q.default.Messages.CHANNEL_TOOLTIP_VOICE_LOCKED;
                if ((0, K.default)(e)) return q.default.Messages.CHANNEL_TOOLTIP_VOICE_LIMITED;
                return q.default.Messages.CHANNEL_TOOLTIP_VOICE;
            case X.ChannelTypes.GUILD_ANNOUNCEMENT:
                if (e.isNSFW()) return q.default.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS_NSFW;
                if ((0, K.default)(e)) return q.default.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS_LIMITED;
                return q.default.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS;
            case X.ChannelTypes.GUILD_STORE:
                return q.default.Messages.CHANNEL_TOOLTIP_STORE;
            case X.ChannelTypes.DM:
                return q.default.Messages.DM;
            case X.ChannelTypes.GROUP_DM:
                return q.default.Messages.GROUP_DM;
            case X.ChannelTypes.GUILD_DIRECTORY:
                return q.default.Messages.CHANNEL_TOOLTIP_DIRECTORY;
            case X.ChannelTypes.PUBLIC_THREAD:
                return q.default.Messages.THREAD;
            case X.ChannelTypes.PRIVATE_THREAD:
                return q.default.Messages.PRIVATE_THREAD;
            default:
                return null
        }
    }

    function J(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            q = n.locked,
            Q = void 0 !== q && q,
            J = n.video,
            Z = void 0 !== J && J,
            $ = n.stream,
            ee = n.hasActiveThreads,
            et = void 0 !== ee && ee,
            en = n.textFocused;
        if (null == e) return null;
        null == t && (t = a.default.getGuild(e.getGuildId()));
        var er = (0, o.shouldShowMembershipVerificationGate)(null == t ? void 0 : t.id, [a.default, u.default, s.default, i.default]),
            eo = null != t && (0, r.canSeeGuildHome)(null == t ? void 0 : t.id);
        if ((null == e ? void 0 : e.id) === (null == t ? void 0 : t.rulesChannelId)) return m.default;
        switch (e.type) {
            case X.ChannelTypes.GUILD_ANNOUNCEMENT:
                if (et) {
                    if (e.isNSFW()) return M.default;
                    if ((0, K.default)(e)) return w.default;
                    else return l.default
                }
                if (e.isNSFW()) return L.default;
                if ((0, K.default)(e)) return D.default;
                return P.default;
            case X.ChannelTypes.GUILD_STORE:
                return x.default;
            case X.ChannelTypes.DM:
            case X.ChannelTypes.GROUP_DM:
                return c.default;
            case X.ChannelTypes.PRIVATE_THREAD:
                return k.default;
            case X.ChannelTypes.ANNOUNCEMENT_THREAD:
            case X.ChannelTypes.PUBLIC_THREAD:
                if (e.isNSFW()) return U.default;
                if (e.isForumPost()) return g.default;
                else return W.default;
            case X.ChannelTypes.GUILD_TEXT:
                if (et) {
                    if (e.isNSFW()) return U.default;
                    if ((0, K.default)(e)) return k.default;
                    else return W.default
                }
                if (e.isNSFW()) return h.default;
                if ((0, K.default)(e)) return I.default;
                return y.default;
            case X.ChannelTypes.GUILD_FORUM:
                var ei = e.isMediaChannel();
                if (e.isNSFW()) return ei ? C.default : v.default;
                if ((0, K.default)(e)) return ei ? R.default : S.default;
                else return ei ? N.default : T.default;
            case X.ChannelTypes.GUILD_MEDIA:
                if (e.isNSFW()) return C.default;
                if ((0, K.default)(e)) return R.default;
                else return N.default;
            case X.ChannelTypes.GUILD_STAGE_VOICE:
                if (er) return (0, K.default)(e) ? b.default : H.default;
                if (Q) return b.default;
                if ((0, K.default)(e)) return H.default;
                else return V.default;
            case X.ChannelTypes.GUILD_VOICE:
                if (void 0 !== en && en) return O.default;
                if (e.isNSFW()) return F.default;
                if (void 0 !== $ && $) return Y.default;
                if (er) {
                    if ((0, K.default)(e)) return b.default;
                    return Z ? d.default : j.default
                }
                if (Q) return b.default;
                if ((0, K.default)(e)) return Z ? d.default : j.default;
                else return Z ? f.default : B.default;
            case X.ChannelTypes.GUILD_DIRECTORY:
                return p.default;
            case X.ChannelTypes.GUILD_CATEGORY:
                return E.default;
            default:
                if (z.StaticChannelIds.has(e.id)) {
                    if (e.id === z.StaticChannelId.GUILD_HOME || e.id === z.StaticChannelId.SERVER_GUIDE) {
                        if (eo) return A.default;
                        return G.default
                    }
                    if (e.id === z.StaticChannelId.CHANNEL_BROWSER || e.id === z.StaticChannelId.CUSTOMIZE_COMMUNITY) return _.default
                }
                return null
        }
    }

    function Z(e) {
        switch (e) {
            case X.ChannelTypes.GUILD_ANNOUNCEMENT:
                return P.default;
            case X.ChannelTypes.GUILD_STORE:
                return x.default;
            case X.ChannelTypes.DM:
            case X.ChannelTypes.GROUP_DM:
                return c.default;
            case X.ChannelTypes.PRIVATE_THREAD:
                return k.default;
            case X.ChannelTypes.ANNOUNCEMENT_THREAD:
            case X.ChannelTypes.PUBLIC_THREAD:
                return W.default;
            case X.ChannelTypes.GUILD_TEXT:
            case X.ChannelTypes.GUILD_FORUM:
            case X.ChannelTypes.GUILD_MEDIA:
                return y.default;
            case X.ChannelTypes.GUILD_STAGE_VOICE:
                return V.default;
            case X.ChannelTypes.GUILD_VOICE:
                return B.default;
            case X.ChannelTypes.GUILD_CATEGORY:
                return E.default;
            default:
                return null
        }
    }
}