function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        BREADCRUMB_INTEGRATION_ID: function() {
            return o
        },
        Breadcrumbs: function() {
            return s
        }
    });
    var r = n("91320"),
        i = n("648238"),
        a = n("643487");
    let o = "Breadcrumbs";
    class s {
        static __initStatic() {
            this.id = o
        }
        __init() {
            this.name = s.id
        }
        constructor(t) {
            s.prototype.__init.call(this), this.options = {
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0,
                ...t
            }
        }
        setupOnce() {
            this.options.console && (0, i.addInstrumentationHandler)("console", u), this.options.dom && (0, i.addInstrumentationHandler)("dom", function(t) {
                return function(e) {
                    let n;
                    let a = "object" == typeof t ? t.serializeAttribute : void 0,
                        o = "object" == typeof t && "number" == typeof t.maxStringLength ? t.maxStringLength : void 0;
                    o && o > 1024 && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${o} was configured. Sentry will use 1024 instead.`), o = 1024), "string" == typeof a && (a = [a]);
                    try {
                        let t = e.event;
                        n = function(t) {
                            return !!t && !!t.target
                        }(t) ? (0, i.htmlTreeAsString)(t.target, {
                            keyAttrs: a,
                            maxStringLength: o
                        }) : (0, i.htmlTreeAsString)(t, {
                            keyAttrs: a,
                            maxStringLength: o
                        })
                    } catch (t) {
                        n = "<unknown>"
                    }
                    0 !== n.length && (0, r.getCurrentHub)().addBreadcrumb({
                        category: `ui.${e.name}`,
                        message: n
                    }, {
                        event: e.event,
                        name: e.name,
                        global: e.global
                    })
                }
            }(this.options.dom)), this.options.xhr && (0, i.addInstrumentationHandler)("xhr", c), this.options.fetch && (0, i.addInstrumentationHandler)("fetch", l), this.options.history && (0, i.addInstrumentationHandler)("history", d)
        }
        addSentryBreadcrumb(t) {
            this.options.sentry && (0, r.getCurrentHub)().addBreadcrumb({
                category: `sentry.${"transaction"===t.type?"transaction":"event"}`,
                event_id: t.event_id,
                level: t.level,
                message: (0, i.getEventDescription)(t)
            }, {
                event: t
            })
        }
    }
    s.__initStatic();

    function u(t) {
        for (let e = 0; e < t.args.length; e++)
            if ("ref=Ref<" === t.args[e]) {
                t.args[e + 1] = "viewRef";
                break
            } let e = {
            category: "console",
            data: {
                arguments: t.args,
                logger: "console"
            },
            level: (0, i.severityLevelFromString)(t.level),
            message: (0, i.safeJoin)(t.args, " ")
        };
        if ("assert" === t.level) {
            if (!1 !== t.args[0]) return;
            e.message = `Assertion failed: ${(0,i.safeJoin)(t.args.slice(1)," ")||"console.assert"}`, e.data.arguments = t.args.slice(1)
        }(0, r.getCurrentHub)().addBreadcrumb(e, {
            input: t.args,
            level: t.level
        })
    }

    function c(t) {
        let {
            startTimestamp: e,
            endTimestamp: n
        } = t, a = t.xhr[i.SENTRY_XHR_DATA_KEY];
        if (!e || !n || !a) return;
        let {
            method: o,
            url: s,
            status_code: u,
            body: c
        } = a, l = {
            xhr: t.xhr,
            input: c,
            startTimestamp: e,
            endTimestamp: n
        };
        (0, r.getCurrentHub)().addBreadcrumb({
            category: "xhr",
            data: {
                method: o,
                url: s,
                status_code: u
            },
            type: "http"
        }, l)
    }

    function l(t) {
        let {
            startTimestamp: e,
            endTimestamp: n
        } = t;
        if (!!n) {
            if (!t.fetchData.url.match(/sentry_key/) || "POST" !== t.fetchData.method) {
                if (t.error) {
                    let i = t.fetchData,
                        a = {
                            data: t.error,
                            input: t.args,
                            startTimestamp: e,
                            endTimestamp: n
                        };
                    (0, r.getCurrentHub)().addBreadcrumb({
                        category: "fetch",
                        data: i,
                        level: "error",
                        type: "http"
                    }, a)
                } else {
                    let i = {
                            ...t.fetchData,
                            status_code: t.response && t.response.status
                        },
                        a = {
                            input: t.args,
                            response: t.response,
                            startTimestamp: e,
                            endTimestamp: n
                        };
                    (0, r.getCurrentHub)().addBreadcrumb({
                        category: "fetch",
                        data: i,
                        type: "http"
                    }, a)
                }
            }
        }
    }

    function d(t) {
        let e = t.from,
            n = t.to,
            o = (0, i.parseUrl)(a.WINDOW.location.href),
            s = (0, i.parseUrl)(e),
            u = (0, i.parseUrl)(n);
        !s.path && (s = o), o.protocol === u.protocol && o.host === u.host && (n = u.relative), o.protocol === s.protocol && o.host === s.host && (e = s.relative), (0, r.getCurrentHub)().addBreadcrumb({
            category: "navigation",
            data: {
                from: e,
                to: n
            }
        })
    }
}