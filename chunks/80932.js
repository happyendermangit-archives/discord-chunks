function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        deleteEmoji: function() {
            return N
        },
        favoriteEmoji: function() {
            return R
        },
        fetchEmoji: function() {
            return A
        },
        setDiversityColor: function() {
            return h
        },
        unfavoriteEmoji: function() {
            return C
        },
        updateEmoji: function() {
            return p
        },
        uploadEmoji: function() {
            return m
        }
    }), n("653041");
    var i = n("392711"),
        r = n.n(i),
        s = n("544891"),
        a = n("381499"),
        o = n("570140"),
        l = n("479531"),
        u = n("339085"),
        d = n("633302"),
        _ = n("38618"),
        c = n("675478"),
        E = n("486472"),
        I = n("668781"),
        T = n("981631"),
        f = n("526761"),
        S = n("689938");

    function h(e) {
        c.PreloadedUserSettingsActionCreators.updateAsync("textAndImages", t => {
            t.diversitySurrogate = a.StringValue.create(), t.diversitySurrogate.value = e
        }, f.UserSettingsDelay.FREQUENT_USER_ACTION)
    }

    function A(e) {
        o.default.dispatch({
            type: "EMOJI_FETCH",
            guildId: e
        }), s.HTTP.get({
            url: T.Endpoints.GUILD_EMOJIS(e),
            oldFormErrors: !0
        }).then(t => o.default.dispatch({
            type: "EMOJI_FETCH_SUCCESS",
            guildId: e,
            emojis: t.body
        }), () => o.default.dispatch({
            type: "EMOJI_FETCH_FAILURE",
            guildId: e
        }))
    }

    function m(e) {
        let {
            guildId: t,
            image: n,
            name: i,
            roles: r
        } = e;
        return o.default.dispatch({
            type: "EMOJI_UPLOAD_START",
            guildId: t
        }), s.HTTP.post({
            url: T.Endpoints.GUILD_EMOJIS(t),
            body: {
                image: n,
                name: i,
                roles: r
            },
            oldFormErrors: !0
        }).then(() => o.default.dispatch({
            type: "EMOJI_UPLOAD_STOP",
            guildId: t
        }), e => (o.default.dispatch({
            type: "EMOJI_UPLOAD_STOP",
            guildId: t
        }), Promise.reject(e)))
    }

    function N(e, t) {
        return o.default.dispatch({
            type: "EMOJI_DELETE",
            guildId: e,
            emojiId: t
        }), s.HTTP.del({
            url: T.Endpoints.GUILD_EMOJI(e, t),
            oldFormErrors: !0
        })
    }
    async function p(e) {
        let {
            guildId: t,
            emojiId: n,
            name: i,
            roles: r
        } = e;
        try {
            return await s.HTTP.patch({
                url: T.Endpoints.GUILD_EMOJI(t, n),
                body: {
                    name: i,
                    roles: r
                },
                oldFormErrors: !0
            })
        } catch (e) {
            throw new l.default(e)
        }
    }

    function O(e) {
        return E.default.totalUnavailableGuilds > 0 || !_.default.isConnected() ? e : e.filter(e => {
            var t;
            return null != (null !== (t = u.default.getCustomEmojiById(e)) && void 0 !== t ? t : d.default.getByName(e))
        })
    }

    function R(e) {
        var t;
        (function(e) {
            null != e && c.FrecencyUserSettingsActionCreators.updateAsync("favoriteEmojis", t => (t.emojis = O(t.emojis), r().size(t.emojis) >= f.MAX_FAVORITES) ? (I.default.show({
                title: S.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                body: S.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                    count: f.MAX_FAVORITES
                })
            }), !1) : !t.emojis.includes(e) && void t.emojis.push(e), f.UserSettingsDelay.INFREQUENT_USER_ACTION)
        })(null !== (t = e.id) && void 0 !== t ? t : e.name)
    }

    function C(e) {
        var t;
        (function(e) {
            null != e && c.FrecencyUserSettingsActionCreators.updateAsync("favoriteEmojis", t => {
                if (!t.emojis.includes(e)) return !1;
                t.emojis = t.emojis.filter(t => e !== t), t.emojis = O(t.emojis)
            }, f.UserSettingsDelay.INFREQUENT_USER_ACTION)
        })(null !== (t = e.id) && void 0 !== t ? t : e.name)
    }
}