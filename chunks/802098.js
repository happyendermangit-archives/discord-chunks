function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, s, a, o = n("442837"),
        l = n("433517"),
        u = n("570140"),
        d = n("706454"),
        _ = n("695346"),
        c = n("581883"),
        E = n("596401");
    let I = {},
        T = {},
        f = null,
        S = null,
        h = null,
        A = "lastChangeLogDate",
        m = null,
        N = null,
        p = new Set;

    function O() {
        m = _.LastReceivedChangelogId.getSetting()
    }
    class R extends(i = o.default.Store) {
        initialize() {
            this.waitFor(d.default, c.default), this.syncWith([d.default], () => !0), this.syncWith([c.default], O);
            let e = l.Storage.get(A);
            if (null != e) try {
                N = new Date(e)
            } catch {
                l.Storage.remove(A)
            }
        }
        getChangelog(e, t) {
            var n, i;
            return null !== (i = null === (n = I[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== i ? i : null
        }
        latestChangelogId() {
            return f
        }
        getChangelogLoadStatus(e, t) {
            var n, i;
            return null !== (i = null === (n = T[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== i ? i : E.ChangelogLoadState.NOT_LOADED
        }
        hasLoadedConfig() {
            return null != h
        }
        getConfig() {
            return h
        }
        overrideId() {
            return S
        }
        lastSeenChangelogId() {
            return m
        }
        lastSeenChangelogDate() {
            return N
        }
        getStateForDebugging() {
            return {
                changelogConfig: h,
                loadedChangelogs: T,
                lastSeenChangelogId: m,
                lastSeenChangelogDate: N
            }
        }
        isLocked() {
            return p.size > 0
        }
    }
    a = "ChangelogStore", (s = "displayName") in(r = R) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new R(u.default, {
        CHANGE_LOG_LOCK: function(e) {
            let {
                key: t
            } = e;
            if (p.has(t)) return !1;
            (p = new Set(p)).add(t)
        },
        CHANGE_LOG_UNLOCK: function(e) {
            let {
                key: t
            } = e;
            if (!p.has(t)) return !1;
            (p = new Set(p)).delete(t)
        },
        CHANGE_LOG_SET_CONFIG: function(e) {
            let {
                config: t,
                latestChangelogId: n
            } = e;
            f = n, h = t
        },
        CHANGE_LOG_FETCH_SUCCESS: function(e) {
            let {
                id: t,
                changelog: n
            } = e;
            null == I[t] && (I[t] = {}), I[t][n.locale] = {
                id: t,
                date: n.date,
                body: n.content,
                revision: 1,
                locale: n.locale,
                [n.asset_type === E.AssetType.YOUTUBE_VIDEO_ID ? "youtube_video_id" : "image"]: n.asset
            }, null == T[t] && (T[t] = {}), T[t][n.locale] = E.ChangelogLoadState.LOADED_SUCCESS
        },
        CHANGE_LOG_FETCH_FAILED: function(e) {
            let {
                id: t,
                locale: n
            } = e;
            if (null != I[t] && null != I[t][n]) return !1;
            null == T[t] && (T[t] = {}), T[t][n] = E.ChangelogLoadState.LOADED_FAILURE
        },
        CHANGE_LOG_SET_OVERRIDE: function(e) {
            let {
                id: t
            } = e;
            S = t
        },
        CHANGE_LOG_MARK_SEEN: function(e) {
            let {
                changelogDate: t
            } = e;
            N = new Date(t), l.Storage.set(A, t)
        }
    })
}