export namespace types {
	
	export class ConnectionCluster {
	    enable?: boolean;
	
	    static createFrom(source: any = {}) {
	        return new ConnectionCluster(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.enable = source["enable"];
	    }
	}
	export class ConnectionSentinel {
	    enable?: boolean;
	    master?: string;
	    username?: string;
	    password?: string;
	
	    static createFrom(source: any = {}) {
	        return new ConnectionSentinel(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.enable = source["enable"];
	        this.master = source["master"];
	        this.username = source["username"];
	        this.password = source["password"];
	    }
	}
	export class ConnectionSSH {
	    enable?: boolean;
	    addr?: string;
	    port?: number;
	    loginType?: string;
	    username?: string;
	    password?: string;
	    pkFile?: string;
	    passphrase?: string;
	
	    static createFrom(source: any = {}) {
	        return new ConnectionSSH(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.enable = source["enable"];
	        this.addr = source["addr"];
	        this.port = source["port"];
	        this.loginType = source["loginType"];
	        this.username = source["username"];
	        this.password = source["password"];
	        this.pkFile = source["pkFile"];
	        this.passphrase = source["passphrase"];
	    }
	}
	export class ConnectionSSL {
	    enable?: boolean;
	    keyFile?: string;
	    certFile?: string;
	    caFile?: string;
	    allowInsecure?: boolean;
	    sni?: string;
	
	    static createFrom(source: any = {}) {
	        return new ConnectionSSL(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.enable = source["enable"];
	        this.keyFile = source["keyFile"];
	        this.certFile = source["certFile"];
	        this.caFile = source["caFile"];
	        this.allowInsecure = source["allowInsecure"];
	        this.sni = source["sni"];
	    }
	}
	export class Connection {
	    name: string;
	    group?: string;
	    lastDB: number;
	    addr?: string;
	    port?: number;
	    username?: string;
	    password?: string;
	    defaultFilter?: string;
	    keySeparator?: string;
	    connTimeout?: number;
	    execTimeout?: number;
	    dbFilterType: string;
	    dbFilterList: number[];
	    keyView?: number;
	    loadSize?: number;
	    markColor?: string;
	    refreshInterval?: number;
	    alias?: {[key: number]: string};
	    ssl?: ConnectionSSL;
	    ssh?: ConnectionSSH;
	    sentinel?: ConnectionSentinel;
	    cluster?: ConnectionCluster;
	    type?: string;
	    connections?: Connection[];
	
