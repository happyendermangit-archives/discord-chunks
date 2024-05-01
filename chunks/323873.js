function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, a, s, o = n("442837"),
        l = n("570140"),
        u = n("752305"),
        d = n("957730"),
        _ = n("695346"),
        c = n("375954");
    let E = {},
        I = {};
    class T extends(s = o.default.Store) {
        isEditing(e, t) {
            var n;
            return (null === (n = E[e]) || void 0 === n ? void 0 : n.messageId) === t
        }
        isEditingAny(e) {
            return null != E[e]
        }
        getEditingTextValue(e) {
            var t;
            return null === (t = E[e]) || void 0 === t ? void 0 : t.textValue
        }
        getEditingRichValue(e) {
            var t;
            return null === (t = E[e]) || void 0 === t ? void 0 : t.richValue
        }
        getEditingMessageId(e) {
            var t;
            return null === (t = E[e]) || void 0 === t ? void 0 : t.messageId
        }
        getEditingMessage(e) {
            let t = E[e];
            return null != t && null != t.messageId ? c.default.getMessage(e, t.messageId) : null
        }
        getEditActionSource(e) {
            return I[e]
        }
    }
    a = "EditMessageStore", (r = "displayName") in(i = T) ? Object.defineProperty(i, r, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = a, t.default = new T(l.default, {
        MESSAGE_START_EDIT: function(e) {
            let {
                channelId: t,
                messageId: n,
                content: i,
                source: r
            } = e, a = _.UseLegacyChatInput.getSetting(), s = d.default.unparse(i, t);
            E[t] = {
                channelId: t,
                messageId: n,
                textValue: s,
                richValue: (0, u.toRichValue)(a ? s : i)
            }, I[t] = r
        },
        MESSAGE_UPDATE_EDIT: function(e) {
            let {
                channelId: t,
                textValue: n,
                richValue: i
            } = e, r = E[t];
            if (null == r) return !1;
            E[t] = {
                ...r,
                textValue: n,
                richValue: i
            }
        },
        MESSAGE_END_EDIT: function(e) {
            let {
                channelId: t
            } = e;
            if (null == t || null == E[t]) return !1;
            delete E[t], delete I[t]
        }
    })
}