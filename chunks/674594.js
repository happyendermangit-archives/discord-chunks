function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("392711"),
        i = n.n(o),
        a = n("898511"),
        u = n("629815"),
        s = n("208454"),
        l = n("281767");

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                f(e, t, n[t])
            })
        }
        return e
    }

    function E(e, t) {
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var p = l.FormStates.CLOSED,
        m = null,
        y = null,
        I = {},
        h = {},
        O = {},
        T = null,
        S = null,
        v = !1,
        g = !1,
        A = null,
        b = null,
        N = null,
        R = [],
        C = null,
        P = null;

    function D(e) {
        var t, n, r, o, i, a, u = s.default.getCurrentUser();
        if (null == u) return L();
        y = null !== (t = e.section) && void 0 !== t ? t : y, C = null !== (n = e.section) && void 0 !== n ? n : y, null != e.subsection && null != y && (I[y] = e.subsection), null != e.scrollPosition && null != y && (h[y] = e.scrollPosition), g = !!e.openWithoutBackstack, p = l.FormStates.OPEN, O = {}, S = _({}, T = f({}, l.UserSettingsSections.ACCOUNT, {
            userId: u.id,
            username: u.username,
            discriminator: u.discriminator,
            email: u.email,
            avatar: u.avatar,
            password: "",
            newPassword: null,
            claimed: u.isClaimed()
        })), b = null !== (r = e.onClose) && void 0 !== r ? r : null, N = null !== (o = e.analyticsLocation) && void 0 !== o ? o : null, R = null !== (i = e.analyticsLocations) && void 0 !== i ? i : [], P = null !== (a = e.impressionSource) && void 0 !== a ? a : null
    }

    function L() {
        p = l.FormStates.CLOSED, v = !1, T = null, C = null, S = null, m = null, y = null, I = {}, h = {}, b = null, N = null, R = [], P = null
    }

    function M() {
        p = l.FormStates.OPEN, O = {}
    }
    var U = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && E(e, t)
        }(f, e);
        var t, n, r, o, a, u = (t = f, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = d(t);
            if (n) {
                var a = d(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function f() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, f), u.apply(this, arguments)
        }
        return r = f, o = [{
            key: "initialize",
            value: function() {
                this.waitFor(s.default)
            }
        }, {
            key: "hasChanges",
            value: function() {
                return null != S && null != T && (!!this.isOpen() || A === l.DrawerTabTypes.USER_SETTINGS) && !i().isEqual(S, T)
            }
        }, {
            key: "isOpen",
            value: function() {
                return v
            }
        }, {
            key: "getPreviousSection",
            value: function() {
                return m
            }
        }, {
            key: "getSection",
            value: function() {
                return y
            }
        }, {
            key: "getSubsection",
            value: function() {
                return null != y ? I[y] : null
            }
        }, {
            key: "getScrollPosition",
            value: function() {
                return null != y ? h[y] : null
            }
        }, {
            key: "shouldOpenWithoutBackstack",
            value: function() {
                return g
            }
        }, {
            key: "getProps",
            value: function() {
                return {
                    submitting: p === l.FormStates.SUBMITTING,
                    section: y,
                    subsection: null != y ? I[y] : null,
                    scrollPosition: null != y ? h[y] : null,
                    settings: S,
                    errors: O,
                    hasChanges: this.hasChanges(),
                    openWithoutBackstack: g,
                    analyticsLocation: N,
                    analyticsLocations: R,
                    initialSection: C,
                    impressionSource: P
                }
            }
        }, {
            key: "onClose",
            get: function() {
                return b
            }
        }], c(r.prototype, o), a && c(r, a), f
    }(a.default.Store);
    f(U, "displayName", "UserSettingsModalStore"), t.default = new U(u.default, {
        USER_SETTINGS_MODAL_OPEN: function(e) {
            v = !0, D(e)
        },
        USER_SETTINGS_MODAL_INIT: D,
        USER_SETTINGS_MODAL_CLOSE: L,
        LOGOUT: L,
        USER_SETTINGS_MODAL_SUBMIT: function() {
            p = l.FormStates.SUBMITTING
        },
        USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
            var t;
            if (p !== l.FormStates.SUBMITTING) return !1;
            p = l.FormStates.OPEN, y = l.UserSettingsSections.ACCOUNT, O = null !== (t = e.errors) && void 0 !== t ? t : {}
        },
        USER_SETTINGS_MODAL_SET_SECTION: function(e) {
            var t;
            m = y, y = e.section, N = null, R = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (I[y] = e.subsection)
        },
        USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
            var t = e.forSection;
            null != t ? delete I[t] : null != y && delete I[y]
        },
        USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
            var t = e.forSection;
            null != t ? delete h[t] : null != y && delete h[y]
        },
        USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
            var t = e.settings;
            null == S && (S = {});
            var n = S[l.UserSettingsSections.ACCOUNT];
            S[l.UserSettingsSections.ACCOUNT] = _({}, n, t)
        },
        USER_SETTINGS_MODAL_SUBMIT_COMPLETE: M,
        USER_SETTINGS_MODAL_RESET: function() {
            var e = s.default.getCurrentUser();
            M(), null != e && (S = _({}, T = f({}, l.UserSettingsSections.ACCOUNT, {
                userId: e.id,
                username: e.username,
                discriminator: e.discriminator,
                email: e.email,
                avatar: e.avatar,
                password: "",
                newPassword: null,
                claimed: e.isClaimed()
            })))
        },
        DRAWER_SELECT_TAB: function(e) {
            return A = e.tab, null == y && A === l.DrawerTabTypes.USER_SETTINGS && D({
                type: "USER_SETTINGS_MODAL_INIT",
                section: null,
                subsection: null,
                scrollPosition: null,
                openWithoutBackstack: !1
            })
        }
    })
}