	    static createFrom(source: any = {}) {
	        return new Connection(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.name = source["name"];
	        this.group = source["group"];
	        this.lastDB = source["lastDB"];
	        this.addr = source["addr"];
	        this.port = source["port"];
	        this.username = source["username"];
	        this.password = source["password"];
	        this.defaultFilter = source["defaultFilter"];
	        this.keySeparator = source["keySeparator"];
	        this.connTimeout = source["connTimeout"];
	        this.execTimeout = source["execTimeout"];
	        this.dbFilterType = source["dbFilterType"];
	        this.dbFilterList = source["dbFilterList"];
	        this.keyView = source["keyView"];
	        this.loadSize = source["loadSize"];
	        this.markColor = source["markColor"];
	        this.refreshInterval = source["refreshInterval"];
	        this.alias = source["alias"];
	        this.ssl = this.convertValues(source["ssl"], ConnectionSSL);
	        this.ssh = this.convertValues(source["ssh"], ConnectionSSH);
	        this.sentinel = this.convertValues(source["sentinel"], ConnectionSentinel);
	        this.cluster = this.convertValues(source["cluster"], ConnectionCluster);
	        this.type = source["type"];
	        this.connections = this.convertValues(source["connections"], Connection);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	export class ConnectionConfig {
	    name: string;
	    group?: string;
	    lastDB: number;
	    addr?: string;
	    port?: number;
	    username?: string;
	    password?: string;
	    defaultFilter?: string;
	    keySeparator?: string;
	    connTimeout?: number;
	    execTimeout?: number;
	    dbFilterType: string;
	    dbFilterList: number[];
	    keyView?: number;
	    loadSize?: number;
	    markColor?: string;
	    refreshInterval?: number;
	    alias?: {[key: number]: string};
	    ssl?: ConnectionSSL;
	    ssh?: ConnectionSSH;
	    sentinel?: ConnectionSentinel;
	    cluster?: ConnectionCluster;
	
	    static createFrom(source: any = {}) {
	        return new ConnectionConfig(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.name = source["name"];
	        this.group = source["group"];
	        this.lastDB = source["lastDB"];
	        this.addr = source["addr"];
	        this.port = source["port"];
	        this.username = source["username"];
	        this.password = source["password"];
	        this.defaultFilter = source["defaultFilter"];
	        this.keySeparator = source["keySeparator"];
	        this.connTimeout = source["connTimeout"];
	        this.execTimeout = source["execTimeout"];
	        this.dbFilterType = source["dbFilterType"];
	        this.dbFilterList = source["dbFilterList"];
	        this.keyView = source["keyView"];
	        this.loadSize = source["loadSize"];
	        this.markColor = source["markColor"];
	        this.refreshInterval = source["refreshInterval"];
	        this.alias = source["alias"];
	        this.ssl = this.convertValues(source["ssl"], ConnectionSSL);
	        this.ssh = this.convertValues(source["ssh"], ConnectionSSH);
	        this.sentinel = this.convertValues(source["sentinel"], ConnectionSentinel);
	        this.cluster = this.convertValues(source["cluster"], ConnectionCluster);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	
	
	export class JSResp {
	    success: boolean;
	    msg: string;
	    data?: any;
	
	    static createFrom(source: any = {}) {
	        return new JSResp(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.success = source["success"];
	        this.msg = source["msg"];
	        this.data = source["data"];
	    }
	}
	export class KeyDetailParam {
	    server: string;
	    db: number;
	    key: any;
	    format?: string;
	    decode?: string;
	    matchPattern?: string;
	    reset: boolean;
	    full: boolean;
	
	    static createFrom(source: any = {}) {
	        return new KeyDetailParam(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.server = source["server"];
	        this.db = source["db"];
	        this.key = source["key"];
	        this.format = source["format"];
	        this.decode = source["decode"];
	        this.matchPattern = source["matchPattern"];
	        this.reset = source["reset"];
	        this.full = source["full"];
	    }
	}
	export class KeySummaryParam {
	    server: string;
	    db: number;
	    key: any;
	
	    static createFrom(source: any = {}) {
	        return new KeySummaryParam(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.server = source["server"];
	        this.db = source["db"];
	        this.key = source["key"];
	    }
	}
	export class PreferencesCli {
	    fontFamily: string[];
	    fontSize: number;
	    cursorStyle: string;
	
	    static createFrom(source: any = {}) {
	        return new PreferencesCli(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.fontFamily = source["fontFamily"];
	        this.fontSize = source["fontSize"];
	        this.cursorStyle = source["cursorStyle"];
	    }
	}
	export class PreferencesEditor {
	    font: string;
	    fontFamily: string[];
	    fontSize: number;
	    showLineNum: boolean;
	    showFolding: boolean;
	
	    static createFrom(source: any = {}) {
	        return new PreferencesEditor(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.font = source["font"];
	        this.fontFamily = source["fontFamily"];
	        this.fontSize = source["fontSize"];
	        this.showLineNum = source["showLineNum"];
	        this.showFolding = source["showFolding"];
	    }
	}
	export class PreferencesGeneral {
	    theme: string;
	    language: string;
	    font: string;
	    fontFamily: string[];
	    fontSize: number;
	    scanSize: number;
	    keyIconStyle: number;
	    useSysProxy: boolean;
	    useSysProxyHttp: boolean;
	    checkUpdate: boolean;
	    skipVersion: string;
	
	    static createFrom(source: any = {}) {
	        return new PreferencesGeneral(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.theme = source["theme"];
	        this.language = source["language"];
	        this.font = source["font"];
	        this.fontFamily = source["fontFamily"];
	        this.fontSize = source["fontSize"];
	        this.scanSize = source["scanSize"];
	        this.keyIconStyle = source["keyIconStyle"];
	        this.useSysProxy = source["useSysProxy"];
	        this.useSysProxyHttp = source["useSysProxyHttp"];
	        this.checkUpdate = source["checkUpdate"];
	        this.skipVersion = source["skipVersion"];
	    }
	}
	export class PreferencesBehavior {
	    asideWidth: number;
	    windowWidth: number;
	    windowHeight: number;
	    windowMaximised: boolean;
	    windowPosX: number;
	    windowPosY: number;
	
	    static createFrom(source: any = {}) {
	        return new PreferencesBehavior(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.asideWidth = source["asideWidth"];
	        this.windowWidth = source["windowWidth"];
	        this.windowHeight = source["windowHeight"];
	        this.windowMaximised = source["windowMaximised"];
	        this.windowPosX = source["windowPosX"];
	        this.windowPosY = source["windowPosY"];
	    }
	}
	export class Preferences {
	    behavior: PreferencesBehavior;
	    general: PreferencesGeneral;
	    editor: PreferencesEditor;
	    cli: PreferencesCli;
	
	    static createFrom(source: any = {}) {
	        return new Preferences(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.behavior = this.convertValues(source["behavior"], PreferencesBehavior);
	        this.general = this.convertValues(source["general"], PreferencesGeneral);
	        this.editor = this.convertValues(source["editor"], PreferencesEditor);
	        this.cli = this.convertValues(source["cli"], PreferencesCli);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	
	
	
	export class SetHashParam {
	    server: string;
	    db: number;
	    key: any;
	    field?: string;
	    newField?: string;
	    value: any;
	    format?: string;
	    decode?: string;
	    retFormat?: string;
	    retDecode?: string;
	
	    static createFrom(source: any = {}) {
	        return new SetHashParam(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.server = source["server"];
	        this.db = source["db"];
	        this.key = source["key"];
	        this.field = source["field"];
	        this.newField = source["newField"];
	        this.value = source["value"];
	        this.format = source["format"];
	        this.decode = source["decode"];
	        this.retFormat = source["retFormat"];
	        this.retDecode = source["retDecode"];
	    }
	}
	export class SetKeyParam {
	    server: string;
	    db: number;
	    key: any;
	    keyType: string;
	    value: any;
	    ttl: number;
	    format?: string;
	    decode?: string;
	
	    static createFrom(source: any = {}) {
	        return new SetKeyParam(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.server = source["server"];
	        this.db = source["db"];
	        this.key = source["key"];
	        this.keyType = source["keyType"];
	        this.value = source["value"];
	        this.ttl = source["ttl"];
	        this.format = source["format"];
	        this.decode = source["decode"];
	    }
	}
	export class SetListParam {
	    server: string;
	    db: number;
	    key: any;
	    index: number;
	    value: any;
	    format?: string;
	    decode?: string;
	    retFormat?: string;
	    retDecode?: string;
	
	    static createFrom(source: any = {}) {
	        return new SetListParam(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.server = source["server"];
	        this.db = source["db"];
	        this.key = source["key"];
	        this.index = source["index"];
	        this.value = source["value"];
	        this.format = source["format"];
	        this.decode = source["decode"];
	        this.retFormat = source["retFormat"];
	        this.retDecode = source["retDecode"];
	    }
	}
	export class SetSetParam {
	    server: string;
	    db: number;
	    key: any;
	    value: any;
	    newValue: any;
	    format?: string;
	    decode?: string;
	    retFormat?: string;
	    retDecode?: string;
	
	    static createFrom(source: any = {}) {
	        return new SetSetParam(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.server = source["server"];
	        this.db = source["db"];
	        this.key = source["key"];
	        this.value = source["value"];
	        this.newValue = source["newValue"];
	        this.format = source["format"];
	        this.decode = source["decode"];
	        this.retFormat = source["retFormat"];
	        this.retDecode = source["retDecode"];
	    }
	}
	export class SetZSetParam {
	    server: string;
	    db: number;
	    key: any;
	    value: any;
	    newValue: any;
	    score: number;
	    format?: string;
	    decode?: string;
	    retFormat?: string;
	    retDecode?: string;
	
	    static createFrom(source: any = {}) {
	        return new SetZSetParam(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.server = source["server"];
	        this.db = source["db"];
	        this.key = source["key"];
	        this.value = source["value"];
	        this.newValue = source["newValue"];
	        this.score = source["score"];
	        this.format = source["format"];
	        this.decode = source["decode"];
	        this.retFormat = source["retFormat"];
	        this.retDecode = source["retDecode"];
	    }
	}

}

