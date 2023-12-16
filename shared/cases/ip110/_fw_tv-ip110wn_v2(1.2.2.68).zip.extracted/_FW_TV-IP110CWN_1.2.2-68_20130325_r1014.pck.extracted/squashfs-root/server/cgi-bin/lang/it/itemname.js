var languageNum = new Array("en","tc","sc","de","fr","es","it","jp");	
var item_name = new Array(
"Compressione ",
"MPEG4",
"MJPEG",
"Registrazione manuale ",
"Scatta Istantanea ",
"Sfoglia cartella ",
"Parlare",
"Ascoltare",
"Modalità notturna",
"Setup veloce",
"Impostazioni telecamera",
"Nome telecamera",
"Localizzazione",
"Password di amministratore",
"Confermare la password",
"Seguente >",
"Annulla",
"impostazioni IP",
"DHCP",
"IP Statico",
"IP",
"Subnet Mask",
"Default Gateway",
"DNS Primario",
"DNS Secondario",
"PPPoE",
"Nome utente",
"Password",
"<Precedente",
"impostazioni email",
"Indirizzio server SMTP",
"Indirizzo email mittente",
"Modo di Autenticazione",
"Username del mittente",
"Password del mittente",
"Indirizzo email ricevente #1 ",
"Indirizzo email ricevente #2",
"Creazione della Rete Senza Fili",
"Nome della Rete (SSID)",
"Site Survey",
"Modalità Wireless",
"Infrastruttura",
"Ad-Hoc",
"Canale",
"Autenticazione",
"Crittografia",
"Nessuno",
"WEP",
"TKIP",
"AES",
"Formato",
"ASCII",
"Esadecimale",
"Lunghezza della Chiave",
"64 bits",
"128 bits",
"Chiave WEP 1",
"Chiave WEP 2",
"Chiave WEP 3",
"Chiave WEP 4",
"Pre-Shared Key",
"Confermare le impostazioni",
"Modo IP",
"Indirizzo IPv4",
"Server DNS Primario",
"Server DNS Secondario",
"ESSID",
"Collegamento",
"Applica",
"Base",
"Sistema",
"Data ed Ora",
"Utente",
"Rete",
"Filtro IP",
"Wireless",
"Video / Audio",
"Telecamera",
"Video",
"Audio",
"Server Eventi",
"FTP",
"Email",
"NetStorage",
"Motion Detect",
"Configurazione eventi",
"Generale",
"Profilo di Scheduling",
"Motion Trigger",
"Schedulatore Trigger",
"Strumenti",
"USB",
"Informazione",
"Info Dispositivo",
"Log di sistema",
"Indicatori Led",
"Controllo degli indicatori LED",
"Normale",
"Spento",
"Zona Oraria",
"Sincronizzazione con il PC",
"Sincronizzazione con il Server NTP",
"Indirizzo server NTP",
"Intervallo d'aggiornamento",
"Ore",
"Manuale",
"Data",
"Ora",
"Amministratore",
"Modifica",
"Utente generico",
"Lista utenti",
"Aggiungi / Modifica",
"Cancella",
"Guest",
"Impostazioni del DDNS",
"Abilita",
"Provider",
"Nome Host",
"UPnP",
"Porte",
"Porta HTTP",
"(default:80)",
"Porta RTSP",
"(default:554)",
"Indirizzo IP di partenza",
"Indirizzo IP finale",
"Aggiungi",
"Lista IP da bloccare",
"Impostazioni Wireless",
"Video & Audio",
"Configurazione dell'immagine",
"Luminosità",
"Contrasto",
"Saturazione",
"(0~100)",
"Default",
"Rifletti",
"Verticale",
"Orizzontale",
"Frequenza della luce",
"50Hz",
"60Hz",
"Uso in Esterno",
"Impostazioni Overlay",
"Comprende la Data e l'Ora",
"Abilita Sfondo",
"Risoluzione Video",
"Qualità Video",
"Frame rate",
"Automatico",
"Limitato a ",
"fps",
"3GPP",
"Disabilita",
"3GPP Senza Audio",
"3GPP Con Audio",
"Entrata microfono della telecamera",
"Uscita altoparlante della telecamera",
"Volume",
"Server degli  Eventi",
"impostazioni Server Eventi",
"Indirizzo host",
"Numero Porta",
"Percorso",
"Modo Passivo",
"Prova",
"Disco di rete",
"Indirizzo Samba server",
"Condivisione",
"Percorso",
"Anonimo",
"Diviso per",
"Dimensione File ",
"(MB)",
"Tempo di Registrazione ",
"(Minuti)",
"Quando il Disco è Pieno",
"Smetti di Registrare",
"Ricicla - Cancella la Cartella più vecchia ",
"Motion Detection",
"Configurazione Motion Detection",
"Configurazione Evento",
"Settaggio Generale",
"Snapshot/Sottocartella di registrazione",
"Tempo di Registrazione dell'Evento salvato sul disco di rete",
"Secondi",
"Impostazione del profilo di schedulazione",
"Motion Detect Trigger",
"(*Prima occorre configurare il server corrispondente)",
"Azione",
"Invia Email",
"Upload FTP",
"Salva sul disco di rete",
"Salva su USB",
"Trigger Schedulazione",
"Schedulazione invio email",
"Intervallo",
"Schedulazione scrittura FTP",
"Schedulazione scrittura sul disco di rete",
"Strumenti di sistema",
"Ripristino delle impostazioni di fabbrica",
"Il Factory Reset cancellarà tutte le impostazioni inserite ",
"Riavvio",
"Il sistema verrà riavviato ",
"Riavviare",
"Configurazione",
"Backup",
"Salva il file di backup",
"Ripristina",
"Aggiorna il firmware",
"Versione Corrente del Firmware",
"Selezionare il firmware",
"Aggiorna",
"Impostazioni USB",
"Rimuovi USB",
"Rimozione sicura USB",
"Disabilita",
"Info USB",
"Spazio totale",
"Spazio libero",
"Informazioni sul sistema",
"Informazioni sul dispositivo",
"Versione del Firmware",
"Risoluzione MPEG4",
"Risoluzione MJPEG",
"Abilita 3GPP",
"Ingresso microfono",
"Uscita altoparlante",
"Abilita UPnP",
"Log",
"Tabella dei log",
"Aggiorna",
"Evento",
"Ferma la registrazione...",
"Allarme inviato",
"Allarme manuale",
"Salvataggio OK",
"Salvataggio Fallito!",
"In conversazione...",
"In ascolto...",
"In ricerca",
"Sempre",
"Telecamera 1",
"Sala riunioni 1",
"MAC",
"Modo",
"Privacy",
"Segnale",
"Precedente",
"Data ed Ora",
"SMTP",
"Nome Profilo",
"Giorni della settimana",
"Dom",
"Lun",
"Mar",
"Mer",
"Gio",
"Ven",
"Sab",
"Lista orari",
"Copiare per tutti i giorni della settimana",
"Cancellare da tutti i giorni della settimana",
"Ora d'Inizio",
"Ora di fine",
"Salva",
"Reset",
"Indirizzo MAC",
"Nome utente",
"Password",
"Nome utente",
"Password",
"Errore",
"Test server",
"Tempo di mantenimento GPIO Trigger Out per evento",
"Trigger",
"Pan Scan",
" Ferma",
"Ronda Automatica",
"Nome posizione",
"Pan/Tilt",
"Pan & Tilt",
"Calibrazione Pan/Tilt",
"Calibrazione ",
"Velocità Pan",
"Velocità Tilt",
"Step Pan",
"Step Tilt",
"Velocità Pan Scan",
"Tempo di fermo dell'Auto Patrol",
"Trigger GPIO",
"Vai alla posizione impostata ",
"Settaggio Pan & Tilt",
"Gradi",
"Una Istantanea",
"Pre-evento",
"Post-evento",
"Bonjour",
"Nome mnenonico",
"Invia email con",
"Upload FTP con",
"Multicast",
"Gruppo IP",
"Porta",
"(default: 1234)",
"TTL",
"(1~255)",
"RS-485",
"Impostazioni RS-485",
"Impostazioni Protocolli",
"Protocollo",
"Impostazioni protocolli non predefeniti",
"Velocità",
"Home",
"Su",
"Giù",
"Sinistra",
"Destra",
"Nome",
"Comando",
"Comando Esterno 1",
"Comando Esterno 2",
"Comando Esterno 3",
"Comando Esterno 4",
"Comando Esterno 5",
"Avanzate",
"HTTPS",
"Porta HTTPS",
"Tonalità",
"Definizione",
"(-50~50)",
"Overlay/Maschera",
"Data",
"Testo in sovraimpressione",
"Maschera Privacy",
"Includi il testo",
"Nega",
"Accetta",
"Lista IP accettati",
"Porta SMTP",
"Questo server richiede un collegamento cifrato (SSL)",
"QoS",
"Live Video DSCP",
"Live Audio DSCP",
"Multicast / Unicast",
"Instant Message",
"Instant Message",
"Indirizzo Server Jabber",
"Jabber ID",
"Password Jabber",
"Destinatario",
"Messaggio",
"Specifica manualmente il Server Host / Porta",
"Porta del servizio Jabber",
"Collegamento Cifrato",
"Autenticazione Cifrata",
"Area Maschera 1",
"Area Maschera 2",
"Posizione",
"X",
"Y",
"Larghezza",
"Altezza",
"Colore dell'area di maschera",
"Abilita Trigger in 1",
"Abilita Trigger in 2",
"(*Aggiustare prego valore octuple per la Larghezza e Altezza XY) ",
"AES",
"BLC",
"WPS",
"Impostazioni WPS",
"PROTECTED SETUP",
"Modalità PIN",
"Codice PIN",
"Registrar ID(SSID)",
"Modalità PBC",
"Stato del Dispositivo",
"Autentica",
"ENC",
"Reset impostazioni",
"Connetti",
"Annulla ",
"Auto Iris",
"H.264",
"Lingua",
"Lingua di default",
"Indirizzo IPv6",
"Gateway IPv6",
"Visualizzazione su Browser non-IE",
"Risoluzione H.264",
"IPv4 Subnet Mask",
"Gateway IPv4",
"RTSP",
"Flusso RTSP",
"Impostazioni Multicast",
" Telecamera IP",
"Wireless",
"Indirizzo IP",
"IPv4",
"IPv6",
"Genera",
"Tipo",
"Azione",
"Porta H.264",
"Porta MPEG4",
"Porta Audio",
"(default: 1236)",
"(default: 1238)",
"Formato codifica",
"Formato File",
"MP4",
"AVI",
"SSL",
"IP di WAN",
"(default:443)",
"Imposta automaticamente l'ora legale",
"Scheda SD",
"Salva su scheda SD",
"Impostazioni della scheda SD",
"Rimuovi la scheda SD",
"Rimozione sicura scheda SD",
"Informazioni scheda SD",
"Spazio totale",
"Spazio libero",
"Tempo di registrazione per Evento ",
"Registra su scheda SD",
"dispositivo occupato",
"LED Infrarosso",
"Controllo del LED Infrarosso",
"Notifica cambiamento Wan IP",
"STARTTLS",
"Zoom In",
"Zoom Out",
"Pan passo",
"Tilt passo",
"pixel",
"Infrarossi taglio",
"Controllo di taglio a infrarossi",
"LED di alimentazione controllo",
"LED di controllo di rete",
"YouTube",
"YouTube Impostazione",
"YouTube Record & Upload",
"Pubblico",
"Private",
"Premere il Grilletto...",
"LED bianco",
"LED bianco On...",
"LED bianco tempo di ritenzione per evento",
"Grilletto PIR",
"Quando il caricamento non",
"Riprova",
"Parola chiave",
"Titolo",
"Descrizione",
"Categoria",
"Developer Key",
"Origine",
"Ogni giorno",
"WDRC",
"(0~11)",
"My Android",
"Google(Gmail) Conto On My Android",
"Google(Gmail) Conto On My Camera",
"Impostazione account",
"Google Talk Impostazione",
"Google Talk account On My Camera",
"Gmail Impostazione",
"Google Mail account On My Camera",
"Picasa Impostazione",
"Picasa Conto On My Android",
"YouTube Impostazione",
"Account YouTube On My Android",
"Picasa",
"Record a USB",
"(Carica su YouTube)",
"Il caricamento delle immagini in Picasa",
"(*USB Flash Disk devono essere montati per l'upload di YouTube)",
"Carica il file registrato su YouTube",
"Riciclare - Elimina i più vecchi album",
"Fermare",
"Video Server",
"Zoom Speed",
"Focus di velocità",
"Focus Far",
"Focus Vicino",
"Iris Open",
"Iris Chiudi",
"+Controllo PTZ",
"-Controllo PTZ",
"Messa a fuoco automatica",
"Messa a fuoco manuale",
"Pattuglia",
"Impostazione Patrol",
"Andare",
"Posizione di preset",
"Percorso Patrol",
"Tempo di Soggiorno",
"Rimuovere",
"Avvio Preset",
"ID telecamera",
"(Pelco-D:0~254 Pelco-P:1~32)",
"Nome server",
"Impostazione di base",
"Linea In",
"Line Out",
"Posizione Patrol",
"Aggiungi questa posizione",
"Upload Picasa Con",
"Manuale di Lens",
"Iris DC Lens",
"Modalità TV",
"NTSC",
"PAL",
"Nome file",
"Download",
"File Manager",
"File Manager",
"2X",
"4X",
"8X",
"Auto Gain",
"Livello di nero",
"(0~5)",
"Setting",
"Direct Video Stream Authentication",
"User Accounts",
"IPv4 Address Range",
"Start",
"End",
"Filename Prefix",
"Recording Interval",
"GPIO Trigger Out Interval",
"Snapshot/Recording Filename Prefix",
"GPIO Trigger Out Per Event",
"Factory reset will restore the device's factory default settings.",
"Reboot the device.",
"Backup the device configurations. Click the button bellow and save the device configurations to your local harddrive.",
"Restore your device's configuration from a backup file.",
"Rebooting",
"SIP",
"SIP Setting",
"Registrar",
"Proxy",
"SIP Port",
"RTP Video Port",
"RTP Audio Port",
"STUN",
"Server",
"Multimedia",
"Enable Video Codec",
"Enable Audio Codec",
"Night Mode",
"Mono",
"Colore",
"Auto Cancellazione",
"Trigger Lan fallito",
"High",
"Medium",
"Low",
"ON",
"Velocità dell'otturatore",
"Veloce",
"AE controllo",
"Lento",
"HTTP",
"Host",
"Query",
"HTTP Notify For Motion Trigger",
"HTTP Notify",
"HTTP Notify For GPIO Trigger"
);
						  
