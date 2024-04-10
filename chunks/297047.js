function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return m
        },
        mentionUser: function() {
            return x
        }
    }), i("47120");
    var l = i("735250");
    i("470079");
    var r = i("442837"),
        a = i("481060"),
        n = i("144144"),
        s = i("592125"),
        o = i("496675"),
        d = i("944486"),
        c = i("585483"),
        h = i("51144"),
        u = i("981631"),
        f = i("689938");

    function x(t, e) {
        let {
            id: i
        } = t, l = "@".concat(h.default.getUserTag(t, {
            decoration: "never"
        }));
        c.ComponentDispatch.dispatchToLastSubscribed(u.ComponentActions.INSERT_TEXT, {
            plainText: l,
            rawText: "<@".concat(i, ">")
        }), null != e && n.default.startTyping(e)
    }

    function m(t, e, i) {
        let [n, c] = (0, r.useStateFromStoresArray)([d.default, s.default, o.default], () => {
            let t = d.default.getChannelId(e),
                i = s.default.getChannel(t);
            return [t, null != i && (i.isMultiUserDM() || o.default.can(u.Permissions.SEND_MESSAGES, i))]
        }, [e]), h = i === u.AppContext.POPOUT;
        return !c || h ? null : (0, l.jsx)(a.MenuItem, {
            id: "mention",
            label: f.default.Messages.MENTION,
            action: function() {
                x(t, n)
            }
        })
    }
}