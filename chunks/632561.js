function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setHasUnsubmittedChanges: function() {
            return s
        },
        setShowWarning: function() {
            return l
        },
        useMemberVerificationFormNoticeStore: function() {
            return u
        }
    });
    var r = n("652874"),
        o = n("120447"),
        i = n("281767"),
        a = Object.freeze({
            hasUnsubmittedChanges: !1,
            shouldShowWarning: !1
        }),
        u = (0, r.default)(function(e) {
            return a
        }),
        s = function(e) {
            u.setState({
                hasUnsubmittedChanges: e
            })
        },
        l = function(e) {
            u.setState({
                shouldShowWarning: e
            }), e && o.ComponentDispatch.dispatch(i.ComponentActions.EMPHASIZE_NOTICE)
        }
}