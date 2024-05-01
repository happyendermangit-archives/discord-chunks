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
    var i, r, a = n("442837"),
        s = n("258609"),
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
        let a = t.getGuild(e.getGuildId()),
            s = null !== (i = null == a ? void 0 : a.maxStageVideoChannelUsers) && void 0 !== i ? i : 0;
        return (!e.isGuildStageVoice() || !(s <= 0)) && (!r || !!T(e, n)) && !!n.can(E.Permissions.STREAM, e) && null != a && a.afkChannelId !== e.id && !0
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
        let a;
        if (null == e) return [!1, 2];
        let s = t.isInChannel(e.id),
            l = e instanceof o.ChannelRecordBase && (0, c.isChannelFull)(e, t, n),
            u = T(e, i),
            d = null != r.getAwaitingRemoteSessionInfo() || null != r.getRemoteSessionId();
        return d ? a = 0 : u || s ? l && !s && (a = 1) : a = 2, [!__OVERLAY__ && !d && (s || u && !l), a]
    }

    function A(e) {
        return (0, a.useStateFromStoresArray)([_.default, u.default, d.default, s.default], () => h(e, _.default, u.default, d.default, s.default))
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