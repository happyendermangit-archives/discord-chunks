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
            return d
        },
        shouldShowGameInLibrary: function() {
            return c
        },
        convertToTransitionState: function() {
            return f
        },
        getCombinedProgress: function() {
            return _
        },
        isUserEntitledToLibraryApplication: function() {
            return h
        }
    }), n("222007"), n("808653");
    var i = n("845579"),
        s = n("697218"),
        r = n("552712"),
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

    function d(e, t) {
        return 0 === t ? 100 : e / t * 100
    }

    function c(e, t, n) {
        return !(null == t || n.enabled && t.hasFlag(a.LibraryApplicationFlags.PRIVATE)) && !t.isHidden()
    }

    function f(e) {
        return null == e ? null : e.type === a.LocalDispatchApplicationStates.INSTALLING || e.type === a.LocalDispatchApplicationStates.UPDATING || e.type === a.LocalDispatchApplicationStates.UNINSTALLING ? e : null
    }

    function _(e) {
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

    function h(e) {
        return !!e.isDiscordApplication() && e.isEntitled(s.default.getCurrentUser(), r.default)
    }
}