function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        WINDOW: function() {
            return a
        },
        shouldIgnoreOnError: function() {
            return s
        },
        wrap: function() {
            return function t(e, n = {}, a) {
                if ("function" != typeof e) return e;
                try {
                    let t = e.__sentry_wrapped__;
                    if (t) return t;
                    if ((0, i.getOriginalFunction)(e)) return e
                } catch (t) {
                    return e
                }
                let s = function() {
                    let s = Array.prototype.slice.call(arguments);
                    try {
                        a && "function" == typeof a && a.apply(this, arguments);
                        let r = s.map(e => t(e, n));
                        return e.apply(this, r)
                    } catch (t) {
                        throw o++, setTimeout(() => {
                            o--
                        }), (0, r.withScope)(e => {
                            e.addEventProcessor(t => (n.mechanism && ((0, i.addExceptionTypeValue)(t, void 0, void 0), (0, i.addExceptionMechanism)(t, n.mechanism)), t.extra = {
                                ...t.extra,
                                arguments: s
                            }, t)), (0, r.captureException)(t)
                        }), t
                    }
                };
                try {
                    for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (s[t] = e[t])
                } catch (t) {}(0, i.markFunctionWrapped)(s, e), (0, i.addNonEnumerableProperty)(e, "__sentry_wrapped__", s);
                try {
                    Object.getOwnPropertyDescriptor(s, "name").configurable && Object.defineProperty(s, "name", {
                        get: () => e.name
                    })
                } catch (t) {}
                return s
            }
        }
    });
    var r = n("91320"),
        i = n("648238");
    let a = i.GLOBAL_OBJ,
        o = 0;

    function s() {
        return o > 0
    }
}