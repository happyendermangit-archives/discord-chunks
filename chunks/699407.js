function(e, t, n) {
    "use strict";
    let i, r, s;
    n.r(t), n.d(t, {
        AnalyticsActionHandlers: function() {
            return T
        },
        analyticsTrackingStoreMaker: function() {
            return A
        }
    }), n("177593"), n("733860"), n("47120"), n("653041"), n("17089");
    var a, o = n("756647"),
        l = n("442837"),
        u = n("544891"),
        d = n("761609");

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let c = 1500,
        E = null !== (a = window.requestIdleCallback) && void 0 !== a ? a : e => setImmediate(() => e()),
        I = new d.IdGenerator,
        T = {
            handleConnectionOpen: () => {},
            handleConnectionClosed: () => {},
            handleFingerprint: () => {},
            handleTrack: () => {}
        },
        f = [],
        S = () => Promise.resolve({
            sessionId: void 0
        }),
        A = e => {
            let {
                dispatcher: t,
                actionHandler: n,
                getFingerprint: a,
                getSessionId: d = S,
                TRACKING_URL: A,
                drainTimeoutOverride: h,
                waitFor: m
            } = e;
            c = null != h ? h : 1500;

            function N() {
                return 0 !== f.length && (null != r ? null != i : null != a())
            }

            function O() {
                null == s && N() && (s = E(p, {
                    timeout: c
                }))
            }

            function p() {
                if (s = null, !N()) return;
                let e = f.slice();
                f = [], R(e).then(() => {
                    e.forEach(e => {
                        var t;
                        null === (t = e.resolve) || void 0 === t || t.call(e)
                    })
                }, t => {
                    f.unshift(...e);
                    let {
                        message: n
                    } = t.body || t;
                    console.warn("[AnalyticsTrackingStore] Track:", n)
                })
            }

            function R(e) {
                let t = Date.now(),
                    n = e.map(e => ({
                        ...e,
                        properties: {
                            ...e.properties,
                            client_send_timestamp: t
                        }
                    }));
                return u.HTTP.post({
                    url: A,
                    body: {
                        token: i,
                        events: n
                    },
                    retries: 3
                })
            }
            T.handleConnectionOpen = function(e) {
                let {
                    analyticsToken: t,
                    user: n
                } = e;
                return null != t && (i = t), null != n.id && (r = n.id), O(), !1
            }, T.handleConnectionClosed = function() {
                return p(), i = null, r = null, !1
            }, T.handleFingerprint = function() {
                return p(), !1
            }, T.handleTrack = function(e) {
                let {
                    event: t,
                    properties: n,
                    flush: i,
                    fingerprint: s,
                    resolve: l
                } = e;
                return d().then(e => {
                    let {
                        sessionId: u
                    } = e, d = {
                        type: t,
                        fingerprint: s,
                        properties: {
                            client_track_timestamp: Date.now(),
                            client_heartbeat_session_id: u,
                            ...n
                        },
                        resolve: l
                    }, _ = function(e) {
                        if (null != r) return r;
                        let t = e.fingerprint || a();
                        return null != t ? (0, o.extractId)(t) : null
                    }(d);
                    null != _ && (d.properties.client_uuid = I.generate(_)), f.push(d), f.length > 1e4 && (f = f.slice(-1e4)), i ? p() : O()
                }), !1
            };
            class C extends l.Store {
                initialize() {
                    null != m && this.waitFor(...m)
                }
                constructor(...e) {
                    super(...e), _(this, "submitEventsImmediately", R)
                }
            }
            return _(C, "displayName", "AnalyticsTrackingStore"), new C(t, n)
        }
}