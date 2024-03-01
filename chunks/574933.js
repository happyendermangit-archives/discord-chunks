function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("808653");
    var s = n("446674"),
        i = n("913144"),
        r = n("692038"),
        a = n("457971"),
        o = n("447435");
    let d = {};

    function u(e) {
        return "".concat(e.channel_id, ":").concat(e.id)
    }

    function l(e) {
        return !!(0, a.isEligibleForExplicitMediaRedaction)() && null != e.messages && (d = e.messages.reduce((e, t) => (t.forEach(t => {
            e[u(t)] = (0, r.createMessageRecord)(t)
        }), e), {}), !0)
    }

    function f() {
        d = {}
    }
    class _ extends s.default.Store {
        getMessage(e, t) {
            return d[u({
                id: e,
                channel_id: t
            })]
        }
    }
    _.displayName = "SearchMessageStore";
    var c = new _(i.default, {
        SEARCH_FINISH: l,
        MOD_VIEW_SEARCH_FINISH: l,
        MESSAGE_UPDATE: function(e) {
            let {
                message: t
            } = e;
            if (!(0, a.isEligibleForExplicitMediaRedaction)() || null == t.id || null == t.channel_id) return !1;
            let n = u(t),
                s = d[n];
            return null != s && (d[n] = (0, r.updateMessageRecord)(s, {
                attachments: t.attachments,
                embeds: t.embeds
            }), !0)
        },
        LOGOUT: function() {
            (function() {
                d = {}
            })()
        },
        CONNECTION_OPEN: function() {
            (function() {
                d = {}
            })()
        },
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
            let {
                messageId: t,
                channelId: n
            } = e, s = u({
                id: t,
                channel_id: n
            }), i = d[s];
            null != i && (d[s] = (0, o.handleExplicitMediaScanTimeoutForMessage)(i))
        }
    })
}