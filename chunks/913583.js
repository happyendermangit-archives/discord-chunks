function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var s = n("735250");
    n("470079");
    var a = n("990547"),
        i = n("481060"),
        r = n("213609"),
        l = n("819570"),
        o = n("760213"),
        u = n("689938"),
        d = n("360691");

    function c(e) {
        let {
            onDismiss: t
        } = e;
        return (0, r.default)({
            type: a.ImpressionTypes.MODAL,
            name: a.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING
        }), (0, s.jsxs)(l.default, {
            className: d.chooseAccountAuthBox,
            children: [(0, s.jsx)(l.Title, {
                children: u.default.Messages.SWITCH_ACCOUNTS_CHOOSE_ACCOUNT
            }), (0, s.jsx)(i.Text, {
                className: d.chooseAccountHelpText,
                variant: "text-md/normal",
                color: "header-secondary",
                children: u.default.Messages.SWITCH_ACCOUNTS_CHOOSE_ACCOUNT_HELPER
            }), (0, s.jsx)(o.default, {
                actionText: u.default.Messages.SWITCH_ACCOUNTS_ACTION_LOG_IN,
                onAction: e => {
                    e === o.MultiAccountActionType.LOGIN_REQUIRED && t()
                }
            }), (0, s.jsx)("div", {
                className: d.actions,
                children: (0, s.jsx)(i.Button, {
                    className: d.__invalid_chooseAccountButton,
                    look: i.Button.Looks.LINK,
                    color: i.Button.Colors.PRIMARY,
                    onClick: t,
                    size: i.Button.Sizes.MEDIUM,
                    children: (0, s.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        children: u.default.Messages.SWITCH_ACCOUNTS_ADD_AN_ACCOUNT_BUTTON
                    })
                })
            })]
        })
    }
}