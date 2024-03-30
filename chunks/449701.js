function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        makeMultiplexedTransport: function() {
            return o
        }
    });
    var r = n("648238"),
        i = n("507506");

    function a(t, e) {
        let n;
        return (0, r.forEachEnvelopeItem)(t, (t, r) => (e.includes(r) && (n = Array.isArray(t) ? t[1] : void 0), !!n)), n
    }

    function o(t, e) {
        return n => {
            let o = t(n),
                s = {};

            function u(e, o) {
                let u = o ? `${e}:${o}` : e;
                if (!s[u]) {
                    var l, c;
                    let d = (0, r.dsnFromString)(e);
                    if (!d) return;
                    let f = (0, i.getEnvelopeEndpointWithUrlEncodedAuth)(d);
                    s[u] = o ? (l = t, c = o, t => {
                        let e = l(t);
                        return {
                            send: async t => {
                                let n = a(t, ["event", "transaction", "profile", "replay_event"]);
                                return n && (n.release = c), e.send(t)
                            },
                            flush: t => e.flush(t)
                        }
                    })({
                        ...n,
                        url: f
                    }) : t({
                        ...n,
                        url: f
                    })
                }
                return s[u]
            }
            return {
                send: async function t(t) {
                    let n = e({
                        envelope: t,
                        getEvent: function(e) {
                            return a(t, e && e.length ? e : ["event"])
                        }
                    }).map(t => "string" == typeof t ? u(t, void 0) : u(t.dsn, t.release)).filter(t => !!t);
                    return 0 === n.length && n.push(o), (await Promise.all(n.map(e => e.send(t))))[0]
                },
                flush: async function t(t) {
                    let e = [...Object.keys(s).map(t => s[t]), o];
                    return (await Promise.all(e.map(e => e.flush(t)))).every(t => t)
                }
            }
        }
    }
}