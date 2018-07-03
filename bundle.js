'use strict';
class o {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.I_EGLkRJSzM_B_AYnsTfXr = "HSLOv4-";
        this.PqBLCMR_a_X_Iw_YgNbGiqqYHXO_K_l = "HSLO-";
        this._Wh_NVOXv__lhD_jewWnmmu_uN_qCbt_cGDYjq();
    }
    static get(gameID, index) {
        const functionValuesY = JSON.parse(localStorage.getItem(this.I_EGLkRJSzM_B_AYnsTfXr + gameID));
        return null === functionValuesY || void 0 === functionValuesY[index] ? false : functionValuesY[index];
    }
    static set(aspect, pRowNumber, pHeight) {
        let myBoards = JSON.parse(localStorage.getItem(this.I_EGLkRJSzM_B_AYnsTfXr + aspect));
        if (null === myBoards) {
            myBoards = {};
        }
        myBoards[pRowNumber] = pHeight;
        localStorage.setItem(this.I_EGLkRJSzM_B_AYnsTfXr + aspect, JSON.stringify(myBoards));
    }
    static _Wh_NVOXv__lhD_jewWnmmu_uN_qCbt_cGDYjq() {
        const t_ = this.get("extras", "resetted");
        if (!t_) {
            for (const i in localStorage) {
                if (i.substring(0, 5) === this.PqBLCMR_a_X_Iw_YgNbGiqqYHXO_K_l) {
                    localStorage.removeItem(i);
                }
            }
            this.set("extras", "resetted", true);
        }
    }
}
class a {
    constructor(opt_lastResultName) {
        this.OAONYMpOzrPHKMlEKZZpdE_L_QzJe__DgCzLv_M = opt_lastResultName;
        this.A_GuZ_QB_nW_omluafrbKl_BqiXtC = 30;
        this.PQSXB___MCEjsrQexioRQAE_tSp = 0;
        window.requestAnimationFrame((mmCoreSplitViewBlock) => {
            this.BbTTUwqPpGOG_MtK_Cz_UXC_VwAYpNeno_cO_(mmCoreSplitViewBlock);
        });
    }
    BbTTUwqPpGOG_MtK_Cz_UXC_VwAYpNeno_cO_(mmCoreSplitViewBlock) {
        window.requestAnimationFrame((mmCoreSplitViewBlock) => {
            this.BbTTUwqPpGOG_MtK_Cz_UXC_VwAYpNeno_cO_(mmCoreSplitViewBlock);
        });
        this._yGAvBFr_UiUT_fQg__a_dsxqnOYyOuA(mmCoreSplitViewBlock);
        this.OAONYMpOzrPHKMlEKZZpdE_L_QzJe__DgCzLv_M();
    }
    _yGAvBFr_UiUT_fQg__a_dsxqnOYyOuA(canCreateDiscussions) {
        const barrierX = canCreateDiscussions - this.PQSXB___MCEjsrQexioRQAE_tSp;
        this.PQSXB___MCEjsrQexioRQAE_tSp = canCreateDiscussions;
        if (0.05 > Math.abs(1e3 / 30 - barrierX)) {
            this.A_GuZ_QB_nW_omluafrbKl_BqiXtC = 30;
        } else {
            if (0.05 > Math.abs(1e3 / 60 - barrierX)) {
                this.A_GuZ_QB_nW_omluafrbKl_BqiXtC = 60;
            } else {
                if (0.05 > Math.abs(1e3 / 75 - barrierX)) {
                    this.A_GuZ_QB_nW_omluafrbKl_BqiXtC = 75;
                } else {
                    if (0.05 > Math.abs(10 - barrierX)) {
                        this.A_GuZ_QB_nW_omluafrbKl_BqiXtC = 100;
                    } else {
                        if (0.05 > Math.abs(1e3 / 120 - barrierX)) {
                            this.A_GuZ_QB_nW_omluafrbKl_BqiXtC = 120;
                        } else {
                            if (0.05 > Math.abs(1e3 / 144 - barrierX)) {
                                this.A_GuZ_QB_nW_omluafrbKl_BqiXtC = 144;
                            }
                        }
                    }
                }
            }
        }
    }
    get Pd_PdKAS_tHg__aHGq___() {
        return 1e3 / this.A_GuZ_QB_nW_omluafrbKl_BqiXtC;
    }
}
class n {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this["default"] = "EN";
        this.supported = ["EN", "JA", "ZH", "KO", "ES"];
    }
    static change() {
        const filenameFilter = $("[Hstr]");
        for (let ii = 0; ii < filenameFilter.length; ii++) {
            this.GTJ_Z_GBYToqmnGM_lGVtg_FyQ_fcWs_X_HuL($(filenameFilter[ii]));
        }
    }
    static GTJ_Z_GBYToqmnGM_lGVtg_FyQ_fcWs_X_HuL(result) {
        const o_ = result.attr("Hstr").split(".");
        let SV = window["lang_" + this.selected] || window.lang_EN;
        const last = o_[0];
        const nSV = o_[1];
        const k = o_[2];
        if (!(SV[nSV] && SV[nSV][k])) {
            SV = window["lang_" + this["default"]];
        }
        if ("html" === last) {
            result.html(SV[nSV][k]);
        } else {
            if ("placeholder" === last) {
                result.attr(last, SV[nSV][k]);
            }
        }
    }
    static get selected() {
        return i.language;
    }
    static get current() {
        return window["lang_" + this.selected];
    }
    static get browser() {
        const lang = window.navigator.language.toUpperCase();
        const sceneUid = lang.indexOf("-") ? lang.split("-")[0] : lang;
        return 0 <= this.supported.indexOf(sceneUid) ? sceneUid : this["default"];
    }
}
window.lang_EN = {
    mainMenu: {
        btn_settings: "Settings",
        btn_play: "Play",
        btn_spectate: "Spectate",
        btn_inputs: "Inputs",
        btn_theme: "Theme",
        input_tag1: "Tag",
        input_tag2: "Tag 2",
        input_nick: "Nick",
        input_skinUrl: "Skin URL (imgur)",
        select_ffa: "FFA",
        select_party: "Party",
        select_teams: "Teams",
        select_experimental: "Experimental",
        input_token: "Party token",
        btn_join: "Join",
        btn_create: "Create"
    },
    notif: {
        cantPlay2Tag: "You can't play in double tag mode.",
        hsloNetConn: "Welcome to Astrio!",
        hsloNetDisconn: "Disconnected from Astrio!",
        invalidSkinUrl: "Invalid skin URL",
        login_lastSession: "Logged in from last session data.",
        sdk_error: "SDK not loaded",
        alreadyLoggedIn: "Already logged in.",
        login_success: "Logged in",
        login_error: "Login error!",
        logout: "Logged out",
        nickChangeInGame: "You can't change nick while in game.",
        targeting_on: "Click a cell to begin targeting it. See instructions in mouse settings menu.",
        targeting_off: "Targeting is turned off. Turn it on in settings menu in order to use it.",
        target_unnamed: "Cannot target unnamed cells.",
        hsloSkin_noAcc: "Account does not exist."
    },
    leaderboard: {
        title: "Astr.io"
    },
    huds: {
        enterChatMsg: "Enter chat message...",
        teamlist_title: "Team Players",
        score: "Score",
        num1position: "#1 position",
        oIkJoik__aCBkiAW__B_s_UP_tmqyA__YkSLub_: "Paused",
        targeting_bigCellVp: "BIGGEST CELL VIEWPORT",
        targeting_followVp: "VIEWPORT FOLLOWING MOUSE",
        targeting_totalMass: "TOTAL MASS",
        targeting_players: "TARGETING PLAYERS"
    },
    settingMenu: {
        language: "Language",
        CellAnimation: "Animation delay",
        zoomSpeed: "Zoom speed",
        cameraSpeed: "Camera speed",
        eatAnimation: "Absorb animation",
        autoZoom: "Auto zoom",
        cellTextAnimation: "Cell text animation",
        autoHideText: "Auto hide text",
        hideOwnNick: "Hide own nick",
        hideOwnMass: "Hide own mass",
        cellNick: "Cell nick",
        cellMass: "Cell mass",
        nickShadow: "Nick shadow",
        massShadow: "Mass shadow",
        urlSkins: "URL skins",
        hsloSkins: "Astrio Skins",
        food: "Food",
        vanillaGrid: "Vanilla grid",
        bgSectors: "Background sectors",
        activeTurnMarker: "Active cell border",
        cursorLine: "Cursor lines",
        opponentRings: "Opponent rings",
        splitRings: "Split rings",
        virusRange: "Viruses range",
        teamIndicator: "Active cell indicator",
        commander: "Commander",
        chatType: "Chat type",
        targeting: "Cell Targeting [Spectate mode]",
        sounds: "Sounds",
        opt_on: "On",
        opt_off: "Off",
        opt_stepped: "Stepped",
        opt_linear: "Linear",
        opt_shortened: "Shortened",
        opt_full: "Full",
        opt_nick: "Nick",
        opt_mass: "Mass",
        opt_both: "Nick + Mass",
        opt_perf: "Performance",
        opt_normal: "Normal",
        opt_urlSkin: "Url skins",
        opt_hsloSkin: "Astrio skins",
        opt_allSkin: "All skins",
        opt_singleClr: "Mono colored",
        opt_rainbow: "Rainbow",
        opt_onlyLines: "Only lines",
        opt_snowflakes: "Snowflakes",
        opt_chatroom: "Chatroom",
        opt_popup: "Pop up chat"
    },
    hkMenu: {
        title: "Hotkeys",
        toggleMenuKey: "Toggle main menu",
        feedKey: "Feed",
        macroFeedKey: "Macro feed",
        splitKey: "Split",
        doubleSplitKey: "Double split",
        split16Key: "Split 16",
        stopKey: "Stop cell movement",
        chatKey: "Toggle chat",
        freeSpectateKey: "Toggle spectate mode",
        toggleSplitRings: "Toggle split rings",
        toggleOpponentRings: "Toggle opponent rings",
        toggleNick: "Toggle cell nick",
        toggleMass: "Toggle cell mass",
        toggleOwnNick: "Toggle own nick",
        toggleOwnMass: "Toggle own mass",
        toggleSkin: "Toggle skin",
        toggleFood: "Toggle food",
        respawnKey: "Quick respawn",
        command0Key: "Command 0",
        command1Key: "Command 1",
        command2Key: "Command 2",
        command3Key: "Command 3",
        command4Key: "Command 4",
        command5Key: "Command 5",
        command6Key: "Command 6",
        command7Key: "Command 7",
        command8Key: "Command 8",
        command9Key: "Command 9",
        zoom1key: "Zoom level 1",
        zoom2key: "Zoom level 2",
        zoom3key: "Zoom level 3",
        zoom4key: "Zoom level 4",
        zoom5key: "Zoom level 5"
    },
    mouseMenu: {
        title: "Mouse",
        feed: "Feed",
        macroFeed: "Macro feed",
        split: "Split",
        doubleSplit: "Double split",
        split16: "Split 16",
        commander: "Commander",
        off: "Off",
        lmb: "Left click",
        rmb: "Right click",
        scroll: "Middle click",
        targeting_h1: "Targeting",
        targeting_txt1: "Lock target 1",
        targeting_txt2: "Lock target 2",
        targeting_txt3: "Middle click or Toggle spectate key",
        targeting_txt4: "Toggle top cell mode to follow mouse mode",
        targeting_txt5: "Toggle targeting mode to follow mouse mode",
        targeting_txt6: "Toggle follow mouse mode to top cell mode"
    },
    commandsMenu: {
        title: "Commands",
        command0: "Help me!",
        command1: "Feed Me!",
        command2: "Split into me!",
        command3: "Need backup at %sector%!",
        command4: "Enemy spotted at %sector%!",
        command5: "Need a teammate!",
        command6: "Tank the virus!",
        command7: "Eat the virus!",
        command8: "Let's bait!",
        command9: "Fake tricksplit!"
    },
    themeMenu: {
        selectedPreset: "Theme preset",
        cursor: "Cursor",
        lbSize: "Leaderboard size",
        chatFontSize: "Chat font size",
        minimapSize: "Minimap size",
        skinBorder: "Skin border",
        cellTransparency: "Cell transparency",
        lightenCellColor: "Lighten cell color",
        borderColor: "Border color",
        borderWidth: "Border width",
        gridColor: "Grid color",
        gridTextColor: "Grid text color",
        gridTextSize: "Grid text size",
        gridTextFont: "Grid text font",
        gridWidth: "Grid width",
        nickColor: "Nick color",
        nickStrokeColor: "Nick stroke color",
        cellNickSize: "Nick size",
        nickFont: "Nick font",
        massColor: "Mass color",
        massStrokeColor: "Mass stroke color",
        cellMassSize: "Mass size",
        massFont: "Mass font",
        foodColor: "Food color",
        foodSize: "Food size",
        virusColor: "Virus color",
        virusBorderColor: "Virus border color",
        virusBorderWidth: "virus border width",
        virusDecor: "Virus Decoration",
        backgroundColor: "Background color",
        commanderColor: "Commander color",
        indicatorSize: "Active cell indicator size",
        team1color: "Team 1 color [Double Tag Mode]",
        team2color: "Team 2 color [Double Tag Mode]",
        on: "On",
        off: "Off"
    }
}, window.lang_JA = {
    mainMenu: {
        btn_settings: "\u8a2d\u5b9a",
        btn_play: "\u30d7\u30ec\u30fc",
        btn_spectate: "\u89b3\u6226",
        btn_inputs: "\u30a4\u30f3\u30d7\u30c3\u30c8",
        btn_theme: "\u30c6\u30fc\u30de",
        input_tag1: "\u30bf\u30b0",
        input_tag2: "\u30bf\u30b02",
        input_nick: "\u540d\u524d",
        input_skinUrl: "\u30b9\u30ad\u30f3URL (imgur)",
        select_ffa: "FFA",
        select_party: "\u30d1\u30fc\u30c6\u30a3\u30fc",
        select_teams: "\u30c1\u30fc\u30e0",
        select_experimental: "\u30a8\u30af\u30b9\u30da\u30ea\u30e1\u30f3\u30bf\u30eb",
        input_token: "\u30c8\u30fc\u30af\u30f3",
        btn_join: "\u53c2\u52a0",
        btn_create: "\u4f5c\u6210"
    },
    notif: {
        cantPlay2Tag: "\u30c0\u30d6\u30eb\u30bf\u30b0\u30e2\u30fc\u30c9\u3067\u306f\u30d7\u30ec\u30fc\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002",
        hsloNetConn: "HSLO\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306b\u63a5\u7d9a\u3057\u307e\u3057\u305f\u3002",
        hsloNetDisconn: "HSLO\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304b\u3089\u5207\u65ad\u3057\u307e\u3057\u305f\u3002",
        invalidSkinUrl: "\u7121\u52b9\u306aURL\u3067\u3059\u3002",
        login_lastSession: "\u6700\u5f8c\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u304b\u3089\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3057\u305f\u3002",
        sdk_error: "SDK\u304c\u8aad\u307f\u8fbc\u307e\u308c\u307e\u305b\u3093\u3067\u3057\u305f\u3002",
        alreadyLoggedIn: "\u65e2\u306b\u30ed\u30b0\u30a4\u30f3\u3055\u308c\u3066\u3044\u307e\u3059\u3002",
        login_success: "\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3057\u305f\u3002",
        login_error: "\u30ed\u30b0\u30a4\u30f3\u30a8\u30e9\u30fc\uff01",
        logout: "\u30ed\u30b0\u30a2\u30a6\u30c8\u3057\u307e\u3057\u305f\u3002",
        nickChangeInGame: "\u30d7\u30ec\u30fc\u4e2d\u306b\u540d\u524d\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002",
        targeting_on: "\u30de\u30a6\u30b9\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30bf\u30fc\u30b2\u30c3\u30c8\u3092\u59cb\u3081\u307e\u3059\u3002\u30de\u30a6\u30b9\u8a2d\u5b9a\u30e1\u30cb\u30e5\u30fc\u306e\u89e3\u8aac\u3092\u53c2\u7167\u3002",
        targeting_off: "\u30bf\u30fc\u30b2\u30c3\u30c8\u304c\u30aa\u30d5\u306b\u306a\u308a\u307e\u3057\u305f\u3002\u4f7f\u7528\u3059\u308b\u306b\u306f\u8a2d\u5b9a\u30e1\u30cb\u30e5\u30fc\u304b\u3089\u30aa\u30f3\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
        target_unnamed: "Cannot target unnamed cells.",
        hsloSkin_noAcc: "Account does not exist."
    },
    leaderboard: {
        title: "Astr.io"
    },
    huds: {
        enterChatMsg: "\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1...",
        teamlist_title: "\u30c1\u30fc\u30e0\u30d7\u30ec\u30fc\u30e4\u30fc",
        score: "\u30b9\u30b3\u30a2",
        num1position: "1\u4f4d\u306e\u4f4d\u7f6e",
        oIkJoik__aCBkiAW__B_s_UP_tmqyA__YkSLub_: "\u9759\u6b62",
        targeting_bigCellVp: "1\u4f4d\u8996\u70b9",
        targeting_followVp: "\u30de\u30a6\u30b9\u8996\u70b9",
        targeting_totalMass: "\u5408\u8a08\u30de\u30b9",
        targeting_players: "\u30bf\u30fc\u30b2\u30c3\u30c8\u30d7\u30ec\u30fc\u30e4\u30fc"
    },
    settingMenu: {
        language: "\u8a00\u8a9e",
        CellAnimation: "\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u30c7\u30a3\u30ec\u30a4",
        zoomSpeed: "\u30ba\u30fc\u30e0\u901f\u5ea6",
        cameraSpeed: "\u30ab\u30e1\u30e9\u901f\u5ea6 [2 \u30c7\u30d5\u30a9\u30eb\u30c8]",
        eatAnimation: "\u7d30\u80de\u6355\u98df [\u98f2\u307f\u8fbc\u3080] \u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3",
        autoZoom: "\u30aa\u30fc\u30c8\u30ba\u30fc\u30e0",
        cellTextAnimation: "\u7d30\u80de\u306e\u30c6\u30ad\u30b9\u30c8\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3",
        autoHideText: "\u81ea\u52d5\u3067\u30c6\u30ad\u30b9\u30c8\u3092\u96a0\u3059",
        hideOwnNick: "Hide own nick",
        hideOwnMass: "Hide own mass",
        cellNick: "\u7d30\u80de\u306e\u540d\u524d",
        cellMass: "\u7d30\u80de\u306e\u30de\u30b9",
        nickShadow: "\u5f71 [\u7d30\u80de\u306e\u540d\u524d]",
        massShadow: "\u5f71 [\u7d30\u80de\u306e\u30de\u30b9]",
        urlSkins: "URL\u30b9\u30ad\u30f3",
        hsloSkins: "HSLO\u30b9\u30ad\u30f3",
        food: "\u7c92",
        vanillaGrid: "\u30d0\u30cb\u30e9\u30b0\u30ea\u30c3\u30c9",
        bgSectors: "\u5ea7\u6a19",
        activeTurnMarker: "Active cell border",
        cursorLine: "\u30ab\u30fc\u30bd\u30eb\u30e9\u30a4\u30f3",
        opponentRings: "\u6355\u98df\u5224\u5b9a\u30ea\u30f3\u30b0",
        splitRings: "Split rings",
        virusRange: "\u68d8\u7bc4\u56f2",
        teamIndicator: "Active cell indicator",
        commander: "\u30b3\u30de\u30f3\u30c0\u30fc",
        chatType: "\u30c1\u30e3\u30c3\u30c8\u30bf\u30a4\u30d7",
        targeting: "\u30bf\u30fc\u30b2\u30c3\u30c8 [\u89b3\u6226\u30e2\u30fc\u30c9]",
        sounds: "\u30b5\u30a6\u30f3\u30c9",
        opt_on: "\u30aa\u30f3",
        opt_off: "\u30aa\u30d5",
        opt_stepped: "\u30b9\u30c6\u30c3\u30d7",
        opt_shortened: "\u77ed\u7e2e",
        opt_linear: "\u30ea\u30cb\u30a2",
        opt_full: "\u30d5\u30eb",
        opt_nick: "\u540d\u524d",
        opt_mass: "\u30de\u30b9",
        opt_both: "\u540d\u524d + \u30de\u30b9",
        opt_perf: "\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9",
        opt_normal: "\u30ce\u30fc\u30de\u30eb",
        opt_urlSkin: "URL\u30b9\u30ad\u30f3",
        opt_hsloSkin: "Hslo\u30b9\u30ad\u30f3",
        opt_allSkin: "\u5168\u30b9\u30ad\u30f3",
        opt_singleClr: "\u5358\u8272",
        opt_rainbow: "\u30ec\u30a4\u30f3\u30dc\u30fc",
        opt_onlyLines: "\u7dda\u306e\u307f",
        opt_snowflakes: "\u30b9\u30ce\u30fc\u30d5\u30ec\u30fc\u30af",
        opt_chatroom: "\u30c1\u30e3\u30c3\u30c8\u30eb\u30fc\u30e0",
        opt_popup: "\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u30c1\u30e3\u30c3\u30c8"
    },
    hkMenu: {
        title: "\u30db\u30c3\u30c8\u30ad\u30fc",
        toggleMenuKey: "\u30e1\u30a4\u30f3\u30e1\u30cb\u30e5\u30fc\u5207\u308a\u66ff\u3048",
        feedKey: "\u990c",
        macroFeedKey: "\u990c\u30de\u30af\u30ed",
        splitKey: "\u5206\u88c2",
        doubleSplitKey: "\u30c0\u30d6\u30eb\u5206\u88c2",
        split16Key: "16\u5206\u88c2",
        stopKey: "\u9759\u6b62",
        chatKey: "\u30c1\u30e3\u30c3\u30c8\u5207\u308a\u66ff\u3048",
        freeSpectateKey: "\u89b3\u6226\u30e2\u30fc\u30c9\u5207\u308a\u66ff\u3048",
        toggleSplitRings: "Toggle split rings",
        toggleOpponentRings: "Toggle opponent rings",
        toggleNick: "\u540d\u524d\u8868\u793a\u5207\u308a\u66ff\u3048",
        toggleMass: "\u30de\u30b9\u8868\u793a\u5207\u308a\u66ff\u3048",
        toggleSkin: "\u30b9\u30ad\u30f3\u8868\u793a\u5207\u308a\u66ff\u3048",
        toggleFood: "\u990c\u8868\u793a\u5207\u308a\u66ff\u3048",
        respawnKey: "\u30af\u30a4\u30c3\u30af\u30ea\u30b9\u30dd\u30fc\u30f3",
        command0Key: "\u30b3\u30de\u30f3\u30c90",
        command1Key: "\u30b3\u30de\u30f3\u30c91",
        command2Key: "\u30b3\u30de\u30f3\u30c92",
        command3Key: "\u30b3\u30de\u30f3\u30c93",
        command4Key: "\u30b3\u30de\u30f3\u30c94",
        command5Key: "\u30b3\u30de\u30f3\u30c95",
        command6Key: "\u30b3\u30de\u30f3\u30c96",
        command7Key: "\u30b3\u30de\u30f3\u30c97",
        command8Key: "\u30b3\u30de\u30f3\u30c98",
        command9Key: "\u30b3\u30de\u30f3\u30c99",
        zoom1key: "\u30ba\u30fc\u30e0\u30ec\u30d9\u30eb1",
        zoom2key: "\u30ba\u30fc\u30e0\u30ec\u30d9\u30eb2",
        zoom3key: "\u30ba\u30fc\u30e0\u30ec\u30d9\u30eb3",
        zoom4key: "\u30ba\u30fc\u30e0\u30ec\u30d9\u30eb4",
        zoom5key: "\u30ba\u30fc\u30e0\u30ec\u30d9\u30eb5"
    },
    mouseMenu: {
        title: "\u30de\u30a6\u30b9",
        feed: "\u990c",
        macroFeed: "\u990c\u30de\u30af\u30ed",
        split: "\u5206\u88c2",
        doubleSplit: "\u30c0\u30d6\u30eb\u5206\u88c2",
        split16: "16\u5206\u88c2",
        commander: "\u30b3\u30de\u30f3\u30c0\u30fc",
        off: "\u30aa\u30d5",
        lmb: "\u5de6\u30af\u30ea\u30c3\u30af",
        rmb: "\u53f3\u30af\u30ea\u30c3\u30af",
        scroll: "\u30b9\u30af\u30ed\u30fc\u30eb\u30af\u30ea\u30c3\u30af",
        targeting_h1: "\u30bf\u30fc\u30b2\u30c3\u30c8",
        targeting_txt1: "\u30bf\u30fc\u30b2\u30c3\u30c8\u30ed\u30c3\u30af1",
        targeting_txt2: "\u30bf\u30fc\u30b2\u30c3\u30c8\u30ed\u30c3\u30af2",
        targeting_txt3: "\u30b9\u30af\u30ed\u30fc\u30eb\u30af\u30ea\u30c3\u30af or \u89b3\u6226\u30ad\u30fc\u5207\u308a\u66ff\u3048",
        targeting_txt4: "\u30c8\u30c3\u30d7\u30bb\u30eb\u30e2\u30fc\u30c9\u304b\u3089\u30de\u30a6\u30b9\u8ffd\u8de1\u306b\u5207\u308a\u66ff\u3048",
        targeting_txt5: "\u30bf\u30fc\u30b2\u30c3\u30c8\u30e2\u30fc\u30c9\u304b\u3089\u30de\u30a6\u30b9\u8ffd\u8de1\u306b\u5207\u308a\u66ff\u3048",
        targeting_txt6: "\u30de\u30a6\u30b9\u8ffd\u8de1\u304b\u3089\u30c8\u30c3\u30d7\u30bb\u30eb\u30e2\u30fc\u30c9\u306b\u5207\u308a\u66ff\u3048"
    },
    commandsMenu: {
        title: "\u30b3\u30de\u30f3\u30c9",
        command0: "Help me!",
        command1: "Feed Me!",
        command2: "Split into me!",
        command3: "Need backup at %sector%!",
        command4: "Enemy spotted at %sector%!",
        command5: "Need a teammate!",
        command6: "Tank the virus!",
        command7: "Eat the virus!",
        command8: "Let's bait!",
        command9: "Fake tricksplit!"
    },
    themeMenu: {
        selectedPreset: "Theme preset",
        cursor: "\u30ab\u30fc\u30bd\u30eb",
        lbSize: "\u30ea\u30fc\u30c0\u30fc\u30dc\u30fc\u30c9\u306e\u5927\u304d\u3055",
        chatFontSize: "Chat font size",
        minimapSize: "\u30df\u30cb\u30de\u30c3\u30d7\u306e\u5927\u304d\u3055",
        skinBorder: "\u30b9\u30ad\u30f3\u306e\u5883\u754c\u7dda",
        cellTransparency: "\u7d30\u80de\u306e\u900f\u904e",
        lightenCellColor: "\u7d30\u80de\u8272\u306e\u8efd\u6e1b",
        borderColor: "\u5883\u754c\u7dda\u306e\u8272",
        borderWidth: "\u5883\u754c\u7dda\u306e\u6a2a\u5e45",
        gridColor: "\u30b0\u30ea\u30c3\u30c9\u30ab\u30e9\u30fc",
        gridTextColor: "\u30b0\u30ea\u30c3\u30c9\u30c6\u30ad\u30b9\u30c8\u30ab\u30e9\u30fc",
        gridTextSize: "\u30b0\u30ea\u30c3\u30c9\u30c6\u30ad\u30b9\u30c8\u30b5\u30a4\u30ba",
        gridTextFont: "\u30b0\u30ea\u30c3\u30c9\u30c6\u30ad\u30b9\u30c8\u30d5\u30a9\u30f3\u30c8",
        gridWidth: "\u30b0\u30ea\u30c3\u30c9\u306e\u6a2a\u5e45",
        nickColor: "\u540d\u524d\u306e\u8272",
        nickStrokeColor: "\u540d\u524d\u306e\u5f71\u306e\u8272",
        cellNickSize: "\u540d\u524d\u306e\u5927\u304d\u3055",
        nickFont: "\u540d\u524d\u306e\u30d5\u30a9\u30f3\u30c8",
        massColor: "\u30de\u30b9\u306e\u8272",
        massStrokeColor: "\u30de\u30b9\u306e\u5f71\u306e\u8272",
        cellMassSize: "\u30de\u30b9\u306e\u5927\u304d\u3055",
        massFont: "\u30de\u30b9\u306e\u30d5\u30a9\u30f3\u30c8",
        foodColor: "\u30d5\u30a9\u30f3\u30c8\u306e\u8272",
        foodSize: "\u7c92\u306e\u5927\u304d\u3055",
        virusColor: "\u68d8\u306e\u8272",
        virusBorderColor: "\u68d8\u306e\u67a0\u8272",
        virusBorderWidth: "\u68d8\u306e\u5883\u754c\u7dda\u306e\u6a2a\u5e45",
        virusDecor: "\u68d8\u306e\u88c5\u98fe",
        backgroundColor: "\u80cc\u666f\u8272",
        commanderColor: "\u30b3\u30de\u30f3\u30c0\u30fc\u306e\u8272",
        indicatorSize: "\uff81\uff70\uff91\uff92\uff72\uff84\uff72\uff9d\uff7c\uff9e\uff79\uff70\uff80\uff70\u306e\u5927\u304d\u3055",
        team1color: "\u30c1\u30fc\u30e01\u306e\u8272 [\u30c0\u30d6\u30eb\u30bf\u30b0\u30e2\u30fc\u30c9]",
        team2color: "\u30c1\u30fc\u30e02\u306e\u8272 [\u30c0\u30d6\u30eb\u30bf\u30b0\u30e2\u30fc\u30c9]",
        on: "\u30aa\u30f3",
        off: "\u30aa\u30d5"
    }
}, window.lang_ZH = {
    mainMenu: {
        btn_settings: "\u8a2d\u5b9a",
        btn_play: "\u904a\u73a9",
        btn_spectate: "\u89c0\u6230",
        btn_inputs: "\u8f38\u5165",
        btn_theme: "\u4e3b\u984c",
        input_tag1: "\u968a\u4f0d\u4e00",
        input_tag2: "\u968a\u4f0d\u4e8c",
        input_nick: "\u66b1\u7a31",
        input_skinUrl: "\u76ae\u819a\u7db2\u5740 (imgur)",
        select_ffa: "FFA",
        select_party: "Party",
        select_teams: "Teams",
        select_experimental: "Experimental",
        input_token: "Party\u4ee3\u78bc",
        btn_join: "\u52a0\u5165",
        btn_create: "\u5275\u5efa"
    },
    notif: {
        cantPlay2Tag: "\u4e0d\u80fd\u7528\u96d9\u91cd\u968a\u4f0d",
        hsloNetConn: "\u9023\u63a5HSLO\u7db2\u7d61",
        hsloNetDisconn: "\u65b7\u958bHSLO\u7db2\u7d61",
        invalidSkinUrl: "\u4e0d\u7576\u76ae\u819a\u7db2\u5740",
        login_lastSession: "\u4ee5\u4e0a\u6b21\u8cc7\u8a0a\u767b\u5165",
        sdk_error: "SDK\u672a\u8f09\u5165",
        alreadyLoggedIn: "\u5df2\u7d93\u767b\u5165",
        login_success: "\u767b\u5165\u6210\u529f",
        login_error: "\u767b\u5165\u932f\u8aa4",
        logout: "\u767b\u51fa",
        nickChangeInGame: "\u4e0d\u80fd\u5728\u904a\u6232\u4e2d\u66f4\u6539\u66b1\u7a31.",
        targeting_on: "\u9078\u53d6\u4e00\u7d30\u80de\u8ffd\u8e64\u3002\u8a73\u770b\u6ed1\u9f20\u8a2d\u5b9a\u4ecb\u9762\u7684\u6307\u5f15",
        targeting_off: "\u81ea\u52d5\u8ffd\u8e64\u6a21\u5f0f\u5df2\u95dc\u9589\uff0c\u5982\u8981\u4f7f\u7528\u8acb\u5728\u8a2d\u5b9a\u4ecb\u9762\u958b\u555f",
        target_unnamed: "Cannot target unnamed cells.",
        hsloSkin_noAcc: "Account does not exist."
    },
    leaderboard: {
        title: "Astr.io"
    },
    huds: {
        enterChatMsg: "\u804a\u5929\u8f38\u5165\u4e2d\u2026\u2026",
        teamlist_title: "\u968a\u4f0d\u73a9\u5bb6",
        score: "\u5206\u6578",
        num1position: "\u7b2c\u4e00\u4f4d\u7f6e",
        oIkJoik__aCBkiAW__B_s_UP_tmqyA__YkSLub_: "\u66ab\u505c",
        targeting_bigCellVp: "\u6700\u5927\u73a9\u5bb6\u8996\u91ce",
        targeting_followVp: "\u6ed1\u9f20\u8ddf\u96a8\u8996\u91ce",
        targeting_totalMass: "\u7e3d\u8cea\u91cf",
        targeting_players: "\u8ffd\u8e64\u73a9\u5bb6\u4e2d"
    },
    settingMenu: {
        language: "\u8a9e\u8a00",
        CellAnimation: "\u52d5\u756b\u5ef6\u9072",
        zoomSpeed: "\u8b8a\u7126\u901f\u5ea6",
        cameraSpeed: "\u93e1\u982d\u901f\u5ea6\uff3b\u9810\u8a2d\u4e8c\uff3d",
        eatAnimation: "\u9032\u98df\u52d5\u756b\uff3b\u5438\u5165\uff3d",
        autoZoom: "\u81ea\u52d5\u8b8a\u7126",
        cellTextAnimation: "\u7d30\u80de\u6587\u5b57\u52d5\u756b",
        autoHideText: "\u81ea\u52d5\u96b1\u85cf\u6587\u5b57",
        hideOwnNick: "\u4e0d\u986f\u793a\u81ea\u5df1\u8cea\u91cf",
        hideOwnMass: "\u4e0d\u986f\u793a\u81ea\u5df1\u59d3\u540d",
        cellNick: "\u7d30\u80de\u66b1\u7a31",
        cellMass: "\u7d30\u80de\u8cea\u91cf",
        nickShadow: "\u9670\u5f71 [\u7d30\u80de\u66b1\u7a31]",
        massShadow: "\u9670\u5f71 [\u7d30\u80de\u8cea\u91cf]",
        urlSkins: "\u76ae\u819a\u7db2\u5740",
        hsloSkins: "HSLO\u76ae\u819a",
        food: "\u98df\u7269",
        vanillaGrid: "\u539f\u751f\u683c\u7db2",
        bgSectors: "\u80cc\u666f\u5340\u9593",
        activeTurnMarker: "Active cell border",
        cursorLine: "\u5c0e\u5f15\u7dda",
        opponentRings: "\u8b8a\u8272\u74b0",
        splitRings: "\u5206\u88c2\u8ddd\u96e2\u5708",
        virusRange: "\u523a\u7403\u8ddd\u96e2",
        teamIndicator: "Active cell indicator",
        commander: "\u6307\u63ee",
        chatType: "\u804a\u5929\u6a23\u5f0f",
        targeting: "\u73a9\u5bb6\u8ffd\u8e64\u4e2d [\u89c0\u6230\u6a21\u5f0f]",
        sounds: "\u8072\u97f3",
        opt_on: "\u958b",
        opt_off: "\u95dc",
        opt_stepped: "\u968e\u8e8d\u5f0f",
        opt_linear: "\u7dda\u6027",
        opt_shortened: "\u7c21\u77ed\u5316",
        opt_full: "\u5168\u90e8",
        opt_nick: "\u66b1\u7a31",
        opt_mass: "\u8cea\u91cf",
        opt_both: "\u66b1\u7a31\u53ca\u8cea\u91cf",
        opt_perf: "\u6548\u80fd",
        opt_normal: "\u4e00\u822c",
        opt_urlSkin: "\u76ae\u819a\u7db2\u5740",
        opt_hsloSkin: "HSLO\u76ae\u819a",
        opt_allSkin: "\u5168\u90e8\u76ae\u819a",
        opt_singleClr: "\u55ae\u8272",
        opt_rainbow: "\u5f69\u8272",
        opt_onlyLines: "\u53ea\u6709\u7dda\u689d",
        opt_snowflakes: "\u96ea\u82b1",
        opt_chatroom: "\u804a\u5929\u6b04",
        opt_popup: "\u5f48\u51fa\u901a\u77e5"
    },
    hkMenu: {
        title: "\u71b1\u9375",
        toggleMenuKey: "\u5207\u63db\u4e3b\u9078\u55ae",
        feedKey: "\u55ae\u6b21\u9935\u990a",
        macroFeedKey: "\u6301\u7e8c\u9935\u990a",
        splitKey: "\u5206\u88c2",
        doubleSplitKey: "\u96d9\u91cd\u5206\u88c2",
        split16Key: "\u56db\u91cd\u5206\u88c2",
        stopKey: "\u505c\u6b62\u79fb\u52d5",
        chatKey: "\u5207\u63db\u804a\u5929",
        freeSpectateKey: "\u5207\u63db\u89c0\u6230\u6a21\u5f0f",
        toggleSplitRings: "\u5207\u63db\u5206\u88c2\u8ddd\u96e2\u5708",
        toggleOpponentRings: "\u5207\u63db\u8b8a\u8272\u74b0",
        toggleNick: "\u5207\u63db\u66b1\u7a31\u986f\u793a",
        toggleMass: "\u5207\u63db\u8cea\u91cf\u986f\u793a",
        toggleSkin: "\u5207\u63db\u76ae\u819a\u986f\u793a",
        toggleFood: "\u5207\u63db\u98df\u7269\u986f\u793a",
        respawnKey: "\u5feb\u901f\u91cd\u751f",
        command0Key: "\u6307\u4ee4\uff10",
        command1Key: "\u6307\u4ee4\uff11",
        command2Key: "\u6307\u4ee4\uff12",
        command3Key: "\u6307\u4ee4\uff13",
        command4Key: "\u6307\u4ee4\uff14",
        command5Key: "\u6307\u4ee4\uff15",
        command6Key: "\u6307\u4ee4\uff16",
        command7Key: "\u6307\u4ee4\uff17",
        command8Key: "\u6307\u4ee4\uff18",
        command9Key: "\u6307\u4ee4\uff19",
        zoom1key: "\u8b8a\u7126\u7b49\u7d1a\u4e00",
        zoom2key: "\u8b8a\u7126\u7b49\u7d1a\u4e8c",
        zoom3key: "\u8b8a\u7126\u7b49\u7d1a\u4e09",
        zoom4key: "\u8b8a\u7126\u7b49\u7d1a\u56db",
        zoom5key: "\u8b8a\u7126\u7b49\u7d1a\u4e94"
    },
    mouseMenu: {
        title: "\u6ed1\u9f20",
        feed: "\u55ae\u6b21\u9935\u990a",
        macroFeed: "\u6301\u7e8c\u9935\u990a",
        split: "\u55ae\u6b21\u5206\u88c2",
        doubleSplit: "\u96d9\u91cd\u5206\u88c2",
        split16: "\u56db\u91cd\u5206\u88c2",
        commander: "\u6307\u63ee",
        off: "\u95dc",
        lmb: "\u5de6\u9375",
        rmb: "\u53f3\u9375",
        scroll: "\u6efe\u8f2a\u9375",
        targeting_h1: "\u8ffd\u8e64\u4e2d",
        targeting_txt1: "\u9396\u5b9a\u76ee\u6a19\u4e00",
        targeting_txt2: "\u9396\u5b9a\u76ee\u6a19\u4e8c",
        targeting_txt3: "\u6efe\u8f2a\u9375\u6216\u5207\u63db\u89c0\u6230\u9375",
        targeting_txt4: "\u5207\u63db\u6700\u5927\u73a9\u5bb6\u6a21\u5f0f\u8207\u6ed1\u9f20\u8ddf\u96a8\u6a21\u5f0f",
        targeting_txt5: "\u5207\u63db\u81ea\u52d5\u8ffd\u8e64\u6a21\u5f0f\u8207\u6ed1\u9f20\u8ddf\u96a8\u6a21\u5f0f",
        targeting_txt6: "\u5207\u63db\u6ed1\u9f20\u8ddf\u96a8\u6a21\u5f0f\u8207\u6700\u5927\u73a9\u5bb6\u6a21\u5f0f"
    },
    commandsMenu: {
        title: "\u6307\u4ee4",
        command0: "\u64cd\u4f60\u5abd\uff01",
        command1: "\u9935\u6211\uff01",
        command2: "\u79d2\u7a7a\u7d66\u6211\uff01",
        command3: "%sector%\u9700\u8981\u652f\u63f4\uff01",
        command4: "%sector%\u767c\u73fe\u6575\u4eba\uff01",
        command5: "\u4f86\u500b\u968a\u53cb\uff01",
        command6: "\u64cb\u523a\uff01",
        command7: "\u5403\u6389\u523a",
        command8: "\u4f86\u9a19\u4ed6\uff01",
        command9: "\u88dd\u7206\u7a7a\u9a19\u4ed6\uff01"
    },
    themeMenu: {
        selectedPreset: "Theme preset",
        cursor: "\u9f20\u6a19",
        lbSize: "\u6392\u884c\u699c\u5927\u5c0f",
        chatFontSize: "\u804a\u5929\u5ba4\u5b57\u9ad4\u5927\u5c0f",
        minimapSize: "\u5c0f\u5730\u5716\u5927\u5c0f",
        skinBorder: "\u76ae\u819a\u8f2a\u5ed3",
        cellTransparency: "\u7d30\u80de\u900f\u660e\u5ea6",
        lightenCellColor: "\u5149\u4eae\u7d30\u80de\u984f\u8272",
        borderColor: "\u5916\u570d\u984f\u8272",
        borderWidth: "\u5916\u570d\u95ca\u5ea6",
        gridColor: "\u5340\u9593\u984f\u8272",
        gridTextColor: "\u5340\u9593\u6587\u5b57\u984f\u8272",
        gridTextSize: "\u5340\u9593\u6587\u5b57\u5927\u5c0f",
        gridTextFont: "\u5340\u9593\u6587\u5b57\u5b57\u578b",
        gridWidth: "\u5340\u9593\u95ca\u5ea6",
        nickColor: "\u66b1\u7a31\u984f\u8272",
        nickStrokeColor: "\u66b1\u7a31\u8f2a\u5ed3\u984f\u8272",
        cellNickSize: "\u66b1\u7a31\u5927\u5c0f",
        nickFont: "\u66b1\u7a31\u5b57\u578b",
        massColor: "\u8cea\u91cf\u8a0a\u606f\u984f\u8272",
        massStrokeColor: "\u8cea\u91cf\u8a0a\u606f\u8f2a\u5ed3\u984f\u8272",
        cellMassSize: "\u8cea\u91cf\u8a0a\u606f\u5927\u5c0f",
        massFont: "\u8cea\u91cf\u8a0a\u606f\u5b57\u578b",
        foodColor: "\u98df\u7269\u984f\u8272",
        foodSize: "\u98df\u7269\u5927\u5c0f",
        virusColor: "\u523a\u7403\u984f\u8272",
        virusBorderColor: "\u523a\u7403\u5916\u6846\u984f\u8272",
        virusBorderWidth: "\u523a\u7403\u5916\u6846\u95ca\u5ea6",
        virusDecor: "\u523a\u7403\u88dd\u98fe",
        backgroundColor: "\u80cc\u666f\u984f\u8272",
        commanderColor: "\u6307\u4ee4\u984f\u8272",
        indicatorSize: "\u968a\u4f0d\u6a19\u793a\u984f\u8272",
        team1color: "\u968a\u4f0d\u4e00\u984f\u8272 [\u96d9\u968a\u4f0d\u6a21\u5f0f]",
        team2color: "\u968a\u4f0d\u4e8c\u984f\u8272 [\u96d9\u968a\u4f0d\u6a21\u5f0f]",
        on: "\u958b",
        off: "\u95dc"
    }
}, window.lang_KO = {
    mainMenu: {
        btn_settings: "\ud658\uacbd",
        btn_play: "\ud50c\ub808\uc774",
        btn_spectate: "\uad00\uc804",
        btn_inputs: "\ud0a4\ubcf4\ub4dc",
        btn_theme: "\ud14c\ub9c8",
        input_tag1: "\ud0dc\uadf8",
        input_tag2: "\ud0dc\uadf8 2",
        input_nick: "\ub2c9\ub124\uc784",
        input_skinUrl: "\uc774\ubbf8\uc9c0 URL (imgur)",
        select_ffa: "FFA",
        select_party: "\ud30c\ud2f0",
        select_teams: "\ud300",
        select_experimental: "\uc775\uc2a4\ud398\ub9ac\uba58\ud0c8",
        input_token: "\ud30c\ud2f0 \ucf54\ub4dc",
        btn_join: "\uc870\uc778",
        btn_create: "\uc0c8\ub85c\uace0\uce68"
    },
    notif: {
        cantPlay2Tag: "\ud0dc\uadf82 \ubaa8\ub4dc\uc5d0\uc11c\ub294 \uc2e4\ud589\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4..",
        hsloNetConn: "HSLO \ub124\ud2b8\uc6cc\ud06c\uc5d0 \uc5f0\uacb0\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
        hsloNetDisconn: "HSLO \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c \uc5f0\uacb0\uc774 \ub04a\uc5b4\uc84c\uc2b5\ub2c8\ub2e4.",
        invalidSkinUrl: "\uc798\ubabb\ub41c \uc2a4\ud0a8 URL",
        login_lastSession: "\ub9c8\uc9c0\ub9c9 \uc138\uc158 \ub370\uc774\ud130\uc5d0\uc11c \ub85c\uadf8\uc778\ud588\uc2b5\ub2c8\ub2e4..",
        sdk_error: "SDK\uac00 \ub85c\ub4dc\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.",
        alreadyLoggedIn: "\uc774\ubbf8 \ub85c\uadf8\uc778 \ud588\uc2b5\ub2c8\ub2e4.",
        login_success: "\ub85c\uadf8\uc778",
        login_error: "\ub85c\uadf8\uc778 \uc624\ub958!",
        logout: "\ub85c\uadf8 \uc544\uc6c3 \ub428!",
        nickChangeInGame: "\uac8c\uc784 \uc911 \ub2c9\ub124\uc784\uc744 \ubcc0\uacbd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4..",
        targeting_on: "\ud0c0\uac9f\ud305\uc744 \uc2dc\uc791\ud558\ub824\uba74 \uc138\ud3ec\ub97c \ud074\ub9ad\ud558\uc2ed\uc2dc\uc624. \ub9c8\uc6b0\uc2a4 \uc124\uc815\uc5d0\uc11c \uba54\ub274\uc758 \uc9c0\uce68\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc694..",
        targeting_off: "\ud0c0\uac9f\ud305\uc774 \uaebc\uc838 \uc788\uc2b5\ub2c8\ub2e4. \uc124\uc815 \uba54\ub274\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub3c4\ub85d \uc124\uc815\ud558\uc2ed\uc2dc\uc694.",
        target_unnamed: "Cannot target unnamed cells.",
        hsloSkin_noAcc: "Account does not exist."
    },
    leaderboard: {
        title: "Astr.io"
    },
    huds: {
        enterChatMsg: "\ucc44\ud305 \uba54\uc138\uc9c0 \uc785\ub825...",
        teamlist_title: "\ud300 \ud50c\ub808\uc774\uc5b4",
        score: "\uc810\uc218",
        num1position: "#1\ub4f1 \uc704\uce58",
        oIkJoik__aCBkiAW__B_s_UP_tmqyA__YkSLub_: "\uc77c\uc2dc \uc911\uc9c0",
        targeting_bigCellVp: "\uac00\uc7a5 \ud070 \uc138\ud3ec \ubaa9\ub85d",
        targeting_followVp: "\ub9c8\uc6b0\uc2a4 \ud0c0\uac9f\ud305 \uc124\uc815",
        targeting_totalMass: "\ucd1d \uc9c8\ub7c9",
        targeting_players: "\uc7a0\uc7ac\uc801 \ud0c0\uac9f\ud305"
    },
    settingMenu: {
        language: "\uc5b8\uc5b4",
        CellAnimation: "\uc560\ub2c8\uba54\uc774\uc158 \uc9c0\uc5f0",
        zoomSpeed: "\uc90c \uc18d\ub3c4",
        cameraSpeed: "\uce74\uba54\ub77c \uc18d\ub3c4 [2 \uae30\ubcf8\uac12]",
        eatAnimation: "\uc138\ud3ec \uba39\uae30[\ud761\uc218] \uc560\ub2c8\uba54\uc774\uc158",
        autoZoom: "\uc790\ub3d9 \ud655\ub300/\ucd95\uc18c",
        cellTextAnimation: "\uc138\ud3ec \ud14d\uc2a4\ud2b8 \uc560\ub2c8\uba54\uc774\uc158",
        autoHideText: "\ud14d\uc2a4\ud2b8 \uc790\ub3d9 \uc228\uae30\uae30",
        hideOwnNick: "Hide own nick",
        hideOwnMass: "Hide own mass",
        cellNick: "\uc138\ud3ec \ub2c9\ub124\uc784",
        cellMass: "\uc138\ud3ec \uc9c8\ub7c9",
        nickShadow: "\uadf8\ub9bc\uc790 [\uc138\ud3ec \ub2c9\ub124\uc784]",
        massShadow: "\uadf8\ub9bc\uc790 [\uc138\ud3ec \uc9c8\ub7c9]",
        urlSkins: "URL \uc2a4\ud0a8",
        hsloSkins: "HSLO \uc2a4\ud0a8",
        food: "\uba39\uc774",
        vanillaGrid: "\ubc14\ub2d0\ub77c \ubb34\ub2ac",
        bgSectors: "\ubc14\ud0d5\ud654\uba74",
        activeTurnMarker: "Active cell border",
        cursorLine: "\ucee4\uc11c \uc120",
        opponentRings: "\uc9c8\ub7c9 \uaca9\uc790\uc120",
        splitRings: "Split rings",
        virusRange: "\ubc14\uc774\ub7ec\uc2a4 \ubc94\uc704",
        teamIndicator: "Active cell indicator",
        commander: "\uc704\uce58 \ud551",
        chatType: "\ucc44\ud305 \uc720\ud615",
        targeting: "\uc138\ud3ec \ud0c0\uac9f\ud305[\uad00\uc804 \ubaa8\ub4dc]",
        sounds: "\uc18c\ub9ac",
        opt_on: "\ucf1c\uc9d0",
        opt_off: "\uaebc\uc9d0",
        opt_stepped: "\ub2ff\uc740\uacf3",
        opt_linear: "\uc120\ud615",
        opt_shortened: "\uc9e7\uc740",
        opt_full: "\uc804\uccb4",
        opt_nick: "\ub2c9\ub124\uc784",
        opt_mass: "\uc9c8\ub7c9",
        opt_both: "\ub2c9\ub124\uc784+ \uc9c8\ub7c9",
        opt_perf: "\uc2e4\uc801",
        opt_normal: "\ubcf4\ud1b5",
        opt_urlSkin: "Url \uc2a4\ud0a8",
        opt_hsloSkin: "Hslo \uc2a4\ud0a8",
        opt_allSkin: "\ubaa8\ub4e0 \uc2a4\ud0a8",
        opt_singleClr: "Mono colored",
        opt_rainbow: "\ubb34\uc9c0\uac1c",
        opt_onlyLines: "\ud14c\ub450\ub9ac\ub9cc",
        opt_snowflakes: "\ub208\uc1a1\uc774",
        opt_chatroom: "\ucc44\ud305\ubc29",
        opt_popup: "\ucc44\ud305 \uc54c\ub9bc"
    },
    hkMenu: {
        title: "\ub2e8\ucd95\ud0a4",
        toggleMenuKey: "\uba54\uc778\uba54\ub274 \ub044\uae30 ",
        feedKey: "feed \uba39\uc774",
        macroFeedKey: "\ub9e4\ud06c\ub85c feed\uba39\uc774",
        splitKey: "\ubd84\uc5f4",
        doubleSplitKey: "\uc774\uc911 \ubd84\uc5f4",
        split16Key: "16\ubd84\uc5f4",
        stopKey: "\uc138\ud3ec \uc774\ub3d9\uc911\uc9c0",
        chatKey: "\ucc44\ud305 \ucf1c\uae30",
        freeSpectateKey: "\ud22c\uc0ac \ubaa8\ub4dc \uc804\ud658",
        toggleSplitRings: "Toggle split rings",
        toggleOpponentRings: "Toggle opponent rings",
        toggleNick: "\uc138\ud3ec \ub2c9\uc744 \uc124\uc815\ud569\ub2c8\ub2e4",
        toggleMass: "\uc138\ud3ec \uc9c8\ub7c9\uc744 \uc124\uc815\ud569\ub2c8\ub2e4",
        toggleSkin: "\uc2a4\ud0a8 \uc124\uc815",
        toggleFood: "\uba39\uc774 \uc124\uc815",
        respawnKey: "\ube60\ub978 \ubd80\ud65c",
        command0Key: "\uba85\ub839 0",
        command1Key: "\uba85\ub839 1",
        command2Key: "\uba85\ub839 2",
        command3Key: "\uba85\ub839 3",
        command4Key: "\uba85\ub839 4",
        command5Key: "\uba85\ub839 5",
        command6Key: "\uba85\ub839 6",
        command7Key: "\uba85\ub839 7",
        command8Key: "\uba85\ub839 8",
        command9Key: "\uba85\ub839 9",
        zoom1key: "\uc90c \uc218\uc900 1",
        zoom2key: "\uc90c \uc218\uc900  2",
        zoom3key: "\uc90c \uc218\uc900 3",
        zoom4key: "\uc90c \uc218\uc900 4",
        zoom5key: "\uc90c \uc218\uc900 5"
    },
    mouseMenu: {
        title: "\ub9c8\uc6b0\uc2a4",
        feed: "\ud53c\ub4dcfeed",
        macroFeed: "\ub9e4\ud06c\ub85c \ud53c\ub4dcfeed",
        split: "\ubd84\uc5f4",
        doubleSplit: "\uc774\uc911 \ubd84\uc5f4",
        split16: "16 \ubd84\uc5f4",
        commander: "\uc704\uce58 \ud551",
        off: "\uaebc\uc9d0",
        lmb: "\uc67c\ucabd \ud074\ub9ad",
        rmb: "\uc624\ub978\ucabd \ud074\ub9ad",
        scroll: "\ud720 \ud074\ub9ad",
        targeting_h1: "\ud0c0\uac9f\ud305",
        targeting_txt1: "\ud0c0\uac9f \uc7a0\uae08 1  ",
        targeting_txt2: "\ud0c0\uac9f \uc7a0\uae08 2  ",
        targeting_txt3: "\uc2a4\ud06c\ub864 \ud074\ub9ad or\uad00\uc804 \ud0a4 \uc804\ud658",
        targeting_txt4: "\uc815\uc0c1 \uc138\ud3ec \ubaa8\ub4dc\uc5d0\uc11c \ub9c8\uc6b0\uc2a4 \ucd94\uc801\uc5d0 \uc804\ud658  ",
        targeting_txt5: "\ud0c0\uac9f \ubaa8\ub4dc\uc5d0\uc11c \ub9c8\uc6b0\uc2a4 \ucd94\uc801\uc5d0 \uc804\ud658  ",
        targeting_txt6: "\ub9c8\uc6b0\uc2a4 \ucd94\uc801\uc5d0\uc11c \ucd5c\uace0 \uc138\ud3ec \ubaa8\ub4dc\ub85c \uc804\ud658 "
    },
    commandsMenu: {
        title: "\uba85\ub839\uc5b4",
        command0: "\uc2dc\ubc1c!",
        command1: "\ube68\ub9ac\uc640\uc8fc\uc138\uc694!",
        command2: "\ub098\uc5d0\uac8c \ub123\uc5b4\uc918!",
        command3: "\uc5ec\uae30\uc5d0 \ub3c4\uc6c0\uc694\uccad %sector%!",
        command4: "\uc801 \uc774\uacf3\uc5d0\uc11c \ubc1c\uacac %sector%!",
        command5: "\ud300\uc6d0\uc774 \ud544\uc694\ud574!",
        command6: "\ubc14\uc774\ub7ec\uc2a4 \ubd80\uc154!",
        command7: "\ubc14\uc774\ub7ec\uc2a4 \uc3f4!",
        command8: "\ubbf8\ub07c!",
        command9: "\ub09a\uc2dc\ud558\uc790"
    },
    themeMenu: {
        selectedPreset: "Theme preset",
        cursor: "\ucee4\uc11c",
        lbSize: "\ub9ac\ub354\ubcf4\ub4dc \ud06c\uae30",
        chatFontSize: "Chat font size",
        minimapSize: "\ubbf8\ub2c8\ub9f5 \ud06c\uae30",
        skinBorder: "\uc2a4\ud0a8 \ud14c\ub450\ub9ac",
        cellTransparency: "\uc138\ud3ec \ud22c\uba85\ub3c4",
        lightenCellColor: "\ubc1d\uc740 \uc138\ud3ec \uc0c9\uae54",
        borderColor: "\ud14c\ub450\ub9ac \uc0c9\uae54",
        borderWidth: "\ud14c\ub450\ub9ac \ub108\ube44",
        gridColor: "\ub208\uae08 \uc0c9",
        gridTextColor: "\uaca9\uc790 \ud14d\uc2a4\ud2b8 \uc0c9\uae54",
        gridTextSize: "\ub208\uae08 \ud14d\uc2a4\ud2b8 \ud06c\uae30",
        gridTextFont: "\uaca9\uc790 \ud14c\uc2a4\ud2b8 \uae00\uaf34",
        gridWidth: "\ub208\uae08 \ub108\ube44",
        nickColor: "\ub2c9\ub124\uc784 \uceec\ub7ec",
        nickStrokeColor: "\ub2c9\ub124\uc784 \uc0c9\uae54\ud68d",
        cellNickSize: "\ub2c9 \ud06c\uae30",
        nickFont: "\ub2c9 \uae00\uaf34",
        massColor: "\uc9c8\ub7c9 \uc0c9\uae54",
        massStrokeColor: "\uc9c8\ub7c9 \uc0c9\uae54\ud68d",
        cellMassSize: "\uc9c8\ub7c9 \ud06c\uae30",
        massFont: "\uc9c8\ub7c9 \uae00\uaf34",
        foodColor: "\uba39\uc774 \uc0c9\uae54",
        foodSize: "\uba39\uc774 \ud06c\uae30",
        virusColor: "\ubc14\uc774\ub7ec\uc2a4 \uc0c9\uae54",
        virusBorderColor: "\ubc14\uc774\ub7ec\uc2a4 \ud14c\ub450\ub9ac \uc0c9",
        virusBorderWidth: "\ubc14\uc774\ub7ec\uc2a4 \ud14c\ub450\ub9ac \ub108\ube44",
        virusDecor: "\ubc14\uc774\ub7ec\uc2a4 \uc7a5\uc2dd",
        backgroundColor: "\ubc30\uacbd \uc0c9\uae54",
        commanderColor: "\uc704\uce58 \ud551 \uc0c9\uae54",
        indicatorSize: "\ud300 \uc544\uc774\ucf58 \ud06c\uae30",
        team1color: "\ud300 1 \uc0c9[\ub354\ube14 \ud0dc\uadf8 \ubaa8\ub4dc]",
        team2color: "\ud300 2 \uc0c9[\ub354\ube14 \ud0dc\uadf8 \ubaa8\ub4dc]",
        on: "\ucf1c\uc9d0",
        off: "\uaebc\uc9d0"
    }
}, window.lang_ES = {
    mainMenu: {
        btn_settings: "Configuracion",
        btn_play: "Jugar",
        btn_spectate: "Espectear",
        btn_inputs: "Hot Keys",
        btn_theme: "Tema/Dise\u00f1o",
        input_tag1: "Tag",
        input_tag2: "Tag 2",
        input_nick: "Nick",
        input_skinUrl: "Skin URL (imgur)",
        select_ffa: "FFA",
        select_party: "Party",
        select_teams: "Teams",
        select_experimental: "Experimental",
        input_token: "Codigo Party",
        btn_join: "Entrar",
        btn_create: "Crear"
    },
    notif: {
        cantPlay2Tag: "Tu no puedes jugar cuando utilizas la funcion de doble tag.",
        hsloNetConn: "Conectado a HSLO Networks.",
        hsloNetDisconn: "Desconectado de HSLO networks.",
        invalidSkinUrl: "Invalid skin URL",
        login_lastSession: "Logged in from last session data.",
        sdk_error: "SDK no ha cargado.",
        alreadyLoggedIn: "Ya te encuentras conectado.",
        login_success: "Conectado",
        login_error: "Error al conectar!",
        logout: "Desconectar",
        nickChangeInGame: "No puedes cambiar tu nickname cuando te encuentras jugando.",
        targeting_on: "Haga clic en una celula para comenzar a seguirla. Vea las instrucciones en el men\u00fa de configuraci\u00f3n del mouse.",
        targeting_off: "El seguimiento est\u00e1 desactivada. Enci\u00e9ndalo en el men\u00fa de configuraci\u00f3n para usarlo.",
        target_unnamed: "Cannot target unnamed cells.",
        hsloSkin_noAcc: "Account does not exist."
    },
    leaderboard: {
        title: "Astr.io"
    },
    huds: {
        enterChatMsg: "Ingresa el mensaje...",
        teamlist_title: "Jugadores de equipo",
        score: "Puntuaci\u00f3n",
        num1position: "#1 Posici\u00f3n",
        oIkJoik__aCBkiAW__B_s_UP_tmqyA__YkSLub_: "Pausado",
        targeting_bigCellVp: "BIGGEST CELL VIEWPORT",
        targeting_followVp: "VIEWPORT FOLLOWING MOUSE",
        targeting_totalMass: "MASA TOTAL",
        targeting_players: "JUGADOR OBJETIVO"
    },
    settingMenu: {
        language: "Lenguaje",
        CellAnimation: "Retraso de animaci\u00f3n",
        zoomSpeed: "Velocidad del Zoom",
        cameraSpeed: "Velocidad de Camara [2 es Preterminado]",
        eatAnimation: "Celula comiendo animacion",
        autoZoom: "Auto zoom",
        cellTextAnimation: "Animacion texto en celula",
        autoHideText: "Auto Ocultar texto",
        hideOwnNick: "Hide own nick",
        hideOwnMass: "Hide own mass",
        cellNick: "Nick de la celula",
        cellMass: "Masa de la celula",
        nickShadow: "Trazo del nick",
        massShadow: "Trazo del masa",
        urlSkins: "URL skins",
        hsloSkins: "HSLO skins",
        food: "Comida/Pellets",
        vanillaGrid: "Cuadricula Vanilla",
        bgSectors: "Tipo de sector",
        activeTurnMarker: "Active cell border",
        cursorLine: "Linea del cursor",
        opponentRings: "Rango del oponente",
        splitRings: "Split rings",
        virusRange: "Rango del virus",
        teamIndicator: "Active cell indicator",
        commander: "Se\u00f1al/Comandante",
        chatType: "Tipo de Chat",
        targeting: "Seguiento de celula",
        sounds: "Sonidos",
        opt_on: "Activado",
        opt_off: "Desactivado",
        opt_stepped: "Stepped",
        opt_linear: "Lineal",
        opt_shortened: "Acortado",
        opt_full: "Completo",
        opt_nick: "Nick",
        opt_mass: "Masa",
        opt_both: "Nick + Masa",
        opt_perf: "Rendimiento",
        opt_normal: "Normal",
        opt_urlSkin: "Url skins",
        opt_hsloSkin: "Hslo skins",
        opt_allSkin: "Todas las skins",
        opt_singleClr: "Solo un color",
        opt_rainbow: "Arcoiris",
        opt_onlyLines: "Solo lineas",
        opt_snowflakes: "Copos de nieve",
        opt_chatroom: "Chatroom",
        opt_popup: "Chat emergente"
    },
    hkMenu: {
        title: "Hotkeys",
        toggleMenuKey: "Ocultar menu principal",
        feedKey: "Cebar",
        macroFeedKey: "Cebar rapido [Macro]",
        splitKey: "Dividirse",
        doubleSplitKey: "Divisi\u00f3n doble",
        split16Key: "Dividir 16",
        stopKey: "Detener el movimiento de la celula",
        chatKey: "Ocultar Chat",
        freeSpectateKey: "Toggle spectate mode",
        toggleSplitRings: "Toggle split rings",
        toggleOpponentRings: "Toggle opponent rings",
        toggleNick: "Ocultar nick de la celula",
        toggleMass: "Ocultar masa de la celula",
        toggleSkin: "Ocultar skin",
        toggleFood: "Ocultar comida/pellets",
        respawnKey: "Reaparicion rapida",
        command0Key: "Comando 0",
        command1Key: "Comando 1",
        command2Key: "Comando 2",
        command3Key: "Comando 3",
        command4Key: "Comando 4",
        command5Key: "Comando 5",
        command6Key: "Comando 6",
        command7Key: "Comando  7",
        command8Key: "Comando 8",
        command9Key: "Comando 9",
        zoom1key: "Zoom nivel 1",
        zoom2key: "Zoom nivel 2",
        zoom3key: "Zoom nivel 3",
        zoom4key: "Zoom nivel 4",
        zoom5key: "Zoom nivel 5"
    },
    mouseMenu: {
        title: "Raton",
        feed: "Cebar",
        macroFeed: "Cebar rapido[Macro]",
        split: "Division",
        doubleSplit: "Doble division",
        split16: "Division por 16",
        commander: "Comandante",
        off: "Desactivado",
        lmb: "Clic izquierdo",
        rmb: "Clic derecho",
        scroll: "Clic central(Rueda)",
        targeting_h1: "Targeting",
        targeting_txt1: "Lock target 1",
        targeting_txt2: "Lock target 2",
        targeting_txt3: "Middle click or Toggle spectate key",
        targeting_txt4: "Toggle top cell mode to follow mouse mode",
        targeting_txt5: "Toggle targeting mode to follow mouse mode",
        targeting_txt6: "Toggle follow mouse mode to top cell mode"
    },
    commandsMenu: {
        title: "Comandos",
        command0: "Mierda!",
        command1: "Alimentame!",
        command2: "Dividete en mi!",
        command3: "Necesito ayuda en %sector%!",
        command4: "Enemigo avistado en %sector%!",
        command5: "Necesito compa\u00f1ero!",
        command6: "Lanza el virus!",
        command7: "Come el virus!",
        command8: "Haz baiteo!",
        command9: "Tricksplit falso!"
    },
    themeMenu: {
        selectedPreset: "Theme preset",
        cursor: "Puntero",
        lbSize: "Tama\u00f1o del leaderboard",
        chatFontSize: "Chat font size",
        minimapSize: "Tama\u00f1o del minimapa",
        skinBorder: "Borde de la Skin",
        cellTransparency: "Transparencia de la celula",
        lightenCellColor: "Claridad del color de la celula",
        borderColor: "Color del borde",
        borderWidth: "Ancho del borde",
        gridColor: "Color del grid",
        gridTextColor: "Color del texto del grid",
        gridTextSize: "Tama\u00f1o de texto del grid",
        gridTextFont: "Fuente de texto del grid",
        gridWidth: "Ancho del grid",
        nickColor: "Color del nick",
        nickStrokeColor: "Color del borde del nick",
        cellNickSize: "Tama\u00f1o del nick",
        nickFont: "Fuente del nick",
        massColor: "Color de la masa",
        massStrokeColor: "Color del borde de la masa",
        cellMassSize: "Tama\u00f1o de la masa",
        massFont: "Fuente de la masa",
        foodColor: "Color de la comida",
        foodSize: "Tama\u00f1o de la comida",
        virusColor: "Color del virus",
        virusBorderColor: "Color del borde del virus",
        virusBorderWidth: "Ancho del borde del virus",
        virusDecor: "Decoracion del virus",
        backgroundColor: "Color del fondo",
        commanderColor: "Color del comandante",
        indicatorSize: "Tama\u00f1o del indicador de compa\u00f1ero",
        team1color: "Color Equipo 1 [Modo doble TAG]",
        team2color: "Color Equipo 2 [Modo doble TAG]",
        on: "Activado",
        off: "Desactivado"
    }
};
class i {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.E__AUSKkw__EnLiqDeVjek_VfMyp_l_ = false;
        this.div = $("#settings");
        this.language = o.get("settings", "language") || n.browser;
        this.CellAnimation = ~~o.get("settings", "CellAnimation") || 140;
        this.eatAnimation = o.get("settings", "eatAnimation") || "off";
        this.zoomSpeed = ~~o.get("settings", "zoomSpeed") || 92;
        this.cameraSpeed = ~~o.get("settings", "cameraSpeed") || 10;
        this.autoZoom = o.get("settings", "autoZoom") || "off";
        this.cellTextAnimation = o.get("settings", "cellTextAnimation") || "on";
        this.autoHideText = o.get("settings", "autoHideText") || "on";
        this.cellNick = o.get("settings", "cellNick") || "on";
        this.nickShadow = o.get("settings", "nickShadow") || "off";
        this.cellMass = o.get("settings", "cellMass") || "shortened";
        this.massShadow = o.get("settings", "massShadow") || "off";
        this.hideOwnNick = o.get("settings", "hideOwnNick") || "off";
        this.hideOwnMass = o.get("settings", "hideOwnMass") || "off";
        this.urlSkins = o.get("settings", "urlSkins") || "on";
        this.hsloSkins = o.get("settings", "hsloSkins") || "on";
        this.food = o.get("settings", "food") || "monoColored";
        this.bgSectors = o.get("settings", "bgSectors") || "off";
        this.vanillaGrid = o.get("settings", "vanillaGrid") || "off";
        this.activeTurnMarker = o.get("settings", "activeTurnMarker") || "on";
        this.cursorLine = o.get("settings", "cursorLine") || "off";
        this.teamIndicator = o.get("settings", "teamIndicator") || "on";
        this.opponentRings = o.get("settings", "opponentRings") || "off";
        this.splitRings = o.get("settings", "splitRings") || "off";
        this.virusRange = o.get("settings", "virusRange") || "off";
        this.commander = o.get("settings", "commander") || "on";
        this.sounds = o.get("settings", "sounds") || "off";
        this.targeting = o.get("settings", "targeting") || "on";
        this.chatType = o.get("settings", "chatType") || "chatroom";
        this.__h_u_g_HPXIlkOAa_jsLTm_tUKG_je_EN();
        this._I__eOP__omdLxdwTORfxmtrDo_ly_O_F();
    }
    static __h_u_g_HPXIlkOAa_jsLTm_tUKG_je_EN() {
        $(".settings-options").each(function () {
            const _ = $(this).attr("type");
            if ("range" === _) {
                i.jWpz_vPT_bOvcBedfq_OhO_P__x_OuYc(this, 2);
            } else {
                if ("options" === _) {
                    i.pAiu__QKY_E_fmgKxsxTbQlvezIaZys(this, 2);
                }
            }
        });
        this.toggleChatroom();
        this.changeLanguage();
    }
    static _I__eOP__omdLxdwTORfxmtrDo_ly_O_F() {
        $(".settings-container").perfectScrollbar();
        $(".settings-container .fa-chevron-left").each(function () {
            $(this).click(() => {
                const customPlayerControls = $(this).parent();
                const _ = $(customPlayerControls).attr("type");
                if ("options" === _) {
                    i.pAiu__QKY_E_fmgKxsxTbQlvezIaZys(customPlayerControls, 0);
                } else {
                    if ("range" === _) {
                        i.jWpz_vPT_bOvcBedfq_OhO_P__x_OuYc(customPlayerControls, 0);
                    }
                }
            });
        });
        $(".settings-container span.outer").each(function () {
            $(this).click((o) => {
                const read_loop = $(this).parent();
                i.jWpz_vPT_bOvcBedfq_OhO_P__x_OuYc(read_loop, 3, o.offsetX);
            });
        });
        $(".settings-container .fa-chevron-right").each(function () {
            $(this).click(() => {
                const customPlayerControls = $(this).parent();
                const _ = $(customPlayerControls).attr("type");
                if ("options" === _) {
                    i.pAiu__QKY_E_fmgKxsxTbQlvezIaZys(customPlayerControls, 1);
                } else {
                    if ("range" === _) {
                        i.jWpz_vPT_bOvcBedfq_OhO_P__x_OuYc(customPlayerControls, 1);
                    }
                }
            });
        });
        $(".settings-close").click(() => {
            return this.close();
        });
    }
    static toggle() {
        if (this.E__AUSKkw__EnLiqDeVjek_VfMyp_l_) {
            this.close();
        } else {
            this.open();
        }
    }
    static close() {
        this.E__AUSKkw__EnLiqDeVjek_VfMyp_l_ = false;
        this.div.fadeOut(250);
    }
    static open() {
        this.E__AUSKkw__EnLiqDeVjek_VfMyp_l_ = true;
        this.div.fadeIn(250);
    }
    static pAiu__QKY_E_fmgKxsxTbQlvezIaZys(opt, execFile_opt) {
        const optionName = $(opt).attr("name");
        const types = $(opt).find("b");
        const start = types.length;
        let j = start;
        let end = 0;
        for (; j--;) {
            let customPlayerControls = types[j];
            if ("active" === $(customPlayerControls).attr("class")) {
                end = j;
            }
        }
        if (1 === execFile_opt) {
            const j = end + 1 < start ? end + 1 : 0;
            $(types[end]).removeAttr("class");
            $(types[j]).attr("class", "active");
            const artistTrack = $(types[j]).attr("value");
            this.vAkMUrWFw_PmMfBOjnnC_hvAp_Dm_k_n_JDxS_f(optionName, artistTrack);
        } else {
            if (0 === execFile_opt) {
                const j = 0 < end ? end - 1 : start - 1;
                $(types[end]).removeAttr("class");
                $(types[j]).attr("class", "active");
                const artistTrack = $(types[j]).attr("value");
                this.vAkMUrWFw_PmMfBOjnnC_hvAp_Dm_k_n_JDxS_f(optionName, artistTrack);
            } else {
                if (2 === execFile_opt) {
                    $(types[end]).removeAttr("class");
                    for (let i = start, j; i--;) {
                        if (j = types[i], $(j).attr("value") === this[optionName]) {
                            $(j).attr("class", "active");
                            break;
                        }
                    }
                }
            }
        }
    }
    static jWpz_vPT_bOvcBedfq_OhO_P__x_OuYc(y, sl, gaussianWidth = 0) {
        const criterion_index = $(y).attr("name");
        const timeline_items = $(y).find("span");
        const customPlayerControls = timeline_items[0];
        const arrowDiv = timeline_items[1];
        const mElmOrSub = $(timeline_items[2]);
        const n = ~~$(customPlayerControls).attr("min");
        const j = ~~$(customPlayerControls).attr("max");
        const i = ~~$(customPlayerControls).attr("step");
        const _i = ~~$(customPlayerControls).attr("value");
        if (1 === sl && _i + i <= j) {
            const boardSize = i + _i;
            $(customPlayerControls).attr("value", boardSize);
            $(arrowDiv).css("width", ~~(100 * (boardSize - n) / (j - n)) + "px");
            mElmOrSub.text("[" + boardSize + "]");
            this.vAkMUrWFw_PmMfBOjnnC_hvAp_Dm_k_n_JDxS_f(criterion_index, ~~boardSize);
        } else {
            if (0 === sl && _i - i >= n) {
                const boardSize = _i - i;
                $(customPlayerControls).attr("value", boardSize);
                $(arrowDiv).css("width", ~~(100 * (boardSize - n) / (j - n)) + "px");
                mElmOrSub.text("[" + boardSize + "]");
                this.vAkMUrWFw_PmMfBOjnnC_hvAp_Dm_k_n_JDxS_f(criterion_index, ~~boardSize);
            } else {
                if (2 === sl) {
                    const boardSize = this[criterion_index];
                    $(customPlayerControls).attr("value", boardSize);
                    $(arrowDiv).css("width", ~~(100 * (boardSize - n) / (j - n)) + "px");
                    mElmOrSub.text("[" + boardSize + "]");
                } else {
                    if (3 === sl) {
                        let r = 0 | gaussianWidth / 100 * (j - n);
                        r = (0 | r / i) * i;
                        r = r + n;
                        const u_ = 100 * (r - n) / (j - n);
                        $(customPlayerControls).attr("value", r);
                        $(arrowDiv).css("width", ~~u_ + "px");
                        mElmOrSub.text("[" + r + "]");
                        this.vAkMUrWFw_PmMfBOjnnC_hvAp_Dm_k_n_JDxS_f(criterion_index, ~~r);
                    }
                }
            }
        }
    }
    static vAkMUrWFw_PmMfBOjnnC_hvAp_Dm_k_n_JDxS_f(evt, callback) {
        this[evt] = callback;
        if ("chatType" === evt) {
            this.toggleChatroom();
        }
        if ("language" === evt) {
            this.changeLanguage();
        }
        if ("nickShadow" === evt) {
            X.UPmg_Adl_YOqoYlQEB__KZlZi__OIeCea.clear();
        }
        if ("massShadow" === evt) {
            X.__Ep_QqhaF_cxBBlHceNLgIk__SO_MKCQCbmqfT.clear();
        }
        o.set("settings", evt, callback);
        if ("custom" !== u.selectedPreset) {
            u.selectedPreset = "custom";
            o.set("theme", "selectedPreset", "custom");
            u.__h_u_g_HPXIlkOAa_jsLTm_tUKG_je_EN();
        }
    }
    static changeLanguage() {
        n.change();
        g.refresh();
    }
    static toggleChatroom() {
        if ("chatroom" === this.chatType) {
            $("#chatroom").show();
        } else {
            $("#chatroom").hide();
        }
    }
}
class s {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.E__AUSKkw__EnLiqDeVjek_VfMyp_l_ = false;
        this.target = "hotkeys";
        this.div = $("#inputs");
        this._I__eOP__omdLxdwTORfxmtrDo_ly_O_F();
        d._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        c._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        m._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        g._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
    }
    static toggle() {
        if (this.E__AUSKkw__EnLiqDeVjek_VfMyp_l_) {
            this.close();
        } else {
            this.open();
        }
    }
    static close() {
        this.E__AUSKkw__EnLiqDeVjek_VfMyp_l_ = false;
        this.div.fadeOut(250);
    }
    static open() {
        this.E__AUSKkw__EnLiqDeVjek_VfMyp_l_ = true;
        this.div.fadeIn(250);
    }
    static _I__eOP__omdLxdwTORfxmtrDo_ly_O_F() {
        $(".inputs-tab").each(function () {
            $(this).click(() => {
                const undefined = $(this).attr("target");
                if ("#hotkeys" === undefined) {
                    $("#hotkeys").addClass("active");
                    $("#commands").removeClass("active");
                    $("#mouse").removeClass("active");
                    $(".inputs-tab[target='#hotkeys']").addClass("active");
                    $(".inputs-tab[target='#mouse ']").removeClass("active");
                    $('.inputs-tab[target="#commands"]').removeClass("active");
                    s.target = "hotkeys";
                } else {
                    if ("#mouse" === undefined) {
                        $("#mouse").addClass("active");
                        $("#hotkeys").removeClass("active");
                        $("#commands").removeClass("active");
                        $(".inputs-tab[target='#hotkeys']").removeClass("active");
                        $(".inputs-tab[target='#commands']").removeClass("active");
                        $('.inputs-tab[target="#mouse"]').addClass("active");
                        s.target = "mouse";
                    } else {
                        if ("#commands" === undefined) {
                            $("#commands").addClass("active");
                            $("#hotkeys").removeClass("active");
                            $("#mouse").removeClass("active");
                            $(".inputs-tab[target='#commands']").addClass("active");
                            $(".inputs-tab[target='#hotkeys']").removeClass("active");
                            $(".inputs-tab[target='#mouse']").removeClass("active");
                            s.target = "commands";
                        }
                    }
                }
            });
        });
        $(".inputs-tab.close").click(() => {
            this.close();
        });
    }
}
class r {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.username = o.get("hsloSkin", "username") || "";
        this.password = o.get("hsloSkin", "password") || "";
        this.skinID = o.get("hsloSkin", "skinID") || 0;
        this.unicode = o.get("hsloSkin", "unicode") || "";
        this._I__eOP__omdLxdwTORfxmtrDo_ly_O_F();
    }
    static _I__eOP__omdLxdwTORfxmtrDo_ly_O_F() {
        $("#hslo-login").click(() => {
            $(".hslo-skin-menu").show();
        });
        $("#hslo-skin-close").click(() => {
            $(".hslo-skin-menu").hide();
        });
        $("#hslo-skin-submit").click(() => {
            this.login();
        });
        $("#hslo-logout").click(() => {
            this.logout();
        });
        if (this.username) {
            $("#hslo-skin-username").val(this.username);
        }
        if (this.password) {
            $("#hslo-skin-password").val(this.password);
        }
        if (this.skinID) {
            $("#hslo-login").addClass("clicked");
            $("#hslo-logout").removeClass("clicked");
            this.getSkin();
        }
    }
    static login() {
        const username = $("#hslo-skin-username").val();
        const value = $("#hslo-skin-password").val();
        const xhr = new XMLHttpRequest;
        xhr.open("GET", "http://2coolife.com/hsloskin/getKanji.php?uname=" + username + "&pword=" + value, true);
        xhr.onload = () => {
            if (4 === xhr.readyState && 200 === xhr.status) {
                const unicodeLastChar = JSON.parse(xhr.responseText);
                if (0 == unicodeLastChar) {
                    k.alert("HSLO SKIN", n.current.notif.hsloSkin_noAcc);
                } else {
                    this.username = username;
                    this.password = value;
                    this.skinID = unicodeLastChar;
                    this.unicode = "\u0001" + String.fromCharCode(unicodeLastChar);
                    o.set("hsloSkin", "username", this.username);
                    o.set("hsloSkin", "password", this.password);
                    o.set("hsloSkin", "skinID", this.skinID);
                    o.set("hsloSkin", "unicode", this.unicode);
                    $(".hslo-skin-menu").hide();
                    $("#hslo-login").addClass("clicked");
                    $("#hslo-logout").removeClass("clicked");
                    this.getSkin();
                }
            }
        };
        xhr.send();
    }
    static logout() {
        $("#hslo-skin-username").val("");
        $("#hslo-skin-password").val("");
        $("#hslo-login").removeClass("clicked");
        $("#hslo-logout").addClass("clicked");
        $("#hslo-skin-preview").css("background-image", "");
        this.username = "";
        this.password = "";
        this.unicode = "";
        this.skinID = 0;
        o.set("hsloSkin", "username", "");
        o.set("hsloSkin", "password", "");
        o.set("hsloSkin", "unicode", "");
        o.set("hsloSkin", "skinID", 0);
    }
    static getSkin() {
        const xhr = new XMLHttpRequest;
        xhr.open("GET", "http://2coolife.com/hsloskin/getskin.php?code=" + this.skinID, true);
        xhr.onload = () => {
            if (4 === xhr.readyState && 200 === xhr.status) {
                const AUTH_FORBIDDEN = xhr.responseText;
                if ("error" === AUTH_FORBIDDEN) {
                    return;
                }
                $("#hslo-skin-preview").css("background-image", "url(" + AUTH_FORBIDDEN + ")");
            }
        };
        xhr.send();
    }
    static get F_yI_FNOxXV_wxhEtNpacNvmPUwqmc__IjWcm() {
        return 0 < this.skinID;
    }
}
class l {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.selected = ~~o.get("profiles", "selected") || 1;
        this._Yk__x_y_j__tIGDj__QyDnkkhy__QX_PQlKkO = false;
        this.tag = o.get("profiles", "tag") || "";
        this.__h_u_g_HPXIlkOAa_jsLTm_tUKG_je_EN();
        this._I__eOP__omdLxdwTORfxmtrDo_ly_O_F();
    }
    static __h_u_g_HPXIlkOAa_jsLTm_tUKG_je_EN() {
        let msg = o.get("profiles", "profile" + this.selected);
        if (!msg) {
            msg = {
                nick: "profile " + this.selected,
                skin: "https://i.imgur.com/52xUtXr.png",
                skin2: "https://i.imgur.com/52xUtXr.png"
            };
        }
        o.set("profiles", "profile" + this.selected, msg);
        $("#nick").val(msg.nick);
        $("#skin").val(msg.skin);
        $("#skin2").val(msg.skin2);
        $("#tag").val(this.tag);
        this.vS__HJjnh_GT_EWXlsYu__KlI___osk(1);
        for (let artistTrack = 8; 0 < artistTrack;) {
            this.zqJ_dfLGOsV_aN_idR_FK(artistTrack);
            artistTrack--;
        }
    }
    static _I__eOP__omdLxdwTORfxmtrDo_ly_O_F() {
        $(".bar-circle-outer").click(() => {
            $(".skin-wheel").fadeIn(250);
            this._Yk__x_y_j__tIGDj__QyDnkkhy__QX_PQlKkO = true;
        });
        $(".skin-selector").each(function () {
            $(this).click(() => {
                const value = ~~$(this).attr("value");
                l["switch"](value);
                $(".skin-wheel").fadeOut(250);
            });
        });
        $(".menu-blur").click(() => {
            if (this._Yk__x_y_j__tIGDj__QyDnkkhy__QX_PQlKkO) {
                $(".skin-wheel").fadeOut(250);
                this._Yk__x_y_j__tIGDj__QyDnkkhy__QX_PQlKkO = false;
            }
        });
        $("#tag").blur(() => {
            this.MHZbm_wqEMeGFNa_AzfVsU_Cj_irjtN($("#tag").val());
            Y.spectator(true);
        });
        $("#tag2").blur(() => {
            this.MHZbm_wqEMeGFNa_AzfVsU_Cj_irjtN($("#tag").val());
            Y.spectator(true);
        });
        $("#nick").blur(() => {
            this.__vCl_MNm_yO_Dyy_iDdv_qT_C_oLE($("#nick").val());
        });
        $("#skin").blur(() => {
            this.godUGhRUtDWUv_TgZdQMEpa_nN($("#skin").val(), $("#skin2").val(), 1);
        }).focus(() => {
            this.godUGhRUtDWUv_TgZdQMEpa_nN($("#skin").val(), $("#skin2").val(), 1);
        });
        $("#skin2").blur(() => {
            this.godUGhRUtDWUv_TgZdQMEpa_nN($("#skin").val(), $("#skin2").val(), 2);
        }).focus(() => {
            this.godUGhRUtDWUv_TgZdQMEpa_nN($("#skin").val(), $("#skin2").val(), 2);
        });
    }
    static
    switch (e) {
        this.selected = ~~e;
        o.set("profiles", "selected", e);
        let msg = o.get("profiles", "profile" + e);
        if (!msg) {
            msg = {
                nick: "profile " + this.selected,
                skin: "https://i.imgur.com/52xUtXr.png",
                skin2: "https://i.imgur.com/52xUtXr.png"
            };
        }
        $("#nick").val(msg.nick);
        $("#skin").val(msg.skin);
        $("#skin2").val(msg.skin2);
        M.nick = msg.nick;
        M.skin = msg.skin;
        M.skin2 = msg.skin2;
        o.set("profiles", "profile" + this.selected, msg);
        this.vS__HJjnh_GT_EWXlsYu__KlI___osk(1);
    }
    static __vCl_MNm_yO_Dyy_iDdv_qT_C_oLE(name) {
        if (M.PDnW_YiUP_ilIgVcz_t_iwvmmJT) {
            $("#nick").val(M.nick);
            k.alert("HSLO", n.current.notif.nickChangeInGame);
        }
        let c = o.get("profiles", "profile" + this.selected);
        if (!c) {
            c = {
                nick: "profile " + this.selected,
                skin: "https://i.imgur.com/52xUtXr.png",
                skin2: "https://i.imgur.com/52xUtXr.png"
            };
        }
        c.nick = name;
        o.set("profiles", "profile" + this.selected, c);
        M.nick = name;
    }
    static godUGhRUtDWUv_TgZdQMEpa_nN(text, oldText, context) {
        let me = o.get("profiles", "profile" + this.selected);
        if (!me) {
            me = {
                nick: "profile " + this.selected,
                skin: "https://i.imgur.com/52xUtXr.png",
                skin2: "https://i.imgur.com/52xUtXr.png"
            };
        }
        me.skin = text;
        me.skin2 = oldText;
        o.set("profiles", "profile" + this.selected, me);
        this.vS__HJjnh_GT_EWXlsYu__KlI___osk(context);
        this.zqJ_dfLGOsV_aN_idR_FK(this.selected);
        M.skin = text;
        M.skin2 = oldText;
    }
    static MHZbm_wqEMeGFNa_AzfVsU_Cj_irjtN(t) {
        M.tag = t;
        o.set("profiles", "tag", t);
    }
    static vS__HJjnh_GT_EWXlsYu__KlI___osk(val) {
        val = 2 === val ? "2" : "";
        const o_ = $("#skin" + val).val();
        $(".skin-preview").css("background", "url(" + o_ + ")");
    }
    static zqJ_dfLGOsV_aN_idR_FK(type) {
        let boy2 = o.get("profiles", "profile" + type);
        if (boy2) {
            const a_ = boy2.skin;
            $(".skin-selector[value=" + type + "]").css("background", "url(" + a_ + ")");
        }
    }
}
class c {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.toggleMenuKey = o.get("hotkeys", "toggleMenuKey") || "ESC";
        this.feedKey = o.get("hotkeys", "feedKey") || "W";
        this.macroFeedKey = o.get("hotkeys", "macroFeedKey") || "E";
        this.splitKey = o.get("hotkeys", "splitKey") || "SPACE";
        this.doubleSplitKey = o.get("hotkeys", "doubleSplitKey") || "R";
        this.split16Key = o.get("hotkeys", "split16Key") || "G";
        this.stopKey = o.get("hotkeys", "stopKey") || "S";
        this.chatKey = o.get("hotkeys", "chatKey") || "ENTER";
        this.multiboxTab = o.get("hotkeys", "multiboxTab") || "TAB";
        this.freeSpectateKey = o.get("hotkeys", "freeSpectateKey") || "Q";
        this.toggleSplitRings = o.get("hotkeys", "toggleSplitRings") || "U";
        this.toggleOpponentRings = o.get("hotkeys", "toggleOpponentRings") || "I";
        this.toggleNick = o.get("hotkeys", "toggleNick") || "N";
        this.toggleMass = o.get("hotkeys", "toggleMass") || "M";
        this.toggleOwnNick = o.get("hotkeys", "toggleOwnNick") || "Z";
        this.toggleOwnMass = o.get("hotkeys", "toggleOwnMass") || "X";
        this.toggleBGsectors = o.get("hotkeys", "toggleBGsectors") || "B";
        this.toggleFood = o.get("hotkeys", "toggleFood") || "F";
        this.toggleSkin = o.get("hotkeys", "toggleSkin") || "A";
        this.respawnKey = o.get("hotkeys", "respawnKey") || "TILDE";
        this.command0Key = o.get("hotkeys", "command0Key") || "0";
        this.command1Key = o.get("hotkeys", "command1Key") || "1";
        this.command2Key = o.get("hotkeys", "command2Key") || "2";
        this.command3Key = o.get("hotkeys", "command3Key") || "3";
        this.command4Key = o.get("hotkeys", "command4Key") || "4";
        this.command5Key = o.get("hotkeys", "command5Key") || "5";
        this.command6Key = o.get("hotkeys", "command6Key") || "6";
        this.command7Key = o.get("hotkeys", "command7Key") || "7";
        this.command8Key = o.get("hotkeys", "command8Key") || "8";
        this.command9Key = o.get("hotkeys", "command9Key") || "9";
        this.zoom1key = o.get("hotkeys", "zoom1key") || "ALT+1";
        this.zoom2key = o.get("hotkeys", "zoom2key") || "ALT+2";
        this.zoom3key = o.get("hotkeys", "zoom3key") || "ALT+3";
        this.zoom4key = o.get("hotkeys", "zoom4key") || "ALT+4";
        this.zoom5key = o.get("hotkeys", "zoom5key") || "ALT+5";
        this.TU_sHyGxIaarurDkH_Nu_ = new Map;
        this._lh_vgvp_Pws_XI__AfS_Vw_yp_loNg_DN__GQ();
        this._I__eOP__omdLxdwTORfxmtrDo_ly_O_F();
    }
    static _lh_vgvp_Pws_XI__AfS_Vw_yp_loNg_DN__GQ() {
        $("#hotkeys .row").each(function () {
            const i = $(this).attr("name");
            const catalogSelectId = $(this).find(".key")[0];
            $(catalogSelectId).val(c[i]);
        });
    }
    static _I__eOP__omdLxdwTORfxmtrDo_ly_O_F() {
        $("#hotkeys").perfectScrollbar();
        $("#hotkeys .row .key").each(function () {
            $(this).keydown((event) => {
                event.preventDefault();
                const classRemover = $(this).parent();
                c.dV_I_UAPNi_DQ__zL__F_eZIxeJ(classRemover, event, this);
            });
        });
        document.addEventListener("keydown", (e) => {
            return this.onKeyDown(e);
        });
        document.addEventListener("keyup", (mmCoreSplitViewBlock) => {
            return this.vwSatCpdbks_WDqkEYuhPp__gGgNnu(mmCoreSplitViewBlock);
        });
    }
    static onKeyDown(event) {
        if (9 === event.keyCode) {
            event.preventDefault();
        }
        const sortedSelectorList = this.IDI__mmvotPGRJ_jLQ___RjzBt_rrKjfbEE(event);
        if (sortedSelectorList && !this.TU_sHyGxIaarurDkH_Nu_.has(sortedSelectorList) && (this.TU_sHyGxIaarurDkH_Nu_.set(sortedSelectorList, true), !(s.E__AUSKkw__EnLiqDeVjek_VfMyp_l_ && "hotkeys" === s.target))) {
            if (sortedSelectorList === this.chatKey) {
                return void d.chat();
            }
            if (!v.bZZS_dQ__CHZkoJQqS__K_ns_Nqk) {
                if (sortedSelectorList === this.toggleMenuKey) {
                    return void A.toggle();
                }
                if (!A.E__AUSKkw__EnLiqDeVjek_VfMyp_l_) {
                    if (event.preventDefault(), sortedSelectorList === this.freeSpectateKey && !M.PDnW_YiUP_ilIgVcz_t_iwvmmJT) {
                        return void d.toggleSpectate();
                    }
                    if (sortedSelectorList === this.respawnKey) {
                        return void d.respawn();
                    }
                    if (M.PDnW_YiUP_ilIgVcz_t_iwvmmJT) {
                        if (sortedSelectorList === this.macroFeedKey) {
                            return void d.macroFeed(true);
                        }
                        if (sortedSelectorList === this.feedKey) {
                            return void d.feed();
                        }
                        if (sortedSelectorList === this.splitKey) {
                            return void d.split();
                        }
                        if (sortedSelectorList === this.doubleSplitKey) {
                            return void d.doubleSplit();
                        }
                        if (sortedSelectorList === this.split16Key) {
                            return void d.split16();
                        }
                        if (sortedSelectorList === this.multiboxTab) {
                            return void d.multiboxTab();
                        }
                    }
                    return sortedSelectorList === this.stopKey ? void d._r_uxzNCDMCPljdxLmXFfLy() : sortedSelectorList === this.toggleSplitRings ? void d.toggleSplitRings() : sortedSelectorList === this.toggleOpponentRings ? void d.toggleOpponentRings() : sortedSelectorList === this.toggleNick ? void d.aXGEYWzf_lDKGW_Rev__mQ_n_zIP() : sortedSelectorList === this.toggleMass ? void d.Uthi_kvM_FV_gQOX_hW__yWSErecE_mZL() : sortedSelectorList === this.toggleOwnNick ? void d.toggleOwnNick() : sortedSelectorList === this.toggleOwnMass ? void d.toggleOwnMass() :
                        sortedSelectorList === this.toggleBGsectors ? void d.toggleBGsectors() : sortedSelectorList === this.toggleFood ? void d.toggleGameFood() : sortedSelectorList === this.toggleSkin ? void d.toggleSkin() : sortedSelectorList === this.command0Key ? void d.command(0) : sortedSelectorList === this.command1Key ? void d.command(1) : sortedSelectorList === this.command2Key ? void d.command(2) : sortedSelectorList === this.command3Key ? void d.command(3) : sortedSelectorList === this.command4Key ? void d.command(4) : sortedSelectorList === this.command5Key ?
                        void d.command(5) : sortedSelectorList === this.command6Key ? void d.command(6) : sortedSelectorList === this.command7Key ? void d.command(7) : sortedSelectorList === this.command8Key ? void d.command(8) : sortedSelectorList === this.command9Key ? void d.command(9) : sortedSelectorList === this.zoom1key ? void d.X_lL_gJ_n_kbHxfNykWgV__kKIl_WQiVOtXHUG_(0.5) : sortedSelectorList === this.zoom2key ? void d.X_lL_gJ_n_kbHxfNykWgV__kKIl_WQiVOtXHUG_(0.25) : sortedSelectorList === this.zoom3key ? void d.X_lL_gJ_n_kbHxfNykWgV__kKIl_WQiVOtXHUG_(0.125) :
                        sortedSelectorList === this.zoom4key ? void d.X_lL_gJ_n_kbHxfNykWgV__kKIl_WQiVOtXHUG_(0.075) : sortedSelectorList === this.zoom5key ? void d.X_lL_gJ_n_kbHxfNykWgV__kKIl_WQiVOtXHUG_(0.05) : void 0;
                }
            }
        }
    }
    static vwSatCpdbks_WDqkEYuhPp__gGgNnu(mmCoreSplitViewBlock) {
        const opaqueNode = this.IDI__mmvotPGRJ_jLQ___RjzBt_rrKjfbEE(mmCoreSplitViewBlock);
        if (opaqueNode) {
            return (this.TU_sHyGxIaarurDkH_Nu_["delete"](opaqueNode), opaqueNode === this.macroFeedKey) ? void d.macroFeed(false) : void 0;
        }
    }
    static dV_I_UAPNi_DQ__zL__F_eZIxeJ(clicked_el, hiddenFieldHasUploadFileId, txtNameId) {
        let sel = this.IDI__mmvotPGRJ_jLQ___RjzBt_rrKjfbEE(hiddenFieldHasUploadFileId);
        let i = $(clicked_el).attr("name");
        if (!(false === sel)) {
            if ("freeSpectateKey" !== i) {
                this._CiynfAIcGo_pgTNT__ksSHjod_rMArtq_(sel);
            }
            if ("DEL" === sel) {
                sel = "";
            }
            $(txtNameId).val(sel);
            this[i] = sel;
            o.set("hotkeys", i, sel);
        }
    }
    static _CiynfAIcGo_pgTNT__ksSHjod_rMArtq_(canCreateDiscussions) {
        let f = false;
        if (canCreateDiscussions === this.toggleMenuKey) {
            f = "toggleMenuKey";
        } else {
            if (canCreateDiscussions === this.feedKey) {
                f = "feedKey";
            } else {
                if (canCreateDiscussions === this.macroFeedKey) {
                    f = "macroFeedKey";
                } else {
                    if (canCreateDiscussions === this.splitKey) {
                        f = "splitKey";
                    } else {
                        if (canCreateDiscussions === this.doubleSplitKey) {
                            f = "doubleSplitKey";
                        } else {
                            if (canCreateDiscussions === this.split16Key) {
                                f = "split16Key";
                            } else {
                                if (canCreateDiscussions === this.stopKey) {
                                    f = "stopKey";
                                } else {
                                    if (canCreateDiscussions === this.chatKey) {
                                        f = "chatKey";
                                    } else {
                                        if (canCreateDiscussions === this.multiboxTab) {
                                            f = "multiboxTab";
                                        } else {
                                            if (canCreateDiscussions === this.toggleSplitRings) {
                                                f = "toggleSplitRings";
                                            } else {
                                                if (canCreateDiscussions === this.toggleOpponentRings) {
                                                    f = "toggleOpponentRings";
                                                } else {
                                                    if (canCreateDiscussions === this.toggleNick) {
                                                        f = "toggleNick";
                                                    } else {
                                                        if (canCreateDiscussions === this.toggleMass) {
                                                            f = "toggleMass";
                                                        } else {
                                                            if (canCreateDiscussions === this.toggleOwnNick) {
                                                                f = "toggleOwnNick";
                                                            } else {
                                                                if (canCreateDiscussions === this.toggleOwnMass) {
                                                                    f = "toggleOwnMass";
                                                                } else {
                                                                    if (canCreateDiscussions === this.toggleBGsectors) {
                                                                        f = "toggleBGsectors";
                                                                    } else {
                                                                        if (canCreateDiscussions === this.toggleFood) {
                                                                            f = "toggleFood";
                                                                        } else {
                                                                            if (canCreateDiscussions === this.toggleSkin) {
                                                                                f = "toggleSkin";
                                                                            } else {
                                                                                if (canCreateDiscussions === this.respawnKey) {
                                                                                    f = "respawnKey";
                                                                                } else {
                                                                                    if (canCreateDiscussions === this.command0Key) {
                                                                                        f = "command0Key";
                                                                                    } else {
                                                                                        if (canCreateDiscussions === this.command1Key) {
                                                                                            f = "command1Key";
                                                                                        } else {
                                                                                            if (canCreateDiscussions === this.command2Key) {
                                                                                                f = "command2Key";
                                                                                            } else {
                                                                                                if (canCreateDiscussions === this.command3Key) {
                                                                                                    f = "command3Key";
                                                                                                } else {
                                                                                                    if (canCreateDiscussions === this.command4Key) {
                                                                                                        f = "command4Key";
                                                                                                    } else {
                                                                                                        if (canCreateDiscussions === this.command5Key) {
                                                                                                            f = "command5Key";
                                                                                                        } else {
                                                                                                            if (canCreateDiscussions === this.command6Key) {
                                                                                                                f = "command6Key";
                                                                                                            } else {
                                                                                                                if (canCreateDiscussions === this.command7Key) {
                                                                                                                    f = "command7Key";
                                                                                                                } else {
                                                                                                                    if (canCreateDiscussions === this.command8Key) {
                                                                                                                        f = "command8Key";
                                                                                                                    } else {
                                                                                                                        if (canCreateDiscussions === this.command9Key) {
                                                                                                                            f = "command9Key";
                                                                                                                        } else {
                                                                                                                            if (canCreateDiscussions === this.zoom1key) {
                                                                                                                                f = "zoom1key";
                                                                                                                            } else {
                                                                                                                                if (canCreateDiscussions === this.zoom2key) {
                                                                                                                                    f = "zoom2key";
                                                                                                                                } else {
                                                                                                                                    if (canCreateDiscussions === this.zoom3key) {
                                                                                                                                        f = "zoom3key";
                                                                                                                                    } else {
                                                                                                                                        if (canCreateDiscussions === this.zoom4key) {
                                                                                                                                            f = "zoom4key";
                                                                                                                                        } else {
                                                                                                                                            if (canCreateDiscussions === this.zoom5key) {
                                                                                                                                                f = "zoom5key";
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (f) {
            this[f] = "";
            o.set("hotkeys", f, "");
            $("#hotkeys .row[name=" + f + "] input").val("");
        }
    }
    static fjbtva_WE__OrbR_FeEsSuZybUy_Xp(event) {
        const o_ = event.keyCode || event.which;
        return 64 < o_ && 91 > o_ || 47 < o_ && 58 > o_ || 13 === o_ || 27 === o_ || 32 === o_ || 16 === o_ || 46 === o_ || 192 === o_ || 9 === o_;
    }
    static IDI__mmvotPGRJ_jLQ___RjzBt_rrKjfbEE(event) {
        if (!this.fjbtva_WE__OrbR_FeEsSuZybUy_Xp(event)) {
            return false;
        }
        const offset = event.keyCode || event.which;
        let msg = false;
        let str = false;
        return event.ctrlKey ? msg = "CTRL+" : event.altKey && (msg = "ALT+"), 64 < offset && 91 > offset ? str = String.fromCharCode(offset) : 47 < offset && 58 > offset ? str = "" + (offset - 48) : msg || (13 === offset ? str = "ENTER" : 27 === offset ? str = "ESC" : 32 === offset ? str = "SPACE" : 16 === offset ? str = "SHIFT" : 9 === offset ? str = "TAB" :
            46 === offset ? str = "DEL" : 192 === offset ? str = "TILDE" : void 0), !!str && (msg ? msg + str : str);
    }
}
class m {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.leftClick = o.get("mouse", "leftClick") || "off";
        this.middleClick = o.get("mouse", "middleClick") || "commander";
        this.rightClick = o.get("mouse", "rightClick") || "off";
        this.x = 0;
        this.y = 0;
        this.canvas = document.getElementById("canvas");
        this.nHn_uJa_qrYJz__AQDV_BQwX = 0;
        this.XmLVlSUMjhTrEFS_P_ggJSvZB = 0;
        this.__h_u_g_HPXIlkOAa_jsLTm_tUKG_je_EN();
        this._I__eOP__omdLxdwTORfxmtrDo_ly_O_F();
    }
    static send(code) {
        return this.nHn_uJa_qrYJz__AQDV_BQwX = (this.x - this.canvas.width / 2) / Z.EgIT_b_BqyckZar_B_qARQPewHAIUUVxpYUoz_ + Z.x, this.XmLVlSUMjhTrEFS_P_ggJSvZB = (this.y - this.canvas.height / 2) / Z.EgIT_b_BqyckZar_B_qARQPewHAIUUVxpYUoz_ + Z.y, Z.bbK__VFfPoBbfF_b_FKZG && B.isTurnedOn ? void H.dt_FgfAkRaNEN_wVAPoeu_gfmf_iNot(code, 0 | B.center.x, 0 | B.center.y) : M.DEOh_sSao_HsQV_nRjFK_SEbXBDsiln__q_D ? void H.dt_FgfAkRaNEN_wVAPoeu_gfmf_iNot(code, 0 | Z.x, 0 | Z.y) : void H.dt_FgfAkRaNEN_wVAPoeu_gfmf_iNot(code,
            0 | this.nHn_uJa_qrYJz__AQDV_BQwX, 0 | this.XmLVlSUMjhTrEFS_P_ggJSvZB);
    }
    static __h_u_g_HPXIlkOAa_jsLTm_tUKG_je_EN() {
        $(".mouse-options").each(function () {
            const _ = $(this).attr("type");
            if ("range" === _) {
                m.jWpz_vPT_bOvcBedfq_OhO_P__x_OuYc(this, 2);
            } else {
                if ("options" === _) {
                    m.pAiu__QKY_E_fmgKxsxTbQlvezIaZys(this, 2);
                }
            }
        });
    }
    static _I__eOP__omdLxdwTORfxmtrDo_ly_O_F() {
        $("#mouse").perfectScrollbar();
        $("#mouse .fa-chevron-left").each(function () {
            $(this).click(() => {
                const customPlayerControls = $(this).parent();
                const _ = $(customPlayerControls).attr("type");
                if ("options" === _) {
                    m.pAiu__QKY_E_fmgKxsxTbQlvezIaZys(customPlayerControls, 0);
                } else {
                    if ("range" === _) {
                        m.jWpz_vPT_bOvcBedfq_OhO_P__x_OuYc(customPlayerControls, 0);
                    }
                }
            });
        });
        $("#mouse .fa-chevron-right").each(function () {
            $(this).click(() => {
                const customPlayerControls = $(this).parent();
                const _ = $(customPlayerControls).attr("type");
                if ("options" === _) {
                    m.pAiu__QKY_E_fmgKxsxTbQlvezIaZys(customPlayerControls, 1);
                } else {
                    if ("range" === _) {
                        m.jWpz_vPT_bOvcBedfq_OhO_P__x_OuYc(customPlayerControls, 1);
                    }
                }
            });
        });
        document.addEventListener("mousemove", (first) => {
            if (!A.E__AUSKkw__EnLiqDeVjek_VfMyp_l_) {
                this.x = first.clientX;
                this.y = first.clientY;
            }
        });
        document.addEventListener("mousedown", (mmCoreSplitViewBlock) => {
            if (!A.E__AUSKkw__EnLiqDeVjek_VfMyp_l_) {
                this._Oy_nLhN_iWx_frRnIdE_Hz__gD_(mmCoreSplitViewBlock);
            }
        });
        document.addEventListener("mouseup", (mmCoreSplitViewBlock) => {
            if (!A.E__AUSKkw__EnLiqDeVjek_VfMyp_l_) {
                this.onMouseRelease(mmCoreSplitViewBlock);
            }
        });
        document.addEventListener("wheel", (aEvent) => {
            if (!A.E__AUSKkw__EnLiqDeVjek_VfMyp_l_) {
                this.onMouseWheel(aEvent);
            }
        });
        document.addEventListener("contextmenu", (event) => {
            event.preventDefault();
        });
    }
    static onMouseWheel(event) {
        let init = Z.Sx_l__mkjDQ__yrnoX_rDVi__RKkXi;
        if (0 > event.wheelDelta) {
            init = init * (i.zoomSpeed / 100);
        } else {
            init = init / (i.zoomSpeed / 100);
        }
        init = 2 < init ? 2 : 0.02 > init ? 0.02 : init;
        Z.Sx_l__mkjDQ__yrnoX_rDVi__RKkXi = init;
    }
    static _Oy_nLhN_iWx_frRnIdE_Hz__gD_(event) {
        let object = false;
        switch (event.which) {
        case 1:
            object = "leftClick";
            break;
        case 2:
            object = "middleClick";
            break;
        case 3:
            object = "rightClick";
        }
        if (object) {
            if (Z.bbK__VFfPoBbfF_b_FKZG && "on" === i.targeting) {
                const target = (event.clientX - (window.innerWidth >> 1)) / Z.EgIT_b_BqyckZar_B_qARQPewHAIUUVxpYUoz_ + Z.x;
                const key = (event.clientY - (window.innerHeight >> 1)) / Z.EgIT_b_BqyckZar_B_qARQPewHAIUUVxpYUoz_ + Z.y;
                return void("leftClick" === object ? B.lockTarget(target, key, 1) : "middleClick" === object ? B._Wh_NVOXv__lhD_jewWnmmu_uN_qCbt_cGDYjq() : "rightClick" == object && B.lockTarget(target, key, 2));
            }
            const undefined = this[object];
            return "off" === undefined ? void 0 : "feed" === undefined ? void d.feed() : "macroFeed" === undefined ? void d.macroFeed(true) : "split" === undefined ? void d.split() : "doubleSplit" === undefined ? void d.doubleSplit() : "split16" === undefined ? void d.split16() : "commander" === undefined ? void Y.commander() : void 0;
        }
    }
    static onMouseRelease(callback) {
        let action = false;
        switch (callback.which) {
        case 1:
            action = "leftClick";
            break;
        case 2:
            action = "middleClick";
            break;
        case 3:
            action = "rightClick";
        }
        if (action) {
            const a_ = this[action];
            if ("macroFeed" === a_) {
                return void d.macroFeed(false);
            }
        }
    }
    static pAiu__QKY_E_fmgKxsxTbQlvezIaZys(opt, execFile_opt) {
        const optionName = $(opt).attr("name");
        const types = $(opt).find("b");
        const start = types.length;
        let j = start;
        let end = 0;
        for (; j--;) {
            let customPlayerControls = types[j];
            if ("active" === $(customPlayerControls).attr("class")) {
                end = j;
            }
        }
        if (1 === execFile_opt) {
            const j = end + 1 < start ? end + 1 : 0;
            $(types[end]).removeAttr("class");
            $(types[j]).attr("class", "active");
            const artistTrack = $(types[j]).attr("value");
            this.rBIXXfm_HySE_LYutkP_vqgD_Tu__(optionName, artistTrack);
        } else {
            if (0 === execFile_opt) {
                const j = 0 < end ? end - 1 : start - 1;
                $(types[end]).removeAttr("class");
                $(types[j]).attr("class", "active");
                const artistTrack = $(types[j]).attr("value");
                this.rBIXXfm_HySE_LYutkP_vqgD_Tu__(optionName, artistTrack);
            } else {
                if (2 === execFile_opt) {
                    $(types[end]).removeAttr("class");
                    for (let i = start, j; i--;) {
                        if (j = types[i], $(j).attr("value") === this[optionName]) {
                            $(j).attr("class", "active");
                            break;
                        }
                    }
                }
            }
        }
    }
    static jWpz_vPT_bOvcBedfq_OhO_P__x_OuYc(tr, ca) {
        const criterion_index = $(tr).attr("name");
        const n_ = $(tr).find("span");
        const customPlayerControls = n_[0];
        const arrowDiv = n_[1];
        const width = ~~$(customPlayerControls).attr("min");
        const outerWidth = ~~$(customPlayerControls).attr("max");
        const ourSplitFirstPartSolution = ~~$(customPlayerControls).attr("step");
        const equationStringAfterSplitParse = ~~$(customPlayerControls).attr("value");
        if (1 === ca && equationStringAfterSplitParse + ourSplitFirstPartSolution <= outerWidth) {
            const parent_width = ourSplitFirstPartSolution + equationStringAfterSplitParse;
            $(customPlayerControls).attr("value", parent_width);
            $(arrowDiv).css("width", ~~(100 * (parent_width - width) / (outerWidth - width)) + "px");
            this.rBIXXfm_HySE_LYutkP_vqgD_Tu__(criterion_index, parent_width);
        } else {
            if (0 === ca && equationStringAfterSplitParse - ourSplitFirstPartSolution >= width) {
                const parent_width = equationStringAfterSplitParse - ourSplitFirstPartSolution;
                $(customPlayerControls).attr("value", parent_width);
                $(arrowDiv).css("width", ~~(100 * (parent_width - width) / (outerWidth - width)) + "px");
                this.rBIXXfm_HySE_LYutkP_vqgD_Tu__(criterion_index, parent_width);
            } else {
                if (2 === ca) {
                    const parent_width = this[criterion_index];
                    $(customPlayerControls).attr("value", parent_width);
                    $(arrowDiv).css("width", ~~(100 * (parent_width - width) / (outerWidth - width)) + "px");
                }
            }
        }
    }
    static rBIXXfm_HySE_LYutkP_vqgD_Tu__(source, d) {
        this[source] = d;
        o.set("mouse", source, d);
    }
}
class g {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.load();
        this.__h_u_g_HPXIlkOAa_jsLTm_tUKG_je_EN();
        this._I__eOP__omdLxdwTORfxmtrDo_ly_O_F();
    }
    static load() {
        this.command1 = o.get("commands", "command1") || n.current.commandsMenu.command1;
        this.command2 = o.get("commands", "command2") || n.current.commandsMenu.command2;
        this.command3 = o.get("commands", "command3") || n.current.commandsMenu.command3;
        this.command4 = o.get("commands", "command4") || n.current.commandsMenu.command4;
        this.command5 = o.get("commands", "command5") || n.current.commandsMenu.command5;
        this.command6 = o.get("commands", "command6") || n.current.commandsMenu.command6;
        this.command7 = o.get("commands", "command7") || n.current.commandsMenu.command7;
        this.command8 = o.get("commands", "command8") || n.current.commandsMenu.command8;
        this.command9 = o.get("commands", "command9") || n.current.commandsMenu.command9;
        this.command0 = o.get("commands", "command0") || n.current.commandsMenu.command0;
    }
    static _I__eOP__omdLxdwTORfxmtrDo_ly_O_F() {
        $("#commands").perfectScrollbar();
        for (let l = 10, index; l--;) {
            index = "command" + l;
            $("#" + index).blur(() => {
                this.xeRCH_Xrqo_G_JqUCCkE_bfK_qJiJqSNpMxYZdB(index, $("#" + index).val());
            });
        }
    }
    static xeRCH_Xrqo_G_JqUCCkE_bfK_qJiJqSNpMxYZdB(source, d) {
        this[source] = d;
        o.set("commands", source, d);
    }
    static __h_u_g_HPXIlkOAa_jsLTm_tUKG_je_EN() {
        for (let l = 10, index; l--;) {
            index = "command" + l;
            $("#" + index).val(this[index]);
        }
    }
    static refresh() {
        this.load();
        this.__h_u_g_HPXIlkOAa_jsLTm_tUKG_je_EN();
    }
}
class d {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.DdmeAV_P_dgi_gsNCKxRJgy_n_Osa = false;
        this.connections = 0;
        setInterval(() => {
            this.connections = 0;
        }, 6e4);
    }
    static _r_uxzNCDMCPljdxLmXFfLy() {
        M.DEOh_sSao_HsQV_nRjFK_SEbXBDsiln__q_D = !M.DEOh_sSao_HsQV_nRjFK_SEbXBDsiln__q_D;
    }
    static feed() {
        const code = M._fn___ztljQxUn_W_hZqEJn;
        m.send(code);
        H.rQjFeJo_MnJCHnbjETzpryiVz(code);
    }
    static macroFeed(canCreateDiscussions) {
        if (canCreateDiscussions) {
            if (this.DdmeAV_P_dgi_gsNCKxRJgy_n_Osa) {
                return;
            }
            this.feed();
            this.DdmeAV_P_dgi_gsNCKxRJgy_n_Osa = setInterval(() => {
                this.feed();
            }, 20);
        } else {
            if (this.DdmeAV_P_dgi_gsNCKxRJgy_n_Osa) {
                clearInterval(this.DdmeAV_P_dgi_gsNCKxRJgy_n_Osa);
                this.DdmeAV_P_dgi_gsNCKxRJgy_n_Osa = false;
            }
        }
    }
    static split() {
        const code = M._fn___ztljQxUn_W_hZqEJn;
        m.send(code);
        H.split(code);
    }
    static doubleSplit() {
        const code = M._fn___ztljQxUn_W_hZqEJn;
        m.send(code);
        H.split(code);
        setTimeout(() => {
            m.send(code);
            H.split(code);
        }, 40);
    }
    static split16() {
        const code = M._fn___ztljQxUn_W_hZqEJn;
        m.send(code);
        H.split(code);
        setTimeout(() => {
            m.send(code);
            H.split(code);
        }, 40);
        setTimeout(() => {
            m.send(code);
            H.split(code);
        }, 80);
        setTimeout(() => {
            m.send(code);
            H.split(code);
        }, 120);
    }
    static toggleSpectate() {
        return B.isTurnedOn ? (B._Wh_NVOXv__lhD_jewWnmmu_uN_qCbt_cGDYjq(), B.target1.turnedOn = false, B.target2.turnedOn = false, void T.mouseViewport()) : void(H.ZKZ_w_DbZe_HhMUMcNJmLgvwZ_gK__r__fPMA(), Z.ZKZ_w_DbZe_HhMUMcNJmLgvwZ_gK__r__fPMA ? T.mouseViewport() : T.topViewport(), B.target1.turnedOn = false, B.target2.turnedOn = false);
    }
    static chat() {
        v.enter();
    }
    static command(value) {
        let txt = g["command" + value];
        if (0 <= txt.indexOf("%sector%")) {
            const blank_char = L.sGG_dRFtKg_un____W_zVOxApsVZ_vqv_BazV_E(Z.x, Z.y);
            txt = txt.replace("%sector%", blank_char);
        }
        Y.chat(2, txt);
    }
    static X_lL_gJ_n_kbHxfNykWgV__kKIl_WQiVOtXHUG_(init) {
        Z.Sx_l__mkjDQ__yrnoX_rDVi__RKkXi = init;
    }
    static aXGEYWzf_lDKGW_Rev__mQ_n_zIP() {
        const len = o.get("settings", "cellNick");
        i.cellNick = "off" === i.cellNick ? "off" !== len && len || "on" : "off";
    }
    static Uthi_kvM_FV_gQOX_hW__yWSErecE_mZL() {
        const len = o.get("settings", "cellMass");
        i.cellMass = "off" === i.cellMass ? "off" !== len && len || "shortened" : "off";
    }
    static toggleOwnNick() {
        const len = o.get("settings", "hideOwnNick");
        i.hideOwnNick = "off" === i.hideOwnNick ? "off" !== len && len || "on" : "off";
    }
    static toggleOwnMass() {
        const len = o.get("settings", "hideOwnMass");
        i.hideOwnMass = "off" === i.hideOwnMass ? "off" !== len && len || "on" : "off";
    }
    static toggleGameFood() {
        const len = o.get("settings", "food");
        i.food = "off" === i.food ? "off" !== len && len || "monoColored" : "off";
    }
    static toggleBGsectors() {
        const len = o.get("settings", "bgSectors");
        i.bgSectors = "off" === i.bgSectors ? "off" !== len && len || "normal" : "off";
    }
    static toggleSkin() {
        const len = o.get("settings", "urlSkins");
        i.urlSkins = "off" === i.urlSkins ? "off" !== len && len || "on" : "off";
    }
    static toggleSplitRings() {
        const len = o.get("settings", "splitRings");
        i.splitRings = "off" === i.splitRings ? "off" !== len && len || "on" : "off";
    }
    static toggleOpponentRings() {
        const len = o.get("settings", "opponentRings");
        i.opponentRings = "off" === i.opponentRings ? "off" !== len && len || "on" : "off";
    }
    static respawn() {
        if (!(5 <= this.connections)) {
            this.connections += 1;
            V.Ikc_j_E_zHZNxgF_vr_YMh(V.FlAiUrjbwphW___V_VUenEp);
            const logIntervalId = setInterval(() => {
                if (V._HkPHGG__Oy_IkgYR_mSZqk_aW__RqMvERh_) {
                    H.o_ZMLC__FGG_DmQ_mATW_Kqd_ZHJYBUkEDMRg();
                    clearInterval(logIntervalId);
                }
            }, 100);
        }
    }
    static multiboxTab() {
        M._fn___ztljQxUn_W_hZqEJn = 1 === M._fn___ztljQxUn_W_hZqEJn ? 2 : 1;
    }
}
class f {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this._I__eOP__omdLxdwTORfxmtrDo_ly_O_F();
        this.Mkx__vmwlAhuDZMBaM_mmdni_AEwIxJC();
    }
    static _I__eOP__omdLxdwTORfxmtrDo_ly_O_F() {
        $("#join-party").click(() => {
            this.VXOYd_Nmdzau_z_Q_U_zKj__rPXJd_cjvY__l_b();
        });
        $("#create-party").click(() => {
            this.s__VaZKmP_ojKNlhXZXIqmRb_w();
        });
    }
    static Mkx__vmwlAhuDZMBaM_mmdni_AEwIxJC() {
        const data = {};
        data.eu1multibox = "Europe-01";
        data.eu2multibox = "Europe-02";
        data.na1multibox = "America-01";
        data.na2multibox = "America-02";
        data.as1multibox = "Asia-01";
        data.as2multibox = "Asia-02";
        if (true === o.get("extras", "ADMIN")) {
            data.localhost = "astr.io";
        }
        const bysetpos = Object.keys(data);
        let photoText = "";
        for (let j = 0, pos; j < bysetpos.length; j++) {
            pos = bysetpos[j];
            const s_ = data[pos];
            photoText = photoText + ("<option value=" + pos + '">' + s_ + " < /option>");
        }
        $("#regions").append(photoText);
        $("#regions").val(o.get("extras", "region") || bysetpos[0]);
        setTimeout(() => {
            $("#regions").trigger("change");
        }, 250);
    }
    static VXOYd_Nmdzau_z_Q_U_zKj__rPXJd_cjvY__l_b() {
        V.Ikc_j_E_zHZNxgF_vr_YMh($("#regions").val());
    }
}
class u {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.E__AUSKkw__EnLiqDeVjek_VfMyp_l_ = false;
        this.div = $("#theme");
        this.selectedPreset = o.get("theme", "selectedPreset") || "custom";
        this.skinBorder = ~~o.get("theme", "skinBorder") || 100;
        this.lbSize = ~~o.get("theme", "lbSize") || 100;
        this.minimapSize = ~~o.get("theme", "minimapSize") || 180;
        this.chatFontSize = ~~o.get("theme", "chatFontSize") || 14;
        this.cellTransparency = ~~o.get("theme", "cellTransparency") || 100;
        this.lightenCellColor = ~~o.get("theme", "lightenCellColor") || 100;
        this.borderWidth = ~~o.get("theme", "borderWidth") || 20;
        this.borderColor = o.get("theme", "borderColor") || "#666666";
        this.team1color = o.get("theme", "team1color") || "#aeaeae";
        this.team2color = o.get("theme", "team2color") || "#ff171f";
        this.multiboxActive = o.get("theme", "multiboxActive") || "#ff61f8";
        this.multiboxInactive = o.get("theme", "multiboxInactive") || "#fff";
        this.nickColor = o.get("theme", "nickColor") || "#fff";
        this.nickStrokeColor = o.get("theme", "nickStrokeColor") || "#000";
        this.cellNickSize = ~~o.get("theme", "cellNickSize") || 110;
        this.nickFont = o.get("theme", "nickFont") || "Rubik";
        this.massColor = o.get("theme", "massColor") || "#fff";
        this.massStrokeColor = o.get("theme", "massStrokeColor") || "#000";
        this.cellMassSize = ~~o.get("theme", "cellMassSize") || 140;
        this.massFont = o.get("theme", "massFont") || "Rubik";
        this.gridWidth = ~~o.get("theme", "gridWidth") || 100;
        this.gridColor = o.get("theme", "gridColor") || "#222222";
        this.gridTextColor = o.get("theme", "gridTextColor") || "#222222";
        this.gridTextSize = o.get("theme", "gridTextSize") || 1400;
        this.gridTextFont = o.get("theme", "gridTextFont") || "Rubik";
        this.foodSize = ~~o.get("theme", "foodSize") || 1;
        this.foodColor = o.get("theme", "foodColor") || "#ffffff";
        this.virusColor = o.get("theme", "virusColor") || "#616161";
        this.virusBorderColor = o.get("theme", "virusBorderColor") || "#828282";
        this.virusBorderWidth = ~~o.get("theme", "virusBorderWidth") || 14;
        this.commanderColor = o.get("theme", "commanderColor") || "#fff";
        this.backgroundColor = o.get("theme", "backgroundColor") || "#000000";
        this.indicatorSize = ~~o.get("theme", "indicatorSize") || 100;
        this.cursor = o.get("theme", "cursor") || 1;
        this.addPresets();
        this.__h_u_g_HPXIlkOAa_jsLTm_tUKG_je_EN();
        this._I__eOP__omdLxdwTORfxmtrDo_ly_O_F();
    }
    static __h_u_g_HPXIlkOAa_jsLTm_tUKG_je_EN() {
        $(".theme-options").each(function () {
            const _ = $(this).attr("type");
            if ("range" === _) {
                u.jWpz_vPT_bOvcBedfq_OhO_P__x_OuYc(this, 2);
            } else {
                if ("options" === _) {
                    u.pAiu__QKY_E_fmgKxsxTbQlvezIaZys(this, 2);
                } else {
                    if ("colorpicker" === _) {
                        u.Hy_fEbsEw_M_II_aAnVEA(this);
                    }
                }
            }
        });
        this.setChatFontSize(this.chatFontSize);
        this.sHr_UHXhtSrhvT_iAEiVRsIQ__(this.backgroundColor);
        this.setLeaderboard(this.lbSize);
        this.setMinimap(this.minimapSize);
        this.setCursor(this.cursor);
    }
    static _I__eOP__omdLxdwTORfxmtrDo_ly_O_F() {
        $(".theme-container").perfectScrollbar();
        $(".theme-container .fa-chevron-left").each(function () {
            $(this).click(() => {
                const customPlayerControls = $(this).parent();
                const _ = $(customPlayerControls).attr("type");
                if ("options" === _) {
                    u.pAiu__QKY_E_fmgKxsxTbQlvezIaZys(customPlayerControls, 0);
                } else {
                    if ("range" === _) {
                        u.jWpz_vPT_bOvcBedfq_OhO_P__x_OuYc(customPlayerControls, 0);
                    }
                }
            });
        });
        $(".theme-container span.outer").each(function () {
            $(this).click((props) => {
                const userNameOrId = $(this).parent();
                u.jWpz_vPT_bOvcBedfq_OhO_P__x_OuYc(userNameOrId, 3, props.offsetX);
            });
        });
        $(".theme-container .fa-chevron-right").each(function () {
            $(this).click(() => {
                const customPlayerControls = $(this).parent();
                const _ = $(customPlayerControls).attr("type");
                if ("options" === _) {
                    u.pAiu__QKY_E_fmgKxsxTbQlvezIaZys(customPlayerControls, 1);
                } else {
                    if ("range" === _) {
                        u.jWpz_vPT_bOvcBedfq_OhO_P__x_OuYc(customPlayerControls, 1);
                    }
                }
            });
        });
        $(".theme-close").click(() => {
            return this.close();
        });
    }
    static toggle() {
        if (this.E__AUSKkw__EnLiqDeVjek_VfMyp_l_) {
            this.close();
        } else {
            this.open();
        }
    }
    static close() {
        this.E__AUSKkw__EnLiqDeVjek_VfMyp_l_ = false;
        this.div.fadeOut(250);
    }
    static open() {
        this.E__AUSKkw__EnLiqDeVjek_VfMyp_l_ = true;
        this.div.fadeIn(250);
    }
    static pAiu__QKY_E_fmgKxsxTbQlvezIaZys(opt, execFile_opt) {
        const optionName = $(opt).attr("name");
        const types = $(opt).find("b");
        const start = types.length;
        let j = start;
        let end = 0;
        for (; j--;) {
            let customPlayerControls = types[j];
            if ("active" === $(customPlayerControls).attr("class")) {
                end = j;
            }
        }
        if (1 === execFile_opt) {
            const j = end + 1 < start ? end + 1 : 0;
            $(types[end]).removeAttr("class");
            $(types[j]).attr("class", "active");
            const artistTrack = $(types[j]).attr("value");
            this.URo__I_KeuM_sf_uaxlowI_cJ(optionName, artistTrack);
        } else {
            if (0 === execFile_opt) {
                const j = 0 < end ? end - 1 : start - 1;
                $(types[end]).removeAttr("class");
                $(types[j]).attr("class", "active");
                const artistTrack = $(types[j]).attr("value");
                this.URo__I_KeuM_sf_uaxlowI_cJ(optionName, artistTrack);
            } else {
                if (2 === execFile_opt) {
                    $(types[end]).removeAttr("class");
                    for (let i = start, j; i--;) {
                        if (j = types[i], $(j).attr("value") === this[optionName]) {
                            $(j).attr("class", "active");
                            break;
                        }
                    }
                }
            }
        }
    }
    static jWpz_vPT_bOvcBedfq_OhO_P__x_OuYc(y, sl, gaussianWidth = 0) {
        const criterion_index = $(y).attr("name");
        const timeline_items = $(y).find("span");
        const customPlayerControls = timeline_items[0];
        const arrowDiv = timeline_items[1];
        const mElmOrSub = $(timeline_items[2]);
        const n = ~~$(customPlayerControls).attr("min");
        const j = ~~$(customPlayerControls).attr("max");
        const i = ~~$(customPlayerControls).attr("step");
        const _i = ~~$(customPlayerControls).attr("value");
        if (1 === sl && _i + i <= j) {
            const boardSize = i + _i;
            $(customPlayerControls).attr("value", boardSize);
            $(arrowDiv).css("width", ~~(100 * (boardSize - n) / (j - n)) + "px");
            mElmOrSub.text("[" + boardSize + "]");
            this.URo__I_KeuM_sf_uaxlowI_cJ(criterion_index, ~~boardSize);
        } else {
            if (0 === sl && _i - i >= n) {
                const boardSize = _i - i;
                $(customPlayerControls).attr("value", boardSize);
                $(arrowDiv).css("width", ~~(100 * (boardSize - n) / (j - n)) + "px");
                mElmOrSub.text("[" + boardSize + "]");
                this.URo__I_KeuM_sf_uaxlowI_cJ(criterion_index, ~~boardSize);
            } else {
                if (2 === sl) {
                    const boardSize = this[criterion_index];
                    $(customPlayerControls).attr("value", boardSize);
                    $(arrowDiv).css("width", ~~(100 * (boardSize - n) / (j - n)) + "px");
                    mElmOrSub.text("[" + boardSize + "]");
                } else {
                    if (3 === sl) {
                        let r = 0 | gaussianWidth / 100 * (j - n);
                        r = (0 | r / i) * i;
                        r = r + n;
                        const u_ = 100 * (r - n) / (j - n);
                        $(customPlayerControls).attr("value", r);
                        $(arrowDiv).css("width", ~~u_ + "px");
                        mElmOrSub.text("[" + r + "]");
                        this.URo__I_KeuM_sf_uaxlowI_cJ(criterion_index, ~~r);
                    }
                }
            }
        }
    }
    static Hy_fEbsEw_M_II_aAnVEA(mei) {
        const hidden_input = $(mei).find("input");
        const eVideoId = hidden_input.attr("id");
        const encodedPW = this[eVideoId];
        $(hidden_input).val(encodedPW);
        const completeTitleOpacity = !!~~hidden_input.attr("opacity");
        $("#" + eVideoId).minicolors({
            opacity: completeTitleOpacity,
            position: "bottom right",
            change: (callbackOrParams) => {
                this.URo__I_KeuM_sf_uaxlowI_cJ(eVideoId, callbackOrParams);
            }
        });
    }
    static URo__I_KeuM_sf_uaxlowI_cJ(all, value) {
        this[all] = value;
        if ("selectedPreset" === all) {
            this.selectPreset(value);
        } else {
            if ("custom" !== this.selectedPreset) {
                this.selectedPreset = "custom";
                o.set("theme", "selectedPreset", "custom");
                this.__h_u_g_HPXIlkOAa_jsLTm_tUKG_je_EN();
            }
        }
        if ("backgroundColor" === all) {
            this.sHr_UHXhtSrhvT_iAEiVRsIQ__(value);
        }
        if ("chatFontSize" === all) {
            this.setChatFontSize(value);
        }
        if ("lbSize" === all) {
            this.setLeaderboard(value);
        }
        if ("minimapSize" === all) {
            this.setMinimap(value);
        }
        if ("cursor" === all) {
            this.setCursor(value);
        }
        if ("massFont" === all) {
            X.ShmRWZPZ_P_v_g_LsGrONZ___gFViWizG_YqA();
        }
        if ("nickFont" === all) {
            X.J_l_bCI_om_tR_uqI_SdZRXX_HQsDvC();
        }
        if ("massStrokeColor" === all) {
            X.__Ep_QqhaF_cxBBlHceNLgIk__SO_MKCQCbmqfT.clear();
        }
        if ("nickStrokeColor" === all) {
            X.UPmg_Adl_YOqoYlQEB__KZlZi__OIeCea.clear();
        }
        if ("massColor" === all) {
            X.__Ep_QqhaF_cxBBlHceNLgIk__SO_MKCQCbmqfT.clear();
        }
        if ("nickColor" === all) {
            X.UPmg_Adl_YOqoYlQEB__KZlZi__OIeCea.clear();
        }
        o.set("theme", all, value);
    }
    static sHr_UHXhtSrhvT_iAEiVRsIQ__(innerRowOffset) {
        $("body").css("background", innerRowOffset);
    }
    static setChatFontSize(newXpos) {
        $("#notifications").css("font-size", newXpos + "px");
    }
    static setLeaderboard(canCreateDiscussions) {
        const o_ = canCreateDiscussions / 100;
        $("#leaderboard-head").css("font-size", (0 | 24 * o_) + "px");
        $("#leaderboard-positions").css("font-size", (0 | 13 * o_) + "px");
    }
    static setMinimap(size) {
        if (y.initted) {
            y.size = size;
            y.canvas.width = size;
            y.canvas.height = size;
        }
        $("#minimap-hud, .minimap-grid").css({
            width: size + "px",
            height: size + "px"
        });
        $(".minimap-row").css({
            width: size + "px",
            height: (0 | size / 5) + "px"
        });
        $(".minimap-sector").css({
            width: (0 | size / 5) + "px",
            height: (0 | size / 5) + "px",
            "font-size": (0 | 15 * size / 200) + "px",
            "padding-top": (0 | 11 * size / 200) + "px"
        });
        $(".minimap-head").css("bottom", size + 9 + "px");
    }
    static setCursor(ch) {
        return 1 === ch ? ($("body").css("cursor", "url(),auto"), $("#cursorOff").show(), void $("#cursorDisplay").hide()) : void($("body").css("cursor", "url(http://astr.io/cursors/" + ch + ".cur),auto"), $("#cursorDisplay").attr("src", "http://astr.io/cursors/" + ch + ".cur"), $("#cursorDisplay").show(), $("#cursorOff").hide());
    }
    static selectPreset(name) {
        const params = this.presets[name];
        if ("custom" !== name && params) {
            for (const i in params.theme) {
                if (params.theme.hasOwnProperty(i) && void 0 !== this[i]) {
                    this[i] = params.theme[i];
                    o.set("theme", i, this[i]);
                }
            }
            for (const k in this.__h_u_g_HPXIlkOAa_jsLTm_tUKG_je_EN(), params.settings) {
                if (params.settings.hasOwnProperty(k) && void 0 !== i[k]) {
                    i[k] = params.settings[k];
                    o.set("settings", k, i[k]);
                }
            }
            i.__h_u_g_HPXIlkOAa_jsLTm_tUKG_je_EN();
        }
    }
    static addPresets() {
        this.presets = {
            Astrio: {
                author: "2coolife",
                theme: {
                    skinBorder: 100,
                    lbSize: 100,
                    minimapSize: 180,
                    chatFontSize: 14,
                    cellTransparency: 100,
                    lightenCellColor: 100,
                    borderWidth: 20,
                    borderColor: "#666666",
                    team1color: "#aeaeae",
                    team2color: "#fff700",
                    nickColor: "#fff",
                    nickStrokeColor: "#000",
                    cellNickSize: 110,
                    nickFont: "ubuntu",
                    massColor: "#fff",
                    massStrokeColor: "#444",
                    cellMassSize: 140,
                    massFont: "Rubik",
                    gridWidth: 100,
                    gridColor: "#222222",
                    gridTextColor: "#222222",
                    gridTextSize: 1400,
                    gridTextFont: "Rubik",
                    foodSize: 1,
                    foodColor: "#ffffff",
                    virusColor: "#616161",
                    virusBorderColor: "#828282",
                    virusBorderWidth: 14,
                    commanderColor: "#ffffff",
                    backgroundColor: "#000000",
                    indicatorSize: 100,
                    cursor: 1
                },
                settings: {
                    CellAnimation: 120,
                    eatAnimation: "on",
                    cellTextAnimation: "on",
                    cellMass: "full",
                    food: "monoColored",
                    bgSectors: "normal",
                    vanillaGrid: "off"
                }
            },
            "Agarplus v2": {
                author: "Acydwarp",
                theme: {
                    skinBorder: 100,
                    lbSize: 110,
                    minimapSize: 200,
                    chatFontSize: 18,
                    cellTransparency: 100,
                    lightenCellColor: 100,
                    borderWidth: 40,
                    borderColor: "#ffffff",
                    team1color: "#aeaeae",
                    team2color: "#fff700",
                    nickColor: "#fff",
                    nickStrokeColor: "#000",
                    cellNickSize: 140,
                    nickFont: "ubuntu",
                    massColor: "#fff",
                    massStrokeColor: "#000",
                    cellMassSize: 140,
                    massFont: "ubuntu",
                    gridWidth: 100,
                    gridColor: "#1a1a1a",
                    gridTextColor: "#1a1a1a",
                    gridTextSize: 1700,
                    gridTextFont: "ubuntu",
                    foodSize: 5,
                    foodColor: "#0849d4",
                    virusColor: "#808080",
                    virusBorderColor: "#9e9e9e",
                    virusBorderWidth: 10,
                    commanderColor: "#0849d4",
                    backgroundColor: "#000000",
                    indicatorSize: 100,
                    cursor: 1
                },
                settings: {
                    CellAnimation: 120,
                    eatAnimation: "on",
                    cellTextAnimation: "on",
                    cellMass: "full",
                    food: "monoColored",
                    bgSectors: "normal",
                    vanillaGrid: "off"
                }
            },
            HKG: {
                author: "Num Jai",
                theme: {
                    skinBorder: 100,
                    lbSize: 110,
                    minimapSize: 200,
                    chatFontSize: 18,
                    cellTransparency: 100,
                    lightenCellColor: 100,
                    borderWidth: 60,
                    borderColor: "#ffffff",
                    team1color: "#aeaeae",
                    team2color: "#fff700",
                    nickColor: "#fff",
                    nickStrokeColor: "#000",
                    cellNickSize: 130,
                    nickFont: "sans-serif",
                    massColor: "#fff",
                    massStrokeColor: "#000",
                    cellMassSize: 130,
                    massFont: "sans-serif",
                    gridWidth: 100,
                    gridColor: "#1a1a1a",
                    gridTextColor: "#1a1a1a",
                    gridTextSize: 1700,
                    gridTextFont: "ubuntu",
                    foodSize: 5,
                    foodColor: "#6111ff",
                    virusColor: "#808080",
                    virusBorderColor: "#9e9e9e",
                    virusBorderWidth: 10,
                    commanderColor: "#0849d4",
                    backgroundColor: "#000000",
                    indicatorSize: 100,
                    cursor: 1
                },
                settings: {
                    CellAnimation: 120,
                    eatAnimation: "on",
                    cellTextAnimation: "off",
                    cellMass: "full",
                    food: "monoColored",
                    bgSectors: "off",
                    vanillaGrid: "off"
                }
            },
            "Ogario v4": {
                author: "Szymy",
                theme: {
                    skinBorder: 100,
                    lbSize: 100,
                    minimapSize: 240,
                    chatFontSize: 18,
                    cellTransparency: 100,
                    lightenCellColor: 90,
                    borderWidth: 40,
                    borderColor: "#01d9cc",
                    team1color: "#aeaeae",
                    team2color: "#fff700",
                    nickColor: "#fff",
                    nickStrokeColor: "#000",
                    cellNickSize: 120,
                    nickFont: "ubuntu",
                    massColor: "#fff",
                    massStrokeColor: "#000",
                    cellMassSize: 160,
                    massFont: "ubuntu",
                    gridWidth: 40,
                    gridColor: "#00243e",
                    gridTextColor: "#00243e",
                    gridTextSize: 1200,
                    gridTextFont: "ubuntu",
                    foodSize: 5,
                    foodColor: "#5000ff",
                    virusColor: "#002f52",
                    virusBorderColor: "#00b9e8",
                    virusBorderWidth: 14,
                    commanderColor: "#0849d4",
                    backgroundColor: "#000a11",
                    indicatorSize: 100,
                    cursor: 1
                },
                settings: {
                    CellAnimation: 140,
                    eatAnimation: "on",
                    cellTextAnimation: "on",
                    cellMass: "shortened",
                    food: "monoColored",
                    bgSectors: "normal",
                    vanillaGrid: "off"
                }
            },
            Yin: {
                author: "DaChong",
                theme: {
                    skinBorder: 100,
                    lbSize: 130,
                    minimapSize: 200,
                    chatFontSize: 18,
                    cellTransparency: 100,
                    lightenCellColor: 100,
                    borderWidth: 10,
                    borderColor: "#116111",
                    team1color: "#aeaeae",
                    team2color: "#fff700",
                    nickColor: "#fff",
                    nickStrokeColor: "#000",
                    cellNickSize: 100,
                    nickFont: "ubuntu",
                    massColor: "#fff",
                    massStrokeColor: "#000",
                    cellMassSize: 100,
                    massFont: "ubuntu",
                    gridWidth: 10,
                    gridColor: "#333333",
                    gridTextColor: "#333333",
                    gridTextSize: 1700,
                    gridTextFont: "ubuntu",
                    foodSize: 1,
                    foodColor: "#555",
                    virusColor: "#6fff00",
                    virusBorderColor: "#55b304",
                    virusBorderWidth: 14,
                    commanderColor: "#00fff7",
                    backgroundColor: "#000000",
                    indicatorSize: 100,
                    cursor: 1
                },
                settings: {
                    CellAnimation: 120,
                    eatAnimation: "on",
                    cellTextAnimation: "on",
                    cellMass: "full",
                    food: "rainbow",
                    bgSectors: "normal",
                    vanillaGrid: "off"
                }
            },
            VNDOT: {
                author: "KSCC",
                theme: {
                    skinBorder: 100,
                    lbSize: 100,
                    minimapSize: 200,
                    chatFontSize: 18,
                    cellTransparency: 100,
                    lightenCellColor: 100,
                    borderWidth: 10,
                    borderColor: "#333333",
                    team1color: "#aeaeae",
                    team2color: "#fff700",
                    nickColor: "#fff",
                    nickStrokeColor: "#000",
                    cellNickSize: 110,
                    nickFont: "ubuntu",
                    massColor: "#fff",
                    massStrokeColor: "#000",
                    cellMassSize: 110,
                    massFont: "ubuntu",
                    gridWidth: 10,
                    gridColor: "#333333",
                    gridTextColor: "#444444",
                    gridTextSize: 1200,
                    gridTextFont: "ubuntu",
                    foodSize: 1,
                    foodColor: "#4b6efa",
                    virusColor: "#6fff00",
                    virusBorderColor: "#55b304",
                    virusBorderWidth: 14,
                    commanderColor: "#00fff7",
                    backgroundColor: "#111",
                    indicatorSize: 100,
                    cursor: 1
                },
                settings: {
                    CellAnimation: 120,
                    eatAnimation: "on",
                    cellTextAnimation: "stepped",
                    cellMass: "shortened",
                    food: "monoColored",
                    bgSectors: "normal",
                    vanillaGrid: "off"
                }
            },
            OZYDOT: {
                author: "Eric",
                theme: {
                    skinBorder: 100,
                    lbSize: 100,
                    minimapSize: 200,
                    chatFontSize: 14,
                    cellTransparency: 100,
                    lightenCellColor: 100,
                    borderWidth: 20,
                    borderColor: "#666666",
                    team1color: "#aeaeae",
                    team2color: "#fff700",
                    nickColor: "#fff",
                    nickStrokeColor: "#000",
                    cellNickSize: 110,
                    nickFont: "ubuntu",
                    massColor: "#fff",
                    massStrokeColor: "#444",
                    cellMassSize: 140,
                    massFont: "oswald",
                    gridWidth: 100,
                    gridColor: "#222222",
                    gridTextColor: "#222222",
                    gridTextSize: 1400,
                    gridTextFont: "sans-serif",
                    foodSize: 1,
                    foodColor: "#c9d3f5",
                    virusColor: "#e0e0e0",
                    virusBorderColor: "#9c9c9c",
                    virusBorderWidth: 10,
                    commanderColor: "#ffffff",
                    backgroundColor: "#000000",
                    indicatorSize: 100,
                    cursor: 1
                },
                settings: {
                    CellAnimation: 120,
                    eatAnimation: "on",
                    cellTextAnimation: "on",
                    cellMass: "full",
                    food: "monoColored",
                    bgSectors: "normal",
                    vanillaGrid: "off"
                }
            },
            "HSLO v2": {
                author: "2coolife",
                theme: {
                    skinBorder: 100,
                    lbSize: 110,
                    minimapSize: 180,
                    chatFontSize: 16,
                    cellTransparency: 100,
                    lightenCellColor: 90,
                    borderWidth: 20,
                    borderColor: "#ffffff",
                    team1color: "#aeaeae",
                    team2color: "#fff700",
                    nickColor: "#fff",
                    nickStrokeColor: "#000",
                    cellNickSize: 120,
                    nickFont: "ubuntu",
                    massColor: "#fff",
                    massStrokeColor: "#000000",
                    cellMassSize: 120,
                    massFont: "ubuntu",
                    gridWidth: 10,
                    gridColor: "#007777",
                    gridTextColor: "#333333",
                    gridTextSize: 1600,
                    gridTextFont: "oswald",
                    foodSize: 5,
                    foodColor: "#666666",
                    virusColor: "#444444",
                    virusBorderColor: "#007777",
                    virusBorderWidth: 14,
                    commanderColor: "#ffffff",
                    backgroundColor: "#222",
                    indicatorSize: 100,
                    cursor: 1
                },
                settings: {
                    CellAnimation: 140,
                    eatAnimation: "on",
                    cellTextAnimation: "on",
                    cellMass: "shortened",
                    food: "monoColored",
                    bgSectors: "normal",
                    vanillaGrid: "off"
                }
            },
            "HSLO v3": {
                author: "2coolife",
                theme: {
                    skinBorder: 90,
                    lbSize: 100,
                    minimapSize: 180,
                    chatFontSize: 14,
                    cellTransparency: 100,
                    lightenCellColor: 100,
                    borderWidth: 40,
                    borderColor: "#ff006f",
                    team1color: "#aeaeae",
                    team2color: "#ff006f",
                    nickColor: "#fff",
                    nickStrokeColor: "#000000",
                    cellNickSize: 110,
                    nickFont: "ubuntu",
                    massColor: "#fff",
                    massStrokeColor: "#000000",
                    cellMassSize: 110,
                    massFont: "ubuntu",
                    gridWidth: 10,
                    gridColor: "#121212",
                    gridTextColor: "#121212",
                    gridTextSize: 1400,
                    gridTextFont: "oswald",
                    foodSize: 1,
                    foodColor: "#555555",
                    virusColor: "#444444",
                    virusBorderColor: "#ff006f",
                    virusBorderWidth: 10,
                    commanderColor: "#ff006f",
                    backgroundColor: "#000000",
                    indicatorSize: 100,
                    cursor: 1
                },
                settings: {
                    CellAnimation: 140,
                    eatAnimation: "on",
                    cellTextAnimation: "on",
                    cellMass: "shortened",
                    food: "monoColored",
                    bgSectors: "snowflakes",
                    vanillaGrid: "off"
                }
            },
            "HSLO v4": {
                author: "2coolife",
                theme: {
                    skinBorder: 90,
                    lbSize: 100,
                    minimapSize: 180,
                    chatFontSize: 14,
                    cellTransparency: 100,
                    lightenCellColor: 100,
                    borderWidth: 20,
                    borderColor: "#ff9900",
                    team1color: "#aeaeae",
                    team2color: "#ff006f",
                    nickColor: "#fff",
                    nickStrokeColor: "#000000",
                    cellNickSize: 110,
                    nickFont: "ubuntu",
                    massColor: "#fff",
                    massStrokeColor: "#000000",
                    cellMassSize: 120,
                    massFont: "ubuntu",
                    gridWidth: 10,
                    gridColor: "#ff9900",
                    gridTextColor: "#333333",
                    gridTextSize: 1300,
                    gridTextFont: "ubuntu",
                    foodSize: 1,
                    foodColor: "#555555",
                    virusColor: "#444444",
                    virusBorderColor: "#ff9900",
                    virusBorderWidth: 10,
                    commanderColor: "#ff006f",
                    backgroundColor: "#222222",
                    indicatorSize: 100,
                    cursor: 1
                },
                settings: {
                    CellAnimation: 140,
                    eatAnimation: "on",
                    cellTextAnimation: "on",
                    cellMass: "shortened",
                    food: "monoColored",
                    bgSectors: "normal",
                    vanillaGrid: "off"
                }
            },
            Pastels: {
                author: "2coolife",
                theme: {
                    skinBorder: 90,
                    lbSize: 100,
                    minimapSize: 180,
                    chatFontSize: 14,
                    cellTransparency: 100,
                    lightenCellColor: 100,
                    borderWidth: 40,
                    borderColor: "#f5d25f",
                    team1color: "#aeaeae",
                    team2color: "#ff006f",
                    nickColor: "#fff",
                    nickStrokeColor: "#000000",
                    cellNickSize: 110,
                    nickFont: "ubuntu",
                    massColor: "#fff",
                    massStrokeColor: "#000000",
                    cellMassSize: 120,
                    massFont: "ubuntu",
                    gridWidth: 10,
                    gridColor: "#fa676c",
                    gridTextColor: "#333333",
                    gridTextSize: 1300,
                    gridTextFont: "oswald",
                    foodSize: 1,
                    foodColor: "#555555",
                    virusColor: "#7a4ba3",
                    virusBorderColor: "#ead2fa",
                    virusBorderWidth: 14,
                    commanderColor: "#ff006f",
                    backgroundColor: "#222222",
                    indicatorSize: 100,
                    cursor: 1
                },
                settings: {
                    CellAnimation: 140,
                    eatAnimation: "on",
                    cellTextAnimation: "on",
                    cellMass: "shortened",
                    food: "monoColored",
                    bgSectors: "normal",
                    vanillaGrid: "off"
                }
            }
        };
    }
}
class k {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.div = $("#notifications");
        this.r_ujiGO_d_Jl__sWfa____NPsEfI_XjPgvCCGC = 1e4;
        this.HDHXSVtu_MljMfwBDmXybRqN = 500;
        this.uDDkgsmLIvBUDT_cpWI_HYL_fmrk = '<i class="fas fa-comment"></i>';
        this.KgUqlToG_zQZ_vW_Z_q_DJCFSJK_Qrjka = '<i class="fas fa-exclamation-circle "></i>';
        this.PGex_hg_kWG_sfeMB_sSmEG_ = "<i class='fas fa-bell'></i>";
        this.chatroomdiv = $("#chatroom");
        this.emojiPath = "http://astr.io/emojis/";
        this.emojis = {
            ":01:": "angry.png",
            ":02:": "angry-1.png",
            ":03:": "cool.png",
            ":04:": "crying.png",
            ":05:": "crying-1.png",
            ":06:": "embarrassed.png",
            ":07:": "happy.png",
            ":08:": "happy-1.png",
            ":09:": "happy-2.png",
            ":10:": "in-love.png",
            ":11:": "kiss.png",
            ":12:": "laughing.png",
            ":13:": "laughing-1.png",
            ":14:": "poo.png",
            ":15:": "sad.png",
            ":16:": "sad-1.png",
            ":17:": "shocked.png",
            ":18:": "shocked-1.png",
            ":19:": "sick.png",
            ":20:": "sleeping.png",
            ":21:": "thinking.png",
            ":22:": "tongue.png",
            ":23:": "wink.png"
        };
        this.displayEmojis();
    }
    static displayEmojis() {
        const sbInner = $("#emojiContainer");
        for (const index in this.emojis) {
            const up = $("<img src=" + (this["emojiPath "] + this["emojis "][index]) + " class='emojiPreview '>");
            up.click(() => {
                const trace = $("#message");
                const strTab = trace.val();
                trace.val(strTab + " " + index);
                v.input.focus();
            });
            sbInner.append(up);
        }
    }
    static normal(pointStr, callback) {
        if (this.chatroom(pointStr, callback, this.uDDkgsmLIvBUDT_cpWI_HYL_fmrk), "chatroom" !== i.chatType) {
            const resultForm = "<div><div class='normal '>" + this.uDDkgsmLIvBUDT_cpWI_HYL_fmrk + "<span class='nick'>" + pointStr + "</span><span class='message '>" + this.putEmojis(this.cleanMessage(callback)) + "</span></div></div>";
            this.append(resultForm);
        }
    }
    static command(cssProperyName, callback) {
        if ("on" === i.sounds && p.chat.play(), this.chatroom(cssProperyName, callback, this.KgUqlToG_zQZ_vW_Z_q_DJCFSJK_Qrjka), "chatroom" !== i.chatType) {
            const resultForm = "<div><div class='command'>" + this.KgUqlToG_zQZ_vW_Z_q_DJCFSJK_Qrjka + "<span class='nick'>" + cssProperyName + '</span><span class="message">' + this.cleanMessage(callback) + "</span></div></div>";
            this.append(resultForm);
        }
    }
    static alert(alertMethod, type) {
        if ("on" === i.sounds && p.chat.play(), this.chatroom(alertMethod, type, this.PGex_hg_kWG_sfeMB_sSmEG_), "chatroom" !== i.chatType) {
            const resultForm = "<div><div class='alert'>" + this.PGex_hg_kWG_sfeMB_sSmEG_ + "<span class='nick'>" + alertMethod + "</span><span class='message'>" + this.cleanMessage(type) + "</span></div></div>";
            this.append(resultForm);
        }
    }
    static append(field_type) {
        const container = $(field_type);
        container.slideUp(0);
        container.appendTo(this.div);
        container.slideDown(this.HDHXSVtu_MljMfwBDmXybRqN);
        setTimeout(() => {
            container.slideUp(this.HDHXSVtu_MljMfwBDmXybRqN, () => {
                container.remove();
            });
        }, this.r_ujiGO_d_Jl__sWfa____NPsEfI_XjPgvCCGC);
    }
    static cleanMessage(message) {
        return message.replace(/</g, "(").replace(/>/g, ")").replace(/&/g, "and");
    }
    static putEmojis($template) {
        for (const p1Value in this.emojis) {
            const template = new RegExp(p1Value, "g");
            $template = $template.replace(template, '<img src="' + (this.emojiPath + this.emojis[p1Value]) + '">');
        }
        return $template;
    }
    static chatroom(parameters, comment, formatNicks) {
        const dStartDateTime = new Date;
        const i_ = dStartDateTime.getHours() + ":" + dStartDateTime.getMinutes();
        this.chatroomdiv.append('<div class="chatroom-row"><span class="chattime">' + i_ + "</span> " + formatNicks + " <span class='nick'>" + parameters + "</span> <span class='message'>" + this.putEmojis(this.cleanMessage(comment)) + "</span></div>");
        this.chatroomdiv.scrollTop(this.chatroomdiv[0].scrollHeight);
    }
}
class p {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.chat = new Audio("http://astr.io/sounds/chat.mp3") || {
            play: () => {}
        };
        this.bellAlert = new Audio("http://astr.io/sounds/bellalert.mp3") || {
            play: () => {}
        };
        this.wasted = new Audio("http://astr.io/sounds/wasted.mp3") || {
            play: () => {}
        };
    }
}
class h {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.F_yI_FNOxXV_wxhEtNpacNvmPUwqmc__IjWcm = false;
        this.token = null;
        const options = o.get("extras", "fbToken");
        if (options) {
            if (options.expiry > Date.now()) {
                this.token = options.token;
                this.F_yI_FNOxXV_wxhEtNpacNvmPUwqmc__IjWcm = true;
                $("#login-facebook").addClass("active");
                H._K_CJmWThp_WayUy_e_y_B__NyK();
                k.alert("Facebook", n.current.notif.login_lastSession);
            } else {
                o.set("extras", "fbToken", false);
            }
        }
        if (window.FB) {
            FB.init({
                appId: 677505792353827,
                cookie: true,
                xfbml: true,
                status: true,
                H_MvkSXBtbmbPJSXAi_OVbf_qHTdTaXilK: "v2.0"
            });
        }
        $("#login-facebook").click(() => {
            if (this.F_yI_FNOxXV_wxhEtNpacNvmPUwqmc__IjWcm) {
                k.alert("Facebook", n.current.notif.alreadyLoggedIn);
            } else {
                this.login();
            }
        });
        $("#logout").click(() => {
            this.logout();
        });
    }
    static login() {
        if (window.FB) {
            window.FB.login((mmCoreSplitViewBlock) => {
                this.t_p_F_umPyaATG_eaL_jBHic_Gb__d_MjH(mmCoreSplitViewBlock);
            }, {
                scope: "public_profile, email"
            });
        }
    }
    static t_p_F_umPyaATG_eaL_jBHic_Gb__d_MjH(response) {
        if (response.authResponse) {
            this.token = response.authResponse.accessToken;
            o.set("extras", "fbToken", {
                token: this.token,
                expiry: Date.now() + 1e3 * response.authResponse.expiresIn
            });
            this.F_yI_FNOxXV_wxhEtNpacNvmPUwqmc__IjWcm = true;
            $("#login-facebook").addClass("active");
            H._K_CJmWThp_WayUy_e_y_B__NyK();
            k.alert("Facebook", n.current.notif.login_success);
        } else {
            k.alert("Facebook", n.current.notif.login_error);
        }
    }
    static logout() {
        if (this.F_yI_FNOxXV_wxhEtNpacNvmPUwqmc__IjWcm) {
            FB.logout((loginStatus) => {
                if (loginStatus.authResponse) {
                    this.F_yI_FNOxXV_wxhEtNpacNvmPUwqmc__IjWcm = false;
                    this.token = null;
                    $("#login-facebook").removeClass("active");
                    k.alert("Facebook", n.current.notif.logout);
                    o.set("extras", "fbToken", false);
                }
            });
        }
    }
}
class C {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.F_yI_FNOxXV_wxhEtNpacNvmPUwqmc__IjWcm = false;
        this.token = null;
        const options = o.get("extras", "googleToken");
        if (options) {
            if (options.expiry > Date.now()) {
                this.token = options.token;
                this.F_yI_FNOxXV_wxhEtNpacNvmPUwqmc__IjWcm = true;
                $("#login-google").addClass("active");
                H.jIUYzqoiskTablmq_ZVz__Tv_yjpf_();
                k.alert("Google+", n.current.notif.login_lastSession);
            } else {
                o.set("extras", "googleToken", false);
            }
        }
        if (window.gapi) {
            window.gapi.load("auth2", () => {
                const auth2 = gapi.auth2.init({
                    client_id: "686981379285-oroivr8u2ag1dtm3ntcs6vi05i3cpv0j.apps.googleusercontent.com",
                    cookiepolicy: "single_host_origin"
                });
                const element = document.getElementById("login-google");
                auth2.attachClickHandler(element, {}, (mmCoreSplitViewBlock) => {
                    this.t_p_F_umPyaATG_eaL_jBHic_Gb__d_MjH(mmCoreSplitViewBlock);
                }, (animate_param) => {
                    console.log(animate_param);
                });
            });
        }
        $("#logout").click(() => {
            this.logout();
        });
    }
    static t_p_F_umPyaATG_eaL_jBHic_Gb__d_MjH(a) {
        const apiKey = a.getAuthResponse(true);
        const token = apiKey.access_token;
        if (token) {
            this.token = token;
            o.set("extras", "googleToken", {
                token: this.token,
                expiry: apiKey.expires_at
            });
            this.F_yI_FNOxXV_wxhEtNpacNvmPUwqmc__IjWcm = true;
            $("#login-google").addClass("active");
            H.jIUYzqoiskTablmq_ZVz__Tv_yjpf_();
            k.alert("Google+", n.current.notif.login_success);
        } else {
            k.alert("Google+", n.current.notif.login_error);
        }
    }
    static logout() {
        if (this.F_yI_FNOxXV_wxhEtNpacNvmPUwqmc__IjWcm) {
            const transport = gapi.auth2.getAuthInstance();
            transport.signOut();
            this.F_yI_FNOxXV_wxhEtNpacNvmPUwqmc__IjWcm = false;
            this.token = null;
            $("#login-google").removeClass("active");
            k.alert("Google+", n.current.notif.logout);
            o.set("extras", "googleToken", false);
        }
    }
}
class b {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.list = new Set;
        this.div = $("#leaderboard-positions")[0];
        this.teamLB = $("#leaderboard-chart");
        this.teamLBvisible = false;
        this.barsCss = document.createElement("style");
        $("head").append(this.barsCss);
    }
    static add(username, time, project, tags, method_options) {
        this.list.add({
            nick: username,
            position: time,
            MvMP_MPK_b_G__mnbFtFwFC__sMvZ: project,
            GN_im__j_CmIPqtGAV_p_f_nMBM_: method_options,
            __OluYOvR_CPjXySaAIbllXl: tags
        });
    }
    static team(val, config, $q) {
        if (!this.teamLBvisible) {
            this.teamLB.show();
            this.div.innerHTML = "";
            this.teamLBvisible = true;
        }
        this.barsCss.innerText = ".chart-bar.red { width: " + (0 | 150 * val) + "px } .chart-bar.green { width: " + (0 | 150 * config) + "px } .chart-bar.blue { width: " + (0 | 150 * $q) + "px }";
    }
    static clear() {
        this.list.clear();
    }
    static GTJ_Z_GBYToqmnGM_lGVtg_FyQ_fcWs_X_HuL() {
        if (this.teamLBvisible) {
            this.teamLB.hide();
            this.teamLBvisible = false;
        }
        let html = "";
        for (const penguin of this.list.values()) {
            html = html + ('<div class="lb-row"><span>' + this.cleanNick(penguin.nick) + "<span><strong>" + penguin.position + "</strong></div>");
        }
        this.div.innerHTML = html;
    }
    static cleanNick(commaParam) {
        return commaParam.replace(/</g, "(").replace(/>/g, ")");
    }
}
class y {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.initted = true;
        this.canvas = $("#minimap-nodes")[0];
        this.size = u.minimapSize;
        this.canvas.width = this.size;
        this.canvas.height = this.size;
        this._xBO_iva_u_Ovt_ev_y_OT_ = 2 * Math.PI;
        this.NCQOf__Wa__H_AN_o_WuQWFRC_U = this.canvas.getContext("2d");
        this.NCQOf__Wa__H_AN_o_WuQWFRC_U.textAlign = "center";
        this.NCQOf__Wa__H_AN_o_WuQWFRC_U.textBaseline = "bottom";
        this.NCQOf__Wa__H_AN_o_WuQWFRC_U.font = "300 12px Rubik";
        this.NCQOf__Wa__H_AN_o_WuQWFRC_U.lineWidth = 2;
        this.selector = 0;
    }
    static BbTTUwqPpGOG_MtK_Cz_UXC_VwAYpNeno_cO_() {
        const ctx = this.NCQOf__Wa__H_AN_o_WuQWFRC_U;
        const widthR = this.size / L.FSuy_wC_Mu_HW_iAyvaeWhk_N;
        const a_ = Z._PoBDjeVk_b_XRUvg_lJUu__zmzbP;
        if (ctx.clearRect(0, 0, this.size, this.size), ctx.fillStyle = "rgba(50, 50, 50, 0.4)", ctx.fillRect(0 | (a_.DQ__RLVfMX__sNtXsMQEEgIAbY - L.DQ__RLVfMX__sNtXsMQEEgIAbY) * widthR, 0 | (a_.U_xufzeSJl_d_xqNxKfRppgJfk_C_Ln - L.U_xufzeSJl_d_xqNxKfRppgJfk_C_Ln) * widthR, 0 | (a_.vPzXvUJeuyxKdWiKyZDcEBmy_rJR - a_.DQ__RLVfMX__sNtXsMQEEgIAbY) * widthR, 0 | (a_.gIcO__Ch_te__GlzXwSsain_ - a_.U_xufzeSJl_d_xqNxKfRppgJfk_C_Ln) *
                widthR), N.biggestIsOn && (!Z.bbK__VFfPoBbfF_b_FKZG || Z.ZKZ_w_DbZe_HhMUMcNJmLgvwZ_gK__r__fPMA)) {
            N.biggest.YXOe_f_u_e_JA_p_e_Sh_();
            const CENTER = N.biggest._l_QQdHME_ypM_J___GDvqb_CfC_;
            const yPos = N.biggest.vLI_eBty_xnAG_vx_kRvB_;
            ctx.beginPath();
            ctx.arc(CENTER, yPos, 7, 0, this._xBO_iva_u_Ovt_ev_y_OT_, false);
            ctx.closePath();
            ctx.fillStyle = "#fff";
            ctx.fill();
            ctx.stroke();
            ctx.fillText(n.current.huds.num1position || "#1 position", CENTER, yPos - 8);
        }
        ctx.strokeStyle = "#666";
        const foveaX = M.uA_Uj_g_g_PmSmqip_A_S___YZnpKr_H_HHaM.x * widthR;
        const cy = (M.uA_Uj_g_g_PmSmqip_A_S___YZnpKr_H_HHaM.y - L.U_xufzeSJl_d_xqNxKfRppgJfk_C_Ln) * widthR;
        ctx.beginPath();
        ctx.moveTo(foveaX - 4, cy - 4);
        ctx.lineTo(foveaX + 4, cy + 4);
        ctx.moveTo(foveaX - 4, cy + 4);
        ctx.lineTo(foveaX + 4, cy - 4);
        ctx.closePath();
        ctx.stroke();
        ctx.strokeStyle = "rgba(51, 51, 51, 0.5)";
        const space_x = (Z.x - L.DQ__RLVfMX__sNtXsMQEEgIAbY) * widthR;
        const yk = (Z.y - L.U_xufzeSJl_d_xqNxKfRppgJfk_C_Ln) * widthR;
        const innerBarRadius = M.PDnW_YiUP_ilIgVcz_t_iwvmmJT ? 5 : 6;
        ctx.beginPath();
        ctx.arc(space_x, yk, innerBarRadius, 0, this._xBO_iva_u_Ovt_ev_y_OT_, false);
        ctx.closePath();
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.stroke();
        this.xd_LULKZmorBVR_t_s_zHibfubt_();
    }
    static teamMinimap() {
        const ctx = this.NCQOf__Wa__H_AN_o_WuQWFRC_U;
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";
        for (const p of N.xd_LULKZmorBVR_t_s_zHibfubt_.values()) {
            if (p.PDnW_YiUP_ilIgVcz_t_iwvmmJT && !(this.selector && this.selector !== p.team)) {
                p.YXOe_f_u_e_JA_p_e_Sh_();
                const CENTER = p._l_QQdHME_ypM_J___GDvqb_CfC_;
                const yPos = p.vLI_eBty_xnAG_vx_kRvB_;
                ctx.beginPath();
                ctx.arc(CENTER, yPos, 5, 0, this._xBO_iva_u_Ovt_ev_y_OT_, false);
                ctx.closePath();
                ctx.fillStyle = "#fff";
                if (p.nick.includes("\ufdfd")) {
                    p.nick = "";
                }
                if (0 < p.nick.length) {
                    ctx.fillText(p.nick, CENTER, yPos - 6);
                }
                ctx.fillStyle = 1 === p.team ? u.team1color : u.team2color;
                ctx.fill();
                ctx.stroke();
            }
        }
    }
    static normalMinimap() {
        const ctx = this.NCQOf__Wa__H_AN_o_WuQWFRC_U;
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";
        ctx.beginPath();
        for (const p of N.xd_LULKZmorBVR_t_s_zHibfubt_.values()) {
            if (p.PDnW_YiUP_ilIgVcz_t_iwvmmJT) {
                p.YXOe_f_u_e_JA_p_e_Sh_();
                const x = p._l_QQdHME_ypM_J___GDvqb_CfC_;
                const yPos = p.vLI_eBty_xnAG_vx_kRvB_;
                ctx.moveTo(x + 5, yPos);
                ctx.arc(x, yPos, 5, 0, this._xBO_iva_u_Ovt_ev_y_OT_, false);
                if (p.nick.includes("\ufdfd")) {
                    p.nick = "";
                }
                if (0 < p.nick.length) {
                    ctx.fillText(p.nick, x, yPos - 6);
                }
            }
        }
        ctx.closePath();
        ctx.fillStyle = "#555";
        ctx.fill();
    }
    static xd_LULKZmorBVR_t_s_zHibfubt_() {
        const ctx = this.NCQOf__Wa__H_AN_o_WuQWFRC_U;
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";
        ctx.beginPath();
        for (const p of F.xd_LULKZmorBVR_t_s_zHibfubt_.values()) {
            p.YXOe_f_u_e_JA_p_e_Sh_();
            const x = p._l_QQdHME_ypM_J___GDvqb_CfC_;
            const yPos = p.vLI_eBty_xnAG_vx_kRvB_;
            ctx.moveTo(x + 5, yPos);
            ctx.arc(x, yPos, 5, 0, this._xBO_iva_u_Ovt_ev_y_OT_, false);
            if (p.nick.includes("\ufdfd")) {
                p.nick = "";
            }
            if (0 < p.nick.length) {
                ctx.fillText(p.nick, x, yPos - 6);
            }
        }
        ctx.closePath();
        ctx.fillStyle = "#555";
        ctx.fill();
    }
}
class w {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.fps = 0;
        this.YEED_BgxHGjVv_vpO__W_bcxoZPhf_nFnYK = e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp;
        this.div = $("#fps-hud")[0];
    }
    static BbTTUwqPpGOG_MtK_Cz_UXC_VwAYpNeno_cO_() {
        this.fps++;
        const t_ = e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp - this.YEED_BgxHGjVv_vpO__W_bcxoZPhf_nFnYK;
        if (!(1e3 > t_)) {
            this.YEED_BgxHGjVv_vpO__W_bcxoZPhf_nFnYK = e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp;
            this.div.innerHTML = this.fps + "fps [" + (0 | e_._mR___RsnD_O_CoU_jPb_efouS_.A_GuZ_QB_nW_omluafrbKl_BqiXtC) + "Hz]";
            this.fps = 0;
        }
    }
}
class x {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.Ozp_Q_uYLgmNmgSe__lMdakzunaqo_kKZU = 0;
        this.fm_dYROITe_XXwqkIcLvVa_xD_j_ = 0;
        this.alive = 0;
        this.spectate = 0;
        this.html = "";
        this.NTZdn_Mjtx_Pjz_hIi__rfS_ = [];
        this.div = {
            positions: $("#teamlist-positions")[0],
            alive: $("#teamlist-alive span")[0],
            spectate: $("#teamlist-spectate span")[0],
            fm_dYROITe_XXwqkIcLvVa_xD_j_: $("#teamlist-totalmass span")[0]
        };
        this.divTeam1 = {
            alive: $("#teamlist-alive1 span")[0],
            spectate: $("#teamlist-spectate1 span")[0],
            fm_dYROITe_XXwqkIcLvVa_xD_j_: $("#teamlist-totalmass1 span")[0]
        };
        this.divTeam2 = {
            alive: $("#teamlist-alive2 span")[0],
            spectate: $("#teamlist-spectate2 span")[0],
            fm_dYROITe_XXwqkIcLvVa_xD_j_: $("#teamlist-totalmass2 span")[0]
        };
        this.teamVsBar = $(".team-vs-bar-inner");
        this.teamVsBarStyle = document.getElementsByClassName("team-vs-bar")[0].style;
        this.teamVsBarInnerStyle = document.getElementsByClassName("team-vs-bar-inner")[0].style;
    }
    static GTJ_Z_GBYToqmnGM_lGVtg_FyQ_fcWs_X_HuL() {
        if (1e3 < e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp - this.Ozp_Q_uYLgmNmgSe__lMdakzunaqo_kKZU) {
            this.Ozp_Q_uYLgmNmgSe__lMdakzunaqo_kKZU = e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp;
            if (N.isSpectator) {
                this.updateVs();
            }
            this.zJG_KXmsJ_cui_eq_EhNTNVHPNr_HHD_yjg_();
            this.div.positions.innerHTML = this.html;
            this.div.alive.innerHTML = this.alive;
            this.div.spectate.innerHTML = this.spectate;
            this.div.fm_dYROITe_XXwqkIcLvVa_xD_j_.innerHTML = this.fm_dYROITe_XXwqkIcLvVa_xD_j_;
            this._Wh_NVOXv__lhD_jewWnmmu_uN_qCbt_cGDYjq();
        }
    }
    static zJG_KXmsJ_cui_eq_EhNTNVHPNr_HHD_yjg_() {
        N.xd_LULKZmorBVR_t_s_zHibfubt_.forEach((th) => {
            if (th.PDnW_YiUP_ilIgVcz_t_iwvmmJT) {
                this.fm_dYROITe_XXwqkIcLvVa_xD_j_ += th.mass;
                this.NTZdn_Mjtx_Pjz_hIi__rfS_.push(th);
                this.alive++;
            } else {
                this.spectate++;
            }
        });
        this.NTZdn_Mjtx_Pjz_hIi__rfS_.sort((body2, body1) => {
            return body1.mass - body2.mass;
        });
        this.NTZdn_Mjtx_Pjz_hIi__rfS_.splice(5);
        if (!N.isSpectator) {
            if (M.PDnW_YiUP_ilIgVcz_t_iwvmmJT) {
                this.fm_dYROITe_XXwqkIcLvVa_xD_j_ += M.mass;
                this.NTZdn_Mjtx_Pjz_hIi__rfS_.push(M);
                this.alive++;
            } else {
                this.spectate++;
            }
        }
        for (let syntaxIndex = 0; syntaxIndex < this.NTZdn_Mjtx_Pjz_hIi__rfS_.length; syntaxIndex++) {
            const artistTrack = this.NTZdn_Mjtx_Pjz_hIi__rfS_[syntaxIndex];
            this.wskQYqAh_l_bFYc__JHKdG_qZjo_mGJ_W(artistTrack);
        }
    }
    static wskQYqAh_l_bFYc__JHKdG_qZjo_mGJ_W(options) {
        const o_ = 100 * options.mass / this.fm_dYROITe_XXwqkIcLvVa_xD_j_;
        this.html += N.isSpectator ? "<div class='tl-player'><div class='tl-player-mass'>" + options.mass + "</div><div class='tl-player-nick'>[TEAM " + options.team + "] " + this.cleanNick(options.nick) + '</div><div class="tl-player-massbar"><div class="tl-player-massbar-inner" style="width: ' + (0 | o_) + '%;"></div></div></div>' : "<div class='tl-player'><div class='tl-player-mass'>" + options.mass + '</div><div class="tl-player-nick">' + this.cleanNick(options.nick) +
            '</div><div class="tl-player-massbar"><div class="tl-player-massbar-inner" style="width: ' + (0 | o_) + "%;'></div></div></div>";
    }
    static updateVs() {
        const pool = N.teamData;
        let o_ = 100 * (pool[1].totalMass / (pool[1].totalMass + pool[2].totalMass));
        if (0 === pool[1].totalMass && 0 === pool[2].totalMass) {
            o_ = 50;
        }
        this.teamVsBar.css("width", (0 | o_) + "%");
        this.divTeam1.alive.innerHTML = pool[1].alive;
        this.divTeam1.spectate.innerHTML = pool[1].spectate;
        this.divTeam1.fm_dYROITe_XXwqkIcLvVa_xD_j_.innerHTML = pool[1].totalMass;
        this.divTeam2.alive.innerHTML = pool[2].alive;
        this.divTeam2.spectate.innerHTML = pool[2].spectate;
        this.divTeam2.fm_dYROITe_XXwqkIcLvVa_xD_j_.innerHTML = pool[2].totalMass;
        this.teamVsBarStyle.background = u.team2color;
        this.teamVsBarInnerStyle.background = u.team1color;
    }
    static _Wh_NVOXv__lhD_jewWnmmu_uN_qCbt_cGDYjq() {
        this.fm_dYROITe_XXwqkIcLvVa_xD_j_ = 0;
        this.alive = 0;
        this.spectate = 0;
        this.NTZdn_Mjtx_Pjz_hIi__rfS_ = [];
        this.html = "";
    }
    static cleanNick(commaParam) {
        return commaParam.replace(/</g, "(").replace(/>/g, ")");
    }
}
class v {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.container = $("#message-hud");
        this.input = $("#message");
        this.E__AUSKkw__EnLiqDeVjek_VfMyp_l_ = false;
        this.bZZS_dQ__CHZkoJQqS__K_ns_Nqk = false;
        this.input.blur(() => {
            this.bZZS_dQ__CHZkoJQqS__K_ns_Nqk = false;
        });
        this.input.focus(() => {
            this.bZZS_dQ__CHZkoJQqS__K_ns_Nqk = true;
        });
        this.chatroom = $("#chatroom");
        this.chatroom.perfectScrollbar();
    }
    static enter() {
        if (!this.E__AUSKkw__EnLiqDeVjek_VfMyp_l_) {
            this.container.show();
            this.E__AUSKkw__EnLiqDeVjek_VfMyp_l_ = true;
            this.input.focus();
        } else {
            if (this.bZZS_dQ__CHZkoJQqS__K_ns_Nqk) {
                let val = this.input.val();
                if (0 < val.length) {
                    if (100 < val.length) {
                        val = val.substring(0, 100);
                    }
                    Y.chat(1, val);
                    this.input.val("");
                }
                this.input.blur();
                this.container.hide();
                this.E__AUSKkw__EnLiqDeVjek_VfMyp_l_ = false;
            } else {
                this.input.focus();
            }
        }
    }
}
class S {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.Ozp_Q_uYLgmNmgSe__lMdakzunaqo_kKZU = 0;
        this.div = $("#stats-hud")[0];
        this.SLLrE_WXaNfTWRM_MoqvNL__X__P = '<i class="fas fa - lock "></i>';
        this.WbMWyq_fDlCzChSuoutnGB_N = '<i class="fas fa - lock - open "></i>';
        this.hrdD_EdSenHZC_gQJJMQqC____SrOLVnf_ = '<i class="fas fa - tachometer "></i>';
        this._lp_rq_C_tCM_TeWEkKR__bRF = '<i class="fas fa - pause - circle "></i>';
    }
    static GTJ_Z_GBYToqmnGM_lGVtg_FyQ_fcWs_X_HuL() {
        if (1e3 < e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp - this.Ozp_Q_uYLgmNmgSe__lMdakzunaqo_kKZU) {
            this.Ozp_Q_uYLgmNmgSe__lMdakzunaqo_kKZU = e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp;
            this.refresh();
        }
    }
    static refresh() {
        let html = "";
        if (M.PDnW_YiUP_ilIgVcz_t_iwvmmJT) {
            html = html + (this.score + this.n16 + this.STE + this.speed);
        }
        html = html + (this.latency + this.PIO + this.oIkJoik__aCBkiAW__B_s_UP_tmqyA__YkSLub_ + this._Yx_kPppdRAyB_mp_gYuWp_sG_LGUeZEKzj_Ko_);
        this.div.innerHTML = html;
    }
    static get _Yx_kPppdRAyB_mp_gYuWp_sG_LGUeZEKzj_Ko_() {
        return "on" === i.autoZoom ? this.SLLrE_WXaNfTWRM_MoqvNL__X__P : this.WbMWyq_fDlCzChSuoutnGB_N;
    }
    static get score() {
        return (n.current.huds.score || "Score") + ": " + M.score + "   ";
    }
    static get n16() {
        return "[" + M.nMrmp_KlgWkSEMRi_GhY_DnRKqQ_MapTQZUTH + "/16]   ";
    }
    static get STE() {
        const to = M.Uk__NI_beQr_EiY__Tw_a_K_JP___bxNt_jF;
        return 35 < to ? "STE: " + (0 | to * (1e3 > to ? 0.35 : 0.38)) + "   " : "";
    }
    static get speed() {
        return M._SMzQYCxtDZYLrWqJsAyMCUG_cdjAat_rBMTZ_ += (M.speed - M._SMzQYCxtDZYLrWqJsAyMCUG_cdjAat_rBMTZ_) / 3, M.speed = 0, this.hrdD_EdSenHZC_gQJJMQqC____SrOLVnf_ + " " + (0 | M._SMzQYCxtDZYLrWqJsAyMCUG_cdjAat_rBMTZ_) + "px/s   ";
    }
    static get PIO() {
        const t_ = V._KqgeJ__dlIlKkL_dG_j_lB_["in"];
        const o_ = V._KqgeJ__dlIlKkL_dG_j_lB_.out;
        return V._KqgeJ__dlIlKkL_dG_j_lB_["in"] = 0, V._KqgeJ__dlIlKkL_dG_j_lB_.out = 0, "PIO: " + t_ + "|" + o_ + "   ";
    }
    static get oIkJoik__aCBkiAW__B_s_UP_tmqyA__YkSLub_() {
        return M.DEOh_sSao_HsQV_nRjFK_SEbXBDsiln__q_D ? "[" + this._lp_rq_C_tCM_TeWEkKR__bRF + " " + (n.current.huds.oIkJoik__aCBkiAW__B_s_UP_tmqyA__YkSLub_ || "Paused") + "]   " : "";
    }
    static get latency() {
        return V.latency + "ms   ";
    }
}
class T {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.container = $("#targeting-hud");
        this.FSBTIh_ZvTI_xzhd_Hxb__TpWadewNMb = $("#targeting-no-1");
        this.QcrjmMXJUSWKV_knbt___ = $("#targeting-mouse");
        this._jqpUeWDnmEzW__SDv_WqvrkfzN_Hi_ = $("#targeting-players");
        this.NNFRQYIbQN_PFvgtKX_cs_FC = $("#targeting-playersMass span.mass")[0];
        this.JQDB_DaQV_gNDv_bZYw_KUsmn_INs = {
            nick: $("#targeting-player1 span.nick")[0],
            mass: $("#targeting-player1 span.mass")[0]
        };
        this._k_y_ry_Xv_yqs_YdhABsgupUolrF = {
            nick: $("#targeting-player2 span.nick")[0],
            mass: $("#targeting-player2 span.mass")[0]
        };
        this.YEED_BgxHGjVv_vpO__W_bcxoZPhf_nFnYK = e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp;
    }
    static GTJ_Z_GBYToqmnGM_lGVtg_FyQ_fcWs_X_HuL() {
        if (!(1e3 > e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp - this.YEED_BgxHGjVv_vpO__W_bcxoZPhf_nFnYK) && (this.YEED_BgxHGjVv_vpO__W_bcxoZPhf_nFnYK = e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp, Z.ZKZ_w_DbZe_HhMUMcNJmLgvwZ_gK__r__fPMA && B.isTurnedOn)) {
            let helpTextData = 0;
            if (B.target1.turnedOn) {
                this.JQDB_DaQV_gNDv_bZYw_KUsmn_INs.nick.innerHTML = B.target1.nick;
                this.JQDB_DaQV_gNDv_bZYw_KUsmn_INs.mass.innerHTML = B.target1.outOfView ? "OUT OF VIEW" : B.target1.mass;
                helpTextData = helpTextData + (B.target1.outOfView ? 0 : B.target1.mass);
            } else {
                this.JQDB_DaQV_gNDv_bZYw_KUsmn_INs.nick.innerHTML = "Target 1";
                this.JQDB_DaQV_gNDv_bZYw_KUsmn_INs.mass.innerHTML = "NOT SELECTED";
            }
            if (B.target2.turnedOn) {
                this._k_y_ry_Xv_yqs_YdhABsgupUolrF.nick.innerHTML = B.target2.nick;
                this._k_y_ry_Xv_yqs_YdhABsgupUolrF.mass.innerHTML = B.target2.outOfView ? "OUT OF VIEW" : B.target2.mass;
                helpTextData = helpTextData + (B.target2.outOfView ? 0 : B.target2.mass);
            } else {
                this._k_y_ry_Xv_yqs_YdhABsgupUolrF.nick.innerHTML = "Target 2";
                this._k_y_ry_Xv_yqs_YdhABsgupUolrF.mass.innerHTML = "NOT SELECTED";
            }
            this.NNFRQYIbQN_PFvgtKX_cs_FC.innerHTML = helpTextData;
        }
    }
    static show() {
        this.container.show();
    }
    static hide() {
        this.container.hide();
    }
    static topViewport() {
        this.FSBTIh_ZvTI_xzhd_Hxb__TpWadewNMb.show();
        this.QcrjmMXJUSWKV_knbt___.hide();
        this._jqpUeWDnmEzW__SDv_WqvrkfzN_Hi_.hide();
        $("#spectate-mode-top").addClass("active");
        $("#spectate-mode-mouse").removeClass("active");
        $("#spectate-mode-target").removeClass("active");
    }
    static mouseViewport() {
        this.QcrjmMXJUSWKV_knbt___.show();
        this.FSBTIh_ZvTI_xzhd_Hxb__TpWadewNMb.hide();
        this._jqpUeWDnmEzW__SDv_WqvrkfzN_Hi_.hide();
        $("#spectate-mode-top").removeClass("active");
        $("#spectate-mode-mouse").addClass("active");
        $("#spectate-mode-target").removeClass("active");
    }
    static targetMode() {
        this._jqpUeWDnmEzW__SDv_WqvrkfzN_Hi_.show();
        this.QcrjmMXJUSWKV_knbt___.hide();
        this.FSBTIh_ZvTI_xzhd_Hxb__TpWadewNMb.hide();
        $("#spectate-mode-top").removeClass("active");
        $("#spectate-mode-mouse").removeClass("active");
        $("#spectate-mode-target").addClass("active");
    }
}
class A {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        p._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        k._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        i._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        s._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        r._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        l._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        f._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        u._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        h._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        C._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        b._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        y._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        w._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        x._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        v._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        S._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        T._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        this.E__AUSKkw__EnLiqDeVjek_VfMyp_l_ = true;
        this.div = $("#menu-overlay");
        this.streammode = !(o.get("extras", "streammode") || false);
        this.toggleStreammode();
        this.yA_Ub__bid_vyZlvzdt_ysitOi_P_PTDzj_oH();
        this.versionCheck();
        this.servers = {
            eu1multibox: "game-eu-01.astr.io:2095",
            eu2multibox: "game-eu-02.astr.io:2095",
            na1multibox: "game-na-01.astr.io:2095",
            na2multibox: "game-na-02.astr.io:2095",
            as1multibox: "game-as-01.astr.io:2095",
            as2multibox: "game-as-02.astr.io:2095"
        };
        if (true === o.get("extras", "ADMIN")) {
            this.servers.localhost = "localhost:2095";
        }
    }
    static yA_Ub__bid_vyZlvzdt_ysitOi_P_PTDzj_oH() {
        $("#button-settings").click(() => {
            this.kWIhZs_Ff_VDDryOVOXTivmE();
            i.toggle();
        });
        $("#button-play").click(() => {
            this.play();
        });
        $("#button-spectate").click(() => {
            this.close();
            if (!M.PDnW_YiUP_ilIgVcz_t_iwvmmJT) {
                Z.bbK__VFfPoBbfF_b_FKZG = true;
                Z.Sx_l__mkjDQ__yrnoX_rDVi__RKkXi = 0.1;
            }
        });
        $("#button-inputs").click(() => {
            this.kWIhZs_Ff_VDDryOVOXTivmE();
            s.toggle();
        });
        $("#button-theme").click(() => {
            this.kWIhZs_Ff_VDDryOVOXTivmE();
            u.toggle();
        });
        $("#regions").change(() => {
            o.set("extras", "region", $("#regions").val());
            const id = $("#regions").val();
            if ("" !== id && "select" !== id) {
                const PROPERTY_NAME_FILESIZE_LEGACY = this.servers[id];
                V.Ikc_j_E_zHZNxgF_vr_YMh(PROPERTY_NAME_FILESIZE_LEGACY);
            }
        });
        $("#minimap-show-1").click(() => {
            $("#minimap-show-" + y.selector).removeClass("active");
            $("#minimap-show-1").addClass("active");
            y.selector = 1;
        });
        $("#minimap-show-2").click(() => {
            $("#minimap-show-" + y.selector).removeClass("active");
            $("#minimap-show-2").addClass("active");
            y.selector = 2;
        });
        $("#minimap-show-0").click(() => {
            $("#minimap-show-" + y.selector).removeClass("active");
            $("#minimap-show-0").addClass("active");
            y.selector = 0;
        });
        $("#streamMode").click(() => {
            this.toggleStreammode();
        });
        $("#spectate-mode-top").click(() => {
            this.spectateModeTop();
        });
        $("#spectate-mode-mouse").click(() => {
            this.spectateModeMouse();
        });
        $("#spectate-mode-target").click(() => {
            this.spectateModeTarget();
        });
        $("#anouncement").click(() => {
            $("#anouncement").fadeOut(250);
        });
        const t_ = o.get("extras", "openedChangelog");
        if (!t_) {
            $("#changelog").addClass("active");
        }
        $("#changelog").click(() => {
            o.set("extras", "openedChangelog", true);
            $("#changelog").removeClass("active");
        });
    }
    static doubleTag() {
        $("#double-tag").addClass("active-tag");
        $("#normal-tag").removeClass("active-tag");
        $("#tag2").show();
        $("#nick").css("width", "60px");
        $("#teams-vs").show();
        $("#info-tp").hide();
        N.isSpectator = true;
        Y.spectator(true);
        $(".minimap-button").each(function () {
            $(this).show();
        });
    }
    static normalTag() {
        $("#normal-tag").addClass("active-tag");
        $("#double-tag").removeClass("active-tag");
        $("#tag2").hide();
        $("#nick").css("width", "125px");
        $("#teams-vs").hide();
        $("#info-tp").show();
        Y.spectator(false);
        N.isSpectator = false;
        $(".minimap-button").each(function () {
            $(this).hide();
        });
    }
    static play() {
        this.close();
        H.o_ZMLC__FGG_DmQ_mATW_Kqd_ZHJYBUkEDMRg();
    }
    static kWIhZs_Ff_VDDryOVOXTivmE() {
        s.close();
        i.close();
        u.close();
    }
    static toggle() {
        if (this.E__AUSKkw__EnLiqDeVjek_VfMyp_l_) {
            this.close();
        } else {
            this.open();
        }
    }
    static close() {
        this.E__AUSKkw__EnLiqDeVjek_VfMyp_l_ = false;
        this.div.fadeOut(250);
    }
    static open() {
        this.E__AUSKkw__EnLiqDeVjek_VfMyp_l_ = true;
        this.div.fadeIn(250);
    }
    static toggleStreammode() {
        if (this.streammode) {
            $("#nick, #tag, #tag2, #party-token, #skin, #skin2").removeClass("input-hidden");
            $("#streamMode").html("<i class='fa fa-eye'></i>");
            this.streammode = false;
            o.set("extras", "streammode", this.streammode);
        } else {
            $("#nick, #tag, #tag2, #party-token, #skin, #skin2").addClass("input-hidden");
            $("#streamMode").html("<i class='fa fa-eye-slash'></i>");
            this.streammode = true;
            o.set("extras", "streammode", this.streammode);
        }
    }
    static spectateModeTop() {
        if (!M.PDnW_YiUP_ilIgVcz_t_iwvmmJT && Z.bbK__VFfPoBbfF_b_FKZG && Z.ZKZ_w_DbZe_HhMUMcNJmLgvwZ_gK__r__fPMA) {
            T.topViewport();
            H.ZKZ_w_DbZe_HhMUMcNJmLgvwZ_gK__r__fPMA();
        }
    }
    static spectateModeMouse() {
        if (!(M.PDnW_YiUP_ilIgVcz_t_iwvmmJT || !Z.bbK__VFfPoBbfF_b_FKZG || Z.ZKZ_w_DbZe_HhMUMcNJmLgvwZ_gK__r__fPMA && !B.isTurnedOn)) {
            if (B.isTurnedOn) {
                B.target1.turnedOn = false;
                B.target2.turnedOn = false;
                T.mouseViewport();
            } else {
                H.ZKZ_w_DbZe_HhMUMcNJmLgvwZ_gK__r__fPMA();
                T.mouseViewport();
            }
        }
    }
    static spectateModeTarget() {
        if ("on" === i.targeting) {
            k.command("HSLO", n.current.notif.targeting_on);
        } else {
            k.command("HSLO", n.current.notif.targeting_off);
        }
    }
    static versionCheck() {
        const t_ = o.get("extras", "version");
        if ("5.0.1" !== t_) {
            o.set("extras", "version", "5.0.1");
            o.set("extras", "openedChangelog", false);
            $("#anouncement").fadeIn(250);
        }
    }
}
class F {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.AgJoGcs_Dj_UYxVQhB_i = new Map;
        this._lZB__ml_T_bVtWhzdIxiJ_JgOS = new Map;
        this.viewArea = {
            DQ__RLVfMX__sNtXsMQEEgIAbY: 0,
            U_xufzeSJl_d_xqNxKfRppgJfk_C_Ln: 0,
            vPzXvUJeuyxKdWiKyZDcEBmy_rJR: 0,
            gIcO__Ch_te__GlzXwSsain_: 0
        };
        this.kphn_EXXwmJRxnH__YKcCbF = [];
        this.food = [];
        this.xd_LULKZmorBVR_t_s_zHibfubt_ = new Map;
        W._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        Q._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
    }
    static GTJ_Z_GBYToqmnGM_lGVtg_FyQ_fcWs_X_HuL() {
        const t_ = "on" === i.opponentRings && M.PDnW_YiUP_ilIgVcz_t_iwvmmJT;
        const newVal = "on" === i.virusRange && M.PDnW_YiUP_ilIgVcz_t_iwvmmJT;
        this.food = [];
        this.kphn_EXXwmJRxnH__YKcCbF = [];
        W._Wh_NVOXv__lhD_jewWnmmu_uN_qCbt_cGDYjq();
        Q._Wh_NVOXv__lhD_jewWnmmu_uN_qCbt_cGDYjq();
        this.AgJoGcs_Dj_UYxVQhB_i.forEach((data, key) => {
            if (data.fadeStartTime) {
                const i_ = (e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp - data.fadeStartTime) / i.CellAnimation;
                if (1 < i_) {
                    return void this.AgJoGcs_Dj_UYxVQhB_i["delete"](key);
                }
                if (!data.WHolqulbwp__h_AEp_io_d && 5e3 < e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp - data.Ozp_Q_uYLgmNmgSe__lMdakzunaqo_kKZU) {
                    return void this.AgJoGcs_Dj_UYxVQhB_i["delete"](key);
                }
            }
            if (this._v_nF__RCLIvvhCpgERbMXmqadJGX_V_s_ONUmG(data)) {
                if (data.WHolqulbwp__h_AEp_io_d) {
                    this.food.push(data);
                } else {
                    this.kphn_EXXwmJRxnH__YKcCbF.push(data);
                    if (t_ && !data.olP_fXeXiO_TVbocyOH_jW) {
                        W.segregator(data);
                    }
                    if (newVal && data.olP_fXeXiO_TVbocyOH_jW) {
                        Q.add(data);
                    }
                }
            }
        });
        this.kphn_EXXwmJRxnH__YKcCbF.sort((b, a) => {
            const last_len = b.ojQ_m_l_PvKL_PiS_lX_Bc_xFUD_tQPvQ;
            const from_last = a.ojQ_m_l_PvKL_PiS_lX_Bc_xFUD_tQPvQ;
            return last_len === from_last ? a.id - b.id : last_len - from_last;
        });
    }
    static _Fw_zm_Pe__Xh__oDYOaFeC_m_Ec(deploymentsVersions) {
        return this.AgJoGcs_Dj_UYxVQhB_i.get(deploymentsVersions);
    }
    static Fs__pmF_zOB_oU_I_SDfPIzJzr_Jwh__Z_l(key) {
        const value = new U(key);
        return this.AgJoGcs_Dj_UYxVQhB_i.set(key, value), value;
    }
    static _G_FkGu__Ysqm_aCLJpncYbfkFFdIQP_eV_MhB(fi, obj) {
        const state = this.AgJoGcs_Dj_UYxVQhB_i.get(obj);
        const winBounds = this.AgJoGcs_Dj_UYxVQhB_i.get(fi);
        return state ? "on" === i.eatAnimation && winBounds ? void(state.GTJ_Z_GBYToqmnGM_lGVtg_FyQ_fcWs_X_HuL(), state.x = winBounds.x, state.y = winBounds.y, state.YlYfs_BFUto_Zc_k_W_kU_ikDV_a__N = state.ojQ_m_l_PvKL_PiS_lX_Bc_xFUD_tQPvQ, state.fadeStartTime = e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp, state.Ozp_Q_uYLgmNmgSe__lMdakzunaqo_kKZU = e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp, state.Wu_RLJ_ZwC_QfnJHmXIk__K____va_IYrR &&
            this._lZB__ml_T_bVtWhzdIxiJ_JgOS["delete"](obj), state.WHolqulbwp__h_AEp_io_d && this.AgJoGcs_Dj_UYxVQhB_i["delete"](obj)) : (this._lZB__ml_T_bVtWhzdIxiJ_JgOS["delete"](obj), void this.AgJoGcs_Dj_UYxVQhB_i["delete"](obj)) : void 0;
    }
    static ECRNXrwPs_PcNjJKpaFj__UNTZ___JWLfzGXFRA(key) {
        const state = this.AgJoGcs_Dj_UYxVQhB_i.get(key);
        if (state.Wu_RLJ_ZwC_QfnJHmXIk__K____va_IYrR) {
            this._lZB__ml_T_bVtWhzdIxiJ_JgOS["delete"](key);
        }
        this.AgJoGcs_Dj_UYxVQhB_i["delete"](key);
        if (!(state.WHolqulbwp__h_AEp_io_d || "on" !== i.eatAnimation)) {
            state.GTJ_Z_GBYToqmnGM_lGVtg_FyQ_fcWs_X_HuL();
            state.fadeStartTime = e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp;
            state.Ozp_Q_uYLgmNmgSe__lMdakzunaqo_kKZU = e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp;
            this.AgJoGcs_Dj_UYxVQhB_i.set(key + ":removed", state);
        }
    }
    static _v_nF__RCLIvvhCpgERbMXmqadJGX_V_s_ONUmG(canCreateDiscussions) {
        const o_ = Z._PoBDjeVk_b_XRUvg_lJUu__zmzbP;
        return !(canCreateDiscussions.AqkfEkZ_MHBCjZzBz__UWG_X_B_ArFO + canCreateDiscussions.ojQ_m_l_PvKL_PiS_lX_Bc_xFUD_tQPvQ < o_.DQ__RLVfMX__sNtXsMQEEgIAbY) && !(canCreateDiscussions.AqkfEkZ_MHBCjZzBz__UWG_X_B_ArFO - canCreateDiscussions.ojQ_m_l_PvKL_PiS_lX_Bc_xFUD_tQPvQ > o_.vPzXvUJeuyxKdWiKyZDcEBmy_rJR) && !(canCreateDiscussions.QfPG__AEfcA_u_T_pjMCVYAyl + canCreateDiscussions.ojQ_m_l_PvKL_PiS_lX_Bc_xFUD_tQPvQ < o_.U_xufzeSJl_d_xqNxKfRppgJfk_C_Ln) && !(canCreateDiscussions.QfPG__AEfcA_u_T_pjMCVYAyl - canCreateDiscussions.ojQ_m_l_PvKL_PiS_lX_Bc_xFUD_tQPvQ >
            o_.gIcO__Ch_te__GlzXwSsain_);
    }
    static newTeamPlayer(key) {
        const value = new P(key);
        return this.xd_LULKZmorBVR_t_s_zHibfubt_.set(key, value), value;
    }
    static getTeamPlayer(deploymentsVersions) {
        return this.xd_LULKZmorBVR_t_s_zHibfubt_.get(deploymentsVersions) || {};
    }
    static removeTeamPlayer(key) {
        this.xd_LULKZmorBVR_t_s_zHibfubt_["delete"](key);
    }
}
class U {
    constructor(component) {
        this.id = component;
        this.x = 0;
        this.y = 0;
        this.YlYfs_BFUto_Zc_k_W_kU_ikDV_a__N = 0;
        this._hWIBDAxRoXlAhxqqnSA_C_bSDMmAzV_CeDLlb = {
            r: 0,
            g: 0,
            b: 0
        };
        this._GSxfoaFaAL_jtI_jw_TcIaUZJs_C_cNlwt = "#555";
        this.skin = "";
        this.VfhAnHeYks_xo_YWdDHg_gMQ_ = 0;
        this.__Yyx_Scf_IrVmT__BiNNqf___krb = "";
        this.Wu_RLJ_ZwC_QfnJHmXIk__K____va_IYrR = false;
        this._fn___ztljQxUn_W_hZqEJn = 0;
        this.WHolqulbwp__h_AEp_io_d = false;
        this.Z_bKw_lJfbX_dTXP_MXTiOGqxVkB = false;
        this.olP_fXeXiO_TVbocyOH_jW = false;
        this.__OluYOvR_CPjXySaAIbllXl = false;
        this.friendID = 0;
        this._gWIaCbzSVrk_OJr__hRJ_IKeUB = true;
        this.GN_im__j_CmIPqtGAV_p_f_nMBM_ = "";
        this._fn___ztljQxUn_W_hZqEJn = 0;
        this.AqkfEkZ_MHBCjZzBz__UWG_X_B_ArFO = 0;
        this.QfPG__AEfcA_u_T_pjMCVYAyl = 0;
        this.ojQ_m_l_PvKL_PiS_lX_Bc_xFUD_tQPvQ = 0;
        this.LzlsbQuHFdcR_Q_PS_UQBPM = 0;
        this.tVWYDAD_dYVjgQ___moF__Xv_xieG = 0;
        this.AJtPiYft__DHSFlJfAfGd = 0;
        this.Ozp_Q_uYLgmNmgSe__lMdakzunaqo_kKZU = 0;
        this.fadeStartTime = 0;
    }
    set nick(value) {
        this.__Yyx_Scf_IrVmT__BiNNqf___krb = value;
        const i = value.indexOf("\u0001");
        if (0 <= i && value.length >= i + 1) {
            const a_ = value.charCodeAt(i + 1);
            if (12000 < a_) {
                this.VfhAnHeYks_xo_YWdDHg_gMQ_ = a_;
            }
        }
    }
    get nick() {
        return this.__Yyx_Scf_IrVmT__BiNNqf___krb;
    }
    get mass() {
        return 0 | this.ojQ_m_l_PvKL_PiS_lX_Bc_xFUD_tQPvQ * this.ojQ_m_l_PvKL_PiS_lX_Bc_xFUD_tQPvQ / 100;
    }
    get staticMass() {
        return 0 | this.YlYfs_BFUto_Zc_k_W_kU_ikDV_a__N * this.YlYfs_BFUto_Zc_k_W_kU_ikDV_a__N / 100;
    }
    _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q(branchData, beforeZero, afterZero) {
        this.LzlsbQuHFdcR_Q_PS_UQBPM = branchData;
        this.tVWYDAD_dYVjgQ___moF__Xv_xieG = beforeZero;
        this.AJtPiYft__DHSFlJfAfGd = afterZero;
        this.AqkfEkZ_MHBCjZzBz__UWG_X_B_ArFO = branchData;
        this.QfPG__AEfcA_u_T_pjMCVYAyl = beforeZero;
        this.ojQ_m_l_PvKL_PiS_lX_Bc_xFUD_tQPvQ = afterZero;
        this._gWIaCbzSVrk_OJr__hRJ_IKeUB = false;
    }
    D_uNpsHOaqYcDCWMwBUbsc_nUMP_sUk_jeq_J(routeTag, tipPercentOffset, dotOffset) {
        this._hWIBDAxRoXlAhxqqnSA_C_bSDMmAzV_CeDLlb.r = routeTag;
        this._hWIBDAxRoXlAhxqqnSA_C_bSDMmAzV_CeDLlb.g = tipPercentOffset;
        this._hWIBDAxRoXlAhxqqnSA_C_bSDMmAzV_CeDLlb.b = dotOffset;
        this._GSxfoaFaAL_jtI_jw_TcIaUZJs_C_cNlwt = "#" + (16777216 + (routeTag << 16) + (tipPercentOffset << 8) + dotOffset).toString(16).slice(1);
    }
    fvoVwPkOYIJdRdgnnmalmATAmF() {
        const paramsWithDefault = [255, 7, 0 | 255 * Math.random()];
        paramsWithDefault.sort(() => {
            return 0.5 - Math.random();
        });
        this.D_uNpsHOaqYcDCWMwBUbsc_nUMP_sUk_jeq_J(paramsWithDefault[0], paramsWithDefault[1], paramsWithDefault[2]);
    }
    YXOe_f_u_e_JA_p_e_Sh_() {
        const journey = e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp - this.Ozp_Q_uYLgmNmgSe__lMdakzunaqo_kKZU;
        let cos = journey / i.CellAnimation;
        return cos = 0 > cos ? 0 : 1 < cos ? 1 : cos, this.AqkfEkZ_MHBCjZzBz__UWG_X_B_ArFO = cos * (this.x - this.LzlsbQuHFdcR_Q_PS_UQBPM) + this.LzlsbQuHFdcR_Q_PS_UQBPM, this.QfPG__AEfcA_u_T_pjMCVYAyl = cos * (this.y - this.tVWYDAD_dYVjgQ___moF__Xv_xieG) + this.tVWYDAD_dYVjgQ___moF__Xv_xieG, this.ojQ_m_l_PvKL_PiS_lX_Bc_xFUD_tQPvQ = cos * (this.YlYfs_BFUto_Zc_k_W_kU_ikDV_a__N - this.AJtPiYft__DHSFlJfAfGd) + this.AJtPiYft__DHSFlJfAfGd, cos;
    }
    GTJ_Z_GBYToqmnGM_lGVtg_FyQ_fcWs_X_HuL() {
        this.YXOe_f_u_e_JA_p_e_Sh_();
        this.LzlsbQuHFdcR_Q_PS_UQBPM = this.AqkfEkZ_MHBCjZzBz__UWG_X_B_ArFO;
        this.tVWYDAD_dYVjgQ___moF__Xv_xieG = this.QfPG__AEfcA_u_T_pjMCVYAyl;
        this.AJtPiYft__DHSFlJfAfGd = this.ojQ_m_l_PvKL_PiS_lX_Bc_xFUD_tQPvQ;
    }
    get dCLa_EBM_UzuIZDY__LfPe() {
        return this.nick + this._GSxfoaFaAL_jtI_jw_TcIaUZJs_C_cNlwt;
    }
    get Hzyw_YrIJF_kaw_lij_POds__IM_t_raLlIO() {
        return 1 > this.__Yyx_Scf_IrVmT__BiNNqf___krb.length;
    }
}
class M {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.__Yyx_Scf_IrVmT__BiNNqf___krb = $("#nick").val();
        this.M__yreusZIE__W_O_jtI_tntEYH_GiicnIvMUui = $("#skin").val();
        this._skin2 = $("#skin2").val();
        this.WOzhImClrLB_WZQYznqvVbs = $("#tag").val();
        this.nHd_IA_QBcgc_cbXPRy_WJPIs_dsiJXz_cR_ = {
            r: 0,
            g: 0,
            b: 0
        };
        this._GSxfoaFaAL_jtI_jw_TcIaUZJs_C_cNlwt = "#000";
        this.zWTFTqE___RncrOIalswE_TN__G_ = false;
        this.sWOu_eQ_xJ__hT_EDCng_VS_HpApJKGC = false;
        this.x = 0;
        this.y = 0;
        this.speed = 0;
        this._SMzQYCxtDZYLrWqJsAyMCUG_cdjAat_rBMTZ_ = 0;
        this.mass = 0;
        this.Uk__NI_beQr_EiY__Tw_a_K_JP___bxNt_jF = 0;
        this.score = 0;
        this.DEOh_sSao_HsQV_nRjFK_SEbXBDsiln__q_D = false;
        this.uA_Uj_g_g_PmSmqip_A_S___YZnpKr_H_HHaM = {
            x: 100,
            y: 100
        };
        this.Pl___Ixz_SGS__y__cajRM = 1;
    }
    static GTJ_Z_GBYToqmnGM_lGVtg_FyQ_fcWs_X_HuL() {
        if (0 < this.nMrmp_KlgWkSEMRi_GhY_DnRKqQ_MapTQZUTH) {
            this.playing();
        } else {
            this._r_MGYMdKrOQJlcTkHwljYO__HJmM_Ut_uwYt();
        }
        this.updateData();
    }
    static playing() {
        if (!this.PDnW_YiUP_ilIgVcz_t_iwvmmJT) {
            this.PDnW_YiUP_ilIgVcz_t_iwvmmJT = true;
            for (const t_ of F._lZB__ml_T_bVtWhzdIxiJ_JgOS.values()) {
                this._hWIBDAxRoXlAhxqqnSA_C_bSDMmAzV_CeDLlb = t_._hWIBDAxRoXlAhxqqnSA_C_bSDMmAzV_CeDLlb;
                this._GSxfoaFaAL_jtI_jw_TcIaUZJs_C_cNlwt = t_._GSxfoaFaAL_jtI_jw_TcIaUZJs_C_cNlwt;
                break;
            }
        }
    }
    static updateData() {
        if (this.PDnW_YiUP_ilIgVcz_t_iwvmmJT) {
            let x = 0;
            let y = 0;
            let height = 0;
            if (this.mass = 0, this.Uk__NI_beQr_EiY__Tw_a_K_JP___bxNt_jF = 0, this.PDnW_YiUP_ilIgVcz_t_iwvmmJT) {
                for (const node of F._lZB__ml_T_bVtWhzdIxiJ_JgOS.values()) {
                    node.YXOe_f_u_e_JA_p_e_Sh_();
                    x = x + node.AqkfEkZ_MHBCjZzBz__UWG_X_B_ArFO / this.totalPieceCount;
                    y = y + node.QfPG__AEfcA_u_T_pjMCVYAyl / this.totalPieceCount;
                    height = height + node.ojQ_m_l_PvKL_PiS_lX_Bc_xFUD_tQPvQ;
                    this.mass += node.mass;
                    if (this.Uk__NI_beQr_EiY__Tw_a_K_JP___bxNt_jF < node.mass) {
                        this.Uk__NI_beQr_EiY__Tw_a_K_JP___bxNt_jF = node.mass;
                    }
                }
            }
            if (!this.DEOh_sSao_HsQV_nRjFK_SEbXBDsiln__q_D) {
                const lightI = this.x - x;
                const lightJ = this.y - y;
                const speedChange = Math.sqrt(lightI * lightI + lightJ * lightJ);
                this.speed += speedChange;
                this.x = x;
                this.y = y;
            }
            if (this.score < this.mass) {
                this.score = this.mass;
            }
            const angleToDraw = Math.pow(Math.min(64 / height, 1), 0.4);
            const t = Math.max(window.innerWidth / 1920, window.innerHeight / 1080);
            Z._kGOBhfgXWf_Ta_PD_NAsPaAV_c = angleToDraw * t;
        }
    }
    static _r_MGYMdKrOQJlcTkHwljYO__HJmM_Ut_uwYt() {
        if (this.PDnW_YiUP_ilIgVcz_t_iwvmmJT) {
            this.PDnW_YiUP_ilIgVcz_t_iwvmmJT = false;
            this.score = 0;
            this.mass = 0;
            this.Uk__NI_beQr_EiY__Tw_a_K_JP___bxNt_jF = 0;
            this.DEOh_sSao_HsQV_nRjFK_SEbXBDsiln__q_D = false;
            this.uA_Uj_g_g_PmSmqip_A_S___YZnpKr_H_HHaM.x = this.x;
            this.uA_Uj_g_g_PmSmqip_A_S___YZnpKr_H_HHaM.y = this.y;
            window.aiptag.cmd.display.push(function () {
                window.aipDisplayTag.refresh("astr-io_300x250");
            });
            A.open();
        }
    }
    static set nick(canCreateDiscussions) {
        this.__Yyx_Scf_IrVmT__BiNNqf___krb = canCreateDiscussions;
        Y.nick();
        H.nick();
    }
    static get nick() {
        return this.__Yyx_Scf_IrVmT__BiNNqf___krb.substring(0, 15);
    }
    static set skin(canCreateDiscussions) {
        this.M__yreusZIE__W_O_jtI_tntEYH_GiicnIvMUui = canCreateDiscussions;
        H.skin();
    }
    static get skin() {
        return this.M__yreusZIE__W_O_jtI_tntEYH_GiicnIvMUui;
    }
    static set skin2(canCreateDiscussions) {
        this._skin2 = canCreateDiscussions;
        H.skin();
    }
    static get skin2() {
        return this._skin2;
    }
    static set tag(canCreateDiscussions) {
        this.WOzhImClrLB_WZQYznqvVbs = canCreateDiscussions;
        Y.tag();
        H.team();
    }
    static get tag() {
        return this.WOzhImClrLB_WZQYznqvVbs;
    }
    static set _hWIBDAxRoXlAhxqqnSA_C_bSDMmAzV_CeDLlb(clearColor) {
        this.nHd_IA_QBcgc_cbXPRy_WJPIs_dsiJXz_cR_.r = clearColor.r;
        this.nHd_IA_QBcgc_cbXPRy_WJPIs_dsiJXz_cR_.g = clearColor.g;
        this.nHd_IA_QBcgc_cbXPRy_WJPIs_dsiJXz_cR_.b = clearColor.b;
        Y.color();
    }
    static get _hWIBDAxRoXlAhxqqnSA_C_bSDMmAzV_CeDLlb() {
        return this.nHd_IA_QBcgc_cbXPRy_WJPIs_dsiJXz_cR_;
    }
    static get PDnW_YiUP_ilIgVcz_t_iwvmmJT() {
        return this.zWTFTqE___RncrOIalswE_TN__G_;
    }
    static set PDnW_YiUP_ilIgVcz_t_iwvmmJT(canCreateDiscussions) {
        this.zWTFTqE___RncrOIalswE_TN__G_ = canCreateDiscussions;
        Y.JUGUFltMcs__Gw_dHC_TV_a();
    }
    static get _fn___ztljQxUn_W_hZqEJn() {
        return this.Pl___Ixz_SGS__y__cajRM;
    }
    static set _fn___ztljQxUn_W_hZqEJn(canCreateDiscussions) {
        this.Pl___Ixz_SGS__y__cajRM = 1 === canCreateDiscussions || 2 === canCreateDiscussions ? canCreateDiscussions : 1;
        H.multiboxSwitch();
    }
    static get dCLa_EBM_UzuIZDY__LfPe() {
        return this.nick + this._GSxfoaFaAL_jtI_jw_TcIaUZJs_C_cNlwt;
    }
    static get YbHOoWOs_boonvAP_pP_Oyf() {
        return L.sGG_dRFtKg_un____W_zVOxApsVZ_vqv_BazV_E(this.x, this.y);
    }
    static get nMrmp_KlgWkSEMRi_GhY_DnRKqQ_MapTQZUTH() {
        return F._lZB__ml_T_bVtWhzdIxiJ_JgOS.size;
    }
    static get totalPieceCount() {
        return this.nMrmp_KlgWkSEMRi_GhY_DnRKqQ_MapTQZUTH;
    }
}
class P {
    constructor(component) {
        this.id = component;
        this._gWIaCbzSVrk_OJr__hRJ_IKeUB = 2;
        this.x = L.center.x;
        this.y = L.center.y;
        this.PDnW_YiUP_ilIgVcz_t_iwvmmJT = 0;
        this.mass = 0;
        this.nick = "";
        this.skin = "";
        this._GSxfoaFaAL_jtI_jw_TcIaUZJs_C_cNlwt = "#000";
        this.sWOu_eQ_xJ__hT_EDCng_VS_HpApJKGC = false;
        this.AqkfEkZ_MHBCjZzBz__UWG_X_B_ArFO = L.center.x;
        this.QfPG__AEfcA_u_T_pjMCVYAyl = L.center.y;
        this.ufkCbpdfvlZBqQ_IEkPv_Sy_miEIPJ = e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp;
        this.team = 1;
    }
    get dCLa_EBM_UzuIZDY__LfPe() {
        return ":party" === A.gMode ? this.nick + this._GSxfoaFaAL_jtI_jw_TcIaUZJs_C_cNlwt : this.nick;
    }
    get YbHOoWOs_boonvAP_pP_Oyf() {
        return L.sGG_dRFtKg_un____W_zVOxApsVZ_vqv_BazV_E(this.x, this.y);
    }
    YXOe_f_u_e_JA_p_e_Sh_() {
        let retl = (e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp - this.ufkCbpdfvlZBqQ_IEkPv_Sy_miEIPJ) / 1e3;
        retl = 1 < retl ? 1 : 0 > retl ? 0 : retl;
        this.AqkfEkZ_MHBCjZzBz__UWG_X_B_ArFO += (this.x - this.AqkfEkZ_MHBCjZzBz__UWG_X_B_ArFO) * retl;
        this.QfPG__AEfcA_u_T_pjMCVYAyl += (this.y - this.QfPG__AEfcA_u_T_pjMCVYAyl) * retl;
        this.ufkCbpdfvlZBqQ_IEkPv_Sy_miEIPJ = e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp;
    }
    get _l_QQdHME_ypM_J___GDvqb_CfC_() {
        return (this.AqkfEkZ_MHBCjZzBz__UWG_X_B_ArFO - L.DQ__RLVfMX__sNtXsMQEEgIAbY) / L.FSuy_wC_Mu_HW_iAyvaeWhk_N * y.size;
    }
    get vLI_eBty_xnAG_vx_kRvB_() {
        return (this.QfPG__AEfcA_u_T_pjMCVYAyl - L.U_xufzeSJl_d_xqNxKfRppgJfk_C_Ln) / L.FSuy_wC_Mu_HW_iAyvaeWhk_N * y.size;
    }
}
class L {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.DQ__RLVfMX__sNtXsMQEEgIAbY = 0;
        this.U_xufzeSJl_d_xqNxKfRppgJfk_C_Ln = 0;
        this.vPzXvUJeuyxKdWiKyZDcEBmy_rJR = 15000;
        this.gIcO__Ch_te__GlzXwSsain_ = 15000;
        this.FSuy_wC_Mu_HW_iAyvaeWhk_N = 15000;
        this.center = {
            x: 0,
            y: 0
        };
        this._oCzHBmiD__god__oGNcI = false;
    }
    static GTJ_Z_GBYToqmnGM_lGVtg_FyQ_fcWs_X_HuL(typesToFuzzOnEach, index, askConfirm, basemapLayerId) {
        this.DQ__RLVfMX__sNtXsMQEEgIAbY = typesToFuzzOnEach;
        this.U_xufzeSJl_d_xqNxKfRppgJfk_C_Ln = index;
        this.vPzXvUJeuyxKdWiKyZDcEBmy_rJR = askConfirm;
        this.gIcO__Ch_te__GlzXwSsain_ = basemapLayerId;
        this.FSuy_wC_Mu_HW_iAyvaeWhk_N = askConfirm - typesToFuzzOnEach;
        this.center.x = askConfirm + typesToFuzzOnEach >> 1;
        this.center.y = basemapLayerId + index >> 1;
        if (!this._oCzHBmiD__god__oGNcI) {
            Z.x = this.center.x;
            Z.y = this.center.y;
            this._oCzHBmiD__god__oGNcI = true;
        }
    }
    static sGG_dRFtKg_un____W_zVOxApsVZ_vqv_BazV_E(formatters, customFormatters) {
        let a = 0 | (formatters - this.DQ__RLVfMX__sNtXsMQEEgIAbY) / (this.FSuy_wC_Mu_HW_iAyvaeWhk_N / 5);
        let b = 0 | (customFormatters - this.U_xufzeSJl_d_xqNxKfRppgJfk_C_Ln) / (this.FSuy_wC_Mu_HW_iAyvaeWhk_N / 5);
        return a = 0 > a ? 0 : 4 < a ? 4 : a, b = 0 > b ? 0 : 4 < b ? 4 : b, String.fromCharCode(65 + b) + (a + 1);
    }
}
class Z {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.x = 0;
        this.y = 0;
        this.Sx_l__mkjDQ__yrnoX_rDVi__RKkXi = 1;
        this._kGOBhfgXWf_Ta_PD_NAsPaAV_c = 1;
        this.EgIT_b_BqyckZar_B_qARQPewHAIUUVxpYUoz_ = 1;
        this._PoBDjeVk_b_XRUvg_lJUu__zmzbP = {
            DQ__RLVfMX__sNtXsMQEEgIAbY: -960,
            vPzXvUJeuyxKdWiKyZDcEBmy_rJR: 960,
            U_xufzeSJl_d_xqNxKfRppgJfk_C_Ln: -540,
            gIcO__Ch_te__GlzXwSsain_: 540
        };
        this.ytdf_POk_jale_VNaPXFWCeyu_sjmeZ = {
            x: 0,
            y: 0
        };
        this._isSpectating = false;
        this._freeSpectate = false;
        B._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
    }
    static get bbK__VFfPoBbfF_b_FKZG() {
        return this._isSpectating;
    }
    static get ZKZ_w_DbZe_HhMUMcNJmLgvwZ_gK__r__fPMA() {
        return this._freeSpectate;
    }
    static set bbK__VFfPoBbfF_b_FKZG(canCreateDiscussions) {
        this._isSpectating = canCreateDiscussions;
        if (canCreateDiscussions) {
            T.show();
        } else {
            T.hide();
        }
    }
    static set ZKZ_w_DbZe_HhMUMcNJmLgvwZ_gK__r__fPMA(canCreateDiscussions) {
        this._freeSpectate = canCreateDiscussions;
        if (canCreateDiscussions) {
            T.mouseViewport();
        } else {
            T.topViewport();
        }
    }
    static GTJ_Z_GBYToqmnGM_lGVtg_FyQ_fcWs_X_HuL() {
        if (this.bbK__VFfPoBbfF_b_FKZG) {
            B.GTJ_Z_GBYToqmnGM_lGVtg_FyQ_fcWs_X_HuL();
        }
        this.xQeHC_k___X_eI_hVvzdl_KSGr__M();
        this.CUzmiUZ_fR_i_A_Y_d_kTy_qTIYB();
    }
    static xQeHC_k___X_eI_hVvzdl_KSGr__M() {
        if (M.PDnW_YiUP_ilIgVcz_t_iwvmmJT) {
            this.x += (M.x - this.x) / i.cameraSpeed;
            this.y += (M.y - this.y) / i.cameraSpeed;
        } else {
            if (this.bbK__VFfPoBbfF_b_FKZG) {
                this.x = (29 * this.x + this.ytdf_POk_jale_VNaPXFWCeyu_sjmeZ.x) / 30;
                this.y = (29 * this.y + this.ytdf_POk_jale_VNaPXFWCeyu_sjmeZ.y) / 30;
            }
        }
    }
    static CUzmiUZ_fR_i_A_Y_d_kTy_qTIYB() {
        let t_ = this.Sx_l__mkjDQ__yrnoX_rDVi__RKkXi;
        if ("on" === i.autoZoom) {
            t_ = t_ * this._kGOBhfgXWf_Ta_PD_NAsPaAV_c;
        }
        this.EgIT_b_BqyckZar_B_qARQPewHAIUUVxpYUoz_ += (t_ - this.EgIT_b_BqyckZar_B_qARQPewHAIUUVxpYUoz_) / 8;
        const dx = __.canvas.width / 2 / this.EgIT_b_BqyckZar_B_qARQPewHAIUUVxpYUoz_;
        const dy = __.canvas.height / 2 / this.EgIT_b_BqyckZar_B_qARQPewHAIUUVxpYUoz_;
        const n_ = __.canvas.width / 2 / this.EgIT_b_BqyckZar_B_qARQPewHAIUUVxpYUoz_;
        const i_ = __.canvas.height / 2 / this.EgIT_b_BqyckZar_B_qARQPewHAIUUVxpYUoz_;
        this._PoBDjeVk_b_XRUvg_lJUu__zmzbP.DQ__RLVfMX__sNtXsMQEEgIAbY = Math.max(-dx + this.x, L.DQ__RLVfMX__sNtXsMQEEgIAbY);
        this._PoBDjeVk_b_XRUvg_lJUu__zmzbP.vPzXvUJeuyxKdWiKyZDcEBmy_rJR = Math.min(dx + this.x, L.vPzXvUJeuyxKdWiKyZDcEBmy_rJR);
        this._PoBDjeVk_b_XRUvg_lJUu__zmzbP.U_xufzeSJl_d_xqNxKfRppgJfk_C_Ln = Math.max(-dy + this.y, L.U_xufzeSJl_d_xqNxKfRppgJfk_C_Ln);
        this._PoBDjeVk_b_XRUvg_lJUu__zmzbP.gIcO__Ch_te__GlzXwSsain_ = Math.min(dy + this.y, L.gIcO__Ch_te__GlzXwSsain_);
    }
}
const X = new class {
    constructor() {
        this.UPmg_Adl_YOqoYlQEB__KZlZi__OIeCea = new Map;
        this.__Ep_QqhaF_cxBBlHceNLgIk__SO_MKCQCbmqfT = new Map;
        this.of_LhUBPI_gsI_zoFERBTrcHtG = 1e3;
        this.fK_FgtPyMplO__boeJ_bWhoWj_AZdaWDHN = 500;
        this.SkfQaOHRa_a_BM__rn___LgnJlr_aYLuwC_u = this.b_Y_tvdDOQLDdbv__g_v_ovFHpLt_Z();
        this._vv_O_Fo_Cm_Ti_TnLAxtbN = this.b_Y_tvdDOQLDdbv__g_v_ovFHpLt_Z();
        this.r_hcBMZyGWtZQgW_ax__yUjB_ = [];
    }
    nick(args) {
        if (args.Hzyw_YrIJF_kaw_lij_POds__IM_t_raLlIO || this.Ujb___XsIr___Pb_CIy__xMDX(args)) {
            return false;
        }
        const phpr = this.UPmg_Adl_YOqoYlQEB__KZlZi__OIeCea.get(args.nick) || this.SWCNUkGHAvTNTjUF__jaB_tZ_Oe(args.nick);
        phpr.Xgy__zMdp_lZ_fJ_pqAi__XJfH_Z_ = e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp;
        const id = 0 | Math.min(this.IYVdP_ZDoBKOr_kZ_xUaW__H_R(args.YlYfs_BFUto_Zc_k_W_kU_ikDV_a__N) * (u.cellNickSize / 100) / 200, 7);
        const nick = phpr.level[id];
        if (nick) {
            return nick;
        }
        const canvas = this._Mpr_gM_L__f_NnJ_BmV_P_qHQWtvi_LB_();
        const ctx = canvas.getContext("2d");
        const artistTrack = 200 * (id + 1) / 4;
        if (canvas.height = 0 | 1.1 * artistTrack, canvas.width = 0 | 1.1 * this.T__OsLE_tWj_rjkjaNTE_kSWlXy(args.nick, artistTrack), ctx.font = "500 " + (0 | artistTrack) + "px " + u.nickFont, ctx.textBaseline = "middle", ctx.textAlign = "center", "normal" === i.nickShadow) {
            ctx.strokeStyle = u.nickStrokeColor;
            ctx.lineWidth = 6 * (id + 1);
            ctx.strokeText(args.nick, canvas.width >> 1, canvas.height >> 1);
        } else {
            if ("performance" === i.nickShadow) {
                ctx.fillStyle = u.nickStrokeColor;
                ctx.globalAlpha = 0.75;
                const xWidth = 0 | canvas.width / 1.1;
                const height = 0 | canvas.height / 1.1;
                ctx.fillRect(canvas.width - xWidth >> 1, canvas.height - height >> 1, xWidth, height);
                ctx.globalAlpha = 1;
            }
        }
        return ctx.fillStyle = u.nickColor, ctx.fillText(args.nick, canvas.width >> 1, canvas.height >> 1), phpr.level[id] = canvas, canvas;
    }
    SWCNUkGHAvTNTjUF__jaB_tZ_Oe(key) {
        const value = new z;
        return this.UPmg_Adl_YOqoYlQEB__KZlZi__OIeCea.set(key, value), value;
    }
    T__OsLE_tWj_rjkjaNTE_kSWlXy(theChar, daysInterval) {
        const mmCoreSecondsDay = this.SkfQaOHRa_a_BM__rn___LgnJlr_aYLuwC_u.measureText(theChar).width;
        return mmCoreSecondsDay * daysInterval / 25;
    }
    J_l_bCI_om_tR_uqI_SdZRXX_HQsDvC() {
        this.UPmg_Adl_YOqoYlQEB__KZlZi__OIeCea.clear();
        this.SkfQaOHRa_a_BM__rn___LgnJlr_aYLuwC_u.font = "500 25px " + u.nickFont;
    }
    mass(body) {
        if (!body.olP_fXeXiO_TVbocyOH_jW && this.Ujb___XsIr___Pb_CIy__xMDX(body)) {
            return false;
        }
        const metadata = this.__Ep_QqhaF_cxBBlHceNLgIk__SO_MKCQCbmqfT.get(body.id) || this._okYjTf_P_LTsUVFdUGaurrS_YS(body.id);
        const docElm = "shortened" === i.cellMass;
        const index = docElm && 999 < body.staticMass ? (0 | body.staticMass / 100) / 10 + "k" : body.staticMass;
        const encoderPadding = this.IYVdP_ZDoBKOr_kZ_xUaW__H_R(body.YlYfs_BFUto_Zc_k_W_kU_ikDV_a__N);
        const reverseIsSingle = index !== metadata.URTXnOU_K_B_NL__TXyKVIT_Ji_hLrmvGR_cZw;
        const reverseValue = e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp - metadata.mKLIiOsMcqqUrom_WzbA_K_s_A > this.fK_FgtPyMplO__boeJ_bWhoWj_AZdaWDHN;
        const withoutDev = 1.1 < encoderPadding / metadata.pYGOXLXrB_XT__yOCewaW || reverseIsSingle && reverseValue;
        if (metadata.Xgy__zMdp_lZ_fJ_pqAi__XJfH_Z_ = e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp, !withoutDev && metadata.canvas) {
            return metadata.canvas;
        }
        if (!metadata.canvas) {
            metadata.canvas = this._Mpr_gM_L__f_NnJ_BmV_P_qHQWtvi_LB_();
        }
        const canvas = metadata.canvas;
        const ctx = canvas.getContext("2d");
        const artistTrack = 0 | encoderPadding / 3 * (u.cellMassSize / 100);
        if (canvas.height = 0 | 1.1 * artistTrack, canvas.width = 0 | 1.1 * this.MHts_tQmkcjg_qXGIZCzuwhmrG_(index, artistTrack), ctx.font = "500 " + artistTrack + "px " + u.massFont, ctx.textBaseline = "middle", ctx.textAlign = "center", "normal" === i.massShadow) {
            ctx.strokeStyle = u.massStrokeColor;
            ctx.lineWidth = 6 * artistTrack / 50;
            ctx.strokeText(index, canvas.width >> 1, canvas.height >> 1);
        } else {
            if ("performance" === i.massShadow) {
                ctx.fillStyle = u.massStrokeColor;
                ctx.globalAlpha = 0.75;
                const xWidth = 0 | canvas.width / 1.1;
                const height = 0 | canvas.height / 1.1;
                ctx.fillRect(canvas.width - xWidth >> 1, canvas.height - height >> 1, xWidth, height);
                ctx.globalAlpha = 1;
            }
        }
        return ctx.fillStyle = u.massColor, ctx.fillText(index, canvas.width >> 1, canvas.height >> 1), metadata.URTXnOU_K_B_NL__TXyKVIT_Ji_hLrmvGR_cZw = index, metadata.pYGOXLXrB_XT__yOCewaW = encoderPadding, metadata.mKLIiOsMcqqUrom_WzbA_K_s_A = e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp + metadata.mDGyX_SggBOTbSJghFbDOVx_M___JyL, canvas;
    }
    _okYjTf_P_LTsUVFdUGaurrS_YS(key) {
        const value = new K;
        return this.__Ep_QqhaF_cxBBlHceNLgIk__SO_MKCQCbmqfT.set(key, value), value;
    }
    MHts_tQmkcjg_qXGIZCzuwhmrG_(theChar, daysInterval) {
        const mmCoreSecondsDay = this._vv_O_Fo_Cm_Ti_TnLAxtbN.measureText(theChar).width;
        return mmCoreSecondsDay * daysInterval / 25;
    }
    ShmRWZPZ_P_v_g_LsGrONZ___gFViWizG_YqA() {
        this.__Ep_QqhaF_cxBBlHceNLgIk__SO_MKCQCbmqfT.clear();
        this._vv_O_Fo_Cm_Ti_TnLAxtbN.font = "500 25px " + u.massFont;
    }
    IYVdP_ZDoBKOr_kZ_xUaW__H_R(canCreateDiscussions) {
        return canCreateDiscussions * Z.EgIT_b_BqyckZar_B_qARQPewHAIUUVxpYUoz_;
    }
    Ujb___XsIr___Pb_CIy__xMDX(canCreateDiscussions) {
        return "on" === i.autoHideText && 20 > this.IYVdP_ZDoBKOr_kZ_xUaW__H_R(canCreateDiscussions.YlYfs_BFUto_Zc_k_W_kU_ikDV_a__N);
    }
    _Mpr_gM_L__f_NnJ_BmV_P_qHQWtvi_LB_() {
        const t_ = this.r_hcBMZyGWtZQgW_ax__yUjB_.shift() || document.createElement("canvas");
        return t_;
    }
    b_Y_tvdDOQLDdbv__g_v_ovFHpLt_Z() {
        const canvasWorker = document.createElement("canvas");
        const ctxT = canvasWorker.getContext("2d");
        return ctxT.font = "700 25px ubuntu", ctxT;
    }
    FXdxSpL_A_Ig_Jyqv_YbX_C_Go_NO_() {
        for (const [probeIdentifier, mSucc] of this.UPmg_Adl_YOqoYlQEB__KZlZi__OIeCea) {
            if (!(e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp - mSucc.Xgy__zMdp_lZ_fJ_pqAi__XJfH_Z_ < this.of_LhUBPI_gsI_zoFERBTrcHtG) && (this.UPmg_Adl_YOqoYlQEB__KZlZi__OIeCea["delete"](probeIdentifier), !(50 <= this.r_hcBMZyGWtZQgW_ax__yUjB_.length))) {
                const artistTrack = mSucc.level[0];
                const GET_AUTH_URL_TIMEOUT = mSucc.level[1];
                this.addForRecycle(artistTrack);
                this.addForRecycle(GET_AUTH_URL_TIMEOUT);
            }
        }
        for (const [key, _] of this.__Ep_QqhaF_cxBBlHceNLgIk__SO_MKCQCbmqfT) {
            if (!(e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp - _.Xgy__zMdp_lZ_fJ_pqAi__XJfH_Z_ < this.of_LhUBPI_gsI_zoFERBTrcHtG)) {
                if (this.__Ep_QqhaF_cxBBlHceNLgIk__SO_MKCQCbmqfT["delete"](key), 50 <= this.r_hcBMZyGWtZQgW_ax__yUjB_.length) {
                    return;
                }
                const artistTrack = _.canvas;
                this.addForRecycle(artistTrack);
            }
        }
    }
    addForRecycle(theadRSNextCell) {
        if (!(!theadRSNextCell || 50 <= this.r_hcBMZyGWtZQgW_ax__yUjB_.length)) {
            theadRSNextCell.width = 0;
            this.r_hcBMZyGWtZQgW_ax__yUjB_.push(theadRSNextCell);
        }
    }
};
class K {
    constructor() {
        this.Xgy__zMdp_lZ_fJ_pqAi__XJfH_Z_ = e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp;
        this.mDGyX_SggBOTbSJghFbDOVx_M___JyL = 0 | Math.random() * X.fK_FgtPyMplO__boeJ_bWhoWj_AZdaWDHN;
        this.URTXnOU_K_B_NL__TXyKVIT_Ji_hLrmvGR_cZw = 0;
        this.pYGOXLXrB_XT__yOCewaW = 0;
        this.mKLIiOsMcqqUrom_WzbA_K_s_A = e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp;
        this.canvas = null;
    }
}
class z {
    constructor() {
        this.Xgy__zMdp_lZ_fJ_pqAi__XJfH_Z_ = e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp;
        this.level = [null, null, null, null, null, null, null, null];
    }
}
class I {
    static VGuSmIg_DpT_VOUdWVShDcD() {
        if (!("off" === i.food)) {
            if ("monoColored" === i.food) {
                this.monoColored();
            } else {
                if ("rainbow" === i.food) {
                    this.rainbow();
                }
            }
        }
    }
    static monoColored() {
        const ctx = __.NCQOf__Wa__H_AN_o_WuQWFRC_U;
        const url_salt = u.foodSize;
        let index = F.food.length;
        const n_ = "on" === i.eatAnimation;
        ctx.fillStyle = u.foodColor;
        ctx.beginPath();
        for (; index--;) {
            const data = F.food[index];
            if (n_) {
                data.YXOe_f_u_e_JA_p_e_Sh_();
            }
            const i = data.ojQ_m_l_PvKL_PiS_lX_Bc_xFUD_tQPvQ + url_salt;
            ctx.moveTo(data.AqkfEkZ_MHBCjZzBz__UWG_X_B_ArFO + i, data.QfPG__AEfcA_u_T_pjMCVYAyl);
            ctx.arc(data.AqkfEkZ_MHBCjZzBz__UWG_X_B_ArFO, data.QfPG__AEfcA_u_T_pjMCVYAyl, i, 0, __._xBO_iva_u_Ovt_ev_y_OT_, true);
        }
        ctx.closePath();
        ctx.fill();
    }
    static rainbow() {
        const ctxfx = __.NCQOf__Wa__H_AN_o_WuQWFRC_U;
        const o_ = u.foodSize;
        let index = F.food.length;
        for (const n_ = "on" === i.eatAnimation; index--;) {
            const boom = F.food[index];
            const xw = boom.ojQ_m_l_PvKL_PiS_lX_Bc_xFUD_tQPvQ + o_;
            if (n_) {
                boom.YXOe_f_u_e_JA_p_e_Sh_();
            }
            ctxfx.fillStyle = boom._GSxfoaFaAL_jtI_jw_TcIaUZJs_C_cNlwt;
            ctxfx.beginPath();
            ctxfx.arc(boom.AqkfEkZ_MHBCjZzBz__UWG_X_B_ArFO, boom.QfPG__AEfcA_u_T_pjMCVYAyl, xw, 0, __._xBO_iva_u_Ovt_ev_y_OT_, true);
            ctxfx.closePath();
            ctxfx.fill();
        }
    }
}
class W {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.STE = [];
        this.smaller = [];
        this.same = [];
        this.bigger = [];
        this.biggerSTE = [];
        this.lineWidth = 10;
    }
    static segregator(th) {
        const costSum = th.mass / M.Uk__NI_beQr_EiY__Tw_a_K_JP___bxNt_jF;
        const gasSum = 1e3 < M.Uk__NI_beQr_EiY__Tw_a_K_JP___bxNt_jF ? 0.38 : 0.35;
        if (th.Wu_RLJ_ZwC_QfnJHmXIk__K____va_IYrR) {
            this.same.push(th);
        } else {
            if (2.5 < costSum) {
                this.biggerSTE.push(th);
            } else {
                if (1.25 < costSum) {
                    this.bigger.push(th);
                } else {
                    if (0.75 < costSum) {
                        this.same.push(th);
                    } else {
                        if (costSum > gasSum) {
                            this.smaller.push(th);
                        } else {
                            this.STE.push(th);
                        }
                    }
                }
            }
        }
    }
    static _Wh_NVOXv__lhD_jewWnmmu_uN_qCbt_cGDYjq() {
        this.STE = [];
        this.smaller = [];
        this.same = [];
        this.bigger = [];
        this.biggerSTE = [];
    }
    static VGuSmIg_DpT_VOUdWVShDcD() {
        const propertyName = i.opponentRings;
        if (!("off" === propertyName || Z.bbK__VFfPoBbfF_b_FKZG)) {
            const ctx = __.NCQOf__Wa__H_AN_o_WuQWFRC_U;
            this.lineWidth = 0 | Math.min(3 / Z.EgIT_b_BqyckZar_B_qARQPewHAIUUVxpYUoz_, 14);
            ctx.lineWidth = this.lineWidth;
            this.renderGroup(this.STE, "#76FF03");
            this.renderGroup(this.smaller, "#2196F3");
            this.renderGroup(this.same, "#555555");
            this.renderGroup(this.bigger, "#FF9800");
            this.renderGroup(this.biggerSTE, "#FD0000");
        }
    }
    static renderGroup($parent, color) {
        const ctx = __.NCQOf__Wa__H_AN_o_WuQWFRC_U;
        ctx.strokeStyle = color;
        ctx.beginPath();
        for (let $lastKeyPrefix = $parent.length; $lastKeyPrefix--;) {
            const dim = $parent[$lastKeyPrefix];
            ctx.moveTo(dim.AqkfEkZ_MHBCjZzBz__UWG_X_B_ArFO + dim.ojQ_m_l_PvKL_PiS_lX_Bc_xFUD_tQPvQ + 15 + (this.lineWidth >> 1), dim.QfPG__AEfcA_u_T_pjMCVYAyl);
            ctx.arc(dim.AqkfEkZ_MHBCjZzBz__UWG_X_B_ArFO, dim.QfPG__AEfcA_u_T_pjMCVYAyl, dim.ojQ_m_l_PvKL_PiS_lX_Bc_xFUD_tQPvQ + 15 + (this.lineWidth >> 1), 0, __._xBO_iva_u_Ovt_ev_y_OT_, true);
        }
        ctx.closePath();
        ctx.stroke();
    }
}
class Q {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.viruses = new Set;
    }
    static add(nativeProcedure) {
        this.viruses.add(nativeProcedure);
    }
    static VGuSmIg_DpT_VOUdWVShDcD() {
        if ("on" === i.virusRange) {
            const ctx = __.NCQOf__Wa__H_AN_o_WuQWFRC_U;
            ctx.globalAlpha = 0.1;
            ctx.fillStyle = "#ffffff";
            this.viruses.forEach((p) => {
                const strokeOpacity = 0 < p.fadeStartTime ? Math.max(1 - (e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp - p.fadeStartTime) / i.CellAnimation, 0) : 1;
                ctx.globalAlpha = 0.1 * strokeOpacity;
                ctx.beginPath();
                ctx.arc(p.AqkfEkZ_MHBCjZzBz__UWG_X_B_ArFO, p.QfPG__AEfcA_u_T_pjMCVYAyl, p.ojQ_m_l_PvKL_PiS_lX_Bc_xFUD_tQPvQ + 760, 0, __._xBO_iva_u_Ovt_ev_y_OT_, true);
                ctx.closePath();
                ctx.fill();
            });
            ctx.globalAlpha = 1;
        }
    }
    static _Wh_NVOXv__lhD_jewWnmmu_uN_qCbt_cGDYjq() {
        this.viruses.clear();
    }
}
class j {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.DQ__RLVfMX__sNtXsMQEEgIAbY = 0;
        this.U_xufzeSJl_d_xqNxKfRppgJfk_C_Ln = 0;
        this.JGvRzIlPFdZXcR_sUj__K_PjhzkXxwb_YF_pG = 0;
        this.FSuy_wC_Mu_HW_iAyvaeWhk_N = 0;
        this.oWU_o_pQuomDzKr_kj_mnDfjML_mGBc__lS = 0;
        this._QU_qB_PT_cDGfnUnI_Vax_KoDLUOOWpkCM_pCT = ["A", "B", "C", "D", "E"];
        this._n______GCpy_Wbw_v_mYhc_Mmrgeq_ = new Set;
    }
    static VGuSmIg_DpT_VOUdWVShDcD() {
        const len = i.bgSectors;
        if ("off" !== len) {
            const ctx = __.NCQOf__Wa__H_AN_o_WuQWFRC_U;
            const px = u.gridWidth >> 1;
            this.FSuy_wC_Mu_HW_iAyvaeWhk_N = L.FSuy_wC_Mu_HW_iAyvaeWhk_N - u.gridWidth;
            this.DQ__RLVfMX__sNtXsMQEEgIAbY = L.DQ__RLVfMX__sNtXsMQEEgIAbY + px;
            this.U_xufzeSJl_d_xqNxKfRppgJfk_C_Ln = L.U_xufzeSJl_d_xqNxKfRppgJfk_C_Ln + px;
            this.JGvRzIlPFdZXcR_sUj__K_PjhzkXxwb_YF_pG = 0 | this.FSuy_wC_Mu_HW_iAyvaeWhk_N / 5;
            this.oWU_o_pQuomDzKr_kj_mnDfjML_mGBc__lS = 0 | this.FSuy_wC_Mu_HW_iAyvaeWhk_N / 10;
            ctx.lineWidth = u.gridWidth;
            ctx.strokeStyle = u.gridColor;
            this.sectors();
            if (!("onlyLines" === len)) {
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillStyle = u.gridTextColor;
                this.t_RS_gMozrSnRCi_VperPs_b_C_OuJDousc();
                if ("snowflakes" === len) {
                    this.snowflakes();
                } else {
                    this.normal();
                }
            }
        }
    }
    static sectors() {
        const ctxfx = __.NCQOf__Wa__H_AN_o_WuQWFRC_U;
        const o_ = Z._PoBDjeVk_b_XRUvg_lJUu__zmzbP;
        ctxfx.beginPath();
        ctxfx.rect(this.DQ__RLVfMX__sNtXsMQEEgIAbY + this.JGvRzIlPFdZXcR_sUj__K_PjhzkXxwb_YF_pG, this.U_xufzeSJl_d_xqNxKfRppgJfk_C_Ln, this.JGvRzIlPFdZXcR_sUj__K_PjhzkXxwb_YF_pG, this.FSuy_wC_Mu_HW_iAyvaeWhk_N);
        ctxfx.rect(this.DQ__RLVfMX__sNtXsMQEEgIAbY + 3 * this.JGvRzIlPFdZXcR_sUj__K_PjhzkXxwb_YF_pG, this.U_xufzeSJl_d_xqNxKfRppgJfk_C_Ln, this.JGvRzIlPFdZXcR_sUj__K_PjhzkXxwb_YF_pG, this.FSuy_wC_Mu_HW_iAyvaeWhk_N);
        ctxfx.rect(this.DQ__RLVfMX__sNtXsMQEEgIAbY, this.U_xufzeSJl_d_xqNxKfRppgJfk_C_Ln + this.JGvRzIlPFdZXcR_sUj__K_PjhzkXxwb_YF_pG, this.FSuy_wC_Mu_HW_iAyvaeWhk_N, this.JGvRzIlPFdZXcR_sUj__K_PjhzkXxwb_YF_pG);
        ctxfx.rect(this.DQ__RLVfMX__sNtXsMQEEgIAbY, this.U_xufzeSJl_d_xqNxKfRppgJfk_C_Ln + 3 * this.JGvRzIlPFdZXcR_sUj__K_PjhzkXxwb_YF_pG, this.FSuy_wC_Mu_HW_iAyvaeWhk_N, this.JGvRzIlPFdZXcR_sUj__K_PjhzkXxwb_YF_pG);
        ctxfx.rect(this.DQ__RLVfMX__sNtXsMQEEgIAbY, this.U_xufzeSJl_d_xqNxKfRppgJfk_C_Ln, this.FSuy_wC_Mu_HW_iAyvaeWhk_N, this.FSuy_wC_Mu_HW_iAyvaeWhk_N);
        ctxfx.closePath();
        ctxfx.stroke();
    }
    static t_RS_gMozrSnRCi_VperPs_b_C_OuJDousc() {
        const oHistoryManager = this._n______GCpy_Wbw_v_mYhc_Mmrgeq_;
        oHistoryManager.clear();
        const o_ = Z._PoBDjeVk_b_XRUvg_lJUu__zmzbP;
        const a_ = 0 | (o_.DQ__RLVfMX__sNtXsMQEEgIAbY - 200 - L.DQ__RLVfMX__sNtXsMQEEgIAbY) / this.JGvRzIlPFdZXcR_sUj__K_PjhzkXxwb_YF_pG;
        const footerSpace_ = 0 | (o_.U_xufzeSJl_d_xqNxKfRppgJfk_C_Ln - 200 - L.U_xufzeSJl_d_xqNxKfRppgJfk_C_Ln) / this.JGvRzIlPFdZXcR_sUj__K_PjhzkXxwb_YF_pG;
        const A = 5 - (0 | (L.vPzXvUJeuyxKdWiKyZDcEBmy_rJR - o_.vPzXvUJeuyxKdWiKyZDcEBmy_rJR - 200) / this.JGvRzIlPFdZXcR_sUj__K_PjhzkXxwb_YF_pG) - a_;
        const newRowCount = 5 - (0 | (L.gIcO__Ch_te__GlzXwSsain_ - o_.gIcO__Ch_te__GlzXwSsain_ - 200) / this.JGvRzIlPFdZXcR_sUj__K_PjhzkXxwb_YF_pG) - footerSpace_;
        for (let action = 0; action < A; action++) {
            for (let r = 0; r < newRowCount; r++) {
                oHistoryManager.add(this._QU_qB_PT_cDGfnUnI_Vax_KoDLUOOWpkCM_pCT[footerSpace_ + r] + (a_ + action + 1));
            }
        }
    }
    static normal() {
        const tempCtx = __.NCQOf__Wa__H_AN_o_WuQWFRC_U;
        tempCtx.font = "400 " + u.gridTextSize + "px " + u.gridTextFont;
        for (let j = 0; 5 > j; j++) {
            const y = this.U_xufzeSJl_d_xqNxKfRppgJfk_C_Ln + this.oWU_o_pQuomDzKr_kj_mnDfjML_mGBc__lS + j * this.JGvRzIlPFdZXcR_sUj__K_PjhzkXxwb_YF_pG;
            for (let i = 0; 5 > i; i++) {
                const c = this._QU_qB_PT_cDGfnUnI_Vax_KoDLUOOWpkCM_pCT[j] + (i + 1);
                if (this._n______GCpy_Wbw_v_mYhc_Mmrgeq_.has(c)) {
                    const canvasCenterX = this.DQ__RLVfMX__sNtXsMQEEgIAbY + this.oWU_o_pQuomDzKr_kj_mnDfjML_mGBc__lS + i * this.JGvRzIlPFdZXcR_sUj__K_PjhzkXxwb_YF_pG;
                    tempCtx.fillText(c, canvasCenterX, y);
                }
            }
        }
    }
    static snowflakes() {
        const tempCtx = __.NCQOf__Wa__H_AN_o_WuQWFRC_U;
        tempCtx.font = "400 " + u.gridTextSize + "px Font Awesome 5 Free";
        for (let j = 0; 5 > j; j++) {
            const y = this.U_xufzeSJl_d_xqNxKfRppgJfk_C_Ln + this.oWU_o_pQuomDzKr_kj_mnDfjML_mGBc__lS + j * this.JGvRzIlPFdZXcR_sUj__K_PjhzkXxwb_YF_pG;
            for (let i = 0; 5 > i; i++) {
                const functionNameLowerCase = this._QU_qB_PT_cDGfnUnI_Vax_KoDLUOOWpkCM_pCT[j] + (i + 1);
                if (this._n______GCpy_Wbw_v_mYhc_Mmrgeq_.has(functionNameLowerCase)) {
                    const canvasCenterX = this.DQ__RLVfMX__sNtXsMQEEgIAbY + this.oWU_o_pQuomDzKr_kj_mnDfjML_mGBc__lS + i * this.JGvRzIlPFdZXcR_sUj__K_PjhzkXxwb_YF_pG;
                    tempCtx.fillText("\uf2dc", canvasCenterX, y);
                }
            }
        }
    }
}
class B {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.target1 = {
            turnedOn: false,
            nick: "",
            dCLa_EBM_UzuIZDY__LfPe: "",
            mass: 0,
            cellCount: 0,
            position: {
                x: 0,
                y: 0
            },
            outOfView: false
        };
        this.target2 = {
            turnedOn: false,
            nick: "",
            dCLa_EBM_UzuIZDY__LfPe: "",
            mass: 0,
            cellCount: 0,
            position: {
                x: 0,
                y: 0
            },
            outOfView: false
        };
        this.center = {
            x: 0,
            y: 0
        };
    }
    static GTJ_Z_GBYToqmnGM_lGVtg_FyQ_fcWs_X_HuL() {
        if (this.target1.turnedOn || this.target2.turnedOn) {
            const node = this.target1;
            const data = this.target2;
            node.mass = 0;
            node.position.x = 0;
            node.position.y = 0;
            node.cellCount = 0;
            data.mass = 0;
            data.position.x = 0;
            data.position.y = 0;
            data.cellCount = 0;
            F.AgJoGcs_Dj_UYxVQhB_i.forEach((options) => {
                if (node.turnedOn && node.dCLa_EBM_UzuIZDY__LfPe === options.dCLa_EBM_UzuIZDY__LfPe) {
                    node.position.x += options.AqkfEkZ_MHBCjZzBz__UWG_X_B_ArFO;
                    node.position.y += options.QfPG__AEfcA_u_T_pjMCVYAyl;
                    node.mass += options.mass;
                    node.cellCount++;
                } else {
                    if (data.turnedOn && data.dCLa_EBM_UzuIZDY__LfPe === options.dCLa_EBM_UzuIZDY__LfPe) {
                        data.position.x += options.AqkfEkZ_MHBCjZzBz__UWG_X_B_ArFO;
                        data.position.y += options.QfPG__AEfcA_u_T_pjMCVYAyl;
                        data.mass += options.mass;
                        data.cellCount++;
                    }
                }
            });
            node.mass |= 0;
            data.mass |= 0;
            let blocks = 0;
            let sum = 0;
            let height = 0;
            if (node.turnedOn) {
                if (0 < node.cellCount) {
                    node.position.x /= node.cellCount;
                    node.position.y /= node.cellCount;
                    node.outOfView = false;
                    sum = sum + node.position.x;
                    height = height + node.position.y;
                    blocks++;
                } else {
                    node.outOfView = true;
                }
            }
            if (data.turnedOn) {
                if (0 < data.cellCount) {
                    data.position.x /= data.cellCount;
                    data.position.y /= data.cellCount;
                    data.outOfView = false;
                    sum = sum + data.position.x;
                    height = height + data.position.y;
                    blocks++;
                } else {
                    data.outOfView = true;
                }
            }
            if (0 < blocks) {
                this.center.x = 0 | sum / blocks;
                this.center.y = 0 | height / blocks;
            }
        }
    }
    static lockTarget(expectedTargets, message, prop) {
        if (!Z.ZKZ_w_DbZe_HhMUMcNJmLgvwZ_gK__r__fPMA) {
            d.toggleSpectate();
        }
        let best_part_step_diff = 199996164;
        let network = false;
        if (F.AgJoGcs_Dj_UYxVQhB_i.forEach((n) => {
                if (!(n.WHolqulbwp__h_AEp_io_d || n.olP_fXeXiO_TVbocyOH_jW || n.Z_bKw_lJfbX_dTXP_MXTiOGqxVkB)) {
                    const tmp_step_diff = this.getDistanceSquare(expectedTargets, message, n.AqkfEkZ_MHBCjZzBz__UWG_X_B_ArFO, n.QfPG__AEfcA_u_T_pjMCVYAyl);
                    if (tmp_step_diff < best_part_step_diff) {
                        best_part_step_diff = tmp_step_diff;
                        network = n;
                    }
                }
            }), network) {
            if (network.Hzyw_YrIJF_kaw_lij_POds__IM_t_raLlIO) {
                k.alert("HSLO", n.current.notif.target_unnamed);
            } else {
                const indexLookupKey = 1 === prop ? "target1" : "target2";
                const data = this[indexLookupKey];
                data.turnedOn = true;
                data.nick = network.nick;
                data.dCLa_EBM_UzuIZDY__LfPe = network.dCLa_EBM_UzuIZDY__LfPe;
                data.outOfView = false;
                T.targetMode();
            }
        }
    }
    static getDistanceSquare(prop, message, value, nextProps) {
        const lightI = value - prop;
        const lightJ = nextProps - message;
        return lightI * lightI + lightJ * lightJ;
    }
    static _Wh_NVOXv__lhD_jewWnmmu_uN_qCbt_cGDYjq() {
        if (!this.isTurnedOn) {
            d.toggleSpectate();
        }
        if (Z.ZKZ_w_DbZe_HhMUMcNJmLgvwZ_gK__r__fPMA) {
            T.mouseViewport();
        } else {
            T.topViewport();
        }
        this.target1.turnedOn = false;
        this.target2.turnedOn = false;
    }
    static getMass(size) {
        return size * size / 100;
    }
    static get isTurnedOn() {
        return this.target1.turnedOn || this.target2.turnedOn;
    }
}
class O {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.targetR = 0;
        this.targetG = 0;
        this.targetB = 0;
        this.color = "#000000";
        this.YEED_BgxHGjVv_vpO__W_bcxoZPhf_nFnYK = 0;
    }
    static GTJ_Z_GBYToqmnGM_lGVtg_FyQ_fcWs_X_HuL() {
        this.r += (this.targetR - this.r) / 80;
        this.g += (this.targetG - this.g) / 80;
        this.b += (this.targetB - this.b) / 80;
        this.color = "#" + (16777216 + (this.r << 16) + (this.g << 8) + (0 | this.b)).toString(16).slice(1);
        const t_ = Math.min(e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp - this.YEED_BgxHGjVv_vpO__W_bcxoZPhf_nFnYK - 2e3, 33);
        if (!(0 > t_)) {
            this.YEED_BgxHGjVv_vpO__W_bcxoZPhf_nFnYK = e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp + t_;
            this.newTargetRGB();
        }
    }
    static newTargetRGB() {
        const paramsWithDefault = [255, 7, 0 | 255 * Math.random()];
        paramsWithDefault.sort(() => {
            return 0.5 - Math.random();
        });
        this.targetR = paramsWithDefault[0];
        this.targetG = paramsWithDefault[1];
        this.targetB = paramsWithDefault[2];
    }
    static getColor(val, percent) {
        return "rgb(" + (0 | val.r * percent) + "," + (0 | val.g * percent) + "," + (0 | val.b * percent) + ")";
    }
}
class D {
    constructor(arg) {
        this.kWw_S_hhLsKh_KXbgXVJYGgMwwZk_jTiI = arg;
        this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM = 0;
        this.aJvbFt_J____iVqbCGNFhq_iroDVa_ = arg.byteLength;
    }
    rNKRU__bQMnnL_l_uGy_sTSV_() {
        const t_ = this.kWw_S_hhLsKh_KXbgXVJYGgMwwZk_jTiI.getUint8(this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM, true);
        return this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM++, t_;
    }
    guJSVp_vl_nWmNuyX_o_() {
        const t_ = this.kWw_S_hhLsKh_KXbgXVJYGgMwwZk_jTiI.getInt8(this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM, true);
        return this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM++, t_;
    }
    ___xG____qrVf_i_nLi_QN_br_() {
        const t_ = this.kWw_S_hhLsKh_KXbgXVJYGgMwwZk_jTiI.getUint16(this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM, true);
        return this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM += 2, t_;
    }
    VlPs_caeS_Y_sRpa_n_v() {
        const t_ = this.kWw_S_hhLsKh_KXbgXVJYGgMwwZk_jTiI.getInt16(this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM, true);
        return this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM += 2, t_;
    }
    qsrT_kunMpWpa_peD__nrEt_xU___upE_IhDa() {
        const t_ = this.kWw_S_hhLsKh_KXbgXVJYGgMwwZk_jTiI.getUint32(this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM, true);
        return this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM += 4, t_;
    }
    UFhPKbWvQv_dF_YCwfdk_zEK_WmDsS_m_Kr__B() {
        const t_ = this.kWw_S_hhLsKh_KXbgXVJYGgMwwZk_jTiI.getInt32(this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM, true);
        return this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM += 4, t_;
    }
    qW_ov_cDWvWsFjpOZ_aqBww__E__QHK() {
        const t_ = this.kWw_S_hhLsKh_KXbgXVJYGgMwwZk_jTiI.getFloat32(this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM, true);
        return this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM += 4, t_;
    }
    V_eib__JvO___KzN_DkIHMqH_QlFDP() {
        const t_ = this.kWw_S_hhLsKh_KXbgXVJYGgMwwZk_jTiI.getFloat64(this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM, true);
        return this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM += 8, t_;
    }
    _NSSFQtEjdEhsOjJo_CJc() {
        let fullPath = "";
        for (; !this._yFc_tGMJGIATnHRwP_NcWr_E_YO__Q_W_sSG_V();) {
            const unicodeLastChar = this.rNKRU__bQMnnL_l_uGy_sTSV_();
            if (0 === unicodeLastChar) {
                break;
            }
            fullPath = fullPath + String.fromCharCode(unicodeLastChar);
        }
        return fullPath;
    }
    fwc__R_V_jDvZMz_kXAXd__R___c__ng_a__s() {
        const decdata = this._NSSFQtEjdEhsOjJo_CJc();
        return decodeURI(decdata);
    }
    cKE_ChiRWGAMU_FKMMyc_hyxc_wZa() {
        const charListNotLatin = new Uint8Array(this.kWw_S_hhLsKh_KXbgXVJYGgMwwZk_jTiI.buffer);
        const outputByteCount = this.qsrT_kunMpWpa_peD__nrEt_xU___upE_IhDa();
        const headBytes = new Uint8Array(outputByteCount);
        LZ4.decodeBlock(charListNotLatin.slice(5), headBytes);
        this.kWw_S_hhLsKh_KXbgXVJYGgMwwZk_jTiI = new DataView(headBytes.buffer);
        this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM = 0;
        this.aJvbFt_J____iVqbCGNFhq_iroDVa_ = this.kWw_S_hhLsKh_KXbgXVJYGgMwwZk_jTiI.byteLength;
    }
    _yFc_tGMJGIATnHRwP_NcWr_E_YO__Q_W_sSG_V() {
        return this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM >= this.aJvbFt_J____iVqbCGNFhq_iroDVa_;
    }
}
class R {
    constructor(length = 128) {
        this.kWw_S_hhLsKh_KXbgXVJYGgMwwZk_jTiI = new DataView(new ArrayBuffer(length));
        this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM = 0;
        this.length = length;
    }
    writeUInt8(value) {
        this._hFNJmarKuqlI_Civ_H_wfnwvPO(1);
        this.kWw_S_hhLsKh_KXbgXVJYGgMwwZk_jTiI.setUint8(this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM, value, true);
        this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM += 1;
    }
    writeInt8(value) {
        this._hFNJmarKuqlI_Civ_H_wfnwvPO(1);
        this.kWw_S_hhLsKh_KXbgXVJYGgMwwZk_jTiI.setInt8(this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM, value, true);
        this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM += 1;
    }
    writeUInt16(value) {
        this._hFNJmarKuqlI_Civ_H_wfnwvPO(2);
        this.kWw_S_hhLsKh_KXbgXVJYGgMwwZk_jTiI.setUint16(this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM, value, true);
        this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM += 2;
    }
    writeInt16(value) {
        this._hFNJmarKuqlI_Civ_H_wfnwvPO(2);
        this.kWw_S_hhLsKh_KXbgXVJYGgMwwZk_jTiI.setInt16(this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM, value, true);
        this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM += 2;
    }
    writeUInt32(value) {
        this._hFNJmarKuqlI_Civ_H_wfnwvPO(4);
        this.kWw_S_hhLsKh_KXbgXVJYGgMwwZk_jTiI.setUint32(this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM, value, true);
        this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM += 4;
    }
    writeInt32(i) {
        this._hFNJmarKuqlI_Civ_H_wfnwvPO(4);
        this.kWw_S_hhLsKh_KXbgXVJYGgMwwZk_jTiI.setInt32(this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM, i, true);
        this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM += 4;
    }
    writeFloat32(value) {
        this._hFNJmarKuqlI_Civ_H_wfnwvPO(4);
        this.kWw_S_hhLsKh_KXbgXVJYGgMwwZk_jTiI.setFloat32(this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM, value, true);
        this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM += 4;
    }
    writeFloat64(val) {
        this._hFNJmarKuqlI_Civ_H_wfnwvPO(8);
        this.kWw_S_hhLsKh_KXbgXVJYGgMwwZk_jTiI.setFloat64(this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM, val, true);
        this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM += 8;
    }
    writeUTF8string(fileToDownload) {
        const param_hash = encodeURI(fileToDownload);
        this._hFNJmarKuqlI_Civ_H_wfnwvPO(param_hash.length + 1);
        for (let i = 0; i < param_hash.length; i = i + 1) {
            const value = param_hash.charCodeAt(i);
            this.writeUInt8(value);
        }
        this.writeUInt8(0);
    }
    _hFNJmarKuqlI_Civ_H_wfnwvPO(n_bytes) {
        const o_ = this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM + n_bytes <= this.length;
        if (!o_) {
            console.warn("Not enough space left to write " + n_bytes + " more byte(s). Expanding buffer...");
            this.tRNxcsYU__Lh_LkwpKhSvgA(n_bytes);
        }
    }
    tRNxcsYU__Lh_LkwpKhSvgA(growSize) {
        const array = new Uint8Array(this.kWw_S_hhLsKh_KXbgXVJYGgMwwZk_jTiI.buffer);
        const a = new Uint8Array(this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM + growSize);
        for (let i = 0; i < array.length; i++) {
            a[i] = array[i];
        }
        this.kWw_S_hhLsKh_KXbgXVJYGgMwwZk_jTiI = new DataView(a.buffer);
        this.length = a.length;
    }
    _Wh_NVOXv__lhD_jewWnmmu_uN_qCbt_cGDYjq() {
        this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM = 0;
    }
    get buffer() {
        return this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM === this.length ? this.kWw_S_hhLsKh_KXbgXVJYGgMwwZk_jTiI.buffer : this.kWw_S_hhLsKh_KXbgXVJYGgMwwZk_jTiI.buffer.slice(0, this._tYfwLr_IFdUdCD_Ak_rXZfXmTJbsEz_yxkM);
    }
}
class V {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.FlAiUrjbwphW___V_VUenEp = null;
        this.KoYF_JFT__S_jcEAXfTGWW_LAaMjUFwLDz_rA = null;
        this._HkPHGG__Oy_IkgYR_mSZqk_aW__RqMvERh_ = false;
        this.lastPingAt = 0;
        this.latency = 0;
        this._KqgeJ__dlIlKkL_dG_j_lB_ = {
            "in": 0,
            out: 0
        };
        L._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
    }
    static Ikc_j_E_zHZNxgF_vr_YMh(port) {
        if (port) {
            $("#ip-box").text("Server: " + $("#regions").find(":selected").text());
            this.QEgAu__ZPvw_izRgHJ_xCYsh__MiAD_I();
            this.__pD_nOgn_U_xo_Z_oNX_u__ZMN_Gu();
            L._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
            this.KoYF_JFT__S_jcEAXfTGWW_LAaMjUFwLDz_rA = new WebSocket("ws://" + port);
            this.KoYF_JFT__S_jcEAXfTGWW_LAaMjUFwLDz_rA.binaryType = "arraybuffer";
            this.KoYF_JFT__S_jcEAXfTGWW_LAaMjUFwLDz_rA.onopen = () => {
                this.pdPxVqDt_mhd_FoWY_TBZzGquN_HOzQxEQTA();
            };
            this.KoYF_JFT__S_jcEAXfTGWW_LAaMjUFwLDz_rA.onmessage = (e) => {
                this.HgPjnlZg_xG_EgUkh_I_zyH_SWW_zUo(e);
            };
            this.KoYF_JFT__S_jcEAXfTGWW_LAaMjUFwLDz_rA.onclose = () => {
                this.eH_AwRamqPFZm_____oM_ZGjkfgv_HB_rWe___();
            };
            this.KoYF_JFT__S_jcEAXfTGWW_LAaMjUFwLDz_rA.onerror = () => {
                this.aNO_GVmyZIKPv_LtA_lkBE();
            };
            this.FlAiUrjbwphW___V_VUenEp = port;
            console.log("Connecting to: " + port);
        }
    }
    static QEgAu__ZPvw_izRgHJ_xCYsh__MiAD_I() {
        if (this._HkPHGG__Oy_IkgYR_mSZqk_aW__RqMvERh_ = false, this.KoYF_JFT__S_jcEAXfTGWW_LAaMjUFwLDz_rA) {
            this.KoYF_JFT__S_jcEAXfTGWW_LAaMjUFwLDz_rA.onopen = null;
            this.KoYF_JFT__S_jcEAXfTGWW_LAaMjUFwLDz_rA.onmessage = null;
            this.KoYF_JFT__S_jcEAXfTGWW_LAaMjUFwLDz_rA.onclose = null;
            this.KoYF_JFT__S_jcEAXfTGWW_LAaMjUFwLDz_rA.onerror = null;
            try {
                this.KoYF_JFT__S_jcEAXfTGWW_LAaMjUFwLDz_rA.close();
            } catch (t_) {}
        }
        this.KoYF_JFT__S_jcEAXfTGWW_LAaMjUFwLDz_rA = null;
        this.FlAiUrjbwphW___V_VUenEp = null;
    }
    static __pD_nOgn_U_xo_Z_oNX_u__ZMN_Gu() {
        F.AgJoGcs_Dj_UYxVQhB_i.clear();
        F._lZB__ml_T_bVtWhzdIxiJ_JgOS.clear();
        F.xd_LULKZmorBVR_t_s_zHibfubt_.clear();
        M.PDnW_YiUP_ilIgVcz_t_iwvmmJT = false;
    }
    static send(stringifyJSON) {
        this._KqgeJ__dlIlKkL_dG_j_lB_.out++;
        this.KoYF_JFT__S_jcEAXfTGWW_LAaMjUFwLDz_rA.send(stringifyJSON);
    }
    static pdPxVqDt_mhd_FoWY_TBZzGquN_HOzQxEQTA() {
        Y.FlAiUrjbwphW___V_VUenEp();
        H._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
    }
    static HgPjnlZg_xG_EgUkh_I_zyH_SWW_zUo(elem) {
        this._KqgeJ__dlIlKkL_dG_j_lB_["in"]++;
        E.KvFoqDqKSlx_xce_LTPIVp(elem);
    }
    static eH_AwRamqPFZm_____oM_ZGjkfgv_HB_rWe___() {
        A.open();
        $("#regions").val("select").change();
        k.alert("", "You have been disconnected from the server. Please select a region to reconnect!");
        this._HkPHGG__Oy_IkgYR_mSZqk_aW__RqMvERh_ = false;
        console.log("Websocket closed");
    }
    static aNO_GVmyZIKPv_LtA_lkBE() {
        k.alert("", "The server is full! Please try another server or wait a moment.");
        this._HkPHGG__Oy_IkgYR_mSZqk_aW__RqMvERh_ = false;
        console.log("Websocket errored out!");
    }
}
class E {
    static KvFoqDqKSlx_xce_LTPIVp(encrypted) {
        const endTag_ = new DataView(encrypted.data);
        this.parse(endTag_);
    }
    static parse(cons) {
        const artistTrack = new D(cons);
        const a_ = artistTrack.rNKRU__bQMnnL_l_uGy_sTSV_();
        if (40 === a_) {
            this._kNJQ__Aly_ZR__YGkiBKkgkSMP();
        } else {
            if (30 === a_) {
                this.teamUpdate(artistTrack);
            } else {
                if (90 === a_) {
                    this.DiqL_Ivka_sCB_GYM_UUrA(artistTrack);
                } else {
                    if (200 === a_) {
                        this.forcedSwitcher(artistTrack);
                    } else {
                        if (50 === a_) {
                            this.CBZ_xm_ZXPoT_ro_hrQGVbIGIdB_(artistTrack);
                        } else {
                            if (60 === a_) {
                                this.tt_rt_qqNQR_jj__eGny__aHv(artistTrack);
                            } else {
                                if (80 === a_) {
                                    this.rJm_BLI_f_Jftyp__UKTxTcQVgFoH_fv(artistTrack);
                                } else {
                                    if (100 === a_) {
                                        this.spectateData(artistTrack);
                                    } else {
                                        if (110 === a_) {
                                            this.dualMode();
                                        } else {
                                            if (120 === a_) {
                                                this.tabChange(artistTrack);
                                            } else {
                                                void 0;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    static forcedSwitcher(canCreateDiscussions) {
        M._fn___ztljQxUn_W_hZqEJn = canCreateDiscussions.rNKRU__bQMnnL_l_uGy_sTSV_();
    }
    static _kNJQ__Aly_ZR__YGkiBKkgkSMP() {
        console.log("Reseting World...");
        F.AgJoGcs_Dj_UYxVQhB_i.clear();
        F._lZB__ml_T_bVtWhzdIxiJ_JgOS.clear();
    }
    static DiqL_Ivka_sCB_GYM_UUrA(canCreateDiscussions) {
        b.clear();
        const len = canCreateDiscussions.rNKRU__bQMnnL_l_uGy_sTSV_();
        for (let i = 0, col; i < len; i++) {
            col = canCreateDiscussions.fwc__R_V_jDvZMz_kXAXd__R___c__ng_a__s() || "an unnamed planet";
            b.add(col, i + 1, false, false, false);
        }
        b.GTJ_Z_GBYToqmnGM_lGVtg_FyQ_fcWs_X_HuL();
    }
    static CBZ_xm_ZXPoT_ro_hrQGVbIGIdB_(canCreateDiscussions) {
        e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp = Date.now();
        let o_ = canCreateDiscussions.___xG____qrVf_i_nLi_QN_br_();
        for (; o_--;) {
            const cls = canCreateDiscussions.qsrT_kunMpWpa_peD__nrEt_xU___upE_IhDa();
            const data = F.Fs__pmF_zOB_oU_I_SDfPIzJzr_Jwh__Z_l(cls);
            const now = canCreateDiscussions.___xG____qrVf_i_nLi_QN_br_();
            const yourInvestment = canCreateDiscussions.___xG____qrVf_i_nLi_QN_br_();
            const disabled = canCreateDiscussions.___xG____qrVf_i_nLi_QN_br_();
            const l_ = canCreateDiscussions.___xG____qrVf_i_nLi_QN_br_();
            if (data._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q(now, yourInvestment, disabled), 1 & l_ && (data.olP_fXeXiO_TVbocyOH_jW = true), 2 & l_ && (data.Z_bKw_lJfbX_dTXP_MXTiOGqxVkB = true), 4 & l_ && (data.WHolqulbwp__h_AEp_io_d = true, data.fvoVwPkOYIJdRdgnnmalmATAmF()), 8 & l_) {
                const lintdata = canCreateDiscussions.rNKRU__bQMnnL_l_uGy_sTSV_();
                const yourInvestment = canCreateDiscussions.rNKRU__bQMnnL_l_uGy_sTSV_();
                const tileState = canCreateDiscussions.rNKRU__bQMnnL_l_uGy_sTSV_();
                data.D_uNpsHOaqYcDCWMwBUbsc_nUMP_sUk_jeq_J(lintdata, yourInvestment, tileState);
            }
            if (16 & l_ && (data.nick = canCreateDiscussions.fwc__R_V_jDvZMz_kXAXd__R___c__ng_a__s()), 32 & l_) {
                const c_ = canCreateDiscussions.rNKRU__bQMnnL_l_uGy_sTSV_();
                const _viewId = canCreateDiscussions.fwc__R_V_jDvZMz_kXAXd__R___c__ng_a__s();
                if ("" !== M.tag) {
                    if (1 === c_) {
                        data.skin = "https://i.imgur.com/" + _viewId + ".jpg";
                    } else {
                        if (2 === c_) {
                            data.skin = "https://i.hizliresim.com/" + _viewId;
                        }
                    }
                }
            }
            if (64 & l_) {
                data.nick = M.nick;
                F._lZB__ml_T_bVtWhzdIxiJ_JgOS.set(cls, data);
                data.Wu_RLJ_ZwC_QfnJHmXIk__K____va_IYrR = true;
            }
            if (128 & l_) {
                data.__OluYOvR_CPjXySaAIbllXl = true;
                data.friendID = canCreateDiscussions.qsrT_kunMpWpa_peD__nrEt_xU___upE_IhDa();
            }
            if (256 & l_) {
                data._fn___ztljQxUn_W_hZqEJn = canCreateDiscussions.rNKRU__bQMnnL_l_uGy_sTSV_();
            }
            data.x = now;
            data.y = yourInvestment;
            data.YlYfs_BFUto_Zc_k_W_kU_ikDV_a__N = disabled;
            data.Ozp_Q_uYLgmNmgSe__lMdakzunaqo_kKZU = e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp;
        }
        o_ = canCreateDiscussions.___xG____qrVf_i_nLi_QN_br_();
        for (; o_--;) {
            const isGoogle = canCreateDiscussions.qsrT_kunMpWpa_peD__nrEt_xU___upE_IhDa();
            const origin = F._Fw_zm_Pe__Xh__oDYOaFeC_m_Ec(isGoogle);
            const right = canCreateDiscussions.___xG____qrVf_i_nLi_QN_br_();
            const defaultYPos = canCreateDiscussions.___xG____qrVf_i_nLi_QN_br_();
            const tbg = canCreateDiscussions.___xG____qrVf_i_nLi_QN_br_();
            if (origin) {
                origin.GTJ_Z_GBYToqmnGM_lGVtg_FyQ_fcWs_X_HuL();
                origin.x = right;
                origin.y = defaultYPos;
                origin.YlYfs_BFUto_Zc_k_W_kU_ikDV_a__N = tbg;
                origin.Ozp_Q_uYLgmNmgSe__lMdakzunaqo_kKZU = e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp;
            }
        }
        o_ = canCreateDiscussions.___xG____qrVf_i_nLi_QN_br_();
        for (; o_--;) {
            const dayOfWeek = canCreateDiscussions.qsrT_kunMpWpa_peD__nrEt_xU___upE_IhDa();
            const isGoogle = canCreateDiscussions.qsrT_kunMpWpa_peD__nrEt_xU___upE_IhDa();
            F._G_FkGu__Ysqm_aCLJpncYbfkFFdIQP_eV_MhB(isGoogle, dayOfWeek);
        }
        o_ = canCreateDiscussions.___xG____qrVf_i_nLi_QN_br_();
        for (; o_--;) {
            const isGoogle = canCreateDiscussions.qsrT_kunMpWpa_peD__nrEt_xU___upE_IhDa();
            F.ECRNXrwPs_PcNjJKpaFj__UNTZ___JWLfzGXFRA(isGoogle);
        }
    }
    static teamUpdate(res) {
        const nb_ft = res.rNKRU__bQMnnL_l_uGy_sTSV_();
        for (let _t_ix = 0; _t_ix < nb_ft; _t_ix++) {
            const isGoogle = res.qsrT_kunMpWpa_peD__nrEt_xU___upE_IhDa();
            const options = F.newTeamPlayer(isGoogle);
            options.x = res.___xG____qrVf_i_nLi_QN_br_();
            options.y = res.___xG____qrVf_i_nLi_QN_br_();
            options.mass = res.qsrT_kunMpWpa_peD__nrEt_xU___upE_IhDa();
            const l_ = res.rNKRU__bQMnnL_l_uGy_sTSV_();
            if (1 & l_ && (options.nick = res.fwc__R_V_jDvZMz_kXAXd__R___c__ng_a__s()), 2 & l_) {
                const c_ = res.rNKRU__bQMnnL_l_uGy_sTSV_();
                const btnName = res.fwc__R_V_jDvZMz_kXAXd__R___c__ng_a__s();
                if (1 === c_) {
                    options.skin = "https://i.imgur.com/" + btnName + ".jpg";
                } else {
                    if (2 === c_) {
                        options.skin = "https://i.hizliresim.com/" + btnName;
                    }
                }
            }
        }
        const numCompanies = res.rNKRU__bQMnnL_l_uGy_sTSV_();
        for (let iCompany = 0; iCompany < numCompanies; iCompany++) {
            const isGoogle = res.qsrT_kunMpWpa_peD__nrEt_xU___upE_IhDa();
            const pointA = F.getTeamPlayer(isGoogle);
            pointA.x = res.___xG____qrVf_i_nLi_QN_br_();
            pointA.y = res.___xG____qrVf_i_nLi_QN_br_();
            pointA.mass = res.qsrT_kunMpWpa_peD__nrEt_xU___upE_IhDa();
        }
        const xrepsThisRow = res.rNKRU__bQMnnL_l_uGy_sTSV_();
        for (let xRep = 0; xRep < xrepsThisRow; xRep++) {
            const isGoogle = res.qsrT_kunMpWpa_peD__nrEt_xU___upE_IhDa();
            F.removeTeamPlayer(isGoogle);
        }
    }
    static rJm_BLI_f_Jftyp__UKTxTcQVgFoH_fv() {
        const now = Date.now();
        V.latency = now - V.lastPingAt;
    }
    static spectateData(canCreateDiscussions) {
        if (!M.DEOh_sSao_HsQV_nRjFK_SEbXBDsiln__q_D) {
            Z.ytdf_POk_jale_VNaPXFWCeyu_sjmeZ.x = canCreateDiscussions.___xG____qrVf_i_nLi_QN_br_();
            Z.ytdf_POk_jale_VNaPXFWCeyu_sjmeZ.y = canCreateDiscussions.___xG____qrVf_i_nLi_QN_br_();
            Z._kGOBhfgXWf_Ta_PD_NAsPaAV_c = canCreateDiscussions.qW_ov_cDWvWsFjpOZ_aqBww__E__QHK();
        }
    }
    static tt_rt_qqNQR_jj__eGny__aHv(canCreateDiscussions) {
        const lhsCtor = 0 | canCreateDiscussions.___xG____qrVf_i_nLi_QN_br_();
        const geoJsonOptions = 0 | canCreateDiscussions.___xG____qrVf_i_nLi_QN_br_();
        const style = 0 | canCreateDiscussions.___xG____qrVf_i_nLi_QN_br_();
        const drawn = 0 | canCreateDiscussions.___xG____qrVf_i_nLi_QN_br_();
        L.GTJ_Z_GBYToqmnGM_lGVtg_FyQ_fcWs_X_HuL(lhsCtor, geoJsonOptions, style, drawn);
    }
    static tabChange(tab) {
        M.Pl___Ixz_SGS__y__cajRM = tab.rNKRU__bQMnnL_l_uGy_sTSV_();
    }
    static dualMode() {
        V.dualMode = true;
    }
}
class H {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.kLPPqjZ__fHAPKpbClXMHkFFrA_();
        Z.bbK__VFfPoBbfF_b_FKZG = false;
        Z.ZKZ_w_DbZe_HhMUMcNJmLgvwZ_gK__r__fPMA = false;
        console.log("Connected to: " + V.FlAiUrjbwphW___V_VUenEp);
        V._HkPHGG__Oy_IkgYR_mSZqk_aW__RqMvERh_ = true;
    }
    static NHQwY_s_ju_WUFVjl_Igj__bhD_pIFF(view) {
        V.send(view.buffer);
    }
    static kLPPqjZ__fHAPKpbClXMHkFFrA_() {
        const buffer = new R(6);
        buffer.writeUInt8(0);
        buffer.writeUInt8(2);
        buffer.writeUInt32(1);
        this.NHQwY_s_ju_WUFVjl_Igj__bhD_pIFF(buffer);
        this.nick();
        this.team();
        this.skin();
    }
    static dt_FgfAkRaNEN_wVAPoeu_gfmf_iNot(size, value, delta) {
        const n_ = !__.hasFocus && !M.PDnW_YiUP_ilIgVcz_t_iwvmmJT;
        if (V._HkPHGG__Oy_IkgYR_mSZqk_aW__RqMvERh_ && !n_) {
            const buffer = new R(6);
            buffer.writeUInt8(60);
            buffer.writeUInt8(size || M._fn___ztljQxUn_W_hZqEJn);
            buffer.writeUInt16(value);
            buffer.writeUInt16(delta);
            this.NHQwY_s_ju_WUFVjl_Igj__bhD_pIFF(buffer);
        }
    }
    static o_ZMLC__FGG_DmQ_mATW_Kqd_ZHJYBUkEDMRg() {
        if (V._HkPHGG__Oy_IkgYR_mSZqk_aW__RqMvERh_ && !M.PDnW_YiUP_ilIgVcz_t_iwvmmJT) {
            if (N.isSpectator) {
                return void k.alert("HSLO", n.current.notif.cantPlay2Tag);
            }
            Z.bbK__VFfPoBbfF_b_FKZG = false;
            Z.Sx_l__mkjDQ__yrnoX_rDVi__RKkXi = 0.2;
            const authPacket = new R(1);
            authPacket.writeUInt8(30);
            this.NHQwY_s_ju_WUFVjl_Igj__bhD_pIFF(authPacket);
        }
    }
    static nick() {
        const buffer = new R(encodeURI(M.nick).length + 2);
        buffer.writeUInt8(10);
        buffer.writeUTF8string(M.nick);
        this.NHQwY_s_ju_WUFVjl_Igj__bhD_pIFF(buffer);
    }
    static team() {
        const result = new R(encodeURI(M.tag).length + 2);
        result.writeUInt8(20);
        result.writeUTF8string(M.tag);
        this.NHQwY_s_ju_WUFVjl_Igj__bhD_pIFF(result);
    }
    static skin() {
        const stdout = M.skin;
        const parts = stdout.match(/https?:\/\/i\.imgur\.com\/([\w0-9]{7})\.(png|jpg|gif)/i);
        const a_ = stdout.match(/https?:\/\/i\.hizliresim\.com\/([\w0-9]{6})\.(png|jpg|gif)/i);
        const data = {};
        data.GDTRC_tXuU_O__q_krVd_rW_uj = 0;
        data.url = stdout;
        if (parts) {
            data.GDTRC_tXuU_O__q_krVd_rW_uj = 1;
            data.url = parts[1];
        } else {
            if (a_) {
                data.GDTRC_tXuU_O__q_krVd_rW_uj = 2;
                data.url = a_[1] + "." + a_[2];
            }
        }
        const name = M.skin2;
        const g_url = name.match(/https?:\/\/i\.imgur\.com\/([\w0-9]{7})\.(png|jpg|gif)/i);
        const r_ = name.match(/https?:\/\/i\.hizliresim\.com\/([\w0-9]{6})\.(png|jpg|gif)/i);
        const obj = {};
        obj.GDTRC_tXuU_O__q_krVd_rW_uj = 0;
        obj.url = name;
        if (g_url) {
            obj.GDTRC_tXuU_O__q_krVd_rW_uj = 1;
            obj.url = g_url[1];
        } else {
            if (r_) {
                obj.GDTRC_tXuU_O__q_krVd_rW_uj = 2;
                obj.url = r_[1] + "." + r_[2];
            }
        }
        const response = new R(1 + data.url.length + 2 + obj.url.length + 2);
        response.writeUInt8(90);
        response.writeUInt8(data.GDTRC_tXuU_O__q_krVd_rW_uj);
        response.writeUTF8string(data.url);
        response.writeUInt8(obj.GDTRC_tXuU_O__q_krVd_rW_uj);
        response.writeUTF8string(obj.url);
        this.NHQwY_s_ju_WUFVjl_Igj__bhD_pIFF(response);
    }
    static split(options) {
        if (V._HkPHGG__Oy_IkgYR_mSZqk_aW__RqMvERh_) {
            const suArgs = new R(3);
            suArgs.writeUInt8(50);
            suArgs.writeUInt8(options || M._fn___ztljQxUn_W_hZqEJn);
            suArgs.writeUInt8(1);
            this.NHQwY_s_ju_WUFVjl_Igj__bhD_pIFF(suArgs);
        }
    }
    static rQjFeJo_MnJCHnbjETzpryiVz(size) {
        if (V._HkPHGG__Oy_IkgYR_mSZqk_aW__RqMvERh_) {
            const authPacket = new R(2);
            authPacket.writeUInt8(40);
            authPacket.writeUInt8(size || M._fn___ztljQxUn_W_hZqEJn);
            this.NHQwY_s_ju_WUFVjl_Igj__bhD_pIFF(authPacket);
        }
    }
    static F_hQJ_WhKeujsAcyI_mde() {
        const t_ = !__.hasFocus && !M.PDnW_YiUP_ilIgVcz_t_iwvmmJT;
        if (V._HkPHGG__Oy_IkgYR_mSZqk_aW__RqMvERh_ && !t_) {
            const authPacket = new R(1);
            authPacket.writeUInt8(80);
            this.NHQwY_s_ju_WUFVjl_Igj__bhD_pIFF(authPacket);
            V.lastPingAt = Date.now();
        }
    }
    static multiboxSwitch() {
        if (V._HkPHGG__Oy_IkgYR_mSZqk_aW__RqMvERh_) {
            const authPacket = new R(2);
            authPacket.writeUInt8(100);
            authPacket.writeUInt8(M._fn___ztljQxUn_W_hZqEJn);
            this.NHQwY_s_ju_WUFVjl_Igj__bhD_pIFF(authPacket);
        }
    }
    static ZKZ_w_DbZe_HhMUMcNJmLgvwZ_gK__r__fPMA() {
        if (V._HkPHGG__Oy_IkgYR_mSZqk_aW__RqMvERh_) {
            Z.ZKZ_w_DbZe_HhMUMcNJmLgvwZ_gK__r__fPMA = !Z.ZKZ_w_DbZe_HhMUMcNJmLgvwZ_gK__r__fPMA;
            const authPacket = new R(1);
            authPacket.writeUInt8(70);
            this.NHQwY_s_ju_WUFVjl_Igj__bhD_pIFF(authPacket);
        }
    }
}
class q {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.FlAiUrjbwphW___V_VUenEp = "minimap.astr.io";
        this.port = 3e3;
        this.KoYF_JFT__S_jcEAXfTGWW_LAaMjUFwLDz_rA = null;
        this._HkPHGG__Oy_IkgYR_mSZqk_aW__RqMvERh_ = false;
        this.Ikc_j_E_zHZNxgF_vr_YMh();
    }
    static Ikc_j_E_zHZNxgF_vr_YMh() {
        this.KoYF_JFT__S_jcEAXfTGWW_LAaMjUFwLDz_rA = new WebSocket("ws://" + this.FlAiUrjbwphW___V_VUenEp + ":" + this.port);
        this.KoYF_JFT__S_jcEAXfTGWW_LAaMjUFwLDz_rA.binaryType = "arraybuffer";
        this.KoYF_JFT__S_jcEAXfTGWW_LAaMjUFwLDz_rA.onopen = () => {
            return this.pdPxVqDt_mhd_FoWY_TBZzGquN_HOzQxEQTA();
        };
        this.KoYF_JFT__S_jcEAXfTGWW_LAaMjUFwLDz_rA.onmessage = (e) => {
            return this.HgPjnlZg_xG_EgUkh_I_zyH_SWW_zUo(e);
        };
        this.KoYF_JFT__S_jcEAXfTGWW_LAaMjUFwLDz_rA.onclose = () => {
            return this.eH_AwRamqPFZm_____oM_ZGjkfgv_HB_rWe___();
        };
        this.KoYF_JFT__S_jcEAXfTGWW_LAaMjUFwLDz_rA.onerror = () => {
            return this.aNO_GVmyZIKPv_LtA_lkBE();
        };
    }
    static send(stringifyJSON) {
        this.KoYF_JFT__S_jcEAXfTGWW_LAaMjUFwLDz_rA.send(stringifyJSON);
    }
    static pdPxVqDt_mhd_FoWY_TBZzGquN_HOzQxEQTA() {
        Y._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        k.alert("", n.current.notif.hsloNetConn);
    }
    static HgPjnlZg_xG_EgUkh_I_zyH_SWW_zUo(toc) {
        J.parse(toc);
    }
    static eH_AwRamqPFZm_____oM_ZGjkfgv_HB_rWe___() {
        this._HkPHGG__Oy_IkgYR_mSZqk_aW__RqMvERh_ = false;
        k.alert("", n.current.notif.hsloNetDisconn);
    }
    static aNO_GVmyZIKPv_LtA_lkBE() {
        this._HkPHGG__Oy_IkgYR_mSZqk_aW__RqMvERh_ = false;
    }
}
class N {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        q._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        this.xd_LULKZmorBVR_t_s_zHibfubt_ = new Map;
        this.yeX_fic__CXXL__Rgjhx = -1;
        this.isSpectator = false;
        this.teamAlternator = true;
        this.teamData = {
            1: {
                totalMass: 0,
                alive: 0,
                spectate: 0
            },
            2: {
                totalMass: 0,
                alive: 0,
                spectate: 0
            }
        };
        this.biggestIsOn = false;
        this.biggest = new P(0);
    }
    static clear() {
        this.xd_LULKZmorBVR_t_s_zHibfubt_.clear();
        console.log("cleared");
    }
    static remove(key) {
        this.xd_LULKZmorBVR_t_s_zHibfubt_["delete"](key);
    }
    static uTZffICOjdNGDruUUmWnhAIZfgUPm(question) {
        if (question === this.yeX_fic__CXXL__Rgjhx) {
            return {};
        }
        let gradable = this.xd_LULKZmorBVR_t_s_zHibfubt_.get(question);
        return void 0 === gradable && (gradable = this.rFZLtNVfdGYRuNVGl_m_JgR_fhS(question)), gradable;
    }
    static rFZLtNVfdGYRuNVGl_m_JgR_fhS(key) {
        const value = new P(key);
        return this.xd_LULKZmorBVR_t_s_zHibfubt_.set(key, value), value;
    }
    static chat(params, source, options, name) {
        let prefix = name || "Anonymous";
        if (!name && params === this.yeX_fic__CXXL__Rgjhx) {
            prefix = M.nick;
        } else {
            const window = this.xd_LULKZmorBVR_t_s_zHibfubt_.get(params);
            if (window !== void 0) {
                prefix = window.nick;
            }
        }
        if (1 === source || 3 === source) {
            k.normal(prefix, options);
        } else {
            if (2 == source) {
                k.command(prefix, options);
            }
        }
    }
}
class J {
    static parse(plain) {
        const value = new DataView(plain.data);
        const artistTrack = new D(value);
        const n_ = artistTrack.rNKRU__bQMnnL_l_uGy_sTSV_();
        if (1 === n_) {
            this.GTJ_Z_GBYToqmnGM_lGVtg_FyQ_fcWs_X_HuL(artistTrack);
        } else {
            if (2 === n_) {
                this.chat(artistTrack);
            } else {
                if (3 === n_) {
                    this.commander(artistTrack);
                } else {
                    if (4 === n_) {
                        this.yeX_fic__CXXL__Rgjhx(artistTrack);
                    } else {
                        if (5 === n_) {
                            this.tY___sBfDegBYCcJKAykKhZR_Zdz___(artistTrack);
                        } else {
                            void 0;
                        }
                    }
                }
            }
        }
    }
    static GTJ_Z_GBYToqmnGM_lGVtg_FyQ_fcWs_X_HuL(canCreateDiscussions) {
        if (M.PDnW_YiUP_ilIgVcz_t_iwvmmJT && !N.isSpectator) {
            Y.qrn_oe_eHsNQHra_HYuuvLKHoEX_aVDExt_n_sm();
        }
        if (!(M.PDnW_YiUP_ilIgVcz_t_iwvmmJT || !Z.bbK__VFfPoBbfF_b_FKZG || Z.ZKZ_w_DbZe_HhMUMcNJmLgvwZ_gK__r__fPMA)) {
            Y.biggest();
        }
        const i = N.teamAlternator ? 1 : 2;
        const self = N.teamData[i];
        self.totalMass = 0;
        self.alive = 0;
        self.spectate = 0;
        let n_ = canCreateDiscussions.rNKRU__bQMnnL_l_uGy_sTSV_();
        for (; n_--;) {
            const child = canCreateDiscussions.qsrT_kunMpWpa_peD__nrEt_xU___upE_IhDa();
            N.remove(child);
        }
        n_ = canCreateDiscussions.rNKRU__bQMnnL_l_uGy_sTSV_();
        for (; n_--;) {
            const password = canCreateDiscussions.qsrT_kunMpWpa_peD__nrEt_xU___upE_IhDa();
            const data = N.uTZffICOjdNGDruUUmWnhAIZfgUPm(password);
            const l_ = canCreateDiscussions.rNKRU__bQMnnL_l_uGy_sTSV_();
            if (1 & l_) {
                const text = decodeURIComponent(escape(canCreateDiscussions._NSSFQtEjdEhsOjJo_CJc()));
                if (2 === data._gWIaCbzSVrk_OJr__hRJ_IKeUB) {
                    k.alert(text, "joined the chatroom.");
                    data._gWIaCbzSVrk_OJr__hRJ_IKeUB = 1;
                } else {
                    if (1 === data._gWIaCbzSVrk_OJr__hRJ_IKeUB) {
                        k.alert(data.nick, "changed name to " + text);
                    }
                }
                data.nick = text;
            }
            if (2 & l_) {
                const c_ = canCreateDiscussions.rNKRU__bQMnnL_l_uGy_sTSV_();
                const m_ = canCreateDiscussions.rNKRU__bQMnnL_l_uGy_sTSV_();
                const forwardYears = canCreateDiscussions.rNKRU__bQMnnL_l_uGy_sTSV_();
                data._GSxfoaFaAL_jtI_jw_TcIaUZJs_C_cNlwt = "#" + (16777216 + (c_ << 16) + (m_ << 8) + forwardYears).toString(16).slice(1);
            }
            if (4 & l_) {
                data.skin = canCreateDiscussions._NSSFQtEjdEhsOjJo_CJc();
            }
            if (16 & l_) {
                data.x = canCreateDiscussions.___xG____qrVf_i_nLi_QN_br_();
                data.y = canCreateDiscussions.___xG____qrVf_i_nLi_QN_br_();
                data.mass = canCreateDiscussions.qsrT_kunMpWpa_peD__nrEt_xU___upE_IhDa();
            }
            if (32 & l_) {
                data.PDnW_YiUP_ilIgVcz_t_iwvmmJT = canCreateDiscussions.rNKRU__bQMnnL_l_uGy_sTSV_();
            }
            if (64 & l_) {
                data.sWOu_eQ_xJ__hT_EDCng_VS_HpApJKGC = canCreateDiscussions.rNKRU__bQMnnL_l_uGy_sTSV_();
            }
            data.team = i;
            if (data.PDnW_YiUP_ilIgVcz_t_iwvmmJT) {
                self.totalMass += data.mass;
                self.alive++;
            } else {
                self.spectate++;
            }
        }
        N.teamAlternator = !N.teamAlternator;
        const proto = canCreateDiscussions.rNKRU__bQMnnL_l_uGy_sTSV_();
        N.biggestIsOn = proto;
        if (proto) {
            N.biggest.x = canCreateDiscussions.___xG____qrVf_i_nLi_QN_br_();
            N.biggest.y = canCreateDiscussions.___xG____qrVf_i_nLi_QN_br_();
        }
    }
    static tY___sBfDegBYCcJKAykKhZR_Zdz___(canCreateDiscussions) {
        N.clear();
        for (let o_ = canCreateDiscussions.rNKRU__bQMnnL_l_uGy_sTSV_(); o_--;) {
            const password = canCreateDiscussions.qsrT_kunMpWpa_peD__nrEt_xU___upE_IhDa();
            const options = N.rFZLtNVfdGYRuNVGl_m_JgR_fhS(password);
            options.nick = decodeURIComponent(escape(canCreateDiscussions._NSSFQtEjdEhsOjJo_CJc()));
            const i_ = canCreateDiscussions.rNKRU__bQMnnL_l_uGy_sTSV_();
            const s_ = canCreateDiscussions.rNKRU__bQMnnL_l_uGy_sTSV_();
            const forwardYears = canCreateDiscussions.rNKRU__bQMnnL_l_uGy_sTSV_();
            options._GSxfoaFaAL_jtI_jw_TcIaUZJs_C_cNlwt = "#" + (16777216 + (i_ << 16) + (s_ << 8) + forwardYears).toString(16).slice(1);
            options.skin = canCreateDiscussions._NSSFQtEjdEhsOjJo_CJc();
            options.x = canCreateDiscussions.VlPs_caeS_Y_sRpa_n_v();
            options.y = canCreateDiscussions.VlPs_caeS_Y_sRpa_n_v();
            options.mass = canCreateDiscussions.qsrT_kunMpWpa_peD__nrEt_xU___upE_IhDa();
            options.PDnW_YiUP_ilIgVcz_t_iwvmmJT = canCreateDiscussions.rNKRU__bQMnnL_l_uGy_sTSV_();
            options.sWOu_eQ_xJ__hT_EDCng_VS_HpApJKGC = canCreateDiscussions.rNKRU__bQMnnL_l_uGy_sTSV_();
        }
        N.teamAlternator = true;
    }
    static chat(res) {
        const c = res.qsrT_kunMpWpa_peD__nrEt_xU___upE_IhDa();
        const debug_info = res.rNKRU__bQMnnL_l_uGy_sTSV_();
        const initial = decodeURIComponent(escape(res._NSSFQtEjdEhsOjJo_CJc()));
        if (3 === debug_info) {
            const i_ = initial.split("\u0002");
            N.chat(c, debug_info, i_[1], i_[0]);
        } else {
            N.chat(c, debug_info, initial);
        }
    }
    static commander(options) {
        const audioOffsetX = options.VlPs_caeS_Y_sRpa_n_v() + L.tIS_OJJxlHybnkVMgBTGuUCJTbVUtY____Z_tHO.x;
        const languageOffsetY = options.VlPs_caeS_Y_sRpa_n_v() + L.tIS_OJJxlHybnkVMgBTGuUCJTbVUtY____Z_tHO.y;
        const n_ = e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp;
        __.S__b__UxD_wFoVgUjfCsF_.add({
            x: audioOffsetX,
            y: languageOffsetY,
            x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp: n_
        });
    }
    static yeX_fic__CXXL__Rgjhx(canCreateDiscussions) {
        const proto = canCreateDiscussions.qsrT_kunMpWpa_peD__nrEt_xU___upE_IhDa();
        N.yeX_fic__CXXL__Rgjhx = proto;
    }
}
class Y {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        q._HkPHGG__Oy_IkgYR_mSZqk_aW__RqMvERh_ = true;
        this.nick();
        this.skin();
        this.tag();
        this.color();
        this.FlAiUrjbwphW___V_VUenEp();
        this.JUGUFltMcs__Gw_dHC_TV_a();
        this.DgMOH_yPtKpuYYkCT_nww();
        if (N.isSpectator) {
            this.spectator(true);
        }
    }
    static zdvaMoIpaJ_R_hCqj_n__Kv_fH(data) {
        return new DataView(new ArrayBuffer(data));
    }
    static nick() {
        if (q._HkPHGG__Oy_IkgYR_mSZqk_aW__RqMvERh_) {
            const utf8ByteString = unescape(encodeURIComponent(M.nick));
            let i = utf8ByteString.length;
            const data = this.zdvaMoIpaJ_R_hCqj_n__Kv_fH(2 + utf8ByteString.length);
            data.setUint8(0, 1, true);
            for (; i--;) {
                data.setUint8(i + 1, utf8ByteString.charCodeAt(i), true);
            }
            data.setUint8(1 + utf8ByteString.length, 0, true);
            q.send(data.buffer);
        }
    }
    static color() {
        if (q._HkPHGG__Oy_IkgYR_mSZqk_aW__RqMvERh_) {
            const self = this.zdvaMoIpaJ_R_hCqj_n__Kv_fH(4);
            self.setUint8(0, 2, true);
            self.setUint8(1, M._hWIBDAxRoXlAhxqqnSA_C_bSDMmAzV_CeDLlb.r, true);
            self.setUint8(2, M._hWIBDAxRoXlAhxqqnSA_C_bSDMmAzV_CeDLlb.g, true);
            self.setUint8(3, M._hWIBDAxRoXlAhxqqnSA_C_bSDMmAzV_CeDLlb.b, true);
            q.send(self.buffer);
        }
    }
    static skin() {
        if (q._HkPHGG__Oy_IkgYR_mSZqk_aW__RqMvERh_) {
            const utf8ByteString = M.skin;
            let i = utf8ByteString.length;
            const data = this.zdvaMoIpaJ_R_hCqj_n__Kv_fH(2 + utf8ByteString.length);
            data.setUint8(0, 4, true);
            for (; i--;) {
                data.setUint8(i + 1, utf8ByteString.charCodeAt(i), true);
            }
            data.setUint8(1 + utf8ByteString.length, 0, true);
            q.send(data.buffer);
        }
    }
    static FlAiUrjbwphW___V_VUenEp() {
        if (q._HkPHGG__Oy_IkgYR_mSZqk_aW__RqMvERh_ && V.FlAiUrjbwphW___V_VUenEp) {
            const data = this.zdvaMoIpaJ_R_hCqj_n__Kv_fH(8);
            data.setUint8(0, 8, true);
            data.setUint8(1, 1, true);
            const protocol = V.FlAiUrjbwphW___V_VUenEp.match(/game-(\w+-\d+).astr.io/);
            const newNodeLists = [];
            for (const lineHead of protocol ? protocol[1] : "local") {
                newNodeLists.push(lineHead.charCodeAt(0));
            }
            data.setUint8(2, 0 | newNodeLists[0], true);
            data.setUint8(3, 0 | newNodeLists[1], true);
            data.setUint8(4, 0 | newNodeLists[2], true);
            data.setUint8(5, 0 | newNodeLists[3], true);
            data.setUint16(6, 0 | newNodeLists[4], true);
            q.send(data.buffer);
        }
    }
    static tag() {
        if (q._HkPHGG__Oy_IkgYR_mSZqk_aW__RqMvERh_) {
            const utf8ByteString = M.tag;
            let i = utf8ByteString.length;
            const data = this.zdvaMoIpaJ_R_hCqj_n__Kv_fH(3 + utf8ByteString.length);
            data.setUint8(0, 8, true);
            data.setUint8(1, 2, true);
            for (; i--;) {
                data.setUint8(i + 2, utf8ByteString.charCodeAt(i), true);
            }
            data.setUint8(2 + utf8ByteString.length, 0, true);
            q.send(data.buffer);
        }
    }
    static qrn_oe_eHsNQHra_HYuuvLKHoEX_aVDExt_n_sm() {
        if (q._HkPHGG__Oy_IkgYR_mSZqk_aW__RqMvERh_) {
            const data = this.zdvaMoIpaJ_R_hCqj_n__Kv_fH(9);
            data.setUint8(0, 16, true);
            data.setUint16(1, 0 | M.x, true);
            data.setUint16(3, 0 | M.y, true);
            data.setUint32(5, M.mass, true);
            q.send(data.buffer);
        }
    }
    static JUGUFltMcs__Gw_dHC_TV_a() {
        if (q._HkPHGG__Oy_IkgYR_mSZqk_aW__RqMvERh_) {
            const data = this.zdvaMoIpaJ_R_hCqj_n__Kv_fH(2);
            const type = M.PDnW_YiUP_ilIgVcz_t_iwvmmJT ? 1 : 0;
            data.setUint8(0, 32, true);
            data.setUint8(1, type, true);
            q.send(data.buffer);
        }
    }
    static chat(type, data) {
        if (q._HkPHGG__Oy_IkgYR_mSZqk_aW__RqMvERh_) {
            const utf8ByteString = unescape(encodeURIComponent(data));
            const view = this.zdvaMoIpaJ_R_hCqj_n__Kv_fH(3 + utf8ByteString.length);
            view.setUint8(0, 64, true);
            view.setUint8(1, type, true);
            for (let i = utf8ByteString.length; i--;) {
                view.setUint8(i + 2, utf8ByteString.charCodeAt(i), true);
            }
            view.setUint8(2 + utf8ByteString.length, 0, true);
            q.send(view.buffer);
        }
    }
    static commander() {
        if (q._HkPHGG__Oy_IkgYR_mSZqk_aW__RqMvERh_) {
            const view = this.zdvaMoIpaJ_R_hCqj_n__Kv_fH(5);
            view.setUint8(0, 128, true);
            view.setInt16(1, 0 | m.nHn_uJa_qrYJz__AQDV_BQwX, true);
            view.setInt16(3, 0 | m.XmLVlSUMjhTrEFS_P_ggJSvZB, true);
            q.send(view.buffer);
        }
    }
    static spectator(data) {
        if (q._HkPHGG__Oy_IkgYR_mSZqk_aW__RqMvERh_ && N.isSpectator) {
            if (data) {
                const value = $("#tag").val();
                const utf8ByteString = $("#tag2").val();
                const data = this.zdvaMoIpaJ_R_hCqj_n__Kv_fH(5 + value.length + utf8ByteString.length);
                data.setUint8(0, 0, true);
                data.setUint8(1, 1, true);
                data.setUint8(2, 1, true);
                let i = value.length;
                for (; i--;) {
                    data.setUint8(i + 3, value.charCodeAt(i), true);
                }
                data.setUint8(3 + value.length, 0, true);
                i = utf8ByteString.length;
                for (; i--;) {
                    data.setUint8(i + 4 + value.length, utf8ByteString.charCodeAt(i), true);
                }
                data.setUint8(4 + value.length + utf8ByteString.length, 0, true);
                q.send(data.buffer);
            } else {
                const data = this.zdvaMoIpaJ_R_hCqj_n__Kv_fH(3);
                data.setUint8(0, 0, true);
                data.setUint8(1, 1, true);
                data.setUint8(2, 0, true);
                q.send(data.buffer);
            }
        }
    }
    static DgMOH_yPtKpuYYkCT_nww() {
        if (q._HkPHGG__Oy_IkgYR_mSZqk_aW__RqMvERh_) {
            const type = M.sWOu_eQ_xJ__hT_EDCng_VS_HpApJKGC ? 1 : 0;
            const data = this.zdvaMoIpaJ_R_hCqj_n__Kv_fH(3);
            data.setUint8(0, 0, true);
            data.setUint8(1, 8, true);
            data.setUint8(2, type, true);
            q.send(data.buffer);
        }
    }
    static biggest() {
        if (q._HkPHGG__Oy_IkgYR_mSZqk_aW__RqMvERh_) {
            const t_ = Z.ytdf_POk_jale_VNaPXFWCeyu_sjmeZ.x;
            const o_ = Z.ytdf_POk_jale_VNaPXFWCeyu_sjmeZ.y;
            const data = this.zdvaMoIpaJ_R_hCqj_n__Kv_fH(6);
            data.setUint8(0, 0, true);
            data.setUint8(1, 16, true);
            data.setUint16(2, 0 | t_, true);
            data.setUint16(4, 0 | o_, true);
            q.send(data.buffer);
        }
    }
}
class __ {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.canvas = document.getElementById("canvas");
        this.NCQOf__Wa__H_AN_o_WuQWFRC_U = this.canvas.getContext("2d");
        this._xBO_iva_u_Ovt_ev_y_OT_ = 2 * Math.PI;
        this.L_j_A_R_na_dHs_FERmuZKWA_ZKpS_e_Lti = new Map;
        this.S__b__UxD_wFoVgUjfCsF_ = new Set;
        this.y_e_wrMLB_g_s____p_WSE_sQwrtePaTMHQU_C = new Set;
        this.Wj_Xe__B_LUsXInjFinEPm = this.z_IxGwBxuU_Js_aUmDml_LE_XIpek_u_CwUkt();
        j._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        O._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        this.resizeCanvas();
        window.onresize = () => {
            this.resizeCanvas();
        };
        this.hasFocus = true;
        window.addEventListener("focus", () => {
            setTimeout(() => {
                this.hasFocus = document.hasFocus();
            }, 300);
        });
        window.addEventListener("blur", () => {
            setTimeout(() => {
                this.hasFocus = document.hasFocus();
            }, 300);
        });
        document.addEventListener("visibilitychange", () => {
            setTimeout(() => {
                this.hasFocus = document.hasFocus();
            }, 300);
        });
    }
    static resizeCanvas() {
        this.canvas.width = 0 | window.innerWidth;
        this.canvas.height = 0 | window.innerHeight;
    }
    static BbTTUwqPpGOG_MtK_Cz_UXC_VwAYpNeno_cO_() {
        this.NCQOf__Wa__H_AN_o_WuQWFRC_U.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.NCQOf__Wa__H_AN_o_WuQWFRC_U.save();
        this.vanillaGrid();
        const cur_translate = (this.canvas.width >> 1) / Z.EgIT_b_BqyckZar_B_qARQPewHAIUUVxpYUoz_ - Z.x;
        const peak_y = (this.canvas.height >> 1) / Z.EgIT_b_BqyckZar_B_qARQPewHAIUUVxpYUoz_ - Z.y;
        this.NCQOf__Wa__H_AN_o_WuQWFRC_U.scale(Z.EgIT_b_BqyckZar_B_qARQPewHAIUUVxpYUoz_, Z.EgIT_b_BqyckZar_B_qARQPewHAIUUVxpYUoz_);
        this.NCQOf__Wa__H_AN_o_WuQWFRC_U.translate(cur_translate, peak_y);
        O.GTJ_Z_GBYToqmnGM_lGVtg_FyQ_fcWs_X_HuL();
        j.VGuSmIg_DpT_VOUdWVShDcD();
        this.border();
        I.VGuSmIg_DpT_VOUdWVShDcD();
        Q.VGuSmIg_DpT_VOUdWVShDcD();
        this.H_I_qD_o_y_LHLKIJa_qP__M_XPio();
        this.tIgAoRMRSNQ_cipax_eKibgxktLL____Ddlhwb();
        W.VGuSmIg_DpT_VOUdWVShDcD();
        this.AgJoGcs_Dj_UYxVQhB_i();
        this.commands();
        X.FXdxSpL_A_Ig_Jyqv_YbX_C_Go_NO_();
        this.NCQOf__Wa__H_AN_o_WuQWFRC_U.restore();
    }
    static vanillaGrid() {
        if ("off" !== i.vanillaGrid) {
            const ctx = this.NCQOf__Wa__H_AN_o_WuQWFRC_U;
            const scale = Z.EgIT_b_BqyckZar_B_qARQPewHAIUUVxpYUoz_;
            const i = this.canvas.width / scale;
            const height = this.canvas.height / scale;
            let x = (-Z.x + i / 2) % 50;
            let h = (-Z.y + height / 2) % 50;
            ctx.strokeStyle = u.gridColor;
            ctx.lineWidth = 0 | Math.min(u.gridWidth, 20) * Z.EgIT_b_BqyckZar_B_qARQPewHAIUUVxpYUoz_;
            ctx.globalAlpha = 0.2 * scale;
            ctx.beginPath();
            for (; x < i;) {
                ctx.moveTo(x * scale, 0);
                ctx.lineTo(x * scale, height * scale);
                x = x + 50;
            }
            for (; h < height;) {
                ctx.moveTo(0, h * scale);
                ctx.lineTo(i * scale, h * scale);
                h = h + 50;
            }
            ctx.closePath();
            ctx.stroke();
            ctx.globalAlpha = 1;
        }
    }
    static border() {
        const ctx = this.NCQOf__Wa__H_AN_o_WuQWFRC_U;
        const innerR = u.borderWidth >> 1;
        ctx.strokeStyle = u.borderColor;
        ctx.lineWidth = u.borderWidth;
        ctx.strokeRect(L.DQ__RLVfMX__sNtXsMQEEgIAbY - innerR, L.U_xufzeSJl_d_xqNxKfRppgJfk_C_Ln - innerR, L.FSuy_wC_Mu_HW_iAyvaeWhk_N + u.borderWidth, L.FSuy_wC_Mu_HW_iAyvaeWhk_N + u.borderWidth);
    }
    static AgJoGcs_Dj_UYxVQhB_i() {
        const ctx = this.NCQOf__Wa__H_AN_o_WuQWFRC_U;
        const o_ = "off" !== i.cellMass;
        const a_ = "off" !== i.cellNick;
        const verbose = "on" === i.hideOwnNick;
        const skip_emitter = "on" === i.hideOwnMass;
        const s_ = "on" === i.urlSkins;
        const r_ = u.skinBorder / 100;
        const is_android = "on" === i.teamIndicator;
        const dim = u.indicatorSize;
        const g = u.cellTransparency / 100;
        const g_ = u.cellNickSize / 100;
        const d_ = u.cellMassSize / 100;
        const undefined = i.cellTextAnimation;
        const value = u.lightenCellColor / 100;
        const useGroup = "on" === i.activeTurnMarker;
        ctx.strokeStyle = u.virusBorderColor;
        ctx.lineWidth = u.virusBorderWidth;
        for (const info of F.kphn_EXXwmJRxnH__YKcCbF) {
            const pOptions = info.__OluYOvR_CPjXySaAIbllXl || info.Wu_RLJ_ZwC_QfnJHmXIk__K____va_IYrR;
            const a = info.fadeStartTime ? Math.max(1 - info.YXOe_f_u_e_JA_p_e_Sh_(), 0.01) : 1;
            if (info.YXOe_f_u_e_JA_p_e_Sh_(), ctx.beginPath(), ctx.arc(info.AqkfEkZ_MHBCjZzBz__UWG_X_B_ArFO, info.QfPG__AEfcA_u_T_pjMCVYAyl, info.ojQ_m_l_PvKL_PiS_lX_Bc_xFUD_tQPvQ + 5, 0, this._xBO_iva_u_Ovt_ev_y_OT_, true), ctx.closePath(), info.olP_fXeXiO_TVbocyOH_jW) {
                ctx.fillStyle = u.virusColor;
                ctx.globalAlpha = 0.7;
                ctx.fill();
                ctx.globalAlpha = 1;
                ctx.stroke();
            } else {
                const foreColor = 1 > value ? O.getColor(info._hWIBDAxRoXlAhxqqnSA_C_bSDMmAzV_CeDLlb, value) : info._GSxfoaFaAL_jtI_jw_TcIaUZJs_C_cNlwt;
                ctx.fillStyle = pOptions && this.y_e_wrMLB_g_s____p_WSE_sQwrtePaTMHQU_C.has(info.dCLa_EBM_UzuIZDY__LfPe) ? O.color : foreColor;
                if (1 > g * a) {
                    ctx.globalAlpha = g * a;
                    ctx.fill();
                    ctx.globalAlpha = 1;
                } else {
                    ctx.fill();
                }
            }
            if (!info.Z_bKw_lJfbX_dTXP_MXTiOGqxVkB) {
                if (!info.olP_fXeXiO_TVbocyOH_jW) {
                    if (is_android && info.Wu_RLJ_ZwC_QfnJHmXIk__K____va_IYrR && info._fn___ztljQxUn_W_hZqEJn === M._fn___ztljQxUn_W_hZqEJn) {
                        ctx.drawImage(this.Wj_Xe__B_LUsXInjFinEPm, info.AqkfEkZ_MHBCjZzBz__UWG_X_B_ArFO - dim / 2, info.QfPG__AEfcA_u_T_pjMCVYAyl - info.ojQ_m_l_PvKL_PiS_lX_Bc_xFUD_tQPvQ - 10 - dim, dim, dim);
                    }
                    const g_avatarImage = !!s_ && this._PzZzLBZw_WVXT_eXPQvstW_jKGst_kookw(info);
                    const bigPointSize = (info.ojQ_m_l_PvKL_PiS_lX_Bc_xFUD_tQPvQ + 5) * r_;
                    if (g_avatarImage && ctx.drawImage(g_avatarImage, info.AqkfEkZ_MHBCjZzBz__UWG_X_B_ArFO - bigPointSize, info.QfPG__AEfcA_u_T_pjMCVYAyl - bigPointSize, 2 * bigPointSize, 2 * bigPointSize), useGroup && info.Wu_RLJ_ZwC_QfnJHmXIk__K____va_IYrR && 0 < info._fn___ztljQxUn_W_hZqEJn) {
                        const U_ = (info.ojQ_m_l_PvKL_PiS_lX_Bc_xFUD_tQPvQ + 5) / 10;
                        ctx.beginPath();
                        ctx.arc(info.AqkfEkZ_MHBCjZzBz__UWG_X_B_ArFO, info.QfPG__AEfcA_u_T_pjMCVYAyl, info.ojQ_m_l_PvKL_PiS_lX_Bc_xFUD_tQPvQ + 5 - (U_ >> 1), 0, this._xBO_iva_u_Ovt_ev_y_OT_, true);
                        ctx.lineWidth = 0 | U_;
                        ctx.strokeStyle = info._fn___ztljQxUn_W_hZqEJn === M._fn___ztljQxUn_W_hZqEJn ? u.multiboxActive : u.multiboxInactive;
                        ctx.stroke();
                        ctx.strokeStyle = u.virusBorderColor;
                        ctx.lineWidth = u.virusBorderWidth;
                    }
                    if (1 === a && (info.Wu_RLJ_ZwC_QfnJHmXIk__K____va_IYrR && !verbose || !info.Wu_RLJ_ZwC_QfnJHmXIk__K____va_IYrR && a_)) {
                        const frame = X.nick(info);
                        if (frame && frame.width && frame.height) {
                            const currHeight = "on" === undefined ? info.ojQ_m_l_PvKL_PiS_lX_Bc_xFUD_tQPvQ : "stepped" === undefined ? 50 + 75 * (0 | info.ojQ_m_l_PvKL_PiS_lX_Bc_xFUD_tQPvQ / 75) : info.YlYfs_BFUto_Zc_k_W_kU_ikDV_a__N;
                            const scale = currHeight / 3 / frame.height * g_;
                            const showWidth = frame.width * scale;
                            const tempH = frame.height * scale;
                            if (showWidth < 4 * info.YlYfs_BFUto_Zc_k_W_kU_ikDV_a__N) {
                                ctx.drawImage(frame, info.AqkfEkZ_MHBCjZzBz__UWG_X_B_ArFO - (showWidth >> 1), info.QfPG__AEfcA_u_T_pjMCVYAyl - (tempH >> 1), showWidth, tempH);
                            }
                        }
                    }
                }
                if (1 === a && (info.Wu_RLJ_ZwC_QfnJHmXIk__K____va_IYrR && !skip_emitter || !info.Wu_RLJ_ZwC_QfnJHmXIk__K____va_IYrR && o_)) {
                    const frame = X.mass(info);
                    if (frame && frame.width && frame.height) {
                        const currHeight = "on" === undefined ? info.ojQ_m_l_PvKL_PiS_lX_Bc_xFUD_tQPvQ : "stepped" === undefined ? 50 + 75 * (0 | info.ojQ_m_l_PvKL_PiS_lX_Bc_xFUD_tQPvQ / 75) : info.YlYfs_BFUto_Zc_k_W_kU_ikDV_a__N;
                        const scale = currHeight / 3 / frame.height * d_;
                        const showWidth = frame.width * scale;
                        const tempH = frame.height * scale;
                        const imageOffsetY = info.QfPG__AEfcA_u_T_pjMCVYAyl + (info.Hzyw_YrIJF_kaw_lij_POds__IM_t_raLlIO || info.Wu_RLJ_ZwC_QfnJHmXIk__K____va_IYrR && verbose || !info.Wu_RLJ_ZwC_QfnJHmXIk__K____va_IYrR && !a_ ? -tempH >> 1 : tempH >> 2);
                        ctx.drawImage(frame, info.AqkfEkZ_MHBCjZzBz__UWG_X_B_ArFO - (showWidth >> 1), imageOffsetY, showWidth, tempH);
                    }
                }
            }
        }
    }
    static _PzZzLBZw_WVXT_eXPQvstW_jKGst_kookw(options) {
        const contribGroupNodeId = options.Wu_RLJ_ZwC_QfnJHmXIk__K____va_IYrR ? 2 === options._fn___ztljQxUn_W_hZqEJn ? M.skin2 : M.skin : options.skin;
        if (!contribGroupNodeId) {
            return false;
        }
        const a_ = this.L_j_A_R_na_dHs_FERmuZKWA_ZKpS_e_Lti.get(contribGroupNodeId);
        return void 0 === a_ ? (this.lfTsVQi_qxG_nkW__xdbiRtVl_zPeTYah_jqv(contribGroupNodeId), false) : a_;
    }
    static lfTsVQi_qxG_nkW__xdbiRtVl_zPeTYah_jqv(texture) {
        this.L_j_A_R_na_dHs_FERmuZKWA_ZKpS_e_Lti.set(texture, false);
        const img = new Image;
        img.crossOrigin = "anonymous";
        img.onload = () => {
            const hcanvas = document.createElement("canvas");
            const ctx = hcanvas.getContext("2d");
            hcanvas.width = 512;
            hcanvas.height = 512;
            ctx.beginPath();
            ctx.arc(256, 256, 256, 0, this._xBO_iva_u_Ovt_ev_y_OT_, true);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img, 0, 0, 512, 512);
            img.onload = null;
            img.src = hcanvas.toDataURL();
            this.L_j_A_R_na_dHs_FERmuZKWA_ZKpS_e_Lti.set(texture, img);
        };
        img.src = texture;
    }
    static commands() {
        const ctx = this.NCQOf__Wa__H_AN_o_WuQWFRC_U;
        const LinkMaxVerticalDistanceFromArticle = 1250;
        const cmax = 1e3;
        const cmin = 0 | cmax / 3;
        const addressProcessing = "off" === i.commander;
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 5;
        for (const length of this.S__b__UxD_wFoVgUjfCsF_.values()) {
            const x = length.x;
            const y = length.y;
            const verticalDistanceFromArticle = e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp - length.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp;
            if (verticalDistanceFromArticle > LinkMaxVerticalDistanceFromArticle) {
                this.S__b__UxD_wFoVgUjfCsF_["delete"](length);
                continue;
            }
            if (!(addressProcessing || 1 > verticalDistanceFromArticle)) {
                const r = cmax * verticalDistanceFromArticle / LinkMaxVerticalDistanceFromArticle;
                ctx.globalAlpha = r > cmin ? (cmax - r) / (cmax - cmin) : 1;
                const g = ctx.createRadialGradient(x, y, 0.7 * r, x, y, r);
                g.addColorStop(0, "rgba(0,0,0,0)");
                g.addColorStop(1, u.commanderColor);
                ctx.fillStyle = g;
                ctx.beginPath();
                ctx.arc(x, y, r, 0, this._xBO_iva_u_Ovt_ev_y_OT_, true);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
        }
    }
    static H_I_qD_o_y_LHLKIJa_qP__M_XPio() {
        if ("off" !== i.cursorLine) {
            const context = this.NCQOf__Wa__H_AN_o_WuQWFRC_U;
            context.strokeStyle = "#fff";
            context.lineWidth = 4;
            context.lineCap = "round";
            context.lineJoin = "round";
            const point_x = (m.x - this.canvas.width / 2) / Z.EgIT_b_BqyckZar_B_qARQPewHAIUUVxpYUoz_ + Z.x;
            const hLine2 = (m.y - this.canvas.height / 2) / Z.EgIT_b_BqyckZar_B_qARQPewHAIUUVxpYUoz_ + Z.y;
            context.beginPath();
            for (const relXY of F._lZB__ml_T_bVtWhzdIxiJ_JgOS.values()) {
                if (relXY._fn___ztljQxUn_W_hZqEJn === M._fn___ztljQxUn_W_hZqEJn) {
                    context.moveTo(relXY.AqkfEkZ_MHBCjZzBz__UWG_X_B_ArFO, relXY.QfPG__AEfcA_u_T_pjMCVYAyl);
                    context.lineTo(point_x, hLine2);
                }
            }
            context.closePath();
            context.stroke();
        }
    }
    static tIgAoRMRSNQ_cipax_eKibgxktLL____Ddlhwb() {
        if ("off" !== i.splitRings) {
            const ctxfx = __.NCQOf__Wa__H_AN_o_WuQWFRC_U;
            ctxfx.lineWidth = 3;
            ctxfx.strokeStyle = "#656565";
            ctxfx.beginPath();
            F._lZB__ml_T_bVtWhzdIxiJ_JgOS.forEach((data) => {
                if (!(60 > data.YlYfs_BFUto_Zc_k_W_kU_ikDV_a__N)) {
                    ctxfx.moveTo(data.AqkfEkZ_MHBCjZzBz__UWG_X_B_ArFO + 800, data.QfPG__AEfcA_u_T_pjMCVYAyl);
                    ctxfx.arc(data.AqkfEkZ_MHBCjZzBz__UWG_X_B_ArFO, data.QfPG__AEfcA_u_T_pjMCVYAyl, 800, 0, this._xBO_iva_u_Ovt_ev_y_OT_, true);
                }
            });
            ctxfx.closePath();
            ctxfx.stroke();
        }
    }
    static z_IxGwBxuU_Js_aUmDml_LE_XIpek_u_CwUkt() {
        const canvasSize = 150;
        const canvas = document.createElement("canvas");
        canvas.width = canvasSize;
        canvas.height = canvasSize;
        const context = canvas.getContext("2d");
        return context.textAlign = "center", context.textBaseline = "middle", context.font = "900 " + canvasSize + "px Font Awesome\\ 5 Free", context.fillStyle = "rgba(255,255,255,1)", context.fillText("\uf107", canvasSize / 2, canvasSize / 2), canvas;
    }
}
class e_ {
    static _mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q() {
        this.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp = Date.now();
        if (!document.getElementById("ZXRnElcIahez")) {
            $("#info-text").show();
        }
        V._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        o._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        A._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        F._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        M._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        Z._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        N._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        __._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q();
        this._mR___RsnD_O_CoU_jPb_efouS_ = new a(() => {
            this.BbTTUwqPpGOG_MtK_Cz_UXC_VwAYpNeno_cO_();
        });
        setInterval(() => {
            m.send();
        }, 40);
        setInterval(() => {
            H.F_hQJ_WhKeujsAcyI_mde();
        }, 1e3);
    }
    static BbTTUwqPpGOG_MtK_Cz_UXC_VwAYpNeno_cO_() {
        e_.x_bLqruZP_x_gwAmSGC_dzK_e_t_bhd_n_bCp = Date.now();
        F.GTJ_Z_GBYToqmnGM_lGVtg_FyQ_fcWs_X_HuL();
        M.GTJ_Z_GBYToqmnGM_lGVtg_FyQ_fcWs_X_HuL();
        Z.GTJ_Z_GBYToqmnGM_lGVtg_FyQ_fcWs_X_HuL();
        __.BbTTUwqPpGOG_MtK_Cz_UXC_VwAYpNeno_cO_();
        y.BbTTUwqPpGOG_MtK_Cz_UXC_VwAYpNeno_cO_();
        w.BbTTUwqPpGOG_MtK_Cz_UXC_VwAYpNeno_cO_();
        x.GTJ_Z_GBYToqmnGM_lGVtg_FyQ_fcWs_X_HuL();
        S.GTJ_Z_GBYToqmnGM_lGVtg_FyQ_fcWs_X_HuL();
        T.GTJ_Z_GBYToqmnGM_lGVtg_FyQ_fcWs_X_HuL();
    }
    static browserVersion() {
        const sArrDayId = navigator.userAgent.match(/Chrom($|ium)\/([0-9]+)\./);
        return !!sArrDayId && parseInt(sArrDayId[2], 10);
    }
}
window.onload = () => {
    return $("#loading-screen").html('<div class="ls-title ">Astrio</div><div class="ls-spinner "><span id="ls-icon"><i class="fa fa-circle-o-notch fa-spin "></i></span><span id="ls - message "> Loading...</span></div>'), 49 > e_.browserVersion() ? ($("#ls-icon").html('<i class="fa fa - chrome " aria-hidden="true "></i>'), void $("#ls-message").text("Only Chrome version 49 or higher is supported.")) : void(n._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q(), e_._mQHg_CeF_gcskwRTwjBtXX_fLZgFPyZew_Q(), $("#bundlejs").remove(),
        $("#loading-screen").fadeOut(500));
};
