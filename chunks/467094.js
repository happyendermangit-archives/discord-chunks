function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        fetchStickerPack: function() {
            return m
        },
        fetchStickerPacks: function() {
            return y
        },
        fetchSticker: function() {
            return g
        },
        fetchGuildStickers: function() {
            return T
        },
        deleteGuildSticker: function() {
            return C
        },
        createGuildSticker: function() {
            return v
        },
        updateGuildSticker: function() {
            return R
        },
        addStickerPreview: function() {
            return _
        },
        clearStickerPreview: function() {
            return A
        },
        favoriteSticker: function() {
            return L
        },
        unfavoriteSticker: function() {
            return N
        }
    }), r("424973");
    var i = r("917351"),
        n = r.n(i),
        s = r("872717"),
        a = r("913144"),
        l = r("404118"),
        c = r("619443"),
        u = r("915639"),
        d = r("872173"),
        o = r("766274"),
        f = r("341542"),
        S = r("697218"),
        k = r("271560"),
        E = r("364685"),
        p = r("49111"),
        I = r("397336"),
        h = r("782340");
    let m = async (e, t) => {
        let {
            body: r
        } = await (0, k.httpGetWithCountryCodeQuery)(p.Endpoints.STICKER_PACK(e));
        return a.default.dispatch({
            type: "STICKER_PACK_FETCH_SUCCESS",
            packId: e,
            pack: r,
            ingestStickers: t
        }), r
    }, y = async function() {
        let {
            locale: e = u.default.locale
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (E.default.isFetchingStickerPacks || E.default.hasLoadedStickerPacks) return;
        a.default.wait(() => {
            a.default.dispatch({
                type: "STICKER_PACKS_FETCH_START"
            })
        });
        let {
            body: {
                sticker_packs: t
            }
        } = await s.HTTP.get({
            url: p.Endpoints.STICKER_PACKS,
            query: {
                locale: e
            }
        });
        a.default.dispatch({
            type: "STICKER_PACKS_FETCH_SUCCESS",
            packs: t
        })
    }, g = async e => {
        let {
            body: t
        } = await s.HTTP.get({
            url: p.Endpoints.STICKER(e)
        });
        a.default.dispatch({
            type: "STICKER_FETCH_SUCCESS",
            sticker: t
        })
    }, T = async e => {
        let {
            body: t
        } = await s.HTTP.get({
            url: p.Endpoints.GUILD_STICKER_PACKS(e)
        });
        a.default.dispatch({
            type: "GUILD_STICKERS_FETCH_SUCCESS",
            guildId: e,
            stickers: t.map(e => null != e.user ? {
                ...e,
                user: new o.default(e.user)
            } : e)
        })
    }, C = async e => {
        await s.HTTP.del({
            url: p.Endpoints.GUILD_STICKER(e.guild_id, e.id)
        })
    }, v = async (e, t) => {
        let r = await s.HTTP.post({
            url: p.Endpoints.GUILD_STICKER_PACKS(e),
            body: t
        });
        return a.default.dispatch({
            type: "GUILD_STICKERS_CREATE_SUCCESS",
            guildId: e,
            sticker: {
                ...r.body,
                user: S.default.getCurrentUser()
            }
        }), r.body
    }, R = async (e, t, r) => {
        let i = await s.HTTP.patch({
            url: p.Endpoints.GUILD_STICKER(e, t),
            body: r
        });
        return i.body
    };

    function _(e, t, r) {
        a.default.dispatch({
            type: "ADD_STICKER_PREVIEW",
            channelId: e,
            sticker: t,
            draftType: r
        })
    }

    function A(e, t) {
        a.default.dispatch({
            type: "CLEAR_STICKER_PREVIEW",
            channelId: e,
            draftType: t
        })
    }

    function x(e) {
        return f.default.totalUnavailableGuilds > 0 || !c.default.isConnected() ? e : e.filter(e => null != E.default.getStickerById(e))
    }

    function L(e) {
        d.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => (t.stickerIds = x(t.stickerIds), n.size(t.stickerIds) >= I.MAX_FAVORITES) ? (l.default.show({
            title: h.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
            body: h.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                count: I.MAX_FAVORITES
            })
        }), !1) : !t.stickerIds.includes(e) && void t.stickerIds.push(e), I.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function N(e) {
        d.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => {
            t.stickerIds = t.stickerIds.filter(t => t !== e), t.stickerIds = x(t.stickerIds)
        }, I.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }
}