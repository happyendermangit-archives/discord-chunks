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
        s = n("981631");
    let a = Object.freeze({
            hasUnsubmittedChanges: !1,
            shouldShowWarning: !1
        }),
        o = (0, i.default)(e => a),
        l = e => {
            o.setState({
                hasUnsubmittedChanges: e
            })
        },
        u = e => {
            o.setState({
                shouldShowWarning: e
            }), e && r.ComponentDispatch.dispatch(s.ComponentActions.EMPHASIZE_NOTICE)
        }
}