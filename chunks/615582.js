function(e, t, n) {
    "use strict";
    let i, r, o;
    n.r(t), n.d(t, {
        AnalyticsActionHandlers: function() {
            return S
        },
        analyticsTrackingStoreMaker: function() {
            return h
        }
    }), n("860677"), n("843762"), n("222007"), n("424973"), n("704744");
    var s, l = n("391679"),
        a = n("446674"),
        u = n("872717"),
        c = n("166745"),
        d = n("976255");
    let _ = 1500,
        f = null !== (s = window.requestIdleCallback) && void 0 !== s ? s : e => setImmediate(() => e()),
        E = new c.default,
        S = {
            handleConnectionOpen: () => {},
            handleConnectionClosed: () => {},
            handleFingerprint: () => {},
            handleTrack: () => {}
        },
        g = [],
        h = e => {
            let {
                dispatcher: t,
                actionHandler: n,
                getFingerprint: s,
                TRACKING_URL: c,
                drainTimeoutOverride: h,
                waitFor: m
            } = e;
            _ = null != h ? h : 1500;

            function p() {
                return 0 !== g.length && (null != r ? null != i : null != s())
            }

            function I() {
                null == o && p() && (o = f(T, {
                    timeout: _
                }))
            }

            function T() {
                if (o = null, !p()) return;
                let e = g.slice();
                g = [];
                let t = v(e);
                t.then(() => {
                    e.forEach(e => {
                        var t;
                        null === (t = e.resolve) || void 0 === t || t.call(e)
                    })
                }, t => {
                    g.unshift(...e);
                    let {
                        message: n
                    } = t.body || t;
                    console.warn("[AnalyticsTrackingStore] Track:", n)
                })
            }

            function v(e) {
                let t = Date.now(),
                    n = e.map(e => ({
                        ...e,
                        properties: {
                            ...e.properties,
                            client_send_timestamp: t
                        }
                    }));
                return u.default.post({
                    url: c,
                    body: {
                        token: i,
                        events: n
                    },
                    retries: 3
                })
            }
            S.handleConnectionOpen = function(e) {
                let {
                    analyticsToken: t,
                    user: n
                } = e;
                return null != t && (i = t), null != n.id && (r = n.id), I(), !1
            }, S.handleConnectionClosed = function() {
                return T(), i = null, r = null, !1
            }, S.handleFingerprint = function() {
                return T(), !1
            }, S.handleTrack = function(e) {
                let {
                    event: t,
                    properties: n,
                    flush: i,
                    fingerprint: o,
                    resolve: a
                } = e;
                return (0, d.getSession)().then(e => {
                    let u = {
                            type: t,
                            fingerprint: o,
                            properties: {
                                client_track_timestamp: Date.now(),
                                client_heartbeat_session_id: null == e ? void 0 : e.uuid,
                                ...n
                            },
                            resolve: a
                        },
                        c = function(e) {
                            if (null != r) return r;
                            let t = e.fingerprint || s();
                            return null != t ? (0, l.extractId)(t) : null
                        }(u);
                    null != c && (u.properties.client_uuid = E.generate(c)), g.push(u), g.length > 1e4 && (g = g.slice(-1e4)), i ? T() : I()
                }), !1
            };
            class A extends a.default.Store {
                initialize() {
                    null != m && this.waitFor(...m)
                }
                constructor(...e) {
                    super(...e), this.submitEventsImmediately = v
                }
            }
            return A.displayName = "AnalyticsTrackingStore", new A(t, n)
        }
}