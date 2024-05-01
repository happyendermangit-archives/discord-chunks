function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setHasUnsubmittedChanges: function() {
            return l
        },
        setShowWarning: function() {
            return u
        },
        useMemberVerificationFormNoticeStore: function() {
            return o
        }
    });
    var i = n("652874"),
        r = n("585483"),
        a = n("981631");
    let s = Object.freeze({
            hasUnsubmittedChanges: !1,
            shouldShowWarning: !1
        }),
        o = (0, i.default)(e => s),
        l = e => {
            o.setState({
                hasUnsubmittedChanges: e
            })
        },
        u = e => {
            o.setState({
                shouldShowWarning: e
            }), e && r.ComponentDispatch.dispatch(a.ComponentActions.EMPHASIZE_NOTICE)
        }
}