function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useFirstForumPostMessage: function() {
            return h
        },
        useMostRecentForumMessage: function() {
            return C
        },
        preloadForumThreads: function() {
            return I
        }
    }), n("222007");
    var a = n("917351"),
        i = n.n(a),
        l = n("446674"),
        r = n("872717"),
        s = n("913144"),
        u = n("42203"),
        d = n("299039"),
        o = n("670902"),
        c = n("349778"),
        _ = n("430475"),
        f = n("324261"),
        E = n("49111");
    class g {
        get(e) {
            return !this._set.hasOwnProperty(e) && (this._set[e] = this._defaultValueFunc()), this._set[e]
        }
        delete(e) {
            delete this._set[e]
        }
        hasNext() {
            return !i.isEmpty(this._set)
        }
        next() {
            return d.default.keys(this._set)[0]
        }
        constructor(e) {
            this._set = {}, this._defaultValueFunc = e
        }
    }
    let p = new class e {
            request(e, t) {
                this.requested.get(e).add(t)
            }
            hasRequested(e, t) {
                return this.requested.get(e).has(t)
            }
            finishRequesting(e, t) {
                let n = this.requested.get(e);
                t.forEach(e => n.delete(e)), p.compact(e)
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
                this.requested = new g(() => new Set)
            }
        },
        S = null;

    function m(e, t) {
        let n = (0, c.isForumActivityExperimentEnabled)(e);
        if (n) {
            let {
                loaded: e,
                message: n
            } = f.default.getMessageState(t);
            return !e && null == n
        }
        return !1
    }

    function A(e, t) {
        return !e && null == t
    }

    function h(e) {
        var t, n;
        let {
            loaded: a,
            firstMessage: i
        } = (0, l.useStateFromStoresObject)([_.default], () => _.default.getMessage(e.id)), r = (0, l.useStateFromStores)([u.default], () => u.default.getChannel(e.parent_id));
        if (null != r && (t = a, n = i, !t && null == n)) v(r, e.id);
        return {
            loaded: a,
            firstMessage: i
        }
    }

    function C(e, t) {
        let {
            loaded: n,
            message: a
        } = (0, l.useStateFromStoresObject)([f.default], () => f.default.getMessageState(t.id));
        return null != e && m(t.guild_id, t.id) && v(e, t.id), {
            loaded: n,
            mostRecentMessage: a
        }
    }

    function T(e, t) {
        let n = !1;
        t.forEach(t => {
            var a, i;
            let {
                loaded: l,
                firstMessage: r
            } = _.default.getMessage(t);
            if (a = l, i = r, !a && null == i || m(e.guild_id, t)) p.request(e.id, t), n = !0
        }), n && null == S && (S = setTimeout(N, 0))
    }

    function I(e) {
        T(e, (0, o.computeThreadIdsSnapshot)(e.id).slice(0, 10))
    }

    function v(e, t) {
        if (p.hasRequested(e.id, t)) return;
        let n = (0, o.computeThreadIdsSnapshot)(e.id),
            a = n.findIndex(e => e === t),
            i = n.slice(a, a + 5).filter(t => !p.hasRequested(e.id, t));
        T(e, i)
    }
    async function N() {
        try {
            for (; p.hasNext();) await y(p.next())
        } finally {
            S = null
        }
    }
    async function y(e) {
        let t = p.getNextBatch(e, 10);
        try {
            var n;
            if (0 === t.length) return;
            let a = null === (n = u.default.getChannel(e)) || void 0 === n ? void 0 : n.guild_id;
            if (null == a) return;
            let {
                body: {
                    threads: i
                }
            } = await r.HTTP.post({
                url: E.Endpoints.FORUM_POSTS(e),
                body: {
                    thread_ids: t
                }
            });
            s.default.dispatch({
                type: "LOAD_FORUM_POSTS",
                guildId: a,
                threads: i
            })
        } catch (e) {} finally {
            p.finishRequesting(e, t)
        }
    }
}