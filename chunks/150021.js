function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setDiversityColor: function() {
            return y
        },
        fetchEmoji: function() {
            return g
        },
        uploadEmoji: function() {
            return S
        },
        deleteEmoji: function() {
            return C
        },
        updateEmoji: function() {
            return T
        },
        favoriteEmoji: function() {
            return I
        },
        unfavoriteEmoji: function() {
            return v
        }
    }), n("424973");
    var i = n("917351"),
        l = n.n(i),
        a = n("872717"),
        s = n("750028"),
        r = n("913144"),
        o = n("599417"),
        u = n("385976"),
        d = n("867805"),
        c = n("619443"),
        f = n("872173"),
        p = n("341542"),
        m = n("404118"),
        h = n("49111"),
        x = n("397336"),
        E = n("782340");

    function y(e) {
        f.PreloadedUserSettingsActionCreators.updateAsync("textAndImages", t => {
            t.diversitySurrogate = s.StringValue.create(), t.diversitySurrogate.value = e
        }, x.UserSettingsDelay.FREQUENT_USER_ACTION)
    }

    function g(e) {
        r.default.dispatch({
            type: "EMOJI_FETCH",
            guildId: e
        }), a.HTTP.get({
            url: h.Endpoints.GUILD_EMOJIS(e),
            oldFormErrors: !0
        }).then(t => r.default.dispatch({
            type: "EMOJI_FETCH_SUCCESS",
            guildId: e,
            emojis: t.body
        }), () => r.default.dispatch({
            type: "EMOJI_FETCH_FAILURE",
            guildId: e
        }))
    }

    function S(e) {
        let {
            guildId: t,
            image: n,
            name: i,
            roles: l
        } = e;
        return r.default.dispatch({
            type: "EMOJI_UPLOAD_START",
            guildId: t
        }), a.HTTP.post({
            url: h.Endpoints.GUILD_EMOJIS(t),
            body: {
                image: n,
                name: i,
                roles: l
            },
            oldFormErrors: !0
        }).then(() => r.default.dispatch({
            type: "EMOJI_UPLOAD_STOP",
            guildId: t
        }), e => (r.default.dispatch({
            type: "EMOJI_UPLOAD_STOP",
            guildId: t
        }), Promise.reject(e)))
    }

    function C(e, t) {
        return r.default.dispatch({
            type: "EMOJI_DELETE",
            guildId: e,
            emojiId: t
        }), a.HTTP.del({
            url: h.Endpoints.GUILD_EMOJI(e, t),
            oldFormErrors: !0
        })
    }
    async function T(e) {
        let {
            guildId: t,
            emojiId: n,
            name: i,
            roles: l
        } = e;
        try {
            return await a.HTTP.patch({
                url: h.Endpoints.GUILD_EMOJI(t, n),
                body: {
                    name: i,
                    roles: l
                },
                oldFormErrors: !0
            })
        } catch (e) {
            throw new o.default(e)
        }
    }

    function _(e) {
        return p.default.totalUnavailableGuilds > 0 || !c.default.isConnected() ? e : e.filter(e => {
            var t;
            let n = null !== (t = u.default.getCustomEmojiById(e)) && void 0 !== t ? t : d.default.getByName(e);
            return null != n
        })
    }

    function I(e) {
        var t;
        (function(e) {
            null != e && f.FrecencyUserSettingsActionCreators.updateAsync("favoriteEmojis", t => (t.emojis = _(t.emojis), l.size(t.emojis) >= x.MAX_FAVORITES) ? (m.default.show({
                title: E.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                body: E.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                    count: x.MAX_FAVORITES
                })
            }), !1) : !t.emojis.includes(e) && void t.emojis.push(e), x.UserSettingsDelay.INFREQUENT_USER_ACTION)
        })(null !== (t = e.id) && void 0 !== t ? t : e.name)
    }

    function v(e) {
        var t;
        (function(e) {
            null != e && f.FrecencyUserSettingsActionCreators.updateAsync("favoriteEmojis", t => {
                if (!t.emojis.includes(e)) return !1;
                t.emojis = t.emojis.filter(t => e !== t), t.emojis = _(t.emojis)
            }, x.UserSettingsDelay.INFREQUENT_USER_ACTION)
        })(null !== (t = e.id) && void 0 !== t ? t : e.name)
    }
}