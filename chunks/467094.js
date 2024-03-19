function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        fetchStickerPack: function() {
            return h
        },
        fetchStickerPacks: function() {
            return I
        },
        fetchSticker: function() {
            return v
        },
        fetchGuildStickers: function() {
            return g
        },
        deleteGuildSticker: function() {
            return C
        },
        createGuildSticker: function() {
            return T
        },
        updateGuildSticker: function() {
            return R
        },
        addStickerPreview: function() {
            return x
        },
        clearStickerPreview: function() {
            return _
        },
        favoriteSticker: function() {
            return N
        },
        unfavoriteSticker: function() {
            return L
        }
    }), r("424973");
    var n = r("917351"),
        i = r.n(n),
        s = r("872717"),
        l = r("913144"),
        a = r("404118"),
        u = r("619443"),
        c = r("915639"),
        d = r("872173"),
        o = r("766274"),
        f = r("341542"),
        S = r("697218"),
        k = r("271560"),
        p = r("364685"),
        y = r("49111"),
        m = r("397336"),
        E = r("782340");
    let h = async (e, t) => {
        let {
            body: r
        } = await (0, k.httpGetWithCountryCodeQuery)(y.Endpoints.STICKER_PACK(e));
        return l.default.dispatch({
            type: "STICKER_PACK_FETCH_SUCCESS",
            packId: e,
            pack: r,
            ingestStickers: t
        }), r
    }, I = async function() {
        let {
            locale: e = c.default.locale
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (p.default.isFetchingStickerPacks || p.default.hasLoadedStickerPacks) return;
        l.default.wait(() => {
            l.default.dispatch({
                type: "STICKER_PACKS_FETCH_START"
            })
        });
        let {
            body: {
                sticker_packs: t
            }
        } = await s.default.get({
            url: y.Endpoints.STICKER_PACKS,
            query: {
                locale: e
            }
        });
        l.default.dispatch({
            type: "STICKER_PACKS_FETCH_SUCCESS",
            packs: t
        })
    }, v = async e => {
        let {
            body: t
        } = await s.default.get({
            url: y.Endpoints.STICKER(e)
        });
        l.default.dispatch({
            type: "STICKER_FETCH_SUCCESS",
            sticker: t
        })
    }, g = async e => {
        let {
            body: t
        } = await s.default.get({
            url: y.Endpoints.GUILD_STICKER_PACKS(e)
        });
        l.default.dispatch({
            type: "GUILD_STICKERS_FETCH_SUCCESS",
            guildId: e,
            stickers: t.map(e => null != e.user ? {
                ...e,
                user: new o.default(e.user)
            } : e)
        })
    }, C = async e => {
        await s.default.delete({
            url: y.Endpoints.GUILD_STICKER(e.guild_id, e.id)
        })
    }, T = async (e, t) => {
        let r = await s.default.post({
            url: y.Endpoints.GUILD_STICKER_PACKS(e),
            body: t
        });
        return l.default.dispatch({
            type: "GUILD_STICKERS_CREATE_SUCCESS",
            guildId: e,
            sticker: {
                ...r.body,
                user: S.default.getCurrentUser()
            }
        }), r.body
    }, R = async (e, t, r) => {
        let n = await s.default.patch({
            url: y.Endpoints.GUILD_STICKER(e, t),
            body: r
        });
        return n.body
    };

    function x(e, t, r) {
        l.default.dispatch({
            type: "ADD_STICKER_PREVIEW",
            channelId: e,
            sticker: t,
            draftType: r
        })
    }

    function _(e, t) {
        l.default.dispatch({
            type: "CLEAR_STICKER_PREVIEW",
            channelId: e,
            draftType: t
        })
    }

    function A(e) {
        return f.default.totalUnavailableGuilds > 0 || !u.default.isConnected() ? e : e.filter(e => null != p.default.getStickerById(e))
    }

    function N(e) {
        d.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => (t.stickerIds = A(t.stickerIds), i.size(t.stickerIds) >= m.MAX_FAVORITES) ? (a.default.show({
            title: E.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
            body: E.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                count: m.MAX_FAVORITES
            })
        }), !1) : !t.stickerIds.includes(e) && void t.stickerIds.push(e), m.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function L(e) {
        d.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => {
            t.stickerIds = t.stickerIds.filter(t => t !== e), t.stickerIds = A(t.stickerIds)
        }, m.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }
}