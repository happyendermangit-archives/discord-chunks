function(e, t, n) {
    "use strict";

    function r(e) {
        if (null == e) throw TypeError("Cannot destructure " + e);
        return e
    }

    function o(e) {
        return r(e), !1
    }

    function i(e, t) {
        return !1
    }

    function a(e) {
        return !1
    }

    function u() {
        return !1
    }

    function s() {
        return !1
    }

    function l(e) {
        return r(e), !1
    }

    function c(e, t) {
        return !1
    }

    function f() {
        return !1
    }

    function d(e) {}

    function _(e) {}

    function E(e) {}

    function p(e) {
        return !1
    }
    n.r(t), n.d(t, {
        coerceChannelRoute: function() {
            return d
        },
        coerceGuildsRoute: function() {
            return _
        },
        coerceModalRoute: function() {
            return E
        },
        navigateToChannel: function() {
            return o
        },
        navigateToMemberVerification: function() {
            return i
        },
        navigateToRootTab: function() {
            return a
        },
        popAllModals: function() {
            return f
        },
        popModal: function() {
            return c
        },
        pushModal: function() {
            return l
        },
        resetToAuthRoute: function() {
            return u
        },
        resetToPanelsUI: function() {
            return s
        },
        useIsModalOpen: function() {
            return p
        }
    })
}