function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useEmojiAndSourceGuild: function() {
            return _
        }
    }), n("47120");
    var i = n("470079"),
        r = n("399606"),
        s = n("430824"),
        a = n("339085"),
        o = n("906411"),
        l = n("400106"),
        u = n("981631");
    let d = (e, t, n) => {
            let i = null != n ? e.getCustomEmojiById(n) : null;
            if ((null == i ? void 0 : i.type) === o.EmojiTypes.GUILD) return {
                emoji: i,
                joinedEmojiSourceGuildRecord: t.getGuild(null == i ? void 0 : i.guildId)
            };
            return {
                emoji: null,
                joinedEmojiSourceGuildRecord: null
            }
        },
        _ = e => {
            let {
                emojiId: t,
                refreshPositionKey: n
            } = e, {
                joinedEmojiSourceGuildRecord: o,
                emoji: _
            } = (0, r.useStateFromStoresObject)([a.default, s.default], () => d(a.default, s.default, t)), c = null != o, E = null != o && o.hasFeature(u.GuildFeatures.DISCOVERABLE), I = (!c || E) && null != t, [T, f] = i.useState(I), S = null != o ? l.default.createFromGuildRecord(o) : null, [h, A] = i.useState(S);
            return i.useEffect(() => {
                null == n || n();
                let e = async () => {
                    A(null != t ? await l.default.getGuildFromEmojiId(t) : null), f(!1), null == n || n()
                };
                if (I) {
                    e();
                    return
                }
                null == n || n()
            }, [t, I]), {
                expressionSourceGuild: h,
                joinedEmojiSourceGuildRecord: o,
                hasJoinedEmojiSourceGuild: c,
                emoji: _,
                isFetching: T
            }
        }
}