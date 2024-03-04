function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useMemberVerificationFormNoticeStore: function() {
            return o
        },
        setHasUnsubmittedChanges: function() {
            return l
        },
        setShowWarning: function() {
            return u
        }
    });
    var i = n("308503"),
        s = n("659500"),
        r = n("49111");
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
            }), e && s.ComponentDispatch.dispatch(r.ComponentActions.EMPHASIZE_NOTICE)
        }
}