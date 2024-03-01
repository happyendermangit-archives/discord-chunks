function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getComboId: function() {
            return o
        },
        convertComboId: function() {
            return l
        },
        shouldShareApplicationActivity: function() {
            return u
        },
        calculateProgressPercentage: function() {
            return c
        },
        shouldShowGameInLibrary: function() {
            return d
        },
        convertToTransitionState: function() {
            return f
        },
        getCombinedProgress: function() {
            return E
        },
        isUserEntitledToLibraryApplication: function() {
            return p
        }
    }), n("222007"), n("808653");
    var i = n("845579"),
        r = n("697218"),
        s = n("552712"),
        a = n("49111");

    function o(e, t) {
        return "".concat(e, ":").concat(t)
    }

    function l(e) {
        let [t, n] = e.split(":");
        return {
            applicationId: t,
            branchId: n
        }
    }

    function u(e, t) {
        if (!i.ShowCurrentGame.getSetting() || i.StatusSetting.getSetting() === a.StatusTypes.INVISIBLE) return !1;
        let n = t.getActiveLibraryApplication(e);
        return null == n || !n.hasFlag(a.LibraryApplicationFlags.PRIVATE)
    }

    function c(e, t) {
        return 0 === t ? 100 : e / t * 100
    }

    function d(e, t, n) {
        return !(null == t || n.enabled && t.hasFlag(a.LibraryApplicationFlags.PRIVATE)) && !t.isHidden()
    }

    function f(e) {
        return null == e ? null : e.type === a.LocalDispatchApplicationStates.INSTALLING || e.type === a.LocalDispatchApplicationStates.UPDATING || e.type === a.LocalDispatchApplicationStates.UNINSTALLING ? e : null
    }

    function E(e) {
        return e.reduce((e, t) => {
            let n = f(t);
            return null == n || t.type === a.LocalDispatchApplicationStates.UP_TO_DATE ? e : {
                total: e.total + Number(n.total),
                progress: e.progress + Number(n.progress)
            }
        }, {
            total: 0,
            progress: 0
        })
    }

    function p(e) {
        return !!e.isDiscordApplication() && e.isEntitled(r.default.getCurrentUser(), s.default)
    }
}