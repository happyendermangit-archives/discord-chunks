function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        MultiAccountActionType: function() {
            return n
        },
        default: function() {
            return I
        }
    }), s("506083");
    var n, o, a = s("37983"),
        l = s("884691"),
        r = s("414456"),
        i = s.n(r),
        u = s("446674"),
        c = s("77078"),
        d = s("437822"),
        h = s("272030"),
        C = s("766274"),
        f = s("271938"),
        m = s("102985"),
        p = s("697218"),
        x = s("433487"),
        N = s("599110"),
        v = s("158998"),
        A = s("694787"),
        g = s("770032"),
        y = s("927101"),
        j = s("49111"),
        T = s("782340"),
        S = s("279983");

    function E(e) {
        let {
            actionText: t,
            user: s,
            onAction: n
        } = e, {
            currentUser: o,
            hidePrivateData: l,
            isAuthenticated: r
        } = (0, u.useStateFromStoresObject)([p.default, m.default, f.default], () => ({
            currentUser: p.default.getCurrentUser(),
            hidePrivateData: m.default.hidePersonalInformation,
            isAuthenticated: f.default.isAuthenticated()
        })), y = new C.default(s), E = r && (null == o ? void 0 : o.id) === y.id, I = s.tokenStatus === g.MultiAccountTokenStatus.INVALID, M = l || y.isPomelo() ? null : "#".concat(y.discriminator), _ = null;
        return E ? _ = (0, a.jsx)(c.Text, {
            variant: "text-sm/semibold",
            className: S.hintText,
            color: "text-positive",
            children: T.default.Messages.SWITCH_ACCOUNTS_ACTIVE_ACCOUNT
        }) : I && (_ = (0, a.jsx)(c.Text, {
            variant: "text-sm/semibold",
            className: S.hintText,
            color: "text-danger",
            children: T.default.Messages.SWITCH_ACCOUNTS_INVALID_TOKEN
        })), (0, a.jsx)("div", {
            className: S.accountCard,
            children: (0, a.jsxs)("div", {
                className: S.userDetails,
                children: [(0, a.jsx)(c.Avatar, {
                    src: y.getAvatarURL(void 0, 40),
                    size: c.AvatarSizes.SIZE_40,
                    "aria-label": s.username
                }), (0, a.jsxs)("div", {
                    className: i(S.usernameSection, {
                        [S.hasActionMaxWidth]: !E
                    }),
                    children: [(0, a.jsxs)("div", {
                        className: S.username,
                        children: [(0, a.jsx)(c.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            className: S.textOverflow,
                            children: v.default.getUserTag(y, {
                                mode: "username",
                                identifiable: l ? "never" : "always"
                            })
                        }), (0, a.jsx)(c.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: M
                        })]
                    }), _]
                }), (0, a.jsxs)("div", {
                    className: S.userActions,
                    children: [!E && (0, a.jsx)(c.Button, {
                        onClick: function() {
                            if (I) {
                                n(0, s.id);
                                return
                            }
                            N.default.track(j.AnalyticEvents.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                location: {
                                    section: j.AnalyticsSections.MANAGE_ACCOUNTS_MODAL
                                }
                            }), A.switchAccount(s.id), n(1, s.id)
                        },
                        color: c.Button.Colors.PRIMARY,
                        children: I ? T.default.Messages.SWITCH_ACCOUNTS_ACTION_LOG_IN : t
                    }), (0, a.jsx)(c.Button, {
                        className: S.userActionMenu,
                        onClick: function(e) {
                            (0, h.openContextMenu)(e, e => {
                                let {
                                    onSelect: t
                                } = e;
                                return (0, a.jsx)(c.Menu, {
                                    "aria-label": T.default.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNT,
                                    navId: "manage-multi-account",
                                    onClose: h.closeContextMenu,
                                    onSelect: t,
                                    children: (0, a.jsx)(c.MenuItem, {
                                        id: "remove-account",
                                        label: T.default.Messages.SWITCH_ACCOUNTS_REMOVE_ACCOUNT,
                                        action: () => {
                                            ! function() {
                                                d.default.logout(null, s.id).finally(() => {
                                                    A.removeAccount(s.id)
                                                });
                                                let e = {};
                                                null != o ? e.section = j.AnalyticsSections.MANAGE_ACCOUNTS_MODAL : e.page = j.PageAnalyticsLocations.LOGIN, N.default.track(j.AnalyticEvents.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
                                                    location: e
                                                }), n(2, s.id)
                                            }(), null != t && t()
                                        },
                                        color: "danger"
                                    })
                                })
                            })
                        },
                        size: c.Button.Sizes.ICON,
                        look: c.Button.Looks.BLANK,
                        color: c.Button.Colors.WHITE,
                        "aria-label": T.default.Messages.MORE_OPTIONS,
                        children: (0, a.jsx)(x.default, {
                            className: S.overflowMenuIcon
                        })
                    })]
                })]
            })
        })
    }

    function I(e) {
        let {
            actionText: t,
            onAction: s
        } = e, {
            isLoading: n,
            multiAccountUsers: o
        } = (0, y.useMultiAccountUsers)();
        return (0, a.jsx)("div", {
            className: S.list,
            children: n ? (0, a.jsx)(c.Spinner, {}) : o.map((e, n) => (0, a.jsxs)(l.Fragment, {
                children: [(0, a.jsx)(E, {
                    user: e,
                    actionText: t,
                    onAction: s
                }, e.id), o.length - 1 !== n && (0, a.jsx)("div", {
                    role: "separator",
                    className: S.separator
                })]
            }, e.id))
        })
    }(o = n || (n = {}))[o.LOGIN_REQUIRED = 0] = "LOGIN_REQUIRED", o[o.SWITCHED = 1] = "SWITCHED", o[o.REMOVED = 2] = "REMOVED"
}