function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        filterOutMessageRequestsAndSpam: function() {
            return s
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
    }), n("47120"), n("724458");
    var i = n("709054"),
        r = n("355298"),
        a = n("333984");

    function s(e) {
        let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default, a.default];
        return function(e) {
            return Array.from(e).reduce((e, t) => {
                let [n, i] = t;
                return Object.assign(e, {
                    [n]: i
                })
            }, {})
        }((function(e) {
            return i.default.keys(e).map(t => [t, e[t]])
        })(e).filter(e => {
            let [, i] = e;
            return !t.isMessageRequest(i.id) && !n.isSpam(i.id)
        }))
    }

    function o(e) {
        let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default, a.default];
        return e.filter(e => !t.isMessageRequest(e) && !n.isSpam(e))
    }

    function l(e) {
        let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default, a.default];
        return t.isMessageRequest(e) || n.isSpam(e)
    }

    function u() {
        let [e, t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [r.default, a.default], n = t.getSpamChannelsCount(), i = e.getMessageRequestsCount();
        return i > 0 || n > 0
    }
}