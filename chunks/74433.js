function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("47120");
    var i = n("833858"),
        r = n("657305"),
        a = n("841784"),
        s = n("420660"),
        o = n("981631"),
        l = n("689938");

    function u(e) {
        return {
            [o.ActivityTypes.STREAMING]: e ? l.default.Messages.UNFORMATTED_STREAMING : l.default.Messages.STREAMING,
            [o.ActivityTypes.LISTENING]: e ? l.default.Messages.UNFORMATTED_LISTENING_TO : l.default.Messages.LISTENING_TO,
            [o.ActivityTypes.WATCHING]: e ? l.default.Messages.UNFORMATTED_WATCHING : l.default.Messages.WATCHING,
            [o.ActivityTypes.COMPETING]: e ? l.default.Messages.UNFORMATTED_COMPETING : l.default.Messages.COMPETING
        }
    }

    function d(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            d = arguments.length > 3 ? arguments[3] : void 0;
        if (null != e && e.type === o.ActivityTypes.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
        if (null != t) return null == e || e.type !== o.ActivityTypes.PLAYING ? l.default.Messages.SHARING_SCREEN : u(n)[o.ActivityTypes.STREAMING].format({
            name: e.name
        });
        if (d && null != e && e.type === o.ActivityTypes.HANG_STATUS) return (0, i.getHangStatusText)(e);
        if (null == e || null == e.name) return null;
        if ((0, s.default)(e)) {
            let t = null != e.details && "" !== e.details ? e.details : e.name;
            return u(n)[o.ActivityTypes.STREAMING].format({
                name: t
            })
        }
        return (0, a.default)(e) ? (0, r.default)(e.name) : function(e, t, n) {
            let i = u(n);
            switch (e) {
                case o.ActivityTypes.LISTENING:
                case o.ActivityTypes.WATCHING:
                case o.ActivityTypes.COMPETING:
                    return i[e].format({
                        name: t
                    });
                case o.ActivityTypes.CUSTOM_STATUS:
                case o.ActivityTypes.HANG_STATUS:
                    return null;
                case o.ActivityTypes.PLAYING:
                default:
                    return n ? l.default.Messages.UNFORMATTED_PLAYING_GAME.format({
                        game: t
                    }) : l.default.Messages.PLAYING_GAME.format({
                        game: t
                    })
            }
        }(e.type, e.name, n)
    }

    function _(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 ? arguments[3] : void 0;
        if (Array.isArray(e)) {
            let r = e;
            null != t && (r = [...r, null]);
            let a = null;
            for (let e of r) {
                let r = d(e, t, n, i);
                if (null != r) return {
                    activity: e,
                    activityText: r
                };
                (null == e ? void 0 : e.type) === o.ActivityTypes.CUSTOM_STATUS && null != e.emoji && (a = e)
            }
            return (null == a ? void 0 : a.emoji) != null ? {
                activity: a,
                activityText: null
            } : null
        }
        return d(e, t, n, i)
    }
}