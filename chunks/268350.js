function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addStickerPreview: function() {
            return g
        },
        clearStickerPreview: function() {
            return L
        },
        createGuildSticker: function() {
            return R
        },
        deleteGuildSticker: function() {
            return p
        },
        favoriteSticker: function() {
            return v
        },
        fetchGuildStickers: function() {
            return O
        },
        fetchSticker: function() {
            return N
        },
        fetchStickerPack: function() {
            return h
        },
        fetchStickerPacks: function() {
            return m
        },
        unfavoriteSticker: function() {
            return M
        },
        updateGuildSticker: function() {
            return C
        }
    }), n("653041");
    var i = n("392711"),
        r = n.n(i),
        s = n("544891"),
        a = n("570140"),
        o = n("668781"),
        l = n("38618"),
        u = n("706454"),
        d = n("675478"),
        _ = n("598077"),
        c = n("486472"),
        E = n("594174"),
        I = n("73346"),
        T = n("926491"),
        f = n("981631"),
        S = n("526761"),
        A = n("689938");
    let h = async (e, t) => {
        let {
            body: n
        } = await (0, I.httpGetWithCountryCodeQuery)(f.Endpoints.STICKER_PACK(e));
        return a.default.dispatch({
            type: "STICKER_PACK_FETCH_SUCCESS",
            packId: e,
            pack: n,
            ingestStickers: t
        }), n
    }, m = async function() {
        let {
            locale: e = u.default.locale
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (T.default.isFetchingStickerPacks || T.default.hasLoadedStickerPacks) return;
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
            url: f.Endpoints.STICKER_PACKS,
            query: {
                locale: e
            }
        });
        a.default.dispatch({
            type: "STICKER_PACKS_FETCH_SUCCESS",
            packs: t
        })
    }, N = async e => {
        let {
            body: t
        } = await s.HTTP.get({
            url: f.Endpoints.STICKER(e)
        });
        a.default.dispatch({
            type: "STICKER_FETCH_SUCCESS",
            sticker: t
        })
    }, O = async e => {
        let {
            body: t
        } = await s.HTTP.get({
            url: f.Endpoints.GUILD_STICKER_PACKS(e)
        });
        a.default.dispatch({
            type: "GUILD_STICKERS_FETCH_SUCCESS",
            guildId: e,
            stickers: t.map(e => null != e.user ? {
                ...e,
                user: new _.default(e.user)
            } : e)
        })
    }, p = async e => {
        await s.HTTP.del({
            url: f.Endpoints.GUILD_STICKER(e.guild_id, e.id)
        })
    }, R = async (e, t) => {
        let n = await s.HTTP.post({
            url: f.Endpoints.GUILD_STICKER_PACKS(e),
            body: t
        });
        return a.default.dispatch({
            type: "GUILD_STICKERS_CREATE_SUCCESS",
            guildId: e,
            sticker: {
                ...n.body,
                user: E.default.getCurrentUser()
            }
        }), n.body
    }, C = async (e, t, n) => (await s.HTTP.patch({
        url: f.Endpoints.GUILD_STICKER(e, t),
        body: n
    })).body;

    function g(e, t, n) {
        a.default.dispatch({
            type: "ADD_STICKER_PREVIEW",
            channelId: e,
            sticker: t,
            draftType: n
        })
    }

    function L(e, t) {
        a.default.dispatch({
            type: "CLEAR_STICKER_PREVIEW",
            channelId: e,
            draftType: t
        })
    }

    function D(e) {
        return c.default.totalUnavailableGuilds > 0 || !l.default.isConnected() ? e : e.filter(e => null != T.default.getStickerById(e))
    }

    function v(e) {
        d.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => (t.stickerIds = D(t.stickerIds), r().size(t.stickerIds) >= S.MAX_FAVORITES) ? (o.default.show({
            title: A.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
            body: A.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                count: S.MAX_FAVORITES
            })
        }), !1) : !t.stickerIds.includes(e) && void t.stickerIds.push(e), S.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function M(e) {
        d.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => {
            t.stickerIds = t.stickerIds.filter(t => t !== e), t.stickerIds = D(t.stickerIds)
        }, S.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }
}