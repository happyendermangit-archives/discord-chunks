function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("446674"),
        s = n("913144"),
        r = n("149022"),
        a = n("884351"),
        o = n("845579"),
        l = n("377253");
    let u = {},
        d = {};
    class c extends i.default.Store {
        isEditing(e, t) {
            var n;
            return (null === (n = u[e]) || void 0 === n ? void 0 : n.messageId) === t
        }
        isEditingAny(e) {
            return null != u[e]
        }
        getEditingTextValue(e) {
            var t;
            return null === (t = u[e]) || void 0 === t ? void 0 : t.textValue
        }
        getEditingRichValue(e) {
            var t;
            return null === (t = u[e]) || void 0 === t ? void 0 : t.richValue
        }
        getEditingMessageId(e) {
            var t;
            return null === (t = u[e]) || void 0 === t ? void 0 : t.messageId
        }
        getEditingMessage(e) {
            let t = u[e];
            return null != t && null != t.messageId ? l.default.getMessage(e, t.messageId) : null
        }
        getEditActionSource(e) {
            return d[e]
        }
    }
    c.displayName = "EditMessageStore";
    var _ = new c(s.default, {
        MESSAGE_START_EDIT: function(e) {
            let {
                channelId: t,
                messageId: n,
                content: i,
                source: s
            } = e, l = o.UseLegacyChatInput.getSetting(), c = a.default.unparse(i, t);
            u[t] = {
                channelId: t,
                messageId: n,
                textValue: c,
                richValue: (0, r.toRichValue)(l ? c : i)
            }, d[t] = s
        },
        MESSAGE_UPDATE_EDIT: function(e) {
            let {
                channelId: t,
                textValue: n,
                richValue: i
            } = e, s = u[t];
            if (null == s) return !1;
            u[t] = {
                ...s,
                textValue: n,
                richValue: i
            }
        },
        MESSAGE_END_EDIT: function(e) {
            let {
                channelId: t
            } = e;
            if (null == t || null == u[t]) return !1;
            delete u[t], delete d[t]
        }
    })
}