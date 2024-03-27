function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        BAGGAGE_HEADER_NAME: function() {
            return a
        },
        baggageHeaderToDynamicSamplingContext: function() {
            return u
        },
        dynamicSamplingContextToSentryBaggageHeader: function() {
            return c
        }
    });
    var r = n("46834"),
        i = n("529866");
    let a = "baggage",
        o = "sentry-",
        s = /^sentry-/;

    function u(t) {
        if (!(0, r.isString)(t) && !Array.isArray(t)) return;
        let e = {};
        if (Array.isArray(t)) e = t.reduce((t, e) => {
            let n = l(e);
            return {
                ...t,
                ...n
            }
        }, {});
        else {
            if (!t) return;
            e = l(t)
        }
        let n = Object.entries(e).reduce((t, [e, n]) => (e.match(s) && (t[e.slice(o.length)] = n), t), {});
        return Object.keys(n).length > 0 ? n : void 0
    }

    function c(t) {
        if (!!t) return function(t) {
            if (0 !== Object.keys(t).length) return Object.entries(t).reduce((t, [e, n], r) => {
                let a = `${encodeURIComponent(e)}=${encodeURIComponent(n)}`,
                    o = 0 === r ? a : `${t},${a}`;
                return o.length > 8192 ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn(`Not adding key: ${e} with val: ${n} to baggage header due to exceeding baggage size limits.`), t) : o
            }, "")
        }(Object.entries(t).reduce((t, [e, n]) => (n && (t[`${o}${e}`] = n), t), {}))
    }

    function l(t) {
        return t.split(",").map(t => t.split("=").map(t => decodeURIComponent(t.trim()))).reduce((t, [e, n]) => (t[e] = n, t), {})
    }
}