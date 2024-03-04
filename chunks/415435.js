function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        filterOutMessageRequestsAndSpam: function() {
            return a
        },
        filterOutMessageRequestsAndSpamById: function() {
            return o
        },
        isMessageRequestOrSpamRequest: function() {
            return l
        },
        shouldShowMessageRequests: function() {
            return u
        }
    }), n("222007"), n("808653");
    var i = n("299039"),
        s = n("288518"),
        r = n("486503");

    function a(e) {
        let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.default, r.default], a = function(e) {
            return i.default.keys(e).map(t => [t, e[t]])
        }(e), o = a.filter(e => {
            let [, i] = e;
            return !t.isMessageRequest(i.id) && !n.isSpam(i.id)
        });
        return function(e) {
            return Array.from(e).reduce((e, t) => {
                let [n, i] = t;
                return Object.assign(e, {
                    [n]: i
                })
            }, {})
        }(o)
    }

    function o(e) {
        let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.default, r.default];
        return e.filter(e => !t.isMessageRequest(e) && !n.isSpam(e))
    }

    function l(e) {
        let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.default, r.default];
        return t.isMessageRequest(e) || n.isSpam(e)
    }

    function u() {
        let [e, t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [s.default, r.default], n = t.getSpamChannelsCount(), i = e.getMessageRequestsCount();
        return i > 0 || n > 0
    }
}