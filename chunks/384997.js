function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSelectedDismissibleContent: function() {
            return d
        },
        default: function() {
            return c
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("65597"),
        s = n("901165"),
        r = n("495226"),
        o = n("235145"),
        u = n("994428");

    function d(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = (0, a.useStateFromStores)([s.default], () => !!__OVERLAY__ && s.default.isInstanceUILocked()),
            [d, c] = (0, o.useGetDismissibleContent)(e, t, i),
            f = !n && null != d && !r.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(d);
        return l.useEffect(() => () => {
            f && c(u.ContentDismissActionType.AUTO_DISMISS)
        }, [f, c]), [d, c]
    }

    function c(e) {
        let {
            contentTypes: t,
            children: n,
            groupName: l,
            bypassAutoDismiss: a
        } = e, [s, r] = d(t, l, a);
        return (0, i.jsx)(i.Fragment, {
            children: n({
                visibleContent: s,
                markAsDismissed: r
            })
        })
    }
}