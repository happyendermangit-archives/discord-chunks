function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, a, s, o = n("442837"),
        l = n("524437"),
        u = n("570140"),
        d = n("581883"),
        _ = n("131704"),
        c = n("981631");
    let E = {},
        I = !1;

    function T() {
        var e, t, n;
        I = null !== (n = null === (e = d.default.settings.favorites) || void 0 === e ? void 0 : e.muted) && void 0 !== n && n, E = {};
        let i = null === (t = d.default.settings.favorites) || void 0 === t ? void 0 : t.favoriteChannels;
        if (null == i) return !1;
        for (let e in i) {
            let t = i[e];
            E[e] = {
                id: e,
                nickname: "" !== t.nickname ? t.nickname : null,
                type: t.type,
                order: t.position,
                parentId: "0" !== t.parentId ? t.parentId : null
            }
        }
    }
    class f extends(s = o.default.Store) {
        initialize() {
            this.waitFor(d.default), T(), this.syncWith([d.default], T)
        }
        getFavoriteChannels() {
            return E
        }
        get favoriteServerMuted() {
            return I
        }
        isFavorite(e) {
            return null != e && null != E[e]
        }
        getFavorite(e) {
            if (null != e) return E[e]
        }
        getCategoryRecord(e) {
            if (e in E && E[e].type === l.FavoriteChannelType.CATEGORY) {
                var t, n;
                return t = E[e], (0, _.createChannelRecord)({
                    id: t.id,
                    name: null !== (n = t.nickname) && void 0 !== n ? n : "",
                    type: c.ChannelTypes.GUILD_CATEGORY,
                    position: t.order,
                    guild_id: c.FAVORITES
                })
            }
            return null
        }
        getNickname(e) {
            var t;
            let n = this.getFavorite(e);
            return null !== (t = null == n ? void 0 : n.nickname) && void 0 !== t ? t : void 0
        }
    }
    a = "FavoriteStore", (r = "displayName") in(i = f) ? Object.defineProperty(i, r, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = a, t.default = new f(u.default, {})
}