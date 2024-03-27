function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        addBreadcrumb: function() {
            return u
        },
        captureEvent: function() {
            return o
        },
        captureException: function() {
            return i
        },
        captureMessage: function() {
            return a
        },
        configureScope: function() {
            return s
        },
        setContext: function() {
            return c
        },
        setExtra: function() {
            return d
        },
        setExtras: function() {
            return l
        },
        setTag: function() {
            return p
        },
        setTags: function() {
            return f
        },
        setUser: function() {
            return h
        },
        startTransaction: function() {
            return g
        },
        withScope: function() {
            return _
        }
    });
    var r = n("876122");

    function i(t, e) {
        return (0, r.getCurrentHub)().captureException(t, {
            captureContext: e
        })
    }

    function a(t, e) {
        let n = "string" == typeof e ? e : void 0,
            i = "string" != typeof e ? {
                captureContext: e
            } : void 0;
        return (0, r.getCurrentHub)().captureMessage(t, n, i)
    }

    function o(t, e) {
        return (0, r.getCurrentHub)().captureEvent(t, e)
    }

    function s(t) {
        (0, r.getCurrentHub)().configureScope(t)
    }

    function u(t) {
        (0, r.getCurrentHub)().addBreadcrumb(t)
    }

    function c(t, e) {
        (0, r.getCurrentHub)().setContext(t, e)
    }

    function l(t) {
        (0, r.getCurrentHub)().setExtras(t)
    }

    function d(t, e) {
        (0, r.getCurrentHub)().setExtra(t, e)
    }

    function f(t) {
        (0, r.getCurrentHub)().setTags(t)
    }

    function p(t, e) {
        (0, r.getCurrentHub)().setTag(t, e)
    }

    function h(t) {
        (0, r.getCurrentHub)().setUser(t)
    }

    function _(t) {
        (0, r.getCurrentHub)().withScope(t)
    }

    function g(t, e) {
        return (0, r.getCurrentHub)().startTransaction({
            ...t
        }, e)
    }
}