function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canStreamInChannel: function() {
            return f
        },
        canWatchStream: function() {
            return h
        },
        getStreamCTAString: function() {
            return S
        },
        getStreamEligibleChannels: function() {
            return m
        },
        useCanWatchStream: function() {
            return A
        }
    }), n("653041"), n("47120");
    var i, r, s = n("442837"),
        a = n("258609"),
        o = n("131704"),
        l = n("984933"),
        u = n("430824"),
        d = n("496675"),
        _ = n("979651"),
        c = n("934415"),
        E = n("981631"),
        I = n("689938");
    let T = (e, t) => (0, o.isPrivate)(e.type) || t.canBasicChannel(E.BasicPermissions.CONNECT | E.BasicPermissions.VIEW_CHANNEL, e);

    function f(e, t, n) {
        var i;
        let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        if (e.isPrivate()) return !0;
        let s = t.getGuild(e.getGuildId()),
            a = null !== (i = null == s ? void 0 : s.maxStageVideoChannelUsers) && void 0 !== i ? i : 0;
        return (!e.isGuildStageVoice() || !(a <= 0)) && (!r || !!T(e, n)) && !!n.can(E.Permissions.STREAM, e) && null != s && s.afkChannelId !== e.id && !0
    }

    function S(e) {
        switch (e) {
            case 0:
                return I.default.Messages.CONSOLE_STREAM_UNAVAILABLE;
            case 1:
                return I.default.Messages.UNABLE_TO_JOIN_CHANNEL_FULL_MODAL_HEADER;
            case 2:
                return I.default.Messages.STREAM_NO_PERMISSION_CTA;
            default:
                return I.default.Messages.WATCH_STREAM
        }
    }

    function h(e, t, n, i, r) {
        let s;
        if (null == e) return [!1, 2];
        let a = t.isInChannel(e.id),
            l = e instanceof o.ChannelRecordBase && (0, c.isChannelFull)(e, t, n),
            u = T(e, i),
            d = null != r.getAwaitingRemoteSessionInfo() || null != r.getRemoteSessionId();
        return d ? s = 0 : u || a ? l && !a && (s = 1) : s = 2, [!__OVERLAY__ && !d && (a || u && !l), s]
    }

    function A(e) {
        return (0, s.useStateFromStoresArray)([_.default, u.default, d.default, a.default], () => h(e, _.default, u.default, d.default, a.default))
    }

    function m(e, t, n) {
        let i = [];
        for (let {
                channel: r
            }
            of e[l.GUILD_VOCAL_CHANNELS_KEY]) f(r, t, n) && i.push(r);
        return i
    }(r = i || (i = {}))[r.REMOTE_MODE = 0] = "REMOTE_MODE", r[r.CHANNEL_FULL = 1] = "CHANNEL_FULL", r[r.NO_PERMISSION = 2] = "NO_PERMISSION"
}