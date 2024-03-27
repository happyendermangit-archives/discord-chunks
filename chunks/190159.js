function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        },
        shouldFetchGuildFeed: function() {
            return o
        }
    });
    var i = n("470079"),
        r = n("442837"),
        s = n("276438"),
        a = n("642101");

    function o(e, t) {
        let n = a.default.getLastFetchedMillis(e);
        if (!t && null != n && Date.now() - n < 72e5) return !1;
        let {
            loading: i
        } = a.default.getFetchStatus(e);
        return i === a.LoadingStatus.NONE && !0
    }

    function l(e) {
        let {
            guildId: t,
            highlightedItemData: n
        } = e, {
            loading: l,
            error: u
        } = (0, r.useStateFromStores)([a.default], () => a.default.getFetchStatus(t), [t]), d = i.useCallback(e => {
            let {
                force: i,
                flushSeenItems: r
            } = e;
            async function a() {
                try {
                    await (0, s.fetchGuildFeed)({
                        guildId: t,
                        flushSeenItems: r,
                        refresh: !0,
                        highlightedItemData: n
                    })
                } catch (e) {
                    console.error(e)
                }
            }
            o(t, null != i && i) && a()
        }, [t, n]), _ = i.useCallback(() => {
            o(t, !0) && e();
            async function e() {
                try {
                    await (0, s.fetchGuildFeed)({
                        guildId: t,
                        refresh: !1
                    })
                } catch (e) {
                    console.error(e)
                }
            }
        }, [t]);
        return i.useEffect(() => {
            d({
                force: null != n
            })
        }, [d, n]), {
            fetchFresh: d,
            fetchPage: _,
            loading: l,
            error: u
        }
    }
}