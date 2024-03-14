function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return D
        }
    });
    var i = n("917351"),
        s = n.n(i),
        r = n("446674"),
        a = n("913144"),
        o = n("697218"),
        l = n("49111");
    let u = l.FormStates.CLOSED,
        d = null,
        c = null,
        f = {},
        _ = {},
        h = {},
        E = null,
        g = null,
        m = !1,
        p = !1,
        S = null,
        v = null,
        T = null,
        I = [],
        C = null,
        A = null;

    function y(e) {
        var t, n, i, s, r, a;
        let d = o.default.getCurrentUser();
        if (null == d) return N();
        c = null !== (t = e.section) && void 0 !== t ? t : c, C = null !== (n = e.section) && void 0 !== n ? n : c, null != e.subsection && null != c && (f[c] = e.subsection), null != e.scrollPosition && null != c && (_[c] = e.scrollPosition), p = !!e.openWithoutBackstack, u = l.FormStates.OPEN, h = {}, g = {
            ...E = {
                [l.UserSettingsSections.ACCOUNT]: {
                    userId: d.id,
                    username: d.username,
                    discriminator: d.discriminator,
                    email: d.email,
                    avatar: d.avatar,
                    password: "",
                    newPassword: null,
                    claimed: d.isClaimed()
                }
            }
        }, v = null !== (i = e.onClose) && void 0 !== i ? i : null, T = null !== (s = e.analyticsLocation) && void 0 !== s ? s : null, I = null !== (r = e.analyticsLocations) && void 0 !== r ? r : [], A = null !== (a = e.impressionSource) && void 0 !== a ? a : null
    }

    function N() {
        u = l.FormStates.CLOSED, m = !1, E = null, C = null, g = null, d = null, c = null, f = {}, _ = {}, v = null, T = null, I = [], A = null
    }

    function R() {
        u = l.FormStates.OPEN, h = {}
    }
    class O extends r.default.Store {
        initialize() {
            this.waitFor(o.default)
        }
        hasChanges() {
            return null != g && null != E && (!!this.isOpen() || S === l.DrawerTabTypes.USER_SETTINGS) && !s.isEqual(g, E)
        }
        isOpen() {
            return m
        }
        getPreviousSection() {
            return d
        }
        getSection() {
            return c
        }
        getSubsection() {
            return null != c ? f[c] : null
        }
        getScrollPosition() {
            return null != c ? _[c] : null
        }
        shouldOpenWithoutBackstack() {
            return p
        }
        getProps() {
            return {
                submitting: u === l.FormStates.SUBMITTING,
                section: c,
                subsection: null != c ? f[c] : null,
                scrollPosition: null != c ? _[c] : null,
                settings: g,
                errors: h,
                hasChanges: this.hasChanges(),
                openWithoutBackstack: p,
                analyticsLocation: T,
                analyticsLocations: I,
                initialSection: C,
                impressionSource: A
            }
        }
        get onClose() {
            return v
        }
    }
    O.displayName = "UserSettingsModalStore";
    var D = new O(a.default, {
        USER_SETTINGS_MODAL_OPEN: function(e) {
            m = !0, y(e)
        },
        USER_SETTINGS_MODAL_INIT: y,
        USER_SETTINGS_MODAL_CLOSE: N,
        LOGOUT: N,
        USER_SETTINGS_MODAL_SUBMIT: function() {
            u = l.FormStates.SUBMITTING
        },
        USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
            var t;
            if (u !== l.FormStates.SUBMITTING) return !1;
            u = l.FormStates.OPEN, c = l.UserSettingsSections.ACCOUNT, h = null !== (t = e.errors) && void 0 !== t ? t : {}
        },
        USER_SETTINGS_MODAL_SET_SECTION: function(e) {
            var t;
            d = c, c = e.section, T = null, I = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (f[c] = e.subsection)
        },
        USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
            let {
                forSection: t
            } = e;
            null != t ? delete f[t] : null != c && delete f[c]
        },
        USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
            let {
                forSection: t
            } = e;
            null != t ? delete _[t] : null != c && delete _[c]
        },
        USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
            let {
                settings: t
            } = e;
            null == g && (g = {});
            let n = g[l.UserSettingsSections.ACCOUNT];
            g[l.UserSettingsSections.ACCOUNT] = {
                ...n,
                ...t
            }
        },
        USER_SETTINGS_MODAL_SUBMIT_COMPLETE: R,
        USER_SETTINGS_MODAL_RESET: function() {
            let e = o.default.getCurrentUser();
            R(), null != e && (g = {
                ...E = {
                    [l.UserSettingsSections.ACCOUNT]: {
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
            return S = e.tab, null == c && S === l.DrawerTabTypes.USER_SETTINGS && y({
                type: "USER_SETTINGS_MODAL_INIT",
                section: null,
                subsection: null,
                scrollPosition: null,
                openWithoutBackstack: !1
            })
        }
    })
}