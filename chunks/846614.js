function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useNewUserDismissibleContent: function() {
            return d
        },
        disableNewUserDismissibleContent: function() {
            return c
        }
    });
    var i = n("65597"),
        s = n("151426"),
        r = n("271938"),
        a = n("718517"),
        o = n("299039");
    let l = {
            [s.DismissibleContent.MJ_NEW_USER_CHAT_BAR]: 0,
            [s.DismissibleContent.NUX_GUILD_CHANNEL_EXPLAINER]: 0,
            [s.DismissibleContent.SEEN_LAUNCH_WELCOME]: 0,
            [s.DismissibleContent.SEEN_OLD_DESIGN]: 0
        },
        u = a.default.Millis.DAY;

    function d(e) {
        let t = (0, i.default)([r.default], () => r.default.getId()),
            n = null != t ? o.default.age(t) : 0;
        return e.filter(e => {
            var t;
            let i = null !== (t = l[e]) && void 0 !== t ? t : u;
            return n > i
        })
    }

    function c(e) {
        var t;
        let n = null != r.default.getId() ? o.default.age(r.default.getId()) : 0,
            i = null !== (t = l[e]) && void 0 !== t ? t : u;
        return n < i
    }
}