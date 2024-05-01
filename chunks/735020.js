function(e, t, n) {
    "use strict";
    n.r(t), n("724458");
    var i, r, s, a, o = n("442837"),
        l = n("570140"),
        u = n("786761"),
        d = n("651530"),
        _ = n("163268");
    let c = {};

    function E(e) {
        return "".concat(e.channel_id, ":").concat(e.id)
    }

    function I(e) {
        return !!(0, d.isEligibleForExplicitMediaRedaction)() && null != e.messages && (c = e.messages.reduce((e, t) => (t.forEach(t => {
            e[E(t)] = (0, u.createMessageRecord)(t)
        }), e), {}), !0)
    }

    function T() {
        c = {}
    }
    class f extends(i = o.default.Store) {
        getMessage(e, t) {
            return c[E({
                id: e,
                channel_id: t
            })]
        }
    }
    a = "SearchMessageStore", (s = "displayName") in(r = f) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new f(l.default, {
        SEARCH_FINISH: I,
        MOD_VIEW_SEARCH_FINISH: I,
        MESSAGE_UPDATE: function(e) {
            let {
                message: t
            } = e;
            if (!(0, d.isEligibleForExplicitMediaRedaction)() || null == t.id || null == t.channel_id) return !1;
            let n = E(t),
                i = c[n];
            return null != i && (c[n] = (0, u.updateMessageRecord)(i, {
                attachments: t.attachments,
                embeds: t.embeds
            }), !0)
        },
        LOGOUT: function() {
            (function() {
                c = {}
            })()
        },
        CONNECTION_OPEN: function() {
            (function() {
                c = {}
            })()
        },
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
            let {
                messageId: t,
                channelId: n
            } = e, i = E({
                id: t,
                channel_id: n
            }), r = c[i];
            null != r && (c[i] = (0, _.handleExplicitMediaScanTimeoutForMessage)(r))
        }
    })
}