/**
 * @module services
 */
/** Http calls from peer url. */

import { Observable } from 'rxjs/Observable';

import { RxHR, RxHttpRequest } from '@akanass/rx-http-request';
import 'rxjs/add/operator/map';

import { TypedJSON } from 'typedjson-npm';

import * as model from '../model/models';

/**
 * Convert property from interface to JSON
 */
function formatParams(params: any): any {
  if (!params) {
    return;
  }

  const options = JSON.parse(JSON.stringify(params));

  return { qs: options };
}

/**
 * Convert JSON response to specific interface.
 */
function formatResponse(response: any, responseType: any) {
  return TypedJSON.parse(response.body, responseType);
}

export default class Http {

  private baseRequest: RxHttpRequest;

  public constructor(public network: model.Network) {
    this.baseRequest = RxHR.defaults({
      baseUrl: network.getPeerUrl() + '/api',
      headers: {
        nethash: network.nethash,
        port: network.activePeer.port,
        version: network.version,
      },
      json: true,
    });
  }

  public getNative<T>(url: string, params?: any, responseType?: T): Observable<T> {
    return RxHR.get(url, formatParams(params))
               .map((data) => formatResponse(data, responseType));
  }

  public get<T>(url: string, params?: any, responseType?: T): Observable<T> {
    return this.baseRequest.get(url, formatParams(params))
                           .map((data) => formatResponse(data, responseType));
  }

  public post<T>(url: string, body: any, responseType?: T): Observable<T> {
    const options = {
      form: body,
      json: true,
    };

    return this.baseRequest.post(url, options)
                           .map((data) => formatResponse(data, responseType));
  }

  public put(url: string, data: any) {
    const options = {
      json: data,
    };

    return this.baseRequest.put(url, options);
  }

}