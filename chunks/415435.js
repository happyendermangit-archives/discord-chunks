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
            return d
        },
        shouldShowMessageRequests: function() {
            return u
        }
    }), n("222007"), n("808653");
    var s = n("299039"),
        i = n("288518"),
        r = n("486503");

    function a(e) {
        let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default, r.default], a = function(e) {
            return s.default.keys(e).map(t => [t, e[t]])
        }(e), o = a.filter(e => {
            let [, s] = e;
            return !t.isMessageRequest(s.id) && !n.isSpam(s.id)
        });
        return function(e) {
            return Array.from(e).reduce((e, t) => {
                let [n, s] = t;
                return Object.assign(e, {
                    [n]: s
                })
            }, {})
        }(o)
    }

    function o(e) {
        let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default, r.default];
        return e.filter(e => !t.isMessageRequest(e) && !n.isSpam(e))
    }

    function d(e) {
        let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default, r.default];
        return t.isMessageRequest(e) || n.isSpam(e)
    }

    function u() {
        let [e, t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [i.default, r.default], n = t.getSpamChannelsCount(), s = e.getMessageRequestsCount();
        return s > 0 || n > 0
    }
}