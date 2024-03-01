function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    }), n("222007");
    var s = n("988415"),
        i = n("42203"),
        r = n("455079");
    let a = new Set,
        o = new Set,
        d = !1,
        u = null;

    function l(e) {
        return e.isMessageRequest && !e.isSpam
    }

    function f(e) {
        let t = !1;
        return l(e) && !a.has(e.id) && (a.add(e.id), t = !0), !l(e) && a.has(e.id) && (a.delete(e.id), t = !0), !l(e) && o.has(e.id) && (o.delete(e.id), t = !0), t
    }

    function _(e) {
        var t;
        null != e && (u = null !== (t = (0, s.getCountryCodeByAlpha2)(e)) && void 0 !== t ? t : (0, s.getDefaultCountryCode)())
    }

    function c(e) {
        "CONNECTION_OPEN" === e.type && _(e.countryCode), a.clear(), o.clear(), Object.values(i.default.getMutablePrivateChannels()).forEach(e => {
            f(e)
        }), d = !0
    }

    function g(e) {
        let {
            channelId: t
        } = e;
        o.add(t)
    }

    function m(e) {
        let {
            channel: t
        } = e;
        return f(t)
    }

    function h(e) {
        let {
            channels: t
        } = e;
        for (let e of t) f(e)
    }

    function v(e) {
        let {
            channel: t
        } = e;
        return !!a.has(t.id) && (a.delete(t.id), !0)
    }

    function E(e) {
        let {
            messageRequestChannelIds: t
        } = e;
        t.forEach(e => a.add(e))
    }

    function p(e) {
        let {
            countryCode: t
        } = e;
        _(t)
    }
    class y extends r.default {
        initialize() {
            this.waitFor(i.default)
        }
        loadCache() {
            let e = this.readSnapshot(y.LATEST_SNAPSHOT_VERSION);
            null != e && (a = new Set(e))
        }
        takeSnapshot() {
            return {
                version: y.LATEST_SNAPSHOT_VERSION,
                data: Array.from(a)
            }
        }
        getMessageRequestChannelIds() {
            return a
        }
        getMessageRequestsCount() {
            return a.size
        }
        isMessageRequest(e) {
            return a.has(e)
        }
        isAcceptedOptimistic(e) {
            return o.has(e)
        }
        getUserCountryCode() {
            return u
        }
        isReady() {
            return d
        }
        constructor() {
            super({
                CONNECTION_OPEN: c,
                CONNECTION_OPEN_SUPPLEMENTAL: c,
                CACHE_LOADED_LAZY: () => this.loadCache(),
                OVERLAY_INITIALIZE: E,
                CHANNEL_CREATE: m,
                CHANNEL_UPDATES: h,
                CHANNEL_DELETE: v,
                SET_LOCATION_METADATA: p,
                MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: g
            })
        }
    }
    y.displayName = "MessageRequestStore", y.LATEST_SNAPSHOT_VERSION = 1;
    var T = new y
}