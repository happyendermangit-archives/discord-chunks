function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canStreamInChannel: function() {
            return m
        },
        canWatchStream: function() {
            return I
        },
        getStreamCTAString: function() {
            return y
        },
        getStreamEligibleChannels: function() {
            return O
        },
        useCanWatchStream: function() {
            return h
        }
    });
    var r, o, i = n("898511"),
        a = n("254061"),
        u = n("569492"),
        s = n("29604"),
        l = n("306912"),
        c = n("29884"),
        f = n("665863"),
        d = n("115752"),
        _ = n("281767"),
        E = n("941504"),
        p = function(e, t) {
            return (0, u.isPrivate)(e.type) || t.canBasicChannel(_.BasicPermissions.CONNECT | _.BasicPermissions.VIEW_CHANNEL, e)
        };

    function m(e, t, n) {
        var r, o = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        if (e.isPrivate()) return !0;
        var i = t.getGuild(e.getGuildId()),
            a = null !== (r = null == i ? void 0 : i.maxStageVideoChannelUsers) && void 0 !== r ? r : 0;
        return (!e.isGuildStageVoice() || !(a <= 0)) && (!o || !!p(e, n)) && !!n.can(_.Permissions.STREAM, e) && null != i && i.afkChannelId !== e.id && !0
    }

    function y(e) {
        switch (e) {
            case 0:
                return E.default.Messages.CONSOLE_STREAM_UNAVAILABLE;
            case 1:
                return E.default.Messages.UNABLE_TO_JOIN_CHANNEL_FULL_MODAL_HEADER;
            case 2:
                return E.default.Messages.STREAM_NO_PERMISSION_CTA;
            default:
                return E.default.Messages.WATCH_STREAM
        }
    }

    function I(e, t, n, r, o) {
        if (null == e) return [!1, 2];
        var i, a, s, l = t.isInChannel(e.id);
        var c = (i = e, (null != (a = u.ChannelRecordBase) && "undefined" != typeof Symbol && a[Symbol.hasInstance] ? !!a[Symbol.hasInstance](i) : i instanceof a) && (0, d.isChannelFull)(e, t, n)),
            f = p(e, r),
            _ = null != o.getAwaitingRemoteSessionInfo() || null != o.getRemoteSessionId();
        return _ ? s = 0 : f || l ? c && !l && (s = 1) : s = 2, [!__OVERLAY__ && !_ && (l || f && !c), s]
    }

    function h(e) {
        return (0, i.useStateFromStoresArray)([f.default, l.default, c.default, a.default], function() {
            return I(e, f.default, l.default, c.default, a.default)
        })
    }

    function O(e, t, n) {
        var r = [],
            o = !0,
            i = !1,
            a = void 0;
        try {
            for (var u, l = e[0, s.GUILD_VOCAL_CHANNELS_KEY][Symbol.iterator](); !(o = (u = l.next()).done); o = !0) {
                var c = u.value.channel;
                m(c, t, n) && r.push(c)
            }
        } catch (e) {
            i = !0, a = e
        } finally {
            try {
                !o && null != l.return && l.return()
            } finally {
                if (i) throw a
            }
        }
        return r
    }(r = o || (o = {}))[r.REMOTE_MODE = 0] = "REMOTE_MODE", r[r.CHANNEL_FULL = 1] = "CHANNEL_FULL", r[r.NO_PERMISSION = 2] = "NO_PERMISSION"
}