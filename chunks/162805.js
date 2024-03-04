function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var i = n("446674"),
        s = n("233736"),
        r = n("913144");
    let a = {},
        o = {},
        l = {
            scrollTop: 0
        };

    function u(e) {
        return {
            guildId: e,
            scrollTop: null,
            scrollTo: null
        }
    }

    function d(e) {
        if (null != a[e]) {
            let {
                scrollTop: t,
                scrollHeight: n,
                offsetHeight: i
            } = a[e];
            return t === n - i
        }
        return !0
    }
    class c extends i.default.Store {
        percentageScrolled(e) {
            if (null != a[e]) {
                let {
                    scrollTop: t,
                    scrollHeight: n
                } = a[e];
                return t / n
            }
            return 1
        }
        getChannelDimensions(e) {
            return a[e]
        }
        getGuildDimensions(e) {
            var t;
            return null !== (t = o[e]) && void 0 !== t ? t : u(e)
        }
        getGuildListDimensions() {
            return l
        }
        isAtBottom(e) {
            return d(e)
        }
    }
    c.displayName = "DimensionStore";
    var f = new c(r.default, {
        UPDATE_CHANNEL_DIMENSIONS: function(e) {
            let {
                channelId: t,
                scrollTop: n,
                scrollHeight: i,
                offsetHeight: r
            } = e, o = a[t];
            if (null == n || null == i || null == r) {
                if (null == o) return !1;
                delete a[t]
            } else {
                let e = {
                    channelId: t,
                    scrollTop: n,
                    scrollHeight: i,
                    offsetHeight: r
                };
                if (null != o && (0, s.default)(o, e)) return !1;
                a[t] = e
            }
        },
        UPDATE_CHANNEL_LIST_DIMENSIONS: function(e) {
            let {
                guildId: t,
                scrollTop: n,
                scrollTo: i
            } = e;
            null == o[t] && (o[t] = u(t)), void 0 !== n && (o[t].scrollTop = n);
            let s = !1;
            return void 0 !== i && (s = o[t].scrollTo !== i, o[t].scrollTo = i), null != i || s
        },
        UPDATE_GUILD_LIST_DIMENSIONS: function(e) {
            let {
                scrollTop: t
            } = e;
            l.scrollTop = t
        },
        CALL_CREATE: function(e) {
            let {
                channelId: t
            } = e;
            d(t) && delete a[t]
        }
    })
}