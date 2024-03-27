function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        },
        useSelectedDismissibleContent: function() {
            return d
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("399606"),
        a = n("237997"),
        o = n("261376"),
        l = n("706140"),
        u = n("921944");

    function d(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = (0, s.useStateFromStores)([a.default], () => !!__OVERLAY__ && a.default.isInstanceUILocked()),
            [d, _] = (0, l.useGetDismissibleContent)(e, t, i),
            c = !n && null != d && !o.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(d);
        return r.useEffect(() => () => {
            c && _(u.ContentDismissActionType.AUTO_DISMISS)
        }, [c, _]), [d, _]
    }

    function _(e) {
        let {
            contentTypes: t,
            children: n,
            groupName: r,
            bypassAutoDismiss: s
        } = e, [a, o] = d(t, r, s);
        return (0, i.jsx)(i.Fragment, {
            children: n({
                visibleContent: a,
                markAsDismissed: o
            })
        })
    }
}