function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("133080"),
        r = n("592125"),
        a = n("412788");

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let o = new Set,
        l = new Set,
        u = !1,
        d = null;

    function _(e) {
        return e.isMessageRequest && !e.isSpam
    }

    function c(e) {
        let t = !1;
        return _(e) && !o.has(e.id) && (o.add(e.id), t = !0), !_(e) && o.has(e.id) && (o.delete(e.id), t = !0), !_(e) && l.has(e.id) && (l.delete(e.id), t = !0), t
    }

    function E(e) {
        var t;
        null != e && (d = null !== (t = (0, i.getCountryCodeByAlpha2)(e)) && void 0 !== t ? t : (0, i.getDefaultCountryCode)())
    }

    function I(e) {
        "CONNECTION_OPEN" === e.type && E(e.countryCode), o.clear(), l.clear(), Object.values(r.default.getMutablePrivateChannels()).forEach(e => {
            c(e)
        }), u = !0
    }

    function T(e) {
        let {
            channelId: t
        } = e;
        l.add(t)
    }

    function f(e) {
        let {
            channel: t
        } = e;
        return c(t)
    }

    function S(e) {
        let {
            channels: t
        } = e;
        for (let e of t) c(e)
    }

    function h(e) {
        let {
            channel: t
        } = e;
        return !!o.has(t.id) && (o.delete(t.id), !0)
    }

    function A(e) {
        let {
            messageRequestChannelIds: t
        } = e;
        t.forEach(e => o.add(e))
    }

    function m(e) {
        let {
            countryCode: t
        } = e;
        E(t)
    }
    class N extends a.default {
        initialize() {
            this.waitFor(r.default)
        }
        loadCache() {
            let e = this.readSnapshot(N.LATEST_SNAPSHOT_VERSION);
            null != e && (o = new Set(e))
        }
        takeSnapshot() {
            return {
                version: N.LATEST_SNAPSHOT_VERSION,
                data: Array.from(o)
            }
        }
        getMessageRequestChannelIds() {
            return o
        }
        getMessageRequestsCount() {
            return o.size
        }
        isMessageRequest(e) {
            return o.has(e)
        }
        isAcceptedOptimistic(e) {
            return l.has(e)
        }
        getUserCountryCode() {
            return d
        }
        isReady() {
            return u
        }
        constructor() {
            super({
                CONNECTION_OPEN: I,
                CONNECTION_OPEN_SUPPLEMENTAL: I,
                CACHE_LOADED_LAZY: () => this.loadCache(),
                OVERLAY_INITIALIZE: A,
                CHANNEL_CREATE: f,
                CHANNEL_UPDATES: S,
                CHANNEL_DELETE: h,
                SET_LOCATION_METADATA: m,
                MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: T
            })
        }
    }
    s(N, "displayName", "MessageRequestStore"), s(N, "LATEST_SNAPSHOT_VERSION", 1), t.default = new N
}