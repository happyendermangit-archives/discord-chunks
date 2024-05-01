function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        },
        mentionUser: function() {
            return I
        }
    }), n("47120");
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        a = n("481060"),
        s = n("144144"),
        o = n("592125"),
        l = n("496675"),
        u = n("944486"),
        d = n("585483"),
        _ = n("51144"),
        c = n("981631"),
        E = n("689938");

    function I(e, t) {
        let {
            id: n
        } = e, i = "@".concat(_.default.getUserTag(e, {
            decoration: "never"
        }));
        d.ComponentDispatch.dispatchToLastSubscribed(c.ComponentActions.INSERT_TEXT, {
            plainText: i,
            rawText: "<@".concat(n, ">")
        }), null != t && s.default.startTyping(t)
    }

    function T(e, t, n) {
        let [s, d] = (0, r.useStateFromStoresArray)([u.default, o.default, l.default], () => {
            let e = u.default.getChannelId(t),
                n = o.default.getChannel(e);
            return [e, null != n && (n.isMultiUserDM() || l.default.can(c.Permissions.SEND_MESSAGES, n))]
        }, [t]), _ = n === c.AppContext.POPOUT;
        return !d || _ ? null : (0, i.jsx)(a.MenuItem, {
            id: "mention",
            label: E.default.Messages.MENTION,
            action: function() {
                I(e, s)
            }
        })
    }
}