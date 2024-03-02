function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setDiversityColor: function() {
            return C
        },
        fetchEmoji: function() {
            return S
        },
        uploadEmoji: function() {
            return T
        },
        deleteEmoji: function() {
            return I
        },
        updateEmoji: function() {
            return v
        },
        favoriteEmoji: function() {
            return N
        },
        unfavoriteEmoji: function() {
            return A
        }
    }), n("424973");
    var l = n("917351"),
        i = n.n(l),
        a = n("872717"),
        s = n("750028"),
        r = n("913144"),
        o = n("599417"),
        u = n("385976"),
        d = n("867805"),
        c = n("619443"),
        f = n("872173"),
        m = n("341542"),
        p = n("404118"),
        h = n("49111"),
        E = n("397336"),
        g = n("782340");

    function C(e) {
        f.PreloadedUserSettingsActionCreators.updateAsync("textAndImages", t => {
            t.diversitySurrogate = s.StringValue.create(), t.diversitySurrogate.value = e
        }, E.UserSettingsDelay.FREQUENT_USER_ACTION)
    }

    function S(e) {
        r.default.dispatch({
            type: "EMOJI_FETCH",
            guildId: e
        }), a.default.get({
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

    function T(e) {
        let {
            guildId: t,
            image: n,
            name: l,
            roles: i
        } = e;
        return r.default.dispatch({
            type: "EMOJI_UPLOAD_START",
            guildId: t
        }), a.default.post({
            url: h.Endpoints.GUILD_EMOJIS(t),
            body: {
                image: n,
                name: l,
                roles: i
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

    function I(e, t) {
        return r.default.dispatch({
            type: "EMOJI_DELETE",
            guildId: e,
            emojiId: t
        }), a.default.delete({
            url: h.Endpoints.GUILD_EMOJI(e, t),
            oldFormErrors: !0
        })
    }
    async function v(e) {
        let {
            guildId: t,
            emojiId: n,
            name: l,
            roles: i
        } = e;
        try {
            return await a.default.patch({
                url: h.Endpoints.GUILD_EMOJI(t, n),
                body: {
                    name: l,
                    roles: i
                },
                oldFormErrors: !0
            })
        } catch (e) {
            throw new o.default(e)
        }
    }

    function _(e) {
        return m.default.totalUnavailableGuilds > 0 || !c.default.isConnected() ? e : e.filter(e => {
            var t;
            let n = null !== (t = u.default.getCustomEmojiById(e)) && void 0 !== t ? t : d.default.getByName(e);
            return null != n
        })
    }

    function N(e) {
        var t;
        (function(e) {
            null != e && f.FrecencyUserSettingsActionCreators.updateAsync("favoriteEmojis", t => (t.emojis = _(t.emojis), i.size(t.emojis) >= E.MAX_FAVORITES) ? (p.default.show({
                title: g.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                body: g.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                    count: E.MAX_FAVORITES
                })
            }), !1) : !t.emojis.includes(e) && void t.emojis.push(e), E.UserSettingsDelay.INFREQUENT_USER_ACTION)
        })(null !== (t = e.id) && void 0 !== t ? t : e.name)
    }

    function A(e) {
        var t;
        (function(e) {
            null != e && f.FrecencyUserSettingsActionCreators.updateAsync("favoriteEmojis", t => {
                if (!t.emojis.includes(e)) return !1;
                t.emojis = t.emojis.filter(t => e !== t), t.emojis = _(t.emojis)
            }, E.UserSettingsDelay.INFREQUENT_USER_ACTION)
        })(null !== (t = e.id) && void 0 !== t ? t : e.name)
    }
}