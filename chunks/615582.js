function(e, t, n) {
    "use strict";
    let i, r, o;
    n.r(t), n.d(t, {
        AnalyticsActionHandlers: function() {
            return E
        },
        analyticsTrackingStoreMaker: function() {
            return g
        }
    }), n("860677"), n("843762"), n("222007"), n("424973"), n("704744");
    var s, l = n("391679"),
        a = n("446674"),
        u = n("872717"),
        c = n("166745");
    let d = 1500,
        _ = null !== (s = window.requestIdleCallback) && void 0 !== s ? s : e => setImmediate(() => e()),
        f = new c.default,
        E = {
            handleConnectionOpen: () => {},
            handleConnectionClosed: () => {},
            handleFingerprint: () => {},
            handleTrack: () => {}
        },
        S = [],
        g = e => {
            let {
                dispatcher: t,
                actionHandler: n,
                getFingerprint: s,
                getSessionId: c = () => new Promise(() => ({
                    sessionId: void 0
                })),
                TRACKING_URL: g,
                drainTimeoutOverride: h,
                waitFor: m
            } = e;
            d = null != h ? h : 1500;

            function p() {
                return 0 !== S.length && (null != r ? null != i : null != s())
            }

            function I() {
                null == o && p() && (o = _(T, {
                    timeout: d
                }))
            }

            function T() {
                if (o = null, !p()) return;
                let e = S.slice();
                S = [];
                let t = v(e);
                t.then(() => {
                    e.forEach(e => {
                        var t;
                        null === (t = e.resolve) || void 0 === t || t.call(e)
                    })
                }, t => {
                    S.unshift(...e);
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
                    url: g,
                    body: {
                        token: i,
                        events: n
                    },
                    retries: 3
                })
            }
            E.handleConnectionOpen = function(e) {
                let {
                    analyticsToken: t,
                    user: n
                } = e;
                return null != t && (i = t), null != n.id && (r = n.id), I(), !1
            }, E.handleConnectionClosed = function() {
                return T(), i = null, r = null, !1
            }, E.handleFingerprint = function() {
                return T(), !1
            }, E.handleTrack = function(e) {
                let {
                    event: t,
                    properties: n,
                    flush: i,
                    fingerprint: o,
                    resolve: a
                } = e;
                return c().then(e => {
                    let {
                        sessionId: u
                    } = e, c = {
                        type: t,
                        fingerprint: o,
                        properties: {
                            client_track_timestamp: Date.now(),
                            client_heartbeat_session_id: u,
                            ...n
                        },
                        resolve: a
                    }, d = function(e) {
                        if (null != r) return r;
                        let t = e.fingerprint || s();
                        return null != t ? (0, l.extractId)(t) : null
                    }(c);
                    null != d && (c.properties.client_uuid = f.generate(d)), S.push(c), S.length > 1e4 && (S = S.slice(-1e4)), i ? T() : I()
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