function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    }), n("70102"), n("222007");
    var i = n("157552"),
        r = n("605250"),
        s = n("831610"),
        a = n("261131"),
        o = n("271938"),
        l = n("86878"),
        u = n("368694"),
        c = n("560733"),
        d = n("152723"),
        f = n("773336"),
        E = n("253981"),
        p = n("50885"),
        h = n("49111");
    let _ = new r.default("Games"),
        S = {},
        m = 0,
        T = null;

    function g() {
        return null != T ? Promise.resolve(T) : (0, f.isDesktop)() ? p.default.ensureModule("discord_game_utils").then(() => {
            let e = p.default.getGameUtils();
            return null != e && null != e.findLaunchable ? (T = e, e) : Promise.reject(Error("game utils not found"))
        }) : Promise.reject(Error("not desktop client"))
    }

    function I(e) {
        let t = {
                id: e.id,
                name: e.name,
                thirdPartySkus: e.thirdPartySkus,
                executables: e.executables.filter(e => e.os === (0, f.getPlatformName)()).map(e => e.name)
            },
            n = e.aliases.map(e => ({
                ...t,
                name: e
            }));
        return [t, ...n]
    }

    function C(e) {
        return {
            id: e
        }
    }
    async function v(e) {
        if (!Array.isArray(e) && (e = [e]), !u.default.isDeveloper && (e = e.filter(e => null == e.thirdPartySkus || -1 === e.thirdPartySkus.findIndex(e => {
                let {
                    distributor: t
                } = e;
                return t === h.Distributors.BATTLENET
            }))), 0 === e.length) throw Error("No remaining launchable queries");
        let t = Date.now();
        t > m && (m = t + 36e5, S = {});
        let n = await g();
        for (let t of e) {
            let e = S[t.id];
            if (null != e) return e;
            let i = await new Promise(e => n.findLaunchable(t, e));
            if (null != i) return S[t.id] = i, i
        }
        throw Error("could not find launchable")
    }

    function A(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        if (e()) {
            t();
            return
        }
        setTimeout(() => {
            250 * i <= 12e4 ? A(e, t, n, i + 1) : n()
        }, 250)
    }

    function R(e) {
        return _.info("launch", e), new Promise((t, n) => {
            let i = E.default.safeParseWithQuery(e.launchTarget);
            null == i ? n(Error("Failed to parse launch target. ".concat(e.launchTarget))) : (window.open(e.launchTarget), t([]))
        })
    }
    var N = {
        waitSubscribed: (e, t) => new Promise((n, i) => A(() => a.default.isSubscribed(e, t), n, i)),
        waitConnected(e) {
            return new Promise(A.bind(this, () => l.default.isConnected(e)))
        },
        isLaunchable: e => v(I(e)).then(e => null != e).catch(() => !1),
        launch: e => v(I(e)).then(R),
        launchDispatchApplication(e, t, n, r, a) {
            let {
                launchOptions: l,
                defaultLaunchOptionId: u,
                installPath: f,
                applicationId: E,
                branchId: p,
                buildId: _,
                shouldPatch: S
            } = e;
            if (null == l || null == u || null == f) throw Error("Couldn't construct launchable for ".concat(e.applicationId));
            null == a && (a = u);
            let m = l[a];
            if (null == m) throw Error("Couldn't construct launchable for ".concat(e.applicationId, ". No launch option."));
            return (0, i.fetchBranches)([p]).then(e => {
                let t = e[0];
                if (null == t) return Promise.reject(Error("branch is null"));
                let {
                    liveBuildId: n
                } = t;
                if (S && n !== _) return Promise.reject(Error("live build id changed"))
            }).then(() => d.default.runLaunchSetup(E, p)).then(() => {
                let e = (0, s.default)(f),
                    i = {
                        DISCORD_INSTANCE_ID: c.default.getId().toString(),
                        DISCORD_ACCESS_TOKEN: null != t ? t : "",
                        DISCORD_CURRENT_LOCALE: n,
                        DISCORD_CURRENT_BRANCH: r,
                        DISCORD_STORAGE_PATH: h.DefaultCloudSyncConfiguration.ROOT_STORAGE_PATH(e, o.default.getId())
                    };
                return d.default.launch(E, p, m.name, i)
            })
        },
        removeShortcuts: e => (0, f.isWindows)() ? g().then(t => {
            var n, i;
            return null !== (i = null === (n = t.removeShortcuts) || void 0 === n ? void 0 : n.call(t, e)) && void 0 !== i && i
        }) : Promise.resolve(!1),
        createShortcuts(e, t, n, i, r) {
            if (null == r || !(0, f.isWindows)()) return Promise.resolve(!1);
            let s = "discord:///library/".concat(i, "/launch"),
                a = "".concat(r, "\\icon.ico");
            return g().then(i => {
                var r, o;
                return null !== (o = null === (r = i.createShortcuts) || void 0 === r ? void 0 : r.call(i, e, t, n, s, a)) && void 0 !== o && o
            })
        },
        isGameLaunchable: e => v({
            id: e
        }).then(e => null != e).catch(() => !1),
        launchGame(e) {
            if (l.default.isConnected(e)) return Promise.resolve();
            return v({
                id: e
            }).then(R)
        },
        isProtocolRegistered: e => g().then(t => {
            var n, i;
            return null !== (i = null === (n = t.isProtocolSchemeRegistered) || void 0 === n ? void 0 : n.call(t, e)) && void 0 !== i && i
        }),
        setRecentGames(e) {
            g().then(t => {
                var n;
                return null === (n = t.setRecentGames) || void 0 === n ? void 0 : n.call(t, e)
            }).catch(() => {})
        }
    }
}