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
    var r, o = n("37295"),
        i = n("14782"),
        a = n("217014"),
        u = n("388990"),
        s = n("523018");

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var c = (l(r = {}, i.DismissibleContent.MJ_NEW_USER_CHAT_BAR, 0), l(r, i.DismissibleContent.NUX_GUILD_CHANNEL_EXPLAINER, 0), l(r, i.DismissibleContent.SEEN_LAUNCH_WELCOME, 0), l(r, i.DismissibleContent.SEEN_OLD_DESIGN, 0), r),
        f = u.default.Millis.DAY;

    function d(e) {
        var t = (0, o.useStateFromStores)([a.default], function() {
                return a.default.getId()
            }),
            n = null != t ? s.default.age(t) : 0;
        return e.filter(function(e) {
            var t;
            return n > (null !== (t = c[e]) && void 0 !== t ? t : f)
        })
    }

    function _(e) {
        var t;
        return (null != a.default.getId() ? s.default.age(a.default.getId()) : 0) < (null !== (t = c[e]) && void 0 !== t ? t : f)
    }
}