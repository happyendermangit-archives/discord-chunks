function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("808653");
    var i = n("446674"),
        s = n("913144"),
        r = n("692038"),
        a = n("457971"),
        o = n("447435");
    let l = {};

    function u(e) {
        return "".concat(e.channel_id, ":").concat(e.id)
    }

    function d(e) {
        return !!(0, a.isEligibleForExplicitMediaRedaction)() && null != e.messages && (l = e.messages.reduce((e, t) => (t.forEach(t => {
            e[u(t)] = (0, r.createMessageRecord)(t)
        }), e), {}), !0)
    }

    function c() {
        l = {}
    }
    class _ extends i.default.Store {
        getMessage(e, t) {
            return l[u({
                id: e,
                channel_id: t
            })]
        }
    }
    _.displayName = "SearchMessageStore";
    var f = new _(s.default, {
        SEARCH_FINISH: d,
        MOD_VIEW_SEARCH_FINISH: d,
        MESSAGE_UPDATE: function(e) {
            let {
                message: t
            } = e;
            if (!(0, a.isEligibleForExplicitMediaRedaction)() || null == t.id || null == t.channel_id) return !1;
            let n = u(t),
                i = l[n];
            return null != i && (l[n] = (0, r.updateMessageRecord)(i, {
                attachments: t.attachments,
                embeds: t.embeds
            }), !0)
        },
        LOGOUT: function() {
            (function() {
                l = {}
            })()
        },
        CONNECTION_OPEN: function() {
            (function() {
                l = {}
            })()
        },
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
            let {
                messageId: t,
                channelId: n
            } = e, i = u({
                id: t,
                channel_id: n
            }), s = l[i];
            null != s && (l[i] = (0, o.handleExplicitMediaScanTimeoutForMessage)(s))
        }
    })
}