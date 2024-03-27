function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        HttpContext: function() {
            return a
        }
    });
    var r = n("91320"),
        i = n("643487");
    class a {
        constructor() {
            a.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "HttpContext"
        }
        __init() {
            this.name = a.id
        }
        setupOnce() {
            (0, r.addGlobalEventProcessor)(t => {
                if ((0, r.getCurrentHub)().getIntegration(a)) {
                    if (!i.WINDOW.navigator && !i.WINDOW.location && !i.WINDOW.document) return t;
                    let e = t.request && t.request.url || i.WINDOW.location && i.WINDOW.location.href,
                        {
                            referrer: n
                        } = i.WINDOW.document || {},
                        {
                            userAgent: r
                        } = i.WINDOW.navigator || {},
                        a = {
                            ...t.request && t.request.headers,
                            ...n && {
                                Referer: n
                            },
                            ...r && {
                                "User-Agent": r
                            }
                        },
                        o = {
                            ...t.request,
                            ...e && {
                                url: e
                            },
                            headers: a
                        };
                    return {
                        ...t,
                        request: o
                    }
                }
                return t
            })
        }
    }
    a.__initStatic()
}