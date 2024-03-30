function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("967888"),
        o = n("751848"),
        i = n("629815"),
        a = n("741885"),
        u = n("895517"),
        s = n("770755"),
        l = n("163291"),
        c = n("569492"),
        f = n("935741"),
        d = n("329903"),
        _ = n("200915"),
        E = n("585949"),
        p = n("281767"),
        m = n("428294"),
        y = n("941504");

    function I(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function h(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function O(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    h(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    h(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function T(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    }
    t.default = {
        openPrivateChannel: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                o = arguments.length > 3 ? arguments[3] : void 0,
                i = arguments.length > 4 ? arguments[4] : void 0;
            return O(function() {
                var a, u, l, c, f, d, E, m;
                return T(this, function(y) {
                    switch (y.label) {
                        case 0:
                            if (a = this._getRecipients(e), u = function(e) {
                                    t && _.default.call(e.id, n, !0, e.isDM() ? e.getRecipientId() : null)
                                }, 1 === a.length) {
                                var h, O;
                                if (O = 1, l = (function(e) {
                                        if (Array.isArray(e)) return e
                                    }(h = a) || function(e, t) {
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
                                    }(h, O) || function(e, t) {
                                        if (e) {
                                            if ("string" == typeof e) return I(e, t);
                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I(e, t)
                                        }
                                    }(h, O) || function() {
                                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }())[0], null != (c = this._openCachedDMChannel(l, i))) return u(c), [2, Promise.resolve(c.id)]
                            }
                            y.label = 1;
                        case 1:
                            return y.trys.push([1, 3, , 4]), [4, r.HTTP.post({
                                url: p.Endpoints.USER_CHANNELS,
                                body: {
                                    recipients: a
                                },
                                context: {
                                    location: o
                                },
                                oldFormErrors: !0
                            })];
                        case 2:
                            return f = y.sent(), null == i || i(), d = this._openPrivateChannel(f.body), u(d), [2, f.body.id];
                        case 3:
                            throw (null == (E = y.sent()) ? void 0 : null === (m = E.body) || void 0 === m ? void 0 : m.code) === p.AbortCodes.QUARANTINED && (0, s.default)(), E;
                        case 4:
                            return [2]
                    }
                })
            }).apply(this)
        },
        createBroadcastPrivateChannel: function() {
            return O(function() {
                var e, t, n, o;
                return T(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return i.trys.push([0, 2, , 3]), [4, r.HTTP.post({
                                url: p.Endpoints.BROADCAST_PRIVATE_CHANNEL
                            })];
                        case 1:
                            return e = i.sent(), t = (0, c.createChannelRecordFromServer)(e.body), _.default.call(t.id, !1, !1, null), [2, e.body.id];
                        case 2:
                            throw (null == (n = i.sent()) ? void 0 : null === (o = n.body) || void 0 === o ? void 0 : o.code) === p.AbortCodes.QUARANTINED && (0, s.default)(), n;
                        case 3:
                            return [2]
                    }
                })
            })()
        },
        _openCachedDMChannel: function(e, t) {
            var n = f.default.getDMFromUserId(e),
                r = null != n ? f.default.getChannel(n) : null;
            return null != r ? (null == t || t(), null != (0, u.getRootNavigationRefIfInExperiment)() ? (0, l.transitionTo)(p.Routes.CHANNEL(p.ME, r.id), {
                navigationReplace: !0
            }) : E.default.selectPrivateChannel(r.id), r) : null
        },
        ensurePrivateChannel: function(e) {
            return O(function() {
                var t, n, o;
                return T(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return t = this._getRecipients(e), [4, r.HTTP.post({
                                url: p.Endpoints.USER_CHANNELS,
                                body: {
                                    recipients: t
                                },
                                oldFormErrors: !0
                            })];
                        case 1:
                            return n = a.sent(), o = (0, c.createChannelRecordFromServer)(n.body), i.default.dispatch({
                                type: "CHANNEL_CREATE",
                                channel: o
                            }), [2, o.id]
                    }
                })
            }).apply(this)
        },
        getOrEnsurePrivateChannel: function(e) {
            return O(function() {
                var t;
                return T(this, function(n) {
                    switch (n.label) {
                        case 0:
                            if (null != (t = f.default.getDMFromUserId(e))) return [2, t];
                            return [4, this.ensurePrivateChannel(e)];
                        case 1:
                            return [2, n.sent()]
                    }
                })
            }).apply(this)
        },
        getDMChannel: function(e) {
            return O(function() {
                var t, n;
                return T(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return [4, r.HTTP.get(p.Endpoints.DM_CHANNEL(e))];
                        case 1:
                            return t = o.sent(), n = (0, c.createChannelRecordFromServer)(t.body), i.default.dispatch({
                                type: "CHANNEL_CREATE",
                                channel: n
                            }), [2, n.id]
                    }
                })
            })()
        },
        _getRecipients: function(e) {
            return null != e ? Array.isArray(e) ? e : [e] : []
        },
        _openPrivateChannel: function(e) {
            var t = (0, c.createChannelRecordFromServer)(e);
            return i.default.dispatch({
                type: "CHANNEL_CREATE",
                channel: t
            }), null != (0, u.getRootNavigationRefIfInExperiment)() ? (0, l.transitionTo)(p.Routes.CHANNEL(p.ME, t.id), {
                navigationReplace: !0
            }) : E.default.selectPrivateChannel(t.id), t
        },
        closePrivateChannel: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return i.default.dispatch({
                type: "CHANNEL_DELETE",
                channel: {
                    id: e,
                    guild_id: void 0,
                    parent_id: void 0
                },
                silent: n
            }), t && !__OVERLAY__ && (0, l.transitionTo)(p.Routes.FRIENDS), r.HTTP.del({
                url: p.Endpoints.CHANNEL(e),
                query: {
                    silent: n
                },
                oldFormErrors: !0
            }).then(function() {
                o.AccessibilityAnnouncer.announce(y.default.Messages.A11Y_ANNOUNCEMENT_DM_CLOSED)
            }).catch(function() {
                o.AccessibilityAnnouncer.announce(y.default.Messages.A11Y_ANNOUNCEMENT_DM_CLOSED_FAILED)
            })
        },
        updatePermissionOverwrite: function(e, t) {
            return r.HTTP.put({
                url: p.Endpoints.CHANNEL_PERMISSIONS_OVERWRITE(e, t.id),
                body: t,
                oldFormErrors: !0
            })
        },
        clearPermissionOverwrite: function(e, t) {
            return r.HTTP.del({
                url: p.Endpoints.CHANNEL_PERMISSIONS_OVERWRITE(e, t),
                oldFormErrors: !0
            })
        },
        addRecipient: function(e, t, n, i) {
            var a = this;
            return r.HTTP.put({
                url: p.Endpoints.CHANNEL_RECIPIENT(e, t),
                context: {
                    location: n
                },
                oldFormErrors: !0
            }).then(function(t) {
                return (o.AccessibilityAnnouncer.announce(y.default.Messages.A11Y_ANNOUNCEMENT_USER_ADDED_TO_GROUP_DM), null == i || i(), 201 === t.status) ? a._openPrivateChannel(t.body).id : e
            }).catch(function() {
                return o.AccessibilityAnnouncer.announce(y.default.Messages.A11Y_ANNOUNCEMENT_USER_ADDED_TO_GROUP_DM_FAILED), e
            })
        },
        addRecipients: function(e, t, n, r) {
            var o = this;
            return this.addRecipient(e, t[0], n, r).then(function(e) {
                return Promise.all(t.slice(1).map(function(t) {
                    return o.addRecipient(e, t, n)
                })).then(function() {
                    return e
                })
            })
        },
        removeRecipient: function(e, t) {
            return r.HTTP.del({
                url: p.Endpoints.CHANNEL_RECIPIENT(e, t),
                oldFormErrors: !0
            })
        },
        setDMOwner: function(e, t) {
            return r.HTTP.patch({
                url: p.Endpoints.CHANNEL(e),
                body: {
                    owner: t
                },
                oldFormErrors: !0
            })
        },
        setName: function(e, t) {
            return O(function() {
                var n, o, i;
                return T(this, function(u) {
                    switch (u.label) {
                        case 0:
                            return n = f.default.getChannel(e), [4, r.HTTP.patch({
                                url: p.Endpoints.CHANNEL(e),
                                body: {
                                    name: t
                                },
                                oldFormErrors: !0
                            })];
                        case 1:
                            return o = u.sent(), null != (i = null == n ? void 0 : n.getGuildId()) && !(null == n ? void 0 : n.isThread()) && a.default.checkGuildTemplateDirty(i), [2, o]
                    }
                })
            })()
        },
        setIcon: function(e, t) {
            var n = f.default.getChannel(e);
            r.HTTP.patch({
                url: p.Endpoints.CHANNEL(e),
                body: {
                    icon: t
                },
                oldFormErrors: !0
            }).then(function() {
                var e = null == n ? void 0 : n.getGuildId();
                null != e && !(null == n ? void 0 : n.isThread()) && a.default.checkGuildTemplateDirty(e)
            })
        },
        setVoiceBackgroundDisplay: function(e, t) {
            var n;
            return n = t.type === m.VoiceCallBackgroundTypes.EMPTY ? t : {
                type: t.type,
                resource_id: t.resourceId
            }, r.HTTP.put({
                url: p.Endpoints.UPDATE_VOICE_CHANNEL_BACKGROUND(e),
                body: {
                    voice_background_display: n
                },
                oldFormErrors: !0
            })
        },
        convertToGuild: function(e) {
            return r.HTTP.post({
                url: p.Endpoints.CHANNEL_CONVERT(e),
                oldFormErrors: !0
            })
        },
        preload: function(e, t) {
            i.default.dispatch({
                type: "CHANNEL_PRELOAD",
                guildId: e === p.ME ? null : e,
                channelId: t,
                context: p.CURRENT_APP_CONTEXT
            })
        },
        fetchChannelStoreListing: function(e, t) {
            var n = null != t ? p.Endpoints.CHANNEL_STORE_LISTING_SKU(e, t) : p.Endpoints.CHANNEL_STORE_LISTING(e);
            return (0, d.httpGetWithCountryCodeQuery)(n).then(function(t) {
                i.default.dispatch({
                    type: "STORE_LISTING_FETCH_SUCCESS",
                    channelId: e,
                    storeListing: t.body
                })
            })
        },
        createTextChannel: function(e, t, n, o) {
            return O(function() {
                var i, u;
                return T(this, function(s) {
                    switch (s.label) {
                        case 0:
                            return i = {
                                type: p.ChannelTypes.GUILD_TEXT,
                                name: t,
                                permission_overwrites: []
                            }, null != n && (i.parent_id = n), null != o && (i.topic = o), [4, r.HTTP.post({
                                url: p.Endpoints.GUILD_CHANNELS(e),
                                body: i,
                                oldFormErrors: !0
                            })];
                        case 1:
                            return u = s.sent(), a.default.checkGuildTemplateDirty(e), [2, u]
                    }
                })
            })()
        }
    }
}