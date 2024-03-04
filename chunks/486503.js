function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    }), n("222007");
    var i = n("42203"),
        s = n("455079");
    let r = new Set,
        a = new Set,
        o = !1;

    function l(e) {
        return e.isSpam
    }

    function u(e) {
        let t = !1;
        if (e.isSpam && !r.has(e.id)) r.add(e.id), t = !0;
        if (!e.isSpam && r.has(e.id)) r.delete(e.id), t = !0;
        if (!e.isSpam && a.has(e.id)) a.delete(e.id), t = !0;
        return t
    }

    function d() {
        r.clear(), a.clear(), Object.values(i.default.getMutablePrivateChannels()).forEach(e => {
            u(e)
        }), o = !0
    }

    function c(e) {
        let {
            channelId: t
        } = e;
        a.add(t)
    }

    function f(e) {
        let {
            channel: t
        } = e;
        return u(t)
    }

    function _(e) {
        let {
            channels: t
        } = e;
        for (let e of t) u(e)
    }

    function h(e) {
        let {
            channel: t
        } = e, n = !1;
        return r.has(t.id) && (r.delete(t.id), n = !0), n
    }
    class E extends s.default {
        initialize() {
            this.waitFor(i.default)
        }
        loadCache() {
            let e = this.readSnapshot(E.LATEST_SNAPSHOT_VERSION);
            null != e && (r = new Set(e))
        }
        takeSnapshot() {
            return {
                version: E.LATEST_SNAPSHOT_VERSION,
                data: Array.from(r)
            }
        }
        getSpamChannelIds() {
            return r
        }
        getSpamChannelsCount() {
            return r.size
        }
        isSpam(e) {
            return r.has(e)
        }
        isAcceptedOptimistic(e) {
            return a.has(e)
        }
        isReady() {
            return o
        }
        constructor() {
            super({
                CONNECTION_OPEN: d,
                CONNECTION_OPEN_SUPPLEMENTAL: d,
                CACHE_LOADED_LAZY: () => this.loadCache(),
                CHANNEL_CREATE: f,
                CHANNEL_UPDATES: _,
                CHANNEL_DELETE: h,
                MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: c
            })
        }
    }
    E.displayName = "SpamMessageRequestStore", E.LATEST_SNAPSHOT_VERSION = 1;
    var g = new E
}