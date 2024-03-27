function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        disableNewUserDismissibleContent: function() {
            return _
        },
        useNewUserDismissibleContent: function() {
            return d
        }
    });
    var i = n("399606"),
        r = n("524437"),
        s = n("314897"),
        a = n("70956"),
        o = n("709054");
    let l = {
            [r.DismissibleContent.MJ_NEW_USER_CHAT_BAR]: 0,
            [r.DismissibleContent.NUX_GUILD_CHANNEL_EXPLAINER]: 0,
            [r.DismissibleContent.SEEN_LAUNCH_WELCOME]: 0,
            [r.DismissibleContent.SEEN_OLD_DESIGN]: 0
        },
        u = a.default.Millis.DAY;

    function d(e) {
        let t = (0, i.useStateFromStores)([s.default], () => s.default.getId()),
            n = null != t ? o.default.age(t) : 0;
        return e.filter(e => {
            var t;
            return n > (null !== (t = l[e]) && void 0 !== t ? t : u)
        })
    }

    function _(e) {
        var t;
        let n = null != s.default.getId() ? o.default.age(s.default.getId()) : 0;
        return n < (null !== (t = l[e]) && void 0 !== t ? t : u)
    }
}