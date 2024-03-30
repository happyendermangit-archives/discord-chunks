function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("592125"),
        r = n("412788");

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let a = new Set,
        o = new Set,
        l = !1;

    function u(e) {
        return e.isSpam
    }

    function d(e) {
        let t = !1;
        if (e.isSpam && !a.has(e.id)) a.add(e.id), t = !0;
        if (!e.isSpam && a.has(e.id)) a.delete(e.id), t = !0;
        if (!e.isSpam && o.has(e.id)) o.delete(e.id), t = !0;
        return t
    }

    function _() {
        a.clear(), o.clear(), Object.values(i.default.getMutablePrivateChannels()).forEach(e => {
            d(e)
        }), l = !0
    }

    function c(e) {
        let {
            channelId: t
        } = e;
        o.add(t)
    }

    function E(e) {
        let {
            channel: t
        } = e;
        return d(t)
    }

    function I(e) {
        let {
            channels: t
        } = e;
        for (let e of t) d(e)
    }

    function T(e) {
        let {
            channel: t
        } = e, n = !1;
        return a.has(t.id) && (a.delete(t.id), n = !0), n
    }
    class f extends r.default {
        initialize() {
            this.waitFor(i.default)
        }
        loadCache() {
            let e = this.readSnapshot(f.LATEST_SNAPSHOT_VERSION);
            null != e && (a = new Set(e))
        }
        takeSnapshot() {
            return {
                version: f.LATEST_SNAPSHOT_VERSION,
                data: Array.from(a)
            }
        }
        getSpamChannelIds() {
            return a
        }
        getSpamChannelsCount() {
            return a.size
        }
        isSpam(e) {
            return a.has(e)
        }
        isAcceptedOptimistic(e) {
            return o.has(e)
        }
        isReady() {
            return l
        }
        constructor() {
            super({
                CONNECTION_OPEN: _,
                CONNECTION_OPEN_SUPPLEMENTAL: _,
                CACHE_LOADED_LAZY: () => this.loadCache(),
                CHANNEL_CREATE: E,
                CHANNEL_UPDATES: I,
                CHANNEL_DELETE: T,
                MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: c
            })
        }
    }
    s(f, "displayName", "SpamMessageRequestStore"), s(f, "LATEST_SNAPSHOT_VERSION", 1), t.default = new f
}