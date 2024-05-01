function(e, t, n) {
    "use strict";
    let i, r, a;
    n.r(t), n.d(t, {
        AnalyticsActionHandlers: function() {
            return T
        },
        analyticsTrackingStoreMaker: function() {
            return h
        }
    }), n("177593"), n("733860"), n("47120"), n("653041"), n("17089");
    var s, o = n("756647"),
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
        E = null !== (s = window.requestIdleCallback) && void 0 !== s ? s : e => setImmediate(() => e()),
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
        h = e => {
            let {
                dispatcher: t,
                actionHandler: n,
                getFingerprint: s,
                getSessionId: d = S,
                TRACKING_URL: h,
                drainTimeoutOverride: A,
                waitFor: m
            } = e;
            c = null != A ? A : 1500;

            function N() {
                return 0 !== f.length && (null != r ? null != i : null != s())
            }

            function p() {
                null == a && N() && (a = E(O, {
                    timeout: c
                }))
            }

            function O() {
                if (a = null, !N()) return;
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
                    url: h,
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
                return null != t && (i = t), null != n.id && (r = n.id), p(), !1
            }, T.handleConnectionClosed = function() {
                return O(), i = null, r = null, !1
            }, T.handleFingerprint = function() {
                return O(), !1
            }, T.handleTrack = function(e) {
                let {
                    event: t,
                    properties: n,
                    flush: i,
                    fingerprint: a,
                    resolve: l
                } = e;
                return d().then(e => {
                    let {
                        sessionId: u
                    } = e, d = {
                        type: t,
                        fingerprint: a,
                        properties: {
                            client_track_timestamp: Date.now(),
                            client_heartbeat_session_id: u,
                            ...n
                        },
                        resolve: l
                    }, _ = function(e) {
                        if (null != r) return r;
                        let t = e.fingerprint || s();
                        return null != t ? (0, o.extractId)(t) : null
                    }(d);
                    null != _ && (d.properties.client_uuid = I.generate(_)), f.push(d), f.length > 1e4 && (f = f.slice(-1e4)), i ? O() : p()
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