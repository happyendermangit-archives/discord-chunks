function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        GlobalHandlers: function() {
            return s
        }
    });
    var r = n("91320"),
        i = n("648238"),
        a = n("590171"),
        o = n("643487");
    class s {
        static __initStatic() {
            this.id = "GlobalHandlers"
        }
        __init() {
            this.name = s.id
        }
        __init2() {
            this._installFunc = {
                onerror: u,
                onunhandledrejection: l
            }
        }
        constructor(t) {
            s.prototype.__init.call(this), s.prototype.__init2.call(this), this._options = {
                onerror: !0,
                onunhandledrejection: !0,
                ...t
            }
        }
        setupOnce() {
            Error.stackTraceLimit = 50;
            let t = this._options;
            for (let e in t) {
                let n = this._installFunc[e];
                n && t[e] && (function(t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log(`Global Handler attached: ${t}`)
                }(e), n(), this._installFunc[e] = void 0)
            }
        }
    }

    function u() {
        (0, i.addInstrumentationHandler)("error", t => {
            let [e, n, r] = f();
            if (!e.getIntegration(s)) return;
            let {
                msg: u,
                url: l,
                line: p,
                column: h,
                error: _
            } = t;
            if ((0, o.shouldIgnoreOnError)() || _ && _.__sentry_own_request__) return;
            let g = void 0 === _ && (0, i.isString)(u) ? function(t, e, n, r) {
                let a = (0, i.isErrorEvent)(t) ? t.message : t,
                    o = "Error",
                    s = a.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                return s && (o = s[1], a = s[2]), c({
                    exception: {
                        values: [{
                            type: o,
                            value: a
                        }]
                    }
                }, e, n, r)
            }(u, l, p, h) : c((0, a.eventFromUnknownInput)(n, _ || u, void 0, r, !1), l, p, h);
            g.level = "error", d(e, _, g, "onerror")
        })
    }

    function l() {
        (0, i.addInstrumentationHandler)("unhandledrejection", t => {
            let [e, n, r] = f();
            if (!e.getIntegration(s)) return;
            let u = t;
            try {
                "reason" in t ? u = t.reason : "detail" in t && "reason" in t.detail && (u = t.detail.reason)
            } catch (t) {}
            if ((0, o.shouldIgnoreOnError)() || u && u.__sentry_own_request__) return !0;
            let l = (0, i.isPrimitive)(u) ? function(t) {
                return {
                    exception: {
                        values: [{
                            type: "UnhandledRejection",
                            value: `Non-Error promise rejection captured with value: ${String(t)}`
                        }]
                    }
                }
            }(u) : (0, a.eventFromUnknownInput)(n, u, void 0, r, !0);
            l.level = "error", d(e, u, l, "onunhandledrejection")
        })
    }
    s.__initStatic();

    function c(t, e, n, r) {
        let a = t.exception = t.exception || {},
            o = a.values = a.values || [],
            s = o[0] = o[0] || {},
            u = s.stacktrace = s.stacktrace || {},
            l = u.frames = u.frames || [],
            c = isNaN(parseInt(r, 10)) ? void 0 : r,
            d = isNaN(parseInt(n, 10)) ? void 0 : n,
            f = (0, i.isString)(e) && e.length > 0 ? e : (0, i.getLocationHref)();
        return 0 === l.length && l.push({
            colno: c,
            filename: f,
            function: "?",
            in_app: !0,
            lineno: d
        }), t
    }

    function d(t, e, n, r) {
        (0, i.addExceptionMechanism)(n, {
            handled: !1,
            type: r
        }), t.captureEvent(n, {
            originalException: e
        })
    }

    function f() {
        let t = (0, r.getCurrentHub)(),
            e = t.getClient(),
            n = e && e.getOptions() || {
                stackParser: () => [],
                attachStacktrace: !1
            };
        return [t, n.stackParser, n.attachStacktrace]
    }
}