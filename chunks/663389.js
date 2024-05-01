function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, s, a, o = n("392711"),
        l = n.n(o),
        u = n("442837"),
        d = n("570140"),
        _ = n("594174"),
        c = n("981631");
    let E = c.FormStates.CLOSED,
        I = null,
        T = null,
        f = {},
        S = {},
        h = {},
        A = null,
        m = null,
        N = !1,
        p = !1,
        O = null,
        R = null,
        C = null,
        g = [],
        L = null,
        v = null;

    function D(e) {
        var t, n, i, r, s, a;
        let o = _.default.getCurrentUser();
        if (null == o) return M();
        T = null !== (t = e.section) && void 0 !== t ? t : T, L = null !== (n = e.section) && void 0 !== n ? n : T, null != e.subsection && null != T && (f[T] = e.subsection), null != e.scrollPosition && null != T && (S[T] = e.scrollPosition), p = !!e.openWithoutBackstack, E = c.FormStates.OPEN, h = {}, m = {
            ...A = {
                [c.UserSettingsSections.ACCOUNT]: {
                    userId: o.id,
                    username: o.username,
                    discriminator: o.discriminator,
                    email: o.email,
                    avatar: o.avatar,
                    password: "",
                    newPassword: null,
                    claimed: o.isClaimed()
                }
            }
        }, R = null !== (i = e.onClose) && void 0 !== i ? i : null, C = null !== (r = e.analyticsLocation) && void 0 !== r ? r : null, g = null !== (s = e.analyticsLocations) && void 0 !== s ? s : [], v = null !== (a = e.impressionSource) && void 0 !== a ? a : null
    }

    function M() {
        E = c.FormStates.CLOSED, N = !1, A = null, L = null, m = null, I = null, T = null, f = {}, S = {}, R = null, C = null, g = [], v = null
    }

    function y() {
        E = c.FormStates.OPEN, h = {}
    }
    class P extends(a = u.default.Store) {
        initialize() {
            this.waitFor(_.default)
        }
        hasChanges() {
            return null != m && null != A && (!!this.isOpen() || O === c.DrawerTabTypes.USER_SETTINGS) && !l().isEqual(m, A)
        }
        isOpen() {
            return N
        }
        getPreviousSection() {
            return I
        }
        getSection() {
            return T
        }
        getSubsection() {
            return null != T ? f[T] : null
        }
        getScrollPosition() {
            return null != T ? S[T] : null
        }
        shouldOpenWithoutBackstack() {
            return p
        }
        getProps() {
            return {
                submitting: E === c.FormStates.SUBMITTING,
                section: T,
                subsection: null != T ? f[T] : null,
                scrollPosition: null != T ? S[T] : null,
                settings: m,
                errors: h,
                hasChanges: this.hasChanges(),
                openWithoutBackstack: p,
                analyticsLocation: C,
                analyticsLocations: g,
                initialSection: L,
                impressionSource: v
            }
        }
        get onClose() {
            return R
        }
    }
    s = "UserSettingsModalStore", (r = "displayName") in(i = P) ? Object.defineProperty(i, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = s, t.default = new P(d.default, {
        USER_SETTINGS_MODAL_OPEN: function(e) {
            N = !0, D(e)
        },
        USER_SETTINGS_MODAL_INIT: D,
        USER_SETTINGS_MODAL_CLOSE: M,
        LOGOUT: M,
        USER_SETTINGS_MODAL_SUBMIT: function() {
            E = c.FormStates.SUBMITTING
        },
        USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
            var t;
            if (E !== c.FormStates.SUBMITTING) return !1;
            E = c.FormStates.OPEN, T = c.UserSettingsSections.ACCOUNT, h = null !== (t = e.errors) && void 0 !== t ? t : {}
        },
        USER_SETTINGS_MODAL_SET_SECTION: function(e) {
            var t;
            I = T, T = e.section, C = null, g = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (f[T] = e.subsection)
        },
        USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
            let {
                forSection: t
            } = e;
            null != t ? delete f[t] : null != T && delete f[T]
        },
        USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
            let {
                forSection: t
            } = e;
            null != t ? delete S[t] : null != T && delete S[T]
        },
        USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
            let {
                settings: t
            } = e;
            null == m && (m = {});
            let n = m[c.UserSettingsSections.ACCOUNT];
            m[c.UserSettingsSections.ACCOUNT] = {
                ...n,
                ...t
            }
        },
        USER_SETTINGS_MODAL_SUBMIT_COMPLETE: y,
        USER_SETTINGS_MODAL_RESET: function() {
            let e = _.default.getCurrentUser();
            y(), null != e && (m = {
                ...A = {
                    [c.UserSettingsSections.ACCOUNT]: {
                        userId: e.id,
                        username: e.username,
                        discriminator: e.discriminator,
                        email: e.email,
                        avatar: e.avatar,
                        password: "",
                        newPassword: null,
                        claimed: e.isClaimed()
                    }
                }
            })
        },
        DRAWER_SELECT_TAB: function(e) {
            return O = e.tab, null == T && O === c.DrawerTabTypes.USER_SETTINGS && D({
                type: "USER_SETTINGS_MODAL_INIT",
                section: null,
                subsection: null,
                scrollPosition: null,
                openWithoutBackstack: !1
            })
        }
    })
}