function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        calculateProgressPercentage: function() {
            return f
        },
        convertComboId: function() {
            return l
        },
        convertToTransitionState: function() {
            return _
        },
        getCombinedProgress: function() {
            return E
        },
        getComboId: function() {
            return s
        },
        isUserEntitledToLibraryApplication: function() {
            return p
        },
        shouldShareApplicationActivity: function() {
            return c
        },
        shouldShowGameInLibrary: function() {
            return d
        }
    });
    var r = n("53867"),
        o = n("208454"),
        i = n("332716"),
        a = n("281767");

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function s(e, t) {
        return "".concat(e, ":").concat(t)
    }

    function l(e) {
        var t, n, r = (t = e.split(":"), n = 2, function(e) {
            if (Array.isArray(e)) return e
        }(t) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(t, n) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return u(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
            }
        }(t, n) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }());
        return {
            applicationId: r[0],
            branchId: r[1]
        }
    }

    function c(e, t) {
        if (!r.ShowCurrentGame.getSetting() || r.StatusSetting.getSetting() === a.StatusTypes.INVISIBLE) return !1;
        var n = t.getActiveLibraryApplication(e);
        return null == n || !n.hasFlag(a.LibraryApplicationFlags.PRIVATE)
    }

    function f(e, t) {
        return 0 === t ? 100 : e / t * 100
    }

    function d(e, t, n) {
        return !(null == t || n.enabled && t.hasFlag(a.LibraryApplicationFlags.PRIVATE)) && !t.isHidden()
    }

    function _(e) {
        return null == e ? null : e.type === a.LocalDispatchApplicationStates.INSTALLING || e.type === a.LocalDispatchApplicationStates.UPDATING || e.type === a.LocalDispatchApplicationStates.UNINSTALLING ? e : null
    }

    function E(e) {
        return e.reduce(function(e, t) {
            var n = _(t);
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
        return !!e.isDiscordApplication() && e.isEntitled(o.default.getCurrentUser(), i.default)
    }
}