var _COMPRESSION = 0;
var _MPEG4 = 1;
var _MJPEG = 2;
var _MANUAL_RECORD = 3;
var _SNAPSHOT = 4;
var _BROWSE = 5;
var _TALK = 6;
var _LISTEN = 7;
var _NIGHTMODE = 8;
var _SMART_WIZARD = 9;
var _CAM_SETTING = 10;
var _CAM_NAME = 11;
var _LOCATION = 12;
var _ADMIN_PWD = 13;
var _CONFIRM_PWD = 14;
var _NAXT = 15;
var _CANCEL = 16;
var _IP_SETTING = 17;
var _DHCP = 18;
var _STATIC_IP = 19;
var _IP = 20;
var _SUBNET_MASK = 21;
var _DEFAULT_GW = 22;
var _PRI_DNS = 23;
var _SEC_DNS = 24;
var _PPPOE = 25;
var _PPPOE_USER = 26;
var _PPPOE_PWD = 27;
var _PREV = 28;
var _EMAIL_SETTING = 29;
var _SMTP_SERVER = 30;
var _SENDER_EMAIL = 31;
var _AUTH_MODE = 32;
var _SENDER_USER = 33;
var _SENDER_PWD = 34;
var _RECEIVER_1 = 35;
var _RECEIVER_2 = 36;
var _WIRELESS_NET = 37;
var _NETWORK_ID = 38;
var _SITE_SURVEY = 39;
var _WIRELESS_MODE = 40;
var _INFRASTRUC = 41;
var _AD_HOC = 42;
var _CHANNEL = 43;
var _AUTH = 44;
var _ENCRYPTION = 45;
var _NONE = 46;
var _WEP = 47;
var _TKIP = 48;
var _AES = 49;
var _FORMAT = 50;
var _ASCII = 51;
var _HEX = 52;
var _KEY_LENGTH = 53;
var _BITS_64 = 54;
var _BITS_128 = 55;
var _WEP_K1 = 56;
var _WEP_K2 = 57;
var _WEP_K3 = 58;
var _WEP_K4 = 59;
var _PRE_SHAR_KEY = 60;
var _CONFIRM_SETTING = 61;
var _IP_MODE = 62;
var _IP_ADDR = 63;
var _PRI_DNS_ADDR = 64;
var _SEC_DNS_ADDR = 65;
var _ESSID = 66;
var _CONNECTION = 67;
var _APPLY = 68;
var _BASIC = 69;
var _SYSTEM = 70;
var _DATE_TIME = 71;
var _USER = 72;
var _NETWORK = 73;
var _IP_FILTER = 74;
var _WIRELESS = 75;
var _VIDEO_AUDIO = 76;
var _CAMERA = 77;
var _VIDEO = 78;
var _AUDIO = 79;
var _EVENT_SERVER = 80;
var _FTP = 81;
var _EMAIL = 82;
var _NETSTORAGE = 83;
var _MOTION_DET = 84;
var _EVENT_CONFIG = 85;
var _GENERAL = 86;
var _SCHEDULE_PROF = 87;
var _MOTION_TRIG = 88;
var _SCHEDULE_TRIG = 89;
var _TOOLS = 90;
var _USB = 91;
var _INFORMATION = 92;
var _DEV_INFO = 93;
var _SYS_LOG = 94;
var _INDI_LED = 95;
var _INDI_LED_CTL = 96;
var _NORMAL = 97;
var _OFF = 98;
var _TIMEZONE = 99;
var _SYNC_PC = 100;
var _SYNC_NTP = 101;
var _NTP_SERVER = 102;
var _UPDATE_INTVL = 103;
var _HOURS = 104;
var _MANUAL = 105;
var _DATE = 106;
var _TIME = 107;
var _ADMIN = 108;
var _MODIFY = 109;
var _GEN_USER = 110;
var _USERLIST = 111;
var _ADD_MOD = 112;
var _DELETE = 113;
var _GUEST = 114;
var _DDNS_SETTING = 115;
var _ENABLE = 116;
var _PROVIDER = 117;
var _HOST_NAME = 118;
var _UPNP = 119;
var _PORTS_NUM = 120;
var _HTTP_PORT = 121;
var _DEF_80 = 122;
var _RTSP_PORT = 123;
var _DEF_554 = 124;
var _START_IP = 125;
var _END_IP = 126;
var _ADD = 127;
var _DENY_IP_LIST = 128;
var _WIRE_SETTING = 129;
var _VIDEO_N_AUDIO = 130;
var _IMAGE_SETTING = 131;
var _BRIGHTNESS = 132;
var _CONTRAST = 133;
var _SATURATION = 134;
var _RANGE = 135;
var _DEFAULT = 136;
var _MIRROR = 137;
var _VERTICAL = 138;
var _HORIZONTAL = 139;
var _LIGHT_FREQ = 140;
var _50HZ = 141;
var _60HZ = 142;
var _OUTDOOR = 143;
var _OLAY_SETTING = 144;
var _INCLUDE_DATE_TIME = 145
var _ENABLE_OPQ = 146;
var _V_RESOLUTION = 147;
var _V_QUALITY = 148;
var _FRAME_RATE = 149;
var _AUTO = 150;
var _LIMITE_TO = 151;
var _FPS = 152;
var _3GPP = 153;
var _DISABLE = 154;
var _WITHOUT_AUDIO = 155;
var _WITH_AUDIO = 156;
var _CAM_MIC_IN = 157;
var _CAM_SPK_OUT = 158;
var _VOLUME = 159;
var _EVENT_SERVER = 160;
var _EVENT_SERVER_SET = 161;
var _HOST_ADDR = 162;
var _PORT_NUM = 163;
var _DIRECT_PATH = 164;
var _PASS_MODE = 165;
var _TEST = 166;
var _NET_STORAGE = 167;
var _SAMBA_SERVER = 168;
var _SHARE = 169;
var _PATH = 170;
var _ANONYMOUS = 171;
var _SPLIT_BY = 172;
var _FILE_SIZE = 173;
var _MB = 174;
var _RECORD_TIME = 175;
var _MINUTE = 176;
var _DISK_FULL = 177;
var _STOP_RECORDING = 178;
var _RECYCLE = 179;
var _MOTION_DETECTION = 180;
var _DETECT_CONFIG = 181;
var _EVENT_CONFIGURATION = 182;
var _GEN_SETTING = 183;
var _SUBFOLDER = 184;
var _TIME_PER_EVENT = 185;
var _SECS = 186;
var _ARRANGE_SCH = 187;
var _MOTION_DET_TRIG = 188;
var _PLEASE_SET = 189;
var _ACTION = 190;
var _SEND_EMAIL = 191;
var _FTP_UPLOAD = 192;
var _RECORD_TO_NET = 193;
var _IMG_TO_USB = 194;
var _SCH_TRIG = 195;
var _EMAIL_SCHEDULE = 196;
var _INTERVAL = 197;
var _FTP_SCHEDULE = 198;
var _STORAGE_SCHEDULE = 199;
var _SYS_TOOLS = 200;
var _FACT_RESET = 201;
var _RESTOR_SET = 202;
var _SYS_REBOOT = 203;
var _SYS_REBOOTED = 204;
var _REBOOT = 205;
var _CONFIGURATION = 206;
var _BACKUP = 207;
var _GET_BACKUP_FILE = 208;
var _RESTORE = 209;
var _UPDATE_FW = 210;
var _CURRENT_FW_VER = 211;
var _SELECT_FW = 212;
var _UPDATE = 213;
var _USB_SETTING = 214;
var _USB_DISMOUNT = 215;
var _DISMOUNT_USB = 216;
var _DISMOUNT = 217;
var _USB_INFO = 218;
var _TOTAL_SPACE = 219;
var _FREE_SPACE = 220;
var _SYS_INFO = 221;
var _DEV_INFORMATION = 222;
var _FW_VER = 223;
var _MP4_RESOL = 224;
var _MJP_RESOL = 225;
var _ENABLE_3GPP = 226;
var _MIC_IN = 227;
var _SPK_OUT = 228;
var _UPNP_ENABLE = 229;
var _LOGS = 230;
var _LOGS_TABLE = 231;
var _REFRESH = 232;
var _EVENT = 233;
var _STOP_RECORD = 234;
var _ALARM_SENT = 235;
var _MANUAL_ALARM = 236;
var _SAVE_OK = 237;
var _SAVE_FAIL = 238;
var _TALKING = 239;
var _LISTENING = 240;
var _SEARCH = 241;
var _ALWAYS = 242;
var _CAM_1 = 243;
var _MEET_ROOM = 244;
var _MAC = 245;
var _MODE = 246;
var _PRIVACY = 247;
var _SIGNAL = 248;
var _prev_1 = 249;
var _DATE_N_TIME = 250;
var _SMTP = 251;
var _PROFILE_NAME = 252;
var _WEEKDAYS = 253;
var _SUN = 254;
var _MON = 255;
var _TUE = 256;
var _WED = 257;
var _THU = 258;
var _FRI = 259;
var _SAT = 260;
var _TIME_LIST = 261;
var _COPY_THIS = 262;
var _DELETE_THIS = 263;
var _START_TIME = 264;
var _END_TIME = 265;
var _SAVE = 266;
var _reset = 267;
var _MAC_ADDR = 268;
var _USER_NAME = 269;
var _PASSWORD = 270;
var _DDNS_USER = 271;
var _DDNS_PWD = 272;
var _ERROR = 273;
var _TEST_SERVER = 274;
var _GPIO_PER_EVENT = 275;
var _TRIGGER_OUT = 276;
var _PAN_SCAN = 277;
var _STOP = 278;
var _AUTO_PATROL = 279;
var _POSI_NAME = 280;
var _PAN_TILT = 281;
var _PAN_N_TILT = 282;
var _PT_CALIBRATION = 283;
var _CALIBRATION = 284;
var _PAN_SPEED = 285;
var _TILT_SPEED = 286;
var _PAN_STEP = 287;
var _TILT_STEP = 288;
var _PAN_SCAN_SPEED = 289;
var _AUTO_STAY_TIME = 290;
var _GPIO_TRIGGER = 291;
var _GO_TO_POSITION = 292;
var _PT_SETTING = 293;
var _DEGREES = 294;
var _ONE_SNAP = 295;
var _PRE_EVENT = 296;
var _POST_EVENT = 297;
var _BONJOUR = 298;
var _BONJOUR_NAME = 299;
var _MAIL_WITH = 300;
var _FTP_WITH = 301;
var _MULTICAST = 302;
var _GR_IP = 303;
var _PORT = 304;
var _DEFAULT_1234 = 305;
var _TTL = 306;
var _TTL_RANG = 307;
var _RS485 = 308;
var _RS485_SET = 309;
var _POPULAR_SET = 310;
var _PROTOCOL = 311;
var _CUSTOM_SET = 312;
var _BIT_RATE = 313;
var _HOME = 314;
var _UP = 315;
var _DOWN = 316;
var _LEFT = 317;
var _RIGHT = 318;
var _NAME = 319;
var _COMMAND = 320;
var _EX_COMMAND_1 = 321;
var _EX_COMMAND_2 = 322;
var _EX_COMMAND_3 = 323;
var _EX_COMMAND_4 = 324;
var _EX_COMMAND_5 = 325;
var _ADVANCE = 326;
var _HTTPS = 327;
var _HTTPS_PORT = 328;
var _HUE = 329;
var _SHARPNESS = 330;
var _RANGE_1 = 331;
var _OVER_MASK = 332;
var _DATE_OVER = 333;
var _TEXT_OVER = 334;
var _PRIVACY_MASK = 335;
var _INCLD_TEXT = 336;
var _DENY = 337;
var _ACCEPT = 338;
var _ACCEPT_IP_LIST = 339;
var _SMTP_PORT= 340;
var _SMTP_SECURITY= 341;
var _QOS= 342;
var _VIDEO_DSCP = 343;
var _AUDIO_DSCP = 344;
var _MULTICASTSW = 345;
var _JABBER = 346;
var _INSTANT_MESSAGE= 347;
var _JABBER_SERVER = 348;
var _JABBER_ID = 349;
var _JABBER_PWD = 350;
var _JABBER_RECEIVER = 351;
var _JABBER_MESSAGE = 352;
var _JABBER_MANUAL = 353;
var _JABBER_PORT= 354;
var _JABBER_TLS= 355;
var _JABBER_SASL= 356;
var _MASK_AREA1 = 357;
var _MASK_AREA2 = 358;
var _POSITION = 359;
var _X = 360;
var _Y = 361;
var _WIDTH = 362;
var _HEIGHT = 363;
var _MASK_COLOR = 364;
var _TRIGGER_IN_1 = 365;
var _TRIGGER_IN_2 = 366;
var _SET_OCTUPLE = 367;
var _CAMERA_AES = 368;
var _CAMERA_BLC = 369;
var _WPS = 370;
var _WPS_SETTING = 371;
var _PROTECTEDSETUP = 372;
var _PIN_MODE = 373;
var _PIN_CODE = 374;
var _REGISTAR_ID = 375;
var _PBC_MODE = 376;
var _DEVICESTATUS = 377;
var _AUTHENTICATE = 378;
var _ENC = 379;
var _RETOUNCONFIGURED = 380;
var _CONNECT = 381 ;
var _WPSCANCEL = 382;
var _AUTO_IRIS = 383;
var _H264 = 384;
var _LANGUAGE = 385;
var _LANGUAGE_DEF = 386;
var _IP6_ADDR = 387;
var _V6_GW = 388;
var _MJPEGVIEWER = 389;
var _264_RESOL = 390;
var _IP4_NMASK = 391;
var _IP4_GW = 392;
var _RTSP= 393;
var _RTSPSTREAM= 394;
var _MULTICASTSET= 395;
var _NETCAMERA= 396;
var _WIRELESSTAG= 397;
var _IP_ADDRESS = 398;
var _IP_V4 = 399;
var _IP_V6 = 400;
var _GENERATE = 401;
var _TYPE = 402;
var _FILTER_ACTION = 403;
var _H264_PORT = 404;
var _MPEG4_PORT = 405;
var _AUDIO_PORT = 406;
var _DEFAULT_1236 = 407;
var _DEFAULT_1238 = 408;
var _ENCODE_FORMAT = 409;
var _FILE_FORMAT = 410;
var _MP4 = 411;
var _AVI = 412;
var _SSL = 413;
var _WANIP = 414;
var _DEF_443 = 415;
var _DAYLIGHT_SAVE = 416;
var _SD_CARD = 417;
var _VIDEO_TO_SD = 418;
var _SD_SETTING = 419;
var _SD_DISMOUNT = 420;
var _DISMOUNT_SD = 421;
var _SD_INFO = 422;
var _SD_TOTAL_SPACE = 423;
var _SD_FREE_SPACE = 424;
var _STORAGE_TIME_PER_EVENT = 425;
var _RECORD_TO_SD = 426;
var _DEVICE_BUSY = 427;
var _IR_LED = 428;
var _IR_LED_CTL = 429;
var _WANIP_NOTIFY = 430;
var _STARTTLS = 431;
var _ZOOM_IN = 432;
var _ZOOM_OUT = 433;
var _PIXEL_PAN = 434;
var _PIXEL_TILT = 435;
var _PIXEL = 436;
var _IR_CUT = 437;
var _IR_CUT_CTL = 438;
var _POWER_LED_CTL = 439;
var _NETWORK_LED_CTL = 440;
var _UTUBE = 441;
var _UTUBE_SET = 442;
var _UTUBE_RECORD = 443;
var _PUBLIC = 444;
var _PRIVATE = 445;
var _TRIGGER_OUTING = 446;
var _WHITE_LED = 447;
var _WHITE_LED_ON = 448;
var _WHITELED_PER_EVENT = 449;
var _PIR_TRIGGER = 450;
var _UPLOAD_FAIL = 451;
var _RETRY = 452;
var _KEYWORD = 453;
var _TITLE = 454;
var _DESCRIPTION = 455;
var _CATEGORY = 456;
var _DEV_KEY = 457;
var _SOURCE = 458;
var _EVERY_DAY = 459;
var _WDRC = 460;
var _RANGE_11 = 461;
var _ANDROID_WIZARD = 462;
var _ANDROID_USER = 463;
var _ANDROID_CAM_USER = 464;
var _ACCOUNT_SETTING = 465;
var _GOOGLETALK_SETTING = 466;
var _GOOGLETALK_USER = 467;
var _GMAIL_SETTING = 468;
var _GOOGLEMAIL_USER = 469;
var _PICASA_SETTING = 470;
var _PICASA_USER = 471;
var _YOUTUBE_SETTING = 472;
var _YOUTUBE_USER = 473;
var _PICASA = 474;
var _RECORD_TO_USB = 475;
var _UPLOAD_TO_YOUTUBE = 476;
var _IMAGE_TO_PICASA = 477;
var _YOUTUBE_TIP = 478;
var _UPLOAD_FILE_TO_YOUTUBE = 479;
var _RECYCLE_1 = 480;
var _STOP_1 = 481;
var _VIDEO_SERVER = 482;
var _ZOOM_SPEED = 483;
var _FOCUS_SPEED = 484;
var _FOCUS_FAR = 485;
var _FOCUS_NEAR = 486;
var _IRIS_OPEN = 487;
var _IRIS_CLOSE = 488;
var _PTZ_CONTROL_ADD = 489;
var _PTZ_CONTROL = 490;
var _AUTO_FOCUS = 491;
var _FOCUS_MANUAL = 492;
var _PATROL = 493;
var _PATROL_SETTING = 494;
var _GO = 495;
var _PRESET_POSITION = 496;
var _PATROL_PATH = 497;
var _STAY_TIME = 498;
var _REMOVE = 499;
var _STARTUP_PRESET= 500;
var _ADDRESS= 501;
var _RS485_RANGE= 502;
var _SERVER_NAME= 503;
var _BASIC_SETTING= 504;
var _LINE_IN= 505;
var _LINE_OUT= 506;
var _PATROL_POSITION= 507;
var _ADD_TO_PATROL= 508;
var _PICASA_WITH = 509;
var _MANUAL_LENS = 510;
var _DC_IRIS_LENS = 511;
var _TV_MODE = 512;
var _NTSC = 513;
var _PAL = 514;
var _FILE_NAME = 515;
var _DOWNLOAD = 516
var _FILE_MANAGER = 517;
var _FILE_BROWSE = 518;
var _2X = 519;
var _4X = 520;
var _8X = 521;
var _IMAGE_GAIN = 522;
var _BLACK_LEVEL = 523;
var _RANGE_0_5 = 524;
var _SETTING = 525;
var _HIDDENPAGEAUTH = 526;
var _USER_ACCOUNT = 527;
var _IPV4_ADDR_RANGE = 528;
var _START = 529;
var _END = 530;
var _FILENAME_PREFIX = 531;
var _RECORDING_INTERVL = 532;
var _GPIO_TRIGGER_OUT_INTERVAL = 533;
var _SR_FILENAME_PREFIX = 534;
var _GPIO_TRIGGER_OUT_PER_EVENT = 535;
var _RESTOR_SET_TN = 536;
var _SYS_REBOOTED_TN = 537;
var _BACKUP_TN = 538;
var _RESTORE_TN = 539;
var _REBOOTING = 540;
var _SIP = 541;
var _SIP_SET = 542;
var _REGISTRAR = 543;
var _PROXY = 544;
var _SIP_PORT = 545;
var _RTP_VIDEO_PORT = 546;
var _RTP_AUDIO_PORT = 547;
var _STUN = 548;
var _ENABLE_SERVER = 549;
var _MULTIMEDIA = 550;
var _ENABLE_VIDEO_CODEC = 551;
var _ENABLE_AUDIO_CODEC = 552;
var _NIGHT_IMAGE = 553;
var _MONO = 554;
var _COLOR = 555;
var _AUTO_DELETE = 556;
var _LAN_FAIL_TRIG = 557;
var _HIGH = 558;
var _MEDIUM = 559;
var _LOW = 560;
var _ON = 561;
var _SHUTTER_SPEED = 562;
var _FAST = 563;
var _AE_CONTROL = 564;
var _SLOW = 565;
var _HTTP = 566;
var _HOST = 567;
var _QUERY = 568;
var _HTTP_MOTION_TRIG = 569;
var _HTTP_NOTIFY = 570;
var _HTTP_GPIO_TRIG = 571;