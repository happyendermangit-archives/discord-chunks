function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        MultiAccountActionType: function() {
            return n
        },
        default: function() {
            return I
        }
    }), s("773603");
    var n, o, l = s("735250"),
        a = s("470079"),
        r = s("803997"),
        i = s.n(r),
        u = s("442837"),
        c = s("481060"),
        d = s("893776"),
        h = s("239091"),
        f = s("598077"),
        C = s("314897"),
        m = s("246946"),
        p = s("594174"),
        x = s("808268"),
        N = s("626135"),
        v = s("51144"),
        A = s("480387"),
        g = s("726745"),
        y = s("251423"),
        j = s("981631"),
        T = s("689938"),
        S = s("222411");

    function E(e) {
        let {
            actionText: t,
            user: s,
            onAction: n
        } = e, {
            currentUser: o,
            hidePrivateData: a,
            isAuthenticated: r
        } = (0, u.useStateFromStoresObject)([p.default, m.default, C.default], () => ({
            currentUser: p.default.getCurrentUser(),
            hidePrivateData: m.default.hidePersonalInformation,
            isAuthenticated: C.default.isAuthenticated()
        })), y = new f.default(s), E = r && (null == o ? void 0 : o.id) === y.id, I = s.tokenStatus === g.MultiAccountTokenStatus.INVALID, _ = a || y.isPomelo() ? null : "#".concat(y.discriminator), M = null;
        return E ? M = (0, l.jsx)(c.Text, {
            variant: "text-sm/semibold",
            className: S.hintText,
            color: "text-positive",
            children: T.default.Messages.SWITCH_ACCOUNTS_ACTIVE_ACCOUNT
        }) : I && (M = (0, l.jsx)(c.Text, {
            variant: "text-sm/semibold",
            className: S.hintText,
            color: "text-danger",
            children: T.default.Messages.SWITCH_ACCOUNTS_INVALID_TOKEN
        })), (0, l.jsx)("div", {
            className: S.accountCard,
            children: (0, l.jsxs)("div", {
                className: S.userDetails,
                children: [(0, l.jsx)(c.Avatar, {
                    src: y.getAvatarURL(void 0, 40),
                    size: c.AvatarSizes.SIZE_40,
                    "aria-label": s.username
                }), (0, l.jsxs)("div", {
                    className: i()(S.usernameSection, {
                        [S.hasActionMaxWidth]: !E
                    }),
                    children: [(0, l.jsxs)("div", {
                        className: S.username,
                        children: [(0, l.jsx)(c.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            className: S.textOverflow,
                            children: v.default.getUserTag(y, {
                                mode: "username",
                                identifiable: a ? "never" : "always"
                            })
                        }), (0, l.jsx)(c.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: _
                        })]
                    }), M]
                }), (0, l.jsxs)("div", {
                    className: S.userActions,
                    children: [!E && (0, l.jsx)(c.Button, {
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
                    }), (0, l.jsx)(c.Button, {
                        className: S.userActionMenu,
                        onClick: function(e) {
                            (0, h.openContextMenu)(e, e => {
                                let {
                                    onSelect: t
                                } = e;
                                return (0, l.jsx)(c.Menu, {
                                    "aria-label": T.default.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNT,
                                    navId: "manage-multi-account",
                                    onClose: h.closeContextMenu,
                                    onSelect: t,
                                    children: (0, l.jsx)(c.MenuItem, {
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
                        children: (0, l.jsx)(x.default, {
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
        return (0, l.jsx)("div", {
            className: S.list,
            children: n ? (0, l.jsx)(c.Spinner, {}) : o.map((e, n) => (0, l.jsxs)(a.Fragment, {
                children: [(0, l.jsx)(E, {
                    user: e,
                    actionText: t,
                    onAction: s
                }, e.id), o.length - 1 !== n && (0, l.jsx)("div", {
                    role: "separator",
                    className: S.separator
                })]
            }, e.id))
        })
    }(o = n || (n = {}))[o.LOGIN_REQUIRED = 0] = "LOGIN_REQUIRED", o[o.SWITCHED = 1] = "SWITCHED", o[o.REMOVED = 2] = "REMOVED"
}