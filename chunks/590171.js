function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        eventFromException: function() {
            return c
        },
        eventFromMessage: function() {
            return l
        },
        eventFromUnknownInput: function() {
            return d
        },
        exceptionFromError: function() {
            return a
        }
    });
    var r = n("91320"),
        i = n("648238");

    function a(t, e) {
        let n = s(t, e),
            r = {
                type: e && e.name,
                value: function(t) {
                    let e = t && t.message;
                    return e ? e.error && "string" == typeof e.error.message ? e.error.message : e : "No error message"
                }(e)
            };
        return n.length && (r.stacktrace = {
            frames: n
        }), void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"), r
    }

    function o(t, e) {
        return {
            exception: {
                values: [a(t, e)]
            }
        }
    }

    function s(t, e) {
        let n = e.stacktrace || e.stack || "",
            r = function(t) {
                if (t) {
                    if ("number" == typeof t.framesToPop) return t.framesToPop;
                    if (u.test(t.message)) return 1
                }
                return 0
            }(e);
        try {
            return t(n, r)
        } catch (t) {}
        return []
    }
    let u = /Minified React error #\d+;/i;

    function c(t, e, n, r) {
        let a = d(t, e, n && n.syntheticException || void 0, r);
        return (0, i.addExceptionMechanism)(a), a.level = "error", n && n.event_id && (a.event_id = n.event_id), (0, i.resolvedSyncPromise)(a)
    }

    function l(t, e, n = "info", r, a) {
        let o = f(t, e, r && r.syntheticException || void 0, a);
        return o.level = n, r && r.event_id && (o.event_id = r.event_id), (0, i.resolvedSyncPromise)(o)
    }

    function d(t, e, n, a, u) {
        let c;
        if ((0, i.isErrorEvent)(e) && e.error) return o(t, e.error);
        if ((0, i.isDOMError)(e) || (0, i.isDOMException)(e)) {
            if ("stack" in e) c = o(t, e);
            else {
                let r = e.name || ((0, i.isDOMError)(e) ? "DOMError" : "DOMException"),
                    o = e.message ? `${r}: ${e.message}` : r;
                c = f(t, o, n, a), (0, i.addExceptionTypeValue)(c, o)
            }
            return "code" in e && (c.tags = {
                ...c.tags,
                "DOMException.code": `${e.code}`
            }), c
        }
        return (0, i.isError)(e) ? o(t, e) : (0, i.isPlainObject)(e) || (0, i.isEvent)(e) ? (c = function(t, e, n, a) {
            let o = (0, r.getCurrentHub)().getClient(),
                u = o && o.getOptions().normalizeDepth,
                c = {
                    exception: {
                        values: [{
                            type: (0, i.isEvent)(e) ? e.constructor.name : a ? "UnhandledRejection" : "Error",
                            value: function(t, {
                                isUnhandledRejection: e
                            }) {
                                let n = (0, i.extractExceptionKeysForMessage)(t),
                                    r = e ? "promise rejection" : "exception";
                                if ((0, i.isErrorEvent)(t)) return `Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\``;
                                if ((0, i.isEvent)(t)) {
                                    let e = function(t) {
                                        try {
                                            let e = Object.getPrototypeOf(t);
                                            return e ? e.constructor.name : void 0
                                        } catch (t) {}
                                    }(t);
                                    return `Event \`${e}\` (type=${t.type}) captured as ${r}`
                                }
                                return `Object captured as ${r} with keys: ${n}`
                            }(e, {
                                isUnhandledRejection: a
                            })
                        }]
                    },
                    extra: {
                        __serialized__: (0, i.normalizeToSize)(e, u)
                    }
                };
            if (n) {
                let e = s(t, n);
                e.length && (c.exception.values[0].stacktrace = {
                    frames: e
                })
            }
            return c
        }(t, e, n, u), (0, i.addExceptionMechanism)(c, {
            synthetic: !0
        }), c) : (c = f(t, e, n, a), (0, i.addExceptionTypeValue)(c, `${e}`, void 0), (0, i.addExceptionMechanism)(c, {
            synthetic: !0
        }), c)
    }

    function f(t, e, n, r) {
        let i = {
            message: e
        };
        if (r && n) {
            let r = s(t, n);
            r.length && (i.exception = {
                values: [{
                    value: e,
                    stacktrace: {
                        frames: r
                    }
                }]
            })
        }
        return i
    }
}