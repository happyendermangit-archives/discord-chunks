function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u, s, l, c, f = n("392711"),
        d = n.n(f),
        _ = n("898511"),
        E = n("242880"),
        p = n("629815"),
        m = n("848526"),
        y = n("654370"),
        I = n("217014"),
        h = n("659045"),
        O = n("367602"),
        T = n("585432"),
        S = n("374550"),
        v = n("262283"),
        g = n("281767"),
        A = n("902735");

    function b(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function N(e) {
        return (N = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function R(e, t) {
        return (R = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }(r = s || (s = {})).INSTALL = "Install", r.REPAIR = "Repair", (o = l || (l = {})).PATCH = "Patch", o.REPAIR = "Repair";
    var C = [A.DispatchErrorCodes.AUTHENTICATION_FAILED, A.DispatchErrorCodes.NOT_ENTITLED],
        P = "DispatchManagerStore",
        D = [],
        L = [],
        M = !1,
        U = null,
        w = null,
        k = !1,
        G = new Map,
        B = !1,
        j = null;

    function F() {
        var e = {
            queue: D,
            paused: M,
            userActions: Array.from(G)
        };
        E.Storage.set(P, e)
    }

    function V() {
        var e = D[0];
        if (null != e) {
            var t, n, r = e.comboId,
                o = e.action,
                i = (0, O.convertComboId)(r),
                a = i.applicationId,
                u = i.branchId;
            if (t = a, n = u, (null == U || U.applicationId !== t || U.branchId !== n) && (null == w || w.applicationId !== t || w.branchId !== n)) {
                var s = I.default.getToken(),
                    l = I.default.getId();
                if (null == s) throw Error("missing user token");
                B = !T.default.setCurrentTask(a, u, o, l, s)
            }
        }
    }

    function H(e, t) {
        var n = (0, O.getComboId)(e, t);
        return D.findIndex(function(e) {
            return e.comboId === n
        })
    }

    function x(e, t, n, r) {
        var o = (0, O.getComboId)(e, t),
            i = {
                comboId: o,
                action: r
            },
            a = L.indexOf(o); - 1 !== a && L.splice(a, 1);
        var u = H(e, t);
        0 !== u && (n ? -1 === u && (D.push(i), V()) : (u > 0 && D.splice(u, 1), D.unshift(i), V())), !n && M && T.default.resume(), F()
    }

    function Y(e, t) {
        var n = (0, O.getComboId)(e, t),
            r = L.indexOf(n); - 1 !== r && L.splice(r, 1);
        var o = H(e, t); - 1 !== o && (D.splice(o, 1), F()), V()
    }

    function W(e) {
        Y(e.applicationId, e.branchId)
    }

    function K(e) {
        var t = e.applicationId,
            n = e.branchId,
            r = (0, O.getComboId)(t, n),
            o = L.indexOf(r); - 1 !== o && L.splice(o, 1)
    }

    function z() {
        var e = I.default.getToken(),
            t = I.default.getId();
        null != e && T.default.setCredentials(t, e)
    }

    function X() {
        var e = !0,
            t = !1,
            n = void 0;
        try {
            for (var r, o = y.default.getRunningDiscordApplicationIds()[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                var i = r.value;
                m.cancel(i, i)
            }
        } catch (e) {
            t = !0, n = e
        } finally {
            try {
                !e && null != o.return && o.return()
            } finally {
                if (t) throw n
            }
        }
        var a = y.default.getVisibleGame();
        return !M && null != a && a.pid !== j && m.pause(), j = null == a ? null : a.pid, !1
    }
    var q = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && R(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = N(t);
            if (n) {
                var a = N(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function u() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "initialize",
            value: function() {
                var e, t = null !== (e = E.Storage.get(P)) && void 0 !== e ? e : {
                    queue: null,
                    paused: null,
                    userActions: null
                };
                if (null != t.queue) D = t.queue.map(function(e) {
                    return "string" == typeof e ? {
                        comboId: e,
                        action: "Patch"
                    } : e
                });
                null != t.paused && (M = t.paused), null != t.userActions && (G = new Map(Array.from(t.userActions))), this.waitFor(v.default, y.default), this.syncWith([y.default], X), this.waitFor(v.default)
            }
        }, {
            key: "activeItems",
            get: function() {
                return D.map(function(e) {
                    var t = e.comboId;
                    return (0, O.convertComboId)(t)
                })
            }
        }, {
            key: "finishedItems",
            get: function() {
                return L.map(O.convertComboId)
            }
        }, {
            key: "paused",
            get: function() {
                return M
            }
        }, {
            key: "getQueuePosition",
            value: function(e, t) {
                return H(e, t)
            }
        }, {
            key: "isCorruptInstallation",
            value: function() {
                return B
            }
        }], b(r.prototype, o), i && b(r, i), u
    }(_.default.Store);
    u = "DispatchManagerStore", (a = "displayName") in(i = q) ? Object.defineProperty(i, a, {
        value: u,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[a] = u, t.default = new q(p.default, {
        DISPATCH_APPLICATION_INSTALL: function(e) {
            var t = e.applicationId,
                n = e.branchId;
            G.set((0, O.getComboId)(t, n), "Install"), x(t, n, !1, "Patch")
        },
        DISPATCH_APPLICATION_UPDATE: function(e) {
            x(e.applicationId, e.branchId, e.automatic, "Patch")
        },
        DISPATCH_APPLICATION_UNINSTALL: function(e) {
            W(e), K(e)
        },
        DISPATCH_APPLICATION_CANCEL: W,
        DISPATCH_APPLICATION_REPAIR: function(e) {
            var t = e.applicationId,
                n = e.branchId;
            G.set((0, O.getComboId)(t, n), "Repair"), x(t, n, !1, "Repair")
        },
        DISPATCH_APPLICATION_MOVE_UP: function(e) {
            var t = H(e.applicationId, e.branchId);
            if (t < 1) return !1;
            D.splice(0, 0, D.splice(t, 1)[0]), V(), M && T.default.resume(), F()
        },
        DISPATCH_APPLICATION_REMOVE_FINISHED: K,
        DISPATCH_APPLICATION_STATE_UPDATE: function(e) {
            var t = e.state;
            !k && (k = !0, V(), !M && T.default.resume());
            var n = M;
            M = t.paused, U = t.currentTask, w = t.nextTask;
            var r = !1;
            D = D.filter(function(e) {
                var t = e.comboId,
                    n = (0, O.convertComboId)(t),
                    o = n.applicationId,
                    i = n.branchId,
                    a = v.default.getState(o, i),
                    u = h.default.getTargetBuildId(o, i),
                    s = h.default.getTargetManifests(o, i);
                if (null != a && a.type === g.LocalDispatchApplicationStates.UP_TO_DATE && a.buildId === a.targetBuildId && a.buildId === u && d().isEqual(a.manifestIds, a.targetManifestIds) && d().isEqual(a.manifestIds, s)) {
                    if (L.push(t), G.has(t)) {
                        switch (G.get(t)) {
                            case "Install":
                                m.completeInstall(o, a);
                                break;
                            case "Repair":
                                m.completeRepair(o, a)
                        }
                        G.delete(t)
                    }
                    return r = !0, !1
                }
                return !0
            }), V(), (r || n !== M) && F()
        },
        DISPATCH_APPLICATION_ERROR: function(e) {
            var t = e.error,
                n = t.code;
            if (null != n) {
                if (C.includes(n)) z();
                else if (n === A.DispatchErrorCodes.APPLICATION_NOT_FOUND) {
                    var r = t.context;
                    null != r && Y(r.application_id, r.branch_id)
                }
            }
        },
        CONNECTION_OPEN: function() {
            (0, S.isDesktop)() && z()
        },
        LOGOUT: function() {
            E.Storage.remove(P), (0, S.isDesktop)() && T.default.pause()
        }
    })
}