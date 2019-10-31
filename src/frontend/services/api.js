import axios from 'axios';
import Utils from './Utils';

// App Config
import AppConfiguration from './AppConfiguration';

/**
 * Class with all the methods required to make RESTful calls. Supported methods:
 * - `GET`: `this.get()`
 * - `POST`: `this.post()`
 */
class Api {
  /**
   * Class constructor.
   * @property {String} url         API base URL.
   * @property {Object} endpoints   Key: Value set of API endpoints, where `Key` is a formal name
   *                                for that endpoint, and `Value` is the URL path to the
   *                                endpoint. `Value` will be retrieved when calling.
   */
  constructor() {
    /**
     * Instance of the App configuration data.
     * @type {Object}
     */
    this.appConfig = AppConfiguration.getConfig();

    /**
     * The API base URL.
     * @type {String}
     */
    this.url = this.appConfig.api.url;

    /**
     * A dictionary with the API endpoints.
     * @type {Object}
     */
    this.endpoints = this.appConfig.api.endpoints;
  }

  /**
   * Get and format an endpoint for the API.
   * @param {String} name       The name of the endpoint on the app configuration (The
   *                            appConstant constant).
   * @param {Object} parameters Optional. A dictionary with placeholder values for the endpoint.
   *                            If there's no placeholder for one of the paramters, it will be
   *                            added as a query string.
   * @return {String}
   * @throws {Error} If the requested enpdoint is not on the configuration.
   */
  _getEndpoint(name, parameters = {}) {
    const endpoint = this.endpoints[name];
    if (!endpoint) {
      throw new Error(`Trying to use an unkown endpoint: ${name}`);
    }
    return Utils.formatURL(`${this.url}${endpoint}`, Object.assign({}, parameters));
  }
  
  /**
   * Makes a post request to the API
   *
   * @param   {Object}  userData
   *
   * @return  {Promise}
   */
  authenticateUser(userData) {
    return this._post(this._getEndpoint('authenticateUser'), userData);
  }

  /**
   * Makes a post Request to the API
   *
   * @param   {Object}  userData
   *
   * @return  {Promise}
   */
  createUser(userData) {
    return this._post(this._getEndpoint('createUser'), userData);
  }

  /**
   * Makes a post Request to the API
   *
   * @param   {Object}  userData
   *
   * @return  {Promise}
   */
  updateUserData(userData) {
    return this._post(this._getEndpoint('updateUser'), userData);
  }

  /**
   * Makes a POST request to API
   *
   * @param   {Object}  userID
   *
   * @return  {Promise}
   */
  getPerson(userID) {
    return this._post(this._getEndpoint('getPerson'), userID);
  }

  getSelectData() {
    return this._post(this._getEndpoint('getSelectData'));
  }

  getSelectDataNewEvent() {
    return this._post(this._getEndpoint('getSelectDataNewEvent'));
  }

  dataComplete(data) {
    return this._post(this._getEndpoint('userData'), data);
  }

  getEvents(data) {
    return this._post(this._getEndpoint('getEvents'), data);
  }

  getPublications(data) {
    return this._post(this._getEndpoint('getPublications'), data);
  }

  uploadPost(data) {
    return this._post(this._getEndpoint('uploadPost'), data);
  }

  getInscriptions(data) {
    return this._post(this._getEndpoint('getInscriptions'), data);
  }

  getPersonEvents(data) {
    return this._post(this._getEndpoint('getPersonEvents'), data);
  }

  getEventInscripted(data) {
    return this._post(this._getEndpoint('getEventInscripted'), data);
  }

  deletePost(data) {
    return this._post(this._getEndpoint('deletePost'), data);
  }

  createEvent(data) {
    return this._post(this._getEndpoint('createEvent'), data);
  }

  getEvent(data) {
    return this._post(this._getEndpoint('getEvent'), data);
  }

  getCategories(data) {
    return this._post(this._getEndpoint('getCategories'), data);
  }

  getEventCategories(data) {
    return this._post(this._getEndpoint('getEventCategories'), data);
  }

  getFaq(data) {
    return this._post(this._getEndpoint('getFaq'), data);
  }

  uploadQuestion(data) {
    return this._post(this._getEndpoint('uploadQuestion'), data);
  }

  getPublicationsByUser(data) {
    return this._post(this._getEndpoint('getPublicationsByUser'), data);
  }

  getPublicationsNoAdmin(data) {
    return this._post(this._getEndpoint('getPublicationsNoAdmin'), data);
  }

  getPublicationsAdmin(data) {
    return this._post(this._getEndpoint('getPublicationsAdmin'), data);
  }
  /**
   * Makes a GET request.
   * @param {String} url    The request URL.
   * @param {Object} config A config object that will be merged with the default request data.
   * @return {Promise}
   */
  _get(url, config = {}) {
    return axios(Object.assign({
      method: 'GET',
      url,
    }, config));
  }

  /**
   * Makes a POST request.
   * @param {String} url    The request URL.
   * @param {Object} data   The data you want to send as the request body.
   * @param {Object} config A config object that will be merged with the default request data.
   * @return {Promise}
   */
  _post(url, data, config = {}) {
    return axios(Object.assign({
      method: 'POST',
      url,
      data,
    }, config));
  }
}

export default Api;
