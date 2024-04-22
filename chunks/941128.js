function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("411104"), n("653041"), n("733860");
    var i, r, s, a, o, l, u, d, _ = n("392711"),
        c = n.n(_),
        E = n("442837"),
        I = n("433517"),
        T = n("570140"),
        f = n("51025"),
        S = n("594190"),
        h = n("314897"),
        A = n("173747"),
        m = n("780570"),
        N = n("830168"),
        p = n("358085"),
        O = n("417363"),
        R = n("981631"),
        C = n("186901");
    (a = i || (i = {})).INSTALL = "Install", a.REPAIR = "Repair", (o = r || (r = {})).PATCH = "Patch", o.REPAIR = "Repair";
    let g = [C.DispatchErrorCodes.AUTHENTICATION_FAILED, C.DispatchErrorCodes.NOT_ENTITLED],
        L = "DispatchManagerStore",
        D = [],
        v = [],
        M = !1,
        y = null,
        P = null,
        U = !1,
        b = new Map,
        G = !1,
        w = null;

    function k() {
        let e = {
            queue: D,
            paused: M,
            userActions: Array.from(b)
        };
        I.Storage.set(L, e)
    }

    function B() {
        let e = D[0];
        if (null != e) {
            var t, n;
            let {
                comboId: i,
                action: r
            } = e, {
                applicationId: s,
                branchId: a
            } = (0, m.convertComboId)(i);
            if (t = s, n = a, (null == y || y.applicationId !== t || y.branchId !== n) && (null == P || P.applicationId !== t || P.branchId !== n)) {
                let e = h.default.getToken(),
                    t = h.default.getId();
                if (null == e) throw Error("missing user token");
                G = !N.default.setCurrentTask(s, a, r, t, e)
            }
        }
    }

    function F(e, t) {
        let n = (0, m.getComboId)(e, t);
        return D.findIndex(e => e.comboId === n)
    }

    function V(e, t, n, i) {
        let r = (0, m.getComboId)(e, t),
            s = {
                comboId: r,
                action: i
            },
            a = v.indexOf(r); - 1 !== a && v.splice(a, 1);
        let o = F(e, t);
        0 !== o && (n ? -1 === o && (D.push(s), B()) : (o > 0 && D.splice(o, 1), D.unshift(s), B())), !n && M && N.default.resume(), k()
    }

    function x(e, t) {
        let n = (0, m.getComboId)(e, t),
            i = v.indexOf(n); - 1 !== i && v.splice(i, 1);
        let r = F(e, t); - 1 !== r && (D.splice(r, 1), k()), B()
    }

    function H(e) {
        let {
            applicationId: t,
            branchId: n
        } = e;
        x(t, n)
    }

    function Y(e) {
        let {
            applicationId: t,
            branchId: n
        } = e, i = (0, m.getComboId)(t, n), r = v.indexOf(i); - 1 !== r && v.splice(r, 1)
    }

    function j() {
        let e = h.default.getToken(),
            t = h.default.getId();
        null != e && N.default.setCredentials(t, e)
    }

    function W() {
        for (let e of S.default.getRunningDiscordApplicationIds()) f.cancel(e, e);
        let e = S.default.getVisibleGame();
        return !M && null != e && e.pid !== w && f.pause(), w = null == e ? null : e.pid, !1
    }
    class K extends(s = E.default.Store) {
        initialize() {
            var e;
            let t = null !== (e = I.Storage.get(L)) && void 0 !== e ? e : {
                queue: null,
                paused: null,
                userActions: null
            };
            if (null != t.queue) D = t.queue.map(e => "string" == typeof e ? {
                comboId: e,
                action: "Patch"
            } : e);
            null != t.paused && (M = t.paused), null != t.userActions && (b = new Map(Array.from(t.userActions))), this.waitFor(O.default, S.default), this.syncWith([S.default], W), this.waitFor(O.default)
        }
        get activeItems() {
            return D.map(e => {
                let {
                    comboId: t
                } = e;
                return (0, m.convertComboId)(t)
            })
        }
        get finishedItems() {
            return v.map(m.convertComboId)
        }
        get paused() {
            return M
        }
        getQueuePosition(e, t) {
            return F(e, t)
        }
        isCorruptInstallation() {
            return G
        }
    }
    d = "DispatchManagerStore", (u = "displayName") in(l = K) ? Object.defineProperty(l, u, {
        value: d,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : l[u] = d, t.default = new K(T.default, {
        DISPATCH_APPLICATION_INSTALL: function(e) {
            let {
                applicationId: t,
                branchId: n
            } = e;
            b.set((0, m.getComboId)(t, n), "Install"), V(t, n, !1, "Patch")
        },
        DISPATCH_APPLICATION_UPDATE: function(e) {
            let {
                applicationId: t,
                branchId: n,
                automatic: i
            } = e;
            V(t, n, i, "Patch")
        },
        DISPATCH_APPLICATION_UNINSTALL: function(e) {
            H(e), Y(e)
        },
        DISPATCH_APPLICATION_CANCEL: H,
        DISPATCH_APPLICATION_REPAIR: function(e) {
            let {
                applicationId: t,
                branchId: n
            } = e;
            b.set((0, m.getComboId)(t, n), "Repair"), V(t, n, !1, "Repair")
        },
        DISPATCH_APPLICATION_MOVE_UP: function(e) {
            let {
                applicationId: t,
                branchId: n
            } = e, i = F(t, n);
            if (i < 1) return !1;
            D.splice(0, 0, D.splice(i, 1)[0]), B(), M && N.default.resume(), k()
        },
        DISPATCH_APPLICATION_REMOVE_FINISHED: Y,
        DISPATCH_APPLICATION_STATE_UPDATE: function(e) {
            let {
                state: t
            } = e;
            !U && (U = !0, B(), !M && N.default.resume());
            let n = M;
            M = t.paused, y = t.currentTask, P = t.nextTask;
            let i = !1;
            D = D.filter(e => {
                let {
                    comboId: t
                } = e, {
                    applicationId: n,
                    branchId: r
                } = (0, m.convertComboId)(t), s = O.default.getState(n, r), a = A.default.getTargetBuildId(n, r), o = A.default.getTargetManifests(n, r);
                if (null != s && s.type === R.LocalDispatchApplicationStates.UP_TO_DATE && s.buildId === s.targetBuildId && s.buildId === a && c().isEqual(s.manifestIds, s.targetManifestIds) && c().isEqual(s.manifestIds, o)) {
                    if (v.push(t), b.has(t)) {
                        switch (b.get(t)) {
                            case "Install":
                                f.completeInstall(n, s);
                                break;
                            case "Repair":
                                f.completeRepair(n, s)
                        }
                        b.delete(t)
                    }
                    return i = !0, !1
                }
                return !0
            }), B(), (i || n !== M) && k()
        },
        DISPATCH_APPLICATION_ERROR: function(e) {
            let {
                error: t
            } = e, {
                code: n
            } = t;
            if (null != n) {
                if (g.includes(n)) j();
                else if (n === C.DispatchErrorCodes.APPLICATION_NOT_FOUND) {
                    let {
                        context: e
                    } = t;
                    if (null != e) {
                        let {
                            application_id: t,
                            branch_id: n
                        } = e;
                        x(t, n)
                    }
                }
            }
        },
        CONNECTION_OPEN: function() {
            (0, p.isDesktop)() && j()
        },
        LOGOUT: function() {
            I.Storage.remove(L), (0, p.isDesktop)() && N.default.pause()
        }
    })
}