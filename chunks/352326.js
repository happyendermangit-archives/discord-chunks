function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return Y
        }
    }), n("222007"), n("70102"), n("424973"), n("843762");
    var i, s, r, a, o = n("917351"),
        l = n.n(o),
        u = n("446674"),
        d = n("95410"),
        c = n("913144"),
        f = n("190017"),
        _ = n("161454"),
        h = n("271938"),
        E = n("677225"),
        g = n("964889"),
        m = n("152723"),
        p = n("773336"),
        S = n("535974"),
        v = n("49111"),
        T = n("492249");
    (r = i || (i = {})).INSTALL = "Install", r.REPAIR = "Repair", (a = s || (s = {})).PATCH = "Patch", a.REPAIR = "Repair";
    let I = [T.DispatchErrorCodes.AUTHENTICATION_FAILED, T.DispatchErrorCodes.NOT_ENTITLED],
        C = "DispatchManagerStore",
        A = [],
        y = [],
        N = !1,
        R = null,
        O = null,
        D = !1,
        P = new Map,
        L = !1,
        M = null;

    function b() {
        let e = {
            queue: A,
            paused: N,
            userActions: Array.from(P)
        };
        d.default.set(C, e)
    }

    function U() {
        let e = A[0];
        if (null != e) {
            var t, n;
            let {
                comboId: i,
                action: s
            } = e, {
                applicationId: r,
                branchId: a
            } = (0, g.convertComboId)(i);
            if (t = r, n = a, (null == R || R.applicationId !== t || R.branchId !== n) && (null == O || O.applicationId !== t || O.branchId !== n)) {
                let e = h.default.getToken(),
                    t = h.default.getId();
                if (null == e) throw Error("missing user token");
                L = !m.default.setCurrentTask(r, a, s, t, e)
            }
        }
    }

    function w(e, t) {
        let n = (0, g.getComboId)(e, t);
        return A.findIndex(e => e.comboId === n)
    }

    function k(e, t, n, i) {
        let s = (0, g.getComboId)(e, t),
            r = {
                comboId: s,
                action: i
            },
            a = y.indexOf(s); - 1 !== a && y.splice(a, 1);
        let o = w(e, t);
        0 !== o && (n ? -1 === o && (A.push(r), U()) : (o > 0 && A.splice(o, 1), A.unshift(r), U())), !n && N && m.default.resume(), b()
    }

    function V(e, t) {
        let n = (0, g.getComboId)(e, t),
            i = y.indexOf(n); - 1 !== i && y.splice(i, 1);
        let s = w(e, t); - 1 !== s && (A.splice(s, 1), b()), U()
    }

    function G(e) {
        let {
            applicationId: t,
            branchId: n
        } = e;
        V(t, n)
    }

    function F(e) {
        let {
            applicationId: t,
            branchId: n
        } = e, i = (0, g.getComboId)(t, n), s = y.indexOf(i); - 1 !== s && y.splice(s, 1)
    }

    function x() {
        let e = h.default.getToken(),
            t = h.default.getId();
        null != e && m.default.setCredentials(t, e)
    }

    function B() {
        for (let e of _.default.getRunningDiscordApplicationIds()) f.cancel(e, e);
        let e = _.default.getVisibleGame();
        return !N && null != e && e.pid !== M && f.pause(), M = null == e ? null : e.pid, !1
    }
    class H extends u.default.Store {
        initialize() {
            var e;
            let t = null !== (e = d.default.get(C)) && void 0 !== e ? e : {
                queue: null,
                paused: null,
                userActions: null
            };
            if (null != t.queue) A = t.queue.map(e => "string" == typeof e ? {
                comboId: e,
                action: "Patch"
            } : e);
            null != t.paused && (N = t.paused), null != t.userActions && (P = new Map(Array.from(t.userActions))), this.waitFor(S.default, _.default), this.syncWith([_.default], B), this.waitFor(S.default)
        }
        get activeItems() {
            return A.map(e => {
                let {
                    comboId: t
                } = e;
                return (0, g.convertComboId)(t)
            })
        }
        get finishedItems() {
            return y.map(g.convertComboId)
        }
        get paused() {
            return N
        }
        getQueuePosition(e, t) {
            return w(e, t)
        }
        isCorruptInstallation() {
            return L
        }
    }
    H.displayName = "DispatchManagerStore";
    var Y = new H(c.default, {
        DISPATCH_APPLICATION_INSTALL: function(e) {
            let {
                applicationId: t,
                branchId: n
            } = e;
            P.set((0, g.getComboId)(t, n), "Install"), k(t, n, !1, "Patch")
        },
        DISPATCH_APPLICATION_UPDATE: function(e) {
            let {
                applicationId: t,
                branchId: n,
                automatic: i
            } = e;
            k(t, n, i, "Patch")
        },
        DISPATCH_APPLICATION_UNINSTALL: function(e) {
            G(e), F(e)
        },
        DISPATCH_APPLICATION_CANCEL: G,
        DISPATCH_APPLICATION_REPAIR: function(e) {
            let {
                applicationId: t,
                branchId: n
            } = e;
            P.set((0, g.getComboId)(t, n), "Repair"), k(t, n, !1, "Repair")
        },
        DISPATCH_APPLICATION_MOVE_UP: function(e) {
            let {
                applicationId: t,
                branchId: n
            } = e, i = w(t, n);
            if (i < 1) return !1;
            A.splice(0, 0, A.splice(i, 1)[0]), U(), N && m.default.resume(), b()
        },
        DISPATCH_APPLICATION_REMOVE_FINISHED: F,
        DISPATCH_APPLICATION_STATE_UPDATE: function(e) {
            let {
                state: t
            } = e;
            !D && (D = !0, U(), !N && m.default.resume());
            let n = N;
            N = t.paused, R = t.currentTask, O = t.nextTask;
            let i = !1;
            A = A.filter(e => {
                let {
                    comboId: t
                } = e, {
                    applicationId: n,
                    branchId: s
                } = (0, g.convertComboId)(t), r = S.default.getState(n, s), a = E.default.getTargetBuildId(n, s), o = E.default.getTargetManifests(n, s);
                if (null != r && r.type === v.LocalDispatchApplicationStates.UP_TO_DATE && r.buildId === r.targetBuildId && r.buildId === a && l.isEqual(r.manifestIds, r.targetManifestIds) && l.isEqual(r.manifestIds, o)) {
                    if (y.push(t), P.has(t)) {
                        let e = P.get(t);
                        switch (e) {
                            case "Install":
                                f.completeInstall(n, r);
                                break;
                            case "Repair":
                                f.completeRepair(n, r)
                        }
                        P.delete(t)
                    }
                    return i = !0, !1
                }
                return !0
            }), U(), (i || n !== N) && b()
        },
        DISPATCH_APPLICATION_ERROR: function(e) {
            let {
                error: t
            } = e, {
                code: n
            } = t;
            if (null != n) {
                if (I.includes(n)) x();
                else if (n === T.DispatchErrorCodes.APPLICATION_NOT_FOUND) {
                    let {
                        context: e
                    } = t;
                    if (null != e) {
                        let {
                            application_id: t,
                            branch_id: n
                        } = e;
                        V(t, n)
                    }
                }
            }
        },
        CONNECTION_OPEN: function() {
            (0, p.isDesktop)() && x()
        },
        LOGOUT: function() {
            d.default.remove(C), (0, p.isDesktop)() && m.default.pause()
        }
    })
}