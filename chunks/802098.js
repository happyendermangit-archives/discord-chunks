function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, s, a, o = n("442837"),
        l = n("433517"),
        u = n("570140"),
        d = n("706454"),
        _ = n("596401");
    let c = {},
        E = {},
        I = null,
        T = null,
        f = null,
        S = "lastChangeLogId",
        h = "lastChangeLogDate",
        A = null,
        m = null,
        N = new Set;
    class p extends(i = o.default.Store) {
        initialize() {
            var e;
            this.waitFor(d.default), this.syncWith([d.default], () => !0), A = null !== (e = l.Storage.get(S)) && void 0 !== e ? e : null;
            let t = l.Storage.get(h);
            if (null != t) try {
                m = new Date(t)
            } catch {
                l.Storage.remove(h)
            }
        }
        getChangelog(e, t) {
            var n, i;
            return null !== (i = null === (n = c[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== i ? i : null
        }
        latestChangelogId() {
            return I
        }
        getChangelogLoadStatus(e, t) {
            var n, i;
            return null !== (i = null === (n = E[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== i ? i : _.ChangelogLoadState.NOT_LOADED
        }
        hasLoadedConfig() {
            return null != f
        }
        getConfig() {
            return f
        }
        overrideId() {
            return T
        }
        lastSeenChangelogId() {
            return A
        }
        lastSeenChangelogDate() {
            return m
        }
        getStateForDebugging() {
            return {
                changelogConfig: f,
                loadedChangelogs: E,
                lastSeenChangelogId: A,
                lastSeenChangelogDate: m
            }
        }
        isLocked() {
            return N.size > 0
        }
    }
    a = "ChangelogStore", (s = "displayName") in(r = p) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new p(u.default, {
        CHANGE_LOG_LOCK: function(e) {
            let {
                key: t
            } = e;
            if (N.has(t)) return !1;
            (N = new Set(N)).add(t)
        },
        CHANGE_LOG_UNLOCK: function(e) {
            let {
                key: t
            } = e;
            if (!N.has(t)) return !1;
            (N = new Set(N)).delete(t)
        },
        CHANGE_LOG_SET_CONFIG: function(e) {
            let {
                config: t,
                latestChangelogId: n
            } = e;
            I = n, f = t
        },
        CHANGE_LOG_FETCH_SUCCESS: function(e) {
            let {
                id: t,
                changelog: n
            } = e;
            null == c[t] && (c[t] = {}), c[t][n.locale] = {
                id: t,
                date: n.date,
                body: n.content,
                revision: 1,
                locale: n.locale,
                [n.asset_type === _.AssetType.YOUTUBE_VIDEO_ID ? "youtube_video_id" : "image"]: n.asset
            }, null == E[t] && (E[t] = {}), E[t][n.locale] = _.ChangelogLoadState.LOADED_SUCCESS
        },
        CHANGE_LOG_FETCH_FAILED: function(e) {
            let {
                id: t,
                locale: n
            } = e;
            if (null != c[t] && null != c[t][n]) return !1;
            null == E[t] && (E[t] = {}), E[t][n] = _.ChangelogLoadState.LOADED_FAILURE
        },
        CHANGE_LOG_SET_OVERRIDE: function(e) {
            let {
                id: t
            } = e;
            T = t
        },
        CHANGE_LOG_MARK_SEEN: function(e) {
            let {
                changelogId: t,
                changelogDate: n
            } = e;
            A = null != t ? t : null, m = new Date(n), l.Storage.set(S, t), l.Storage.set(h, n)
        }
    })
}