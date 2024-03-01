function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        getIntegrationsToSetup: function() {
            return o
        },
        setupIntegration: function() {
            return l
        },
        setupIntegrations: function() {
            return c
        }
    }), n("222007"), n("424973");
    var r = n("103787"),
        i = n("369590"),
        a = n("321506");
    let s = [];

    function o(t) {
        let e;
        let n = t.defaultIntegrations || [],
            i = t.integrations;
        n.forEach(t => {
            t.isDefaultInstance = !0
        }), e = Array.isArray(i) ? [...n, ...i] : "function" == typeof i ? (0, r.arrayify)(i(n)) : n;
        let a = function(t) {
                let e = {};
                return t.forEach(t => {
                    let {
                        name: n
                    } = t, r = e[n];
                    (!r || r.isDefaultInstance || !t.isDefaultInstance) && (e[n] = t)
                }), Object.keys(e).map(t => e[t])
            }(e),
            s = function(t, e) {
                for (let n = 0; n < t.length; n++)
                    if (!0 === e(t[n])) return n;
                return -1
            }(a, t => "Debug" === t.name);
        if (-1 !== s) {
            let [t] = a.splice(s, 1);
            a.push(t)
        }
        return a
    }

    function c(t) {
        let e = {};
        return t.forEach(t => {
            t && l(t, e)
        }), e
    }

    function l(t, e) {
        e[t.name] = t, -1 === s.indexOf(t.name) && (t.setupOnce(a.addGlobalEventProcessor, i.getCurrentHub), s.push(t.name), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("Integration installed: ".concat(t.name)))
    }
}