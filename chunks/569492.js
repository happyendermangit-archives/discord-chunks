function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ALL_CHANNEL_TYPES: function() {
            return D
        },
        CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING: function() {
            return ec
        },
        CREATEABLE_NON_VOCAL_CHANNEL_NAME_TYPES: function() {
            return ea
        },
        ChannelRecordBase: function() {
            return ev
        },
        DMChannelRecord: function() {
            return ek
        },
        EDITABLE_CHANNEL_TYPES: function() {
            return en
        },
        EDITABLE_VOICE_SETTINGS_TYPES: function() {
            return es
        },
        GUILD_CHANNEL_TYPES: function() {
            return w
        },
        GUILD_FAVORITES_CHANNEL_TYPES: function() {
            return ef
        },
        GUILD_NON_CATEGORY_CHANNEL_TYPES: function() {
            return et
        },
        GUILD_VOCAL_CHANNEL_TYPES: function() {
            return G
        },
        GUILD_WEBHOOK_CHANNEL_TYPES: function() {
            return U
        },
        GuildTextualChannelRecord: function() {
            return eb
        },
        NSFW_CHANNEL_TYPES: function() {
            return ei
        },
        PrivateChannelRecord: function() {
            return ew
        },
        SILENT_JOIN_LEAVE_CHANNEL_TYPES: function() {
            return j
        },
        SLOWMODE_CHANNEL_TYPES: function() {
            return eu
        },
        TEXT_CHANNEL_TYPES: function() {
            return Y
        },
        THREADED_CHANNEL_TYPES: function() {
            return J
        },
        THREAD_CHANNEL_TYPES: function() {
            return Q
        },
        TOGGLE_ANNOUNCEMENT_CHANNEL_TYPES: function() {
            return er
        },
        TOPIC_CHANNEL_TYPES: function() {
            return eo
        },
        UnknownChannelRecord: function() {
            return eg
        },
        VOICE_THREAD_PARENT_CHANNEL_TYPES: function() {
            return el
        },
        castChannelRecord: function() {
            return ex
        },
        createChannelRecord: function() {
            return eY
        },
        createChannelRecordFromInvite: function() {
            return eV
        },
        createChannelRecordFromServer: function() {
            return eF
        },
        getAccessPermissions: function() {
            return eh
        },
        getBasicAccessPermissions: function() {
            return eO
        },
        isGuildChannelType: function() {
            return k
        },
        isGuildReadableType: function() {
            return q
        },
        isGuildSelectableChannelType: function() {
            return P
        },
        isGuildTextChannelType: function() {
            return M
        },
        isGuildVocalChannelType: function() {
            return B
        },
        isMultiUserDM: function() {
            return x
        },
        isPrivate: function() {
            return V
        },
        isReadableType: function() {
            return ee
        },
        isTextChannel: function() {
            return W
        },
        isThread: function() {
            return Z
        },
        isVoiceChannel: function() {
            return z
        }
    });
    var r, o, i = n("392711"),
        a = n.n(i),
        u = n("194864"),
        s = n("983396"),
        l = n("22287"),
        c = n("774300"),
        f = n("353934"),
        d = n("487181"),
        _ = n("947248"),
        E = n("523018"),
        p = n("281767"),
        m = n("928204"),
        y = n("428294");

    function I(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function h(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function O(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function T(e, t, n) {
        return t && O(e.prototype, t), n && O(e, n), e
    }

    function S(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function v(e) {
        return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function g(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && b(e, t)
    }

    function A(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                S(e, t, n[t])
            })
        }
        return e
    }

    function b(e, t) {
        return (b = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function N(e) {
        return function(e) {
            if (Array.isArray(e)) return I(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return I(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function R(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r, o, i = v(e);
            if (t) {
                var a = v(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return n = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(n)
        }
    }
    var C = new Set([p.ChannelTypes.GUILD_TEXT, p.ChannelTypes.GUILD_ANNOUNCEMENT, p.ChannelTypes.GUILD_STORE, p.ChannelTypes.ANNOUNCEMENT_THREAD, p.ChannelTypes.PUBLIC_THREAD, p.ChannelTypes.PRIVATE_THREAD, p.ChannelTypes.GUILD_DIRECTORY, p.ChannelTypes.GUILD_FORUM, p.ChannelTypes.GUILD_MEDIA, p.ChannelTypes.DM, p.ChannelTypes.GROUP_DM]);

    function P(e) {
        return C.has(e)
    }
    var D = new Set([p.ChannelTypes.DM, p.ChannelTypes.GROUP_DM, p.ChannelTypes.GUILD_TEXT, p.ChannelTypes.GUILD_VOICE, p.ChannelTypes.GUILD_STAGE_VOICE, p.ChannelTypes.GUILD_CATEGORY, p.ChannelTypes.GUILD_ANNOUNCEMENT, p.ChannelTypes.GUILD_STORE, p.ChannelTypes.ANNOUNCEMENT_THREAD, p.ChannelTypes.PUBLIC_THREAD, p.ChannelTypes.PRIVATE_THREAD, p.ChannelTypes.GUILD_DIRECTORY, p.ChannelTypes.GUILD_FORUM, p.ChannelTypes.GUILD_MEDIA]),
        L = new Set([p.ChannelTypes.GUILD_TEXT, p.ChannelTypes.GUILD_ANNOUNCEMENT, p.ChannelTypes.ANNOUNCEMENT_THREAD, p.ChannelTypes.PUBLIC_THREAD, p.ChannelTypes.PRIVATE_THREAD]);

    function M(e) {
        return L.has(e)
    }
    var U = new Set([p.ChannelTypes.GUILD_TEXT, p.ChannelTypes.GUILD_ANNOUNCEMENT, p.ChannelTypes.GUILD_FORUM, p.ChannelTypes.GUILD_MEDIA, p.ChannelTypes.GUILD_VOICE, p.ChannelTypes.GUILD_STAGE_VOICE]),
        w = new Set([p.ChannelTypes.GUILD_TEXT, p.ChannelTypes.GUILD_VOICE, p.ChannelTypes.GUILD_STAGE_VOICE, p.ChannelTypes.GUILD_CATEGORY, p.ChannelTypes.GUILD_ANNOUNCEMENT, p.ChannelTypes.GUILD_STORE, p.ChannelTypes.ANNOUNCEMENT_THREAD, p.ChannelTypes.PUBLIC_THREAD, p.ChannelTypes.PRIVATE_THREAD, p.ChannelTypes.GUILD_DIRECTORY, p.ChannelTypes.GUILD_FORUM, p.ChannelTypes.GUILD_MEDIA]);

    function k(e) {
        return w.has(e)
    }
    p.ChannelTypes.GUILD_TEXT, p.ChannelTypes.GUILD_ANNOUNCEMENT, p.ChannelTypes.GUILD_FORUM, p.ChannelTypes.GUILD_MEDIA;
    var G = new Set([p.ChannelTypes.GUILD_VOICE, p.ChannelTypes.GUILD_STAGE_VOICE]);

    function B(e) {
        return "SELECTABLE" !== e && G.has(e)
    }
    var j = new Set([p.ChannelTypes.GUILD_STAGE_VOICE]),
        F = new Set([p.ChannelTypes.DM, p.ChannelTypes.GROUP_DM]);

    function V(e) {
        return F.has(e)
    }
    var H = new Set([p.ChannelTypes.GROUP_DM]);

    function x(e) {
        return H.has(e)
    }
    var Y = new Set([p.ChannelTypes.DM, p.ChannelTypes.GROUP_DM, p.ChannelTypes.GUILD_TEXT, p.ChannelTypes.GUILD_ANNOUNCEMENT, p.ChannelTypes.ANNOUNCEMENT_THREAD, p.ChannelTypes.PUBLIC_THREAD, p.ChannelTypes.PRIVATE_THREAD]);

    function W(e) {
        return Y.has(e)
    }
    var K = new Set([p.ChannelTypes.DM, p.ChannelTypes.GROUP_DM, p.ChannelTypes.GUILD_VOICE, p.ChannelTypes.GUILD_STAGE_VOICE, p.ChannelTypes.PUBLIC_THREAD, p.ChannelTypes.PRIVATE_THREAD]);

    function z(e) {
        return K.has(e)
    }
    var X = new Set([p.ChannelTypes.GUILD_TEXT, p.ChannelTypes.GUILD_ANNOUNCEMENT, p.ChannelTypes.ANNOUNCEMENT_THREAD, p.ChannelTypes.PUBLIC_THREAD, p.ChannelTypes.PRIVATE_THREAD, p.ChannelTypes.GUILD_DIRECTORY, p.ChannelTypes.GUILD_FORUM, p.ChannelTypes.GUILD_MEDIA, p.ChannelTypes.DM, p.ChannelTypes.GROUP_DM]);

    function q(e) {
        return X.has(e)
    }
    var Q = new Set([p.ChannelTypes.ANNOUNCEMENT_THREAD, p.ChannelTypes.PUBLIC_THREAD, p.ChannelTypes.PRIVATE_THREAD]),
        J = new Set([p.ChannelTypes.GUILD_TEXT, p.ChannelTypes.GUILD_ANNOUNCEMENT, p.ChannelTypes.GUILD_FORUM, p.ChannelTypes.GUILD_MEDIA]);

    function Z(e) {
        return Q.has(e)
    }
    var $ = new Set([p.ChannelTypes.DM, p.ChannelTypes.GROUP_DM, p.ChannelTypes.GUILD_TEXT, p.ChannelTypes.GUILD_ANNOUNCEMENT, p.ChannelTypes.ANNOUNCEMENT_THREAD, p.ChannelTypes.PUBLIC_THREAD, p.ChannelTypes.PRIVATE_THREAD, p.ChannelTypes.GUILD_FORUM, p.ChannelTypes.GUILD_MEDIA, p.ChannelTypes.GUILD_DIRECTORY, p.ChannelTypes.GUILD_VOICE, p.ChannelTypes.GUILD_STAGE_VOICE]);

    function ee(e) {
        return $.has(e)
    }
    var et = new Set([p.ChannelTypes.GUILD_TEXT, p.ChannelTypes.GUILD_ANNOUNCEMENT, p.ChannelTypes.GUILD_STORE, p.ChannelTypes.GUILD_VOICE, p.ChannelTypes.GUILD_STAGE_VOICE, p.ChannelTypes.ANNOUNCEMENT_THREAD, p.ChannelTypes.PUBLIC_THREAD, p.ChannelTypes.PRIVATE_THREAD, p.ChannelTypes.GUILD_DIRECTORY, p.ChannelTypes.GUILD_FORUM, p.ChannelTypes.GUILD_MEDIA]),
        en = new Set([p.ChannelTypes.GUILD_ANNOUNCEMENT, p.ChannelTypes.GUILD_CATEGORY, p.ChannelTypes.GUILD_STORE, p.ChannelTypes.GUILD_TEXT, p.ChannelTypes.GUILD_VOICE, p.ChannelTypes.GUILD_STAGE_VOICE, p.ChannelTypes.GUILD_DIRECTORY, p.ChannelTypes.GUILD_FORUM, p.ChannelTypes.GUILD_MEDIA]),
        er = new Set([p.ChannelTypes.GUILD_TEXT, p.ChannelTypes.GUILD_ANNOUNCEMENT]),
        eo = new Set([p.ChannelTypes.GUILD_TEXT, p.ChannelTypes.GUILD_ANNOUNCEMENT, p.ChannelTypes.GUILD_FORUM, p.ChannelTypes.GUILD_MEDIA]),
        ei = new Set([p.ChannelTypes.GUILD_TEXT, p.ChannelTypes.GUILD_ANNOUNCEMENT, p.ChannelTypes.GUILD_FORUM, p.ChannelTypes.GUILD_MEDIA, p.ChannelTypes.GUILD_VOICE, p.ChannelTypes.GUILD_STAGE_VOICE]),
        ea = new Set([p.ChannelTypes.GUILD_ANNOUNCEMENT, p.ChannelTypes.GUILD_TEXT, p.ChannelTypes.GUILD_FORUM, p.ChannelTypes.GUILD_MEDIA, p.ChannelTypes.ANNOUNCEMENT_THREAD]),
        eu = new Set([p.ChannelTypes.GUILD_TEXT, p.ChannelTypes.GUILD_FORUM, p.ChannelTypes.GUILD_MEDIA, p.ChannelTypes.ANNOUNCEMENT_THREAD, p.ChannelTypes.PUBLIC_THREAD, p.ChannelTypes.PRIVATE_THREAD, p.ChannelTypes.GUILD_VOICE, p.ChannelTypes.GUILD_STAGE_VOICE]),
        es = new Set([p.ChannelTypes.PUBLIC_THREAD, p.ChannelTypes.PRIVATE_THREAD, p.ChannelTypes.GUILD_VOICE, p.ChannelTypes.GUILD_STAGE_VOICE]),
        el = new Set([p.ChannelTypes.GUILD_TEXT, p.ChannelTypes.GUILD_FORUM, p.ChannelTypes.GUILD_MEDIA]),
        ec = new Set([p.ChannelTypes.GUILD_TEXT, p.ChannelTypes.GUILD_CATEGORY, p.ChannelTypes.GUILD_FORUM, p.ChannelTypes.GUILD_ANNOUNCEMENT]),
        ef = new Set([p.ChannelTypes.GUILD_TEXT, p.ChannelTypes.GUILD_ANNOUNCEMENT, p.ChannelTypes.GUILD_FORUM, p.ChannelTypes.GUILD_VOICE]);

    function ed(e) {
        var t = {};
        return null == e || e.forEach(function(e) {
            t[e.id] = {
                id: e.id,
                type: e.type,
                allow: l.deserialize(e.allow),
                deny: l.deserialize(e.deny)
            }
        }), t
    }

    function e_(e) {
        return null == e ? {} : a().reduce(e, function(e, t) {
            return e[t.id] = t.nick, e
        }, {})
    }

    function eE(e) {
        return null == e ? [] : e.map(function(e) {
            return {
                id: e.id,
                name: e.name,
                emojiId: 0 !== e.emoji_id ? e.emoji_id : void 0,
                emojiName: e.emoji_name,
                moderated: e.moderated
            }
        })
    }

    function ep(e) {
        return null != e ? {
            id: e.id,
            name: e.name
        } : void 0
    }

    function em(e) {
        if (null == e) return null;
        switch (e.type) {
            case y.VoiceCallBackgroundTypes.EMPTY:
                return {
                    type: e.type
                };
            case y.VoiceCallBackgroundTypes.GRADIENT:
                return {
                    type: e.type, resourceId: e.resource_id
                };
            default:
                throw Error("unknown voice background display type")
        }
    }
    var ey = l.combine(p.Permissions.CONNECT, p.Permissions.VIEW_CHANNEL),
        eI = p.BasicPermissions.CONNECT | p.BasicPermissions.VIEW_CHANNEL;

    function eh(e) {
        return B(e) ? ey : p.Permissions.VIEW_CHANNEL
    }

    function eO(e) {
        return B(e) ? eI : p.BasicPermissions.VIEW_CHANNEL
    }

    function eT(e) {
        return "topic" in e && (e.topic_ = e.topic, delete e.topic), "position" in e && (e.position_ = e.position, delete e.position), "permissionOverwrites" in e && (e.permissionOverwrites_ = e.permissionOverwrites, delete e.permissionOverwrites), "bitrate" in e && (e.bitrate_ = e.bitrate, delete e.bitrate), "userLimit" in e && (e.userLimit_ = e.userLimit, delete e.userLimit), "nsfw" in e && (e.nsfw_ = e.nsfw, delete e.nsfw), "rateLimitPerUser" in e && (e.rateLimitPerUser_ = e.rateLimitPerUser, delete e.rateLimitPerUser), "flags" in e && (e.flags_ = e.flags, delete e.flags), e
    }
    var eS = Object.freeze({}),
        ev = function(e) {
            g(n, e);
            var t = R(n);

            function n() {
                return h(this, n), t.apply(this, arguments)
            }
            return T(n, [{
                key: "permissionOverwrites",
                get: function() {
                    var e;
                    return null !== (e = this.permissionOverwrites_) && void 0 !== e ? e : eS
                }
            }, {
                key: "topic",
                get: function() {
                    var e;
                    return null !== (e = this.topic_) && void 0 !== e ? e : ""
                }
            }, {
                key: "position",
                get: function() {
                    var e;
                    return null !== (e = this.position_) && void 0 !== e ? e : 0
                }
            }, {
                key: "bitrate",
                get: function() {
                    var e;
                    return null !== (e = this.bitrate_) && void 0 !== e ? e : p.BITRATE_DEFAULT
                }
            }, {
                key: "userLimit",
                get: function() {
                    var e;
                    return null !== (e = this.userLimit_) && void 0 !== e ? e : 0
                }
            }, {
                key: "nsfw",
                get: function() {
                    var e;
                    return null !== (e = this.nsfw_) && void 0 !== e && e
                }
            }, {
                key: "rateLimitPerUser",
                get: function() {
                    var e;
                    return null !== (e = this.rateLimitPerUser_) && void 0 !== e ? e : 0
                }
            }, {
                key: "flags",
                get: function() {
                    var e;
                    return null !== (e = this.flags_) && void 0 !== e ? e : 0
                }
            }, {
                key: "toJS",
                value: function() {
                    return A({}, this)
                }
            }, {
                key: "set",
                value: function(e, t) {
                    return this.merge(eT(S({}, e, t)))
                }
            }, {
                key: "merge",
                value: function(e) {
                    var t = null,
                        n = eT(e);
                    for (var r in n) n.hasOwnProperty(r) && this[r] !== n[r] && (null == t && (t = this.toJS()), t[r] = n[r]);
                    return null != t ? new this.constructor(t) : this
                }
            }, {
                key: "computeLurkerPermissionsAllowList",
                value: function() {
                    if (this.isGuildStageVoice() && d.default.isPublic(this.id)) return f.LURKER_STAGE_CHANNEL_PERMISSIONS_ALLOWLIST
                }
            }, {
                key: "isNSFW",
                value: function() {
                    return this.nsfw
                }
            }, {
                key: "isManaged",
                value: function() {
                    return null != this.application_id
                }
            }, {
                key: "isPrivate",
                value: function() {
                    return V(this.type)
                }
            }, {
                key: "isGroupDM",
                value: function() {
                    return this.type === p.ChannelTypes.GROUP_DM
                }
            }, {
                key: "isMultiUserDM",
                value: function() {
                    return x(this.type)
                }
            }, {
                key: "isDM",
                value: function() {
                    return this.type === p.ChannelTypes.DM
                }
            }, {
                key: "isSystemDM",
                value: function() {
                    return !1
                }
            }, {
                key: "isArchivedThread",
                value: function() {
                    var e;
                    return this.isThread() && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.archived) === !0
                }
            }, {
                key: "isLockedThread",
                value: function() {
                    var e;
                    return this.isThread() && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.locked) === !0
                }
            }, {
                key: "isScheduledForDeletion",
                value: function() {
                    return this.hasFlag(m.ChannelFlags.IS_SCHEDULED_FOR_DELETION)
                }
            }, {
                key: "isBroadcastChannel",
                value: function() {
                    return this.hasFlag(m.ChannelFlags.IS_BROADCASTING)
                }
            }, {
                key: "isArchivedLockedThread",
                value: function() {
                    var e, t;
                    return Q.has(this.type) && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.archived) === !0 && (null === (t = this.threadMetadata) || void 0 === t ? void 0 : t.locked) === !0
                }
            }, {
                key: "isForumPost",
                value: function() {
                    return this.type === p.ChannelTypes.PUBLIC_THREAD && null != this.parentChannelThreadType && p.ChannelTypesSets.GUILD_THREADS_ONLY.has(this.parentChannelThreadType)
                }
            }, {
                key: "isCategory",
                value: function() {
                    return this.type === p.ChannelTypes.GUILD_CATEGORY
                }
            }, {
                key: "isVocal",
                value: function() {
                    return z(this.type)
                }
            }, {
                key: "isGuildVocal",
                value: function() {
                    return B(this.type)
                }
            }, {
                key: "isGuildVocalOrThread",
                value: function() {
                    return this.isGuildVocal() || this.isVocalThread()
                }
            }, {
                key: "isGuildVoice",
                value: function() {
                    return this.type === p.ChannelTypes.GUILD_VOICE
                }
            }, {
                key: "isGuildStageVoice",
                value: function() {
                    return this.type === p.ChannelTypes.GUILD_STAGE_VOICE
                }
            }, {
                key: "isListenModeCapable",
                value: function() {
                    return this.isGuildStageVoice()
                }
            }, {
                key: "isThread",
                value: function() {
                    return Z(this.type)
                }
            }, {
                key: "isAnnouncementThread",
                value: function() {
                    return this.type === p.ChannelTypes.ANNOUNCEMENT_THREAD
                }
            }, {
                key: "isVocalThread",
                value: function() {
                    return this.type === p.ChannelTypes.PUBLIC_THREAD || this.type === p.ChannelTypes.PRIVATE_THREAD
                }
            }, {
                key: "isActiveThread",
                value: function() {
                    var e;
                    return this.isThread() && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.archived) !== !0
                }
            }, {
                key: "isDirectory",
                value: function() {
                    return this.type === p.ChannelTypes.GUILD_DIRECTORY
                }
            }, {
                key: "isForumLikeChannel",
                value: function() {
                    return this.isForumChannel() || this.isMediaChannel()
                }
            }, {
                key: "isForumChannel",
                value: function() {
                    return this.type === p.ChannelTypes.GUILD_FORUM
                }
            }, {
                key: "isMediaChannel",
                value: function() {
                    return this.type === p.ChannelTypes.GUILD_MEDIA
                }
            }, {
                key: "isMediaPost",
                value: function() {
                    return this.type === p.ChannelTypes.PUBLIC_THREAD && this.parentChannelThreadType === p.ChannelTypes.GUILD_MEDIA
                }
            }, {
                key: "isRoleSubscriptionTemplatePreviewChannel",
                value: function() {
                    return this.hasFlag(m.ChannelFlags.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL)
                }
            }, {
                key: "isOwner",
                value: function(e) {
                    return this.ownerId === e
                }
            }, {
                key: "getGuildId",
                value: function() {
                    return this.guild_id
                }
            }, {
                key: "getApplicationId",
                value: function() {
                    return this.application_id
                }
            }, {
                key: "getDefaultSortOrder",
                value: function() {
                    var e;
                    return null !== (e = this.defaultSortOrder) && void 0 !== e ? e : s.ThreadSortOrder.LATEST_ACTIVITY
                }
            }, {
                key: "getDefaultLayout",
                value: function() {
                    return this.isMediaChannel() ? u.ForumLayout.GRID : null == this.defaultForumLayout || this.defaultForumLayout === u.ForumLayout.DEFAULT ? u.ForumLayout.LIST : this.defaultForumLayout
                }
            }, {
                key: "accessPermissions",
                get: function() {
                    return eh(this.type)
                }
            }, {
                key: "hasFlag",
                value: function(e) {
                    return (0, _.hasFlag)(this.flags, e)
                }
            }]), n
        }(function e(t) {
            var n, r, o;
            h(this, e), S(this, "id", void 0), S(this, "type", void 0), S(this, "name", void 0), S(this, "guild_id", void 0), S(this, "topic_", void 0), S(this, "position_", void 0), S(this, "permissionOverwrites_", void 0), S(this, "bitrate_", void 0), S(this, "rtcRegion", void 0), S(this, "videoQualityMode", void 0), S(this, "userLimit_", void 0), S(this, "recipients", void 0), S(this, "rawRecipients", void 0), S(this, "ownerId", void 0), S(this, "icon", void 0), S(this, "application_id", void 0), S(this, "nicks", void 0), S(this, "nsfw_", void 0), S(this, "parent_id", void 0), S(this, "memberListId", void 0), S(this, "rateLimitPerUser_", void 0), S(this, "defaultThreadRateLimitPerUser", void 0), S(this, "defaultAutoArchiveDuration", void 0), S(this, "flags_", void 0), S(this, "originChannelId", void 0), S(this, "lastMessageId", void 0), S(this, "lastPinTimestamp", void 0), S(this, "availableTags", void 0), S(this, "appliedTags", void 0), S(this, "messageCount", void 0), S(this, "memberCount", void 0), S(this, "threadMetadata", void 0), S(this, "memberIdsPreview", void 0), S(this, "member", void 0), S(this, "parentChannelThreadType", void 0), S(this, "template", void 0), S(this, "defaultReactionEmoji", void 0), S(this, "isMessageRequest", void 0), S(this, "isMessageRequestTimestamp", void 0), S(this, "isSpam", void 0), S(this, "totalMessageSent", void 0), S(this, "defaultSortOrder", void 0), S(this, "version", void 0), S(this, "defaultForumLayout", void 0), S(this, "iconEmoji", void 0), S(this, "themeColor", void 0), S(this, "safetyWarnings", void 0), S(this, "voiceBackgroundDisplay", void 0), this.id = t.id, this.type = null !== (n = t.type) && void 0 !== n ? n : p.ChannelTypes.GUILD_TEXT, this.name = null !== (r = t.name) && void 0 !== r ? r : "", this.guild_id = null !== (o = t.guild_id) && void 0 !== o ? o : null
        }),
        eg = function(e) {
            g(n, e);
            var t = R(n);

            function n(e) {
                var r;
                return h(this, n), (r = t.call(this, e)).application_id = e.application_id, r.appliedTags = e.appliedTags, r.availableTags = e.availableTags, r.bitrate_ = e.bitrate_, r.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration, r.defaultForumLayout = e.defaultForumLayout, r.defaultReactionEmoji = e.defaultReactionEmoji, r.defaultSortOrder = e.defaultSortOrder, r.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser, r.flags_ = e.flags_, r.icon = e.icon, r.iconEmoji = e.iconEmoji, r.isMessageRequest = e.isMessageRequest, r.isMessageRequestTimestamp = e.isMessageRequestTimestamp, r.isSpam = e.isSpam, r.lastMessageId = e.lastMessageId, r.lastPinTimestamp = e.lastPinTimestamp, r.member = e.member, r.memberCount = e.memberCount, r.memberIdsPreview = e.memberIdsPreview, r.memberListId = e.memberListId, r.messageCount = e.messageCount, r.nicks = e.nicks, r.nsfw_ = e.nsfw_, r.originChannelId = e.originChannelId, r.ownerId = e.ownerId, r.parent_id = e.parent_id, r.parentChannelThreadType = e.parentChannelThreadType, r.permissionOverwrites_ = e.permissionOverwrites_, r.position_ = e.position_, r.rateLimitPerUser_ = e.rateLimitPerUser_, r.rawRecipients = e.rawRecipients, r.recipients = e.recipients, r.rtcRegion = e.rtcRegion, r.safetyWarnings = e.safetyWarnings, r.template = e.template, r.themeColor = e.themeColor, r.threadMetadata = e.threadMetadata, r.topic_ = e.topic_, r.userLimit_ = e.userLimit_, r.version = e.version, r.videoQualityMode = e.videoQualityMode, r.voiceBackgroundDisplay = e.voiceBackgroundDisplay, r
            }
            return T(n, null, [{
                key: "fromServer",
                value: function(e, t) {
                    var r, o, i, a = {
                        application_id: e.application_id,
                        appliedTags: e.applied_tags,
                        availableTags: null != e.available_tags ? eE(e.available_tags) : void 0,
                        bitrate_: e.bitrate,
                        defaultAutoArchiveDuration: e.default_auto_archive_duration,
                        defaultForumLayout: e.default_forum_layout,
                        defaultReactionEmoji: null != e.default_reaction_emoji ? {
                            emojiId: 0 !== e.default_reaction_emoji.emoji_id ? e.default_reaction_emoji.emoji_id : void 0,
                            emojiName: e.default_reaction_emoji.emoji_name
                        } : void 0,
                        defaultSortOrder: e.default_sort_order,
                        defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
                        flags_: e.flags,
                        guild_id: null !== (r = null != t ? t : e.guild_id) && void 0 !== r ? r : null,
                        icon: e.icon,
                        iconEmoji: ep(e.icon_emoji),
                        id: e.id,
                        isMessageRequest: e.is_message_request,
                        isMessageRequestTimestamp: e.is_message_request_timestamp,
                        isSpam: e.is_spam,
                        lastMessageId: e.last_message_id,
                        lastPinTimestamp: e.last_pin_timestamp,
                        member: null != e.member ? {
                            flags: e.member.flags,
                            muted: e.member.muted,
                            muteConfig: e.member.mute_config,
                            joinTimestamp: e.member.join_timestamp
                        } : void 0,
                        memberCount: e.member_count,
                        memberIdsPreview: e.member_ids_preview,
                        memberListId: e.member_list_id,
                        messageCount: e.message_count,
                        name: null !== (o = e.name) && void 0 !== o ? o : "",
                        nicks: e_(e.nicks),
                        nsfw_: e.nsfw,
                        originChannelId: e.origin_channel_id,
                        ownerId: e.owner_id,
                        parent_id: e.parent_id,
                        parentChannelThreadType: void 0,
                        permissionOverwrites_: ed(e.permission_overwrites),
                        position_: e.position,
                        rateLimitPerUser_: e.rate_limit_per_user,
                        rawRecipients: null != e.recipients ? e.recipients : [],
                        recipients: null != e.recipients ? e.recipients.map(function(e) {
                            return e.id
                        }) : [],
                        rtcRegion: e.rtc_region,
                        safetyWarnings: e.safety_warnings,
                        template: e.template,
                        themeColor: e.theme_color,
                        threadMetadata: null != e.thread_metadata ? {
                            archived: e.thread_metadata.archived,
                            autoArchiveDuration: e.thread_metadata.auto_archive_duration,
                            archiveTimestamp: e.thread_metadata.archive_timestamp,
                            createTimestamp: e.thread_metadata.create_timestamp,
                            locked: e.thread_metadata.locked,
                            invitable: null === (i = e.thread_metadata.invitable) || void 0 === i || i
                        } : void 0,
                        topic_: e.topic,
                        totalMessageSent: e.total_message_sent,
                        type: null != e.type ? e.type : p.ChannelTypes.UNKNOWN,
                        userLimit_: e.user_limit,
                        version: e.version,
                        videoQualityMode: e.video_quality_mode,
                        voiceBackgroundDisplay: em(e.voice_background_display)
                    };
                    return (0, c.dangerouslyCast)(a, n)
                }
            }]), n
        }(ev),
        eA = function(e) {
            g(n, e);
            var t = R(n);

            function n(e) {
                var r, o;
                return h(this, n), (r = t.call(this, e)).application_id = e.application_id, r.bitrate_ = e.bitrate_, r.flags_ = e.flags_, r.iconEmoji = e.iconEmoji, r.lastMessageId = e.lastMessageId, r.lastPinTimestamp = e.lastPinTimestamp, r.memberListId = e.memberListId, r.nsfw_ = e.nsfw_, r.originChannelId = e.originChannelId, r.parent_id = e.parent_id, r.permissionOverwrites_ = null !== (o = e.permissionOverwrites_) && void 0 !== o ? o : {}, r.position_ = e.position_, r.rateLimitPerUser_ = e.rateLimitPerUser_, r.rtcRegion = e.rtcRegion, r.themeColor = e.themeColor, r.topic_ = e.topic_, r.userLimit_ = e.userLimit_, r.version = e.version, r.videoQualityMode = e.videoQualityMode, r.voiceBackgroundDisplay = e.voiceBackgroundDisplay, r
            }
            return T(n, null, [{
                key: "fromServer",
                value: function(e, t) {
                    var n, r, o, i;
                    return ex({
                        application_id: e.application_id,
                        bitrate_: e.bitrate,
                        flags_: e.flags,
                        guild_id: null !== (n = null != t ? t : e.guild_id) && void 0 !== n ? n : null,
                        iconEmoji: ep(e.icon_emoji),
                        id: e.id,
                        lastMessageId: e.last_message_id,
                        lastPinTimestamp: e.last_pin_timestamp,
                        memberListId: e.member_list_id,
                        name: null !== (r = e.name) && void 0 !== r ? r : "",
                        nsfw_: null !== (o = e.nsfw) && void 0 !== o && o,
                        originChannelId: e.origin_channel_id,
                        parent_id: e.parent_id,
                        permissionOverwrites_: ed(e.permission_overwrites),
                        position_: e.position,
                        rateLimitPerUser_: null !== (i = e.rate_limit_per_user) && void 0 !== i ? i : 0,
                        rtcRegion: e.rtc_region,
                        themeColor: e.theme_color,
                        topic_: e.topic,
                        type: null != e.type ? e.type : p.ChannelTypes.GUILD_VOICE,
                        userLimit_: e.user_limit,
                        version: e.version,
                        videoQualityMode: e.video_quality_mode,
                        voiceBackgroundDisplay: em(e.voice_background_display)
                    })
                }
            }]), n
        }(ev),
        eb = function(e) {
            g(n, e);
            var t = R(n);

            function n(e) {
                var r, o;
                return h(this, n), (r = t.call(this, e)).application_id = e.application_id, r.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration, r.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser, r.flags_ = e.flags_, r.iconEmoji = e.iconEmoji, r.lastMessageId = e.lastMessageId, r.lastPinTimestamp = e.lastPinTimestamp, r.memberListId = e.memberListId, r.nsfw_ = e.nsfw_, r.parent_id = e.parent_id, r.permissionOverwrites_ = null !== (o = e.permissionOverwrites_) && void 0 !== o ? o : {}, r.position_ = e.position_, r.rateLimitPerUser_ = e.rateLimitPerUser_, r.themeColor = e.themeColor, r.topic_ = e.topic_, r.version = e.version, r
            }
            return T(n, null, [{
                key: "fromServer",
                value: function(e, t) {
                    var n, r, o, i;
                    return ex({
                        application_id: e.application_id,
                        defaultAutoArchiveDuration: e.default_auto_archive_duration,
                        defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
                        flags_: e.flags,
                        guild_id: null !== (n = null != t ? t : e.guild_id) && void 0 !== n ? n : null,
                        iconEmoji: ep(e.icon_emoji),
                        id: e.id,
                        lastMessageId: e.last_message_id,
                        lastPinTimestamp: e.last_pin_timestamp,
                        memberListId: e.member_list_id,
                        name: null !== (r = e.name) && void 0 !== r ? r : "",
                        nsfw_: null !== (o = e.nsfw) && void 0 !== o && o,
                        parent_id: e.parent_id,
                        permissionOverwrites_: ed(e.permission_overwrites),
                        position_: e.position,
                        rateLimitPerUser_: null !== (i = e.rate_limit_per_user) && void 0 !== i ? i : 0,
                        themeColor: e.theme_color,
                        topic_: e.topic,
                        type: null != e.type ? e.type : p.ChannelTypes.GUILD_TEXT,
                        version: e.version
                    })
                }
            }]), n
        }(ev),
        eN = function(e) {
            g(n, e);
            var t = R(n);

            function n() {
                return h(this, n), t.apply(this, arguments)
            }
            return n
        }(eb),
        eR = function(e) {
            g(n, e);
            var t = R(n);

            function n() {
                return h(this, n), t.apply(this, arguments)
            }
            return n
        }(eb),
        eC = function(e) {
            g(n, e);
            var t = R(n);

            function n() {
                return h(this, n), t.apply(this, arguments)
            }
            return n
        }(eb),
        eP = function(e) {
            g(n, e);
            var t = R(n);

            function n() {
                return h(this, n), t.apply(this, arguments)
            }
            return n
        }(eA),
        eD = function(e) {
            g(n, e);
            var t = R(n);

            function n() {
                return h(this, n), t.apply(this, arguments)
            }
            return n
        }(eb),
        eL = function(e) {
            g(n, e);
            var t = R(n);

            function n() {
                return h(this, n), t.apply(this, arguments)
            }
            return n
        }(eb),
        eM = function(e) {
            g(n, e);
            var t = R(n);

            function n() {
                return h(this, n), t.apply(this, arguments)
            }
            return n
        }(eA),
        eU = function(e) {
            g(n, e);
            var t = R(n);

            function n(e) {
                var r, o, i;
                return h(this, n), (r = t.call(this, e)).availableTags = null !== (o = e.availableTags) && void 0 !== o ? o : [], r.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration, r.defaultForumLayout = e.defaultForumLayout, r.defaultReactionEmoji = e.defaultReactionEmoji, r.defaultSortOrder = e.defaultSortOrder, r.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser, r.flags_ = e.flags_, r.iconEmoji = e.iconEmoji, r.lastMessageId = e.lastMessageId, r.lastPinTimestamp = e.lastPinTimestamp, r.memberListId = e.memberListId, r.nsfw_ = e.nsfw_, r.parent_id = e.parent_id, r.permissionOverwrites_ = null !== (i = e.permissionOverwrites_) && void 0 !== i ? i : {}, r.position_ = e.position_, r.rateLimitPerUser_ = e.rateLimitPerUser_, r.template = e.template, r.themeColor = e.themeColor, r.topic_ = e.topic_, r.version = e.version, r
            }
            return T(n, null, [{
                key: "fromServer",
                value: function(e, t) {
                    var r, o, i, a, u = {
                        availableTags: null != e.available_tags ? eE(e.available_tags) : [],
                        defaultAutoArchiveDuration: e.default_auto_archive_duration,
                        defaultForumLayout: e.default_forum_layout,
                        defaultReactionEmoji: null != e.default_reaction_emoji ? {
                            emojiId: 0 !== e.default_reaction_emoji.emoji_id ? e.default_reaction_emoji.emoji_id : void 0,
                            emojiName: e.default_reaction_emoji.emoji_name
                        } : void 0,
                        defaultSortOrder: e.default_sort_order,
                        defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
                        flags_: e.flags,
                        guild_id: null !== (r = null != t ? t : e.guild_id) && void 0 !== r ? r : null,
                        iconEmoji: ep(e.icon_emoji),
                        id: e.id,
                        lastMessageId: e.last_message_id,
                        lastPinTimestamp: e.last_pin_timestamp,
                        memberListId: e.member_list_id,
                        name: null !== (o = e.name) && void 0 !== o ? o : "",
                        nsfw_: null !== (i = e.nsfw) && void 0 !== i && i,
                        parent_id: e.parent_id,
                        permissionOverwrites_: ed(e.permission_overwrites),
                        position_: e.position,
                        rateLimitPerUser_: null !== (a = e.rate_limit_per_user) && void 0 !== a ? a : 0,
                        template: e.template,
                        themeColor: e.theme_color,
                        topic_: e.topic,
                        type: null != e.type ? e.type : p.ChannelTypes.GUILD_TEXT,
                        version: e.version
                    };
                    return (0, c.dangerouslyCast)(u, n)
                }
            }]), n
        }(ev),
        ew = function(e) {
            g(n, e);
            var t = R(n);

            function n(e) {
                var r, o, i;
                return h(this, n), (r = t.call(this, e)).application_id = e.application_id, r.flags_ = e.flags_, r.icon = e.icon, r.isMessageRequest = e.isMessageRequest, r.isMessageRequestTimestamp = e.isMessageRequestTimestamp, r.isSpam = e.isSpam, r.lastMessageId = e.lastMessageId, r.lastPinTimestamp = e.lastPinTimestamp, r.nicks = e.nicks, r.ownerId = e.ownerId, r.rawRecipients = n.sortRecipients(e.rawRecipients), r.recipients = N(null !== (o = e.recipients) && void 0 !== o ? o : []).sort(E.default.compare), r.safetyWarnings = null !== (i = e.safetyWarnings) && void 0 !== i ? i : [], r
            }
            return T(n, [{
                key: "isSystemDM",
                value: function() {
                    var e = this.rawRecipients[0];
                    return this.type === p.ChannelTypes.DM && null != e && !0 === e.system
                }
            }, {
                key: "getRecipientId",
                value: function() {
                    return this.recipients[0]
                }
            }, {
                key: "addRecipient",
                value: function(e, t, n) {
                    if (e === n) return this;
                    var r, o, i, u = this.set("recipients", a().uniq(N(null !== (i = this.recipients) && void 0 !== i ? i : []).concat([e])).sort(E.default.compare));
                    return null == t ? u : u.set("nicks", (r = A({}, u.nicks), o = null != (o = S({}, e, t)) ? o : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(o)).forEach(function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
                    }), r))
                }
            }, {
                key: "removeRecipient",
                value: function(e) {
                    return this.set("recipients", a().without(this.recipients, e))
                }
            }], [{
                key: "sortRecipients",
                value: function(e) {
                    return N(null != e ? e : []).sort(function(e, t) {
                        return E.default.compare(e.id, t.id)
                    })
                }
            }, {
                key: "fromServer",
                value: function(e) {
                    var t, r, o = n.sortRecipients(e.recipients),
                        i = {
                            application_id: e.application_id,
                            flags_: e.flags,
                            guild_id: null,
                            icon: e.icon,
                            id: e.id,
                            isMessageRequest: e.is_message_request,
                            isMessageRequestTimestamp: e.is_message_request_timestamp,
                            isSpam: null !== (t = e.is_spam) && void 0 !== t && t,
                            lastMessageId: e.last_message_id,
                            lastPinTimestamp: e.last_pin_timestamp,
                            name: null !== (r = e.name) && void 0 !== r ? r : "",
                            nicks: e_(e.nicks),
                            ownerId: e.owner_id,
                            rawRecipients: o,
                            recipients: o.map(function(e) {
                                return e.id
                            }),
                            safetyWarnings: e.safety_warnings,
                            type: null != e.type ? e.type : p.ChannelTypes.DM
                        };
                    return (0, c.dangerouslyCast)(i, n)
                }
            }]), n
        }(ev),
        ek = function(e) {
            g(n, e);
            var t = R(n);

            function n() {
                return h(this, n), t.apply(this, arguments)
            }
            return n
        }(ew),
        eG = function(e) {
            g(n, e);
            var t = R(n);

            function n() {
                return h(this, n), t.apply(this, arguments)
            }
            return n
        }(ew),
        eB = function(e) {
            g(n, e);
            var t = R(n);

            function n(e) {
                var r, o;
                return h(this, n), (r = t.call(this, e)).appliedTags = null !== (o = e.appliedTags) && void 0 !== o ? o : [], r.bitrate_ = e.bitrate_, r.flags_ = e.flags_, r.lastMessageId = e.lastMessageId, r.lastPinTimestamp = e.lastPinTimestamp, r.member = e.member, r.memberCount = e.memberCount, r.memberIdsPreview = e.memberIdsPreview, r.messageCount = e.messageCount, r.nsfw_ = e.nsfw_, r.ownerId = e.ownerId, r.parent_id = e.parent_id, r.parentChannelThreadType = e.parentChannelThreadType, r.rateLimitPerUser_ = e.rateLimitPerUser_, r.rtcRegion = e.rtcRegion, r.threadMetadata = e.threadMetadata, r.userLimit_ = e.userLimit_, r.videoQualityMode = e.videoQualityMode, r
            }
            return T(n, null, [{
                key: "fromServer",
                value: function(e, t) {
                    var r, o, i, a, u, s = {
                        appliedTags: null !== (r = e.applied_tags) && void 0 !== r ? r : [],
                        bitrate_: e.bitrate,
                        flags_: e.flags,
                        guild_id: null !== (o = null != t ? t : e.guild_id) && void 0 !== o ? o : null,
                        id: e.id,
                        lastMessageId: e.last_message_id,
                        lastPinTimestamp: e.last_pin_timestamp,
                        member: null != e.member ? {
                            flags: e.member.flags,
                            muted: e.member.muted,
                            muteConfig: e.member.mute_config,
                            joinTimestamp: e.member.join_timestamp
                        } : void 0,
                        memberCount: e.member_count,
                        memberIdsPreview: e.member_ids_preview,
                        messageCount: e.message_count,
                        name: null !== (i = e.name) && void 0 !== i ? i : "",
                        nsfw_: null !== (a = e.nsfw) && void 0 !== a && a,
                        ownerId: e.owner_id,
                        parent_id: e.parent_id,
                        parentChannelThreadType: e.parentChannelThreadType,
                        rateLimitPerUser_: e.rate_limit_per_user,
                        rtcRegion: e.rtc_region,
                        threadMetadata: null != e.thread_metadata ? {
                            archived: e.thread_metadata.archived,
                            autoArchiveDuration: e.thread_metadata.auto_archive_duration,
                            archiveTimestamp: e.thread_metadata.archive_timestamp,
                            createTimestamp: e.thread_metadata.create_timestamp,
                            locked: e.thread_metadata.locked,
                            invitable: null === (u = e.thread_metadata.invitable) || void 0 === u || u
                        } : void 0,
                        totalMessageSent: e.total_message_sent,
                        type: null != e.type ? e.type : p.ChannelTypes.PUBLIC_THREAD,
                        userLimit_: e.user_limit,
                        videoQualityMode: e.video_quality_mode
                    };
                    return (0, c.dangerouslyCast)(s, n)
                }
            }]), n
        }(ev),
        ej = (S(r = {}, p.ChannelTypes.DM, ew.fromServer), S(r, p.ChannelTypes.GROUP_DM, ew.fromServer), S(r, p.ChannelTypes.GUILD_TEXT, eb.fromServer), S(r, p.ChannelTypes.GUILD_VOICE, eA.fromServer), S(r, p.ChannelTypes.GUILD_STAGE_VOICE, eA.fromServer), S(r, p.ChannelTypes.GUILD_CATEGORY, eb.fromServer), S(r, p.ChannelTypes.GUILD_ANNOUNCEMENT, eb.fromServer), S(r, p.ChannelTypes.GUILD_STORE, eb.fromServer), S(r, p.ChannelTypes.ANNOUNCEMENT_THREAD, eB.fromServer), S(r, p.ChannelTypes.PUBLIC_THREAD, eB.fromServer), S(r, p.ChannelTypes.PRIVATE_THREAD, eB.fromServer), S(r, p.ChannelTypes.GUILD_DIRECTORY, eb.fromServer), S(r, p.ChannelTypes.GUILD_FORUM, eU.fromServer), S(r, p.ChannelTypes.GUILD_MEDIA, eU.fromServer), r);

    function eF(e, t) {
        var n, r;
        return (null !== (r = ej[null !== (n = e.type) && void 0 !== n ? n : p.ChannelTypes.GUILD_TEXT]) && void 0 !== r ? r : eg.fromServer)(e, t)
    }

    function eV(e) {
        return eY(e)
    }
    var eH = (S(o = {}, p.ChannelTypes.DM, ek), S(o, p.ChannelTypes.GROUP_DM, eG), S(o, p.ChannelTypes.GUILD_TEXT, eL), S(o, p.ChannelTypes.GUILD_VOICE, eM), S(o, p.ChannelTypes.GUILD_STAGE_VOICE, eP), S(o, p.ChannelTypes.GUILD_CATEGORY, eR), S(o, p.ChannelTypes.GUILD_ANNOUNCEMENT, eN), S(o, p.ChannelTypes.GUILD_STORE, eD), S(o, p.ChannelTypes.ANNOUNCEMENT_THREAD, eB), S(o, p.ChannelTypes.PUBLIC_THREAD, eB), S(o, p.ChannelTypes.PRIVATE_THREAD, eB), S(o, p.ChannelTypes.GUILD_DIRECTORY, eC), S(o, p.ChannelTypes.GUILD_FORUM, eU), S(o, p.ChannelTypes.GUILD_MEDIA, eU), o);

    function ex(e) {
        var t, n, r = null !== (n = eH[null !== (t = e.type) && void 0 !== t ? t : p.ChannelTypes.GUILD_TEXT]) && void 0 !== n ? n : eg;
        return (0, c.dangerouslyCast)(e, r)
    }

    function eY(e) {
        var t, n;
        return new(null !== (n = eH[null !== (t = e.type) && void 0 !== t ? t : p.ChannelTypes.GUILD_TEXT]) && void 0 !== n ? n : eg)(eT(e))
    }
}