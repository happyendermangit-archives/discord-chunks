function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        shouldFetchGuildFeed: function() {
            return a
        },
        default: function() {
            return i
        }
    });
    var t = E("884691"),
        o = E("446674"),
        n = E("713810"),
        r = E("185014");

    function a(e, _) {
        let E = r.default.getLastFetchedMillis(e);
        if (!_ && null != E && Date.now() - E < 72e5) return !1;
        let {
            loading: t
        } = r.default.getFetchStatus(e);
        return t === r.LoadingStatus.NONE && !0
    }

    function i(e) {
        let {
            guildId: _,
            highlightedItemData: E
        } = e, {
            loading: i,
            error: I
        } = (0, o.useStateFromStores)([r.default], () => r.default.getFetchStatus(_), [_]), T = t.useCallback(e => {
            let {
                force: t,
                flushSeenItems: o
            } = e;
            async function r() {
                try {
                    await (0, n.fetchGuildFeed)({
                        guildId: _,
                        flushSeenItems: o,
                        refresh: !0,
                        highlightedItemData: E
                    })
                } catch (e) {
                    console.error(e)
                }
            }
            a(_, null != t && t) && r()
        }, [_, E]), s = t.useCallback(() => {
            a(_, !0) && e();
            async function e() {
                try {
                    await (0, n.fetchGuildFeed)({
                        guildId: _,
                        refresh: !1
                    })
                } catch (e) {
                    console.error(e)
                }
            }
        }, [_]);
        return t.useEffect(() => {
            T({
                force: null != E
            })
        }, [T, E]), {
            fetchFresh: T,
            fetchPage: s,
            loading: i,
            error: I
        }
    }
}