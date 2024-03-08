function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useEmojiAndSourceGuild: function() {
            return c
        }
    }), n("222007");
    var i = n("884691"),
        l = n("65597"),
        a = n("305961"),
        s = n("385976"),
        r = n("858619"),
        o = n("101263"),
        u = n("49111");
    let d = (e, t, n) => {
            let i = null != n ? e.getCustomEmojiById(n) : null;
            if ((null == i ? void 0 : i.type) === r.EmojiTypes.GUILD) return {
                emoji: i,
                joinedEmojiSourceGuildRecord: t.getGuild(null == i ? void 0 : i.guildId)
            };
            return {
                emoji: null,
                joinedEmojiSourceGuildRecord: null
            }
        },
        c = e => {
            let {
                emojiId: t,
                refreshPositionKey: n
            } = e, {
                joinedEmojiSourceGuildRecord: r,
                emoji: c
            } = (0, l.useStateFromStoresObject)([s.default, a.default], () => d(s.default, a.default, t)), f = null != r, p = null != r && r.hasFeature(u.GuildFeatures.DISCOVERABLE), m = (!f || p) && null != t, [h, x] = i.useState(m), E = null != r ? o.default.createFromGuildRecord(r) : null, [y, g] = i.useState(E);
            return i.useEffect(() => {
                null == n || n();
                let e = async () => {
                    let e = null != t ? await o.default.getGuildFromEmojiId(t) : null;
                    g(e), x(!1), null == n || n()
                };
                if (m) {
                    e();
                    return
                }
                null == n || n()
            }, [t, m]), {
                expressionSourceGuild: y,
                joinedEmojiSourceGuildRecord: r,
                hasJoinedEmojiSourceGuild: f,
                emoji: c,
                isFetching: h
            }
        }
}