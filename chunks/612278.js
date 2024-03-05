function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useFirstForumPostMessage: function() {
            return v
        },
        useMostRecentForumMessage: function() {
            return I
        },
        preloadForumThreads: function() {
            return C
        }
    }), n("222007");
    var a = n("917351"),
        i = n.n(a),
        l = n("446674"),
        d = n("872717"),
        r = n("913144"),
        s = n("42203"),
        u = n("299039"),
        o = n("670902"),
        c = n("349778"),
        f = n("430475"),
        g = n("324261"),
        p = n("49111");
    class _ {
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
            return u.default.keys(this._set)[0]
        }
        constructor(e) {
            this._set = {}, this._defaultValueFunc = e
        }
    }
    let m = new class e {
            request(e, t) {
                this.requested.get(e).add(t)
            }
            hasRequested(e, t) {
                return this.requested.get(e).has(t)
            }
            finishRequesting(e, t) {
                let n = this.requested.get(e);
                t.forEach(e => n.delete(e)), m.compact(e)
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
                this.requested = new _(() => new Set)
            }
        },
        E = null;

    function S(e, t) {
        let n = (0, c.isForumActivityExperimentEnabled)(e);
        if (n) {
            let {
                loaded: e,
                message: n
            } = g.default.getMessageState(t);
            return !e && null == n
        }
        return !1
    }

    function h(e, t) {
        return !e && null == t
    }

    function v(e) {
        var t, n;
        let {
            loaded: a,
            firstMessage: i
        } = (0, l.useStateFromStoresObject)([f.default], () => f.default.getMessage(e.id)), d = (0, l.useStateFromStores)([s.default], () => s.default.getChannel(e.parent_id));
        if (null != d && (t = a, n = i, !t && null == n)) A(d, e.id);
        return {
            loaded: a,
            firstMessage: i
        }
    }

    function I(e, t) {
        let {
            loaded: n,
            message: a
        } = (0, l.useStateFromStoresObject)([g.default], () => g.default.getMessageState(t.id));
        return null != e && S(t.guild_id, t.id) && A(e, t.id), {
            loaded: n,
            mostRecentMessage: a
        }
    }

    function y(e, t) {
        let n = !1;
        t.forEach(t => {
            var a, i;
            let {
                loaded: l,
                firstMessage: d
            } = f.default.getMessage(t);
            if (a = l, i = d, !a && null == i || S(e.guild_id, t)) m.request(e.id, t), n = !0
        }), n && null == E && (E = setTimeout(T, 0))
    }

    function C(e) {
        y(e, (0, o.computeThreadIdsSnapshot)(e.id).slice(0, 10))
    }

    function A(e, t) {
        if (m.hasRequested(e.id, t)) return;
        let n = (0, o.computeThreadIdsSnapshot)(e.id),
            a = n.findIndex(e => e === t),
            i = n.slice(a, a + 5).filter(t => !m.hasRequested(e.id, t));
        y(e, i)
    }
    async function T() {
        try {
            for (; m.hasNext();) await D(m.next())
        } finally {
            E = null
        }
    }
    async function D(e) {
        let t = m.getNextBatch(e, 10);
        try {
            var n;
            if (0 === t.length) return;
            let a = null === (n = s.default.getChannel(e)) || void 0 === n ? void 0 : n.guild_id;
            if (null == a) return;
            let {
                body: {
                    threads: i
                }
            } = await d.default.post({
                url: p.Endpoints.FORUM_POSTS(e),
                body: {
                    thread_ids: t
                }
            });
            r.default.dispatch({
                type: "LOAD_FORUM_POSTS",
                guildId: a,
                threads: i
            })
        } catch (e) {} finally {
            m.finishRequesting(e, t)
        }
    }
}