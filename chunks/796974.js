function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, a, s, o = n("442837"),
        l = n("902704"),
        u = n("570140");
    let d = {},
        _ = {},
        c = {
            scrollTop: 0
        };

    function E(e) {
        return {
            guildId: e,
            scrollTop: null,
            scrollTo: null
        }
    }

    function I(e) {
        if (null != d[e]) {
            let {
                scrollTop: t,
                scrollHeight: n,
                offsetHeight: i
            } = d[e];
            return t === n - i
        }
        return !0
    }
    class T extends(s = o.default.Store) {
        percentageScrolled(e) {
            if (null != d[e]) {
                let {
                    scrollTop: t,
                    scrollHeight: n
                } = d[e];
                return t / n
            }
            return 1
        }
        getChannelDimensions(e) {
            return d[e]
        }
        getGuildDimensions(e) {
            var t;
            return null !== (t = _[e]) && void 0 !== t ? t : E(e)
        }
        getGuildListDimensions() {
            return c
        }
        isAtBottom(e) {
            return I(e)
        }
    }
    a = "DimensionStore", (r = "displayName") in(i = T) ? Object.defineProperty(i, r, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = a, t.default = new T(u.default, {
        UPDATE_CHANNEL_DIMENSIONS: function(e) {
            let {
                channelId: t,
                scrollTop: n,
                scrollHeight: i,
                offsetHeight: r
            } = e, a = d[t];
            if (null == n || null == i || null == r) {
                if (null == a) return !1;
                delete d[t]
            } else {
                let e = {
                    channelId: t,
                    scrollTop: n,
                    scrollHeight: i,
                    offsetHeight: r
                };
                if (null != a && (0, l.default)(a, e)) return !1;
                d[t] = e
            }
        },
        UPDATE_CHANNEL_LIST_DIMENSIONS: function(e) {
            let {
                guildId: t,
                scrollTop: n,
                scrollTo: i
            } = e;
            null == _[t] && (_[t] = E(t)), void 0 !== n && (_[t].scrollTop = n);
            let r = !1;
            return void 0 !== i && (r = _[t].scrollTo !== i, _[t].scrollTo = i), null != i || r
        },
        UPDATE_GUILD_LIST_DIMENSIONS: function(e) {
            let {
                scrollTop: t
            } = e;
            c.scrollTop = t
        },
        CALL_CREATE: function(e) {
            let {
                channelId: t
            } = e;
            I(t) && delete d[t]
        }
    })
}