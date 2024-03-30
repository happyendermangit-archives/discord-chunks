function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        getIntegrationsToSetup: function() {
            return s
        },
        setupIntegration: function() {
            return l
        },
        setupIntegrations: function() {
            return u
        }
    });
    var r = n("648238"),
        i = n("876122"),
        a = n("703498");
    let o = [];

    function s(t) {
        let e;
        let n = t.defaultIntegrations || [],
            i = t.integrations;
        n.forEach(t => {
            t.isDefaultInstance = !0
        });
        let a = function(t) {
                let e = {};
                return t.forEach(t => {
                    let {
                        name: n
                    } = t, r = e[n];
                    (!r || r.isDefaultInstance || !t.isDefaultInstance) && (e[n] = t)
                }), Object.keys(e).map(t => e[t])
            }(e = Array.isArray(i) ? [...n, ...i] : "function" == typeof i ? (0, r.arrayify)(i(n)) : n),
            o = function(t, e) {
                for (let n = 0; n < t.length; n++)
                    if (!0 === e(t[n])) return n;
                return -1
            }(a, t => "Debug" === t.name);
        if (-1 !== o) {
            let [t] = a.splice(o, 1);
            a.push(t)
        }
        return a
    }

    function u(t) {
        let e = {};
        return t.forEach(t => {
            t && l(t, e)
        }), e
    }

    function l(t, e) {
        e[t.name] = t, -1 === o.indexOf(t.name) && (t.setupOnce(a.addGlobalEventProcessor, i.getCurrentHub), o.push(t.name), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`Integration installed: ${t.name}`))
    }
}