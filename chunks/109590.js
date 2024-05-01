function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        preloadForumThreads: function() {
            return R
        },
        useFirstForumPostMessage: function() {
            return N
        },
        useMostRecentForumMessage: function() {
            return p
        }
    }), n("47120");
    var i = n("392711"),
        r = n.n(i),
        a = n("442837"),
        s = n("544891"),
        o = n("570140"),
        l = n("592125"),
        u = n("709054"),
        d = n("238349"),
        _ = n("901648"),
        c = n("660189"),
        E = n("682474"),
        I = n("981631");

    function T(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class f {
        get(e) {
            return !this._set.hasOwnProperty(e) && (this._set[e] = this._defaultValueFunc()), this._set[e]
        }
        delete(e) {
            delete this._set[e]
        }
        hasNext() {
            return !r().isEmpty(this._set)
        }
        next() {
            return u.default.keys(this._set)[0]
        }
        constructor(e) {
            T(this, "_set", void 0), T(this, "_defaultValueFunc", void 0), this._set = {}, this._defaultValueFunc = e
        }
    }
    let S = new class e {
            request(e, t) {
                this.requested.get(e).add(t)
            }
            hasRequested(e, t) {
                return this.requested.get(e).has(t)
            }
            finishRequesting(e, t) {
                let n = this.requested.get(e);
                t.forEach(e => n.delete(e)), S.compact(e)
            }
            getRequested(e) {
                return this.requested.get(e)
            }
            getNextBatch(e, t) {
                return Array.from(this.requested.get(e)).slice(0, t)
            }
            hasNext() {
                return this.requested.hasNext()
            }
            next() {
                return this.requested.next()
            }
            compact(e) {
                0 === this.requested.get(e).size && this.requested.delete(e)
            }
            constructor() {
                T(this, "requested", void 0), this.requested = new f(() => new Set)
            }
        },
        h = null;

    function A(e, t) {
        if ((0, _.isForumActivityExperimentEnabled)(e)) {
            let {
                loaded: e,
                message: n
            } = E.default.getMessageState(t);
            return !e && null == n
        }
        return !1
    }

    function m(e, t) {
        return !e && null == t
    }

    function N(e) {
        var t, n;
        let {
            loaded: i,
            firstMessage: r
        } = (0, a.useStateFromStoresObject)([c.default], () => c.default.getMessage(e.id)), s = (0, a.useStateFromStores)([l.default], () => l.default.getChannel(e.parent_id));
        if (null != s && (t = i, n = r, !t && null == n)) C(s, e.id);
        return {
            loaded: i,
            firstMessage: r
        }
    }

    function p(e, t) {
        let {
            loaded: n,
            message: i
        } = (0, a.useStateFromStoresObject)([E.default], () => E.default.getMessageState(t.id));
        return null != e && A(t.guild_id, t.id) && C(e, t.id), {
            loaded: n,
            mostRecentMessage: i
        }
    }

    function O(e, t) {
        let n = !1;
        t.forEach(t => {
            var i, r;
            let {
                loaded: a,
                firstMessage: s
            } = c.default.getMessage(t);
            if (i = a, r = s, !i && null == r || A(e.guild_id, t)) S.request(e.id, t), n = !0
        }), n && null == h && (h = setTimeout(g, 0))
    }

    function R(e) {
        O(e, (0, d.computeThreadIdsSnapshot)(e.id).slice(0, 10))
    }

    function C(e, t) {
        if (S.hasRequested(e.id, t)) return;
        let n = (0, d.computeThreadIdsSnapshot)(e.id),
            i = n.findIndex(e => e === t),
            r = n.slice(i, i + 5).filter(t => !S.hasRequested(e.id, t));
        O(e, r)
    }
    async function g() {
        try {
            for (; S.hasNext();) await L(S.next())
        } finally {
            h = null
        }
    }
    async function L(e) {
        let t = S.getNextBatch(e, 10);
        try {
            var n;
            if (0 === t.length) return;
            let i = null === (n = l.default.getChannel(e)) || void 0 === n ? void 0 : n.guild_id;
            if (null == i) return;
            let {
                body: {
                    threads: r
                }
            } = await s.HTTP.post({
                url: I.Endpoints.FORUM_POSTS(e),
                body: {
                    thread_ids: t
                }
            });
            o.default.dispatch({
                type: "LOAD_FORUM_POSTS",
                guildId: i,
                threads: r
            })
        } catch (e) {} finally {
            S.finishRequesting(e, t)
        }
    }
}