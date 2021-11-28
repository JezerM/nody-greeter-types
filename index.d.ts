import { LightDMBattery, LightDMLanguage, LightDMLayout, LightDMSession, LightDMUser } from "./ldm_interfaces";
declare class Signal {
    _name: string;
    _callbacks: Function[];
    constructor(name: string);
    /**
     * Connects a callback to the signal.
     * @param {Function} callback The callback to attach.
     */
    connect(callback: Function): void;
    /**
     * Disconnects a callback to the signal.
     * @param {Function} callback The callback to disattach.
     */
    disconnect(callback: Function): void;
    _emit(...args: [...any]): void;
}
declare class Greeter {
    constructor();
    authentication_complete: Signal;
    autologin_timer_expired: Signal;
    idle: Signal;
    reset: Signal;
    show_message: Signal;
    show_prompt: Signal;
    brightness_update: Signal;
    battery_update: Signal;
    /**
     * The username of the user being authenticated or "null"
     * if no authentication is in progress
     * @type {string|Null}
     * @readonly
     */
    get authentication_user(): string | null;
    /**
     * Whether or not the guest account should be automatically logged
     * into when the timer expires.
     * @type {boolean}
     * @readonly
     */
    get autologin_guest(): boolean;
    /**
     * The number of seconds to wait before automatically logging in.
     * @type {number}
     * @readonly
     */
    get autologin_timeout(): number;
    /**
     * The username with which to automattically log in when the timer expires.
     * @type {string}
     * @readonly
     */
    get autologin_user(): string;
    /**
     * Gets the battery data.
     * @type {LightDMBattery}
     * @readonly
     */
    get batteryData(): LightDMBattery;
    /**
     * Gets the brightness
     */
    get brightness(): number;
    /**
     * Sets the brightness
     * @param {number} quantity The quantity to set
     */
    set brightness(quantity: number);
    /**
     * Whether or not the greeter can access to battery data.
     * @type {boolean}
     * @readonly
     */
    get can_access_battery(): boolean;
    /**
     * Whether or not the greeter can control display brightness.
     * @type {boolean}
     * @readonly
     */
    get can_access_brightness(): boolean;
    /**
     * Whether or not the greeter can make the system hibernate.
     * @type {boolean}
     * @readonly
     */
    get can_hibernate(): boolean;
    /**
     * Whether or not the greeter can make the system restart.
     * @type {boolean}
     * @readonly
     */
    get can_restart(): boolean;
    /**
     * Whether or not the greeter can make the system shutdown.
     * @type {boolean}
     * @readonly
     */
    get can_shutdown(): boolean;
    /**
     * Whether or not the greeter can make the system suspend/sleep.
     * @type {boolean}
     * @readonly
     */
    get can_suspend(): boolean;
    /**
     * The name of the default session.
     * @type {string}
     * @readonly
     */
    get default_session(): string;
    /**
     * Whether or not guest sessions are supported.
     * @type {boolean}
     * @readonly
     */
    get has_guest_account(): boolean;
    /**
     * Whether or not user accounts should be hidden.
     * @type {boolean}
     * @readonly
     */
    get hide_users_hint(): boolean;
    /**
     * The system's hostname.
     * @type {string}
     * @readonly
     */
    get hostname(): string;
    /**
     * Whether or not the greeter is in the process of authenticating.
     * @type {boolean}
     * @readonly
     */
    get in_authentication(): boolean;
    /**
     * Whether or not the greeter has successfully authenticated.
     * @type {boolean}
     * @readonly
     */
    get is_authenticated(): boolean;
    /**
     * The current language or "null" if no language.
     * @type {LightDMLanguage|null}
     * @readonly
     */
    get language(): LightDMLanguage | null;
    /**
     * A list of languages to present to the user.
     * @type {LightDMLanguage[]}
     * @readonly
     */
    get languages(): LightDMLanguage[];
    /**
     * The currently active layout for the selected user.
     * @type {LightDMLayout}
     */
    get layout(): LightDMLayout;
    set layout(layout: LightDMLayout);
    /**
     * A list of keyboard layouts to present to the user.
     * @type {LightDMLayout[]}
     * @readonly
     */
    get layouts(): LightDMLayout[];
    /**
     * Whether or not the greeter was started as a lock screen.
     * @type {boolean}
     * @readonly
     */
    get lock_hint(): boolean;
    /**
     * A list of remote sessions.
     * @type {LightDMSession[]}
     * @readonly
     */
    get remote_sessions(): LightDMSession[];
    /**
     * Whether or not the guest account should be selected by default.
     * @type {boolean}
     * @readonly
     */
    get select_guest_hint(): boolean;
    /**
     * The username to select by default.
     * @type {string}
     * @readonly
     */
    get select_user_hint(): boolean;
    /**
     * List of available sessions.
     * @type {LightDMSession[]}
     * @readonly
     */
    get sessions(): LightDMSession[];
    /**
     * Check if a manual login option should be shown. If "true", the theme should
     * provide a way for a username to be entered manually. Otherwise, themes that show
     * a user list may limit logins to only those users.
     * @type {boolean}
     * @readonly
     */
    get show_manual_login_hint(): boolean;
    /**
     * Check if a remote login option should be shown. If "true", the theme should provide
     * a way for a user to log into a remote desktop server.
     * @type {boolean}
     * @readonly
     * @internal
     */
    get show_remote_login_hint(): boolean;
    /**
     * List of available users.
     * @type {LightDMUser[]}
     * @readonly
     */
    get users(): LightDMUser[];
    /**
     * Starts the authentication procedure for a user.
     *
     * @param {string|null} username A username or "null" to prompt for a username.
     */
    authenticate(username: string | null): any;
    /**
     * Starts the authentication procedure for the guest user.
     */
    authenticate_as_guest(): any;
    /**
     * Set the brightness to quantity
     * @param {number} quantity The quantity to set
     */
    brightnessSet(quantity: number): any;
    /**
     * Increase the brightness by quantity
     * @param {number} quantity The quantity to increase
     */
    brightnessIncrease(quantity: number): any;
    /**
     * Decrease the brightness by quantity
     * @param {number} quantity The quantity to decrease
     */
    brightnessDecrease(quantity: number): any;
    /**
     * Cancel user authentication that is currently in progress.
     */
    cancel_authentication(): any;
    /**
     * Cancel the automatic login.
     */
    cancel_autologin(): any;
    /**
     * Triggers the system to hibernate.
     * @returns {boolean} "true" if hibernation initiated, otherwise "false"
     */
    hibernate(): boolean;
    /**
     * Provide a response to a prompt.
     * @param {string} response
     */
    respond(response: string): any;
    /**
     * Triggers the system to restart.
     * @returns {boolean} "true" if restart initiated, otherwise "false"
     */
    restart(): boolean;
    /**
     * Set the language for the currently authenticated user.
     * @param {string} language The language in the form of a locale specification (e.g.
     *     'de_DE.UTF-8')
     * @returns {boolean} "true" if successful, otherwise "false"
     */
    set_language(language: string): boolean;
    /**
     * Triggers the system to shutdown.
     * @returns {boolean} "true" if shutdown initiated, otherwise "false"
     */
    shutdown(): boolean;
    /**
     * Start a session for the authenticated user.
     * @param {string|null} session The session to log into or "null" to use the default.
     * @returns {boolean} "true" if successful, otherwise "false"
     */
    start_session(session: string | null): boolean;
    /**
     * Triggers the system to suspend/sleep.
     * @returns {boolean} "true" if suspend/sleep initiated, otherwise "false"
     */
    suspend(): boolean;
}
interface gc_branding {
    background_images_dir: string;
    logo: string;
    user_image: string;
}
declare class GreeterConfig {
    constructor();
    /**
     * Holds keys/values from the `branding` section of the config file.
     *
     * @type {object} branding
     * @property {string} background_images_dir Path to directory that contains background images
     *                                      for use in greeter themes.
     * @property {string} logo                  Path to distro logo image for use in greeter themes.
     * @property {string} user_image            Default user image/avatar. This is used by greeter themes
     *                                      for users that have not configured a `.face` image.
     * @readonly
     */
    get branding(): gc_branding;
    /**
     * Holds keys/values from the `greeter` section of the config file.
     *
     * @type {object}  greeter
     * @property {boolean} debug_mode          Greeter theme debug mode.
     * @property {boolean} detect_theme_errors Provide an option to load a fallback theme when theme
     *                                     errors are detected.
     * @property {number}  screensaver_timeout Blank the screen after this many seconds of inactivity.
     * @property {boolean} secure_mode         Don't allow themes to make remote http requests.
     *                                     generate localized time for display.
     * @property {string}  time_language       Language to use when displaying the time or ""
     *                                     to use the system's language.
     * @property {string}  theme               The name of the theme to be used by the greeter.
     * @readonly
     */
    get greeter(): any;
    /**
     * Holds keys/values from the `features` section of the config file.
     *
     * @type {Object}      features
     * @property {boolean} battery				 Enable greeter and themes to ger battery status.
     * @property {Object}  backlight
     * @property {boolean} enabled				 Enable greeter and themes to control display backlight.
     * @property {number}  value					 The amount to increase/decrease brightness by greeter.
     * @property {number}  steps					 How many steps are needed to do the change.
     * @readonly
     */
    get features(): any;
    get layouts(): any;
}
declare class ThemeUtils {
    constructor();
    /**
     * Binds `this` to class, `context`, for all of the class's methods.
     *
     * @arg {object} context An ES6 class instance with at least one method.
     *
     * @return {object} `context` with `this` bound to it for all of its methods.
     */
    bind_this(context: object): object;
    /**
     * Returns the contents of directory found at `path` provided that the (normalized) `path`
     * meets at least one of the following conditions:
     *   * Is located within the greeter themes' root directory.
     *   * Has been explicitly allowed in the greeter's config file.
     *   * Is located within the greeter's shared data directory (`/var/lib/lightdm-data`).
     *   * Is located in `/tmp`.
     *
     * @param {string}              path        The abs path to desired directory.
     * @param {boolean}             only_images Include only images in the results. Default `true`.
     * @param {function(string[])}  callback    Callback function to be called with the result.
     */
    dirlist(path: string, only_images: boolean, callback: (args: string[]) => any): any;
    /**
     * Returns the contents of directory found at `path` provided that the (normalized) `path`
     * meets at least one of the following conditions:
     *   * Is located within the greeter themes' root directory.
     *   * Has been explicitly allowed in the greeter's config file.
     *   * Is located within the greeter's shared data directory (`/var/lib/lightdm-data`).
     *   * Is located in `/tmp`.
     *
     * @param {string}              path        The abs path to desired directory.
     * @param {boolean}             only_images Include only images in the results. Default `true`.
     * @param {function(string[])}  callback    Callback function to be called with the result.
     * @experimental Available only for nody-greeter. DO NOT use it if you want compatibility between web-greeter and nody-greeter
     */
    dirlist_sync(path: string, only_images?: boolean): string[];
    /**
     * Get the current date in a localized format. Local language is autodetected by default, but can be set manually in the greeter config file.
     * 	 * `language` defaults to the system's language, but can be set manually in the config file.
     */
    get_current_localized_date(): string;
    /**
     * Get the current time in a localized format. Local language is autodetected by default, but can be set manually in the greeter config file.
     * 	 * `language` defaults to the system's language, but can be set manually in the config file.
     */
    get_current_localized_time(): string;
}
export declare const lightdm: Greeter;
export declare const greeter_config: GreeterConfig;
export declare const theme_utils: ThemeUtils;
export declare const _ready_event: Event;
export {};
